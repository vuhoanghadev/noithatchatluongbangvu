// Tệp này dùng để debug các bài viết đã lưu
console.log('Debugging saved posts...');

// Lấy dữ liệu từ localStorage
const savedPostsData = localStorage.getItem('savedBlogPosts');
console.log('Raw saved posts data:', savedPostsData);

// Parse dữ liệu
const savedPosts = savedPostsData ? JSON.parse(savedPostsData) : [];
console.log('Parsed saved posts:', savedPosts);

// Hiển thị chi tiết từng bài viết
savedPosts.forEach((post, index) => {
  console.log(`Post ${index + 1}:`);
  console.log('  ID:', post.id);
  console.log('  ID type:', typeof post.id);
  console.log('  Title:', post.title);
  console.log('  URL:', post.url);
});

// Thêm nút để xóa tất cả bài viết đã lưu (để reset)
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Saved Posts';
resetButton.style.position = 'fixed';
resetButton.style.bottom = '10px';
resetButton.style.left = '10px';
resetButton.style.zIndex = '9999';
resetButton.style.padding = '10px';
resetButton.style.backgroundColor = 'red';
resetButton.style.color = 'white';
resetButton.style.border = 'none';
resetButton.style.borderRadius = '5px';
resetButton.style.cursor = 'pointer';

resetButton.addEventListener('click', function() {
  localStorage.removeItem('savedBlogPosts');
  alert('Đã xóa tất cả bài viết đã lưu!');
  location.reload();
});

document.body.appendChild(resetButton);
