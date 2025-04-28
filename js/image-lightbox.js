// Image Lightbox Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Create lightbox elements
  createLightbox();

  // Initialize lightbox functionality
  initLightbox();
});

// Create lightbox HTML structure
function createLightbox() {
  const lightboxHTML = `
        <div class="lightbox-overlay" id="image-lightbox">
            <div class="lightbox-container">
                <div class="lightbox-content">
                    <div class="lightbox-image-container">
                        <img src="" alt="Lightbox Image" class="lightbox-image" id="lightbox-img">
                    </div>
                    <button class="lightbox-close" id="lightbox-close">
                        <i class="fas fa-times"></i>
                    </button>
                    <button class="lightbox-nav lightbox-prev" id="lightbox-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="lightbox-nav lightbox-next" id="lightbox-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                    <div class="lightbox-controls">
                        <button class="lightbox-btn" id="lightbox-zoom-out">
                            <i class="fas fa-search-minus"></i>
                        </button>
                        <button class="lightbox-btn" id="lightbox-zoom-in">
                            <i class="fas fa-search-plus"></i>
                        </button>
                        <button class="lightbox-btn" id="lightbox-reset">
                            <i class="fas fa-sync-alt"></i>
                        </button>
                    </div>
                    <div class="zoom-level" id="zoom-level">100%</div>
                </div>
            </div>
        </div>
    `;

  // Append lightbox to body
  document.body.insertAdjacentHTML('beforeend', lightboxHTML);
}

// Initialize lightbox functionality
function initLightbox() {
  // Elements
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const zoomInBtn = document.getElementById('lightbox-zoom-in');
  const zoomOutBtn = document.getElementById('lightbox-zoom-out');
  const resetBtn = document.getElementById('lightbox-reset');
  const zoomLevelDisplay = document.getElementById('zoom-level');

  // Variables
  let currentImageIndex = 0;
  let galleryImages = [];
  let zoomLevel = 1;
  let isDragging = false;
  let startX,
    startY,
    translateX = 0,
    translateY = 0;

  // Add click event to main product image
  const mainImage = document.getElementById('main-image');
  if (mainImage) {
    mainImage.style.cursor = 'zoom-in';
    mainImage.addEventListener('click', function () {
      openLightbox(this.src);
    });
  }

  // Add click events to thumbnail images
  const thumbnails = document.querySelectorAll('.thumbnails img');
  if (thumbnails.length > 0) {
    // Collect all gallery images
    galleryImages = Array.from(thumbnails).map((thumb) => {
      // Extract image source from onclick attribute if it exists
      const onclickAttr = thumb.getAttribute('onclick');
      if (onclickAttr) {
        const match = onclickAttr.match(/'([^']+)'/);
        return match ? match[1] : thumb.src;
      }
      return thumb.src;
    });

    // Không thêm sự kiện click vào thumbnail để mở lightbox
    // Chỉ sử dụng thumbnail để lưu trữ danh sách ảnh cho lightbox
  }

  // Open lightbox with specified image
  function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Ensure the lightbox is on top of everything
    lightbox.style.zIndex = '99999';

    // Reset zoom and position
    resetZoom();

    // Add active class to image container for animation
    const imageContainer = document.querySelector('.lightbox-image-container');
    if (imageContainer) {
      imageContainer.classList.add('active');

      // Remove active class after animation completes
      setTimeout(() => {
        imageContainer.classList.remove('active');
      }, 500);
    }
  }

  // Close lightbox
  function closeLightbox() {
    // Add fade-out effect
    lightbox.style.opacity = '0';

    // Wait for fade-out animation to complete before removing active class
    setTimeout(() => {
      lightbox.classList.remove('active');
      lightbox.style.opacity = ''; // Reset opacity
      document.body.style.overflow = ''; // Restore scrolling
      resetZoom();
    }, 300);
  }

  // Navigate to previous image
  function prevImage() {
    if (currentImageIndex > 0) {
      currentImageIndex--;
      lightboxImg.src = galleryImages[currentImageIndex];
      resetZoom();
      updateNavButtons();
    }
  }

  // Navigate to next image
  function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
      currentImageIndex++;
      lightboxImg.src = galleryImages[currentImageIndex];
      resetZoom();
      updateNavButtons();
    }
  }

  // Update navigation buttons visibility
  function updateNavButtons() {
    prevBtn.style.visibility = currentImageIndex > 0 ? 'visible' : 'hidden';
    nextBtn.style.visibility =
      currentImageIndex < galleryImages.length - 1 ? 'visible' : 'hidden';
  }

  // Zoom in
  function zoomIn() {
    if (zoomLevel < 3) {
      // Max zoom level
      zoomLevel += 0.25;
      updateZoom();
    }
  }

  // Zoom out
  function zoomOut() {
    if (zoomLevel > 0.5) {
      // Min zoom level
      zoomLevel -= 0.25;
      updateZoom();
    }
  }

  // Reset zoom
  function resetZoom() {
    zoomLevel = 1;
    translateX = 0;
    translateY = 0;
    updateZoom();
  }

  // Update zoom level and display
  function updateZoom() {
    lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${zoomLevel})`;
    zoomLevelDisplay.textContent = `${Math.round(zoomLevel * 100)}%`;
  }

  // Mouse events for dragging
  lightboxImg.addEventListener('mousedown', function (e) {
    if (zoomLevel > 1) {
      isDragging = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      lightboxImg.style.cursor = 'grabbing';
    }
  });

  document.addEventListener('mousemove', function (e) {
    if (isDragging) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      updateZoom();
    }
  });

  document.addEventListener('mouseup', function () {
    isDragging = false;
    lightboxImg.style.cursor = 'grab';
  });

  // Touch events for mobile
  lightboxImg.addEventListener('touchstart', function (e) {
    if (zoomLevel > 1) {
      isDragging = true;
      startX = e.touches[0].clientX - translateX;
      startY = e.touches[0].clientY - translateY;
    }
  });

  document.addEventListener('touchmove', function (e) {
    if (isDragging) {
      translateX = e.touches[0].clientX - startX;
      translateY = e.touches[0].clientY - startY;
      updateZoom();
    }
  });

  document.addEventListener('touchend', function () {
    isDragging = false;
  });

  // Mouse wheel zoom
  lightbox.addEventListener('wheel', function (e) {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomIn();
    } else {
      zoomOut();
    }
  });

  // Event listeners
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', prevImage);
  nextBtn.addEventListener('click', nextImage);
  zoomInBtn.addEventListener('click', zoomIn);
  zoomOutBtn.addEventListener('click', zoomOut);
  resetBtn.addEventListener('click', resetZoom);

  // Close on escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === '+') {
      zoomIn();
    } else if (e.key === '-') {
      zoomOut();
    } else if (e.key === '0') {
      resetZoom();
    }
  });

  // Close when clicking outside the image
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

// Global function to open lightbox from anywhere
window.openImageLightbox = function (imageSrc) {
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  if (lightbox && lightboxImg) {
    lightboxImg.src = imageSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling

    // Ensure the lightbox is on top of everything
    lightbox.style.zIndex = '99999';

    // Reset zoom
    lightboxImg.style.transform = 'scale(1)';
    document.getElementById('zoom-level').textContent = '100%';

    // Reset position
    lightboxImg.style.transform = 'translate(0, 0) scale(1)';

    // Add active class to image container for animation
    const imageContainer = document.querySelector('.lightbox-image-container');
    if (imageContainer) {
      imageContainer.classList.add('active');

      // Remove active class after animation completes
      setTimeout(() => {
        imageContainer.classList.remove('active');
      }, 500);
    }
  }
};
