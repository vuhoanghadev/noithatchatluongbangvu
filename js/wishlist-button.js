// Wishlist Button JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the product details page
    const productInfoElement = document.getElementById('product-info');
    if (!productInfoElement) return;
    
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    if (!productId) return;
    
    // Find the product
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Add wishlist button to product actions
    addWishlistButton(product);
    
    // Initialize wishlist functionality
    initWishlist();
});

// Add wishlist button to product actions
function addWishlistButton(product) {
    // Get the product actions element
    const productActions = document.querySelector('.product-actions');
    if (!productActions) return;
    
    // Create wishlist button HTML
    const wishlistButtonHTML = `
        <button class="wishlist-btn" id="wishlistBtn" data-product-id="${product.id}">
            <i class="far fa-heart"></i> Thêm vào yêu thích
            <div class="heart-animation">
                <i class="fas fa-heart"></i>
            </div>
        </button>
    `;
    
    // Create wishlist notification HTML
    const wishlistNotificationHTML = `
        <div class="wishlist-notification" id="wishlistNotification">
            <div class="wishlist-notification-icon">
                <i class="fas fa-heart"></i>
            </div>
            <div class="wishlist-notification-content">
                <div class="wishlist-notification-title">Đã thêm vào danh sách yêu thích</div>
                <div class="wishlist-notification-text">Sản phẩm đã được thêm vào danh sách yêu thích của bạn</div>
            </div>
            <div class="wishlist-notification-close" id="wishlistNotificationClose">
                <i class="fas fa-times"></i>
            </div>
        </div>
    `;
    
    // Insert wishlist button after the first button in product actions
    const firstButton = productActions.querySelector('a, button');
    if (firstButton) {
        firstButton.insertAdjacentHTML('afterend', wishlistButtonHTML);
    } else {
        productActions.insertAdjacentHTML('afterbegin', wishlistButtonHTML);
    }
    
    // Add wishlist notification to body
    document.body.insertAdjacentHTML('beforeend', wishlistNotificationHTML);
}

// Initialize wishlist functionality
function initWishlist() {
    // Get wishlist button
    const wishlistBtn = document.getElementById('wishlistBtn');
    if (!wishlistBtn) return;
    
    // Get wishlist notification
    const wishlistNotification = document.getElementById('wishlistNotification');
    const wishlistNotificationClose = document.getElementById('wishlistNotificationClose');
    
    // Check if product is already in wishlist
    const productId = parseInt(wishlistBtn.dataset.productId);
    const wishlist = getWishlist();
    
    if (wishlist.includes(productId)) {
        updateWishlistButtonState(wishlistBtn, true);
    }
    
    // Add click event to wishlist button
    wishlistBtn.addEventListener('click', function() {
        const isInWishlist = this.classList.contains('active');
        
        if (isInWishlist) {
            // Remove from wishlist
            removeFromWishlist(productId);
            updateWishlistButtonState(this, false);
        } else {
            // Add to wishlist
            addToWishlist(productId);
            updateWishlistButtonState(this, true);
            
            // Show notification
            if (wishlistNotification) {
                wishlistNotification.classList.add('show');
                
                // Hide notification after 3 seconds
                setTimeout(() => {
                    wishlistNotification.classList.remove('show');
                }, 3000);
            }
            
            // Add animation class
            this.classList.add('animate');
            
            // Remove animation class after animation completes
            setTimeout(() => {
                this.classList.remove('animate');
            }, 800);
        }
    });
    
    // Add click event to notification close button
    if (wishlistNotificationClose) {
        wishlistNotificationClose.addEventListener('click', function() {
            wishlistNotification.classList.remove('show');
        });
    }
}

// Update wishlist button state
function updateWishlistButtonState(button, isInWishlist) {
    if (isInWishlist) {
        button.classList.add('active');
        button.innerHTML = `
            <i class="fas fa-heart"></i> Đã thêm vào yêu thích
            <div class="heart-animation">
                <i class="fas fa-heart"></i>
            </div>
        `;
    } else {
        button.classList.remove('active');
        button.innerHTML = `
            <i class="far fa-heart"></i> Thêm vào yêu thích
            <div class="heart-animation">
                <i class="fas fa-heart"></i>
            </div>
        `;
    }
}

// Get wishlist from localStorage
function getWishlist() {
    const wishlistJSON = localStorage.getItem('wishlist');
    return wishlistJSON ? JSON.parse(wishlistJSON) : [];
}

// Add product to wishlist
function addToWishlist(productId) {
    const wishlist = getWishlist();
    if (!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}

// Remove product from wishlist
function removeFromWishlist(productId) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(id => id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
