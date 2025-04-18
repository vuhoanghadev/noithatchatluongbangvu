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

    // Luxury image display effect for Safari version of changeMainImage
    window.changeMainImage = function (thumbnail, imageSrc) {
      // Get the main image element
      const mainImage = document.getElementById('main-image');
      if (!mainImage) return;

      // Get the main image container
      const mainImageContainer = mainImage.parentElement;

      // Preload the image to avoid flickering
      const preloadImg = new Image();
      preloadImg.src = imageSrc;

      // Check if we're already in a transition
      if (mainImageContainer.dataset.transitioning === 'true') {
        // If we're in a transition, just update the main image directly without effects
        mainImage.src = imageSrc;

        // Update active thumbnail without fancy effects
        const thumbnails = document.querySelectorAll('.thumbnails img');
        thumbnails.forEach((thumb) => {
          thumb.classList.remove('active');
        });
        thumbnail.classList.add('active');
        return;
      }

      // Set transitioning flag
      mainImageContainer.dataset.transitioning = 'true';

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

      // Create a simplified luxury image display effect with fewer layers

      // 1. Create the zoom-blur container for the current image
      const zoomBlurContainer = document.createElement('div');
      zoomBlurContainer.className = 'safari-zoom-blur-container';
      zoomBlurContainer.style.backgroundImage = `url(${mainImage.src})`;
      transitionContainer.appendChild(zoomBlurContainer);

      // 2. Create the elegant gradient overlay
      const gradientOverlay = document.createElement('div');
      gradientOverlay.className = 'safari-gradient-overlay';
      transitionContainer.appendChild(gradientOverlay);

      // 3. Create the main image with luxury transition
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.alt = mainImage.alt;
      newImage.className = 'safari-luxury-image';
      transitionContainer.appendChild(newImage);

      // Ensure the image is loaded before starting animations
      newImage.onload = function () {
        // Start the luxury image display sequence with shorter durations
        // First, activate the zoom-blur effect on current image
        requestAnimationFrame(() => {
          zoomBlurContainer.classList.add('active');

          // Then show the gradient overlay
          setTimeout(() => {
            gradientOverlay.classList.add('active');
          }, 50);

          // Fade in the new image with luxury effect
          setTimeout(() => {
            newImage.classList.add('active');
          }, 100);

          // After luxury transition completes, update the main image and clean up
          setTimeout(() => {
            mainImage.src = imageSrc;
            transitionContainer.innerHTML = '';
            // Reset transitioning flag
            mainImageContainer.dataset.transitioning = 'false';
          }, 300);
        });
      };

      // If image is already cached, onload might not fire, so we need a fallback
      if (preloadImg.complete) {
        newImage.onload();
      }

      // Add a luxury shadow effect to the main container
      mainImageContainer.classList.add('safari-luxury-shadow');
      setTimeout(() => {
        mainImageContainer.classList.remove('safari-luxury-shadow');
      }, 300);

      // Update active thumbnail without fancy effects
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
      });

      // Simply add active class to clicked thumbnail
      thumbnail.classList.add('active');
    };

    // Add premium luxury effect Safari-specific CSS
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
                transition: box-shadow 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: box-shadow 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            }

            /* Luxury shadow effect for main container */
            .safari-browser .main-image-container.safari-luxury-shadow {
                box-shadow: 0 15px 35px rgba(249, 115, 22, 0.35), 0 0 15px rgba(249, 115, 22, 0.2);
                transform: translateY(-5px);
                -webkit-transform: translateY(-5px);
            }

            .safari-browser .main-image-container img {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
            }

            /* Premium transition container */
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

            /* Blur layer for depth effect */
            .safari-blur-layer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backdrop-filter: blur(0px);
                -webkit-backdrop-filter: blur(0px);
                background-color: rgba(255, 255, 255, 0);
                transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 1;
            }

            .safari-blur-layer.active {
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                background-color: rgba(255, 255, 255, 0.1);
            }

            /* Zoom-blur container for current image transition */
            .safari-zoom-blur-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-size: cover;
                background-position: center;
                opacity: 1;
                transform: scale(1);
                filter: blur(0);
                -webkit-filter: blur(0);
                transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 1;
            }

            .safari-zoom-blur-container.active {
                opacity: 0;
                transform: scale(1.1);
                -webkit-transform: scale(1.1);
                filter: blur(10px);
                -webkit-filter: blur(10px);
            }

            /* Elegant gradient overlay */
            .safari-gradient-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(0, 88, 221, 0.1) 100%);
                opacity: 0;
                transition: opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 2;
            }

            .safari-gradient-overlay.active {
                opacity: 1;
            }

            /* Radial reveal effect */
            .safari-radial-reveal {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, transparent 30%, rgba(255, 255, 255, 0.2) 70%);
                opacity: 0;
                transform: scale(0.1);
                -webkit-transform: scale(0.1);
                transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 3;
                mix-blend-mode: overlay;
            }

            .safari-radial-reveal.active {
                opacity: 1;
                transform: scale(2);
                -webkit-transform: scale(2);
            }

            /* Luxury image transition */
            .safari-luxury-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                transform: scale(1.05);
                -webkit-transform: scale(1.05);
                filter: brightness(1.05) contrast(1.05) saturate(1.05);
                -webkit-filter: brightness(1.05) contrast(1.05) saturate(1.05);
                transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 4;
            }

            .safari-luxury-image.active {
                opacity: 1;
                transform: scale(1);
                -webkit-transform: scale(1);
            }

            /* Luxury shine effect */
            .safari-luxury-shine {
                position: absolute;
                top: -100%;
                left: -100%;
                width: 300%;
                height: 300%;
                background: linear-gradient(135deg,
                    rgba(255,255,255,0) 0%,
                    rgba(255,255,255,0) 40%,
                    rgba(255,255,255,0.5) 50%,
                    rgba(255,255,255,0) 60%,
                    rgba(255,255,255,0) 100%);
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                opacity: 0;
                transition: opacity 0.4s ease, transform 1.5s ease;
                -webkit-transition: opacity 0.4s ease, -webkit-transform 1.5s ease;
                z-index: 5;
                pointer-events: none;
            }

            .safari-luxury-shine.active {
                opacity: 0.8;
                transform: rotate(45deg) translate(100%, 100%);
                -webkit-transform: rotate(45deg) translate(100%, 100%);
            }

            /* Vignette effect for depth */
            .safari-vignette {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.3);
                opacity: 0;
                transition: opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 6;
                border-radius: var(--product-card-radius);
            }

            .safari-vignette.active {
                opacity: 0.6;
            }

            /* Simple thumbnail effects */
            .safari-browser .thumbnails img {
                transition: all 0.3s ease;
                -webkit-transition: all 0.3s ease;
                border: 2px solid transparent;
                position: relative;
                overflow: hidden;
            }

            .safari-browser .thumbnails img:hover {
                border-color: rgba(249, 115, 22, 0.5);
            }

            .safari-browser .thumbnails img.active {
                border-color: var(--product-primary);
                box-shadow: 0 5px 15px rgba(249, 115, 22, 0.2);
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
