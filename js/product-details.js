document.addEventListener('DOMContentLoaded', () => {
  const productGallery = document.getElementById('product-gallery');
  const productInfo = document.getElementById('product-info');
  const relatedProducts = document.getElementById('related-products');
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  const product = products.find((p) => p.id === productId);
  if (product) {
    // Update meta tags for social sharing
    updateMetaTags(product);
    // Render gallery
    productGallery.innerHTML = `
        <img src="${product.image}" alt="${
      product.name
    }" id="main-image" loading="lazy">
        <div class="thumbnails">
          ${product.gallery
            .map(
              (img) => `<img src="${img}" alt="${product.name}" loading="lazy">`
            )
            .join('')}
        </div>
      `;

    // Render info
    productInfo.innerHTML = `
        <h1>${product.name}</h1>
        <p><strong>Danh mục:</strong> ${product.category}</p>
        <p>${product.description}</p>
        ${
          product.promotion
            ? `<p class="promo-info">Khuyến mãi: ${product.promotion}</p>`
            : ''
        }
        <a href="https://zalo.me/123456789" class="btn-contact">Liên hệ ngay</a>
      `;

    // Gallery interaction
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        mainImage.src = thumb.src;
      });
    });

    // Render related products
    const related = products
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
    related.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
          ${
            p.promotion ? `<span class="promo-badge">${p.promotion}</span>` : ''
          }
          <span class="category-tag">${p.category}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a href="product-details.html?id=${
            p.id
          }" class="btn-details">Xem chi tiết</a>
        `;
      relatedProducts.appendChild(card);
    });

    // Render "Customers also liked" section
    const alsoLikedProducts = document.getElementById('also-liked-products');
    // Get random products from different categories
    const alsoLiked = products
      .filter((p) => p.category !== product.category && p.id !== product.id)
      .sort(() => 0.5 - Math.random()) // Shuffle array
      .slice(0, 4);

    alsoLiked.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
          ${
            p.promotion ? `<span class="promo-badge">${p.promotion}</span>` : ''
          }
          <span class="category-tag">${p.category}</span>
          <img src="${p.image}" alt="${p.name}" loading="lazy">
          <h3>${p.name}</h3>
          <p>${p.description}</p>
          <a href="product-details.html?id=${
            p.id
          }" class="btn-details">Xem chi tiết</a>
        `;
      alsoLikedProducts.appendChild(card);
    });
  } else {
    productInfo.innerHTML = '<p>Sản phẩm không tồn tại.</p>';
  }
});

// Function to update meta tags for social sharing
function updateMetaTags(product) {
  // Get current URL with product ID
  const currentUrl = `${window.location.origin}${window.location.pathname}?id=${product.id}`;

  // Update Open Graph meta tags
  document.getElementById('og-url').setAttribute('content', currentUrl);
  document
    .getElementById('og-title')
    .setAttribute('content', `${product.name} - Nội Thất Bàng Vũ`);
  document
    .getElementById('og-description')
    .setAttribute('content', product.description);
  document.getElementById('og-image').setAttribute('content', product.image);

  // Update Twitter meta tags
  document.getElementById('twitter-url').setAttribute('content', currentUrl);
  document
    .getElementById('twitter-title')
    .setAttribute('content', `${product.name} - Nội Thất Bàng Vũ`);
  document
    .getElementById('twitter-description')
    .setAttribute('content', product.description);
  document
    .getElementById('twitter-image')
    .setAttribute('content', product.image);

  // Update page title
  document.title = `${product.name} - Nội Thất Bàng Vũ`;
}
