// Modern Product Details Page JavaScript
document.addEventListener('DOMContentLoaded', function () {
  const productGallery = document.getElementById('product-gallery');
  const productInfo = document.getElementById('product-info');
  const relatedProducts = document.getElementById('related-products');
  const alsoLikedProducts = document.getElementById('also-liked-products');
  const breadcrumbProductName = document.getElementById(
    'breadcrumb-product-name'
  );

  // Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  // Find product in the products array
  const product = products.find((p) => p.id === productId);

  if (product) {
    // Update page title and meta tags
    updateMetaTags(product);

    // Update breadcrumb
    if (breadcrumbProductName) {
      breadcrumbProductName.textContent = product.name;
    }

    // Render product gallery
    renderProductGallery(product);

    // Render product info
    renderProductInfo(product);

    // Render related products
    renderRelatedProducts(product);

    // Render "Customers also liked" section
    renderAlsoLikedProducts(product);
  } else {
    // Product not found
    renderProductNotFound();
  }

  // Functions
  function renderProductGallery(product) {
    if (!productGallery) return;

    // Create gallery HTML
    let galleryHTML = `
            <div class="main-image-container">
                <img src="${product.image}" alt="${product.name}" id="main-image">
                <div class="zoom-hint">
                    <i class="fas fa-search-plus"></i> Click để phóng to
                </div>
            </div>
            <div class="thumbnails-container">
                <div class="thumbnails-nav prev" onclick="slideThumbnails('prev')"><i class="fas fa-chevron-left"></i></div>
                <div class="thumbnails" id="thumbnails-slider">
        `;

    // Add thumbnails
    if (product.gallery && product.gallery.length > 0) {
      // First add the main image as the first thumbnail
      galleryHTML += `
                <img src="${product.image}" alt="${product.name} - Main Image" class="active" onclick="changeMainImage(this, '${product.image}')">
      `;

      // Then add the rest of the gallery images
      product.gallery.forEach((image, index) => {
        // Skip if the image is the same as the main image to avoid duplication
        if (image !== product.image) {
          galleryHTML += `
                      <img src="${image}" alt="${product.name} - Image ${
            index + 1
          }" onclick="changeMainImage(this, '${image}')">
                  `;
        }
      });
    } else {
      // If no gallery, just show the main image as thumbnail
      galleryHTML += `
                <img src="${product.image}" alt="${product.name}" class="active" onclick="changeMainImage(this, '${product.image}')">
            `;
    }

    galleryHTML += `
                </div>
                <div class="thumbnails-nav next" onclick="slideThumbnails('next')"><i class="fas fa-chevron-right"></i></div>
            </div>`;

    // Set gallery HTML
    productGallery.innerHTML = galleryHTML;
  }

  function renderProductInfo(product) {
    if (!productInfo) return;

    // Extract dimensions from description if available
    const dimensionsMatch = product.description.match(/kích thước ([^,]+)/i);
    const dimensions = dimensionsMatch ? dimensionsMatch[1] : 'Đang cập nhật';

    // Create info HTML
    let infoHTML = `
            <h1>${product.name}</h1>
            <div class="product-category">${product.category}</div>
            <div class="product-description">
                ${product.description}
            </div>

            <div class="product-specs">
                <h3>Thông số kỹ thuật</h3>
                <div class="specs-list">
                    <div class="spec-item">
                        <i class="fas fa-ruler-combined"></i>
                        <span>Kích thước: ${dimensions}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-tag"></i>
                        <span>Danh mục: ${product.category}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-palette"></i>
                        <span>Màu sắc: Theo hình</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-box"></i>
                        <span>Tình trạng: Còn hàng</span>
                    </div>
                </div>
            </div>
        `;

    // Add promotion if available
    if (product.promotion) {
      infoHTML += `
                <div class="promo-info">
                    <i class="fas fa-gift"></i> Khuyến mãi: ${product.promotion}
                </div>
            `;
    }

    // Add action buttons
    infoHTML += `
            <div class="product-actions">
                <a href="https://zalo.me/123456789" class="btn-contact">
                    <i class="fas fa-comment"></i> Liên hệ tư vấn
                </a>
                <button class="btn-share" onclick="shareProduct()">
                    <i class="fas fa-share-alt"></i> Chia sẻ
                </button>
            </div>

            <div class="social-share">
                <p>Chia sẻ sản phẩm:</p>
                <div class="social-icons">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}" target="_blank" class="facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(
      product.name
    )}" target="_blank" class="twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
                      window.location.href
                    )}&media=${encodeURIComponent(
      product.image
    )}&description=${encodeURIComponent(
      product.name
    )}" target="_blank" class="pinterest">
                        <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(
                      product.name + ' - ' + window.location.href
                    )}" target="_blank" class="whatsapp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>
        `;

    // Set info HTML
    productInfo.innerHTML = infoHTML;
  }

  function renderRelatedProducts(product) {
    if (!relatedProducts) return;

    // Clear container
    relatedProducts.innerHTML = '';

    // Get related products (same category, different ID)
    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);

    if (related.length === 0) {
      relatedProducts.innerHTML =
        '<p class="no-products">Không có sản phẩm liên quan.</p>';
      return;
    }

    // Render each related product
    related.forEach((relatedProduct, index) => {
      const card = createProductCard(relatedProduct);
      relatedProducts.appendChild(card);

      // Add fade-in animation with delay
      setTimeout(() => {
        card.classList.add('fade-in');
      }, index * 100);
    });
  }

  function renderAlsoLikedProducts(product) {
    if (!alsoLikedProducts) return;

    // Clear container
    alsoLikedProducts.innerHTML = '';

    // Get random products from different categories
    const alsoLiked = products
      .filter((p) => p.category !== product.category && p.id !== product.id)
      .sort(() => 0.5 - Math.random()) // Shuffle array
      .slice(0, 4);

    if (alsoLiked.length === 0) {
      alsoLikedProducts.innerHTML =
        '<p class="no-products">Không có sản phẩm gợi ý.</p>';
      return;
    }

    // Render each "also liked" product
    alsoLiked.forEach((likedProduct, index) => {
      const card = createProductCard(likedProduct);
      alsoLikedProducts.appendChild(card);

      // Add fade-in animation with delay
      setTimeout(() => {
        card.classList.add('fade-in');
      }, index * 100);
    });
  }

  function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Create badge HTML if promotion exists
    const badgeHTML = product.promotion
      ? `<div class="product-badge">${product.promotion}</div>`
      : '';

    // Extract dimensions from description if available
    const dimensionsMatch = product.description.match(/kích thước ([^,]+)/i);
    const dimensions = dimensionsMatch ? dimensionsMatch[1] : 'Đang cập nhật';

    // Truncate description for mobile
    const description = product.description;

    card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='images/products/placeholder.jpg'">
                ${badgeHTML}
            </div>
            <div class="product-content">
                <div class="product-category">
                    <i class="fas fa-tag"></i> ${product.category}
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${description}</p>
                <div class="product-action">
                    <a href="product-details.html?id=${product.id}" class="product-details">
                        Chi tiết <i class="fas fa-arrow-right"></i>
                    </a>
                    <div class="product-dimensions">
                        <i class="fas fa-ruler-combined"></i> ${dimensions}
                    </div>
                </div>
            </div>
        `;

    // Add click event to the entire card for better mobile experience
    card.addEventListener('click', function (e) {
      // Only navigate if the click wasn't on a button or link
      if (!e.target.closest('a') && !e.target.closest('button')) {
        window.location.href = `product-details.html?id=${product.id}`;
      }
    });

    return card;
  }

  function renderProductNotFound() {
    // Update page title
    document.title = 'Sản phẩm không tồn tại - Nội Thất Chất Lượng Bàng Vũ';

    // Update breadcrumb
    if (breadcrumbProductName) {
      breadcrumbProductName.textContent = 'Sản phẩm không tồn tại';
    }

    // Create not found message
    const container = document.querySelector('.product-container');
    if (container) {
      container.innerHTML = `
                <div class="product-not-found">
                    <i class="fas fa-exclamation-circle"></i>
                    <h2>Sản phẩm không tồn tại</h2>
                    <p>Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <a href="products.html" class="btn-back">Quay lại trang sản phẩm</a>
                </div>
            `;
    }
  }

  function updateMetaTags(product) {
    // Update page title
    document.title = `${product.name} - Nội Thất Chất Lượng Bàng Vũ`;

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    if (ogTitle)
      ogTitle.setAttribute(
        'content',
        `${product.name} - Nội Thất Chất Lượng Bàng Vũ`
      );
    if (ogDescription)
      ogDescription.setAttribute('content', product.description);
    if (ogImage) ogImage.setAttribute('content', product.image);
    if (ogUrl) ogUrl.setAttribute('content', window.location.href);

    // Update Twitter meta tags
    const twitterTitle = document.querySelector(
      'meta[property="twitter:title"]'
    );
    const twitterDescription = document.querySelector(
      'meta[property="twitter:description"]'
    );
    const twitterImage = document.querySelector(
      'meta[property="twitter:image"]'
    );
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');

    if (twitterTitle)
      twitterTitle.setAttribute(
        'content',
        `${product.name} - Nội Thất Chất Lượng Bàng Vũ`
      );
    if (twitterDescription)
      twitterDescription.setAttribute('content', product.description);
    if (twitterImage) twitterImage.setAttribute('content', product.image);
    if (twitterUrl) twitterUrl.setAttribute('content', window.location.href);
  }

  // Initialize thumbnail navigation
  initThumbnailNavigation();
});

// Global functions
function changeMainImage(thumbnail, imageSrc) {
  // Update main image with animation
  const mainImage = document.getElementById('main-image');
  if (mainImage) {
    // Create a new image element for smooth transition
    const newImage = document.createElement('img');
    newImage.src = imageSrc;
    newImage.alt = mainImage.alt;
    newImage.id = 'main-image-new';
    newImage.style.position = 'absolute';
    newImage.style.top = '0';
    newImage.style.left = '0';
    newImage.style.width = '100%';
    newImage.style.height = '100%';
    newImage.style.objectFit = 'cover';
    newImage.style.opacity = '0';
    newImage.style.zIndex = '2';

    // Add fade-out class to current image
    mainImage.classList.add('fade-out');

    // Add the new image to container
    const container = mainImage.parentElement;
    container.appendChild(newImage);

    // Trigger reflow for animation to work
    void newImage.offsetWidth;

    // Add fade-in class to new image
    newImage.classList.add('fade-in');

    // After animation completes, replace the old image
    setTimeout(() => {
      mainImage.src = imageSrc;
      mainImage.classList.remove('fade-out');
      container.removeChild(newImage);
    }, 500); // Match this with the CSS animation duration
  }

  // Update active thumbnail with ripple effect
  const thumbnails = document.querySelectorAll('.thumbnails img');
  thumbnails.forEach((thumb) => {
    thumb.classList.remove('active');
    // Remove any existing ripple effects
    const ripple = thumb.querySelector('.ripple');
    if (ripple) {
      thumb.removeChild(ripple);
    }
  });

  // Add active class to clicked thumbnail
  thumbnail.classList.add('active');

  // Add ripple effect to clicked thumbnail
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  thumbnail.appendChild(ripple);

  // Position the ripple at center of thumbnail
  const rect = thumbnail.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = '50%';
  ripple.style.top = '50%';
  ripple.style.transform = 'translate(-50%, -50%) scale(0)';

  // Animate the ripple
  setTimeout(() => {
    ripple.style.transform = 'translate(-50%, -50%) scale(1.5)';
    ripple.style.opacity = '0';
  }, 10);

  // Remove ripple after animation
  setTimeout(() => {
    if (thumbnail.contains(ripple)) {
      thumbnail.removeChild(ripple);
    }
  }, 500);
}

function shareProduct() {
  // Check if Web Share API is supported
  if (navigator.share) {
    navigator
      .share({
        title: document.title,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing:', error));
  } else {
    // Fallback: show social share section
    const socialShare = document.querySelector('.social-share');
    if (socialShare) {
      // No scrolling needed
      socialShare.style.animation = 'highlight 1s ease';
    }
  }
}

// Thumbnail slider functionality
function slideThumbnails(direction) {
  const thumbnailsSlider = document.getElementById('thumbnails-slider');
  if (!thumbnailsSlider) return;

  const thumbnailWidth = 90; // Width of thumbnail + gap
  const visibleWidth = thumbnailsSlider.offsetWidth;
  const scrollAmount =
    direction === 'next' ? thumbnailWidth * 3 : -thumbnailWidth * 3;

  thumbnailsSlider.scrollBy({
    left: scrollAmount,
    behavior: 'smooth',
  });

  // Show/hide navigation buttons based on scroll position
  setTimeout(() => {
    updateThumbnailNavigation();
  }, 300);
}

// Update thumbnail navigation buttons visibility
function updateThumbnailNavigation() {
  const thumbnailsSlider = document.getElementById('thumbnails-slider');
  if (!thumbnailsSlider) return;

  const prevBtn = document.querySelector('.thumbnails-nav.prev');
  const nextBtn = document.querySelector('.thumbnails-nav.next');

  if (!prevBtn || !nextBtn) return;

  // Check if we can scroll left or right
  const canScrollLeft = thumbnailsSlider.scrollLeft > 0;
  const canScrollRight =
    thumbnailsSlider.scrollLeft <
    thumbnailsSlider.scrollWidth - thumbnailsSlider.offsetWidth;

  // Show/hide buttons accordingly
  prevBtn.style.opacity = canScrollLeft ? '0.8' : '0.3';
  prevBtn.style.pointerEvents = canScrollLeft ? 'auto' : 'none';

  nextBtn.style.opacity = canScrollRight ? '0.8' : '0.3';
  nextBtn.style.pointerEvents = canScrollRight ? 'auto' : 'none';
}

// Add drag and swipe functionality to thumbnails
function enableThumbnailDragScroll() {
  const thumbnailsSlider = document.getElementById('thumbnails-slider');
  if (!thumbnailsSlider) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse events for desktop
  thumbnailsSlider.addEventListener('mousedown', (e) => {
    isDown = true;
    thumbnailsSlider.classList.add('active');
    startX = e.pageX - thumbnailsSlider.offsetLeft;
    scrollLeft = thumbnailsSlider.scrollLeft;
    // Prevent default behavior to avoid text selection during drag
    e.preventDefault();
  });

  thumbnailsSlider.addEventListener('mouseleave', () => {
    isDown = false;
    thumbnailsSlider.classList.remove('active');
  });

  thumbnailsSlider.addEventListener('mouseup', () => {
    isDown = false;
    thumbnailsSlider.classList.remove('active');
    updateThumbnailNavigation();
  });

  thumbnailsSlider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - thumbnailsSlider.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    thumbnailsSlider.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  thumbnailsSlider.addEventListener(
    'touchstart',
    (e) => {
      isDown = true;
      thumbnailsSlider.classList.add('active');
      startX = e.touches[0].pageX - thumbnailsSlider.offsetLeft;
      scrollLeft = thumbnailsSlider.scrollLeft;
    },
    { passive: true }
  );

  thumbnailsSlider.addEventListener(
    'touchend',
    () => {
      isDown = false;
      thumbnailsSlider.classList.remove('active');
      updateThumbnailNavigation();
    },
    { passive: true }
  );

  thumbnailsSlider.addEventListener(
    'touchcancel',
    () => {
      isDown = false;
      thumbnailsSlider.classList.remove('active');
    },
    { passive: true }
  );

  thumbnailsSlider.addEventListener(
    'touchmove',
    (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - thumbnailsSlider.offsetLeft;
      const walk = (x - startX) * 2;
      thumbnailsSlider.scrollLeft = scrollLeft - walk;
      // Prevent page scrolling when dragging thumbnails
      if (Math.abs(walk) > 10) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
}

// Initialize thumbnail navigation on page load
// This will be called from the main DOMContentLoaded event
function initThumbnailNavigation() {
  // Initial check for navigation buttons
  setTimeout(() => {
    updateThumbnailNavigation();
    // Enable drag and swipe functionality
    enableThumbnailDragScroll();
  }, 500);
}
