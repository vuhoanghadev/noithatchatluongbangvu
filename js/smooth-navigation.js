/**
 * Smooth Navigation
 * Provides smooth transitions between pages without SPA complexity
 */
document.addEventListener('DOMContentLoaded', function() {
    // Create transition overlay
    createTransitionOverlay();
    
    // Initialize smooth navigation
    initSmoothNavigation();
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
            
            /* Ensure bottom nav stays visible during transitions */
            .bottom-nav {
                z-index: 10000;
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
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function(e) {
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
    
    // Add transition class to body
    document.body.classList.add('page-transition-active');
    
    // Add a small delay before navigation to show the transition
    setTimeout(() => {
        // Navigate to the new page
        window.location.href = url;
    }, 500);
}

/**
 * Handles the page load animation
 */
function handlePageLoad() {
    // Remove transition class if it exists
    document.body.classList.remove('page-transition-active');
}

// Handle page load
window.addEventListener('load', handlePageLoad);

// Add animation to bottom nav items
document.addEventListener('DOMContentLoaded', function() {
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
    
    bottomNavItems.forEach(item => {
        item.addEventListener('click', function() {
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
