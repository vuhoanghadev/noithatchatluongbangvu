// Safari Scroll Fix for Products Page
function scrollToTopFix() {
  // Check if we're on Safari
  const isSafari =
    /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  if (isSafari) {
    // Cuộn lên đầu trang cho Safari
    // Sử dụng scrollTo(0, 0) để đảm bảo cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Đảm bảo cuộn hoàn tất bằng cách thực hiện lại sau một khoảng thời gian
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    // Thêm một lần cuộn nữa để đảm bảo
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  } else {
    // Sử dụng scrollIntoView cho các trình duyệt khác
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // Fallback nếu không tìm thấy phần tử
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}

// Thêm xử lý cho các nút phân trang trực tiếp
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra nếu đang ở trang products.html
  if (window.location.href.includes('products.html')) {
    // Kiểm tra nếu là Safari
    const isSafari =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

    if (isSafari) {
      // Thêm xử lý cho các nút phân trang
      function addScrollHandlers() {
        const paginationContainer = document.querySelector('.pagination');
        if (!paginationContainer) {
          // Thử lại sau 500ms nếu chưa tìm thấy phân trang
          setTimeout(addScrollHandlers, 500);
          return;
        }

        // Thêm sự kiện click cho tất cả các nút trong phân trang
        paginationContainer.addEventListener('click', function (e) {
          // Kiểm tra nếu click vào nút
          if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
            // Cuộn lên đầu trang ngay lập tức
            setTimeout(function () {
              window.scrollTo(0, 0);
            }, 10);

            // Đảm bảo cuộn hoàn tất
            setTimeout(function () {
              window.scrollTo(0, 0);
            }, 300);
          }
        });

        console.log('Safari pagination scroll handlers added');
      }

      // Thêm xử lý sau khi trang đã tải
      addScrollHandlers();
    }
  }
});
