// Đảm bảo DOM đã được tải hoàn toàn trước khi thực thi code
document.addEventListener('DOMContentLoaded', function () {
  // Khởi tạo TinyMCE
  // Hàm chèn ảnh từ thư viện
  function insertImageFromLibrary(editor) {
    const imageItems = document.querySelectorAll('.detailed-image-item');
    if (imageItems.length === 0) return;

    // Tạo danh sách ảnh từ thư viện
    const imageList = [];
    imageItems.forEach((item) => {
      const src = item.querySelector('.image-src').value.trim();
      const caption = item.querySelector('.image-caption').value.trim();

      if (src) {
        imageList.push({
          src: '../' + src,
          caption: caption,
        });
      }
    });

    if (imageList.length === 0) {
      alert('Vui lòng thêm ảnh vào thư viện trước khi chèn vào nội dung.');
      return;
    }

    // Hiển thị modal chọn ảnh
    const modal = document.createElement('div');
    modal.className = 'image-picker-modal';
    modal.innerHTML = `
      <div class="image-picker-content">
        <h3>Chọn ảnh để chèn</h3>
        <div class="image-picker-grid">
          ${imageList
            .map(
              (img, index) => `
            <div class="image-picker-item" data-index="${index}">
              <img src="${img.src}" alt="${
                img.caption || 'Ảnh ' + (index + 1)
              }">
              <div class="image-picker-caption">${
                img.caption || 'Ảnh ' + (index + 1)
              }</div>
            </div>
          `
            )
            .join('')}
        </div>
        <div class="image-picker-actions">
          <button type="button" class="btn danger image-picker-cancel">Hủy</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Thêm CSS cho modal
    const style = document.createElement('style');
    style.textContent = `
      .image-picker-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      .image-picker-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        width: 90%;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
      }
      .image-picker-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      .image-picker-item {
        border: 2px solid #eee;
        border-radius: 6px;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.2s;
      }
      .image-picker-item:hover {
        border-color: #0058dd;
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      }
      .image-picker-item img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        display: block;
      }
      .image-picker-caption {
        padding: 8px;
        font-size: 13px;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .image-picker-actions {
        display: flex;
        justify-content: flex-end;
        gap: 10px;
      }
    `;
    document.head.appendChild(style);

    // Xử lý sự kiện chọn ảnh
    const pickerItems = document.querySelectorAll('.image-picker-item');
    pickerItems.forEach((item) => {
      item.addEventListener('click', function () {
        const index = parseInt(this.getAttribute('data-index'));
        const selectedImage = imageList[index];

        // Chèn ảnh vào TinyMCE
        const imageHtml = `<img src="${selectedImage.src}" alt="${
          selectedImage.caption || ''
        }" style="max-width: 100%; height: auto;">`;
        if (selectedImage.caption) {
          editor.insertContent(
            `<figure class="image">${imageHtml}<figcaption>${selectedImage.caption}</figcaption></figure>`
          );
        } else {
          editor.insertContent(imageHtml);
        }

        // Đóng modal
        document.body.removeChild(modal);
        document.head.removeChild(style);
      });
    });

    // Xử lý sự kiện hủy
    const cancelBtn = modal.querySelector('.image-picker-cancel');
    cancelBtn.addEventListener('click', function () {
      document.body.removeChild(modal);
      document.head.removeChild(style);
    });
  }

  // Hàm chèn bảng
  function insertTable(editor) {
    const rows = prompt('Nhập số hàng:', '3');
    const cols = prompt('Nhập số cột:', '3');

    if (rows && cols) {
      const numRows = parseInt(rows);
      const numCols = parseInt(cols);

      if (numRows > 0 && numCols > 0) {
        let tableHtml =
          '<table style="border-collapse: collapse; width: 100%;">';

        // Tạo header
        tableHtml += '<thead><tr>';
        for (let i = 0; i < numCols; i++) {
          tableHtml += `<th style="border: 1px solid #ddd; padding: 8px; background-color: #f8f9fa;">Cột ${
            i + 1
          }</th>`;
        }
        tableHtml += '</tr></thead>';

        // Tạo body
        tableHtml += '<tbody>';
        for (let i = 0; i < numRows - 1; i++) {
          tableHtml += '<tr>';
          for (let j = 0; j < numCols; j++) {
            tableHtml += `<td style="border: 1px solid #ddd; padding: 8px;">Nội dung</td>`;
          }
          tableHtml += '</tr>';
        }
        tableHtml += '</tbody></table>';

        editor.insertContent(tableHtml);
      }
    }
  }

  try {
    if (typeof tinymce !== 'undefined') {
      tinymce.init({
        selector: '#detailedContent',
        height: 400,
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'help',
          'wordcount',
        ],
        toolbar:
          'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | help',
        content_style:
          'body { font-family: Roboto, Arial, sans-serif; font-size: 14px }',
        branding: false,
        promotion: false,
        menubar: 'file edit view insert format tools table help',
        setup: function (editor) {
          editor.on('change', function () {
            editor.save(); // Lưu nội dung vào textarea
          });

          // Đăng ký các nút công cụ sau khi TinyMCE đã khởi tạo
          editor.on('init', function () {
            console.log('TinyMCE initialized');

            // Đăng ký sự kiện cho nút chèn ảnh
            if (document.getElementById('insertDetailedImage')) {
              document
                .getElementById('insertDetailedImage')
                .addEventListener('click', function () {
                  insertImageFromLibrary(editor);
                });
            }

            // Đăng ký sự kiện cho nút chèn bảng
            if (document.getElementById('insertDetailedTable')) {
              document
                .getElementById('insertDetailedTable')
                .addEventListener('click', function () {
                  insertTable(editor);
                });
            }
          });

          // Các event listener sẽ được đăng ký trong sự kiện init của TinyMCE
        },
      });
    } else {
      console.error(
        'TinyMCE không được tải. Vui lòng kiểm tra kết nối internet.'
      );
    }
  } catch (error) {
    console.error('Lỗi khi khởi tạo TinyMCE:', error);
  }

  // Các phần tử DOM
  const productList = document.getElementById('productList');
  const productFormContainer = document.getElementById('productFormContainer');
  const productForm = document.getElementById('productForm');
  const formTitle = document.getElementById('formTitle');
  const addProductBtn = document.getElementById('addProductBtn');
  const cancelBtn = document.getElementById('cancelBtn');
  const exportBtn = document.getElementById('exportBtn');
  const exportModal = document.getElementById('exportModal');
  const exportCode = document.getElementById('exportCode');
  const copyExportBtn = document.getElementById('copyExportBtn');
  const downloadExportBtn = document.getElementById('downloadExportBtn');
  const closeModal = document.querySelector('.close-modal');
  const searchInput = document.getElementById('searchInput');

  // Các phần tử form
  const productIdInput = document.getElementById('productId');
  const productNameInput = document.getElementById('productName');
  const productCategoryInput = document.getElementById('productCategory');
  const productImageInput = document.getElementById('productImage');
  const productDescriptionInput = document.getElementById('productDescription');
  const productSizeInput = document.getElementById('productSize');
  const productWarrantyInput = document.getElementById('productWarranty');
  const productPriceInput = document.getElementById('productPrice');
  const productMaterialInput = document.getElementById('productMaterial');
  const productPromotionInput = document.getElementById('productPromotion');
  const productTagInput = document.getElementById('productTag');
  const productRatingInput = document.getElementById('productRating');
  const productViewsInput = document.getElementById('productViews');
  const productSoldCountInput = document.getElementById('productSoldCount');
  const productPromoEndDateInput = document.getElementById(
    'productPromoEndDate'
  );
  const productSkuInput = document.getElementById('productSku');
  const productFeaturedInput = document.getElementById('productFeatured');
  const productGalleryInput = document.getElementById('productGallery');

  // Flash sale inputs
  const flashsaleActiveInput = document.getElementById('flashsaleActive');
  const flashsaleDiscountPercentInput = document.getElementById(
    'flashsaleDiscountPercent'
  );
  const flashsaleOldPriceInput = document.getElementById('flashsaleOldPrice');
  const flashsaleNewPriceInput = document.getElementById('flashsaleNewPrice');
  const flashsaleTypeInput = document.getElementById('flashsaleType');
  const flashsaleEndsAtInput = document.getElementById('flashsaleEndsAt');
  const flashsaleHidePriceInput = document.getElementById('flashsaleHidePrice');

  // Detailed description inputs
  const detailedContentInput = document.getElementById('detailedContent');
  const detailedImagesContainer = document.getElementById(
    'detailedImagesContainer'
  );
  const addDetailedImageBtn = document.getElementById('addDetailedImageBtn');

  // Specifications inputs
  const specificationsContainer = document.getElementById(
    'specificationsContainer'
  );
  const addSpecBtn = document.getElementById('addSpecBtn');

  // Reviews inputs
  const reviewCodeInput = document.getElementById('reviewCode');
  const reviewsContainer = document.getElementById('reviewsContainer');
  const addReviewBtn = document.getElementById('addReviewBtn');

  // Policies inputs
  const policyShippingInput = document.getElementById('policyShipping');
  const policyReturnsInput = document.getElementById('policyReturns');
  const policyWarrantyInput = document.getElementById('policyWarranty');
  const policyPaymentInput = document.getElementById('policyPayment');

  // Care inputs
  const careCleaningInput = document.getElementById('careCleaning');
  const careSunlightInput = document.getElementById('careSunlight');
  const careHumidityInput = document.getElementById('careHumidity');
  const careTemperatureInput = document.getElementById('careTemperature');
  const careTipsInput = document.getElementById('careTips');

  // Biến lưu trữ dữ liệu sản phẩm
  let productsData = [];

  // Khởi tạo dữ liệu từ file products.js
  if (typeof products !== 'undefined') {
    productsData = [...products];
    renderProductList();
  } else {
    console.error('Không thể tải dữ liệu sản phẩm từ file products.js');
  }

  // Xử lý sự kiện cho các nút
  addProductBtn.addEventListener('click', showAddProductForm);
  cancelBtn.addEventListener('click', hideProductForm);
  productForm.addEventListener('submit', handleFormSubmit);
  exportBtn.addEventListener('click', showExportModal);
  closeModal.addEventListener('click', hideExportModal);
  copyExportBtn.addEventListener('click', copyExportCode);
  downloadExportBtn.addEventListener('click', downloadExportFile);
  searchInput.addEventListener('input', handleSearch);
  addSpecBtn.addEventListener('click', addSpecificationField);
  addDetailedImageBtn.addEventListener('click', addDetailedImageField);
  addReviewBtn.addEventListener('click', addReviewField);

  // Nút back to top
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  // Xử lý chọn ảnh
  const fileInput = document.getElementById('fileInput');
  const multipleFileInput = document.getElementById('multipleFileInput');

  // Xử lý chọn ảnh đơn
  document.addEventListener('click', function (e) {
    if (e.target.closest('.image-select-btn')) {
      const btn = e.target.closest('.image-select-btn');
      const targetId = btn.dataset.target;

      // Lưu ID của trường cần cập nhật
      fileInput.dataset.targetField = targetId || '';

      // Lưu thông tin nếu là ảnh chi tiết
      if (btn.classList.contains('detailed-image-select-btn')) {
        fileInput.dataset.isDetailedImage = 'true';
        fileInput.dataset.imageItem = btn
          .closest('.detailed-image-item')
          .getAttribute('data-index');
      } else {
        fileInput.dataset.isDetailedImage = 'false';
      }

      fileInput.click();
    }
  });

  // Xử lý khi chọn ảnh đơn
  fileInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
      const file = this.files[0];
      const reader = new FileReader();
      const targetId = this.dataset.targetField;
      const isDetailedImage = this.dataset.isDetailedImage === 'true';

      reader.onload = function (e) {
        // Tạo đường dẫn tương đối
        const fileName = file.name;
        const relativePath = `images/products/${fileName}`;

        if (targetId) {
          // Cập nhật trường input
          const targetInput = document.getElementById(targetId);
          if (targetInput) {
            targetInput.value = relativePath;

            // Hiển thị preview
            const previewContainer = document.getElementById(
              targetId + 'Preview'
            );
            if (previewContainer) {
              previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            }
          }
        } else if (isDetailedImage) {
          // Xử lý cho ảnh chi tiết
          const imageItems = document.querySelectorAll('.detailed-image-item');
          const imageItemIndex = fileInput.dataset.imageItem;
          const imageItem = imageItems[imageItemIndex] || imageItems[0];

          if (imageItem) {
            const inputField = imageItem.querySelector('.image-src');
            const previewContainer = imageItem.querySelector(
              '.detailed-image-preview'
            );

            if (inputField) inputField.value = relativePath;
            if (previewContainer) {
              previewContainer.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            }
          }
        }
      };

      reader.readAsDataURL(file);
    }
  });

  // Xử lý chọn nhiều ảnh cho gallery
  document
    .getElementById('gallerySelectBtn')
    .addEventListener('click', function () {
      multipleFileInput.click();
    });

  multipleFileInput.addEventListener('change', function () {
    if (this.files && this.files.length > 0) {
      const galleryInput = document.getElementById('productGallery');
      const galleryPreview = document.getElementById('galleryPreview');
      let paths = [];
      let previewHTML = '';

      // Xử lý từng file
      Array.from(this.files).forEach((file) => {
        const reader = new FileReader();
        const fileName = file.name;
        const relativePath = `images/products/${fileName}`;

        paths.push(relativePath);

        reader.onload = function (e) {
          previewHTML += `<img src="${e.target.result}" alt="${fileName}">`;
          galleryPreview.innerHTML = previewHTML;
        };

        reader.readAsDataURL(file);
      });

      // Cập nhật trường input
      if (galleryInput.value) {
        galleryInput.value += '\n' + paths.join('\n');
      } else {
        galleryInput.value = paths.join('\n');
      }
    }
  });

  // Thêm sự kiện cho các nút thêm/xóa phản hồi
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-reply-btn')) {
      const reviewItem = e.target.closest('.review-item');
      const repliesContainer = reviewItem.querySelector(
        '.review-replies-container'
      );
      addReplyField(repliesContainer);
    } else if (e.target.classList.contains('remove-reply-btn')) {
      const replyItem = e.target.closest('.review-reply-item');
      const repliesContainer = replyItem.parentElement;
      repliesContainer.removeChild(replyItem);
    } else if (e.target.classList.contains('remove-review-btn')) {
      const reviewItem = e.target.closest('.review-item');
      const reviewsContainer = reviewItem.parentElement;
      reviewsContainer.removeChild(reviewItem);
    }
  });

  // Xử lý sự kiện cho các phần có thể mở rộng
  const collapsibles = document.querySelectorAll('.collapsible-header');
  collapsibles.forEach((header) => {
    header.addEventListener('click', function () {
      const parent = this.parentElement;
      parent.classList.toggle('active');
      const toggleIcon = this.querySelector('.toggle-icon');
      toggleIcon.textContent = parent.classList.contains('active') ? '−' : '+';
    });
  });

  // Hàm hiển thị danh sách sản phẩm
  function renderProductList(filteredProducts = null) {
    let products = filteredProducts || productsData;

    // Sắp xếp sản phẩm theo ID từ cao xuống thấp
    products = [...products].sort((a, b) => b.id - a.id);

    // Tạo bảng sản phẩm
    productList.innerHTML = `
      <table class="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Trạng thái</th>
            <th>Thống kê</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody id="productTableBody"></tbody>
      </table>
    `;

    const productTableBody = document.getElementById('productTableBody');

    if (products.length === 0) {
      productTableBody.innerHTML = `
        <tr>
          <td colspan="7" class="no-products">Không có sản phẩm nào.</td>
        </tr>
      `;
      return;
    }

    products.forEach((product) => {
      const row = document.createElement('tr');
      const imagePath = product.image || 'images/placeholder.png';

      // Xác định các trạng thái
      const isFeatured = product.featured
        ? '<span class="status featured">Nổi bật</span>'
        : '';
      const hasPromotion = product.promotion
        ? `<span class="status promotion">${product.promotion}</span>`
        : '';
      const hasFlashsale =
        product.flashsale && product.flashsale.active
          ? `<span class="status flashsale">Giảm ${product.flashsale.discountPercent}%</span>`
          : '';
      const hasTag = product.tag
        ? `<span class="status tag">${product.tag}</span>`
        : '';

      // Thống kê
      const stats = `
        <div class="stats">
          <div class="stat-item" title="Đánh giá"><i class="fas fa-star"></i> ${
            product.rating || 0
          }</div>
          <div class="stat-item" title="Lượt xem"><i class="fas fa-eye"></i> ${
            product.views || 0
          }</div>
          <div class="stat-item" title="Đã bán"><i class="fas fa-shopping-cart"></i> ${
            product.soldCount || 0
          }</div>
        </div>
      `;

      row.innerHTML = `
        <td class="product-id">${product.id}</td>
        <td class="product-image-cell">
          <img src="../${imagePath}" alt="${
        product.name
      }" class="product-image">
        </td>
        <td class="product-name">
          <div class="product-name-text">${product.name}</div>
          <div class="product-sku">${product.sku || ''}</div>
        </td>
        <td class="product-category">${product.category}</td>
        <td class="product-status">
          ${isFeatured}
          ${hasPromotion}
          ${hasFlashsale}
          ${hasTag}
        </td>
        <td class="product-stats">
          ${stats}
        </td>
        <td class="product-actions">
          <button class="btn secondary edit-btn" data-id="${
            product.id
          }" title="Sửa sản phẩm"><i class="fas fa-edit"></i></button>
          <button class="btn danger delete-btn" data-id="${
            product.id
          }" title="Xóa sản phẩm"><i class="fas fa-trash"></i></button>
        </td>
      `;

      productTableBody.appendChild(row);

      // Thêm sự kiện cho các nút
      const editBtn = row.querySelector('.edit-btn');
      const deleteBtn = row.querySelector('.delete-btn');

      editBtn.addEventListener('click', () => showEditProductForm(product.id));
      deleteBtn.addEventListener('click', () => deleteProduct(product.id));
    });
  }

  // Hàm hiển thị form thêm sản phẩm mới
  function showAddProductForm() {
    formTitle.textContent = 'Thêm sản phẩm mới';
    productForm.reset();
    productIdInput.value = '';

    // Xóa các trường thông số kỹ thuật
    while (specificationsContainer.children.length > 1) {
      specificationsContainer.removeChild(specificationsContainer.lastChild);
    }

    // Xóa các trường hình ảnh chi tiết
    const detailedImageItems = detailedImagesContainer.querySelectorAll(
      '.detailed-image-item'
    );
    detailedImageItems.forEach((item, index) => {
      if (index > 0) {
        detailedImagesContainer.removeChild(item);
      }
    });

    // Reset các trường input đầu tiên
    const firstSpecItem = specificationsContainer.querySelector(
      '.specification-item'
    );
    if (firstSpecItem) {
      const specKeyInput = firstSpecItem.querySelector('.spec-key');
      const specValueInput = firstSpecItem.querySelector('.spec-value');
      specKeyInput.value = '';
      specValueInput.value = '';
    }

    const firstImageItem = detailedImagesContainer.querySelector(
      '.detailed-image-item'
    );
    if (firstImageItem) {
      const imageSrcInput = firstImageItem.querySelector('.image-src');
      const imageCaptionInput = firstImageItem.querySelector('.image-caption');
      imageSrcInput.value = '';
      imageCaptionInput.value = '';
    }

    // Reset TinyMCE
    if (tinymce.get('detailedContent')) {
      tinymce.get('detailedContent').setContent('');
    }

    productFormContainer.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Hàm hiển thị form sửa sản phẩm
  function showEditProductForm(productId) {
    const product = productsData.find((p) => p.id === productId);
    if (!product) return;

    formTitle.textContent = 'Sửa sản phẩm';

    // Điền thông tin sản phẩm vào form
    productIdInput.value = product.id;
    productNameInput.value = product.name || '';
    productCategoryInput.value = product.category || '';
    productImageInput.value = product.image || '';

    // Hiển thị preview hình ảnh chính
    const imagePreview = document.getElementById('productImagePreview');
    if (imagePreview && product.image) {
      imagePreview.innerHTML = `<img src="../${product.image}" alt="${product.name}">`;
    } else if (imagePreview) {
      imagePreview.innerHTML = '';
    }

    productDescriptionInput.value = product.description || '';
    productSizeInput.value = product.size || '';
    productWarrantyInput.value = product.warranty || '';
    productPriceInput.value = product.price || '';
    productMaterialInput.value = product.material || '';
    productPromotionInput.value = product.promotion || '';
    productTagInput.value = product.tag || '';
    productRatingInput.value = product.rating || '';
    productViewsInput.value = product.views || '';
    productSoldCountInput.value = product.soldCount || '';

    // Xử lý ngày kết thúc khuyến mãi
    if (product.promoEndDate) {
      const date = new Date(product.promoEndDate);
      productPromoEndDateInput.value = formatDateTimeForInput(date);
    } else {
      productPromoEndDateInput.value = '';
    }

    productSkuInput.value = product.sku || '';
    productFeaturedInput.value = product.featured ? 'true' : 'false';

    // Xử lý gallery
    if (product.gallery && Array.isArray(product.gallery)) {
      productGalleryInput.value = product.gallery.join('\n');

      // Hiển thị preview gallery
      const galleryPreview = document.getElementById('galleryPreview');
      if (galleryPreview) {
        let previewHTML = '';
        product.gallery.forEach((imagePath) => {
          previewHTML += `<img src="../${imagePath}" alt="Gallery image">`;
        });
        galleryPreview.innerHTML = previewHTML;
      }
    } else {
      productGalleryInput.value = '';
      const galleryPreview = document.getElementById('galleryPreview');
      if (galleryPreview) {
        galleryPreview.innerHTML = '';
      }
    }

    // Xử lý flash sale
    if (product.flashsale) {
      flashsaleActiveInput.value = product.flashsale.active ? 'true' : 'false';
      flashsaleDiscountPercentInput.value =
        product.flashsale.discountPercent || '';
      flashsaleOldPriceInput.value = product.flashsale.oldPrice || '';
      flashsaleNewPriceInput.value = product.flashsale.newPrice || '';
      flashsaleTypeInput.value = product.flashsale.type || 'fixed';

      if (product.flashsale.endsAt) {
        const date = new Date(product.flashsale.endsAt);
        flashsaleEndsAtInput.value = formatDateTimeForInput(date);
      } else {
        flashsaleEndsAtInput.value = '';
      }

      flashsaleHidePriceInput.value = product.flashsale.hidePrice
        ? 'true'
        : 'false';
    } else {
      flashsaleActiveInput.value = 'false';
      flashsaleDiscountPercentInput.value = '';
      flashsaleOldPriceInput.value = '';
      flashsaleNewPriceInput.value = '';
      flashsaleTypeInput.value = 'fixed';
      flashsaleEndsAtInput.value = '';
      flashsaleHidePriceInput.value = 'false';
    }

    // Xử lý mô tả chi tiết
    if (product.detailedDescription) {
      // Cập nhật nội dung cho TinyMCE
      if (tinymce.get('detailedContent')) {
        tinymce
          .get('detailedContent')
          .setContent(product.detailedDescription.content || '');
      } else {
        detailedContentInput.value = product.detailedDescription.content || '';
      }

      // Xóa các trường hình ảnh chi tiết hiện tại
      const detailedImageItems = detailedImagesContainer.querySelectorAll(
        '.detailed-image-item'
      );
      detailedImageItems.forEach((item, index) => {
        if (index > 0) {
          detailedImagesContainer.removeChild(item);
        }
      });

      // Thêm các trường hình ảnh chi tiết mới
      if (
        product.detailedDescription.images &&
        Array.isArray(product.detailedDescription.images)
      ) {
        const firstImageItem = detailedImagesContainer.querySelector(
          '.detailed-image-item'
        );
        if (firstImageItem && product.detailedDescription.images.length > 0) {
          const firstImage = product.detailedDescription.images[0];
          const imageSrcInput = firstImageItem.querySelector('.image-src');
          const imageCaptionInput =
            firstImageItem.querySelector('.image-caption');
          imageSrcInput.value = firstImage.src || '';
          imageCaptionInput.value = firstImage.caption || '';
        }

        // Thêm các hình ảnh còn lại
        for (let i = 1; i < product.detailedDescription.images.length; i++) {
          const image = product.detailedDescription.images[i];
          addDetailedImageField(image.src, image.caption);
        }
      } else {
        // Reset trường đầu tiên
        const firstImageItem = detailedImagesContainer.querySelector(
          '.detailed-image-item'
        );
        if (firstImageItem) {
          const imageSrcInput = firstImageItem.querySelector('.image-src');
          const imageCaptionInput =
            firstImageItem.querySelector('.image-caption');
          imageSrcInput.value = '';
          imageCaptionInput.value = '';
        }
      }
    } else {
      detailedContentInput.value = '';

      // Reset trường hình ảnh đầu tiên
      const firstImageItem = detailedImagesContainer.querySelector(
        '.detailed-image-item'
      );
      if (firstImageItem) {
        const imageSrcInput = firstImageItem.querySelector('.image-src');
        const imageCaptionInput =
          firstImageItem.querySelector('.image-caption');
        imageSrcInput.value = '';
        imageCaptionInput.value = '';
      }
    }

    // Xử lý thông số kỹ thuật
    // Xóa các trường thông số kỹ thuật hiện tại
    while (specificationsContainer.children.length > 1) {
      specificationsContainer.removeChild(specificationsContainer.lastChild);
    }

    if (product.specifications) {
      const specs = product.specifications;
      const firstSpecItem = specificationsContainer.querySelector(
        '.specification-item'
      );

      // Đặt giá trị cho trường đầu tiên
      let isFirstSpec = true;
      for (const key in specs) {
        if (isFirstSpec) {
          const specKeyInput = firstSpecItem.querySelector('.spec-key');
          const specValueInput = firstSpecItem.querySelector('.spec-value');
          specKeyInput.value = key;
          specValueInput.value = specs[key];
          isFirstSpec = false;
        } else {
          // Thêm các trường thông số kỹ thuật mới
          addSpecificationField(key, specs[key]);
        }
      }

      // Nếu không có thông số nào, reset trường đầu tiên
      if (isFirstSpec) {
        const specKeyInput = firstSpecItem.querySelector('.spec-key');
        const specValueInput = firstSpecItem.querySelector('.spec-value');
        specKeyInput.value = '';
        specValueInput.value = '';
      }
    } else {
      // Reset trường đầu tiên
      const firstSpecItem = specificationsContainer.querySelector(
        '.specification-item'
      );
      if (firstSpecItem) {
        const specKeyInput = firstSpecItem.querySelector('.spec-key');
        const specValueInput = firstSpecItem.querySelector('.spec-value');
        specKeyInput.value = '';
        specValueInput.value = '';
      }
    }

    // Xử lý mã bình luận
    reviewCodeInput.value = product.reviewCode || '';

    // Xử lý đánh giá
    // Xóa các đánh giá hiện tại
    const reviewItems = reviewsContainer.querySelectorAll('.review-item');
    reviewItems.forEach((item, index) => {
      if (index > 0) {
        reviewsContainer.removeChild(item);
      }
    });

    // Reset đánh giá đầu tiên
    const firstReviewItem = reviewsContainer.querySelector('.review-item');
    if (firstReviewItem) {
      const authorInput = firstReviewItem.querySelector('.review-author');
      const dateInput = firstReviewItem.querySelector('.review-date');
      const ratingInput = firstReviewItem.querySelector('.review-rating');
      const contentInput = firstReviewItem.querySelector('.review-content');
      const imagesInput = firstReviewItem.querySelector('.review-images');
      const videosInput = firstReviewItem.querySelector('.review-videos');
      const anonymousInput = firstReviewItem.querySelector('.review-anonymous');
      const avatarInput = firstReviewItem.querySelector('.review-avatar');

      authorInput.value = '';
      dateInput.value = '';
      ratingInput.value = '';
      contentInput.value = '';
      imagesInput.value = '';
      videosInput.value = '';
      anonymousInput.value = 'false';
      avatarInput.value = '';

      // Xóa các phản hồi trừ cái đầu tiên
      const replyItems = firstReviewItem.querySelectorAll('.review-reply-item');
      replyItems.forEach((item, index) => {
        if (index > 0) {
          item.parentElement.removeChild(item);
        }
      });

      // Reset phản hồi đầu tiên
      const firstReplyItem =
        firstReviewItem.querySelector('.review-reply-item');
      if (firstReplyItem) {
        const replyAuthorInput = firstReplyItem.querySelector('.reply-author');
        const replyIsAdminInput =
          firstReplyItem.querySelector('.reply-is-admin');
        const replyDateInput = firstReplyItem.querySelector('.reply-date');
        const replyContentInput =
          firstReplyItem.querySelector('.reply-content');
        const replyAvatarInput = firstReplyItem.querySelector('.reply-avatar');

        replyAuthorInput.value = '';
        replyIsAdminInput.value = 'true';
        replyDateInput.value = '';
        replyContentInput.value = '';
        replyAvatarInput.value = '';
      }
    }

    // Thêm đánh giá từ sản phẩm
    if (
      product.reviews &&
      Array.isArray(product.reviews) &&
      product.reviews.length > 0
    ) {
      // Điền vào đánh giá đầu tiên
      const firstReview = product.reviews[0];
      const firstReviewItem = reviewsContainer.querySelector('.review-item');

      if (firstReviewItem && firstReview) {
        const authorInput = firstReviewItem.querySelector('.review-author');
        const dateInput = firstReviewItem.querySelector('.review-date');
        const ratingInput = firstReviewItem.querySelector('.review-rating');
        const contentInput = firstReviewItem.querySelector('.review-content');
        const imagesInput = firstReviewItem.querySelector('.review-images');
        const videosInput = firstReviewItem.querySelector('.review-videos');
        const anonymousInput =
          firstReviewItem.querySelector('.review-anonymous');
        const avatarInput = firstReviewItem.querySelector('.review-avatar');

        authorInput.value = firstReview.author || '';
        dateInput.value = firstReview.date || '';
        ratingInput.value = firstReview.rating || '';
        contentInput.value = firstReview.content || '';

        if (firstReview.images && Array.isArray(firstReview.images)) {
          imagesInput.value = firstReview.images.join('\n');
        }

        if (firstReview.videos && Array.isArray(firstReview.videos)) {
          videosInput.value = firstReview.videos.join('\n');
        }

        anonymousInput.value = firstReview.isAnonymous ? 'true' : 'false';
        avatarInput.value = firstReview.avatar || '';

        // Xử lý phản hồi
        if (firstReview.replies && Array.isArray(firstReview.replies)) {
          const repliesContainer = firstReviewItem.querySelector(
            '.review-replies-container'
          );
          const firstReplyItem =
            repliesContainer.querySelector('.review-reply-item');

          // Điền vào phản hồi đầu tiên
          if (firstReplyItem && firstReview.replies.length > 0) {
            const firstReply = firstReview.replies[0];
            const replyAuthorInput =
              firstReplyItem.querySelector('.reply-author');
            const replyIsAdminInput =
              firstReplyItem.querySelector('.reply-is-admin');
            const replyDateInput = firstReplyItem.querySelector('.reply-date');
            const replyContentInput =
              firstReplyItem.querySelector('.reply-content');
            const replyAvatarInput =
              firstReplyItem.querySelector('.reply-avatar');

            replyAuthorInput.value = firstReply.author || '';
            replyIsAdminInput.value = firstReply.isAdmin ? 'true' : 'false';
            replyDateInput.value = firstReply.date || '';
            replyContentInput.value = firstReply.content || '';
            replyAvatarInput.value = firstReply.avatar || '';

            // Thêm các phản hồi còn lại
            for (let i = 1; i < firstReview.replies.length; i++) {
              const reply = firstReview.replies[i];
              addReplyField(repliesContainer);

              const replyItems =
                repliesContainer.querySelectorAll('.review-reply-item');
              const currentReplyItem = replyItems[replyItems.length - 1];

              const replyAuthorInput =
                currentReplyItem.querySelector('.reply-author');
              const replyIsAdminInput =
                currentReplyItem.querySelector('.reply-is-admin');
              const replyDateInput =
                currentReplyItem.querySelector('.reply-date');
              const replyContentInput =
                currentReplyItem.querySelector('.reply-content');
              const replyAvatarInput =
                currentReplyItem.querySelector('.reply-avatar');

              replyAuthorInput.value = reply.author || '';
              replyIsAdminInput.value = reply.isAdmin ? 'true' : 'false';
              replyDateInput.value = reply.date || '';
              replyContentInput.value = reply.content || '';
              replyAvatarInput.value = reply.avatar || '';
            }
          }
        }
      }

      // Thêm các đánh giá còn lại
      for (let i = 1; i < product.reviews.length; i++) {
        const review = product.reviews[i];
        addReviewField();

        const reviewItems = reviewsContainer.querySelectorAll('.review-item');
        const currentReviewItem = reviewItems[reviewItems.length - 1];

        const authorInput = currentReviewItem.querySelector('.review-author');
        const dateInput = currentReviewItem.querySelector('.review-date');
        const ratingInput = currentReviewItem.querySelector('.review-rating');
        const contentInput = currentReviewItem.querySelector('.review-content');
        const imagesInput = currentReviewItem.querySelector('.review-images');
        const videosInput = currentReviewItem.querySelector('.review-videos');
        const anonymousInput =
          currentReviewItem.querySelector('.review-anonymous');
        const avatarInput = currentReviewItem.querySelector('.review-avatar');

        authorInput.value = review.author || '';
        dateInput.value = review.date || '';
        ratingInput.value = review.rating || '';
        contentInput.value = review.content || '';

        if (review.images && Array.isArray(review.images)) {
          imagesInput.value = review.images.join('\n');
        }

        if (review.videos && Array.isArray(review.videos)) {
          videosInput.value = review.videos.join('\n');
        }

        anonymousInput.value = review.isAnonymous ? 'true' : 'false';
        avatarInput.value = review.avatar || '';

        // Xử lý phản hồi
        if (
          review.replies &&
          Array.isArray(review.replies) &&
          review.replies.length > 0
        ) {
          const repliesContainer = currentReviewItem.querySelector(
            '.review-replies-container'
          );
          const firstReplyItem =
            repliesContainer.querySelector('.review-reply-item');

          // Điền vào phản hồi đầu tiên
          if (firstReplyItem) {
            const firstReply = review.replies[0];
            const replyAuthorInput =
              firstReplyItem.querySelector('.reply-author');
            const replyIsAdminInput =
              firstReplyItem.querySelector('.reply-is-admin');
            const replyDateInput = firstReplyItem.querySelector('.reply-date');
            const replyContentInput =
              firstReplyItem.querySelector('.reply-content');
            const replyAvatarInput =
              firstReplyItem.querySelector('.reply-avatar');

            if (firstReply) {
              replyAuthorInput.value = firstReply.author || '';
              replyIsAdminInput.value = firstReply.isAdmin ? 'true' : 'false';
              replyDateInput.value = firstReply.date || '';
              replyContentInput.value = firstReply.content || '';
              replyAvatarInput.value = firstReply.avatar || '';
            }

            // Thêm các phản hồi còn lại
            for (let j = 1; j < review.replies.length; j++) {
              const reply = review.replies[j];
              addReplyField(repliesContainer);

              const replyItems =
                repliesContainer.querySelectorAll('.review-reply-item');
              const currentReplyItem = replyItems[replyItems.length - 1];

              const replyAuthorInput =
                currentReplyItem.querySelector('.reply-author');
              const replyIsAdminInput =
                currentReplyItem.querySelector('.reply-is-admin');
              const replyDateInput =
                currentReplyItem.querySelector('.reply-date');
              const replyContentInput =
                currentReplyItem.querySelector('.reply-content');
              const replyAvatarInput =
                currentReplyItem.querySelector('.reply-avatar');

              replyAuthorInput.value = reply.author || '';
              replyIsAdminInput.value = reply.isAdmin ? 'true' : 'false';
              replyDateInput.value = reply.date || '';
              replyContentInput.value = reply.content || '';
              replyAvatarInput.value = reply.avatar || '';
            }
          }
        }
      }
    }

    // Xử lý chính sách
    if (product.policies) {
      policyShippingInput.value = product.policies.shipping || '';
      policyReturnsInput.value = product.policies.returns || '';
      policyWarrantyInput.value = product.policies.warranty || '';
      policyPaymentInput.value = product.policies.payment || '';
    } else {
      policyShippingInput.value = '';
      policyReturnsInput.value = '';
      policyWarrantyInput.value = '';
      policyPaymentInput.value = '';
    }

    // Xử lý bảo quản
    if (product.care) {
      careCleaningInput.value = product.care.cleaning || '';
      careSunlightInput.value = product.care.sunlight || '';
      careHumidityInput.value = product.care.humidity || '';
      careTemperatureInput.value = product.care.temperature || '';

      if (product.care.tips && Array.isArray(product.care.tips)) {
        careTipsInput.value = product.care.tips.join('\n');
      } else {
        careTipsInput.value = '';
      }
    } else {
      careCleaningInput.value = '';
      careSunlightInput.value = '';
      careHumidityInput.value = '';
      careTemperatureInput.value = '';
      careTipsInput.value = '';
    }

    productFormContainer.classList.remove('hidden');

    // Cuộn xuống form
    const formOffset = productFormContainer.offsetTop - 20; // Trừ 20px để có khoảng cách
    window.scrollTo({ top: formOffset, behavior: 'smooth' });
  }

  // Hàm ẩn form sản phẩm
  function hideProductForm() {
    productFormContainer.classList.add('hidden');
  }

  // Hàm xử lý khi submit form
  function handleFormSubmit(e) {
    e.preventDefault();

    // Lấy dữ liệu từ form
    const productId = productIdInput.value
      ? parseInt(productIdInput.value)
      : null;
    const productData = {
      name: productNameInput.value,
      category: productCategoryInput.value,
      image: productImageInput.value,
      description: productDescriptionInput.value,
      size: productSizeInput.value,
      warranty: productWarrantyInput.value,
      price: productPriceInput.value,
      material: productMaterialInput.value,
      promotion: productPromotionInput.value || null,
      tag: productTagInput.value || null,
      rating: productRatingInput.value
        ? parseFloat(productRatingInput.value)
        : null,
      views: productViewsInput.value ? parseInt(productViewsInput.value) : null,
      soldCount: productSoldCountInput.value
        ? parseInt(productSoldCountInput.value)
        : null,
      promoEndDate: productPromoEndDateInput.value
        ? productPromoEndDateInput.value
        : null,
      sku: productSkuInput.value || null,
      featured: productFeaturedInput.value === 'true',
    };

    // Xử lý gallery
    if (productGalleryInput.value.trim()) {
      productData.gallery = productGalleryInput.value
        .split('\n')
        .map((url) => url.trim())
        .filter((url) => url);
    } else {
      productData.gallery = [productData.image];
    }

    // Xử lý flash sale
    if (flashsaleActiveInput.value === 'true') {
      productData.flashsale = {
        active: true,
        discountPercent: flashsaleDiscountPercentInput.value
          ? parseInt(flashsaleDiscountPercentInput.value)
          : null,
        oldPrice: flashsaleOldPriceInput.value
          ? parseInt(flashsaleOldPriceInput.value)
          : null,
        newPrice: flashsaleNewPriceInput.value
          ? parseInt(flashsaleNewPriceInput.value)
          : null,
        type: flashsaleTypeInput.value,
        endsAt: flashsaleEndsAtInput.value ? flashsaleEndsAtInput.value : null,
        hidePrice: flashsaleHidePriceInput.value === 'true',
      };
    }

    // Xử lý thông số kỹ thuật
    const specItems = specificationsContainer.querySelectorAll(
      '.specification-item'
    );
    const specifications = {};

    specItems.forEach((item) => {
      const key = item.querySelector('.spec-key').value.trim();
      const value = item.querySelector('.spec-value').value.trim();

      if (key && value) {
        specifications[key] = value;
      }
    });

    if (Object.keys(specifications).length > 0) {
      productData.specifications = specifications;
    }

    // Xử lý mô tả chi tiết
    // Lấy nội dung từ TinyMCE nếu có
    let detailedContent = '';
    if (tinymce.get('detailedContent')) {
      detailedContent = tinymce.get('detailedContent').getContent();
    } else {
      detailedContent = detailedContentInput.value.trim();
    }

    if (detailedContent) {
      const detailedImages = [];
      const imageItems = detailedImagesContainer.querySelectorAll(
        '.detailed-image-item'
      );

      imageItems.forEach((item) => {
        const src = item.querySelector('.image-src').value.trim();
        const caption = item.querySelector('.image-caption').value.trim();

        if (src) {
          detailedImages.push({
            src,
            caption,
          });
        }
      });

      productData.detailedDescription = {
        content: detailedContent,
        images: detailedImages,
      };
    }

    // Xử lý mã bình luận
    if (reviewCodeInput.value.trim()) {
      productData.reviewCode = reviewCodeInput.value.trim();
    }

    // Xử lý đánh giá
    const reviewItems = reviewsContainer.querySelectorAll('.review-item');
    if (reviewItems.length > 0) {
      const reviews = [];

      reviewItems.forEach((item) => {
        const author = item.querySelector('.review-author').value.trim();
        const date = item.querySelector('.review-date').value.trim();
        const rating = item.querySelector('.review-rating').value
          ? parseFloat(item.querySelector('.review-rating').value)
          : 0;
        const content = item.querySelector('.review-content').value.trim();
        const isAnonymous =
          item.querySelector('.review-anonymous').value === 'true';
        const avatar = item.querySelector('.review-avatar').value.trim();

        // Xử lý hình ảnh
        const imagesText = item.querySelector('.review-images').value.trim();
        const images = imagesText
          ? imagesText
              .split('\n')
              .map((url) => url.trim())
              .filter((url) => url)
          : [];

        // Xử lý video
        const videosText = item.querySelector('.review-videos').value.trim();
        const videos = videosText
          ? videosText
              .split('\n')
              .map((url) => url.trim())
              .filter((url) => url)
          : [];

        // Xử lý phản hồi
        const replyItems = item.querySelectorAll('.review-reply-item');
        const replies = [];

        replyItems.forEach((replyItem) => {
          const replyAuthor = replyItem
            .querySelector('.reply-author')
            .value.trim();
          const replyIsAdmin =
            replyItem.querySelector('.reply-is-admin').value === 'true';
          const replyDate = replyItem.querySelector('.reply-date').value.trim();
          const replyContent = replyItem
            .querySelector('.reply-content')
            .value.trim();
          const replyAvatar = replyItem
            .querySelector('.reply-avatar')
            .value.trim();

          if (replyAuthor && replyContent) {
            replies.push({
              author: replyAuthor,
              isAdmin: replyIsAdmin,
              date: replyDate,
              content: replyContent,
              avatar: replyAvatar,
            });
          }
        });

        if (author && content) {
          reviews.push({
            author,
            date,
            rating,
            content,
            images,
            videos,
            isAnonymous,
            avatar,
            replies,
          });
        }
      });

      if (reviews.length > 0) {
        productData.reviews = reviews;
      }
    }

    // Xử lý chính sách
    if (
      policyShippingInput.value.trim() ||
      policyReturnsInput.value.trim() ||
      policyWarrantyInput.value.trim() ||
      policyPaymentInput.value.trim()
    ) {
      productData.policies = {
        shipping: policyShippingInput.value.trim(),
        returns: policyReturnsInput.value.trim(),
        warranty: policyWarrantyInput.value.trim(),
        payment: policyPaymentInput.value.trim(),
      };
    }

    // Xử lý bảo quản
    if (
      careCleaningInput.value.trim() ||
      careSunlightInput.value.trim() ||
      careHumidityInput.value.trim() ||
      careTemperatureInput.value.trim() ||
      careTipsInput.value.trim()
    ) {
      const tips = careTipsInput.value.trim()
        ? careTipsInput.value
            .split('\n')
            .map((tip) => tip.trim())
            .filter((tip) => tip)
        : [];

      productData.care = {
        cleaning: careCleaningInput.value.trim(),
        sunlight: careSunlightInput.value.trim(),
        humidity: careHumidityInput.value.trim(),
        temperature: careTemperatureInput.value.trim(),
        tips: tips,
      };
    }

    // Thêm hoặc cập nhật sản phẩm
    if (productId) {
      // Cập nhật sản phẩm
      const index = productsData.findIndex((p) => p.id === productId);
      if (index !== -1) {
        productData.id = productId;
        productsData[index] = productData;
      }
    } else {
      // Thêm sản phẩm mới
      const newId =
        productsData.length > 0
          ? Math.max(...productsData.map((p) => p.id)) + 1
          : 1;
      productData.id = newId;
      productsData.push(productData);
    }

    // Cập nhật giao diện
    renderProductList();
    hideProductForm();

    // Hiển thị thông báo
    alert(
      productId
        ? 'Cập nhật sản phẩm thành công!'
        : 'Thêm sản phẩm mới thành công!'
    );
  }

  // Hàm xóa sản phẩm
  function deleteProduct(productId) {
    if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;

    const index = productsData.findIndex((p) => p.id === productId);
    if (index !== -1) {
      productsData.splice(index, 1);
      renderProductList();
      alert('Xóa sản phẩm thành công!');
    }
  }

  // Hàm hiển thị modal xuất file
  function showExportModal() {
    const exportData = generateExportCode();
    exportCode.textContent = exportData;
    exportModal.classList.remove('hidden');
  }

  // Hàm ẩn modal xuất file
  function hideExportModal() {
    exportModal.classList.add('hidden');
  }

  // Hàm tạo mã xuất
  function generateExportCode() {
    return `const products = ${JSON.stringify(productsData, null, 2)};`;
  }

  // Hàm copy mã xuất vào clipboard
  function copyExportCode() {
    const exportData = exportCode.textContent;
    navigator.clipboard
      .writeText(exportData)
      .then(() => {
        alert('Đã copy mã vào clipboard!');
      })
      .catch((err) => {
        console.error('Không thể copy: ', err);
        alert('Không thể copy mã. Vui lòng thử lại hoặc copy thủ công.');
      });
  }

  // Hàm tải xuống file
  function downloadExportFile() {
    const exportData = exportCode.textContent;
    const blob = new Blob([exportData], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.js';
    document.body.appendChild(a);
    a.click();

    // Dọn dẹp
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
  }

  // Hàm xử lý tìm kiếm
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (!searchTerm) {
      renderProductList();
      return;
    }

    const filteredProducts = productsData.filter((product) => {
      // Tìm theo ID (nếu searchTerm là số)
      if (!isNaN(searchTerm) && product.id === parseInt(searchTerm)) {
        return true;
      }

      // Tìm theo tên, danh mục, mô tả
      return (
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        (product.description &&
          product.description.toLowerCase().includes(searchTerm)) ||
        (product.sku && product.sku.toLowerCase().includes(searchTerm))
      );
    });

    renderProductList(filteredProducts);
  }

  // Hàm thêm trường thông số kỹ thuật
  function addSpecificationField(key = '', value = '') {
    const specItem = document.createElement('div');
    specItem.className = 'specification-item';

    specItem.innerHTML = `
            <input type="text" class="spec-key" placeholder="Tên thông số" value="${key}">
            <input type="text" class="spec-value" placeholder="Giá trị" value="${value}">
            <button type="button" class="remove-spec-btn">Xóa</button>
        `;

    specificationsContainer.appendChild(specItem);

    // Thêm sự kiện cho nút xóa
    const removeBtn = specItem.querySelector('.remove-spec-btn');
    removeBtn.addEventListener('click', function () {
      specificationsContainer.removeChild(specItem);
    });
  }

  // Hàm thêm trường hình ảnh chi tiết
  function addDetailedImageField(src = '', caption = '') {
    const imageItem = document.createElement('div');
    imageItem.className = 'detailed-image-item';

    // Đặt index cho item để có thể xác định khi chọn ảnh
    const currentIndex = detailedImagesContainer.querySelectorAll(
      '.detailed-image-item'
    ).length;
    imageItem.setAttribute('data-index', currentIndex);

    imageItem.innerHTML = `
      <div class="image-upload-container">
        <input type="text" class="image-src" placeholder="Đường dẫn hình ảnh" value="${src}">
        <button type="button" class="btn secondary image-select-btn detailed-image-select-btn">
          <i class="fas fa-image"></i> Chọn ảnh
        </button>
      </div>
      <input type="text" class="image-caption" placeholder="Chú thích" value="${caption}">
      <button type="button" class="remove-image-btn">Xóa</button>
      <div class="image-preview detailed-image-preview">
        ${src ? `<img src="../${src}" alt="Preview">` : ''}
      </div>
    `;

    detailedImagesContainer.appendChild(imageItem);

    // Thêm sự kiện cho nút xóa
    const removeBtn = imageItem.querySelector('.remove-image-btn');
    removeBtn.addEventListener('click', function () {
      detailedImagesContainer.removeChild(imageItem);
    });
  }

  // Hàm thêm trường đánh giá
  function addReviewField() {
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';

    reviewItem.innerHTML = `
      <div class="form-row">
        <div class="form-group">
          <label>Tên người đánh giá</label>
          <input type="text" class="review-author" placeholder="Tên người đánh giá">
        </div>
        <div class="form-group">
          <label>Ngày đánh giá</label>
          <input type="text" class="review-date" placeholder="Ví dụ: 15/04/2025 10:30 AM">
        </div>
        <div class="form-group">
          <label>Đánh giá (sao)</label>
          <input type="number" class="review-rating" min="0" max="5" step="0.1" placeholder="Ví dụ: 4.7">
        </div>
      </div>
      <div class="form-group">
        <label>Nội dung đánh giá</label>
        <textarea class="review-content" rows="3" placeholder="Nội dung đánh giá"></textarea>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Hình ảnh (mỗi URL một dòng)</label>
          <textarea class="review-images" rows="2" placeholder="Mỗi đường dẫn hình ảnh một dòng"></textarea>
        </div>
        <div class="form-group">
          <label>Video (mỗi URL một dòng)</label>
          <textarea class="review-videos" rows="2" placeholder="Mỗi đường dẫn video một dòng"></textarea>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Ẩn danh</label>
          <select class="review-anonymous">
            <option value="false">Không</option>
            <option value="true">Có</option>
          </select>
        </div>
        <div class="form-group">
          <label>Avatar</label>
          <input type="text" class="review-avatar" placeholder="Đường dẫn avatar">
        </div>
      </div>

      <div class="review-replies-container">
        <h5>Phản hồi</h5>
        <div class="review-reply-item">
          <div class="form-row">
            <div class="form-group">
              <label>Tên người phản hồi</label>
              <input type="text" class="reply-author" placeholder="Tên người phản hồi">
            </div>
            <div class="form-group">
              <label>Là admin</label>
              <select class="reply-is-admin">
                <option value="true">Có</option>
                <option value="false">Không</option>
              </select>
            </div>
            <div class="form-group">
              <label>Ngày phản hồi</label>
              <input type="text" class="reply-date" placeholder="Ví dụ: 15/04/2025 14:45 PM">
            </div>
          </div>
          <div class="form-group">
            <label>Nội dung phản hồi</label>
            <textarea class="reply-content" rows="2" placeholder="Nội dung phản hồi"></textarea>
          </div>
          <div class="form-group">
            <label>Avatar</label>
            <input type="text" class="reply-avatar" placeholder="Đường dẫn avatar">
          </div>
          <button type="button" class="remove-reply-btn btn danger">Xóa phản hồi</button>
        </div>
        <button type="button" class="add-reply-btn btn secondary">Thêm phản hồi</button>
      </div>
      <button type="button" class="remove-review-btn btn danger">Xóa đánh giá</button>
    `;

    reviewsContainer.appendChild(reviewItem);
  }

  // Hàm thêm trường phản hồi
  function addReplyField(repliesContainer) {
    const replyItem = document.createElement('div');
    replyItem.className = 'review-reply-item';

    replyItem.innerHTML = `
      <div class="form-row">
        <div class="form-group">
          <label>Tên người phản hồi</label>
          <input type="text" class="reply-author" placeholder="Tên người phản hồi">
        </div>
        <div class="form-group">
          <label>Là admin</label>
          <select class="reply-is-admin">
            <option value="true">Có</option>
            <option value="false">Không</option>
          </select>
        </div>
        <div class="form-group">
          <label>Ngày phản hồi</label>
          <input type="text" class="reply-date" placeholder="Ví dụ: 15/04/2025 14:45 PM">
        </div>
      </div>
      <div class="form-group">
        <label>Nội dung phản hồi</label>
        <textarea class="reply-content" rows="2" placeholder="Nội dung phản hồi"></textarea>
      </div>
      <div class="form-group">
        <label>Avatar</label>
        <input type="text" class="reply-avatar" placeholder="Đường dẫn avatar">
      </div>
      <button type="button" class="remove-reply-btn btn danger">Xóa phản hồi</button>
    `;

    // Thêm vào trước nút "Thêm phản hồi"
    const addReplyBtn = repliesContainer.querySelector('.add-reply-btn');
    repliesContainer.insertBefore(replyItem, addReplyBtn);
  }

  // Hàm định dạng ngày giờ cho input datetime-local
  function formatDateTimeForInput(date) {
    if (!date || !(date instanceof Date) || isNaN(date)) return '';

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }
});
