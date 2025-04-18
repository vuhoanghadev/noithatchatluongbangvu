// Safari Thumbnails Extreme Fix - Complete Replacement
(function () {
    // Detect Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        console.log('Safari detected, applying extreme thumbnails fix...');

        // Wait for DOM to be fully loaded
        document.addEventListener('DOMContentLoaded', function() {
            // Add Safari-specific class to body
            document.body.classList.add('safari-browser');
            
            // Completely replace the thumbnails functionality
            setTimeout(replaceThumbnailsFunctionality, 500);
        });
        
        // Function to completely replace thumbnails functionality
        function replaceThumbnailsFunctionality() {
            // Get the thumbnails container
            const thumbnailsContainer = document.querySelector('.thumbnails-container');
            if (!thumbnailsContainer) return;
            
            // Get the main image
            const mainImage = document.getElementById('main-image');
            if (!mainImage) return;
            
            // Get all thumbnails
            const originalThumbnails = document.querySelectorAll('.thumbnails img');
            if (originalThumbnails.length === 0) return;
            
            // Create a new thumbnails container with simplified structure
            const newContainer = document.createElement('div');
            newContainer.className = 'safari-simple-thumbnails-container';
            newContainer.style.display = 'flex';
            newContainer.style.flexWrap = 'wrap';
            newContainer.style.gap = '10px';
            newContainer.style.marginTop = '15px';
            
            // Create simplified thumbnails
            originalThumbnails.forEach((thumb, index) => {
                // Extract image source
                let imageSrc = thumb.src;
                const onclickAttr = thumb.getAttribute('onclick');
                if (onclickAttr) {
                    const match = onclickAttr.match(/'([^']+)'/)
                    if (match) {
                        imageSrc = match[1];
                    }
                }
                
                // Create new thumbnail
                const newThumb = document.createElement('img');
                newThumb.src = thumb.src;
                newThumb.alt = thumb.alt || 'Thumbnail';
                newThumb.style.width = '60px';
                newThumb.style.height = '60px';
                newThumb.style.objectFit = 'cover';
                newThumb.style.borderRadius = '4px';
                newThumb.style.cursor = 'pointer';
                newThumb.style.border = index === 0 ? '2px solid #f97316' : '2px solid transparent';
                newThumb.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
                
                // Add simple click handler
                newThumb.addEventListener('click', function() {
                    // Update main image directly
                    mainImage.src = imageSrc;
                    
                    // Update active state
                    document.querySelectorAll('.safari-simple-thumbnails-container img').forEach(img => {
                        img.style.border = '2px solid transparent';
                    });
                    this.style.border = '2px solid #f97316';
                });
                
                // Add to container
                newContainer.appendChild(newThumb);
            });
            
            // Replace the original thumbnails container
            thumbnailsContainer.innerHTML = '';
            thumbnailsContainer.appendChild(newContainer);
            
            // Remove any problematic styles from main image container
            const mainImageContainer = mainImage.parentElement;
            if (mainImageContainer) {
                mainImageContainer.style.transition = 'none';
                mainImageContainer.style.transform = 'none';
                mainImage.style.transition = 'none';
                mainImage.style.transform = 'none';
                mainImage.style.animation = 'none';
            }
            
            // Override global functions to prevent errors
            window.slideThumbnails = function() {
                // Do nothing - no sliding needed with the new layout
                console.log('Safari: slideThumbnails disabled');
            };
            
            window.changeMainImage = function(thumbnail, imageSrc) {
                // Simple direct image change
                if (mainImage) {
                    mainImage.src = imageSrc;
                }
                console.log('Safari: simplified changeMainImage used');
            };
        }
    }
})();
