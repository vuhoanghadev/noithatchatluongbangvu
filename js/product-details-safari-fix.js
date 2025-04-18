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

    // Premium luxury effect for Safari version of changeMainImage
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

      // Create a premium transition scene with multiple layers

      // 1. Create the background blur layer
      const blurLayer = document.createElement('div');
      blurLayer.className = 'safari-blur-layer';
      transitionContainer.appendChild(blurLayer);

      // 2. Create the elegant gradient overlay
      const gradientOverlay = document.createElement('div');
      gradientOverlay.className = 'safari-gradient-overlay';
      transitionContainer.appendChild(gradientOverlay);

      // 3. Create particles container for luxury effect
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'safari-particles-container';
      transitionContainer.appendChild(particlesContainer);

      // Add particles for premium effect
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'safari-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        particle.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        particlesContainer.appendChild(particle);
      }

      // 4. Create the main image with premium transition
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.alt = mainImage.alt;
      newImage.className = 'safari-premium-image';
      transitionContainer.appendChild(newImage);

      // 5. Create the shine effect for luxury feel
      const shineEffect = document.createElement('div');
      shineEffect.className = 'safari-premium-shine';
      transitionContainer.appendChild(shineEffect);

      // 6. Create the vignette effect for depth
      const vignetteEffect = document.createElement('div');
      vignetteEffect.className = 'safari-vignette';
      transitionContainer.appendChild(vignetteEffect);

      // Start the premium transition sequence
      // First, show the blur layer
      setTimeout(() => {
        blurLayer.classList.add('active');
      }, 10);

      // Then show the gradient overlay
      setTimeout(() => {
        gradientOverlay.classList.add('active');
      }, 100);

      // Activate particles
      setTimeout(() => {
        particlesContainer.classList.add('active');
      }, 150);

      // Fade in the new image with premium effect
      setTimeout(() => {
        newImage.classList.add('active');
      }, 200);

      // Add the shine sweep effect
      setTimeout(() => {
        shineEffect.classList.add('active');
      }, 400);

      // Add the vignette effect
      setTimeout(() => {
        vignetteEffect.classList.add('active');
      }, 300);

      // After premium transition completes, update the main image and clean up
      setTimeout(() => {
        mainImage.src = imageSrc;
        transitionContainer.innerHTML = '';
      }, 1200);

      // Add a premium glow effect to the container
      mainImageContainer.classList.add('safari-premium-glow');
      setTimeout(() => {
        mainImageContainer.classList.remove('safari-premium-glow');
      }, 1200);

      // Update active thumbnail with premium effect
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
      });

      // Add active class to clicked thumbnail with premium effect
      thumbnail.classList.add('active');

      // Add a premium highlight effect to the thumbnail
      const highlightEffect = document.createElement('div');
      highlightEffect.className = 'safari-thumbnail-premium';
      thumbnail.appendChild(highlightEffect);

      // Remove the highlight effect after animation
      setTimeout(() => {
        if (thumbnail.contains(highlightEffect)) {
          thumbnail.removeChild(highlightEffect);
        }
      }, 1000);
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

            /* Premium glow effect for main container */
            .safari-browser .main-image-container.safari-premium-glow {
                box-shadow: 0 15px 35px rgba(249, 115, 22, 0.35), 0 0 15px rgba(249, 115, 22, 0.2);
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

            /* Premium gradient overlay */
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

            /* Particles container for luxury effect */
            .safari-particles-container {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 3;
                opacity: 0;
                transition: opacity 0.3s ease;
                -webkit-transition: opacity 0.3s ease;
            }

            .safari-particles-container.active {
                opacity: 1;
            }

            /* Luxury particles */
            .safari-particle {
                position: absolute;
                width: 6px;
                height: 6px;
                background: rgba(249, 115, 22, 0.6);
                border-radius: 50%;
                opacity: 0;
                animation: safari-particle-fade 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
                -webkit-animation: safari-particle-fade 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            }

            @keyframes safari-particle-fade {
                0% { transform: scale(0); opacity: 0; }
                50% { opacity: 1; }
                100% { transform: scale(1.5); opacity: 0; }
            }

            @-webkit-keyframes safari-particle-fade {
                0% { -webkit-transform: scale(0); opacity: 0; }
                50% { opacity: 1; }
                100% { -webkit-transform: scale(1.5); opacity: 0; }
            }

            /* Premium image transition */
            .safari-premium-image {
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

            .safari-premium-image.active {
                opacity: 1;
                transform: scale(1);
                -webkit-transform: scale(1);
            }

            /* Premium shine effect */
            .safari-premium-shine {
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

            .safari-premium-shine.active {
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

            /* Premium thumbnail effects */
            .safari-browser .thumbnails img {
                transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                border: 2px solid transparent;
                position: relative;
                overflow: hidden;
            }

            .safari-browser .thumbnails img:hover {
                border-color: rgba(249, 115, 22, 0.5);
                transform: translateY(-3px) scale(1.05);
                -webkit-transform: translateY(-3px) scale(1.05);
                box-shadow: 0 8px 15px rgba(249, 115, 22, 0.2);
            }

            .safari-browser .thumbnails img.active {
                border-color: var(--product-primary);
                transform: translateY(-5px) scale(1.08);
                -webkit-transform: translateY(-5px) scale(1.08);
                box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3), 0 0 10px rgba(249, 115, 22, 0.2);
            }

            /* Premium highlight effect for thumbnails */
            .safari-thumbnail-premium {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, rgba(249, 115, 22, 0) 70%);
                opacity: 0;
                animation: safari-thumbnail-premium 1s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-animation: safari-thumbnail-premium 1s cubic-bezier(0.19, 1, 0.22, 1);
                pointer-events: none;
                z-index: 2;
                border-radius: 6px;
            }

            @keyframes safari-thumbnail-premium {
                0% { opacity: 0; transform: scale(0.8); }
                40% { opacity: 0.8; transform: scale(1.1); }
                100% { opacity: 0; transform: scale(1.3); }
            }

            @-webkit-keyframes safari-thumbnail-premium {
                0% { opacity: 0; -webkit-transform: scale(0.8); }
                40% { opacity: 0.8; -webkit-transform: scale(1.1); }
                100% { opacity: 0; -webkit-transform: scale(1.3); }
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
