/**
 * admin.js - Xử lý chung cho trang admin
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cập nhật số lượng sản phẩm trên trang chủ admin
    updateProductCount();
});

// Hàm cập nhật số lượng sản phẩm
function updateProductCount() {
    const productCount = document.getElementById('product-count');
    if (productCount && typeof products !== 'undefined') {
        productCount.textContent = products.length;
    }
}
