// Order Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create order modal HTML
    const orderModal = document.createElement('div');
    orderModal.className = 'order-modal';
    orderModal.id = 'orderModal';
    
    orderModal.innerHTML = `
        <div class="order-modal-content">
            <div class="order-modal-header">
                <h3>Đặt hàng sản phẩm</h3>
                <button class="order-modal-close" onclick="closeOrderModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <form id="orderForm" onsubmit="submitOrderForm(event)">
                <div class="order-form-group">
                    <label for="orderName">Họ và tên</label>
                    <input type="text" id="orderName" name="name" required>
                </div>
                <div class="order-form-group">
                    <label for="orderPhone">Số điện thoại</label>
                    <input type="tel" id="orderPhone" name="phone" required>
                </div>
                <div class="order-form-group">
                    <label for="orderEmail">Email</label>
                    <input type="email" id="orderEmail" name="email">
                </div>
                <div class="order-form-group">
                    <label for="orderAddress">Địa chỉ</label>
                    <textarea id="orderAddress" name="address" required></textarea>
                </div>
                <div class="order-form-group">
                    <label for="orderQuantity">Số lượng</label>
                    <input type="number" id="orderQuantity" name="quantity" min="1" value="1" required>
                </div>
                <div class="order-form-group">
                    <label for="orderNote">Ghi chú</label>
                    <textarea id="orderNote" name="note" placeholder="Yêu cầu thêm về sản phẩm, thời gian giao hàng..."></textarea>
                </div>
                <input type="hidden" id="orderProduct" name="product">
                <button type="submit" class="order-submit-btn">Xác nhận đặt hàng</button>
            </form>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(orderModal);
    
    // Close modal when clicking outside content
    orderModal.addEventListener('click', function(e) {
        if (e.target === orderModal) {
            closeOrderModal();
        }
    });
});

// Open order modal
function openOrderModal(productName) {
    const orderModal = document.getElementById('orderModal');
    const orderProduct = document.getElementById('orderProduct');
    
    if (orderModal && orderProduct) {
        // Set product name in hidden field
        orderProduct.value = productName;
        
        // Show modal with animation
        orderModal.classList.add('active');
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
    }
}

// Close order modal
function closeOrderModal() {
    const orderModal = document.getElementById('orderModal');
    
    if (orderModal) {
        // Hide modal with animation
        orderModal.classList.remove('active');
        
        // Allow body scrolling
        document.body.style.overflow = '';
        
        // Reset form after animation completes
        setTimeout(() => {
            const orderForm = document.getElementById('orderForm');
            if (orderForm) {
                orderForm.reset();
            }
        }, 300);
    }
}

// Submit order form
function submitOrderForm(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const orderData = {};
    
    // Convert FormData to object
    formData.forEach((value, key) => {
        orderData[key] = value;
    });
    
    // Here you would typically send the data to your server
    // For now, we'll just show a success message
    alert(`Cảm ơn ${orderData.name}! Đơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.`);
    
    // Close modal
    closeOrderModal();
}
