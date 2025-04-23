/**
 * Blog Enhancements - Các tính năng nâng cao cho trang blog
 */

// Hàm tính thời gian đọc ước tính
function calculateReadingTime(content) {
  // Loại bỏ tất cả các thẻ HTML
  const text = content.replace(/<[^>]*>/g, '');

  // Đếm số từ (ước tính dựa trên khoảng trắng)
  const words = text.trim().split(/\s+/).length;

  // Tốc độ đọc trung bình: 200 từ/phút
  const readingTimeMinutes = Math.ceil(words / 200);

  return readingTimeMinutes;
}

// Hàm tạo mục lục tự động
function generateTableOfContents(content) {
  // Tạo một phần tử div tạm thời để phân tích nội dung HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = content;

  // Tìm tất cả các thẻ h2 và h3
  const headings = tempDiv.querySelectorAll('h2, h3');

  // Nếu không có heading nào, không tạo mục lục
  if (headings.length === 0) {
    return '';
  }

  // Tạo mục lục
  let tocHtml = `
    <div class="table-of-contents">
      <h3><i class="fas fa-list"></i> Mục lục</h3>
      <ul>
  `;

  // Thêm ID cho mỗi heading nếu chưa có và tạo liên kết trong mục lục
  headings.forEach((heading, index) => {
    const headingText = heading.textContent;
    const headingId = heading.id || `heading-${index}`;

    // Gán ID cho heading nếu chưa có
    if (!heading.id) {
      heading.id = headingId;
    }

    // Xác định cấp độ của heading
    const level = heading.tagName.toLowerCase();
    const levelClass = level === 'h3' ? 'toc-h3' : '';

    // Thêm mục vào mục lục
    tocHtml += `
      <li class="${levelClass}">
        <a href="#${headingId}">${headingText}</a>
      </li>
    `;
  });

  tocHtml += `
      </ul>
    </div>
  `;

  // Cập nhật nội dung gốc với các ID mới
  content = tempDiv.innerHTML;

  return {
    toc: tocHtml,
    updatedContent: content,
  };
}

// Hàm thêm thời gian đọc vào trang
function addReadingTime(content) {
  const readingTime = calculateReadingTime(content);
  const readingTimeHtml = `
    <div class="blog-read-time">
      <i class="far fa-clock"></i>
      <span>${readingTime} phút đọc</span>
    </div>
  `;

  // Thêm thời gian đọc vào blog-meta
  const blogMeta = document.querySelector('.blog-meta');
  if (blogMeta) {
    blogMeta.insertAdjacentHTML('beforeend', readingTimeHtml);
  }

  return readingTime;
}

// Hàm tạo nút chuyển đổi chế độ tối/sáng - đã bỏ
function createDarkModeToggle() {
  // Chức năng đã bỏ
  return;
}

// Hàm nâng cao trải nghiệm blog
function enhanceBlogDetail() {
  // Lấy nội dung bài viết
  const blogContent = document.getElementById('blog-content');
  if (!blogContent) return;

  const content = blogContent.innerHTML;

  // Thêm thời gian đọc
  addReadingTime(content);

  // Tạo mục lục
  const { toc, updatedContent } = generateTableOfContents(content);

  // Chèn mục lục vào đầu nội dung
  if (toc) {
    blogContent.innerHTML = toc + updatedContent;
  }

  // Thêm hiệu ứng cuộn mượt cho các liên kết neo
  document.querySelectorAll('.table-of-contents a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Trừ đi 100px để tránh bị che bởi header
          behavior: 'smooth',
        });
      }
    });
  });
}

// Hàm tạo nút chia sẻ thay thế cho phần chia sẻ trong bài viết
function createFloatingShareButtons() {
  // Tìm phần chia sẻ trong bài viết
  const originalShareSection = document.querySelector('.blog-social-share');
  if (!originalShareSection) return;

  // Lấy URL hiện tại và tiêu đề bài viết
  const url = window.location.href;
  const title = document.querySelector('.blog-title').textContent;
  const imageUrl = document.querySelector('#blog-image')?.src || '';

  // Tạo HTML mới cho phần chia sẻ
  const newShareHTML = `
    <div class="blog-social-share enhanced">
      <span>Chia sẻ:</span>
      <div class="social-buttons">
        <a href="#" class="facebook" id="share-facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="twitter" id="share-twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="linkedin" id="share-linkedin">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" class="pinterest" id="share-pinterest">
          <i class="fab fa-pinterest-p"></i>
        </a>
        <a href="#" class="copy" id="share-copy">
          <i class="far fa-copy"></i>
        </a>
      </div>
    </div>
  `;

  // Thay thế phần chia sẻ cũ bằng phần mới
  originalShareSection.outerHTML = newShareHTML;

  // Tạo thông báo sao chép
  const copyNotification = document.createElement('div');
  copyNotification.className = 'copy-notification';
  document.body.appendChild(copyNotification);

  // Thêm sự kiện cho các nút chia sẻ
  document
    .getElementById('share-facebook')
    .addEventListener('click', function (e) {
      e.preventDefault();
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        '_blank',
        'width=600,height=400'
      );
    });

  document
    .getElementById('share-twitter')
    .addEventListener('click', function (e) {
      e.preventDefault();
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`,
        '_blank',
        'width=600,height=400'
      );
    });

  document
    .getElementById('share-linkedin')
    .addEventListener('click', function (e) {
      e.preventDefault();
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`,
        '_blank',
        'width=600,height=400'
      );
    });

  document
    .getElementById('share-pinterest')
    .addEventListener('click', function (e) {
      e.preventDefault();
      window.open(
        `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
          url
        )}&media=${encodeURIComponent(
          imageUrl
        )}&description=${encodeURIComponent(title)}`,
        '_blank',
        'width=600,height=400'
      );
    });

  document.getElementById('share-copy').addEventListener('click', function (e) {
    e.preventDefault();
    navigator.clipboard.writeText(url).then(function () {
      showCopyNotification('Liên kết đã được sao chép vào clipboard!');
    });
  });
}

// Hàm hiển thị thông báo sao chép
function showCopyNotification(message) {
  const notification = document.querySelector('.copy-notification');
  notification.textContent = message;
  notification.classList.add('show');

  // Ẩn thông báo sau 2 giây
  setTimeout(function () {
    notification.classList.remove('show');
  }, 2000);
}

// Hàm kiểm tra xem bài viết đã được lưu chưa
function isPostSaved(url, savedPosts) {
  return savedPosts.some((post) => post.url === url);
}

// Hàm thêm bài viết vào danh sách đã lưu
function addPostToSaved(post, savedPosts) {
  // Kiểm tra xem bài viết đã tồn tại chưa
  if (isPostSaved(post.url, savedPosts)) {
    return savedPosts;
  }

  // Thêm bài viết mới
  return [...savedPosts, post];
}

// Hàm xóa bài viết khỏi danh sách đã lưu
function removePostFromSaved(url, savedPosts) {
  return savedPosts.filter((post) => post.url !== url);
}

// Hàm tạo tính năng lưu bài viết để đọc sau - đã bỏ và thay thế bằng saved-posts-manager.js
function createSaveForLaterFeature() {
  // Chức năng này đã bỏ và thay thế bằng saved-posts-manager.js
  console.log('Tính năng lưu bài viết cũ đã bỏ');
  return;
}

// Hàm lấy ID bài viết từ URL
function getPostIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}

// Hàm lấy danh sách bài viết đã lưu
function getSavedPosts() {
  const savedPosts = localStorage.getItem('savedBlogPosts');
  return savedPosts ? JSON.parse(savedPosts) : [];
}

// Hàm cập nhật trạng thái nút lưu bài viết
function updateSaveButtonState(button, isSaved) {
  if (isSaved) {
    button.innerHTML = '<i class="fas fa-bookmark"></i> Đã lưu';
    button.classList.add('saved');
  } else {
    button.innerHTML = '<i class="far fa-bookmark"></i> Lưu để đọc sau';
    button.classList.remove('saved');
  }
}

// Hàm tạo container cho danh sách bài viết đã lưu - đã bỏ và thay thế bằng saved-posts-manager.js
function createSavedPostsContainer() {
  // Chức năng này đã bỏ và thay thế bằng saved-posts-manager.js
  console.log('Tính năng tạo container danh sách bài viết cũ đã bỏ');
  return;
}

// Hàm cập nhật danh sách bài viết đã lưu - đã bỏ và thay thế bằng saved-posts-manager.js
function updateSavedPostsList(listElement) {
  // Chức năng này đã bỏ và thay thế bằng saved-posts-manager.js
  console.log('Tính năng cập nhật danh sách bài viết cũ đã bỏ');
  return;
}

// Hàm tạo nút hiển thị danh sách bài viết đã lưu - đã bỏ và thay thế bằng saved-posts-manager.js
function createSavedPostsToggle() {
  // Chức năng này đã bỏ và thay thế bằng saved-posts-manager.js
  console.log('Tính năng tạo nút hiển thị danh sách bài viết cũ đã bỏ');
  return;
}

// Hàm cập nhật số lượng bài viết đã lưu - đã bỏ và thay thế bằng saved-posts-manager.js
function updateSavedPostsCount() {
  // Chức năng này đã bỏ và thay thế bằng saved-posts-manager.js
  console.log('Tính năng cập nhật số lượng bài viết cũ đã bỏ');
  return;
}

// Hàm tạo và cập nhật thanh tiến trình đọc
function createReadingProgressBar() {
  // Tạo các phần tử HTML cho thanh tiến trình
  const progressContainer = document.createElement('div');
  progressContainer.className = 'reading-progress-container';

  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';

  progressContainer.appendChild(progressBar);
  document.body.appendChild(progressContainer);

  // Xử lý sự kiện cuộn
  window.addEventListener('scroll', function () {
    // Lấy chiều cao của nội dung bài viết
    const blogContent = document.getElementById('blog-content');
    if (!blogContent) return;

    const contentBox = blogContent.getBoundingClientRect();
    const contentTop = contentBox.top + window.scrollY;
    const contentHeight = blogContent.offsetHeight;

    // Tính toán vị trí cuộn hiện tại
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    // Hiển thị thanh tiến trình khi đã cuộn xuống một ít
    if (scrollPosition > 100) {
      progressContainer.classList.add('visible');
    } else {
      progressContainer.classList.remove('visible');
    }

    // Tính toán phần trăm đã đọc
    const scrollStart = Math.max(contentTop, 0);
    const scrollEnd = contentTop + contentHeight;
    const scrolled = Math.max(scrollPosition - scrollStart, 0);
    const total = scrollEnd - scrollStart - windowHeight;

    let progress = (scrolled / total) * 100;
    progress = Math.min(progress, 100); // Giới hạn tối đa là 100%

    // Cập nhật thanh tiến trình
    progressBar.style.width = `${progress}%`;
  });
}

// Khởi tạo các tính năng nâng cao khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('blog-detail.html')) {
    // Đợi một chút để đảm bảo nội dung bài viết đã được tải
    setTimeout(enhanceBlogDetail, 300);
    createReadingProgressBar();
    createFloatingShareButtons();
    // Tính năng lưu bài viết đã chuyển sang saved-posts-manager.js
    // createSaveForLaterFeature();
  }
});

// Khởi tạo khi trang được tải qua AJAX
document.addEventListener('ajaxPageLoaded', function (event) {
  if (event.detail.url.includes('blog-detail.html')) {
    setTimeout(enhanceBlogDetail, 300);
    createReadingProgressBar();
    createFloatingShareButtons();
    // Tính năng lưu bài viết đã chuyển sang saved-posts-manager.js
    // createSaveForLaterFeature();
  }
});

// Khởi tạo khi hoàn tất chuyển trang
document.addEventListener('page-transition-complete', function (event) {
  if (event.detail.url.includes('blog-detail.html')) {
    setTimeout(enhanceBlogDetail, 300);
    createReadingProgressBar();
    createFloatingShareButtons();
    // Tính năng lưu bài viết đã chuyển sang saved-posts-manager.js
    // createSaveForLaterFeature();
  }
});
