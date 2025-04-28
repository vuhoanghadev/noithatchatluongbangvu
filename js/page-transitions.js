/**
 * Page Transitions
 * Provides smooth transitions between pages for a more app-like experience
 * Uses a true SPA approach with content preloading
 */

// Global cache for preloaded pages
const pageCache = {};

// Current page URL
let currentPageUrl = window.location.href;

// Flag to track if a transition is in progress
let isTransitioning = false;

// Timeout reference for transition
let transitionTimeout = null;

// Preload common pages in the background
const pagesToPreload = [
  'index.html',
  'products.html',
  'blog.html',
  'product-details.html',
];

document.addEventListener('DOMContentLoaded', function () {
  // Create necessary DOM elements for transitions
  createTransitionElements();

  // Initialize page transition system
  initPageTransitions();

  // Add main-content class to the main element if it exists
  const mainElement = document.querySelector('main');
  if (mainElement) {
    mainElement.classList.add('main-content');
  }

  // Mark the page as ready (for when navigating back to this page)
  document.body.classList.add('page-ready');

  // Start preloading common pages in the background
  preloadPages();
});

/**
 * Creates the DOM elements needed for transitions
 */
function createTransitionElements() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'page-transition-overlay';
  document.body.appendChild(overlay);

  // Create ripple effect container
  const rippleContainer = document.createElement('div');
  rippleContainer.className = 'page-transition-ripple';
  document.body.appendChild(rippleContainer);

  // Create ripple circle
  const rippleCircle = document.createElement('div');
  rippleCircle.className = 'ripple-circle';
  rippleContainer.appendChild(rippleCircle);

  // Create loading indicator
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'page-loading-indicator';
  document.body.appendChild(loadingIndicator);

  // Create spinner
  const spinner = document.createElement('div');
  spinner.className = 'loading-spinner';
  loadingIndicator.appendChild(spinner);

  // Create loading text
  const loadingText = document.createElement('div');
  loadingText.className = 'loading-text';
  loadingText.textContent = 'Đang tải...';
  loadingIndicator.appendChild(loadingText);

  // Create progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'page-load-progress';
  document.body.appendChild(progressBar);
}

/**
 * Initializes the page transition system
 */
function initPageTransitions() {
  // Check if we should use page transitions
  const shouldUseTransitions = !isMobileWithLowMemory();

  // Handle all link clicks for smooth transitions
  document.addEventListener('click', function (e) {
    // Find closest anchor tag
    const link = e.target.closest('a');

    // If it's a link and it's an internal link
    if (
      link &&
      link.href &&
      link.href.startsWith(window.location.origin) &&
      !link.getAttribute('target') &&
      !link.getAttribute('download') &&
      !link.classList.contains('no-transition')
    ) {
      // If we're on a mobile device with low memory, use normal navigation
      if (!shouldUseTransitions) {
        // For mobile devices with potential memory issues, use normal navigation
        // but add a loading indicator
        showSimpleLoadingIndicator();
        return; // Let the default navigation happen
      }

      // Prevent default navigation
      e.preventDefault();

      // Get the clicked position for ripple effect
      const rect = link.getBoundingClientRect();
      const clickX = e.clientX || rect.left + rect.width / 2;
      const clickY = e.clientY || rect.top + rect.height / 2;

      // Start the transition
      startPageTransition(link.href, clickX, clickY);

      // Add clicked class to the link for animation
      link.classList.add('clicked');
      setTimeout(() => {
        link.classList.remove('clicked');
      }, 300);
    }
  });

  // Handle bottom navigation clicks specially
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      // Skip the search nav item as it has special handling
      if (this.id === 'search-nav' || this.id === 'wishlist-nav') return;

      // If we're on a mobile device with low memory, use normal navigation
      if (!shouldUseTransitions) {
        // For mobile devices with potential memory issues, use normal navigation
        // but add a loading indicator
        showSimpleLoadingIndicator();
        return; // Let the default navigation happen
      }

      e.preventDefault();

      // Get the clicked position for ripple effect
      const rect = this.getBoundingClientRect();
      const clickX = rect.left + rect.width / 2;
      const clickY = rect.top + rect.height / 2;

      // Add clicked class for animation
      this.classList.add('clicked');

      // Start the transition
      startPageTransition(this.href, clickX, clickY);

      // Remove clicked class after animation
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', function (e) {
    // Start transition without ripple effect for back/forward navigation
    startPageTransition(window.location.href, null, null, true);
  });
}

/**
 * Starts the page transition effect
 * @param {string} url - The URL to navigate to
 * @param {number} x - The x coordinate of the click
 * @param {number} y - The y coordinate of the click
 * @param {boolean} isHistoryNavigation - Whether this is a history navigation (back/forward)
 */
function startPageTransition(url, x, y, isHistoryNavigation = false) {
  // Get transition elements
  const overlay = document.querySelector('.page-transition-overlay');
  const rippleContainer = document.querySelector('.page-transition-ripple');
  const rippleCircle = document.querySelector('.ripple-circle');
  const loadingIndicator = document.querySelector('.page-loading-indicator');
  const progressBar = document.querySelector('.page-load-progress');
  const mainContent = document.querySelector('.main-content');

  // If we're already in a transition, don't start another one
  if (isTransitioning || overlay.classList.contains('active')) {
    console.log('Transition already in progress, ignoring new request');
    return;
  }

  // Set transitioning flag
  isTransitioning = true;

  // Determine if we're going to a different page
  const isSamePage = url === window.location.href;
  if (isSamePage) {
    isTransitioning = false;
    return;
  }

  // Clear any existing transition timeouts
  if (transitionTimeout) {
    clearTimeout(transitionTimeout);
  }

  // Fade out current content
  if (mainContent) {
    mainContent.classList.add('fade-out');
  }

  // If we have click coordinates, show ripple effect
  if (x !== null && y !== null) {
    // Position the ripple circle at the click position
    rippleCircle.style.left = x + 'px';
    rippleCircle.style.top = y + 'px';

    // Calculate the maximum dimension of the screen for ripple size
    const maxDimension = Math.max(window.innerWidth, window.innerHeight);
    rippleCircle.style.width = maxDimension * 2 + 'px';
    rippleCircle.style.height = maxDimension * 2 + 'px';

    // Activate ripple effect
    rippleContainer.classList.add('active');
  }

  // Show overlay with slight delay
  setTimeout(() => {
    overlay.classList.add('active');
  }, 100);

  // Show progress bar
  progressBar.classList.add('active');

  // Animate progress bar
  let progress = 0;
  const progressInterval = setInterval(() => {
    progress += Math.random() * 3;
    if (progress > 80) {
      clearInterval(progressInterval);
    }
    progressBar.style.width = Math.min(progress, 80) + '%';
  }, 100);

  // Show loading indicator after a short delay if the page takes time to load
  const loadingTimeout = setTimeout(() => {
    loadingIndicator.classList.add('active');
  }, 500);

  // Fetch the new page content with timeout
  const fetchPromise = fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      try {
        // Parse the HTML
        const parser = new DOMParser();
        const newDocument = parser.parseFromString(html, 'text/html');

        // Check if we got a valid document with main content
        const newMainContent = newDocument.querySelector('main');
        if (!newMainContent) {
          throw new Error('Could not find main content in the loaded page');
        }

        // Complete the progress bar
        clearInterval(progressInterval);
        progressBar.style.width = '100%';

        // Update the page title
        document.title = newDocument.title;

        // If this isn't a history navigation, push the new state
        if (!isHistoryNavigation) {
          history.pushState({}, newDocument.title, url);
        }

        // Wait for transition effects to complete
        transitionTimeout = setTimeout(() => {
          try {
            // Update the main content
            if (mainContent) {
              mainContent.innerHTML = newMainContent.innerHTML;
              mainContent.classList.remove('fade-out');
              mainContent.classList.add('fade-in');

              // Remove the animation class after it completes
              setTimeout(() => {
                mainContent.classList.remove('fade-in');
              }, 500);
            }

            // Update the active state in the navigation
            updateActiveNavigation(url);

            // Hide loading elements
            clearTimeout(loadingTimeout);
            loadingIndicator.classList.remove('active');
            rippleContainer.classList.remove('active');
            overlay.classList.remove('active');

            // Reset progress bar
            setTimeout(() => {
              progressBar.classList.remove('active');
              progressBar.style.width = '0%';
            }, 300);

            // Execute scripts from the new page
            executeScripts(newDocument);

            // Scroll to top
            window.scrollTo(0, 0);

            // Dispatch custom events that the page has been loaded via AJAX
            document.dispatchEvent(
              new CustomEvent('ajaxPageLoaded', {
                detail: { url: url },
              })
            );

            // Dispatch a custom event that the page transition is complete
            document.dispatchEvent(
              new CustomEvent('page-transition-complete', {
                detail: { url: url },
              })
            );

            // Reset transitioning flag
            isTransitioning = false;
          } catch (innerError) {
            console.error('Error during content update:', innerError);
            resetTransitionState();
            // Fall back to normal navigation
            window.location.href = url;
          }
        }, 500);
      } catch (parseError) {
        console.error('Error parsing HTML:', parseError);
        throw parseError;
      }
    })
    .catch((error) => {
      console.error('Error during page transition:', error);
      resetTransitionState();
      // On error, just navigate normally
      window.location.href = url;
    });

  // Add a timeout to the fetch operation
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Fetch timeout')), 10000); // 10 second timeout
  });

  // Race between fetch and timeout
  Promise.race([fetchPromise, timeoutPromise]).catch((error) => {
    console.error('Fetch failed or timed out:', error);
    resetTransitionState();
    window.location.href = url;
  });

  // Function to reset transition state
  function resetTransitionState() {
    // Reset transitioning flag
    isTransitioning = false;

    // Hide loading elements
    clearTimeout(loadingTimeout);
    if (loadingIndicator) loadingIndicator.classList.remove('active');
    if (rippleContainer) rippleContainer.classList.remove('active');
    if (overlay) overlay.classList.remove('active');

    // Reset progress bar
    if (progressBar) {
      progressBar.classList.remove('active');
      progressBar.style.width = '0%';
    }

    // Clear interval
    if (progressInterval) clearInterval(progressInterval);

    // Clear timeout
    if (transitionTimeout) clearTimeout(transitionTimeout);
  }
}

/**
 * Updates the active state in navigation based on the current URL
 * @param {string} url - The current URL
 */
function updateActiveNavigation(url) {
  // Get all navigation items
  const navItems = document.querySelectorAll(
    '.nav-menu a, .mobile-menu-links a'
  );
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  // Remove active class from all items
  navItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Remove active class from bottom nav items
  bottomNavItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Add active class to matching items in main navigation and mobile menu
  navItems.forEach((item) => {
    const href = item.getAttribute('href');
    if (
      item.href === url ||
      url.includes(href) ||
      (url.includes('product-details.html') && href === 'products.html') ||
      (url.includes('blog-detail.html') && href === 'blog.html') ||
      (url.includes('quote-ai.html') && href === 'quote-ai.html')
    ) {
      item.classList.add('active');
    }
  });

  // Determine which bottom nav item should be active
  if (url.includes('products.html') || url.includes('product-details.html')) {
    document.getElementById('products-nav')?.classList.add('active');
  } else if (url.includes('blog.html') || url.includes('blog-detail.html')) {
    document.getElementById('blog-nav')?.classList.add('active');
  } else if (
    url.includes('index.html') ||
    url === window.location.origin + '/' ||
    url === window.location.origin
  ) {
    document.getElementById('home-nav')?.classList.add('active');
  }

  // Update localStorage for bottom nav active state
  const activeBottomNav = document.querySelector('.bottom-nav-item.active');
  if (activeBottomNav) {
    localStorage.setItem('activeTabId', activeBottomNav.id);
  }
}

/**
 * Executes scripts from the newly loaded page
 * @param {Document} newDocument - The parsed HTML document
 */
function executeScripts(newDocument) {
  // Get all scripts from the new document
  const scripts = newDocument.querySelectorAll('script');

  // Execute each script
  scripts.forEach((script) => {
    // Skip scripts with src attribute as they're loaded automatically
    if (script.src) return;

    // Skip empty scripts
    if (!script.textContent.trim()) return;

    // Create a new script element
    const newScript = document.createElement('script');
    newScript.textContent = script.textContent;

    // Add it to the document
    document.body.appendChild(newScript);

    // Remove it after execution (optional)
    document.body.removeChild(newScript);
  });
}

/**
 * Handles the initial page load animation
 */
function handleInitialPageLoad() {
  // Get the main content element
  const mainContent = document.querySelector('.main-content');

  // If the page is being loaded for the first time (not from cache)
  if (!document.body.classList.contains('page-ready')) {
    // Add fade-in animation
    if (mainContent) {
      mainContent.classList.add('fade-in');

      // Remove the animation class after it completes
      setTimeout(() => {
        mainContent.classList.remove('fade-in');
      }, 500);
    }

    // Update active navigation based on current URL
    updateActiveNavigation(window.location.href);

    // Dispatch a custom event that the page has been loaded initially
    setTimeout(() => {
      document.dispatchEvent(
        new CustomEvent('page-transition-complete', {
          detail: { url: window.location.href },
        })
      );
    }, 100);
  }
}

// Handle initial page load animation
handleInitialPageLoad();

/**
 * Detects if the device is a mobile device with potentially low memory
 * @returns {boolean} True if the device is a mobile device with low memory
 */
function isMobileWithLowMemory() {
  // Check if it's a mobile device
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  // If we can detect device memory, check if it's low
  let hasLowMemory = false;
  if (navigator.deviceMemory) {
    hasLowMemory = navigator.deviceMemory < 4; // Less than 4GB RAM
  }

  // For iOS devices, we can't detect memory, so use a more conservative approach
  const isOlderIOS =
    /iPhone|iPad|iPod/.test(navigator.userAgent) &&
    /OS [0-9]_|OS 10_|OS 11_|OS 12_|OS 13_/.test(navigator.userAgent);

  // Return true for mobile devices with low memory or older iOS devices
  return isMobile && (hasLowMemory || isOlderIOS);
}

/**
 * Shows a simple loading indicator for mobile devices
 */
function showSimpleLoadingIndicator() {
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
