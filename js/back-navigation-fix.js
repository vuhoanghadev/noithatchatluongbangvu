/**
 * Back Navigation Fix
 * Fixes issues with loading overlay when using browser back button on mobile
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize back navigation fix
    initBackNavigationFix();
});

/**
 * Initializes the back navigation fix
 */
function initBackNavigationFix() {
    // Store current page in session storage when leaving
    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('lastPage', window.location.href);
    });

    // Handle page show event (triggered when page is shown, including from back/forward cache)
    window.addEventListener('pageshow', function(event) {
        // Check if page was loaded from cache (back button pressed)
        if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
            console.log('Page loaded from cache (back button pressed)');
            
            // Hide any loading overlays
            hideLoadingOverlays();
            
            // Clear page transition flag
            sessionStorage.removeItem('pageTransition');
            
            // Remove page-transition-active class if present
            document.body.classList.remove('page-transition-active');
        }
    });

    // Handle popstate event (triggered when navigating through history)
    window.addEventListener('popstate', function() {
        console.log('Popstate event detected');
        
        // Hide any loading overlays
        hideLoadingOverlays();
        
        // Clear page transition flag
        sessionStorage.removeItem('pageTransition');
        
        // Remove page-transition-active class if present
        document.body.classList.remove('page-transition-active');
    });

    // Handle visibility change (when app comes back to foreground on mobile)
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            console.log('Page became visible again');
            
            // Hide any loading overlays
            hideLoadingOverlays();
        }
    });
}

/**
 * Hides all loading overlays and indicators
 */
function hideLoadingOverlays() {
    // Hide page transition overlay
    const pageTransitionContainer = document.querySelector('.page-transition-container');
    if (pageTransitionContainer) {
        document.body.classList.remove('page-transition-active');
    }
    
    // Hide page loading indicator
    const loadingIndicator = document.querySelector('.page-loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.classList.remove('active');
    }
    
    // Reset progress bar
    const progressBar = document.querySelector('.page-load-progress');
    if (progressBar) {
        progressBar.classList.remove('active');
        progressBar.style.width = '0%';
    }
    
    // Hide page transition ripple
    const rippleContainer = document.querySelector('.page-transition-ripple');
    if (rippleContainer) {
        rippleContainer.classList.remove('active');
    }
    
    // Hide page transition overlay
    const overlay = document.querySelector('.page-transition-overlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    // Clear any loading timeouts
    if (window.loadingTimeout) {
        clearTimeout(window.loadingTimeout);
        window.loadingTimeout = null;
    }
    
    // Clear any progress intervals
    if (window.progressInterval) {
        clearInterval(window.progressInterval);
        window.progressInterval = null;
    }
    
    // Reset bottom navigation if it was hidden
    const bottomNav = document.querySelector('.bottom-nav');
    if (bottomNav && bottomNav.style.transform === 'translateY(60px)') {
        bottomNav.style.transition = 'transform 0.5s ease';
        bottomNav.style.transform = 'translateY(0)';
    }
}
