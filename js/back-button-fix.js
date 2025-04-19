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
        
        // Ẩn hiệu ứng loading nếu đang hiển thị
        hideLoadingIfVisible();
        
        // Kiểm tra nếu người dùng đã rời khỏi trang products trước đó
        if (sessionStorage.getItem('leftProductsPage') === 'true') {
          console.log('User returned from product details page, reloading...');
          
          // Xóa trạng thái
          sessionStorage.removeItem('leftProductsPage');
          
          // Tải lại trang để đảm bảo dữ liệu mới nhất
          window.location.reload();
        }
      } else {
        // Ẩn hiệu ứng loading trong mọi trường hợp
        hideLoadingIfVisible();
      }
    });
    
    // Xử lý sự kiện popstate (khi người dùng ấn nút back)
    window.addEventListener('popstate', function() {
      console.log('Popstate event detected');
      
      // Ẩn hiệu ứng loading nếu đang hiển thị
      hideLoadingIfVisible();
      
      // Kiểm tra nếu người dùng đã rời khỏi trang products trước đó
      if (sessionStorage.getItem('leftProductsPage') === 'true') {
        console.log('User returned from product details page via popstate, reloading...');
        
        // Xóa trạng thái
        sessionStorage.removeItem('leftProductsPage');
        
        // Tải lại trang để đảm bảo dữ liệu mới nhất
        window.location.reload();
      }
    });
    
    // Thêm xử lý cho sự kiện visibilitychange
    document.addEventListener('visibilitychange', function() {
      if (document.visibilityState === 'visible') {
        console.log('Page became visible again');
        
        // Ẩn hiệu ứng loading nếu đang hiển thị
        hideLoadingIfVisible();
      }
    });
    
    // Hàm ẩn hiệu ứng loading nếu đang hiển thị
    function hideLoadingIfVisible() {
      // Tìm spinner overlay
      const spinnerOverlay = document.querySelector('.spinner-overlay');
      if (spinnerOverlay && spinnerOverlay.style.display !== 'none') {
        console.log('Hiding loading spinner that was stuck');
        
        // Ẩn spinner
        spinnerOverlay.style.opacity = '0';
        spinnerOverlay.classList.remove('active');
        
        setTimeout(function() {
          spinnerOverlay.style.display = 'none';
        }, 300);
        
        // Xóa class loading từ các phần tử
        document.querySelectorAll('.loading').forEach(function(element) {
          element.classList.remove('loading');
        });
        
        // Đặt biến isLoading thành false nếu có thể truy cập
        if (typeof window.isLoading !== 'undefined') {
          window.isLoading = false;
        }
        
        // Xóa timeout nếu có
        if (window.loadingTimeout) {
          clearTimeout(window.loadingTimeout);
          window.loadingTimeout = null;
        }
      }
    }
    
    // Thêm xử lý cho sự kiện load
    window.addEventListener('load', function() {
      // Ẩn hiệu ứng loading nếu đang hiển thị
      hideLoadingIfVisible();
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
