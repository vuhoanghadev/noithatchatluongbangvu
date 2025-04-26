/**
 * blog-list.js - Xử lý hiển thị danh sách bài viết
 */

// Biến toàn cục cho phân trang
let currentPage = 1;
let itemsPerPage = 10; // Mặc định hiển thị 10 bài viết trên một trang
let filteredPosts = [];
let allPosts = [];

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem đang ở trang quản lý bài viết không
  if (document.querySelector('.product-manager-container')) {
    // Kiểm tra xem biến posts có tồn tại không
    if (typeof posts !== 'undefined') {
      // Khởi tạo danh sách bài viết
      initBlogList();

      // Khởi tạo sự kiện cho các nút và form
      initBlogListEvents();
    } else {
      console.error('Không tìm thấy dữ liệu bài viết (posts)');
      // Hiển thị thông báo lỗi cho người dùng
      const blogList = document.getElementById('blog-list');
      if (blogList) {
        const emptyRow = document.createElement('tr');
        emptyRow.innerHTML = `<td colspan="8" class="text-center">Không tìm thấy dữ liệu bài viết. Vui lòng kiểm tra file blog.js</td>`;
        blogList.appendChild(emptyRow);
      }
    }
  }
});

// Hàm khởi tạo danh sách bài viết
function initBlogList() {
  // Sao chép danh sách bài viết từ biến toàn cục
  allPosts = [...posts];
  filteredPosts = [...posts];

  // Hiển thị danh sách bài viết
  renderBlogList();

  // Điền danh mục và tác giả vào dropdown
  populateCategoryDropdown();
  populateAuthorDropdown();
}

// Hàm điền danh mục vào dropdown
function populateCategoryDropdown() {
  const categoryFilter = document.getElementById('category-filter');
  const blogCategory = document.getElementById('blog-category');

  if (!categoryFilter || !blogCategory) return;

  // Lấy danh sách danh mục duy nhất
  const categories = [
    ...new Set(allPosts.map((post) => post.category).filter(Boolean)),
  ].sort();

  // Xóa các option cũ (trừ option đầu tiên)
  while (categoryFilter.options.length > 1) {
    categoryFilter.remove(1);
  }

  // Xóa tất cả option trong dropdown danh mục bài viết
  blogCategory.innerHTML = '';

  // Thêm các danh mục vào dropdown lọc
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);

    // Thêm vào dropdown trong form
    const formOption = option.cloneNode(true);
    blogCategory.appendChild(formOption);
  });
}

// Hàm điền tác giả vào dropdown
function populateAuthorDropdown() {
  const authorFilter = document.getElementById('author-filter');
  if (!authorFilter) return;

  // Lấy danh sách tác giả duy nhất
  const authors = [
    ...new Set(allPosts.map((post) => post.author).filter(Boolean)),
  ].sort();

  // Xóa các option cũ (trừ option đầu tiên)
  while (authorFilter.options.length > 1) {
    authorFilter.remove(1);
  }

  // Thêm các tác giả vào dropdown
  authors.forEach((author) => {
    const option = document.createElement('option');
    option.value = author;
    option.textContent = author;
    authorFilter.appendChild(option);
  });
}

// Hàm khởi tạo sự kiện cho danh sách bài viết
function initBlogListEvents() {
  // Xử lý nút thêm bài viết
  const addBlogBtn = document.getElementById('add-blog-btn');
  if (addBlogBtn) {
    addBlogBtn.addEventListener('click', function () {
      openBlogModal();
    });
  }

  // Xử lý nút xuất file
  const exportBlogBtn = document.getElementById('export-blog-btn');
  if (exportBlogBtn) {
    exportBlogBtn.addEventListener('click', function () {
      exportBlogFile();
    });
  }

  // Xử lý nút áp dụng bộ lọc
  const applyFilterBtn = document.getElementById('apply-filter');
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener('click', function () {
      filterBlogs();
    });
  }

  // Xử lý sự kiện thay đổi trực tiếp cho dropdown danh mục và tác giả
  const categoryFilter = document.getElementById('category-filter');
  const authorFilter = document.getElementById('author-filter');

  if (categoryFilter) {
    categoryFilter.addEventListener('change', function () {
      filterBlogs();
    });
  }

  if (authorFilter) {
    authorFilter.addEventListener('change', function () {
      filterBlogs();
    });
  }

  // Xử lý sự kiện Enter trong ô tìm kiếm
  const searchInput = document.getElementById('search-blog');
  if (searchInput) {
    // Lọc khi người dùng nhập (sau 300ms để tránh gọi quá nhiều lần)
    let searchTimeout;
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        filterBlogs();
      }, 300);
    });

    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        filterBlogs();
      }
    });
  }

  // Xử lý thay đổi số lượng bài viết trên một trang
  const itemsPerPageSelect = document.getElementById('items-per-page');
  if (itemsPerPageSelect) {
    itemsPerPageSelect.addEventListener('change', function () {
      const value = this.value;
      if (value === 'all') {
        // Hiển thị tất cả bài viết
        itemsPerPage = filteredPosts.length;
      } else {
        // Hiển thị số lượng bài viết được chọn
        itemsPerPage = parseInt(value);
      }
      // Reset về trang đầu tiên và hiển thị lại danh sách
      currentPage = 1;
      renderBlogList();
    });
  }
}

// Hàm lọc bài viết
function filterBlogs() {
  const categoryFilter = document.getElementById('category-filter');
  const authorFilter = document.getElementById('author-filter');
  const searchInput = document.getElementById('search-blog');

  const category = categoryFilter ? categoryFilter.value : 'all';
  const author = authorFilter ? authorFilter.value : 'all';
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';

  // Lọc bài viết theo danh mục, tác giả và từ khóa tìm kiếm
  filteredPosts = allPosts.filter((post) => {
    // Lọc theo danh mục
    const categoryMatch = category === 'all' || post.category === category;

    // Lọc theo tác giả
    const authorMatch = author === 'all' || post.author === author;

    // Lọc theo từ khóa tìm kiếm (tiêu đề hoặc ID)
    let searchMatch = true;
    if (searchTerm) {
      const titleMatch =
        post.title && post.title.toLowerCase().includes(searchTerm);
      const idMatch = post.id && post.id.toString().includes(searchTerm);
      searchMatch = titleMatch || idMatch;
    }

    return categoryMatch && authorMatch && searchMatch;
  });

  // Reset về trang đầu tiên
  currentPage = 1;

  // Hiển thị danh sách bài viết đã lọc
  renderBlogList();
}

// Hàm hiển thị danh sách bài viết
function renderBlogList() {
  const blogList = document.getElementById('blog-list');
  if (!blogList) return;

  // Tính toán phân trang
  let paginatedPosts;

  // Kiểm tra nếu hiển thị tất cả bài viết
  if (itemsPerPage >= filteredPosts.length) {
    paginatedPosts = filteredPosts;
  } else {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    paginatedPosts = filteredPosts.slice(startIndex, endIndex);
  }

  // Xóa danh sách cũ
  blogList.innerHTML = '';

  // Thêm bài viết vào danh sách
  if (paginatedPosts.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `<td colspan="8" class="text-center">Không có bài viết nào</td>`;
    blogList.appendChild(emptyRow);
  } else {
    paginatedPosts.forEach((post) => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${post.id}</td>
                <td><img src="${post.image}" alt="${
        post.title
      }" class="product-image"></td>
                <td>${post.title}</td>
                <td>${post.category || ''}</td>
                <td>${post.author || ''}</td>
                <td>${post.blogDate || ''}</td>
                <td>${post.views || 0}</td>
                <td class="product-actions-cell">
                    <button class="btn-icon edit" data-id="${
                      post.id
                    }" title="Sửa"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete" data-id="${
                      post.id
                    }" title="Xóa"><i class="fas fa-trash"></i></button>
                </td>
            `;
      blogList.appendChild(row);
    });
  }

  // Cập nhật phân trang
  renderPagination();

  // Thêm sự kiện cho các nút sửa và xóa
  addBlogActionEvents();
}

// Hàm hiển thị phân trang
function renderPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  // Xóa phân trang cũ
  pagination.innerHTML = '';

  // Không hiển thị phân trang nếu chỉ có 1 trang hoặc hiển thị tất cả bài viết
  if (totalPages <= 1 || itemsPerPage >= filteredPosts.length) {
    // Hiển thị thông tin số lượng bài viết
    pagination.innerHTML = `<div class="pagination-info">Hiển thị ${filteredPosts.length} bài viết</div>`;
    return;
  }

  // Thêm nút Previous
  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', () => {
      currentPage--;
      renderBlogList();
    });
    pagination.appendChild(prevButton);
  }

  // Thêm các nút số trang
  for (let i = 1; i <= totalPages; i++) {
    // Hiển thị tối đa 5 nút trang
    if (
      i === 1 || // Trang đầu
      i === totalPages || // Trang cuối
      (i >= currentPage - 1 && i <= currentPage + 1) // Trang hiện tại và 2 trang lân cận
    ) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      pageButton.addEventListener('click', () => {
        currentPage = i;
        renderBlogList();
      });
      pagination.appendChild(pageButton);
    } else if (
      (i === currentPage - 2 && currentPage > 3) ||
      (i === currentPage + 2 && currentPage < totalPages - 2)
    ) {
      // Thêm dấu ... nếu có nhiều trang
      const ellipsis = document.createElement('span');
      ellipsis.textContent = '...';
      ellipsis.className = 'ellipsis';
      pagination.appendChild(ellipsis);
    }
  }

  // Thêm nút Next
  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', () => {
      currentPage++;
      renderBlogList();
    });
    pagination.appendChild(nextButton);
  }
}

// Hàm thêm sự kiện cho các nút sửa và xóa
function addBlogActionEvents() {
  // Xử lý nút sửa bài viết
  const editButtons = document.querySelectorAll('.btn-icon.edit');
  editButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const postId = parseInt(this.getAttribute('data-id'));
      openBlogModal(postId);
    });
  });

  // Xử lý nút xóa bài viết
  const deleteButtons = document.querySelectorAll('.btn-icon.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const postId = parseInt(this.getAttribute('data-id'));
      const post = allPosts.find((p) => p.id === postId);

      if (post) {
        showConfirmModal(
          `Bạn có chắc chắn muốn xóa bài viết "${post.title}"?`,
          () => {
            deleteBlog(postId);
          }
        );
      }
    });
  });
}

// Hàm mở modal thêm/sửa bài viết
function openBlogModal(postId = null) {
  const modal = document.getElementById('blog-modal');
  const modalTitle = document.getElementById('modal-title');
  const blogForm = document.getElementById('blog-form');

  // Reset form
  blogForm.reset();

  // Ẩn modal trước khi cập nhật
  modal.style.display = 'block';

  // Điền dữ liệu bài viết
  setTimeout(() => {
    fillBlogData(postId);
  }, 100);
}

// Hàm điền dữ liệu bài viết vào form
function fillBlogData(postId) {
  if (postId) {
    // Chế độ sửa bài viết
    const post = allPosts.find((p) => p.id === postId);
    if (post) {
      document.getElementById(
        'modal-title'
      ).textContent = `Sửa Bài viết #${post.id}`;
      fillBlogForm(post);
    } else {
      showNotification('Không tìm thấy bài viết', 'error');
    }
  } else {
    // Chế độ thêm bài viết mới
    document.getElementById('modal-title').textContent = 'Thêm Bài viết Mới';
    document.getElementById('blog-id').value = '';

    // Xóa nội dung trình soạn thảo
    setEditorContent('');
  }
}

// Hàm điền thông tin bài viết vào form
function fillBlogForm(post) {
  // Điền ID bài viết
  document.getElementById('blog-id').value = post.id;

  // Điền thông tin cơ bản
  document.getElementById('blog-title').value = post.title || '';
  document.getElementById('blog-category').value = post.category || '';
  document.getElementById('blog-date').value = post.blogDate || '';
  document.getElementById('blog-excerpt').value = post.excerpt || '';
  document.getElementById('blog-image').value = post.image || '';
  document.getElementById('blog-views').value = post.views || 0;

  // Điền nội dung bài viết
  setEditorContent(post.content || '');

  // Điền thông tin tác giả
  document.getElementById('blog-author').value = post.author || '';
  document.getElementById('blog-author-avatar').value = post.authorAvatar || '';
  document.getElementById('blog-author-bio').value = post.authorBio || '';
  document.getElementById('blog-author-verified').value =
    post.authorVerified || '';
  document.getElementById('blog-author-job').value = post.authorJob || '';
  document.getElementById('blog-author-experience').value =
    post.authorExperience || '';
  document.getElementById('blog-author-projects').value =
    post.authorProjects || '';
  document.getElementById('blog-author-rating').value = post.authorRating || '';
}

// Hàm xóa bài viết
function deleteBlog(postId) {
  // Tìm vị trí của bài viết trong mảng
  const index = allPosts.findIndex((post) => post.id === postId);

  if (index !== -1) {
    // Xóa bài viết khỏi mảng
    allPosts.splice(index, 1);

    // Cập nhật lại danh sách đã lọc
    filterBlogs();

    // Hiển thị thông báo
    showNotification('Xóa bài viết thành công', 'success');
  } else {
    showNotification('Không tìm thấy bài viết', 'error');
  }
}

// Hàm xuất file blog.js
function exportBlogFile() {
  // Tạo nội dung file
  let fileContent = `// Hàm lọc các bài viết trùng lặp
function removeDuplicatePosts() {
  const uniquePosts = [];
  const uniqueIds = new Set();

  // Lọc các bài viết có ID duy nhất
  for (let i = 0; i < posts.length; i++) {
    if (!uniqueIds.has(posts[i].id)) {
      uniquePosts.push(posts[i]);
      uniqueIds.add(posts[i].id);
    }
  }

  // Thay thế mảng posts gốc bằng mảng đã lọc
  posts.length = 0; // Xóa tất cả phần tử hiện tại
  uniquePosts.forEach((post) => posts.push(post)); // Thêm các phần tử duy nhất vào mảng
}

// Hàm kiểm tra và tăng lượt xem tự động mỗi ngày mới
function checkAndIncreaseViewsDaily() {
  // Lấy ngày hiện tại
  const today = new Date().toLocaleDateString('vi-VN');

  // Lấy ngày cuối cùng đã tăng lượt xem từ localStorage
  const lastIncreasedDate = localStorage.getItem('lastViewsIncreasedDate');

  // Nếu chưa có ngày cuối cùng hoặc ngày hiện tại khác ngày cuối cùng
  if (!lastIncreasedDate || lastIncreasedDate !== today) {
    console.log(\`Sang ngày mới: \${today}, tăng lượt xem cho tất cả bài viết\`);

    // Lấy dữ liệu lượt xem từ localStorage
    let viewsData = localStorage.getItem('blogPostViews');
    let views = viewsData ? JSON.parse(viewsData) : {};

    // Tăng lượt xem cho tất cả bài viết
    posts.forEach((post) => {
      const postId = post.id.toString();

      // Tăng lượt xem lên 5
      post.views = (post.views || 0) + 5;
      views[postId] = post.views;

      console.log(
        \`Tăng lượt xem cho bài viết ID \${postId} lên \${post.views} (+5 lượt xem)\`
      );
    });

    // Lưu lại vào localStorage
    localStorage.setItem('blogPostViews', JSON.stringify(views));

    // Cập nhật ngày cuối cùng đã tăng lượt xem
    localStorage.setItem('lastViewsIncreasedDate', today);
  }
}

// Hàm để đồng bộ lượt xem giữa blog.js và localStorage
function syncViewsWithLocalStorage() {
  // Kiểm tra và tăng lượt xem tự động mỗi ngày mới
  checkAndIncreaseViewsDaily();

  // Lấy dữ liệu lượt xem từ localStorage
  let viewsData = localStorage.getItem('blogPostViews');
  let views = viewsData ? JSON.parse(viewsData) : {};

  // Lấy dữ liệu bài viết đã xem từ localStorage
  let viewedPostsData = localStorage.getItem('viewedBlogPosts');
  let viewedPosts = viewedPostsData ? JSON.parse(viewedPostsData) : {};

  // Đồng bộ lượt xem giữa blog.js và localStorage
  posts.forEach((post) => {
    const postId = post.id.toString();

    // Nếu admin cập nhật lượt xem thủ công trong blog.js
    if (post.views && (!views[postId] || post.views > views[postId])) {
      // Cập nhật lượt xem trong localStorage
      views[postId] = post.views;
      console.log(
        \`Admin đã cập nhật lượt xem cho bài viết ID \${postId}: \${post.views}\`
      );
    }
    // Nếu đã có lượt xem trong localStorage, sử dụng giá trị đó
    else if (views[postId]) {
      post.views = views[postId];
    }
    // Nếu chưa có lượt xem trong localStorage, khởi tạo giá trị ban đầu
    else {
      views[postId] = post.views || 0;
    }
  });

  // Lưu lại vào localStorage
  localStorage.setItem('blogPostViews', JSON.stringify(views));
}

const posts = [
`;

  // Thêm từng bài viết vào nội dung file
  allPosts.forEach((post, index) => {
    fileContent += `  {
    id: ${post.id},
    title: '${post.title.replace(/'/g, "\\'")}',
    category: '${post.category ? post.category.replace(/'/g, "\\'") : ''}',
    author: '${post.author ? post.author.replace(/'/g, "\\'") : ''}',
    authorAvatar: '${
      post.authorAvatar ? post.authorAvatar.replace(/'/g, "\\'") : ''
    }',
    blogDate: '${post.blogDate ? post.blogDate.replace(/'/g, "\\'") : ''}',
    ${
      post.authorBio
        ? `authorBio: '${post.authorBio.replace(/'/g, "\\'")}',`
        : ''
    }
    ${
      post.authorVerified
        ? `authorVerified: '${post.authorVerified.replace(/'/g, "\\'")}',`
        : ''
    }
    ${
      post.authorJob
        ? `authorJob: '${post.authorJob.replace(/'/g, "\\'")}',`
        : ''
    }
    ${
      post.authorExperience ? `authorExperience: ${post.authorExperience},` : ''
    }
    ${post.authorProjects ? `authorProjects: ${post.authorProjects},` : ''}
    ${post.authorRating ? `authorRating: ${post.authorRating},` : ''}
    image: '${post.image ? post.image.replace(/'/g, "\\'") : ''}',
    excerpt: '${post.excerpt ? post.excerpt.replace(/'/g, "\\'") : ''}',
    content: \`
      ${post.content ? post.content.replace(/`/g, '\\`') : ''}
    \`,
    views: ${post.views || 0},
  }${index < allPosts.length - 1 ? ',' : ''}
`;
  });

  // Đóng mảng posts
  fileContent += `];

// Lọc các bài viết trùng lặp khi tải trang
removeDuplicatePosts();

// Đồng bộ lượt xem với localStorage
syncViewsWithLocalStorage();`;

  // Hiển thị modal xem trước
  const exportModal = document.getElementById('export-modal');
  const exportPreview = document.getElementById('export-preview');

  if (exportModal && exportPreview) {
    exportPreview.textContent = fileContent;
    exportModal.style.display = 'block';

    // Xử lý nút sao chép
    const copyExportBtn = document.getElementById('copy-export');
    if (copyExportBtn) {
      copyExportBtn.addEventListener('click', function () {
        navigator.clipboard
          .writeText(fileContent)
          .then(() => {
            showNotification('Đã sao chép vào clipboard', 'success');
          })
          .catch((err) => {
            showNotification('Không thể sao chép: ' + err, 'error');
          });
      });
    }

    // Xử lý nút tải xuống
    const downloadExportBtn = document.getElementById('download-export');
    if (downloadExportBtn) {
      downloadExportBtn.addEventListener('click', function () {
        const blob = new Blob([fileContent], { type: 'text/javascript' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'blog.js';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  }
}

// Hàm đặt nội dung cho trình soạn thảo
function setEditorContent(content) {
  const editor = document.getElementById('blog-content-editor');
  if (editor) {
    editor.innerHTML = content;
  }
}
