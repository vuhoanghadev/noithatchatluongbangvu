// Modern Product Details Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const productGallery = document.getElementById('product-gallery');
    const productInfo = document.getElementById('product-info');
    const relatedProducts = document.getElementById('related-products');
    const alsoLikedProducts = document.getElementById('also-liked-products');
    const breadcrumbProductName = document.getElementById('breadcrumb-product-name');
    
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    // Find product in the products array
    const product = products.find(p => p.id === productId);
    
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
            </div>
            <div class="thumbnails">
        `;
        
        // Add thumbnails
        if (product.gallery && product.gallery.length > 0) {
            product.gallery.forEach((image, index) => {
                galleryHTML += `
                    <img src="${image}" alt="${product.name} - Image ${index + 1}" class="${index === 0 ? 'active' : ''}" onclick="changeMainImage(this, '${image}')">
                `;
            });
        } else {
            // If no gallery, just show the main image as thumbnail
            galleryHTML += `
                <img src="${product.image}" alt="${product.name}" class="active" onclick="changeMainImage(this, '${product.image}')">
            `;
        }
        
        galleryHTML += `</div>`;
        
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
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}" target="_blank" class="facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(product.name)}" target="_blank" class="twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.name)}" target="_blank" class="pinterest">
                        <i class="fab fa-pinterest-p"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(product.name + ' - ' + window.location.href)}" target="_blank" class="whatsapp">
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
            .filter(p => p.category === product.category && p.id !== product.id)
            .slice(0, 4);
        
        if (related.length === 0) {
            relatedProducts.innerHTML = '<p class="no-products">Không có sản phẩm liên quan.</p>';
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
            .filter(p => p.category !== product.category && p.id !== product.id)
            .sort(() => 0.5 - Math.random()) // Shuffle array
            .slice(0, 4);
        
        if (alsoLiked.length === 0) {
            alsoLikedProducts.innerHTML = '<p class="no-products">Không có sản phẩm gợi ý.</p>';
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
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/products/placeholder.jpg'">
                ${badgeHTML}
            </div>
            <div class="product-content">
                <div class="product-category">
                    <i class="fas fa-tag"></i> ${product.category}
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
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
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');
        
        if (ogTitle) ogTitle.setAttribute('content', `${product.name} - Nội Thất Chất Lượng Bàng Vũ`);
        if (ogDescription) ogDescription.setAttribute('content', product.description);
        if (ogImage) ogImage.setAttribute('content', product.image);
        if (ogUrl) ogUrl.setAttribute('content', window.location.href);
        
        // Update Twitter meta tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        const twitterImage = document.querySelector('meta[property="twitter:image"]');
        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        
        if (twitterTitle) twitterTitle.setAttribute('content', `${product.name} - Nội Thất Chất Lượng Bàng Vũ`);
        if (twitterDescription) twitterDescription.setAttribute('content', product.description);
        if (twitterImage) twitterImage.setAttribute('content', product.image);
        if (twitterUrl) twitterUrl.setAttribute('content', window.location.href);
    }
});

// Global functions
function changeMainImage(thumbnail, imageSrc) {
    // Update main image
    const mainImage = document.getElementById('main-image');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.thumbnails img');
    thumbnails.forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    thumbnail.classList.add('active');
}

function shareProduct() {
    // Check if Web Share API is supported
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: window.location.href
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback: show social share section
        const socialShare = document.querySelector('.social-share');
        if (socialShare) {
            socialShare.scrollIntoView({ behavior: 'smooth' });
            socialShare.style.animation = 'highlight 1s ease';
        }
    }
}
