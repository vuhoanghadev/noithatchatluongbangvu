/**
 * admin-main.js - Xử lý chung cho trang admin
 */

// Khởi tạo biến toàn cục
let allProducts = [];
let categories = [];

// Hàm khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem biến products có tồn tại không (được import từ products.js)
  if (typeof products !== 'undefined') {
    // Sắp xếp sản phẩm theo ID giảm dần (mới nhất lên đầu)
    allProducts = [...products].sort((a, b) => b.id - a.id);

    // Lấy danh sách danh mục từ sản phẩm
    extractCategories();

    // Cập nhật số lượng sản phẩm trên trang chủ admin (nếu có)
    updateProductCount();

    // Khởi tạo các sự kiện cho các nút và form
    initEvents();
  } else {
    showNotification(
      'Không thể tải dữ liệu sản phẩm. Vui lòng kiểm tra file products.js',
      'error'
    );
  }
});

// Hàm trích xuất danh mục từ sản phẩm
function extractCategories() {
  // Lấy tất cả danh mục từ sản phẩm
  const categorySet = new Set(
    allProducts.map((product) => product.category).filter(Boolean)
  );
  categories = Array.from(categorySet).sort();

  // Cập nhật các dropdown danh mục
  populateCategoryDropdowns();
}

// Hàm cập nhật các dropdown danh mục
function populateCategoryDropdowns() {
  // Dropdown lọc danh mục
  const categoryFilter = document.getElementById('category-filter');
  if (categoryFilter) {
    // Giữ lại option "Tất cả danh mục"
    const allOption = categoryFilter.querySelector('option[value="all"]');
    categoryFilter.innerHTML = '';
    categoryFilter.appendChild(allOption);

    // Thêm các danh mục
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }

  // Dropdown danh mục trong form sản phẩm
  const productCategory = document.getElementById('product-category');
  if (productCategory) {
    productCategory.innerHTML = '';

    // Thêm các danh mục
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      productCategory.appendChild(option);
    });
  }
}

// Hàm cập nhật số lượng sản phẩm trên trang chủ admin
function updateProductCount() {
  const productCount = document.getElementById('product-count');
  if (productCount) {
    productCount.textContent = allProducts.length;
  }
}

// Hàm khởi tạo các sự kiện
function initEvents() {
  // Xử lý sự kiện thay đổi trực tiếp cho dropdown danh mục và trạng thái
  const categoryFilter = document.getElementById('category-filter');
  const statusFilter = document.getElementById('status-filter');
  const searchInput = document.getElementById('search-product');

  if (categoryFilter) {
    categoryFilter.addEventListener('change', function () {
      filterProducts();
    });
  }

  if (statusFilter) {
    statusFilter.addEventListener('change', function () {
      filterProducts();
    });
  }

  if (searchInput) {
    // Lọc khi người dùng nhập (sau 300ms để tránh gọi quá nhiều lần)
    let searchTimeout;
    searchInput.addEventListener('input', function () {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(function () {
        filterProducts();
      }, 300);
    });
  }

  // Xử lý tabs trong modal
  const tabButtons = document.querySelectorAll('.tab-btn');
  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      // Xóa class active từ tất cả các tab
      tabButtons.forEach((btn) => btn.classList.remove('active'));
      document
        .querySelectorAll('.tab-content')
        .forEach((content) => content.classList.remove('active'));

      // Thêm class active cho tab được chọn
      this.classList.add('active');
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  // Xử lý đóng modal
  const closeButtons = document.querySelectorAll('.close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const modal = this.closest('.modal');
      modal.style.display = 'none';
    });
  });

  // Không đóng modal khi click bên ngoài nữa
  // Chỉ đóng modal khi nhấn nút đóng, lưu hoặc hủy

  // Xử lý checkbox Flash Sale
  const flashsaleActive = document.getElementById('flashsale-active');
  const flashsaleDetails = document.getElementById('flashsale-details');
  if (flashsaleActive && flashsaleDetails) {
    flashsaleActive.addEventListener('change', function () {
      flashsaleDetails.classList.toggle('hidden', !this.checked);
    });
  }

  // Xử lý tính giá tự động cho Flash Sale
  const flashsaleDiscount = document.getElementById('flashsale-discount');
  const flashsaleOldPrice = document.getElementById('flashsale-old-price');
  const flashsaleNewPrice = document.getElementById('flashsale-new-price');

  if (flashsaleDiscount && flashsaleOldPrice && flashsaleNewPrice) {
    // Tính giá mới khi thay đổi phần trăm giảm giá
    flashsaleDiscount.addEventListener('input', function () {
      calculateFlashSalePrice();
    });

    // Tính giá mới khi thay đổi giá cũ
    flashsaleOldPrice.addEventListener('input', function () {
      calculateFlashSalePrice();
    });

    // Tính phần trăm giảm giá khi thay đổi giá mới
    flashsaleNewPrice.addEventListener('input', function () {
      const oldPrice = parseFloat(flashsaleOldPrice.value);
      const newPrice = parseFloat(flashsaleNewPrice.value);

      if (oldPrice > 0 && newPrice > 0 && newPrice < oldPrice) {
        const discountPercent = Math.round((1 - newPrice / oldPrice) * 100);
        flashsaleDiscount.value = discountPercent;
      }
    });
  }

  // Xử lý nút điền thông tin mẫu
  const fillSampleBtn = document.getElementById('fill-sample-btn');
  if (fillSampleBtn) {
    fillSampleBtn.addEventListener('click', function () {
      fillSampleProductData();
    });
  }

  // Xử lý nút chuyển đổi chế độ toàn màn hình
  const toggleFullscreenBtn = document.getElementById('toggle-fullscreen');
  if (toggleFullscreenBtn) {
    toggleFullscreenBtn.addEventListener('click', function () {
      const modalContent = document.querySelector('.modal-content');
      modalContent.classList.toggle('fullscreen');

      // Thay đổi biểu tượng
      const icon = this.querySelector('i');
      if (modalContent.classList.contains('fullscreen')) {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
        this.setAttribute('title', 'Thu nhỏ');
      } else {
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
        this.setAttribute('title', 'Toàn màn hình');
      }
    });
  }

  // Xử lý nút hủy trong form sản phẩm
  const cancelBtn = document.getElementById('cancel-btn');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function () {
      const modal = document.getElementById('product-modal');
      modal.style.display = 'none';
    });
  }

  // Xử lý nút hủy trong form đánh giá
  const cancelReviewBtn = document.getElementById('cancel-review-btn');
  if (cancelReviewBtn) {
    cancelReviewBtn.addEventListener('click', function () {
      const modal = document.getElementById('review-modal');
      modal.style.display = 'none';
    });
  }

  // Xử lý nút hủy trong form phản hồi
  const cancelReplyBtn = document.getElementById('cancel-reply-btn');
  if (cancelReplyBtn) {
    cancelReplyBtn.addEventListener('click', function () {
      const modal = document.getElementById('reply-modal');
      modal.style.display = 'none';
    });
  }

  // Xử lý nút hủy trong modal xác nhận
  const confirmCancel = document.getElementById('confirm-cancel');
  if (confirmCancel) {
    confirmCancel.addEventListener('click', function () {
      const modal = document.getElementById('confirm-modal');
      modal.style.display = 'none';
    });
  }

  // Xử lý nút thêm mục trong gallery
  const addGalleryItem = document.getElementById('add-gallery-item');
  if (addGalleryItem) {
    addGalleryItem.addEventListener('click', function () {
      addDynamicFormItem(
        'gallery-container',
        'gallery-item',
        `
                <input type="text" class="gallery-input" placeholder="Đường dẫn hình ảnh">
                <button type="button" class="btn remove-gallery-item"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Xử lý nút thêm thông số kỹ thuật
  const addSpecItem = document.getElementById('add-spec-item');
  if (addSpecItem) {
    addSpecItem.addEventListener('click', function () {
      addDynamicFormItem(
        'specifications-container',
        'spec-item',
        `
                <input type="text" class="spec-key" placeholder="Tên thông số">
                <input type="text" class="spec-value" placeholder="Giá trị">
                <button type="button" class="btn remove-spec-item"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Xử lý nút thêm hình ảnh mô tả chi tiết
  const addDetailedImage = document.getElementById('add-detailed-image');
  if (addDetailedImage) {
    addDetailedImage.addEventListener('click', function () {
      addDynamicFormItem(
        'detailed-images-container',
        'detailed-image-item',
        `
                <input type="text" class="detailed-image-src" placeholder="Đường dẫn hình ảnh">
                <input type="text" class="detailed-image-caption" placeholder="Chú thích">
                <button type="button" class="btn remove-detailed-image"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Xử lý nút thêm hình ảnh đánh giá
  const addReviewImage = document.getElementById('add-review-image');
  if (addReviewImage) {
    addReviewImage.addEventListener('click', function () {
      addDynamicFormItem(
        'review-images-container',
        'review-image-item',
        `
                <input type="text" class="review-image" placeholder="Đường dẫn hình ảnh">
                <button type="button" class="btn remove-review-image"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Xử lý nút thêm video đánh giá
  const addReviewVideo = document.getElementById('add-review-video');
  if (addReviewVideo) {
    addReviewVideo.addEventListener('click', function () {
      addDynamicFormItem(
        'review-videos-container',
        'review-video-item',
        `
                <input type="text" class="review-video" placeholder="Đường dẫn video">
                <button type="button" class="btn remove-review-video"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Xử lý nút thêm mẹo bảo quản
  const addCareTip = document.getElementById('add-care-tip');
  if (addCareTip) {
    addCareTip.addEventListener('click', function () {
      addDynamicFormItem(
        'care-tips-container',
        'care-tip-item',
        `
                <input type="text" class="care-tip" placeholder="Mẹo bảo quản">
                <button type="button" class="btn remove-care-tip"><i class="fas fa-trash"></i></button>
            `
      );
    });
  }

  // Xử lý sự kiện xóa các mục động
  document.addEventListener('click', function (event) {
    // Xóa mục trong gallery
    if (event.target.closest('.remove-gallery-item')) {
      removeDynamicFormItem(event.target.closest('.gallery-item'));
    }

    // Xóa mục trong thông số kỹ thuật
    if (event.target.closest('.remove-spec-item')) {
      removeDynamicFormItem(event.target.closest('.spec-item'));
    }

    // Xóa mục trong hình ảnh mô tả chi tiết
    if (event.target.closest('.remove-detailed-image')) {
      removeDynamicFormItem(event.target.closest('.detailed-image-item'));
    }

    // Xóa mục trong hình ảnh đánh giá
    if (event.target.closest('.remove-review-image')) {
      removeDynamicFormItem(event.target.closest('.review-image-item'));
    }

    // Xóa mục trong video đánh giá
    if (event.target.closest('.remove-review-video')) {
      removeDynamicFormItem(event.target.closest('.review-video-item'));
    }

    // Xóa mục trong mẹo bảo quản
    if (event.target.closest('.remove-care-tip')) {
      removeDynamicFormItem(event.target.closest('.care-tip-item'));
    }
  });
}

// Hàm thêm mục động vào form
function addDynamicFormItem(containerId, itemClass, itemHTML) {
  const container = document.getElementById(containerId);
  if (container) {
    const newItem = document.createElement('div');
    newItem.className = itemClass;
    newItem.innerHTML = itemHTML;
    container.appendChild(newItem);
  }
}

// Hàm xóa mục động khỏi form
function removeDynamicFormItem(item) {
  if (item && item.parentNode) {
    item.parentNode.removeChild(item);
  }
}

// Không cần hàm khởi tạo TinyMCE nữa

// Hàm hiển thị thông báo
function showNotification(message, type = 'success') {
  const notification = document.getElementById('notification');
  const notificationMessage = notification.querySelector(
    '.notification-message'
  );

  notification.className = 'notification ' + type;
  notificationMessage.textContent = message;

  notification.style.display = 'block';

  // Tự động ẩn thông báo sau 3 giây
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// Hàm hiển thị modal xác nhận
function showConfirmModal(message, callback) {
  const modal = document.getElementById('confirm-modal');
  const confirmMessage = document.getElementById('confirm-message');
  const confirmOk = document.getElementById('confirm-ok');

  confirmMessage.textContent = message;
  modal.style.display = 'block';

  // Xóa event listener cũ (nếu có)
  const newConfirmOk = confirmOk.cloneNode(true);
  confirmOk.parentNode.replaceChild(newConfirmOk, confirmOk);

  // Thêm event listener mới
  newConfirmOk.addEventListener('click', function () {
    modal.style.display = 'none';
    if (typeof callback === 'function') {
      callback();
    }
  });
}

// Hàm format ngày tháng
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`;
}

// Hàm parse ngày tháng từ định dạng DD/MM/YYYY HH:MM AM/PM
function parseDate(dateString) {
  const parts = dateString.match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+) (AM|PM)/);
  if (!parts) return new Date();

  const day = parseInt(parts[1], 10);
  const month = parseInt(parts[2], 10) - 1;
  const year = parseInt(parts[3], 10);
  let hours = parseInt(parts[4], 10);
  const minutes = parseInt(parts[5], 10);
  const ampm = parts[6];

  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;

  return new Date(year, month, day, hours, minutes);
}

// Hàm tạo ID mới cho sản phẩm
function generateNewProductId() {
  if (allProducts.length === 0) return 1;
  return Math.max(...allProducts.map((product) => product.id)) + 1;
}

// Hàm lọc sản phẩm (gọi hàm trong product-list.js)
function filterProducts() {
  // Kiểm tra xem hàm filterProducts có tồn tại trong phạm vi toàn cục không
  if (typeof window.filterProducts === 'function') {
    window.filterProducts();
  } else {
    console.warn('Hàm filterProducts không tồn tại trong phạm vi toàn cục');
  }
}

// Hàm tính giá mới dựa trên phần trăm giảm giá và giá cũ
function calculateFlashSalePrice() {
  const flashsaleDiscount = document.getElementById('flashsale-discount');
  const flashsaleOldPrice = document.getElementById('flashsale-old-price');
  const flashsaleNewPrice = document.getElementById('flashsale-new-price');

  if (flashsaleDiscount && flashsaleOldPrice && flashsaleNewPrice) {
    const discountPercent = parseFloat(flashsaleDiscount.value);
    const oldPrice = parseFloat(flashsaleOldPrice.value);

    if (
      !isNaN(discountPercent) &&
      !isNaN(oldPrice) &&
      discountPercent >= 0 &&
      discountPercent <= 100 &&
      oldPrice > 0
    ) {
      // Tính giá mới = giá cũ * (1 - phần trăm giảm giá / 100)
      const newPrice = Math.round(oldPrice * (1 - discountPercent / 100));
      flashsaleNewPrice.value = newPrice;
    }
  }
}

// Hàm điền thông tin mẫu cho sản phẩm
function fillSampleProductData() {
  // Thông tin cơ bản
  document.getElementById('product-name').value =
    'Tủ quần áo 4 cánh gỗ công nghiệp';
  document.getElementById('product-category').value = 'Tủ quần áo';
  document.getElementById('product-size').value =
    '180x200x60cm (Rộng x Cao x Sâu)';
  document.getElementById('product-material').value =
    'Gỗ MDF phủ melamine, Nhựa Đài Loan cao cấp';
  document.getElementById('product-warranty').value = '5 năm';
  document.getElementById('product-price').value = 'Liên hệ để được báo giá';
  document.getElementById('product-promotion').value =
    'Miễn phí vận chuyển nội thành';
  document.getElementById('product-tag').value = 'Mới, Bán chạy';
  document.getElementById('product-rating').value = '4.8';
  document.getElementById('product-views').value = '1250';
  document.getElementById('product-sold').value = '45';
  document.getElementById('product-sku').value = generateSKU(
    'Tủ quần áo 4 cánh gỗ công nghiệp'
  );
  document.getElementById('product-review-code').value = 'NTBV2023';
  document.getElementById('product-featured').checked = true;
  document.getElementById('product-image').value =
    'images/products/tu-quan-ao/tu-quan-ao-4-canh.jpg';
  document.getElementById('product-description').value =
    'Tủ quần áo 4 cánh thiết kế hiện đại, chất liệu gỗ công nghiệp cao cấp, bền đẹp theo thời gian. Tủ có nhiều ngăn để đồ tiện lợi, phù hợp với mọi không gian phòng ngủ.';

  // Flash Sale
  document.getElementById('flashsale-active').checked = true;
  document.getElementById('flashsale-details').classList.remove('hidden');
  document.getElementById('flashsale-discount').value = '30';
  document.getElementById('flashsale-old-price').value = '8500000';
  calculateFlashSalePrice(); // Tính giá mới tự động
  document.getElementById('flashsale-type').value = 'fixed';

  // Thêm hình ảnh vào gallery
  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML = '';
  const galleryImages = [
    'images/products/tu-quan-ao/tu-quan-ao-4-canh-1.jpg',
    'images/products/tu-quan-ao/tu-quan-ao-4-canh-2.jpg',
    'images/products/tu-quan-ao/tu-quan-ao-4-canh-3.jpg',
  ];

  galleryImages.forEach((image) => {
    addDynamicFormItem(
      'gallery-container',
      'gallery-item',
      `<input type="text" class="gallery-input" value="${image}" placeholder="Đường dẫn hình ảnh">
      <button type="button" class="btn remove-gallery-item"><i class="fas fa-trash"></i></button>`
    );
  });

  // Thêm thông số kỹ thuật
  const specificationsContainer = document.getElementById(
    'specifications-container'
  );
  specificationsContainer.innerHTML = '';
  const specifications = [
    { key: 'Kích thước', value: '180x200x60cm (Rộng x Cao x Sâu)' },
    { key: 'Chất liệu', value: 'Gỗ MDF phủ melamine, Nhựa Đài Loan cao cấp' },
    { key: 'Màu sắc', value: 'Vân gỗ óc chó' },
    { key: 'Số cánh', value: '4 cánh mở' },
    { key: 'Ngăn kéo', value: '2 hàng ngăn kéo' },
    { key: 'Tính năng đặc biệt', value: 'Chống ẩm mốc, Chống cong vênh' },
  ];

  specifications.forEach((spec) => {
    addDynamicFormItem(
      'specifications-container',
      'spec-item',
      `<input type="text" class="spec-key" value="${spec.key}" placeholder="Tên thông số">
      <input type="text" class="spec-value" value="${spec.value}" placeholder="Giá trị">
      <button type="button" class="btn remove-spec-item"><i class="fas fa-trash"></i></button>`
    );
  });

  // Mô tả chi tiết
  const detailedContent = `<h2>Tủ quần áo 4 cánh gỗ công nghiệp cao cấp</h2>
<p>Tủ quần áo 4 cánh được thiết kế hiện đại, sang trọng với chất liệu gỗ công nghiệp cao cấp, bền đẹp theo thời gian. Tủ có nhiều ngăn để đồ tiện lợi, phù hợp với mọi không gian phòng ngủ.</p>
<h3>Đặc điểm nổi bật:</h3>
<ul>
  <li>Thiết kế 4 cánh mở rộng rãi, tiện lợi</li>
  <li>Chất liệu gỗ MDF phủ melamine cao cấp</li>
  <li>Bề mặt phủ melamine chống trầy xước, dễ lau chùi</li>
  <li>Hệ thống ray trượt êm ái, bền bỉ</li>
  <li>Nhiều ngăn để đồ tiện lợi</li>
</ul>`;

  setEditorContent(detailedContent);

  // Thêm hình ảnh mô tả chi tiết
  const detailedImagesContainer = document.getElementById(
    'detailed-images-container'
  );
  detailedImagesContainer.innerHTML = '';
  const detailedImages = [
    {
      src: 'images/products/tu-quan-ao/tu-quan-ao-4-canh-detail-1.jpg',
      caption: 'Không gian lưu trữ rộng rãi',
    },
    {
      src: 'images/products/tu-quan-ao/tu-quan-ao-4-canh-detail-2.jpg',
      caption: 'Hệ thống ray trượt êm ái',
    },
  ];

  detailedImages.forEach((image) => {
    addDynamicFormItem(
      'detailed-images-container',
      'detailed-image-item',
      `<input type="text" class="detailed-image-src" value="${image.src}" placeholder="Đường dẫn hình ảnh">
      <input type="text" class="detailed-image-caption" value="${image.caption}" placeholder="Chú thích">
      <button type="button" class="btn remove-detailed-image"><i class="fas fa-trash"></i></button>`
    );
  });

  // Chính sách
  document.getElementById('policy-shipping').value =
    'Miễn phí vận chuyển trong nội thành Hà Nội. Các tỉnh khác tính phí theo khoảng cách.';
  document.getElementById('policy-returns').value =
    'Đổi trả miễn phí trong vòng 7 ngày nếu sản phẩm có lỗi từ nhà sản xuất.';
  document.getElementById('policy-warranty').value =
    'Bảo hành 5 năm với khung tủ, 2 năm với phụ kiện.';
  document.getElementById('policy-payment').value =
    'Thanh toán bằng tiền mặt, chuyển khoản ngân hàng hoặc thẻ tín dụng.';

  // Bảo quản
  document.getElementById('care-cleaning').value =
    'Lau chùi bằng khăn mềm, tránh dùng hóa chất tẩy rửa mạnh.';
  document.getElementById('care-sunlight').value =
    'Tránh đặt tủ dưới ánh nắng trực tiếp để tránh bạc màu.';
  document.getElementById('care-humidity').value =
    'Đặt tủ ở nơi khô ráo, tránh độ ẩm cao để tránh cong vênh.';
  document.getElementById('care-temperature').value =
    'Tránh đặt tủ gần nguồn nhiệt cao như lò sưởi, bếp nấu.';

  // Mẹo bảo quản
  const careTipsContainer = document.getElementById('care-tips-container');
  careTipsContainer.innerHTML = '';
  const careTips = [
    'Sử dụng túi hút ẩm trong tủ vào mùa mưa',
    'Định kỳ kiểm tra và vặn chặt ốc vít',
    'Sử dụng miếng đệm chân tủ để tránh trầy xước sàn nhà',
  ];

  careTips.forEach((tip) => {
    addDynamicFormItem(
      'care-tips-container',
      'care-tip-item',
      `<input type="text" class="care-tip" value="${tip}" placeholder="Mẹo bảo quản">
      <button type="button" class="btn remove-care-tip"><i class="fas fa-trash"></i></button>`
    );
  });

  // Thêm đánh giá mẫu
  const reviewsContainer = document.getElementById('reviews-container');
  if (reviewsContainer) {
    reviewsContainer.innerHTML = `
      <div class="review-card">
        <div class="review-header">
          <span class="review-author">Nguyễn Văn A</span>
          <span class="review-date">${formatDate(new Date())}</span>
        </div>
        <div class="review-rating">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          (5.0)
        </div>
        <div class="review-content">
          Sản phẩm rất đẹp và chất lượng. Tôi rất hài lòng với tủ quần áo này. Giao hàng nhanh, lắp đặt chuyên nghiệp.
        </div>
        <div class="review-actions">
          <button type="button" class="btn secondary edit-review" data-index="0">
            <i class="fas fa-edit"></i> Sửa
          </button>
          <button type="button" class="btn danger delete-review" data-index="0">
            <i class="fas fa-trash"></i> Xóa
          </button>
        </div>
      </div>
    `;
  }

  // Hiển thị thông báo
  showNotification('Đã điền thông tin mẫu thành công!', 'success');
}

// Hàm tạo SKU tự động từ tên sản phẩm
function generateSKU(name) {
  if (!name) return '';

  // Loại bỏ dấu tiếng Việt
  const nameNoAccent = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');

  // Lấy các chữ cái đầu của các từ
  const words = nameNoAccent.split(' ');
  let sku = 'NTBV-';

  if (words.length > 0) {
    // Nếu từ đầu tiên là số, sử dụng nó
    if (/^\d+$/.test(words[0])) {
      sku += words[0];
    } else {
      // Lấy chữ cái đầu của mỗi từ (tối đa 3 từ)
      const initials = words
        .slice(0, 3)
        .map((word) => word.charAt(0).toUpperCase())
        .join('');
      sku += initials;
    }
  }

  return sku;
}
