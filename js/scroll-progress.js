/**
 * Scroll Progress Bar - Hiệu ứng thanh tiến độ cuộn
 * Hiển thị thanh tiến độ cuộn ở đầu trang để người dùng biết đã cuộn được bao nhiêu phần trăm của trang
 */

// Hàm tạo và cập nhật thanh tiến trình đọc
function createScrollProgressBar() {
  // Kiểm tra xem thanh tiến trình đã tồn tại chưa
  if (document.querySelector('.reading-progress-container')) {
    return; // Nếu đã tồn tại, không tạo lại
  }

  // Tạo các phần tử HTML cho thanh tiến trình
  const progressContainer = document.createElement('div');
  progressContainer.className = 'reading-progress-container';

  const progressBar = document.createElement('div');
  progressBar.className = 'reading-progress-bar';

  progressContainer.appendChild(progressBar);
  document.body.appendChild(progressContainer);

  // Thêm CSS cho thanh tiến trình
  const style = document.createElement('style');
  style.textContent = `
    .reading-progress-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: rgba(0, 0, 0, 0.1);
      z-index: 9999;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .reading-progress-container.visible {
      opacity: 1;
    }
    
    .reading-progress-bar {
      height: 100%;
      background: linear-gradient(90deg, #f97316, #0058dd);
      width: 0%;
      transition: width 0.1s ease;
    }
  `;
  document.head.appendChild(style);

  // Xử lý sự kiện cuộn
  window.addEventListener('scroll', function () {
    // Tính toán chiều cao của trang
    const windowHeight = window.innerHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    // Tính toán phần trăm đã cuộn
    const scrolled = scrollTop;
    const total = documentHeight - windowHeight;
    let progress = (scrolled / total) * 100;
    progress = Math.min(progress, 100); // Giới hạn tối đa là 100%

    // Hiển thị thanh tiến trình khi đã cuộn xuống một ít
    if (scrollTop > 100) {
      progressContainer.classList.add('visible');
    } else {
      progressContainer.classList.remove('visible');
    }

    // Cập nhật thanh tiến trình
    progressBar.style.width = `${progress}%`;
  });
}

// Khởi tạo thanh tiến độ cuộn khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  createScrollProgressBar();
});

// Khởi tạo khi trang được tải qua AJAX (nếu có)
document.addEventListener('ajaxPageLoaded', function () {
  createScrollProgressBar();
});

// Khởi tạo khi hoàn tất chuyển trang (nếu có)
document.addEventListener('page-transition-complete', function () {
  createScrollProgressBar();
});
