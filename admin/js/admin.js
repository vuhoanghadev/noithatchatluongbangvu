/**
 * admin.js - Xử lý chung cho trang admin
 */

document.addEventListener('DOMContentLoaded', function () {
  // Cập nhật số lượng sản phẩm và bài viết trên trang chủ admin
  updateProductCount();
  updateBlogCount();
});

// Hàm cập nhật số lượng sản phẩm
function updateProductCount() {
  const productCount = document.getElementById('product-count');
  if (productCount && typeof products !== 'undefined') {
    productCount.textContent = products.length;
  }
}

// Hàm cập nhật số lượng bài viết
function updateBlogCount() {
  const blogCount = document.querySelector('.dashboard-card:nth-child(2) p');
  if (blogCount && typeof posts !== 'undefined') {
    blogCount.textContent = posts.length;
  }
}
