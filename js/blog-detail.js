// Hàm xử lý trang chi tiết bài viết
function handleBlogDetail() {
  // Lọc các bài viết trùng lặp trước khi hiển thị
  if (typeof removeDuplicatePosts === 'function') {
    removeDuplicatePosts();
  }

  // Lấy ID bài viết từ URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  // Nếu không có ID hoặc ID không hợp lệ, chuyển hướng về trang blog
  if (!postId) {
    window.location.href = 'blog.html';
    return;
  }

  // Tìm bài viết theo ID
  const post = posts.find((p) => p.id === postId);

  // Nếu không tìm thấy bài viết, hiển thị thông báo lỗi
  if (!post) {
    document.getElementById('blog-content').innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Không tìm thấy bài viết</h3>
                <p>Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                <a href="blog.html" class="btn-back">Quay lại trang Blog</a>
            </div>
        `;
    return;
  }

  console.log(`Đang xử lý trang chi tiết bài viết ID: ${postId}`);

  // Cập nhật tiêu đề trang
  document.title = `${post.title} - Nội Thất Chất Lượng Bàng Vũ`;

  // Cập nhật meta tags
  updateMetaTags(post);

  // Cập nhật breadcrumb
  document.getElementById('breadcrumb-title').textContent = post.title;

  // Cập nhật nội dung bài viết
  document.getElementById('blog-category').textContent = post.category;
  document.getElementById('blog-title').textContent = post.title;
  document.getElementById('blog-author').textContent = post.author || 'Admin';
  document.getElementById('blog-date').textContent =
    post.blogDate || formatDate(new Date());

  // Lấy lượt xem từ localStorage hoặc từ dữ liệu trong blog.js
  let viewsData = localStorage.getItem('blogPostViews');
  let views = viewsData ? JSON.parse(viewsData) : {};

  // Lấy baseViews từ localStorage
  let baseViewsData = localStorage.getItem('previousBaseViews');
  let baseViews = baseViewsData ? JSON.parse(baseViewsData) : {};

  // Khởi tạo baseViews nếu chưa có
  if (post.baseViews === undefined) {
    post.baseViews = post.views || 0;
    post.views = 0;
  }

  // Luôn ưu tiên baseViews từ blog.js và ghi đè lên giá trị trong localStorage
  baseViews[postId] = post.baseViews;
  localStorage.setItem('previousBaseViews', JSON.stringify(baseViews));
  console.log(
    `Cập nhật baseViews cho bài viết ID ${postId}: ${post.baseViews}`
  );

  // Kiểm tra xem lượt xem trong localStorage có khớp với lượt xem trong blog.js không
  // Nếu lượt xem trong blog.js lớn hơn, có nghĩa là admin đã cập nhật
  if (!views[postId] || post.views > views[postId]) {
    // Đồng bộ lượt xem từ blog.js vào localStorage
    views[postId] = post.views;
    localStorage.setItem('blogPostViews', JSON.stringify(views));
  }

  // Tính tổng lượt xem = baseViews + lượt xem từ người dùng
  const totalViews =
    (baseViews[postId] || post.baseViews || 0) + (views[postId] || 0);

  // Hiển thị tổng lượt xem
  document.getElementById('blog-views').textContent = totalViews;

  document.getElementById('blog-image').src = post.image;
  document.getElementById('blog-image').alt = post.title;
  document.getElementById('blog-content').innerHTML = post.content;

  // Cập nhật thông tin tác giả
  const authorNameElement = document.getElementById('author-name');
  if (authorNameElement) {
    // Lưu trữ badge để giữ lại
    const badge = authorNameElement.querySelector('.verified-badge');
    // Xóa nội dung hiện tại
    authorNameElement.innerHTML = '';
    // Thêm tên tác giả
    authorNameElement.textContent = post.author || 'Admin';
    // Thêm lại badge
    if (badge) {
      // Cập nhật trạng thái verified và nội dung
      if (post.authorVerified) {
        badge.style.display = 'inline-flex';

        // Cập nhật nội dung badge
        const badgeText = badge.querySelector('span') || badge.lastChild;
        if (badgeText && badgeText.nodeType === Node.TEXT_NODE) {
          // Nếu là text node, cập nhật trực tiếp
          badgeText.textContent = post.authorVerified;
        } else if (badgeText) {
          // Nếu là element, cập nhật nội dung
          badgeText.textContent = post.authorVerified;
        } else {
          // Nếu không tìm thấy, thêm text node mới
          const icon = badge.querySelector('i');
          if (icon) {
            // Xóa nội dung cũ và thêm lại icon + text mới
            badge.innerHTML = '';
            badge.appendChild(icon.cloneNode(true));
            badge.appendChild(
              document.createTextNode(' ' + post.authorVerified)
            );
          } else {
            badge.textContent = post.authorVerified;
          }
        }
      } else {
        badge.style.display = 'none';
      }
      authorNameElement.appendChild(badge);
    }
  }

  // Cập nhật ảnh đại diện tác giả
  if (post.authorAvatar) {
    const avatarElement = document.getElementById('author-avatar');
    if (avatarElement) {
      avatarElement.src = post.authorAvatar;
    }
  }

  // Cập nhật mô tả tác giả
  if (post.authorBio) {
    const bioElement = document.getElementById('author-bio');
    if (bioElement) {
      bioElement.textContent = post.authorBio;
    }
  }

  // Cập nhật nghề nghiệp tác giả
  const authorJobElement = document.querySelector(
    '.author-title span:first-child i'
  );
  if (authorJobElement && authorJobElement.parentElement) {
    const jobTextNode = authorJobElement.nextSibling;
    if (jobTextNode) {
      jobTextNode.textContent = ' ' + (post.authorJob || 'Chuyên gia nội thất');
    }
  }

  // Cập nhật thông tin kinh nghiệm
  const experienceElement = document.querySelector(
    '.author-stat:nth-child(1) .author-stat-value'
  );
  if (experienceElement) {
    experienceElement.textContent = (post.authorExperience || '5') + '+';
  }

  // Cập nhật thông tin dự án
  const projectsElement = document.querySelector(
    '.author-stat:nth-child(2) .author-stat-value'
  );
  if (projectsElement) {
    projectsElement.textContent = (post.authorProjects || '100') + '+';
  }

  // Cập nhật thông tin đánh giá
  const ratingElement = document.querySelector(
    '.author-stat:nth-child(3) .author-stat-value'
  );
  if (ratingElement) {
    ratingElement.textContent = post.authorRating || '4.5';
  }

  // Cập nhật số bài viết của tác giả
  const postCountElement = document.getElementById('author-post-count');
  if (postCountElement) {
    // Đếm số bài viết có cùng tác giả
    const authorName = post.author || 'Admin';
    const authorPosts = posts.filter(
      (p) => (p.author || 'Admin') === authorName
    ).length;
    postCountElement.textContent = authorPosts;
  }

  // Cập nhật tags
  updateTags(post.category);

  // Cập nhật điều hướng bài viết (prev/next)
  updatePostNavigation(postId);

  // Ẩn phần sản phẩm liên quan
  document.querySelector('.related-products-section').style.display = 'none';

  // Hiển thị bài viết liên quan
  displayRelatedPosts(postId, post.category);

  // Tăng lượt xem
  increaseViewCount(postId);

  // Khởi tạo nút Back to Top
  initBackToTop();

  // Khởi tạo chức năng chia sẻ
  initSocialShare(post);

  // Khởi tạo chức năng "Xem thêm bài viết" của tác giả
  initAuthorMorePosts(post);
}

// Khi trang được tải ban đầu
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem có phải trang blog-detail không
  if (window.location.pathname.includes('blog-detail.html')) {
    handleBlogDetail();
  }
});

// Khi trang được tải qua AJAX (page transitions)
document.addEventListener('ajaxPageLoaded', function (event) {
  // Kiểm tra xem có phải trang blog-detail không
  if (event.detail.url.includes('blog-detail.html')) {
    console.log('Trang blog-detail được tải qua AJAX:', event.detail.url);
    handleBlogDetail();
  }
});

// Khi hoàn tất chuyển trang
document.addEventListener('page-transition-complete', function (event) {
  // Kiểm tra xem có phải trang blog-detail không
  if (event.detail.url.includes('blog-detail.html')) {
    console.log('Chuyển trang đến blog-detail hoàn tất:', event.detail.url);
    // Đảm bảo rằng các phần tử đã được tạo trước khi xử lý
    setTimeout(handleBlogDetail, 100);
  }
});

// Hàm cập nhật meta tags
function updateMetaTags(post) {
  // Cập nhật Open Graph tags
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute('content', `${post.title} - Nội Thất Chất Lượng Bàng Vũ`);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute('content', post.excerpt);
  document
    .querySelector('meta[property="og:image"]')
    .setAttribute('content', post.image);

  // Cập nhật Twitter tags
  document
    .querySelector('meta[property="twitter:title"]')
    .setAttribute('content', `${post.title} - Nội Thất Chất Lượng Bàng Vũ`);
  document
    .querySelector('meta[property="twitter:description"]')
    .setAttribute('content', post.excerpt);
  document
    .querySelector('meta[property="twitter:image"]')
    .setAttribute('content', post.image);

  // Cập nhật meta description
  document
    .querySelector('meta[name="description"]')
    .setAttribute('content', post.excerpt);
}

// Hàm định dạng ngày tháng
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Hàm cập nhật tags
function updateTags(category) {
  const tagsContainer = document.getElementById('blog-tags');

  // Tạo các tags dựa trên danh mục
  const tags = [category, 'Nội thất', 'Thiết kế', 'Không gian sống'];

  // Hiển thị tags
  tagsContainer.innerHTML = tags
    .map(
      (tag) => `
        <a href="blog.html?category=${encodeURIComponent(tag)}">${tag}</a>
    `
    )
    .join('');
}

// Hàm cập nhật điều hướng bài viết
function updatePostNavigation(currentPostId) {
  // Lọc ra các bài viết có ID duy nhất
  const uniquePosts = [];
  const uniqueIds = new Set();

  posts.forEach((post) => {
    if (!uniqueIds.has(post.id)) {
      uniquePosts.push(post);
      uniqueIds.add(post.id);
    }
  });

  // Sắp xếp bài viết theo ID
  uniquePosts.sort((a, b) => a.id - b.id);

  // Tìm vị trí của bài viết hiện tại
  const currentIndex = uniquePosts.findIndex(
    (post) => post.id === currentPostId
  );

  // Nếu không tìm thấy, thoát
  if (currentIndex === -1) return;

  const prevPost = document.getElementById('prev-post');
  const nextPost = document.getElementById('next-post');

  // Cập nhật bài viết trước
  if (currentIndex > 0) {
    const prev = uniquePosts[currentIndex - 1];
    prevPost.href = `blog-detail.html?id=${prev.id}`;
    prevPost.querySelector('h4').textContent = prev.title;
  } else {
    prevPost.style.visibility = 'hidden';
  }

  // Cập nhật bài viết tiếp theo
  if (currentIndex < uniquePosts.length - 1) {
    const next = uniquePosts[currentIndex + 1];
    nextPost.href = `blog-detail.html?id=${next.id}`;
    nextPost.querySelector('h4').textContent = next.title;
  } else {
    nextPost.style.visibility = 'hidden';
  }
}

// Hàm hiển thị bài viết liên quan
function displayRelatedPosts(currentPostId, category) {
  const container = document.getElementById('related-posts');

  // Lọc ra các bài viết có ID duy nhất
  const uniquePosts = [];
  const uniqueIds = new Set();

  posts.forEach((post) => {
    if (!uniqueIds.has(post.id)) {
      uniquePosts.push(post);
      uniqueIds.add(post.id);
    }
  });

  // Lọc bài viết liên quan (cùng danh mục, khác ID hiện tại)
  const relatedPosts = uniquePosts.filter(
    (post) => post.id !== currentPostId && post.category === category
  );

  // Nếu không có bài viết liên quan, ẩn phần này
  if (relatedPosts.length === 0) {
    document.querySelector('.related-posts-section').style.display = 'none';
    return;
  }

  // Hiển thị tối đa 3 bài viết
  const postsToShow = relatedPosts.slice(0, 3);

  // Hiển thị bài viết
  container.innerHTML = postsToShow
    .map(
      (post) => `
        <div class="card">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
            <h4>${post.title}</h4>
            <a href="blog-detail.html?id=${post.id}" class="btn-read-more">Đọc thêm</a>
        </div>
    `
    )
    .join('');
}

// Hàm tăng lượt xem
function increaseViewCount(postId) {
  // Tìm bài viết theo ID
  const post = posts.find((p) => p.id === postId);
  if (!post) return;

  // Chuyển postId thành chuỗi để đảm bảo tính nhất quán
  const postIdStr = postId.toString();

  // Lấy dữ liệu lượt xem từ localStorage
  let viewsData = localStorage.getItem('blogPostViews');
  let views = viewsData ? JSON.parse(viewsData) : {};

  // Lấy baseViews từ localStorage
  let baseViewsData = localStorage.getItem('previousBaseViews');
  let baseViews = baseViewsData ? JSON.parse(baseViewsData) : {};

  // Khởi tạo baseViews nếu chưa có
  if (post.baseViews === undefined) {
    post.baseViews = post.views || 0;
    post.views = 0;
  }

  // Luôn ưu tiên baseViews từ blog.js và ghi đè lên giá trị trong localStorage
  baseViews[postIdStr] = post.baseViews;
  localStorage.setItem('previousBaseViews', JSON.stringify(baseViews));
  console.log(
    `Cập nhật baseViews cho bài viết ID ${postIdStr}: ${post.baseViews}`
  );

  // Lấy danh sách bài viết đã xem từ localStorage
  let viewedPostsData = localStorage.getItem('viewedBlogPosts');
  let viewedPosts = viewedPostsData ? JSON.parse(viewedPostsData) : {};

  // Kiểm tra xem admin đã cập nhật lượt xem thủ công trong blog.js
  if (post.views && (!views[postIdStr] || post.views > views[postIdStr])) {
    // Cập nhật lượt xem trong localStorage
    views[postIdStr] = post.views;
    localStorage.setItem('blogPostViews', JSON.stringify(views));
    console.log(
      `Admin đã cập nhật lượt xem cho bài viết ID ${postIdStr}: ${post.views}`
    );
  }
  // Nếu đã có lượt xem trong localStorage, sử dụng giá trị đó
  else if (views[postIdStr]) {
    post.views = views[postIdStr];
  }

  // Tính tổng lượt xem hiện tại
  const currentTotalViews =
    (baseViews[postIdStr] || post.baseViews || 0) + (views[postIdStr] || 0);

  // Debug: In ra giá trị lượt xem hiện tại
  console.log(
    `Lượt xem cơ sở của bài viết ID ${postIdStr}: ${
      baseViews[postIdStr] || post.baseViews || 0
    }`
  );
  console.log(
    `Lượt xem người dùng của bài viết ID ${postIdStr}: ${views[postIdStr] || 0}`
  );
  console.log(`Tổng lượt xem hiện tại: ${currentTotalViews}`);
  console.log(`viewedPosts[${postIdStr}] = ${viewedPosts[postIdStr]}`);

  // Kiểm tra xem người dùng đã từng xem bài viết này chưa
  if (!viewedPosts[postIdStr]) {
    // Tăng lượt xem lên 1
    post.views = (post.views || 0) + 1;

    // Cập nhật lượt xem trong localStorage
    views[postIdStr] = post.views;
    localStorage.setItem('blogPostViews', JSON.stringify(views));

    // Đánh dấu bài viết đã được xem
    viewedPosts[postIdStr] = true;
    localStorage.setItem('viewedBlogPosts', JSON.stringify(viewedPosts));

    // Tính tổng lượt xem mới
    const newTotalViews =
      (baseViews[postIdStr] || post.baseViews || 0) + post.views;

    console.log(
      `Tăng lượt xem cho bài viết ID ${postIdStr} lên ${post.views} (tổng: ${newTotalViews})`
    );

    // Cập nhật hiển thị với hiệu ứng đếm số
    const viewsElement = document.getElementById('blog-views');
    if (viewsElement) {
      animateCountUp(viewsElement, currentTotalViews, newTotalViews);
    }
  } else {
    console.log(
      `Người dùng đã xem bài viết ID ${postIdStr} trước đó, giữ nguyên lượt xem: ${post.views} (tổng: ${currentTotalViews})`
    );

    // Hiển thị tổng lượt xem
    document.getElementById('blog-views').textContent = currentTotalViews;
  }
}

/**
 * Hiệu ứng đếm số tăng dần
 * @param {HTMLElement} element - Phần tử hiển thị số
 * @param {number} start - Giá trị bắt đầu
 * @param {number} end - Giá trị kết thúc
 */
function animateCountUp(element, start, end) {
  // Thêm class để đánh dấu đang có hiệu ứng
  element.classList.add('count-animation');

  let current = start;
  const increment = Math.max(1, Math.ceil((end - start) / 10)); // Tăng ít nhất 1, tối đa 1/10 khoảng cách
  const timer = setInterval(() => {
    current += increment;

    // Nếu đã đạt hoặc vượt quá giá trị kết thúc
    if (current >= end) {
      element.textContent = end;
      element.classList.add('highlight');
      clearInterval(timer);

      // Xóa highlight sau 1 giây
      setTimeout(() => {
        element.classList.remove('highlight');
        element.classList.remove('count-animation');
      }, 1000);
    } else {
      element.textContent = current;
    }
  }, 200);
}

// Hàm khởi tạo nút Back to Top
function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');

  // Hiển thị/ẩn nút khi cuộn
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });

  // Xử lý sự kiện click
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

// Hàm khởi tạo chức năng chia sẻ
function initSocialShare(post) {
  // Lấy URL hiện tại
  const currentUrl = window.location.href;

  // Hàm chia sẻ lên Facebook
  window.shareOnFacebook = function () {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  // Hàm chia sẻ lên Twitter
  window.shareOnTwitter = function () {
    const text = `${post.title} - Nội Thất Chất Lượng Bàng Vũ`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  // Hàm chia sẻ lên LinkedIn
  window.shareOnLinkedIn = function () {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      currentUrl
    )}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  // Hàm chia sẻ lên Pinterest
  window.shareOnPinterest = function () {
    const url = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
      currentUrl
    )}&media=${encodeURIComponent(post.image)}&description=${encodeURIComponent(
      post.title
    )}`;
    window.open(url, '_blank', 'width=600,height=400');
  };
}

/**
 * Khởi tạo chức năng "Xem thêm bài viết" của tác giả
 * @param {Object} currentPost - Bài viết hiện tại
 */
function initAuthorMorePosts(currentPost) {
  // Tìm nút "Xem thêm bài viết"
  const authorMoreButton = document.querySelector('.author-more');

  if (!authorMoreButton) return;

  // Lấy tên tác giả của bài viết hiện tại
  const authorName = currentPost.author || 'Admin';

  // Lọc các bài viết khác của cùng tác giả (trừ bài viết hiện tại)
  const authorPosts = posts.filter(
    (post) =>
      (post.author || 'Admin') === authorName && post.id !== currentPost.id
  );

  // Nếu không có bài viết nào khác của tác giả này
  if (authorPosts.length === 0) {
    // Ẩn hoặc vô hiệu hóa nút
    authorMoreButton.style.opacity = '0.5';
    authorMoreButton.style.pointerEvents = 'none';
    authorMoreButton.title = 'Không có bài viết nào khác của tác giả này';
    return;
  }

  // Thêm sự kiện click cho nút
  authorMoreButton.addEventListener('click', function (e) {
    e.preventDefault();

    // Chọn ngẫu nhiên một bài viết khác của tác giả
    const randomIndex = Math.floor(Math.random() * authorPosts.length);
    const randomPost = authorPosts[randomIndex];

    // Chuyển hướng đến bài viết đó
    window.location.href = `blog-detail.html?id=${randomPost.id}`;
  });

  // Cập nhật nội dung nút để hiển thị số lượng bài viết khác của tác giả
  authorMoreButton.innerHTML = `Xem thêm bài viết (${authorPosts.length}) <i class="fas fa-arrow-right"></i>`;

  // Thêm tooltip để hiển thị thông tin hữa ích
  authorMoreButton.title = `Xem ngẫu nhiên một bài viết khác của ${authorName}`;
}
