/**
 * Bottom Navigation for Mobile
 * Handles navigation, active states, and animations
 */
document.addEventListener('DOMContentLoaded', function () {
  // Get all bottom navigation items
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  // Set active class based on current URL
  updateActiveTabBasedOnURL();

  // Add click event listener to each item
  bottomNavItems.forEach((item) => {
    // Add touchstart event to immediately apply orange color
    item.addEventListener(
      'touchstart',
      function () {
        bottomNavItems.forEach((navItem) => {
          navItem.classList.remove('clicked');
        });
        this.classList.add('clicked');
      },
      { passive: true }
    );

    item.addEventListener('click', function (e) {
      // Thêm hiệu ứng ripple khi click
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      this.appendChild(ripple);

      // Xóa ripple sau khi animation hoàn thành
      setTimeout(() => {
        ripple.remove();
      }, 1000);

      // If this is a search button, handle search differently
      if (this.id === 'search-nav') {
        e.preventDefault();
        // Thêm class clicked để áp dụng màu cam ngay lập tức
        bottomNavItems.forEach((navItem) => {
          navItem.classList.remove('active');
          navItem.classList.remove('clicked');
        });
        this.classList.add('active');
        this.classList.add('clicked');
        handleSearch();
        return;
      }

      // If this is a wishlist button, handle wishlist differently
      if (this.id === 'wishlist-nav') {
        e.preventDefault();
        // Thêm class clicked để áp dụng màu cam ngay lập tức
        bottomNavItems.forEach((navItem) => {
          navItem.classList.remove('active');
          navItem.classList.remove('clicked');
        });
        this.classList.add('active');
        this.classList.add('clicked');
        handleWishlist();
        return;
      }

      // For regular navigation items
      if (this.getAttribute('href')) {
        e.preventDefault();

        // Add active class to this item
        bottomNavItems.forEach((navItem) => {
          navItem.classList.remove('active');
          navItem.classList.remove('clicked');
        });
        this.classList.add('active');
        this.classList.add('clicked'); // Thêm class clicked để áp dụng màu cam ngay lập tức

        // Store the active tab ID in localStorage
        localStorage.setItem('activeTabId', this.id);

        // Get the URL to navigate to
        const url = this.getAttribute('href');

        // Check if page transitions are available
        if (typeof startPageTransition === 'function') {
          // Use page transition
          startPageTransition(url);
        } else {
          // Fallback to normal navigation with a loading indicator
          showLoadingIndicator();
          setTimeout(() => {
            window.location.href = url;
          }, 100);
        }
      }
    });
  });

  // Simple loading indicator function
  function showLoadingIndicator() {
    // Check if loading indicator already exists
    let loadingIndicator = document.querySelector('.mobile-loading-indicator');

    if (!loadingIndicator) {
      // Create loading indicator
      loadingIndicator = document.createElement('div');
      loadingIndicator.className = 'mobile-loading-indicator';
      loadingIndicator.innerHTML = `
        <div class="loading-spinner"></div>
        <div class="loading-text">Đang tải...</div>
      `;
      document.body.appendChild(loadingIndicator);

      // Add styles if they don't exist
      if (!document.getElementById('mobile-loading-styles')) {
        const styles = document.createElement('style');
        styles.id = 'mobile-loading-styles';
        styles.textContent = `
          .mobile-loading-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
          }
          .mobile-loading-indicator .loading-spinner {
            width: 50px;
            height: 50px;
            border: 5px solid rgba(249, 115, 22, 0.2);
            border-radius: 50%;
            border-top-color: #f97316;
            animation: spin 1s linear infinite;
          }
          .mobile-loading-indicator .loading-text {
            margin-top: 15px;
            color: #f97316;
            font-weight: 600;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(styles);
      }
    }
  }

  /**
   * Updates the active tab based on the current URL
   */
  function updateActiveTabBasedOnURL() {
    // Get current URL
    const currentURL = window.location.href;

    // Remove active class from all items first
    bottomNavItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Check if search parameter is present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('search') === 'true') {
      // Add active class to search tab
      document.getElementById('search-nav')?.classList.add('active');
    }
    // Check if wishlist parameter is present
    else if (urlParams.get('wishlist') === 'true') {
      // Add active class to wishlist tab
      document.getElementById('wishlist-nav')?.classList.add('active');
    }
    // Determine which tab should be active based on URL
    else if (
      currentURL.includes('products.html') ||
      currentURL.includes('product-details.html')
    ) {
      document.getElementById('products-nav')?.classList.add('active');
    } else if (
      currentURL.includes('blog.html') ||
      currentURL.includes('blog-detail.html')
    ) {
      document.getElementById('blog-nav')?.classList.add('active');
    } else if (currentURL.includes('quote-ai.html')) {
      // Không cần thiết lập active cho bottom nav khi ở trang báo giá
      // vì không có tab tương ứng trong bottom nav
    } else if (
      currentURL.includes('index.html') ||
      currentURL.endsWith('/') ||
      currentURL.endsWith('.com') ||
      currentURL.endsWith('.net') ||
      currentURL.endsWith('.org') ||
      currentURL.endsWith('.io')
    ) {
      document.getElementById('home-nav')?.classList.add('active');
    }

    // Store the active tab ID in localStorage
    const activeTab = document.querySelector('.bottom-nav-item.active');
    if (activeTab) {
      localStorage.setItem('activeTabId', activeTab.id);
    }
  }

  // Handle search functionality
  function handleSearch() {
    // Đảm bảo nút search vẫn giữ màu cam
    const searchNav = document.getElementById('search-nav');
    if (searchNav) {
      searchNav.classList.add('active');
      searchNav.classList.add('clicked');
    }

    // Check if fullscreen search is available
    const fullscreenSearch = document.querySelector('.fullscreen-search');

    if (fullscreenSearch) {
      // Open fullscreen search
      openSearch();
    } else {
      // If fullscreen search is not available, check for regular search input
      const searchInput = document.querySelector('.search-input');

      if (searchInput) {
        // Focus on existing search input
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // If no search input on current page, redirect to search page
        window.location.href = 'products.html?search=true';
      }
    }
  }

  // Add scroll behavior to hide/show bottom navigation
  let lastScrollTop = 0;
  const bottomNav = document.querySelector('.bottom-nav');

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Don't hide navigation when near the top of the page
    if (scrollTop < 200) {
      bottomNav.style.transform = 'translateY(0)';
      return;
    }

    if (scrollTop > lastScrollTop) {
      // Scrolling down - hide navigation
      bottomNav.style.transform = 'translateY(100%)';
      // Lưu hướng cuộn cuối cùng
      bottomNav.setAttribute('data-scroll-direction', 'down');
    } else {
      // Scrolling up - show navigation
      bottomNav.style.transform = 'translateY(0)';
      // Lưu hướng cuộn cuối cùng
      bottomNav.setAttribute('data-scroll-direction', 'up');
    }

    lastScrollTop = scrollTop;
  });

  // Handle wishlist functionality
  function handleWishlist() {
    // Add active class to wishlist tab
    bottomNavItems.forEach((item) => {
      item.classList.remove('active');
      item.classList.remove('clicked');
    });
    const wishlistNav = document.getElementById('wishlist-nav');
    if (wishlistNav) {
      wishlistNav.classList.add('active');
      wishlistNav.classList.add('clicked');
    }

    // Store the active tab ID in localStorage
    localStorage.setItem('activeTabId', 'wishlist-nav');

    // Check if wishlist toggle function exists
    if (
      typeof window.WishlistManager !== 'undefined' &&
      typeof window.WishlistManager.toggleWishlistContainer === 'function'
    ) {
      // Open wishlist container
      window.WishlistManager.toggleWishlistContainer(true);
    } else {
      // If wishlist function doesn't exist, load wishlist script and try again
      const wishlistScript = document.createElement('script');
      wishlistScript.src = 'js/wishlist-floating.js';

      // Hiển thị loading indicator
      const loadingIndicator = document.createElement('div');
      loadingIndicator.className = 'wishlist-loading-indicator';
      loadingIndicator.innerHTML = `
        <div class="wishlist-loading-spinner"></div>
        <div class="wishlist-loading-text">Đang tải danh sách yêu thích...</div>
      `;
      document.body.appendChild(loadingIndicator);

      wishlistScript.onload = function () {
        // After script loads, try to open wishlist
        if (
          typeof window.WishlistManager !== 'undefined' &&
          typeof window.WishlistManager.toggleWishlistContainer === 'function'
        ) {
          // Xóa loading indicator
          document.body.removeChild(loadingIndicator);

          // Mở danh sách yêu thích
          window.WishlistManager.toggleWishlistContainer(true);
        } else {
          console.error('Wishlist functionality not available');

          // Hiển thị thông báo lỗi
          loadingIndicator.innerHTML = `
            <div class="wishlist-loading-error">
              <i class="fas fa-exclamation-circle"></i>
              <div>Không thể tải danh sách yêu thích</div>
            </div>
          `;

          // Xóa loading indicator sau 2 giây
          setTimeout(() => {
            if (document.body.contains(loadingIndicator)) {
              document.body.removeChild(loadingIndicator);
            }
          }, 2000);
        }
      };

      // Xử lý lỗi khi tải script
      wishlistScript.onerror = function () {
        console.error('Failed to load wishlist script');

        // Hiển thị thông báo lỗi
        loadingIndicator.innerHTML = `
          <div class="wishlist-loading-error">
            <i class="fas fa-exclamation-circle"></i>
            <div>Không thể tải danh sách yêu thích</div>
          </div>
        `;

        // Xóa loading indicator sau 2 giây
        setTimeout(() => {
          if (document.body.contains(loadingIndicator)) {
            document.body.removeChild(loadingIndicator);
          }
        }, 2000);
      };

      document.head.appendChild(wishlistScript);
    }
  }

  // Check if we need to set the search tab as active
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('search') === 'true') {
    // Remove active class from all items
    bottomNavItems.forEach((item) => item.classList.remove('active'));

    // Add active class to search tab
    document.getElementById('search-nav')?.classList.add('active');

    // Store the active tab ID in localStorage
    localStorage.setItem('activeTabId', 'search-nav');

    // Focus on search input if it exists
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      setTimeout(() => {
        searchInput.focus();
        searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }

  // Check if we need to set the wishlist tab as active
  if (urlParams.get('wishlist') === 'true') {
    // Remove active class from all items
    bottomNavItems.forEach((item) => item.classList.remove('active'));

    // Add active class to wishlist tab
    document.getElementById('wishlist-nav')?.classList.add('active');

    // Store the active tab ID in localStorage
    localStorage.setItem('activeTabId', 'wishlist-nav');

    // Open wishlist if function exists
    setTimeout(() => {
      if (
        typeof window.WishlistManager !== 'undefined' &&
        typeof window.WishlistManager.toggleWishlistContainer === 'function'
      ) {
        window.WishlistManager.toggleWishlistContainer(true);
      }
    }, 500);
  }

  // Add event listener for popstate (browser back/forward buttons)
  window.addEventListener('popstate', function () {
    // Update active tab when navigating with browser back/forward buttons
    updateActiveTabBasedOnURL();
  });

  // Add event listener for page transitions completion
  document.addEventListener('page-transition-complete', function (event) {
    console.log(
      'Page transition complete, updating navigation for URL:',
      event.detail.url
    );

    // Update active tab after page transition is complete
    updateActiveTabBasedOnURL();

    // Remove any loading indicators that might be present
    const loadingIndicator = document.querySelector(
      '.mobile-loading-indicator'
    );
    if (loadingIndicator) {
      loadingIndicator.style.opacity = '0';
      setTimeout(() => {
        if (loadingIndicator.parentNode) {
          loadingIndicator.parentNode.removeChild(loadingIndicator);
        }
      }, 300);
    }
  });

  // Also listen for the ajaxPageLoaded event as a fallback
  document.addEventListener('ajaxPageLoaded', function (event) {
    console.log(
      'AJAX page loaded, updating navigation for URL:',
      event.detail.url
    );

    // Update active tab after AJAX page load
    updateActiveTabBasedOnURL();

    // Remove any loading indicators that might be present
    const loadingIndicator = document.querySelector(
      '.mobile-loading-indicator'
    );
    if (loadingIndicator) {
      loadingIndicator.style.opacity = '0';
      setTimeout(() => {
        if (loadingIndicator.parentNode) {
          loadingIndicator.parentNode.removeChild(loadingIndicator);
        }
      }, 300);
    }
  });
});
