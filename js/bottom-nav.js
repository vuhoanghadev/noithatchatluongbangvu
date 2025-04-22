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
    item.addEventListener('click', function (e) {
      // If this is a search button, handle search differently
      if (this.id === 'search-nav') {
        e.preventDefault();
        handleSearch();
        return;
      }

      // Store the active tab ID in localStorage
      localStorage.setItem('activeTabId', this.id);
    });
  });

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

    // Determine which tab should be active based on URL
    if (
      currentURL.includes('products.html') ||
      currentURL.includes('product-details.html')
    ) {
      document.getElementById('products-nav')?.classList.add('active');
    } else if (currentURL.includes('blog.html')) {
      document.getElementById('blog-nav')?.classList.add('active');
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

    // Check if search parameter is present
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('search') === 'true') {
      // Remove active class from all items
      bottomNavItems.forEach((item) => item.classList.remove('active'));

      // Add active class to search tab
      document.getElementById('search-nav')?.classList.add('active');
    }

    // Store the active tab ID in localStorage
    const activeTab = document.querySelector('.bottom-nav-item.active');
    if (activeTab) {
      localStorage.setItem('activeTabId', activeTab.id);
    }
  }

  // Handle search functionality
  function handleSearch() {
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
    } else {
      // Scrolling up - show navigation
      bottomNav.style.transform = 'translateY(0)';
    }

    lastScrollTop = scrollTop;
  });

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

  // Add event listener for popstate (browser back/forward buttons)
  window.addEventListener('popstate', function () {
    // Update active tab when navigating with browser back/forward buttons
    updateActiveTabBasedOnURL();
  });

  // Add event listener for page transitions completion
  document.addEventListener('page-transition-complete', function () {
    // Update active tab after page transition is complete
    updateActiveTabBasedOnURL();
  });
});
