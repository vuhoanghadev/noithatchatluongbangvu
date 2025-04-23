// Script để reset tất cả bài viết đã lưu
console.log('Resetting all saved posts...');

// Xóa tất cả bài viết đã lưu
localStorage.removeItem('bangvu_saved_posts');
localStorage.removeItem('savedBlogPosts');

// Thông báo
alert('Đã xóa tất cả bài viết đã lưu!');

// Tải lại trang
location.reload();
