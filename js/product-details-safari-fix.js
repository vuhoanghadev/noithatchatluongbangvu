// Safari Fix for Product Details Page
(function() {
    // Detect Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        console.log('Safari detected, applying product details fixes...');
        
        // Add class to body
        document.body.classList.add('safari-browser');
        
        // Override the global changeMainImage function for Safari
        window.originalChangeMainImage = window.changeMainImage;
        
        // Safari-optimized version of changeMainImage
        window.changeMainImage = function(thumbnail, imageSrc) {
            // Get the main image element
            const mainImage = document.getElementById('main-image');
            if (!mainImage) return;
            
            // Create a container for the transition if it doesn't exist
            let transitionContainer = document.querySelector('.safari-image-transition-container');
            if (!transitionContainer) {
                transitionContainer = document.createElement('div');
                transitionContainer.className = 'safari-image-transition-container';
                mainImage.parentElement.appendChild(transitionContainer);
            }
            
            // Create a new image for the transition
            const newImage = document.createElement('img');
            newImage.src = imageSrc;
            newImage.alt = mainImage.alt;
            newImage.className = 'safari-transition-image';
            
            // Clear any existing transition images
            transitionContainer.innerHTML = '';
            transitionContainer.appendChild(newImage);
            
            // Add the fade-in class to trigger the animation
            setTimeout(() => {
                newImage.classList.add('fade-in');
            }, 10);
            
            // After animation completes, update the main image
            setTimeout(() => {
                mainImage.src = imageSrc;
                // Clear the transition container
                transitionContainer.innerHTML = '';
            }, 400);
            
            // Update active thumbnail
            const thumbnails = document.querySelectorAll('.thumbnails img');
            thumbnails.forEach(thumb => {
                thumb.classList.remove('active');
            });
            
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            // Add a simple highlight effect instead of ripple
            thumbnail.classList.add('safari-highlight');
            setTimeout(() => {
                thumbnail.classList.remove('safari-highlight');
            }, 500);
        };
        
        // Add Safari-specific CSS
        const safariStyles = document.createElement('style');
        safariStyles.textContent = `
            /* Safari-specific styles for product gallery */
            .safari-browser .main-image-container {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
                overflow: hidden;
            }
            
            .safari-browser .main-image-container img {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
            }
            
            .safari-image-transition-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none;
            }
            
            .safari-transition-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transform: scale(0.95);
                transition: opacity 0.4s ease, transform 0.4s ease;
            }
            
            .safari-transition-image.fade-in {
                opacity: 1;
                transform: scale(1);
            }
            
            .safari-browser .thumbnails img.safari-highlight {
                border-color: var(--product-primary);
                transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(249, 115, 22, 0.4);
            }
            
            /* Disable problematic animations on Safari */
            .safari-browser .main-image-container img.fade-in,
            .safari-browser .main-image-container img.fade-out {
                animation: none !important;
            }
        `;
        document.head.appendChild(safariStyles);
    }
})();
