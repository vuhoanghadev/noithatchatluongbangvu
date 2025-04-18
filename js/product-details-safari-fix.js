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

    // Beautiful fade effect for Safari version of changeMainImage
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

      // Create a subtle overlay for the elegant fade effect
      const overlay = document.createElement('div');
      overlay.className = 'safari-fade-overlay';
      transitionContainer.appendChild(overlay);

      // Create a new image for the beautiful fade transition
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.alt = mainImage.alt;
      newImage.className = 'safari-fade-image';
      transitionContainer.appendChild(newImage);

      // Add a subtle shine effect element
      const shineEffect = document.createElement('div');
      shineEffect.className = 'safari-shine-effect';
      transitionContainer.appendChild(shineEffect);

      // Start the beautiful transition sequence
      // First, show the overlay
      setTimeout(() => {
        overlay.classList.add('active');
      }, 10);

      // Then fade in the new image
      setTimeout(() => {
        newImage.classList.add('fade-in');
      }, 150);

      // Add the shine effect
      setTimeout(() => {
        shineEffect.classList.add('active');
      }, 300);

      // After fade completes, update the main image and clean up
      setTimeout(() => {
        mainImage.src = imageSrc;
        transitionContainer.innerHTML = '';
      }, 800);

      // Add a subtle pulse to the container
      mainImageContainer.classList.add('safari-subtle-pulse');
      setTimeout(() => {
        mainImageContainer.classList.remove('safari-subtle-pulse');
      }, 800);

      // Update active thumbnail with elegant effect
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
      });

      // Add active class to clicked thumbnail with beautiful effect
      thumbnail.classList.add('active');

      // Add a subtle highlight effect to the thumbnail
      const highlightEffect = document.createElement('div');
      highlightEffect.className = 'safari-thumbnail-highlight';
      thumbnail.appendChild(highlightEffect);

      // Remove the highlight effect after animation
      setTimeout(() => {
        if (thumbnail.contains(highlightEffect)) {
          thumbnail.removeChild(highlightEffect);
        }
      }, 800);
    };

    // Add beautiful fade effect Safari-specific CSS
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
                transition: box-shadow 0.5s ease;
                -webkit-transition: box-shadow 0.5s ease;
            }

            /* Subtle pulse effect for main container */
            .safari-browser .main-image-container.safari-subtle-pulse {
                box-shadow: 0 8px 25px rgba(249, 115, 22, 0.25);
            }

            .safari-browser .main-image-container img {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
            }

            /* Beautiful transition container */
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

            /* Elegant overlay for fade effect */
            .safari-fade-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(249, 115, 22, 0.05) 100%);
                opacity: 0;
                transition: opacity 0.4s ease;
                -webkit-transition: opacity 0.4s ease;
                z-index: 1;
            }

            .safari-fade-overlay.active {
                opacity: 1;
            }

            /* Beautiful fade image transition */
            .safari-fade-image {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
                opacity: 0;
                filter: brightness(1.03);
                -webkit-filter: brightness(1.03);
                transition: opacity 0.6s ease;
                -webkit-transition: opacity 0.6s ease;
                z-index: 2;
            }

            .safari-fade-image.fade-in {
                opacity: 1;
            }

            /* Elegant shine effect */
            .safari-shine-effect {
                position: absolute;
                top: -100%;
                left: -100%;
                width: 300%;
                height: 300%;
                background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                opacity: 0;
                transition: opacity 0.4s ease, transform 1.2s ease;
                -webkit-transition: opacity 0.4s ease, -webkit-transform 1.2s ease;
                z-index: 3;
                pointer-events: none;
            }

            .safari-shine-effect.active {
                opacity: 0.6;
                transform: rotate(45deg) translate(100%, 100%);
                -webkit-transform: rotate(45deg) translate(100%, 100%);
            }

            /* Beautiful thumbnail effects */
            .safari-browser .thumbnails img {
                transition: all 0.4s ease;
                -webkit-transition: all 0.4s ease;
                border: 2px solid transparent;
                position: relative;
                overflow: hidden;
            }

            .safari-browser .thumbnails img:hover {
                border-color: rgba(249, 115, 22, 0.5);
                transform: translateY(-2px);
                -webkit-transform: translateY(-2px);
                box-shadow: 0 4px 10px rgba(249, 115, 22, 0.2);
            }

            .safari-browser .thumbnails img.active {
                border-color: var(--product-primary);
                transform: translateY(-4px);
                -webkit-transform: translateY(-4px);
                box-shadow: 0 6px 15px rgba(249, 115, 22, 0.3);
            }

            /* Subtle highlight effect for thumbnails */
            .safari-thumbnail-highlight {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, rgba(249, 115, 22, 0) 70%);
                opacity: 0;
                animation: safari-thumbnail-highlight 0.8s ease;
                -webkit-animation: safari-thumbnail-highlight 0.8s ease;
                pointer-events: none;
                z-index: 2;
                border-radius: 6px;
            }

            @keyframes safari-thumbnail-highlight {
                0% { opacity: 0; }
                40% { opacity: 0.7; }
                100% { opacity: 0; }
            }

            @-webkit-keyframes safari-thumbnail-highlight {
                0% { opacity: 0; }
                40% { opacity: 0.7; }
                100% { opacity: 0; }
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
