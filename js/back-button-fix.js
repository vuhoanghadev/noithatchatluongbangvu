// Fix for back button on mobile browsers
(function() {
  // Kiểm tra nếu đang ở trang products.html
  if (window.location.href.includes('products.html')) {
    // Lưu trạng thái trang khi người dùng rời khỏi trang
    window.addEventListener('beforeunload', function() {
      // Đánh dấu rằng người dùng đã rời khỏi trang products
      sessionStorage.setItem('leftProductsPage', 'true');
    });
    
    // Xử lý khi người dùng quay lại trang bằng nút back
    window.addEventListener('pageshow', function(event) {
      // Kiểm tra nếu trang được tải từ cache (người dùng ấn nút back)
      if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        console.log('Page loaded from cache (back button pressed)');
        
        // Kiểm tra nếu người dùng đã rời khỏi trang products trước đó
        if (sessionStorage.getItem('leftProductsPage') === 'true') {
          console.log('User returned from product details page, reloading...');
          
          // Xóa trạng thái
          sessionStorage.removeItem('leftProductsPage');
          
          // Tải lại trang để đảm bảo dữ liệu mới nhất
          window.location.reload();
        }
      }
    });
    
    // Xử lý sự kiện popstate (khi người dùng ấn nút back)
    window.addEventListener('popstate', function() {
      console.log('Popstate event detected');
      
      // Kiểm tra nếu người dùng đã rời khỏi trang products trước đó
      if (sessionStorage.getItem('leftProductsPage') === 'true') {
        console.log('User returned from product details page via popstate, reloading...');
        
        // Xóa trạng thái
        sessionStorage.removeItem('leftProductsPage');
        
        // Tải lại trang để đảm bảo dữ liệu mới nhất
        window.location.reload();
      }
    });
  }
  
  // Kiểm tra nếu đang ở trang product-details.html
  if (window.location.href.includes('product-details.html')) {
    // Đánh dấu rằng người dùng đang ở trang chi tiết sản phẩm
    sessionStorage.setItem('onProductDetailsPage', 'true');
    
    // Xử lý khi người dùng rời khỏi trang chi tiết sản phẩm
    window.addEventListener('beforeunload', function() {
      // Nếu người dùng rời khỏi trang chi tiết sản phẩm và quay lại trang products
      // thì đánh dấu để biết rằng người dùng đã rời khỏi trang chi tiết sản phẩm
      if (document.referrer.includes('products.html')) {
        sessionStorage.setItem('leftProductDetailsPage', 'true');
      }
    });
  }
})();
