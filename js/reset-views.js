// Script để xóa dữ liệu lượt xem trong localStorage
document.addEventListener('DOMContentLoaded', function() {
  // Xóa dữ liệu lượt xem trong localStorage
  localStorage.removeItem('blogPostViews');
  
  // Xóa dữ liệu phiên xem trong sessionStorage
  sessionStorage.removeItem('viewedBlogPosts');
  
  console.log('Đã xóa dữ liệu lượt xem trong localStorage và sessionStorage');
  
  // Hiển thị thông báo
  alert('Đã xóa dữ liệu lượt xem. Hãy tải lại trang để kiểm tra tính năng tăng lượt xem.');
});
