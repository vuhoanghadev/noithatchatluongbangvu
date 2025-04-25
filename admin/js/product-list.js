/**
 * product-list.js - Xử lý hiển thị danh sách sản phẩm
 */

// Biến toàn cục cho phân trang
let currentPage = 1;
const itemsPerPage = 10;
let filteredProducts = [];

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem đang ở trang quản lý sản phẩm không
  if (document.querySelector('.product-manager-container')) {
    // Khởi tạo danh sách sản phẩm
    initProductList();

    // Khởi tạo sự kiện cho các nút và form
    initProductListEvents();
  }
});

// Hàm khởi tạo danh sách sản phẩm
function initProductList() {
  // Sao chép danh sách sản phẩm từ biến toàn cục
  filteredProducts = [...allProducts];

  // Hiển thị danh sách sản phẩm
  renderProductList();
}

// Hàm khởi tạo sự kiện cho danh sách sản phẩm
function initProductListEvents() {
  // Xử lý nút thêm sản phẩm
  const addProductBtn = document.getElementById('add-product-btn');
  if (addProductBtn) {
    addProductBtn.addEventListener('click', function () {
      openProductModal();
    });
  }

  // Xử lý nút áp dụng bộ lọc
  const applyFilterBtn = document.getElementById('apply-filter');
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener('click', function () {
      filterProducts();
    });
  }

  // Xử lý sự kiện Enter trong ô tìm kiếm
  const searchInput = document.getElementById('search-product');
  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        filterProducts();
      }
    });
  }

  // Xử lý thay đổi sắp xếp
  const sortBy = document.getElementById('sort-by');
  if (sortBy) {
    sortBy.addEventListener('change', function () {
      sortProducts(this.value);
    });
  }
}

// Hàm lọc sản phẩm
function filterProducts() {
  const categoryFilter = document.getElementById('category-filter');
  const searchInput = document.getElementById('search-product');

  const category = categoryFilter ? categoryFilter.value : 'all';
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

  // Lọc sản phẩm theo danh mục và từ khóa tìm kiếm
  filteredProducts = allProducts.filter((product) => {
    // Lọc theo danh mục
    const categoryMatch = category === 'all' || product.category === category;

    // Lọc theo từ khóa tìm kiếm (tên hoặc ID)
    let searchMatch = true;
    if (searchTerm) {
      const nameMatch =
        product.name && product.name.toLowerCase().includes(searchTerm);
      const idMatch = product.id && product.id.toString().includes(searchTerm);
      const skuMatch =
        product.sku && product.sku.toLowerCase().includes(searchTerm);
      searchMatch = nameMatch || idMatch || skuMatch;
    }

    return categoryMatch && searchMatch;
  });

  // Reset về trang đầu tiên
  currentPage = 1;

  // Hiển thị danh sách sản phẩm đã lọc
  renderProductList();
}

// Hàm sắp xếp sản phẩm
function sortProducts(sortType) {
  switch (sortType) {
    case 'id-desc':
      filteredProducts.sort((a, b) => b.id - a.id);
      break;
    case 'id-asc':
      filteredProducts.sort((a, b) => a.id - b.id);
      break;
    case 'name-asc':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  // Hiển thị lại danh sách sản phẩm
  renderProductList();
}

// Hàm hiển thị danh sách sản phẩm
function renderProductList() {
  const productList = document.getElementById('product-list');
  if (!productList) return;

  // Tính toán phân trang
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Xóa danh sách cũ
  productList.innerHTML = '';

  // Thêm sản phẩm vào danh sách
  if (paginatedProducts.length === 0) {
    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `<td colspan="6" class="text-center">Không có sản phẩm nào</td>`;
    productList.appendChild(emptyRow);
  } else {
    paginatedProducts.forEach((product) => {
      const row = document.createElement('tr');
      row.innerHTML = `
                <td>${product.id}</td>
                <td><img src="${product.image}" alt="${
        product.name
      }" class="product-image"></td>
                <td>${product.name}</td>
                <td>${product.category || ''}</td>
                <td>${product.price || 'Liên hệ'}</td>
                <td class="product-actions-cell">
                    <button class="btn-icon edit" data-id="${
                      product.id
                    }" title="Sửa"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon delete" data-id="${
                      product.id
                    }" title="Xóa"><i class="fas fa-trash"></i></button>
                </td>
            `;
      productList.appendChild(row);
    });
  }

  // Cập nhật phân trang
  renderPagination();

  // Thêm sự kiện cho các nút sửa và xóa
  addProductActionEvents();
}

// Hàm hiển thị phân trang
function renderPagination() {
  const pagination = document.getElementById('pagination');
  if (!pagination) return;

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Xóa phân trang cũ
  pagination.innerHTML = '';

  // Không hiển thị phân trang nếu chỉ có 1 trang
  if (totalPages <= 1) return;

  // Thêm nút Previous
  if (currentPage > 1) {
    const prevButton = document.createElement('button');
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.addEventListener('click', () => {
      currentPage--;
      renderProductList();
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
        renderProductList();
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
      renderProductList();
    });
    pagination.appendChild(nextButton);
  }
}

// Hàm thêm sự kiện cho các nút sửa và xóa
function addProductActionEvents() {
  // Xử lý nút sửa sản phẩm
  const editButtons = document.querySelectorAll('.btn-icon.edit');
  editButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const productId = parseInt(this.getAttribute('data-id'));
      openProductModal(productId);
    });
  });

  // Xử lý nút xóa sản phẩm
  const deleteButtons = document.querySelectorAll('.btn-icon.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const productId = parseInt(this.getAttribute('data-id'));
      const product = allProducts.find((p) => p.id === productId);

      if (product) {
        showConfirmModal(
          `Bạn có chắc chắn muốn xóa sản phẩm "${product.name}"?`,
          () => {
            deleteProduct(productId);
          }
        );
      }
    });
  });
}

// Hàm mở modal thêm/sửa sản phẩm
function openProductModal(productId = null) {
  const modal = document.getElementById('product-modal');
  const modalTitle = document.getElementById('modal-title');
  const productForm = document.getElementById('product-form');

  // Reset form
  productForm.reset();

  // Reset các trường động
  resetDynamicFields();

  // Ẩn chi tiết Flash Sale
  document.getElementById('flashsale-details').classList.add('hidden');

  // Hiển thị modal trước khi cập nhật TinyMCE
  modal.style.display = 'block';

  // Điền dữ liệu sản phẩm
  setTimeout(() => {
    fillProductData(productId);
  }, 100);
}

// Hàm điền dữ liệu sản phẩm vào form
function fillProductData(productId) {
  if (productId) {
    // Chế độ sửa sản phẩm
    const product = allProducts.find((p) => p.id === productId);
    if (product) {
      document.getElementById(
        'modal-title'
      ).textContent = `Sửa Sản phẩm #${product.id}`;
      fillProductForm(product);
    } else {
      showNotification('Không tìm thấy sản phẩm', 'error');
    }
  } else {
    // Chế độ thêm sản phẩm mới
    document.getElementById('modal-title').textContent = 'Thêm Sản phẩm Mới';
    document.getElementById('product-id').value = '';

    // Xóa nội dung trình soạn thảo
    setEditorContent('');
  }
}

// Hàm reset các trường động
function resetDynamicFields() {
  // Reset gallery
  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML = `
        <div class="gallery-item">
            <input type="text" class="gallery-input" placeholder="Đường dẫn hình ảnh">
            <button type="button" class="btn remove-gallery-item"><i class="fas fa-trash"></i></button>
        </div>
    `;

  // Reset specifications
  const specificationsContainer = document.getElementById(
    'specifications-container'
  );
  specificationsContainer.innerHTML = `
        <div class="spec-item">
            <input type="text" class="spec-key" placeholder="Tên thông số">
            <input type="text" class="spec-value" placeholder="Giá trị">
            <button type="button" class="btn remove-spec-item"><i class="fas fa-trash"></i></button>
        </div>
    `;

  // Reset detailed images
  const detailedImagesContainer = document.getElementById(
    'detailed-images-container'
  );
  detailedImagesContainer.innerHTML = `
        <div class="detailed-image-item">
            <input type="text" class="detailed-image-src" placeholder="Đường dẫn hình ảnh">
            <input type="text" class="detailed-image-caption" placeholder="Chú thích">
            <button type="button" class="btn remove-detailed-image"><i class="fas fa-trash"></i></button>
        </div>
    `;

  // Reset reviews
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';

  // Reset care tips
  const careTipsContainer = document.getElementById('care-tips-container');
  careTipsContainer.innerHTML = `
        <div class="care-tip-item">
            <input type="text" class="care-tip" placeholder="Mẹo bảo quản">
            <button type="button" class="btn remove-care-tip"><i class="fas fa-trash"></i></button>
        </div>
    `;
}

// Hàm điền thông tin sản phẩm vào form
function fillProductForm(product) {
  // Điền ID sản phẩm
  document.getElementById('product-id').value = product.id;

  // Điền thông tin cơ bản
  document.getElementById('product-name').value = product.name || '';
  document.getElementById('product-category').value = product.category || '';
  document.getElementById('product-size').value = product.size || '';
  document.getElementById('product-material').value = product.material || '';
  document.getElementById('product-warranty').value = product.warranty || '';
  document.getElementById('product-price').value = product.price || '';
  document.getElementById('product-promotion').value = product.promotion || '';
  document.getElementById('product-tag').value = product.tag || '';
  document.getElementById('product-rating').value = product.rating || '';
  document.getElementById('product-views').value = product.views || '';
  document.getElementById('product-sold').value = product.soldCount || '';
  document.getElementById('product-sku').value = product.sku || '';
  document.getElementById('product-review-code').value =
    product.reviewCode || '';
  document.getElementById('product-featured').checked =
    product.featured || false;
  document.getElementById('product-image').value = product.image || '';
  document.getElementById('product-description').value =
    product.description || '';

  // Điền thông tin Flash Sale
  if (product.flashsale) {
    document.getElementById('flashsale-active').checked =
      product.flashsale.active || false;
    document.getElementById('flashsale-discount').value =
      product.flashsale.discountPercent || '';
    document.getElementById('flashsale-old-price').value =
      product.flashsale.oldPrice || '';
    document.getElementById('flashsale-new-price').value =
      product.flashsale.newPrice || '';
    document.getElementById('flashsale-type').value =
      product.flashsale.type || 'daily';

    // Chuyển đổi định dạng ngày
    if (product.flashsale.endsAt) {
      const endsAt = new Date(product.flashsale.endsAt);
      const formattedDate = endsAt.toISOString().slice(0, 16);
      document.getElementById('flashsale-ends-at').value = formattedDate;
    }

    document.getElementById('flashsale-hide-price').checked =
      product.flashsale.hidePrice || false;

    // Hiển thị chi tiết Flash Sale nếu được kích hoạt
    document
      .getElementById('flashsale-details')
      .classList.toggle('hidden', !product.flashsale.active);
  } else {
    document.getElementById('flashsale-active').checked = false;
    document.getElementById('flashsale-details').classList.add('hidden');
  }

  // Điền thông tin gallery
  if (product.gallery && product.gallery.length > 0) {
    const galleryContainer = document.getElementById('gallery-container');
    galleryContainer.innerHTML = '';

    product.gallery.forEach((image) => {
      addDynamicFormItem(
        'gallery-container',
        'gallery-item',
        `
                <input type="text" class="gallery-input" value="${image}" placeholder="Đường dẫn hình ảnh">
                <button type="button" class="btn remove-gallery-item"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Điền thông tin thông số kỹ thuật
  if (product.specifications) {
    const specificationsContainer = document.getElementById(
      'specifications-container'
    );
    specificationsContainer.innerHTML = '';

    Object.entries(product.specifications).forEach(([key, value]) => {
      addDynamicFormItem(
        'specifications-container',
        'spec-item',
        `
                <input type="text" class="spec-key" value="${key}" placeholder="Tên thông số">
                <input type="text" class="spec-value" value="${value}" placeholder="Giá trị">
                <button type="button" class="btn remove-spec-item"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Điền thông tin mô tả chi tiết
  if (product.detailedDescription) {
    // Cập nhật nội dung trình soạn thảo
    setEditorContent(product.detailedDescription.content || '');

    // Điền thông tin hình ảnh mô tả chi tiết
    if (
      product.detailedDescription.images &&
      product.detailedDescription.images.length > 0
    ) {
      const detailedImagesContainer = document.getElementById(
        'detailed-images-container'
      );
      detailedImagesContainer.innerHTML = '';

      product.detailedDescription.images.forEach((image) => {
        addDynamicFormItem(
          'detailed-images-container',
          'detailed-image-item',
          `
                    <input type="text" class="detailed-image-src" value="${image.src}" placeholder="Đường dẫn hình ảnh">
                    <input type="text" class="detailed-image-caption" value="${image.caption}" placeholder="Chú thích">
                    <button type="button" class="btn remove-detailed-image"><i class="fas fa-trash"></i></button>
                `
        );
      });
    }
  }

  // Điền thông tin đánh giá
  if (product.reviews && product.reviews.length > 0) {
    const reviewsContainer = document.getElementById('reviews-container');
    reviewsContainer.innerHTML = '';

    product.reviews.forEach((review, index) => {
      const reviewCard = document.createElement('div');
      reviewCard.className = 'review-card';
      reviewCard.innerHTML = `
                <div class="review-header">
                    <span class="review-author">${
                      review.isAnonymous ? 'Ẩn danh' : review.author
                    }</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-rating">
                    <i class="fas fa-star"></i> ${review.rating}
                </div>
                <div class="review-content">${review.content}</div>
                <div class="review-actions">
                    <button type="button" class="btn secondary edit-review" data-index="${index}">
                        <i class="fas fa-edit"></i> Sửa
                    </button>
                    <button type="button" class="btn danger delete-review" data-index="${index}">
                        <i class="fas fa-trash"></i> Xóa
                    </button>
                </div>
            `;
      reviewsContainer.appendChild(reviewCard);
    });

    // Thêm sự kiện cho các nút sửa và xóa đánh giá
    addReviewActionEvents();
  }

  // Điền thông tin chính sách
  if (product.policies) {
    document.getElementById('policy-shipping').value =
      product.policies.shipping || '';
    document.getElementById('policy-returns').value =
      product.policies.returns || '';
    document.getElementById('policy-warranty').value =
      product.policies.warranty || '';
    document.getElementById('policy-payment').value =
      product.policies.payment || '';
  }

  // Điền thông tin bảo quản
  if (product.care) {
    document.getElementById('care-cleaning').value =
      product.care.cleaning || '';
    document.getElementById('care-sunlight').value =
      product.care.sunlight || '';
    document.getElementById('care-humidity').value =
      product.care.humidity || '';
    document.getElementById('care-temperature').value =
      product.care.temperature || '';

    // Điền thông tin mẹo bảo quản
    if (product.care.tips && product.care.tips.length > 0) {
      const careTipsContainer = document.getElementById('care-tips-container');
      careTipsContainer.innerHTML = '';

      product.care.tips.forEach((tip) => {
        addDynamicFormItem(
          'care-tips-container',
          'care-tip-item',
          `
                    <input type="text" class="care-tip" value="${tip}" placeholder="Mẹo bảo quản">
                    <button type="button" class="btn remove-care-tip"><i class="fas fa-trash"></i></button>
                `
        );
      });
    }
  }
}

// Hàm thêm sự kiện cho các nút sửa và xóa đánh giá
function addReviewActionEvents() {
  // Xử lý nút sửa đánh giá
  const editReviewButtons = document.querySelectorAll('.edit-review');
  editReviewButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const reviewIndex = parseInt(this.getAttribute('data-index'));
      const productId = parseInt(document.getElementById('product-id').value);
      const product = allProducts.find((p) => p.id === productId);

      if (product && product.reviews && product.reviews[reviewIndex]) {
        openReviewModal(product.reviews[reviewIndex], reviewIndex);
      }
    });
  });

  // Xử lý nút xóa đánh giá
  const deleteReviewButtons = document.querySelectorAll('.delete-review');
  deleteReviewButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const reviewIndex = parseInt(this.getAttribute('data-index'));
      const productId = parseInt(document.getElementById('product-id').value);
      const product = allProducts.find((p) => p.id === productId);

      if (product && product.reviews && product.reviews[reviewIndex]) {
        const review = product.reviews[reviewIndex];
        const reviewAuthor = review.isAnonymous ? 'Ẩn danh' : review.author;

        showConfirmModal(
          `Bạn có chắc chắn muốn xóa đánh giá của "${reviewAuthor}"?`,
          () => {
            // Xóa đánh giá khỏi mảng
            product.reviews.splice(reviewIndex, 1);

            // Cập nhật lại giao diện
            fillProductForm(product);

            showNotification('Đã xóa đánh giá thành công');
          }
        );
      }
    });
  });

  // Xử lý nút thêm đánh giá
  const addReviewButton = document.getElementById('add-review');
  if (addReviewButton) {
    addReviewButton.addEventListener('click', function () {
      openReviewModal();
    });
  }
}

// Hàm xóa sản phẩm
function deleteProduct(productId) {
  // Tìm vị trí của sản phẩm trong mảng
  const index = allProducts.findIndex((p) => p.id === productId);

  if (index !== -1) {
    // Xóa sản phẩm khỏi mảng
    allProducts.splice(index, 1);

    // Cập nhật lại danh sách sản phẩm đã lọc
    filteredProducts = filteredProducts.filter((p) => p.id !== productId);

    // Hiển thị lại danh sách sản phẩm
    renderProductList();

    showNotification('Đã xóa sản phẩm thành công');
  } else {
    showNotification('Không tìm thấy sản phẩm', 'error');
  }
}
