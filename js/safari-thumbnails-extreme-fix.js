// Safari Thumbnails Extreme Fix - With Slide Support
(function () {
  // Detect Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    console.log(
      'Safari detected, applying thumbnails fix with slide support...'
    );

    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function () {
      // Add Safari-specific class to body
      document.body.classList.add('safari-browser');

      // Apply simplified Safari fixes
      setTimeout(applySafariThumbnailsFix, 500);
    });

    // Function to apply simplified Safari fixes
    function applySafariThumbnailsFix() {
      // Get the main image
      const mainImage = document.getElementById('main-image');
      if (!mainImage) return;

      // Get the thumbnails slider
      const thumbnailsSlider = document.getElementById('thumbnails-slider');
      if (!thumbnailsSlider) return;

      // Get all thumbnails
      const thumbnails = thumbnailsSlider.querySelectorAll('img');
      if (thumbnails.length === 0) return;

      // Ensure first thumbnail is active by default
      const firstThumbnail = thumbnails[0];
      if (firstThumbnail) {
        // Remove active class from all thumbnails
        thumbnails.forEach((thumb) => thumb.classList.remove('active'));
        // Add active class to first thumbnail
        firstThumbnail.classList.add('active');
      }

      // Remove any problematic styles from main image container
      const mainImageContainer = mainImage.parentElement;
      if (mainImageContainer) {
        mainImageContainer.style.transition = 'none';
        mainImageContainer.style.transform = 'none';
        mainImage.style.transition = 'none';
        mainImage.style.transform = 'none';
        mainImage.style.animation = 'none';
      }

      // Override the global slideThumbnails function for Safari
      window.originalSlideThumbnails = window.slideThumbnails;

      // Safari-specific version of slideThumbnails - simplified
      window.slideThumbnails = function (direction) {
        if (!thumbnailsSlider) return;

        // Simple scroll by fixed amount
        const scrollAmount = direction === 'next' ? 250 : -250;

        // Use simple scrollBy without any fancy effects
        thumbnailsSlider.scrollLeft += scrollAmount;

        // Update navigation buttons after a delay
        setTimeout(() => {
          updateThumbnailNavigation();
        }, 300);
      };

      // Override the changeMainImage function for Safari
      window.originalChangeMainImage = window.changeMainImage;

      // Safari-specific version of changeMainImage - simplified
      window.changeMainImage = function (thumbnail, imageSrc) {
        // Simply change the src attribute directly
        if (mainImage) {
          mainImage.src = imageSrc;
        }

        // Update active thumbnail
        thumbnails.forEach((thumb) => {
          thumb.classList.remove('active');
        });

        // Add active class to clicked thumbnail
        thumbnail.classList.add('active');
      };

      // Simplify thumbnail click handlers
      thumbnails.forEach((thumb, index) => {
        // Clone and replace to remove all event listeners
        const newThumb = thumb.cloneNode(true);

        // Add simple click handler
        newThumb.addEventListener('click', function () {
          // Extract image source from onclick attribute if it exists
          let imageSrc = this.src;
          const onclickAttr = this.getAttribute('onclick');
          if (onclickAttr) {
            const match = onclickAttr.match(/'([^']+)'/);
            if (match) {
              imageSrc = match[1];
            }
          }
          changeMainImage(this, imageSrc);
        });

        // Set active class for first thumbnail by default
        if (index === 0) {
          newThumb.classList.add('active');
        }

        thumb.parentNode.replaceChild(newThumb, thumb);
      });

      // Ensure first thumbnail is active if none are active
      const activeThumb = thumbnailsSlider.querySelector('img.active');
      if (!activeThumb && thumbnails.length > 0) {
        thumbnails[0].classList.add('active');
      }
    }
  }
})();
