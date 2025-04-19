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

    // Thêm phần free-consultation vào gallery (sẽ chỉ hiển thị trên desktop)
    galleryHTML += `
            <!-- Free Consultation Section (Desktop Only) -->
            <div class="free-consultation">
                <div class="consultation-header">
                    <i class="fas fa-headset"></i>
                    <div>
                        <h3 class="consultation-title">Tư vấn miễn phí</h3>
                        <p class="consultation-subtitle">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
                    </div>
                </div>

                <div class="consultation-options">
                    <div class="consultation-call">
                        <div class="consultation-call-title">
                            <i class="fas fa-phone-alt"></i> Gọi ngay
                        </div>
                        <p>Gọi điện thoại trực tiếp để được tư vấn ngay</p>
                        <a href="tel:0972774646" class="phone-number">097.277.4646</a>
                    </div>

                    <div class="consultation-callback">
                        <div class="consultation-callback-title">
                            <i class="fas fa-reply"></i> Yêu cầu gọi lại
                        </div>
                        <p>Để lại số điện thoại, Bàng Vũ sẽ gọi lại cho bạn</p>
                        <input type="tel" class="phone-input" id="callback-phone-gallery" placeholder="Nhập số điện thoại của bạn">
                        <button class="submit-consultation" id="submit-consultation-gallery">
                            <i class="fas fa-paper-plane"></i> Gửi yêu cầu tư vấn
                        </button>
                    </div>
                </div>

                <p class="consultation-note">* Chúng tôi cam kết bảo mật thông tin của bạn</p>

                <div class="consultation-success" id="consultation-success-gallery">
                    <i class="fas fa-check-circle"></i> Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
                </div>
            </div>
    `;

    // Set gallery HTML
    productGallery.innerHTML = galleryHTML;
  }

  function renderProductInfo(product) {
    if (!productInfo) return;

    // Get dimensions from size field or extract from description if not available
    let dimensions = 'Đang cập nhật';
    if (product.size) {
      dimensions = product.size;
    } else {
      const dimensionsMatch = product.description.match(/kích thước ([^,]+)/i);
      if (dimensionsMatch && dimensionsMatch[1]) {
        dimensions = dimensionsMatch[1];
      }
    }

    // Create info HTML - Sắp xếp theo thứ tự yêu cầu
    let infoHTML = '';

    // 1. Thêm tag sản phẩm (nếu có)
    if (product.tag) {
      infoHTML += `<div class="product-tag"><span>${product.tag}</span></div>`;
    }

    // 2. Thêm tiêu đề sản phẩm
    infoHTML += `<h1>${product.name}</h1>`;

    // 3. Thêm đánh giá và lượt xem
    const rating = product.rating || 0;
    const views = product.views || 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    let starsHTML = '';

    // Tạo các sao đầy
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fas fa-star"></i>';
    }

    // Thêm nửa sao nếu cần
    if (hasHalfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    // Thêm các sao trống
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<i class="far fa-star"></i>';
    }

    infoHTML += `
      <div class="product-ratings-views">
        <div class="product-ratings">
          ${starsHTML}
          <span class="rating-value">${rating.toFixed(1)}</span>
        </div>
        <div class="product-views">
          <i class="fas fa-eye"></i> ${views.toLocaleString('vi-VN')} lượt xem
        </div>
      </div>
      <div class="product-category">${product.category}</div>
    `;

    // 3. Thêm flashsale nếu có và đang hoạt động
    if (product.flashsale && product.flashsale.active) {
      const flashsale = product.flashsale;
      let isActive = false;
      let endTime = null;
      let flashsaleType = '';

      // Format prices with commas
      const formattedOldPrice = flashsale.oldPrice.toLocaleString('vi-VN');
      const formattedNewPrice = flashsale.newPrice.toLocaleString('vi-VN');

      const now = new Date();

      // Check flashsale type and determine if it's active
      if (flashsale.type === 'fixed') {
        // Fixed-time flashsale
        endTime = new Date(flashsale.endsAt);
        isActive = endTime > now;
        flashsaleType = 'fixed';
      } else if (flashsale.type === 'daily') {
        // Daily flashsale - resets at specified time each day
        isActive = true; // Always active
        flashsaleType = 'daily';

        // Calculate time until end of today's flashsale
        endTime = new Date(now);
        endTime.setHours(
          flashsale.dailyEndHour || 23,
          flashsale.dailyEndMinute || 59,
          flashsale.dailyEndSecond || 59,
          0
        );

        // If current time is past today's end time, set end time to tomorrow
        if (now > endTime) {
          endTime.setDate(endTime.getDate() + 1);
        }
      }

      // Display flashsale info if active
      if (isActive) {
        // Generate initial countdown text (will be updated by JS)
        const initialCountdownText = 'Đang tính thời gian...';

        // Check if price should be hidden
        const hidePrice = flashsale.hidePrice === true;

        // Price HTML section
        const priceHTML = hidePrice
          ? ''
          : `
                    <div class="flashsale-prices">
                        <span class="old-price">${formattedOldPrice}đ</span>
                        <span class="new-price">${formattedNewPrice}đ</span>
                    </div>
                `;

        infoHTML += `
                <div class="flashsale-info">
                    <div class="flashsale-header">
                        <i class="fas fa-bolt"></i>
                        <div class="flashsale-header-text">
                            FLASH SALE <span class="flashsale-discount">${
                              flashsale.discountPercent
                            }%</span>
                            ${
                              flashsaleType === 'daily'
                                ? '<span class="daily-badge">CHỈ HÔM NAY</span>'
                                : ''
                            }
                        </div>
                    </div>
                    ${priceHTML}
                    <div class="flashsale-countdown" id="flashsaleCountdown"
                         data-end-time="${endTime.getTime()}"
                         data-type="${flashsaleType}">
                        <i class="far fa-clock"></i> <span id="countdownText">${initialCountdownText}</span>
                    </div>
                </div>
            `;
      }
    }

    // 4. Thêm khuyến mãi nếu có
    if (product.promotion) {
      infoHTML += `
                <div class="promo-info">
                    <i class="fas fa-gift"></i> Khuyến mãi: ${product.promotion}
                </div>
            `;
    }

    // 5. Thêm thông tin giá bán
    infoHTML += `
        <div class="price-info">
            <div class="price-header">
                <i class="fas fa-tag"></i> GIÁ BÁN
            </div>
            <div class="price-value">
                <span class="contact-price">${product.price || 'Liên hệ'}</span>
            </div>
            <div class="price-note">
                <i class="fas fa-info-circle"></i> Liên hệ để được tư vấn về kích thước và màu sắc
            </div>
        </div>
    `;

    // 6. Thêm thông số kỹ thuật
    infoHTML += `
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
                        <i class="fas fa-hammer"></i>
                        <span>Vật liệu: ${
                          product.material || 'Theo mô tả'
                        }</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-shield-alt"></i>
                        <span>Bảo hành: ${product.warranty || '10 năm'}</span>
                    </div>
                    <div class="spec-item">
                        <i class="fas fa-barcode"></i>
                        <span>Mã sản phẩm: ${generateSKU(product)}</span>
                    </div>
                </div>
            </div>
    `;

    // 7. Thêm mô tả sản phẩm
    infoHTML += `
            <div class="product-description collapsed">
                ${product.description}
            </div>
            <div class="product-description-toggle" id="description-toggle">Xem thêm</div>
            <div style="clear: both;"></div>
    `;

    // 8. Thêm các nút button liên hệ tư vấn và đặt hàng
    infoHTML += `
            <div class="product-actions">
                <a href="https://zalo.me/123456789" class="btn-contact">
                    <i class="fas fa-comment"></i> Liên hệ tư vấn
                </a>
                <button class="btn-order" onclick="openOrderModal(product.name)">
                    <i class="fas fa-shopping-cart"></i> Đặt hàng
                </button>
            </div>

            <!-- Free Consultation Section -->
            <div class="free-consultation">
                <div class="consultation-header">
                    <i class="fas fa-headset"></i>
                    <div>
                        <h3 class="consultation-title">Tư vấn miễn phí</h3>
                        <p class="consultation-subtitle">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
                    </div>
                </div>

                <div class="consultation-options">
                    <div class="consultation-call">
                        <div class="consultation-call-title">
                            <i class="fas fa-phone-alt"></i> Gọi ngay
                        </div>
                        <p>Gọi điện thoại trực tiếp để được tư vấn ngay</p>
                        <a href="tel:0972774646" class="phone-number">097.277.4646</a>
                    </div>

                    <div class="consultation-callback">
                        <div class="consultation-callback-title">
                            <i class="fas fa-reply"></i> Yêu cầu gọi lại
                        </div>
                        <p>Để lại số điện thoại, Bàng Vũ sẽ gọi lại cho bạn</p>
                        <input type="tel" class="phone-input" id="callback-phone" placeholder="Nhập số điện thoại của bạn">
                        <button class="submit-consultation" id="submit-consultation">
                            <i class="fas fa-paper-plane"></i> Gửi yêu cầu tư vấn
                        </button>
                    </div>
                </div>

                <p class="consultation-note">* Chúng tôi cam kết bảo mật thông tin của bạn</p>

                <div class="consultation-success" id="consultation-success">
                    <i class="fas fa-check-circle"></i> Cảm ơn bạn đã để lại thông tin. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất!
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

    // Get dimensions from size field or extract from description if not available
    let dimensions = 'Đang cập nhật';
    if (product.size) {
      dimensions = product.size;
    } else {
      const dimensionsMatch = product.description.match(/kích thước ([^,]+)/i);
      if (dimensionsMatch && dimensionsMatch[1]) {
        dimensions = dimensionsMatch[1];
      }
    }

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

  // Initialize flashsale countdown timer
  initFlashsaleCountdown();

  // Initialize description toggle
  initDescriptionToggle();
});

// Function to handle description toggle
function initDescriptionToggle() {
  setTimeout(() => {
    const descriptionElement = document.querySelector('.product-description');
    const toggleButton = document.getElementById('description-toggle');

    if (!descriptionElement || !toggleButton) {
      console.log('Description element or toggle button not found');
      return;
    }

    // Check if description needs toggle button
    const descriptionHeight = descriptionElement.scrollHeight;
    const lineHeight = parseInt(
      window.getComputedStyle(descriptionElement).lineHeight || '24'
    );
    const fontSize = parseInt(
      window.getComputedStyle(descriptionElement).fontSize || '16'
    );
    const threeLineHeight = fontSize * 1.7 * 3; // Approximate height of 3 lines

    console.log('Description height:', descriptionHeight);
    console.log('Three line height:', threeLineHeight);

    // Always show toggle button for testing
    toggleButton.style.display = 'block';

    toggleButton.addEventListener('click', function () {
      if (descriptionElement.classList.contains('collapsed')) {
        // Expand
        descriptionElement.classList.remove('collapsed');
        toggleButton.textContent = 'Rút gọn';
      } else {
        // Collapse
        descriptionElement.classList.add('collapsed');
        toggleButton.textContent = 'Xem thêm';
      }
    });
  }, 1000); // Longer delay to ensure DOM is fully rendered
}

// Initialize flashsale countdown timer
function initFlashsaleCountdown() {
  const countdownElement = document.getElementById('flashsaleCountdown');
  if (!countdownElement) return;

  const endTime = parseInt(countdownElement.getAttribute('data-end-time'));
  const flashsaleType = countdownElement.getAttribute('data-type');
  const countdownTextElement = document.getElementById('countdownText');

  if (!countdownTextElement) return;

  // Update the timer every second
  const updateTimer = () => {
    const now = new Date().getTime();
    let distance = endTime - now;

    // If the countdown is over for daily flashsale, recalculate for next day
    if (distance < 0 && flashsaleType === 'daily') {
      // Calculate next end time (tomorrow same time)
      const nextEndTime = new Date(endTime);
      nextEndTime.setDate(nextEndTime.getDate() + 1);

      // Update data attribute and recalculate distance
      countdownElement.setAttribute('data-end-time', nextEndTime.getTime());
      distance = nextEndTime.getTime() - now;
    }

    // If the countdown is over for fixed flashsale, show expired message
    if (distance < 0 && flashsaleType === 'fixed') {
      countdownTextElement.textContent = 'Flashsale đã kết thúc!';
      return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format time units with spans for styling
    const formatTimeUnit = (value, unit) => {
      return `<span class="countdown-unit">${value}</span> ${unit}`;
    };

    // Update the countdown text based on flashsale type
    if (flashsaleType === 'fixed') {
      countdownTextElement.innerHTML = `Kết thúc sau:
        ${formatTimeUnit(days, 'ngày')}
        ${formatTimeUnit(hours, 'giờ')}
        ${formatTimeUnit(minutes, 'phút')}
        ${formatTimeUnit(seconds, 'giây')}`;
    } else {
      // daily
      countdownTextElement.innerHTML = `Kết thúc sau:
        ${formatTimeUnit(hours, 'giờ')}
        ${formatTimeUnit(minutes, 'phút')}
        ${formatTimeUnit(seconds, 'giây')}`;
    }
  };

  // Update immediately
  updateTimer();

  // Then update every second
  setInterval(updateTimer, 1000);
}

// Function to generate SKU from product data
function generateSKU(product) {
  // If product already has a custom SKU, use it
  if (product.sku) {
    return product.sku;
  }

  // Otherwise, generate SKU from product name
  // Extract first letters of main words and add product ID
  const prefix = 'NTBV-';

  // Extract category code (first letter of each word)
  let categoryCode = '';
  if (product.category) {
    categoryCode = product.category
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .join('');
  }

  // Extract product name code
  let nameCode = '';
  if (product.name) {
    // Extract first part of name (before first dash if exists)
    const nameParts = product.name.split('-')[0].trim();

    // Get any numbers from the name
    const numbers = nameParts.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      nameCode = numbers[0];
    } else {
      // If no numbers, use first 3 letters
      nameCode = nameParts.substring(0, 3).toUpperCase();
    }
  }

  // Combine parts with product ID as fallback
  return prefix + (categoryCode || '') + (nameCode || product.id);
}

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
