document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const header = document.querySelector('.main-header');

  // Header scroll effect
  function handleScroll() {
    if (window.scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);

  // Add CSS animations for menu bars
  const style = document.createElement('style');
  style.textContent = `
    @keyframes menuBarAnimation1 {
        0% { transform: translateY(0); }
        50% { transform: translateY(6px); }
        100% { transform: translateY(6px) rotate(45deg); }
    }
    @keyframes menuBarAnimation2 {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 0; }
    }
    @keyframes menuBarAnimation3 {
        0% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
        100% { transform: translateY(-6px) rotate(-45deg); }
    }
  `;
  document.head.appendChild(style);

  // Mobile menu functionality
  if (menuToggle && mobileMenu && mobileMenuClose) {
    const menuBars = document.querySelectorAll('.menu-toggle-bar');

    // Function to close mobile menu - định nghĩa trước để có thể sử dụng ở bất kỳ đâu
    function closeMenu() {
      // Remove visible class from contact button first
      const contactBtn = mobileMenu.querySelector('.mobile-contact-btn');
      if (contactBtn) {
        contactBtn.classList.remove('visible');
      }

      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('active'); // Remove active class from menu toggle
      document.body.style.overflow = ''; // Re-enable scrolling

      // Hiện lại thanh điều hướng dưới cùng khi đóng menu
      const bottomNav = document.querySelector('.bottom-nav');
      if (bottomNav) {
        // Luôn hiển thị thanh điều hướng khi đóng menu
        bottomNav.style.transition = 'transform 0.3s ease';
        bottomNav.style.transform = 'translateY(0)';
      }

      // Reset animation if menu bars exist
      if (menuBars.length === 3) {
        // Reset first bar
        menuBars[0].style.width = '16px';
        menuBars[0].style.marginLeft = '-6px';
        menuBars[0].style.transform = 'none';

        // Reset second bar
        menuBars[1].style.opacity = '1';

        // Reset third bar
        menuBars[2].style.width = '16px';
        menuBars[2].style.marginLeft = '6px';
        menuBars[2].style.transform = 'none';
      }
    }

    menuToggle.addEventListener('click', function () {
      // Kiểm tra xem menu đã active chưa để tránh click nhiều lần
      if (mobileMenu.classList.contains('active')) {
        closeMenu();
        return;
      }

      mobileMenu.classList.add('active');
      menuToggle.classList.add('active'); // Add active class to menu toggle
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open

      // Ẩn thanh điều hướng dưới cùng khi mở menu
      const bottomNav = document.querySelector('.bottom-nav');
      if (bottomNav) {
        bottomNav.style.transform = 'translateY(100%)';
        bottomNav.style.transition = 'transform 0.3s ease';
      }

      // Add animation to menu bars if they exist
      if (menuBars.length === 3) {
        // First bar animation - rotate to 45 degrees
        menuBars[0].style.width = '22px';
        menuBars[0].style.marginLeft = '0';
        menuBars[0].style.transform = 'translateY(8px) rotate(45deg)';

        // Second bar animation - fade out
        menuBars[1].style.opacity = '0';

        // Third bar animation - rotate to -45 degrees
        menuBars[2].style.width = '22px';
        menuBars[2].style.marginLeft = '0';
        menuBars[2].style.transform = 'translateY(-8px) rotate(-45deg)';
      }

      // Animate menu items with staggered delay
      const mobileLinks = mobileMenu.querySelectorAll(
        '.mobile-menu-links li a'
      );
      mobileLinks.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-20px)';
        setTimeout(() => {
          link.style.opacity = '1';
          link.style.transform = 'translateX(0)';
        }, 100 + index * 70);
      });

      // Animate contact info
      const contactInfo = mobileMenu.querySelector('.mobile-contact-info');
      if (contactInfo) {
        contactInfo.style.opacity = '0';
        contactInfo.style.transform = 'translateY(20px)';
        setTimeout(() => {
          contactInfo.style.opacity = '1';
          contactInfo.style.transform = 'translateY(0)';
        }, 400);
      }

      // Animate contact button
      const contactBtn = mobileMenu.querySelector('.mobile-contact-btn');
      if (contactBtn) {
        // Reset any inline styles that might be causing conflicts
        contactBtn.style.cssText = '';

        // Force a reflow to ensure CSS transitions work properly
        void contactBtn.offsetWidth;

        // Let CSS handle the transition
        setTimeout(() => {
          contactBtn.classList.add('visible');
        }, 500);
      }
    });

    // Hàm closeMenu đã được định nghĩa ở trên

    // Close menu when clicking the close button
    mobileMenuClose.addEventListener('click', closeMenu);

    // Close mobile menu when clicking on a link
    const allMobileLinks = mobileMenu.querySelectorAll('a');
    allMobileLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      if (
        mobileMenu.classList.contains('active') &&
        !mobileMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });
  }

  // Add active class to current page in navigation
  const currentLocation = location.pathname;
  const menuItems = document.querySelectorAll(
    '.nav-menu a, .mobile-menu-links a'
  );

  menuItems.forEach((item) => {
    if (
      item.getAttribute('href') === currentLocation ||
      item.getAttribute('href') ===
        currentLocation.substring(currentLocation.lastIndexOf('/') + 1) ||
      (currentLocation === '/' && item.getAttribute('href') === 'index.html') ||
      (currentLocation.endsWith('/') &&
        item.getAttribute('href') === 'index.html') ||
      (currentLocation.includes('product-details.html') &&
        item.getAttribute('href') === 'products.html') ||
      (currentLocation.includes('blog-detail.html') &&
        item.getAttribute('href') === 'blog.html') ||
      (currentLocation.includes('quote-ai.html') &&
        item.getAttribute('href') === 'quote-ai.html')
    ) {
      item.classList.add('active');
    }
  });
});
