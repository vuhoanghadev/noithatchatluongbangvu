/**
 * Bottom Navigation for Mobile
 * Handles navigation, active states, and animations
 */
document.addEventListener('DOMContentLoaded', function () {
  // Get all bottom navigation items
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  // Get the active tab ID from localStorage or set default to home
  const activeTabId = localStorage.getItem('activeTabId') || 'home-nav';

  // Set active class based on current page or localStorage
  bottomNavItems.forEach((item) => {
    // Remove active class from all items first
    item.classList.remove('active');

    // Add active class to the current active item
    if (item.id === activeTabId) {
      item.classList.add('active');
    }

    // Add click event listener to each item
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
});
