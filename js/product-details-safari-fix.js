// Safari Fix for Product Details Page
(function () {
  // Detect Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    console.log(
      'Safari detected, applying enhanced product details effects...'
    );

    // Add class to body
    document.body.classList.add('safari-browser');

    // Override the global changeMainImage function for Safari
    window.originalChangeMainImage = window.changeMainImage;

    // Simple fade effect for Safari version of changeMainImage
    window.changeMainImage = function (thumbnail, imageSrc) {
      // Get the main image element
      const mainImage = document.getElementById('main-image');
      if (!mainImage) return;

      // Get the main image container
      const mainImageContainer = mainImage.parentElement;

      // Create a container for the transition if it doesn't exist
      let transitionContainer = document.querySelector(
        '.safari-image-transition-container'
      );
      if (!transitionContainer) {
        transitionContainer = document.createElement('div');
        transitionContainer.className = 'safari-image-transition-container';
        mainImageContainer.appendChild(transitionContainer);
      }

      // Clear any existing content
      transitionContainer.innerHTML = '';

      // Create a new image for the fade transition
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.alt = mainImage.alt;
      newImage.className = 'safari-fade-image';
      transitionContainer.appendChild(newImage);

      // Simple fade in effect
      setTimeout(() => {
        newImage.classList.add('fade-in');
      }, 10);

      // After fade completes, update the main image and clean up
      setTimeout(() => {
        mainImage.src = imageSrc;
        transitionContainer.innerHTML = '';
      }, 600);

      // Update active thumbnail
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
      });

      // Add active class to clicked thumbnail
      thumbnail.classList.add('active');
    };

    // Add simple fade effect Safari-specific CSS
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

            /* Simple transition container */
            .safari-image-transition-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 10;
                pointer-events: none;
                overflow: hidden;
                border-radius: var(--product-card-radius);
            }

            /* Simple fade image transition */
            .safari-fade-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transition: opacity 0.6s ease;
                -webkit-transition: opacity 0.6s ease;
                z-index: 2;
            }

            .safari-fade-image.fade-in {
                opacity: 1;
            }

            /* Simple thumbnail effects */
            .safari-browser .thumbnails img {
                transition: all 0.3s ease;
                -webkit-transition: all 0.3s ease;
                border: 2px solid transparent;
            }

            .safari-browser .thumbnails img:hover {
                border-color: rgba(249, 115, 22, 0.5);
            }

            .safari-browser .thumbnails img.active {
                border-color: var(--product-primary);
                transform: translateY(-3px);
                -webkit-transform: translateY(-3px);
                box-shadow: 0 5px 15px rgba(249, 115, 22, 0.3);
            }

            /* Disable problematic animations on Safari */
            .safari-browser .main-image-container img.fade-in,
            .safari-browser .main-image-container img.fade-out {
                animation: none !important;
                -webkit-animation: none !important;
            }
        `;
    document.head.appendChild(safariStyles);
  }
})();
