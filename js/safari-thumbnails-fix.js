/**
 * Safari-specific thumbnail fix for product-details.html
 * This script detects Safari browser and applies special handling for thumbnails
 */

document.addEventListener('DOMContentLoaded', function() {
    // Detect Safari browser
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        console.log('Safari browser detected, applying special thumbnail handling');
        
        // Add Safari class to body for CSS targeting
        document.body.classList.add('safari-browser');
        
        // Override the changeMainImage function for Safari
        window.originalChangeMainImage = window.changeMainImage;
        
        window.changeMainImage = function(imageSrc) {
            const mainImage = document.getElementById('main-image');
            if (!mainImage) return;
            
            // Special handling for Safari
            // 1. Create a fade out effect
            mainImage.classList.add('safari-image-transition');
            
            // 2. Wait for fade out to complete, then change the image
            setTimeout(function() {
                // Change the image source
                mainImage.src = imageSrc;
                
                // 3. Wait for the image to load, then fade it back in
                mainImage.onload = function() {
                    setTimeout(function() {
                        mainImage.classList.remove('safari-image-transition');
                    }, 50);
                };
                
                // If image fails to load or onload doesn't fire
                setTimeout(function() {
                    mainImage.classList.remove('safari-image-transition');
                }, 300);
            }, 300);
        };
        
        // Override the slideThumbnails function for Safari
        window.originalSlideThumbnails = window.slideThumbnails;
        
        window.slideThumbnails = function(direction) {
            const thumbnailsSlider = document.getElementById('thumbnails-slider');
            if (!thumbnailsSlider) return;
            
            // Get all thumbnails
            const thumbnails = thumbnailsSlider.querySelectorAll('img');
            const thumbnailCount = thumbnails.length;
            
            // Calculate sizes and positions
            const thumbnailWidth = 90; // Width of thumbnail + gap
            const visibleWidth = thumbnailsSlider.offsetWidth;
            const visibleThumbnails = Math.floor(visibleWidth / thumbnailWidth);
            
            // Get current transform value
            const transform = window.getComputedStyle(thumbnailsSlider).getPropertyValue('transform');
            let currentTranslateX = 0;
            
            if (transform && transform !== 'none') {
                const matrix = transform.match(/matrix\\((.*)\\)/);
                if (matrix) {
                    const values = matrix[1].split(', ');
                    currentTranslateX = parseFloat(values[4]) || 0;
                }
            }
            
            // Calculate current index based on translateX
            const currentIndex = Math.round(Math.abs(currentTranslateX) / thumbnailWidth);
            
            // Determine new index
            let newIndex;
            if (direction === 'next') {
                newIndex = Math.min(currentIndex + visibleThumbnails, thumbnailCount - visibleThumbnails);
            } else {
                newIndex = Math.max(currentIndex - visibleThumbnails, 0);
            }
            
            // Calculate new position
            const newPosition = -newIndex * thumbnailWidth;
            
            // Apply the new position directly without transition
            thumbnailsSlider.style.transition = 'none';
            thumbnailsSlider.style.transform = `translateX(${newPosition}px)`;
            
            // Force a reflow to ensure the transition is removed
            thumbnailsSlider.offsetHeight;
            
            // Update navigation buttons
            setTimeout(() => {
                updateThumbnailNavigation(newIndex, thumbnailCount, visibleThumbnails);
            }, 50);
        };
        
        // Fix thumbnail click handling for Safari
        const thumbnails = document.querySelectorAll('.thumbnails img');
        thumbnails.forEach(thumb => {
            // Remove any existing click handlers
            const newThumb = thumb.cloneNode(true);
            thumb.parentNode.replaceChild(newThumb, thumb);
            
            // Add new click handler with Safari-specific behavior
            newThumb.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Get the image source from onclick attribute if it exists
                let imgSrc = this.src;
                const onclickAttr = this.getAttribute('onclick');
                if (onclickAttr) {
                    const match = onclickAttr.match(/'([^']+)'/);
                    if (match) {
                        imgSrc = match[1];
                    }
                }
                
                // Call the Safari-specific changeMainImage function
                changeMainImage(imgSrc);
                
                // Update active state on thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});
