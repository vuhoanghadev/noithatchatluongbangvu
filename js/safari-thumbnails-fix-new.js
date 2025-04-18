// Safari Thumbnails Fix - New Simple Version
(function () {
  // Detect Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    console.log('Safari detected, applying new simple thumbnails fix...');

    // Override the global slideThumbnails function for Safari
    window.originalSlideThumbnails = window.slideThumbnails;

    // Safari-specific version of slideThumbnails - ultra simple
    window.slideThumbnails = function (direction) {
      const thumbnailsSlider = document.getElementById('thumbnails-slider');
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

    // Safari-specific version of changeMainImage - ultra simple
    window.changeMainImage = function (thumbnail, imageSrc) {
      // Get the main image element
      const mainImage = document.getElementById('main-image');
      if (!mainImage) return;

      // Simply change the src attribute directly
      mainImage.src = imageSrc;

      // Update active thumbnail
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
        thumb.classList.remove('active');
      });

      // Add active class to clicked thumbnail
      thumbnail.classList.add('active');
    };

    // Add Safari-specific initialization
    document.addEventListener('DOMContentLoaded', function () {
      // Add Safari-specific class to body
      document.body.classList.add('safari-browser');

      // Disable all problematic event listeners on thumbnails
      const thumbnails = document.querySelectorAll('.thumbnails img');
      thumbnails.forEach((thumb) => {
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

        thumb.parentNode.replaceChild(newThumb, thumb);
      });

      // Disable drag functionality on thumbnails slider
      const thumbnailsSlider = document.getElementById('thumbnails-slider');
      if (thumbnailsSlider) {
        // Clone and replace to remove all event listeners
        const newSlider = thumbnailsSlider.cloneNode(true);
        thumbnailsSlider.parentNode.replaceChild(newSlider, thumbnailsSlider);
      }
    });
  }
})();
