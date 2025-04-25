/**
 * export-products.js - Xử lý xuất dữ liệu ra file products.js
 */

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem đang ở trang quản lý sản phẩm không
  if (document.querySelector('.product-manager-container')) {
    // Khởi tạo sự kiện cho nút xuất file
    initExportEvents();
  }
});

// Hàm khởi tạo sự kiện cho nút xuất file
function initExportEvents() {
  const exportBtn = document.getElementById('export-btn');
  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      showExportPreview();
    });
  }

  // Xử lý nút sao chép
  const copyExportBtn = document.getElementById('copy-export');
  if (copyExportBtn) {
    copyExportBtn.addEventListener('click', function () {
      copyExportToClipboard();
    });
  }

  // Xử lý nút tải xuống
  const downloadExportBtn = document.getElementById('download-export');
  if (downloadExportBtn) {
    downloadExportBtn.addEventListener('click', function () {
      downloadExportFile();
    });
  }
}

// Hàm hiển thị xem trước file xuất
function showExportPreview() {
  const modal = document.getElementById('export-modal');
  const exportPreview = document.getElementById('export-preview');

  // Tạo nội dung file products.js
  const fileContent = generateProductsFileContent();

  // Hiển thị nội dung file
  exportPreview.textContent = fileContent;

  // Hiển thị modal
  modal.style.display = 'block';
}

// Hàm tạo nội dung file products.js
function generateProductsFileContent() {
  // Sắp xếp sản phẩm theo ID giảm dần (mới nhất lên đầu)
  const sortedProducts = [...allProducts].sort((a, b) => b.id - a.id);

  // Tạo nội dung file
  let fileContent = 'const products = [\n';

  sortedProducts.forEach((product, index) => {
    // Tạo bản sao của sản phẩm để tránh thay đổi dữ liệu gốc
    const productCopy = JSON.parse(JSON.stringify(product));

    // Xử lý đặc biệt cho nội dung HTML trong detailedDescription.content
    if (
      productCopy.detailedDescription &&
      productCopy.detailedDescription.content
    ) {
      // Lưu lại nội dung HTML để xử lý riêng
      const htmlContent = productCopy.detailedDescription.content;
      delete productCopy.detailedDescription.content;

      fileContent += '  {\n';

      // Đảm bảo ID luôn ở đầu tiên
      fileContent += `    id: ${productCopy.id},\n`;

      // Thêm các thuộc tính khác
      Object.entries(productCopy).forEach(([key, value]) => {
        if (key !== 'id') {
          // Bỏ qua ID vì đã thêm ở trên
          if (key === 'detailedDescription') {
            // Xử lý đặc biệt cho detailedDescription
            fileContent += '    detailedDescription: {\n';
            fileContent += `      content: \`${htmlContent}\`,\n`;

            // Thêm các thuộc tính khác của detailedDescription
            Object.entries(value).forEach(([subKey, subValue]) => {
              fileContent += formatProductProperty(subKey, subValue, 6);
            });

            fileContent += '    },\n';
          } else {
            fileContent += formatProductProperty(key, value, 4);
          }
        }
      });
    } else {
      fileContent += '  {\n';

      // Đảm bảo ID luôn ở đầu tiên
      fileContent += `    id: ${productCopy.id},\n`;

      // Thêm các thuộc tính khác
      Object.entries(productCopy).forEach(([key, value]) => {
        if (key !== 'id') {
          // Bỏ qua ID vì đã thêm ở trên
          fileContent += formatProductProperty(key, value, 4);
        }
      });
    }

    fileContent += '  }';

    // Thêm dấu phẩy nếu không phải sản phẩm cuối cùng
    if (index < sortedProducts.length - 1) {
      fileContent += ',';
    }

    fileContent += '\n';
  });

  fileContent += '];\n\n';

  // Thêm các hàm và code khác từ file products.js gốc
  fileContent += getAdditionalCode();

  return fileContent;
}

// Hàm định dạng thuộc tính sản phẩm
function formatProductProperty(key, value, indent) {
  const indentStr = ' '.repeat(indent);

  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    // Xử lý đối tượng
    let result = `${indentStr}${key}: {\n`;

    Object.entries(value).forEach(([subKey, subValue]) => {
      if (subValue !== null && subValue !== undefined) {
        // Đặc biệt xử lý cho đối tượng specifications
        if (key === 'specifications') {
          // Đảm bảo key trong specifications được đặt trong dấu nháy đơn
          result += `${indentStr}  '${subKey}': '${escapeString(subValue)}',\n`;
        } else {
          result += formatProductProperty(subKey, subValue, indent + 2);
        }
      }
    });

    result += `${indentStr}},\n`;
    return result;
  } else if (Array.isArray(value)) {
    // Xử lý mảng
    if (value.length === 0) {
      return `${indentStr}${key}: [],\n`;
    }

    let result = `${indentStr}${key}: [\n`;

    value.forEach((item, index) => {
      if (typeof item === 'object' && !Array.isArray(item)) {
        // Xử lý đối tượng trong mảng
        result += `${indentStr}  {\n`;

        Object.entries(item).forEach(([itemKey, itemValue]) => {
          if (itemValue !== null && itemValue !== undefined) {
            result += formatProductProperty(itemKey, itemValue, indent + 4);
          }
        });

        result += `${indentStr}  }`;
      } else if (typeof item === 'string') {
        // Xử lý chuỗi trong mảng
        result += `${indentStr}  '${escapeString(item)}'`;
      } else {
        // Xử lý các kiểu dữ liệu khác trong mảng
        result += `${indentStr}  ${item}`;
      }

      // Thêm dấu phẩy nếu không phải phần tử cuối cùng
      if (index < value.length - 1) {
        result += ',';
      }

      result += '\n';
    });

    result += `${indentStr}],\n`;
    return result;
  } else if (typeof value === 'string') {
    // Xử lý chuỗi
    if (key === 'content') {
      // Xử lý chuỗi HTML với backtick
      return `${indentStr}${key}: \`${value}\`,\n`;
    } else {
      return `${indentStr}${key}: '${escapeString(value)}',\n`;
    }
  } else if (typeof value === 'boolean') {
    // Xử lý boolean
    return `${indentStr}${key}: ${value},\n`;
  } else {
    // Xử lý các kiểu dữ liệu khác
    return `${indentStr}${key}: ${value},\n`;
  }
}

// Hàm escape các ký tự đặc biệt trong chuỗi
function escapeString(str) {
  return str
    .replace(/\\/g, '\\\\') // Escape backslashes
    .replace(/'/g, "\\'") // Escape single quotes
    .replace(/\n/g, '\\n') // Escape newlines
    .replace(/\r/g, '\\r') // Escape carriage returns
    .replace(/\t/g, '\\t'); // Escape tabs
}

// Hàm lấy code bổ sung từ file products.js gốc
function getAdditionalCode() {
  // Code mặc định nếu không tìm thấy code bổ sung
  return `// Trang chủ: Render sản phẩm nổi bật và khuyến mãi
if (document.getElementById('featured-products')) {
  const featuredProducts = document.getElementById('featured-products');

  // Lọc sản phẩm nổi bật dựa vào trường featured
  const featured = products.filter((p) => p.featured === true);
  // Nếu không có sản phẩm nào có trường featured = true, lấy 6 sản phẩm đầu tiên
  const featuredToShow = featured.length > 0 ? featured : products.slice(0, 6);

  featuredToShow.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = \`
        \${
          product.promotion
            ? \`<span class="promo-badge">\${product.promotion}</span>\`
            : ''
        }
        <div class="image-container">
          <img src="\${product.image}" alt="\${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3>\${product.name}</h3>
          <div class="category"><i class="fas fa-tag"></i> \${
            product.category
          }</div>
          <p>\${product.description}</p>
          <a href="product-details.html?id=\${
            product.id
          }" class="btn-details">Xem chi tiết</a>
        </div>
      \`;
    featuredProducts.appendChild(card);
  });

  // Không hiển thị sản phẩm khuyến mãi ở đây vì đã được xử lý trong file promotion-new.js
}

// Hàm chuyển đổi chuỗi có dấu thành không dấu
function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '') // Loại bỏ dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D'); // Đổi đ/Đ thành d/D
}

// Trang sản phẩm: Lọc, tìm kiếm, phân trang
if (document.getElementById('product-grid')) {
  const productGrid = document.getElementById('product-grid');
  const pagination = document.getElementById('pagination');
  const categoryFilter = document.getElementById('category');
  const searchInput = document.getElementById('search');
  const itemsPerPage = 12;
  let currentPage = 1;

  function renderProducts(products, page = 1) {
    productGrid.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = \`
          <img src="\${product.image}" alt="\${product.name}" loading="lazy">
          <h3>\${product.name}</h3>
          \${
            product.promotion
              ? \`<span class="promo-badge">\${product.promotion}</span>\`
              : ''
          }
          <a href="product-details.html?id=\${
            product.id
          }" class="btn-details">Xem chi tiết</a>
        \`;
      productGrid.appendChild(card);
    });

    renderPagination(products.length);
  }

  function renderPagination(totalItems) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Không cần phân trang nếu chỉ có 1 trang
    if (totalPages <= 1) {
      updateProductCount(totalItems);
      return;
    }

    // Số trang hiển thị mỗi bên của trang hiện tại
    const visiblePages = 2;

    // Thêm nút Previous
    if (currentPage > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
      prevBtn.className = 'nav-btn';
      prevBtn.onclick = () => {
        currentPage--;
        renderProducts(getFilteredProducts(), currentPage);
      };
      pagination.appendChild(prevBtn);
    }

    // Xác định trang bắt đầu và kết thúc để hiển thị
    let startPage = Math.max(1, currentPage - visiblePages);
    let endPage = Math.min(totalPages, currentPage + visiblePages);

    // Điều chỉnh để luôn hiển thị đủ số trang cần thiết
    if (endPage - startPage < visiblePages * 2) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + visiblePages * 2);
      } else {
        startPage = Math.max(1, endPage - visiblePages * 2);
      }
    }

    // Hiển thị nút trang đầu và dấu ...
    if (startPage > 1) {
      const firstBtn = document.createElement('button');
      firstBtn.textContent = '1';
      firstBtn.onclick = () => {
        currentPage = 1;
        renderProducts(getFilteredProducts(), 1);
      };
      pagination.appendChild(firstBtn);

      if (startPage > 2) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'ellipsis';
        pagination.appendChild(ellipsis);
      }
    }

    // Hiển thị các nút trang
    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.onclick = () => {
        currentPage = i;
        renderProducts(getFilteredProducts(), i);
      };
      if (i === currentPage) btn.className = 'active';
      pagination.appendChild(btn);
    }

    // Hiển thị dấu ... và nút trang cuối
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'ellipsis';
        pagination.appendChild(ellipsis);
      }

      const lastBtn = document.createElement('button');
      lastBtn.textContent = totalPages;
      lastBtn.onclick = () => {
        currentPage = totalPages;
        renderProducts(getFilteredProducts(), totalPages);
      };
      pagination.appendChild(lastBtn);
    }

    // Thêm nút Next
    if (currentPage < totalPages) {
      const nextBtn = document.createElement('button');
      nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      nextBtn.className = 'nav-btn';
      nextBtn.onclick = () => {
        currentPage++;
        renderProducts(getFilteredProducts(), currentPage);
      };
      pagination.appendChild(nextBtn);
    }

    // Update product count
    updateProductCount(totalItems);
  }

  function updateProductCount(totalItems) {
    const productCount = document.getElementById('product-count');
    if (productCount) {
      const start = (currentPage - 1) * itemsPerPage + 1;
      const end = Math.min(currentPage * itemsPerPage, totalItems);

      if (totalItems === 0) {
        productCount.innerHTML = 'Không tìm thấy sản phẩm nào';
      } else {
        productCount.innerHTML = \`Hiển thị <span>\${start} - \${end}</span> trên tổng số <span>\${totalItems}</span> sản phẩm\`;
      }
    }
  }

  function getFilteredProducts() {
    let filtered = products;
    const category = categoryFilter.value;
    const search = searchInput.value.toLowerCase();
    const searchNoAccent = removeAccents(search);

    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (search) {
      filtered = filtered.filter((p) => {
        // Tìm kiếm cả có dấu và không dấu
        const nameNoAccent = removeAccents(p.name.toLowerCase());
        const descNoAccent = p.description
          ? removeAccents(p.description.toLowerCase())
          : '';

        // Tìm trong tên sản phẩm
        const nameMatch =
          p.name.toLowerCase().includes(search) ||
          nameNoAccent.includes(searchNoAccent);

        // Tìm trong mô tả sản phẩm (nếu có)
        const descMatch = p.description
          ? p.description.toLowerCase().includes(search) ||
            descNoAccent.includes(searchNoAccent)
          : false;

        return nameMatch || descMatch;
      });
    }
    return filtered;
  }

  // Xóa các event handlers cũ vì đã được xử lý trong effects.js
  // categoryFilter.onchange = () => renderProducts(getFilteredProducts(), 1);
  // searchInput.oninput = () => renderProducts(getFilteredProducts(), 1);

  // Thêm event listeners mới
  categoryFilter.addEventListener('change', () => {
    currentPage = 1; // Reset về trang 1 khi lọc
    setTimeout(() => {
      renderProducts(getFilteredProducts(), 1);
    }, 800); // Đợi hiệu ứng loading hiển thị
  });

  // Xử lý nút tìm kiếm
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      if (searchInput.value.trim() !== '') {
        currentPage = 1; // Reset về trang 1 khi tìm kiếm
        setTimeout(() => {
          renderProducts(getFilteredProducts(), 1);
        }, 800); // Đợi hiệu ứng loading hiển thị
      }
    });
  }

  // Xử lý sự kiện Enter trong ô tìm kiếm
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
      e.preventDefault();
      currentPage = 1; // Reset về trang 1 khi tìm kiếm
      setTimeout(() => {
        renderProducts(getFilteredProducts(), 1);
      }, 800); // Đợi hiệu ứng loading hiển thị
    }
  });

  renderProducts(products, 1);
}
`;
}

// Hàm sao chép nội dung xuất vào clipboard
function copyExportToClipboard() {
  const exportPreview = document.getElementById('export-preview');

  // Sử dụng Clipboard API hiện đại
  if (navigator.clipboard && window.isSecureContext) {
    // Sử dụng Clipboard API nếu có sẵn và trong secure context
    navigator.clipboard
      .writeText(exportPreview.textContent)
      .then(() => {
        showNotification('Đã sao chép nội dung vào clipboard');
      })
      .catch((err) => {
        console.error('Không thể sao chép: ', err);
        fallbackCopyToClipboard(exportPreview.textContent);
      });
  } else {
    // Fallback cho các trình duyệt không hỗ trợ Clipboard API
    fallbackCopyToClipboard(exportPreview.textContent);
  }
}

// Hàm fallback để sao chép vào clipboard
function fallbackCopyToClipboard(text) {
  // Tạo một textarea tạm thời
  const textarea = document.createElement('textarea');
  textarea.value = text;

  // Đặt textarea ngoài màn hình
  textarea.style.position = 'fixed';
  textarea.style.left = '-999999px';
  textarea.style.top = '-999999px';
  document.body.appendChild(textarea);

  // Chọn và sao chép nội dung
  textarea.focus();
  textarea.select();

  let success = false;
  try {
    success = document.execCommand('copy');
  } catch (err) {
    console.error('Không thể sao chép: ', err);
  }

  // Xóa textarea tạm thời
  document.body.removeChild(textarea);

  if (success) {
    showNotification('Đã sao chép nội dung vào clipboard');
  } else {
    showNotification(
      'Không thể sao chép nội dung. Vui lòng sao chép thủ công.',
      'error'
    );
  }
}

// Hàm tải xuống file products.js
function downloadExportFile() {
  const exportPreview = document.getElementById('export-preview');

  // Tạo một đối tượng Blob
  const blob = new Blob([exportPreview.textContent], {
    type: 'text/javascript',
  });

  // Tạo URL cho Blob
  const url = URL.createObjectURL(blob);

  // Tạo một thẻ a tạm thời
  const a = document.createElement('a');
  a.href = url;
  a.download = 'products.js';

  // Thêm thẻ a vào body, click và xóa
  document.body.appendChild(a);
  a.click();

  // Xóa thẻ a và giải phóng URL
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);

  showNotification('Đã tải xuống file products.js');
}
