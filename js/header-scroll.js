document.addEventListener('DOMContentLoaded', function () {
  const announcementBanner = document.querySelector('.announcement-banner');
  const mainHeader = document.querySelector('.main-header');
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  let lastScrollTop = 0;

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Ẩn announcement banner khi cuộn xuống quá 100px
    if (scrollTop > 100) {
      announcementBanner.classList.add('hidden');
      mainHeader.classList.add('announcement-hidden');
      mainHeader.classList.add('scrolled'); // Thêm class scrolled khi cuộn xuống

      // Đảm bảo trạng thái menu toggle được giữ nguyên khi cuộn trang
      if (menuToggle && mobileMenu && mobileMenu.classList.contains('active')) {
        menuToggle.classList.add('active');
      }
    } else {
      announcementBanner.classList.remove('hidden');
      mainHeader.classList.remove('announcement-hidden');
      mainHeader.classList.remove('scrolled'); // Bỏ class scrolled khi cuộn lên đầu trang

      // Đảm bảo trạng thái menu toggle được giữ nguyên khi cuộn trang
      if (menuToggle && mobileMenu && mobileMenu.classList.contains('active')) {
        menuToggle.classList.add('active');
      }
    }

    lastScrollTop = scrollTop;
  }

  // Gọi hàm handleScroll khi trang tải để áp dụng trạng thái ban đầu
  handleScroll();

  // Thêm sự kiện scroll
  window.addEventListener('scroll', handleScroll);
});
