// Safari Pagination Scroll Fix
(function() {
  // Kiểm tra nếu đang ở trang products.html
  if (!window.location.href.includes('products.html')) return;
  
  // Kiểm tra nếu là Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
  
  if (!isSafari) return;
  
  // Hàm cuộn lên đầu trang
  function scrollToTop() {
    window.scrollTo(0, 0);
  }
  
  // Thêm xử lý cho các nút phân trang
  function addPaginationScrollFix() {
    const pagination = document.querySelector('.pagination');
    if (!pagination) {
      // Thử lại sau 500ms nếu chưa tìm thấy phân trang
      setTimeout(addPaginationScrollFix, 500);
      return;
    }
    
    // Thêm sự kiện click cho tất cả các nút trong phân trang
    pagination.addEventListener('click', function(e) {
      // Kiểm tra nếu click vào nút
      if (e.target.tagName === 'BUTTON' || e.target.closest('button')) {
        // Cuộn lên đầu trang ngay lập tức
        scrollToTop();
        
        // Đảm bảo cuộn hoàn tất bằng cách thực hiện lại nhiều lần
        setTimeout(scrollToTop, 50);
        setTimeout(scrollToTop, 100);
        setTimeout(scrollToTop, 200);
        setTimeout(scrollToTop, 300);
        setTimeout(scrollToTop, 500);
        setTimeout(scrollToTop, 800);
      }
    });
    
    console.log('Safari pagination scroll fix initialized');
  }
  
  // Thêm xử lý khi trang đã tải
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addPaginationScrollFix);
  } else {
    addPaginationScrollFix();
  }
  
  // Thêm xử lý khi trang đã tải hoàn toàn
  window.addEventListener('load', function() {
    setTimeout(addPaginationScrollFix, 1000);
  });
})();
