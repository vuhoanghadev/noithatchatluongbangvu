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
      if (this.id === 'search-nav') return;

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
  if (overlay.classList.contains('active')) return;

  // Determine if we're going to a different page
  const isSamePage = url === window.location.href;
  if (isSamePage) return;

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

  // Fetch the new page content
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      // Parse the HTML
      const parser = new DOMParser();
      const newDocument = parser.parseFromString(html, 'text/html');

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
      setTimeout(() => {
        // Extract the main content from the new page
        const newMainContent = newDocument.querySelector('main').innerHTML;

        // Update the main content
        if (mainContent) {
          mainContent.innerHTML = newMainContent;
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

        // Dispatch a custom event that the page has been loaded via AJAX
        document.dispatchEvent(
          new CustomEvent('ajaxPageLoaded', {
            detail: { url: url },
          })
        );
      }, 500);
    })
    .catch((error) => {
      console.error('Error during page transition:', error);

      // On error, just navigate normally
      window.location.href = url;
    });
}

/**
 * Updates the active state in navigation based on the current URL
 * @param {string} url - The current URL
 */
function updateActiveNavigation(url) {
  // Get all navigation items
  const navItems = document.querySelectorAll(
    '.nav-menu a, .mobile-menu-links a, .bottom-nav-item'
  );

  // Remove active class from all items
  navItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Add active class to matching items
  navItems.forEach((item) => {
    if (item.href === url || url.includes(item.getAttribute('href'))) {
      item.classList.add('active');
    }
  });

  // Special handling for bottom navigation
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach((item) => {
    item.classList.remove('active');
  });

  // Determine which bottom nav item should be active
  if (url.includes('products.html') || url.includes('product-details.html')) {
    document.getElementById('products-nav')?.classList.add('active');
  } else if (url.includes('blog.html')) {
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
  }
}

// Handle initial page load animation
handleInitialPageLoad();
