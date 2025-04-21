/**
 * Smooth Navigation
 * Provides smooth transitions between pages with slide effects
 */
// Hide bottom nav initially via CSS to prevent flashing
const initialStyle = document.createElement('style');
initialStyle.textContent = `
  .bottom-nav {
    transform: translateY(60px);
    opacity: 0;
    transition: none !important;
  }
`;
document.head.appendChild(initialStyle);

// Wait for DOM to be fully ready
document.addEventListener('DOMContentLoaded', function () {
  // Create transition overlay
  createTransitionOverlay();

  // Initialize smooth navigation
  initSmoothNavigation();

  // Remove transition overlay if it exists
  document.body.classList.remove('page-transition-active');

  // Wait a bit for any layout shifts to settle
  setTimeout(() => {
    // Check if we're coming from a transition
    const isFromTransition =
      sessionStorage.getItem('pageTransition') === 'true';

    // Remove the initial style that hides the nav
    document.head.removeChild(initialStyle);

    if (isFromTransition) {
      // Apply immediate slide-up effect for nav
      applySlideUpEffect();
      // Clear the flag
      sessionStorage.removeItem('pageTransition');
    } else {
      // Add normal slide-in effect when page loads directly
      addSlideInEffect();
    }
  }, 50);
});

/**
 * Creates the overlay element for page transitions
 */
function createTransitionOverlay() {
  // Create overlay container
  const overlayContainer = document.createElement('div');
  overlayContainer.className = 'page-transition-container';
  overlayContainer.innerHTML = `
        <div class="page-transition-overlay"></div>
        <div class="page-transition-loader">
            <div class="loader-spinner"></div>
            <div class="loader-text">Đang tải...</div>
        </div>
    `;
  document.body.appendChild(overlayContainer);

  // Add styles if not already added
  if (!document.getElementById('smooth-navigation-styles')) {
    const styleElement = document.createElement('style');
    styleElement.id = 'smooth-navigation-styles';
    styleElement.textContent = `
            .page-transition-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 9999;
                visibility: hidden;
            }

            .page-transition-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: #ffffff;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .page-transition-loader {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                display: flex;
                flex-direction: column;
                align-items: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }

            .loader-spinner {
                width: 40px;
                height: 40px;
                border: 3px solid rgba(0, 88, 221, 0.1);
                border-top: 3px solid #0058dd;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 10px;
            }

            .loader-text {
                color: #0058dd;
                font-size: 14px;
                font-weight: 500;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }

            .page-transition-active .page-transition-container {
                visibility: visible;
            }

            .page-transition-active .page-transition-overlay {
                opacity: 0.8;
            }

            .page-transition-active .page-transition-loader {
                opacity: 1;
            }

            /* Slide effects for bottom navigation */
            .nav-slide-down {
                animation: navSlideDown 0.4s ease-in forwards;
            }

            /* Creative bottom nav animations */
            .nav-fancy-entrance {
                will-change: transform, opacity, box-shadow;
                animation: navFancyEntrance 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                backface-visibility: hidden;
                transform-style: preserve-3d;
            }

            .nav-item-stagger {
                will-change: transform, opacity;
                opacity: 0;
                transform: translateY(20px);
                animation: navItemStagger 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
                backface-visibility: hidden;
            }

            @keyframes navSlideDown {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(60px); opacity: 0; }
            }

            @keyframes navFancyEntrance {
                0% { transform: translateY(60px); opacity: 0; box-shadow: 0 0 0 rgba(0, 88, 221, 0); }
                40% { opacity: 1; }
                70% { transform: translateY(-5px); }
                85% { transform: translateY(2px); box-shadow: 0 5px 15px rgba(0, 88, 221, 0.2); }
                100% { transform: translateY(0); box-shadow: 0 4px 12px rgba(0, 88, 221, 0.15); }
            }

            @keyframes navItemStagger {
                0% { transform: translateY(15px); opacity: 0; }
                100% { transform: translateY(0); opacity: 1; }
            }

            /* Ensure bottom nav stays visible during transitions */
            .bottom-nav {
                z-index: 10000;
            }

            /* Floating contact buttons should stay visible */
            .fc-container {
                z-index: 9998;
            }

            /* Back to top button should stay visible */
            .back-to-top {
                z-index: 9998;
            }
        `;
    document.head.appendChild(styleElement);
  }
}

/**
 * Initializes smooth navigation between pages
 */
function initSmoothNavigation() {
  // Handle bottom navigation clicks
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
  bottomNavItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      // Skip the search nav item as it has special handling
      if (this.id === 'search-nav') return;

      e.preventDefault();

      // Get the URL to navigate to
      const url = this.getAttribute('href');

      // Add active class for visual feedback
      this.classList.add('clicked');

      // Start the transition
      startPageTransition(url);

      // Remove clicked class after animation
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  });
}

/**
 * Starts the page transition effect
 * @param {string} url - The URL to navigate to
 */
function startPageTransition(url) {
  // Don't transition if it's the current page
  if (url === window.location.href) return;

  // Store the fact that we're coming from a transition
  sessionStorage.setItem('pageTransition', 'true');

  // Apply to bottom navigation
  const bottomNav = document.querySelector('.bottom-nav');

  if (bottomNav) {
    // Add slide down animation
    bottomNav.classList.add('nav-slide-down');

    // Add staggered exit animation to nav items in reverse order
    const navItems = Array.from(bottomNav.querySelectorAll('.bottom-nav-item'));
    navItems.reverse().forEach((item, index) => {
      item.style.transition = `opacity 0.3s ease, transform 0.3s ease`;
      item.style.transitionDelay = `${index * 0.05}s`;
      item.style.opacity = '0';
      item.style.transform = 'translateY(15px)';
    });
  }

  // Add transition overlay with slight delay
  setTimeout(() => {
    document.body.classList.add('page-transition-active');
  }, 200);

  // Navigate after animations complete
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

/**
 * Handles the page load animation
 */
function handlePageLoad() {
  // Remove transition overlay immediately
  document.body.classList.remove('page-transition-active');
}

// Handle page load
window.addEventListener('load', handlePageLoad);

/**
 * Applies immediate slide-up effect for pages loaded via transition
 */
function applySlideUpEffect() {
  // Apply to bottom navigation
  const bottomNav = document.querySelector('.bottom-nav');

  if (bottomNav) {
    // Make sure any previous animations are removed
    bottomNav.classList.remove('nav-fancy-entrance');
    bottomNav.classList.remove('nav-slide-down');

    // Force a reflow to ensure clean animation state
    void bottomNav.offsetWidth;

    // Use the fancy entrance animation
    bottomNav.classList.add('nav-fancy-entrance');

    // Apply staggered animation to nav items
    const navItems = bottomNav.querySelectorAll('.bottom-nav-item');
    navItems.forEach((item, index) => {
      // Remove any previous animation classes
      item.classList.remove('nav-item-stagger');
      item.style.opacity = '';
      item.style.transform = '';
      item.style.transition = '';
      item.style.transitionDelay = '';

      // Force a reflow
      void item.offsetWidth;

      // Add the staggered animation
      item.classList.add('nav-item-stagger');
      item.style.animationDelay = `${0.05 + index * 0.06}s`;
    });
  }
}

/**
 * Adds slide-in effect when page loads directly (not via transition)
 */
function addSlideInEffect() {
  // Only apply if not already animated
  if (!document.body.classList.contains('animation-applied')) {
    // Apply to bottom navigation
    const bottomNav = document.querySelector('.bottom-nav');

    if (bottomNav) {
      // Make sure any previous animations are removed
      bottomNav.classList.remove('nav-fancy-entrance');
      bottomNav.classList.remove('nav-slide-down');

      // Use the fancy entrance animation with a slight delay
      setTimeout(() => {
        // Force a reflow to ensure clean animation state
        void bottomNav.offsetWidth;

        // Add the animation class
        bottomNav.classList.add('nav-fancy-entrance');

        // Apply staggered animation to nav items
        const navItems = bottomNav.querySelectorAll('.bottom-nav-item');
        navItems.forEach((item, index) => {
          // Remove any previous animation classes
          item.classList.remove('nav-item-stagger');
          item.style.opacity = '';
          item.style.transform = '';
          item.style.transition = '';
          item.style.transitionDelay = '';

          // Force a reflow
          void item.offsetWidth;

          // Add the staggered animation
          item.classList.add('nav-item-stagger');
          item.style.animationDelay = `${0.05 + index * 0.06}s`;
        });

        // Mark as applied
        document.body.classList.add('animation-applied');
      }, 50);
    }
  }
}

// Add animation to bottom nav items
document.addEventListener('DOMContentLoaded', function () {
  const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

  bottomNavItems.forEach((item) => {
    item.addEventListener('click', function () {
      if (this.id === 'search-nav') return;

      const icon = this.querySelector('i');
      if (icon) {
        // Add animation class
        icon.classList.add('nav-icon-animate');

        // Remove animation class after it completes
        setTimeout(() => {
          icon.classList.remove('nav-icon-animate');
        }, 500);
      }
    });
  });

  // Add styles for icon animation
  const styleElement = document.createElement('style');
  styleElement.textContent = `
        @keyframes navIconAnimate {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }

        .nav-icon-animate {
            animation: navIconAnimate 0.5s ease;
        }

        .bottom-nav-item.clicked i {
            color: #0058dd;
        }
    `;
  document.head.appendChild(styleElement);
});
