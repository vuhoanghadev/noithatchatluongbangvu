/**
 * blog-edit.js - Xử lý chỉnh sửa bài viết
 */

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem đang ở trang quản lý bài viết không
  if (document.querySelector('.product-manager-container')) {
    // Khởi tạo trình soạn thảo
    initBlogEditor();

    // Khởi tạo sự kiện cho form bài viết
    initBlogFormEvents();

    // Khởi tạo sự kiện cho các tab
    initTabEvents();

    // Khởi tạo sự kiện cho nút đóng modal
    initModalEvents();

    // Khởi tạo sự kiện cho modal xác nhận
    initConfirmModalEvents();
  }
});

// Hàm khởi tạo trình soạn thảo
function initBlogEditor() {
  const editor = document.getElementById('blog-content-editor');
  const editorButtons = document.querySelectorAll('.editor-btn');
  const editorSelects = document.querySelectorAll('.editor-select');

  if (!editor) return;

  // Xử lý các nút trong thanh công cụ
  editorButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const command = this.getAttribute('data-command');

      if (command === 'createLink') {
        const url = prompt('Nhập URL liên kết:', 'https://');
        if (url) {
          document.execCommand(command, false, url);
        }
      } else if (command === 'insertImage') {
        const url = prompt('Nhập URL hình ảnh:', 'https://');
        if (url) {
          document.execCommand(command, false, url);

          // Thêm thuộc tính loading="lazy" và alt cho hình ảnh
          const images = editor.querySelectorAll('img');
          images.forEach((img) => {
            if (!img.getAttribute('loading')) {
              img.setAttribute('loading', 'lazy');
            }
            if (!img.getAttribute('alt')) {
              img.setAttribute('alt', 'Hình ảnh bài viết');
            }
          });
        }
      } else {
        document.execCommand(command, false, null);
      }

      // Cập nhật nội dung vào textarea ẩn
      updateHiddenContent();
    });
  });

  // Xử lý các dropdown trong thanh công cụ
  editorSelects.forEach((select) => {
    select.addEventListener('change', function () {
      const command = this.getAttribute('data-command');
      const value = this.value;

      document.execCommand(command, false, value);

      // Cập nhật nội dung vào textarea ẩn
      updateHiddenContent();

      // Reset giá trị của dropdown (chỉ áp dụng cho formatBlock)
      if (command === 'formatBlock') {
        setTimeout(() => {
          this.value = 'p';
        }, 100);
      }
    });
  });

  // Cập nhật nội dung khi người dùng nhập
  editor.addEventListener('input', updateHiddenContent);
  editor.addEventListener('blur', updateHiddenContent);

  // Làm cho thanh công cụ cố định khi cuộn
  makeToolbarSticky();
}

// Hàm cập nhật nội dung từ trình soạn thảo vào textarea ẩn
function updateHiddenContent() {
  const editor = document.getElementById('blog-content-editor');
  const textarea = document.getElementById('blog-content');

  if (editor && textarea) {
    textarea.value = editor.innerHTML;
  }
}

// Hàm làm cho thanh công cụ cố định khi cuộn
function makeToolbarSticky() {
  const toolbar = document.querySelector('.simple-editor-toolbar');
  const editor = document.getElementById('blog-content-editor');

  if (!toolbar || !editor) return;

  const toolbarTop = toolbar.offsetTop;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const editorRect = editor.getBoundingClientRect();

    if (
      scrollTop > toolbarTop &&
      editorRect.top < 0 &&
      editorRect.bottom > toolbar.offsetHeight
    ) {
      toolbar.classList.add('sticky');
      editor.style.paddingTop = toolbar.offsetHeight + 'px';
    } else {
      toolbar.classList.remove('sticky');
      editor.style.paddingTop = '0';
    }
  });
}

// Hàm khởi tạo sự kiện cho form bài viết
function initBlogFormEvents() {
  const blogForm = document.getElementById('blog-form');
  const cancelBtn = document.getElementById('cancel-btn');
  const fillSampleBtn = document.getElementById('fill-sample-btn');

  // Xử lý sự kiện submit form
  if (blogForm) {
    blogForm.addEventListener('submit', function (e) {
      e.preventDefault();
      saveBlog();
    });
  }

  // Xử lý nút hủy
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      const modal = document.getElementById('blog-modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Xử lý nút điền thông tin mẫu
  if (fillSampleBtn) {
    fillSampleBtn.addEventListener('click', function () {
      fillSampleBlogData();
    });
  }
}

// Hàm lưu bài viết
function saveBlog() {
  // Lấy dữ liệu từ form
  const blogId = document.getElementById('blog-id').value;
  const blogTitle = document.getElementById('blog-title').value;
  const blogCategory = document.getElementById('blog-category').value;
  const blogDate = document.getElementById('blog-date').value;
  const blogExcerpt = document.getElementById('blog-excerpt').value;
  const blogImage = document.getElementById('blog-image').value;
  const blogViews = document.getElementById('blog-views').value;
  const blogContent = document.getElementById('blog-content').value;
  const blogAuthor = document.getElementById('blog-author').value;
  const blogAuthorAvatar = document.getElementById('blog-author-avatar').value;
  const blogAuthorBio = document.getElementById('blog-author-bio').value;
  const blogAuthorVerified = document.getElementById(
    'blog-author-verified'
  ).value;
  const blogAuthorJob = document.getElementById('blog-author-job').value;
  const blogAuthorExperience = document.getElementById(
    'blog-author-experience'
  ).value;
  const blogAuthorProjects = document.getElementById(
    'blog-author-projects'
  ).value;
  const blogAuthorRating = document.getElementById('blog-author-rating').value;

  // Kiểm tra các trường bắt buộc
  if (!blogTitle || !blogCategory || !blogAuthor) {
    showNotification('Vui lòng điền đầy đủ thông tin bắt buộc', 'error');
    return;
  }

  // Tạo đối tượng bài viết
  const post = {
    id: blogId ? parseInt(blogId) : generateNewBlogId(),
    title: blogTitle,
    category: blogCategory,
    author: blogAuthor,
    authorAvatar: blogAuthorAvatar,
    blogDate: blogDate,
    authorBio: blogAuthorBio,
    authorVerified: blogAuthorVerified,
    authorJob: blogAuthorJob,
    authorExperience: blogAuthorExperience
      ? parseInt(blogAuthorExperience)
      : undefined,
    authorProjects: blogAuthorProjects
      ? parseInt(blogAuthorProjects)
      : undefined,
    authorRating: blogAuthorRating ? parseFloat(blogAuthorRating) : undefined,
    image: blogImage,
    excerpt: blogExcerpt,
    content: blogContent,
    views: blogViews ? parseInt(blogViews) : 0,
  };

  // Kiểm tra xem là thêm mới hay cập nhật
  if (blogId) {
    // Cập nhật bài viết
    const index = allPosts.findIndex((p) => p.id === parseInt(blogId));
    if (index !== -1) {
      allPosts[index] = post;
      showNotification('Cập nhật bài viết thành công', 'success');
    } else {
      showNotification('Không tìm thấy bài viết để cập nhật', 'error');
    }
  } else {
    // Thêm bài viết mới
    allPosts.push(post);
    showNotification('Thêm bài viết mới thành công', 'success');
  }

  // Đóng modal
  const modal = document.getElementById('blog-modal');
  if (modal) {
    modal.style.display = 'none';
  }

  // Cập nhật lại danh sách bài viết
  filterBlogs();
}

// Hàm tạo ID mới cho bài viết
function generateNewBlogId() {
  if (allPosts.length === 0) return 1;
  return Math.max(...allPosts.map((post) => post.id)) + 1;
}

// Hàm điền thông tin mẫu cho bài viết
function fillSampleBlogData() {
  // Thông tin cơ bản
  document.getElementById('blog-title').value =
    'Xu Hướng Nội Thất Mới Nhất Năm 2025';
  document.getElementById('blog-category').value = 'Xu hướng';
  document.getElementById('blog-date').value = '15/05/2025';
  document.getElementById('blog-excerpt').value =
    'Khám phá những xu hướng nội thất mới nhất và hot nhất năm 2025 để cập nhật không gian sống của bạn.';
  document.getElementById('blog-image').value =
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  document.getElementById('blog-views').value = '0';

  // Nội dung bài viết
  const sampleContent = `
    <h2>Xu Hướng Nội Thất Mới Nhất Năm 2025</h2>
    <p>Năm 2025 đánh dấu sự chuyển mình mạnh mẽ trong lĩnh vực thiết kế nội thất với nhiều xu hướng mới mẻ và sáng tạo. Hãy cùng khám phá những xu hướng nổi bật nhất để cập nhật không gian sống của bạn.</p>

    <h3>1. Thiết kế bền vững và thân thiện với môi trường</h3>
    <p>Xu hướng sử dụng vật liệu tái chế, thân thiện với môi trường ngày càng được ưa chuộng. Các sản phẩm nội thất được làm từ gỗ tái chế, nhựa tái chế, hoặc các vật liệu tự nhiên như tre, mây đang trở thành lựa chọn hàng đầu của nhiều gia đình.</p>
    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nội thất bền vững" loading="lazy">

    <h3>2. Không gian đa chức năng</h3>
    <p>Với xu hướng nhà ở có diện tích nhỏ hơn, nội thất đa chức năng trở thành giải pháp tối ưu. Bàn làm việc có thể gập lại, giường kết hợp tủ quần áo, hay sofa biến thành giường ngủ là những ví dụ điển hình cho xu hướng này.</p>

    <h3>3. Màu sắc tự nhiên và trung tính</h3>
    <p>Các tông màu trung tính như be, nâu đất, xám và xanh olive đang thống trị trong thiết kế nội thất. Những gam màu này tạo cảm giác gần gũi với thiên nhiên, mang lại sự bình yên và thư giãn cho không gian sống.</p>
  `;
  setEditorContent(sampleContent);

  // Thông tin tác giả
  document.getElementById('blog-author').value = 'Nguyễn Văn An';
  document.getElementById('blog-author-avatar').value =
    'https://i.pravatar.cc/150?img=11';
  document.getElementById('blog-author-bio').value =
    'Nguyễn Văn An là chuyên gia thiết kế nội thất với hơn 10 năm kinh nghiệm. Anh đã thực hiện nhiều dự án lớn nhỏ và thường xuyên cập nhật các xu hướng mới nhất trong ngành.';
  document.getElementById('blog-author-verified').value = 'Chuyên gia';
  document.getElementById('blog-author-job').value =
    'Chuyên gia thiết kế nội thất';
  document.getElementById('blog-author-experience').value = '10';
  document.getElementById('blog-author-projects').value = '150';
  document.getElementById('blog-author-rating').value = '4.8';
}

// Hàm khởi tạo sự kiện cho các tab
function initTabEvents() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (!tabButtons.length || !tabContents.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Xóa class active khỏi tất cả các tab
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Thêm class active cho tab được chọn
      this.classList.add('active');

      // Hiển thị nội dung tab tương ứng
      const tabId = this.getAttribute('data-tab');
      const tabContent = document.getElementById(tabId);
      if (tabContent) {
        tabContent.classList.add('active');
      }
    });
  });
}

// Hàm khởi tạo sự kiện cho modal
function initModalEvents() {
  // Xử lý nút đóng modal
  const closeButtons = document.querySelectorAll('.modal .close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Đóng modal khi click bên ngoài
  window.addEventListener('click', function (event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  });

  // Xử lý nút chuyển đổi chế độ toàn màn hình
  const toggleFullscreenBtn = document.getElementById('toggle-fullscreen');
  if (toggleFullscreenBtn) {
    toggleFullscreenBtn.addEventListener('click', function () {
      const modalContent = this.closest('.modal-content');
      if (modalContent) {
        modalContent.classList.toggle('fullscreen');

        // Thay đổi biểu tượng
        const icon = this.querySelector('i');
        if (icon) {
          if (modalContent.classList.contains('fullscreen')) {
            icon.className = 'fas fa-compress';
            this.setAttribute('title', 'Thu nhỏ');
          } else {
            icon.className = 'fas fa-expand';
            this.setAttribute('title', 'Toàn màn hình');
          }
        }
      }
    });
  }
}

// Hàm khởi tạo sự kiện cho modal xác nhận
function initConfirmModalEvents() {
  const confirmModal = document.getElementById('confirm-modal');
  const confirmOkBtn = document.getElementById('confirm-ok');
  const confirmCancelBtn = document.getElementById('confirm-cancel');
  const closeBtn = confirmModal ? confirmModal.querySelector('.close') : null;

  if (!confirmModal || !confirmOkBtn || !confirmCancelBtn) return;

  // Xử lý nút đóng
  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      confirmModal.style.display = 'none';
    });
  }

  // Xử lý nút hủy
  confirmCancelBtn.addEventListener('click', function () {
    confirmModal.style.display = 'none';
  });

  // Đóng modal khi click bên ngoài
  window.addEventListener('click', function (event) {
    if (event.target === confirmModal) {
      confirmModal.style.display = 'none';
    }
  });
}

// Hàm hiển thị modal xác nhận
function showConfirmModal(message, callback) {
  const confirmModal = document.getElementById('confirm-modal');
  const confirmMessage = document.getElementById('confirm-message');
  const confirmOkBtn = document.getElementById('confirm-ok');

  if (!confirmModal || !confirmMessage || !confirmOkBtn) return;

  // Hiển thị thông báo
  confirmMessage.textContent = message;

  // Xử lý nút xác nhận
  const oldCallback = confirmOkBtn.onclick;
  confirmOkBtn.onclick = function () {
    confirmModal.style.display = 'none';
    if (typeof callback === 'function') {
      callback();
    }
  };

  // Hiển thị modal
  confirmModal.style.display = 'block';
}

// Hàm hiển thị thông báo
function showNotification(message, type = 'info') {
  const notification = document.getElementById('notification');
  const notificationMessage = notification
    ? notification.querySelector('.notification-message')
    : null;
  const notificationIcon = notification
    ? notification.querySelector('.notification-icon')
    : null;

  if (!notification || !notificationMessage) return;

  // Thiết lập biểu tượng dựa trên loại thông báo
  if (notificationIcon) {
    notificationIcon.className = 'notification-icon';

    switch (type) {
      case 'success':
        notificationIcon.classList.add('fas', 'fa-check-circle');
        break;
      case 'error':
        notificationIcon.classList.add('fas', 'fa-exclamation-circle');
        break;
      case 'warning':
        notificationIcon.classList.add('fas', 'fa-exclamation-triangle');
        break;
      default:
        notificationIcon.classList.add('fas', 'fa-info-circle');
    }
  }

  // Thiết lập màu sắc dựa trên loại thông báo
  notification.className = 'notification';
  notification.classList.add(type);

  // Hiển thị thông báo
  notificationMessage.textContent = message;
  notification.classList.add('show');

  // Tự động ẩn thông báo sau 3 giây
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
