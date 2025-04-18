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

    // Premium image display effect for Safari version of changeMainImage
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

      // Create a backdrop blur overlay for depth effect
      const blurOverlay = document.createElement('div');
      blurOverlay.className = 'safari-blur-overlay';
      transitionContainer.appendChild(blurOverlay);

      // Create a gradient overlay for premium look
      const gradientOverlay = document.createElement('div');
      gradientOverlay.className = 'safari-gradient-overlay';
      transitionContainer.appendChild(gradientOverlay);

      // Create particles container for luxury effect
      const particlesContainer = document.createElement('div');
      particlesContainer.className = 'safari-particles-container';
      transitionContainer.appendChild(particlesContainer);

      // Add particles
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'safari-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 0.5}s`;
        particle.style.animationDuration = `${0.5 + Math.random() * 0.5}s`;
        particlesContainer.appendChild(particle);
      }

      // Create a new image for the premium transition
      const newImage = document.createElement('img');
      newImage.src = imageSrc;
      newImage.alt = mainImage.alt;
      newImage.className = 'safari-premium-image';
      transitionContainer.appendChild(newImage);

      // Create a vignette overlay for depth
      const vignetteOverlay = document.createElement('div');
      vignetteOverlay.className = 'safari-vignette-overlay';
      transitionContainer.appendChild(vignetteOverlay);

      // Add a shine sweep effect element
      const shineSweep = document.createElement('div');
      shineSweep.className = 'safari-shine-sweep';
      transitionContainer.appendChild(shineSweep);

      // Add a subtle glow effect
      const glowEffect = document.createElement('div');
      glowEffect.className = 'safari-glow-effect';
      transitionContainer.appendChild(glowEffect);

      // Start the premium transition sequence
      // First, show the blur overlay
      setTimeout(() => {
        blurOverlay.classList.add('active');
      }, 10);

      // Then show the gradient overlay
      setTimeout(() => {
        gradientOverlay.classList.add('active');
      }, 100);

      // Activate particles
      setTimeout(() => {
        particlesContainer.classList.add('active');
      }, 150);

      // Fade in the new image with scale effect
      setTimeout(() => {
        newImage.classList.add('active');
      }, 200);

      // Add the vignette effect
      setTimeout(() => {
        vignetteOverlay.classList.add('active');
      }, 300);

      // Add the shine sweep effect
      setTimeout(() => {
        shineSweep.classList.add('active');
      }, 400);

      // Add the glow effect
      setTimeout(() => {
        glowEffect.classList.add('active');
      }, 500);

      // After all effects complete, update the main image and clean up
      setTimeout(() => {
        mainImage.src = imageSrc;
        transitionContainer.innerHTML = '';
      }, 1200);

      // Add a premium animation to the container
      mainImageContainer.classList.add('safari-premium-animation');
      setTimeout(() => {
        mainImageContainer.classList.remove('safari-premium-animation');
      }, 1200);

      // Update active thumbnail with premium effect
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
        thumb.classList.remove('premium-active');
      });

      // Add active class to clicked thumbnail with premium effect
      thumbnail.classList.add('active');
      thumbnail.classList.add('premium-active');

      // Add a premium highlight effect to the thumbnail
      const thumbnailGlow = document.createElement('div');
      thumbnailGlow.className = 'safari-thumbnail-glow';
      thumbnail.appendChild(thumbnailGlow);

      // Add a ripple effect to the thumbnail
      const rippleEffect = document.createElement('div');
      rippleEffect.className = 'safari-ripple-effect';
      thumbnail.appendChild(rippleEffect);

      // Remove the effects after animation
      setTimeout(() => {
        if (thumbnail.contains(thumbnailGlow)) {
          thumbnail.removeChild(thumbnailGlow);
        }
        if (thumbnail.contains(rippleEffect)) {
          thumbnail.removeChild(rippleEffect);
        }
      }, 1000);
    };

    // Add premium image display effect Safari-specific CSS
    const safariStyles = document.createElement('style');
    safariStyles.textContent = `
            /* Safari-specific styles for premium product gallery */
            .safari-browser .main-image-container {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform;
                overflow: hidden;
                transition: box-shadow 0.6s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: box-shadow 0.6s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
            }

            /* Premium animation for main container */
            .safari-browser .main-image-container.safari-premium-animation {
                box-shadow: 0 15px 35px rgba(249, 115, 22, 0.3);
                transform: scale(1.01);
                -webkit-transform: scale(1.01);
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

            /* Blur overlay for depth effect */
            .safari-blur-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backdrop-filter: blur(0px);
                -webkit-backdrop-filter: blur(0px);
                opacity: 0;
                transition: opacity 0.4s ease, backdrop-filter 0.4s ease;
                -webkit-transition: opacity 0.4s ease, -webkit-backdrop-filter 0.4s ease;
                z-index: 1;
            }

            .safari-blur-overlay.active {
                opacity: 1;
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
            }

            /* Gradient overlay for premium look */
            .safari-gradient-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(0, 88, 221, 0.1) 100%);
                opacity: 0;
                transition: opacity 0.5s ease;
                -webkit-transition: opacity 0.5s ease;
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

            /* Individual particles */
            .safari-particle {
                position: absolute;
                width: 8px;
                height: 8px;
                background: rgba(255, 255, 255, 0.6);
                border-radius: 50%;
                opacity: 0;
                animation: safari-particle-fade 0.8s ease forwards;
                -webkit-animation: safari-particle-fade 0.8s ease forwards;
            }

            @keyframes safari-particle-fade {
                0% { opacity: 0; transform: scale(0); }
                50% { opacity: 0.8; transform: scale(1); }
                100% { opacity: 0; transform: scale(1.5); }
            }

            @-webkit-keyframes safari-particle-fade {
                0% { opacity: 0; -webkit-transform: scale(0); }
                50% { opacity: 0.8; -webkit-transform: scale(1); }
                100% { opacity: 0; -webkit-transform: scale(1.5); }
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
                transition: opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 4;
            }

            .safari-premium-image.active {
                opacity: 1;
                transform: scale(1);
                -webkit-transform: scale(1);
            }

            /* Vignette overlay for depth */
            .safari-vignette-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, transparent 60%, rgba(0, 0, 0, 0.2) 100%);
                opacity: 0;
                transition: opacity 0.6s ease;
                -webkit-transition: opacity 0.6s ease;
                z-index: 5;
            }

            .safari-vignette-overlay.active {
                opacity: 1;
            }

            /* Shine sweep effect */
            .safari-shine-sweep {
                position: absolute;
                top: -100%;
                left: -100%;
                width: 300%;
                height: 300%;
                background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
                transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                opacity: 0;
                transition: opacity 0.4s ease, transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-transition: opacity 0.4s ease, -webkit-transform 1.5s cubic-bezier(0.19, 1, 0.22, 1);
                z-index: 6;
                pointer-events: none;
            }

            .safari-shine-sweep.active {
                opacity: 0.7;
                transform: rotate(45deg) translate(100%, 100%);
                -webkit-transform: rotate(45deg) translate(100%, 100%);
            }

            /* Glow effect */
            .safari-glow-effect {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                box-shadow: inset 0 0 30px rgba(249, 115, 22, 0.3);
                border-radius: var(--product-card-radius);
                opacity: 0;
                transition: opacity 0.6s ease;
                -webkit-transition: opacity 0.6s ease;
                z-index: 7;
            }

            .safari-glow-effect.active {
                opacity: 1;
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
                box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
            }

            .safari-browser .thumbnails img.premium-active {
                animation: safari-thumbnail-pulse 1.5s infinite alternate;
                -webkit-animation: safari-thumbnail-pulse 1.5s infinite alternate;
            }

            @keyframes safari-thumbnail-pulse {
                0% { box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3); }
                100% { box-shadow: 0 10px 25px rgba(249, 115, 22, 0.5); }
            }

            @-webkit-keyframes safari-thumbnail-pulse {
                0% { box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3); }
                100% { box-shadow: 0 10px 25px rgba(249, 115, 22, 0.5); }
            }

            /* Thumbnail glow effect */
            .safari-thumbnail-glow {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: radial-gradient(circle, rgba(249, 115, 22, 0.5) 0%, rgba(249, 115, 22, 0) 70%);
                opacity: 0;
                animation: safari-thumbnail-glow 1s cubic-bezier(0.19, 1, 0.22, 1);
                -webkit-animation: safari-thumbnail-glow 1s cubic-bezier(0.19, 1, 0.22, 1);
                pointer-events: none;
                z-index: 2;
                border-radius: 6px;
            }

            @keyframes safari-thumbnail-glow {
                0% { opacity: 0; transform: scale(0.5); }
                50% { opacity: 0.9; transform: scale(1.1); }
                100% { opacity: 0; transform: scale(1.5); }
            }

            @-webkit-keyframes safari-thumbnail-glow {
                0% { opacity: 0; -webkit-transform: scale(0.5); }
                50% { opacity: 0.9; -webkit-transform: scale(1.1); }
                100% { opacity: 0; -webkit-transform: scale(1.5); }
            }

            /* Ripple effect for thumbnails */
            .safari-ripple-effect {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 0;
                height: 0;
                background: rgba(249, 115, 22, 0.3);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                -webkit-transform: translate(-50%, -50%);
                animation: safari-ripple 0.8s ease-out;
                -webkit-animation: safari-ripple 0.8s ease-out;
                z-index: 1;
            }

            @keyframes safari-ripple {
                0% { width: 0; height: 0; opacity: 0.5; }
                100% { width: 200%; height: 200%; opacity: 0; }
            }

            @-webkit-keyframes safari-ripple {
                0% { width: 0; height: 0; opacity: 0.5; }
                100% { width: 200%; height: 200%; opacity: 0; }
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
