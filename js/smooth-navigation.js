/**
 * Smooth Navigation
 * Provides smooth transitions between pages with slide effects
 */
document.addEventListener('DOMContentLoaded', function () {
  // Create transition overlay
  createTransitionOverlay();

  // Initialize smooth navigation
  initSmoothNavigation();

  // Check if we're coming from a transition
  const isFromTransition = sessionStorage.getItem('pageTransition') === 'true';

  if (isFromTransition) {
    // Apply immediate slide-up effect for content and nav
    applySlideUpEffect();
  } else {
    // Add normal slide-in effect when page loads directly
    addSlideInEffect();
  }
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
                border: 3px solid rgba(249, 115, 22, 0.1);
                border-top: 3px solid #f97316;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 10px;
            }

            .loader-text {
                color: #f97316;
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
                animation: navSlideDown 0.5s ease forwards;
            }

            .nav-slide-up {
                animation: navSlideUp 0.5s ease forwards;
            }

            @keyframes navSlideDown {
                0% { transform: translateY(0); }
                100% { transform: translateY(60px); }
            }

            @keyframes navSlideUp {
                0% { transform: translateY(60px); }
                100% { transform: translateY(0); }
            }

            /* Ensure bottom nav stays visible during transitions */
            .bottom-nav {
                z-index: 10000;
            }

            /* Floating contact buttons should stay visible */
            .fc-container {
                z-index: 10001;
            }

            /* Back to top button should stay visible */
            .back-to-top {
                z-index: 10001;
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

  // Only apply to bottom navigation
  const bottomNav = document.querySelector('.bottom-nav');

  if (bottomNav) {
    bottomNav.style.transition = 'transform 0.4s ease';
    bottomNav.style.transform = 'translateY(60px)'; // Slide down animation
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

  // Check if we're coming from a transition
  const isFromTransition = sessionStorage.getItem('pageTransition') === 'true';
  if (isFromTransition) {
    // Clear the flag
    sessionStorage.removeItem('pageTransition');
  }
}

// Handle page load
window.addEventListener('load', handlePageLoad);

/**
 * Applies immediate slide-up effect for pages loaded via transition
 */
function applySlideUpEffect() {
  // Only apply to bottom navigation
  const bottomNav = document.querySelector('.bottom-nav');

  if (bottomNav) {
    // Set initial state
    bottomNav.style.transform = 'translateY(60px)';

    // Apply transition immediately
    requestAnimationFrame(() => {
      bottomNav.style.transition = 'transform 0.5s ease';
      bottomNav.style.transform = 'translateY(0)';
    });
  }
}

/**
 * Adds slide-in effect when page loads directly (not via transition)
 */
function addSlideInEffect() {
  // Only apply if not already animated
  if (!document.body.classList.contains('animation-applied')) {
    // Only apply to bottom navigation
    const bottomNav = document.querySelector('.bottom-nav');

    if (bottomNav) {
      bottomNav.style.transform = 'translateY(60px)';

      // Add a slight delay to ensure DOM is ready
      setTimeout(() => {
        // Apply transition
        bottomNav.style.transition = 'transform 0.5s ease';
        bottomNav.style.transform = 'translateY(0)';

        // Mark as applied
        document.body.classList.add('animation-applied');
      }, 100);
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
            color: #f97316;
        }
    `;
  document.head.appendChild(styleElement);
});
