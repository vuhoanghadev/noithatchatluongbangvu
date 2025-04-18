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

    // Enhanced Safari version of changeMainImage with beautiful effects
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

      // Create a transition overlay for the elegant effect
      const transitionOverlay = document.createElement('div');
      transitionOverlay.className = 'safari-transition-overlay';
      transitionContainer.appendChild(transitionOverlay);

      // Create a new image for the transition
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.alt = mainImage.alt;
      newImage.className = 'safari-transition-image';
      transitionContainer.appendChild(newImage);

      // Add the elegant transition effect
      // First, show the overlay
      setTimeout(() => {
        transitionOverlay.classList.add('active');
      }, 10);

      // Then, after a short delay, show the new image
      setTimeout(() => {
        newImage.classList.add('active');
      }, 300);

      // After animation completes, update the main image and clean up
      setTimeout(() => {
        mainImage.src = imageSrc;
        transitionContainer.innerHTML = '';
      }, 800);

      // Add a beautiful pulse effect to the main container
      mainImageContainer.classList.add('safari-pulse');
      setTimeout(() => {
        mainImageContainer.classList.remove('safari-pulse');
      }, 800);

      // Update active thumbnail with elegant effect
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
        thumb.classList.remove('safari-highlight');
      });

      // Add active class and beautiful highlight effect to clicked thumbnail
      thumbnail.classList.add('active');
      thumbnail.classList.add('safari-highlight');

      // Create a beautiful glow effect on the thumbnail
      const glowEffect = document.createElement('div');
      glowEffect.className = 'safari-thumbnail-glow';
      thumbnail.appendChild(glowEffect);

      // Remove the glow effect after animation
      setTimeout(() => {
        if (thumbnail.contains(glowEffect)) {
          thumbnail.removeChild(glowEffect);
        }
      }, 1000);
    };

    // Add enhanced Safari-specific CSS
    const safariStyles = document.createElement('style');
    safariStyles.textContent = `
            /* Enhanced Safari-specific styles for product gallery */
            .safari-browser .main-image-container {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
                overflow: hidden;
                transition: box-shadow 0.5s ease;
                -webkit-transition: box-shadow 0.5s ease;
            }

            /* Elegant pulse effect for main container */
            .safari-browser .main-image-container.safari-pulse {
                box-shadow: 0 5px 25px rgba(249, 115, 22, 0.4);
                animation: safari-container-pulse 0.8s ease;
                -webkit-animation: safari-container-pulse 0.8s ease;
            }

            @keyframes safari-container-pulse {
                0% { box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
                50% { box-shadow: 0 5px 30px rgba(249, 115, 22, 0.5); }
                100% { box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
            }

            @-webkit-keyframes safari-container-pulse {
                0% { box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
                50% { box-shadow: 0 5px 30px rgba(249, 115, 22, 0.5); }
                100% { box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1); }
            }

            .safari-browser .main-image-container img {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
            }

            /* Enhanced transition container */
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

            /* Beautiful overlay for transition effect */
            .safari-transition-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(249, 115, 22, 0.2);
                opacity: 0;
                transform: scale(1.1);
                transition: opacity 0.3s ease, transform 0.3s ease;
                -webkit-transition: opacity 0.3s ease, -webkit-transform 0.3s ease;
                z-index: 1;
            }

            .safari-transition-overlay.active {
                opacity: 1;
                transform: scale(1);
                -webkit-transform: scale(1);
            }

            /* Enhanced image transition */
            .safari-transition-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transform: scale(1.05);
                -webkit-transform: scale(1.05);
                transition: opacity 0.5s ease, transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                -webkit-transition: opacity 0.5s ease, -webkit-transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                z-index: 2;
            }

            .safari-transition-image.active {
                opacity: 1;
                transform: scale(1);
                -webkit-transform: scale(1);
            }

            /* Enhanced thumbnail effects */
            .safari-browser .thumbnails img {
                transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                -webkit-transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                position: relative;
                overflow: hidden;
            }

            .safari-browser .thumbnails img.safari-highlight {
                border-color: var(--product-primary);
                transform: translateY(-5px) scale(1.05);
                -webkit-transform: translateY(-5px) scale(1.05);
                box-shadow: 0 8px 20px rgba(249, 115, 22, 0.4);
            }

            /* Beautiful glow effect for thumbnails */
            .safari-thumbnail-glow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0) 70%);
                opacity: 0;
                animation: safari-thumbnail-glow 1s ease;
                -webkit-animation: safari-thumbnail-glow 1s ease;
                pointer-events: none;
                z-index: 2;
            }

            @keyframes safari-thumbnail-glow {
                0% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 0.8; transform: scale(1.2); }
                100% { opacity: 0; transform: scale(1.5); }
            }

            @-webkit-keyframes safari-thumbnail-glow {
                0% { opacity: 0; -webkit-transform: scale(0.5); }
                50% { opacity: 0.8; -webkit-transform: scale(1.2); }
                100% { opacity: 0; -webkit-transform: scale(1.5); }
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
