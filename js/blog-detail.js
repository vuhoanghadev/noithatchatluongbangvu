document.addEventListener('DOMContentLoaded', function () {
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
  document.getElementById('blog-date').textContent = formatDate(new Date());
  document.getElementById('blog-views').textContent = post.views || 0;
  document.getElementById('blog-image').src = post.image;
  document.getElementById('blog-image').alt = post.title;
  document.getElementById('blog-content').innerHTML = post.content;

  // Cập nhật thông tin tác giả
  document.getElementById('author-name').textContent = post.author || 'Admin';

  // Cập nhật tags
  updateTags(post.category);

  // Cập nhật điều hướng bài viết (prev/next)
  updatePostNavigation(postId);

  // Hiển thị sản phẩm liên quan
  displayRelatedProducts(post.relatedProducts || []);

  // Hiển thị bài viết liên quan
  displayRelatedPosts(postId, post.category);

  // Tăng lượt xem
  increaseViewCount(postId);

  // Khởi tạo nút Back to Top
  initBackToTop();

  // Khởi tạo chức năng chia sẻ
  initSocialShare(post);
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

// Hàm hiển thị sản phẩm liên quan
function displayRelatedProducts(relatedProductIds) {
  const container = document.getElementById('related-products');

  // Nếu không có sản phẩm liên quan, ẩn phần này
  if (!relatedProductIds || relatedProductIds.length === 0) {
    document.querySelector('.related-products-section').style.display = 'none';
    return;
  }

  // Giả lập dữ liệu sản phẩm
  const products = [
    {
      id: 1,
      name: 'Ghế Sofa Hiện Đại',
      image:
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww',
      promotion: 'Giảm 20%',
    },
    {
      id: 2,
      name: 'Bàn Ăn Gỗ Tự Nhiên',
      image:
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      promotion: '',
    },
    {
      id: 3,
      name: 'Tủ Quần Áo 4 Cánh',
      image:
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      promotion: 'Mới',
    },
    {
      id: 4,
      name: 'Kệ Tivi Phòng Khách',
      image:
        'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fHww',
      promotion: '',
    },
    {
      id: 5,
      name: 'Giường Ngủ Gỗ Sồi',
      image:
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      promotion: 'Giảm 15%',
    },
    {
      id: 6,
      name: 'Bàn Làm Việc Thông Minh',
      image:
        'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlfGVufDB8fDB8fHww',
      promotion: '',
    },
    {
      id: 7,
      name: 'Kệ Sách Đa Năng',
      image:
        'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      promotion: 'Mới',
    },
    {
      id: 8,
      name: 'Bàn Trang Điểm',
      image:
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D',
      promotion: '',
    },
  ];

  // Lọc sản phẩm liên quan
  const relatedProducts = products.filter((product) =>
    relatedProductIds.includes(product.id)
  );

  // Hiển thị tối đa 4 sản phẩm
  const productsToShow = relatedProducts.slice(0, 4);

  // Hiển thị sản phẩm
  container.innerHTML = productsToShow
    .map(
      (product) => `
        <div class="card">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <h4>${product.name}</h4>
            ${
              product.promotion
                ? `<span class="promo-badge">${product.promotion}</span>`
                : ''
            }
            <a href="product-details.html?id=${
              product.id
            }" class="btn-details">Xem chi tiết</a>
        </div>
    `
    )
    .join('');
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
  // Lấy dữ liệu lượt xem từ localStorage
  let viewsData = localStorage.getItem('blogPostViews');
  let views = viewsData ? JSON.parse(viewsData) : {};

  // Lấy dữ liệu phiên xem từ sessionStorage
  let viewedPosts = sessionStorage.getItem('viewedBlogPosts');
  let viewedPostsArray = viewedPosts ? JSON.parse(viewedPosts) : [];

  // Chỉ tăng lượt xem nếu bài viết chưa được xem trong phiên này
  if (!viewedPostsArray.includes(postId)) {
    // Tăng lượt xem
    views[postId] = (views[postId] || 0) + 1;

    // Lưu lại vào localStorage
    localStorage.setItem('blogPostViews', JSON.stringify(views));

    // Thêm bài viết vào danh sách đã xem trong phiên này
    viewedPostsArray.push(postId);
    sessionStorage.setItem('viewedBlogPosts', JSON.stringify(viewedPostsArray));
  }

  // Cập nhật hiển thị
  document.getElementById('blog-views').textContent = views[postId];
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
