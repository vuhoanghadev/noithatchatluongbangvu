// Safari Thumbnails Fix - Smooth Transition Effects
(function () {
    // Detect Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
        console.log('Safari detected, applying enhanced thumbnails effects...');

        // Override the global slideThumbnails function for Safari
        window.originalSlideThumbnails = window.slideThumbnails;

        // Safari-specific version of slideThumbnails
        window.slideThumbnails = function (direction) {
            const thumbnailsSlider = document.getElementById('thumbnails-slider');
            if (!thumbnailsSlider) return;

            // Get all thumbnails
            const thumbnails = thumbnailsSlider.querySelectorAll('img');
            const thumbnailCount = thumbnails.length;
            
            // Calculate visible thumbnails
            const containerWidth = thumbnailsSlider.parentElement.offsetWidth;
            const thumbnailWidth = 80; // Approximate width of thumbnail + gap
            const visibleCount = Math.floor(containerWidth / thumbnailWidth);
            
            // Get current position from data attribute or initialize it
            let currentPosition = parseInt(thumbnailsSlider.getAttribute('data-position') || '0');
            
            // Calculate new position based on direction
            if (direction === 'next') {
                currentPosition = Math.min(currentPosition + visibleCount, thumbnailCount - visibleCount);
            } else {
                currentPosition = Math.max(currentPosition - visibleCount, 0);
            }
            
            // Store the new position
            thumbnailsSlider.setAttribute('data-position', currentPosition.toString());
            
            // Apply fade effect to all thumbnails
            thumbnails.forEach(thumb => {
                thumb.classList.add('thumbnail-fade');
                setTimeout(() => {
                    thumb.classList.remove('thumbnail-fade');
                }, 300);
            });
            
            // Create a smooth scrolling effect using opacity instead of transform
            // First, make all thumbnails slightly transparent
            thumbnails.forEach(thumb => {
                thumb.style.opacity = '0.5';
                thumb.style.transition = 'opacity 0.3s ease';
            });
            
            // Then, after a small delay, scroll to the new position and restore opacity
            setTimeout(() => {
                // Use scrollTo for Safari which works better than transform
                thumbnailsSlider.scrollTo({
                    left: currentPosition * thumbnailWidth,
                    behavior: 'smooth'
                });
                
                // Restore opacity with a slight delay for each thumbnail
                thumbnails.forEach((thumb, index) => {
                    setTimeout(() => {
                        thumb.style.opacity = '1';
                    }, 50 * Math.abs(index - currentPosition));
                });
            }, 50);
            
            // Update navigation buttons
            updateThumbnailNavigation(currentPosition, thumbnailCount, visibleCount);
        };

        // Override the changeMainImage function for Safari
        window.originalChangeMainImage = window.changeMainImage;

        // Safari-specific version of changeMainImage
        window.changeMainImage = function (thumbnail, imageSrc) {
            // Get the main image element
            const mainImage = document.getElementById('main-image');
            if (!mainImage) return;

            // Get the main image container
            const mainImageContainer = mainImage.parentElement;

            // Create a container for the transition if it doesn't exist
            let transitionContainer = document.querySelector('.safari-image-transition-container');
            if (!transitionContainer) {
                transitionContainer = document.createElement('div');
                transitionContainer.className = 'safari-image-transition-container';
                mainImageContainer.appendChild(transitionContainer);
            }

            // Clear any existing content
            transitionContainer.innerHTML = '';

            // Create a simple fade transition for Safari
            const newImage = document.createElement('img');
            newImage.src = imageSrc;
            newImage.alt = mainImage.alt;
            newImage.className = 'safari-luxury-image';
            transitionContainer.appendChild(newImage);

            // Fade in the new image
            setTimeout(() => {
                newImage.classList.add('active');
            }, 10);

            // After transition completes, update the main image and clean up
            setTimeout(() => {
                mainImage.src = imageSrc;
                transitionContainer.innerHTML = '';
            }, 800);

            // Update active thumbnail
            const thumbnails = document.querySelectorAll('.thumbnails img');
            thumbnails.forEach((thumb) => {
                thumb.classList.remove('active');
            });

            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
        };

        // Add Safari-specific thumbnail navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize thumbnail positions
            const thumbnailsSlider = document.getElementById('thumbnails-slider');
            if (thumbnailsSlider) {
                thumbnailsSlider.setAttribute('data-position', '0');
                
                // Add Safari-specific class to thumbnails container
                const thumbnailsContainer = document.querySelector('.thumbnails-container');
                if (thumbnailsContainer) {
                    thumbnailsContainer.classList.add('safari-thumbnails-container');
                }
            }
        });
    }
})();
