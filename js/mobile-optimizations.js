/**
 * Mobile Optimizations
 * Provides additional optimizations for mobile devices to prevent white screens
 * and ensure content is properly loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  // Only apply these optimizations on mobile devices
  if (window.innerWidth <= 768) {
    console.log('Applying mobile optimizations...');
    
    // Add a fallback mechanism to ensure content is visible
    ensureContentVisibility();
    
    // Add error recovery for page transitions
    addErrorRecovery();
    
    // Optimize image loading
    optimizeImageLoading();
  }
});

/**
 * Ensures content is visible even if page transitions fail
 */
function ensureContentVisibility() {
  // Set a timeout to check if main content is visible
  setTimeout(function() {
    const mainContent = document.querySelector('main');
    
    if (mainContent) {
      // Check if main content has any visible children
      const hasVisibleContent = Array.from(mainContent.children).some(child => {
        const style = window.getComputedStyle(child);
        return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
      });
      
      // If no visible content, try to recover
      if (!hasVisibleContent) {
        console.warn('No visible content detected, attempting recovery...');
        
        // Remove any classes that might be hiding content
        mainContent.classList.remove('fade-out');
        
        // Force content to be visible
        mainContent.style.opacity = '1';
        mainContent.style.visibility = 'visible';
        mainContent.style.display = 'block';
        
        // Remove any loading indicators
        const loadingElements = document.querySelectorAll('.page-loading-indicator, .spinner-overlay, .mobile-loading-indicator');
        loadingElements.forEach(el => {
          if (el && el.parentNode) {
            el.classList.remove('active', 'show');
            el.style.opacity = '0';
            el.style.visibility = 'hidden';
          }
        });
      }
    }
  }, 3000); // Check after 3 seconds
}

/**
 * Adds error recovery for page transitions
 */
function addErrorRecovery() {
  // Listen for unhandled errors
  window.addEventListener('error', function(event) {
    console.error('Unhandled error detected:', event.error);
    
    // Check if we're in a transition
    const isInTransition = document.querySelector('.page-transition-overlay.active') !== null;
    
    if (isInTransition) {
      console.warn('Error during page transition, attempting recovery...');
      
      // Reset transition state
      resetTransitionState();
    }
  });
  
  // Reset transition state
  function resetTransitionState() {
    // Reset any transition flags if the function exists
    if (typeof isTransitioning !== 'undefined') {
      isTransitioning = false;
    }
    
    // Hide loading elements
    const loadingElements = document.querySelectorAll('.page-loading-indicator, .page-transition-overlay, .page-transition-ripple');
    loadingElements.forEach(el => {
      if (el) {
        el.classList.remove('active');
      }
    });
    
    // Reset progress bar
    const progressBar = document.querySelector('.page-load-progress');
    if (progressBar) {
      progressBar.classList.remove('active');
      progressBar.style.width = '0%';
    }
    
    // Make main content visible
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.classList.remove('fade-out');
      mainContent.style.opacity = '1';
      mainContent.style.visibility = 'visible';
    }
  }
}

/**
 * Optimizes image loading for mobile
 */
function optimizeImageLoading() {
  // Find all images that aren't already lazy loaded
  const images = document.querySelectorAll('img:not([loading="lazy"])');
  
  // Add lazy loading attribute to images
  images.forEach(img => {
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
  
  // Add intersection observer for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
          }
          
          observer.unobserve(img);
        }
      });
    });
    
    // Observe images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Add event listener for page transitions completion
document.addEventListener('page-transition-complete', function() {
  // Only apply these optimizations on mobile devices
  if (window.innerWidth <= 768) {
    // Optimize image loading for newly loaded content
    optimizeImageLoading();
  }
});

// Add event listener for AJAX page loads
document.addEventListener('ajaxPageLoaded', function() {
  // Only apply these optimizations on mobile devices
  if (window.innerWidth <= 768) {
    // Optimize image loading for newly loaded content
    optimizeImageLoading();
  }
});
