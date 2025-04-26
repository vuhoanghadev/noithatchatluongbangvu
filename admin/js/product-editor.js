/**
 * product-editor.js - Xử lý chỉnh sửa sản phẩm
 */

// Biến toàn cục cho modal đánh giá
let currentReviewIndex = -1;
let currentReplyReviewIndex = -1;
let currentReplyIndex = -1;

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem đang ở trang quản lý sản phẩm không
  if (document.querySelector('.product-manager-container')) {
    // Khởi tạo sự kiện cho form sản phẩm
    initProductForm();

    // Khởi tạo sự kiện cho form đánh giá
    initReviewForm();

    // Khởi tạo sự kiện cho form phản hồi
    initReplyForm();
  }
});

// Hàm khởi tạo sự kiện cho form sản phẩm
function initProductForm() {
  const productForm = document.getElementById('product-form');
  if (productForm) {
    productForm.addEventListener('submit', function (e) {
      e.preventDefault();
      saveProduct();
    });
  }

  // Xử lý tự động tạo SKU khi nhập tên sản phẩm
  const productName = document.getElementById('product-name');
  const productSku = document.getElementById('product-sku');
  if (productName && productSku) {
    productName.addEventListener('blur', function () {
      // Chỉ tự động tạo SKU nếu trường SKU đang trống
      if (!productSku.value.trim()) {
        productSku.value = generateSKU(this.value);
      }
    });
  }
}

// Hàm khởi tạo sự kiện cho form đánh giá
function initReviewForm() {
  const reviewForm = document.getElementById('review-form');
  if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();
      saveReview();
    });
  }

  // Xử lý checkbox ẩn danh
  const reviewAnonymous = document.getElementById('review-anonymous');
  const reviewAuthor = document.getElementById('review-author');
  const reviewAvatar = document.getElementById('review-avatar');

  if (reviewAnonymous && reviewAuthor && reviewAvatar) {
    reviewAnonymous.addEventListener('change', function () {
      if (this.checked) {
        reviewAuthor.value = 'Ẩn danh';
        reviewAuthor.disabled = true;
        reviewAvatar.value = '';
        reviewAvatar.disabled = true;
      } else {
        reviewAuthor.value = '';
        reviewAuthor.disabled = false;
        reviewAvatar.disabled = false;
      }
    });
  }

  // Xử lý nút thêm phản hồi
  const addReplyButton = document.getElementById('add-review-reply');
  if (addReplyButton) {
    addReplyButton.addEventListener('click', function () {
      const reviewIndex = parseInt(
        document.getElementById('review-index').value
      );
      openReplyModal(null, reviewIndex);
    });
  }
}

// Hàm khởi tạo sự kiện cho form phản hồi
function initReplyForm() {
  const replyForm = document.getElementById('reply-form');
  if (replyForm) {
    replyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      saveReply();
    });
  }

  // Xử lý checkbox là admin
  const replyIsAdmin = document.getElementById('reply-is-admin');
  const replyAuthor = document.getElementById('reply-author');
  const replyAvatar = document.getElementById('reply-avatar');

  if (replyIsAdmin && replyAuthor && replyAvatar) {
    replyIsAdmin.addEventListener('change', function () {
      if (this.checked) {
        replyAuthor.value = 'Nội Thất Chất Lượng Bàng Vũ';
        replyAvatar.value = '../images/logo.svg';
      } else {
        replyAuthor.value = '';
        replyAvatar.value = '';
      }
    });
  }
}

// Hàm lưu sản phẩm
function saveProduct() {
  // Lấy ID sản phẩm (nếu có)
  const productId = document.getElementById('product-id').value;

  // Tạo đối tượng sản phẩm từ form
  const product = getProductFromForm();

  if (productId) {
    // Chế độ sửa sản phẩm
    const index = allProducts.findIndex((p) => p.id === parseInt(productId));

    if (index !== -1) {
      // Cập nhật sản phẩm trong mảng
      allProducts[index] = product;
      showNotification('Đã cập nhật sản phẩm thành công');
    } else {
      showNotification('Không tìm thấy sản phẩm', 'error');
    }
  } else {
    // Chế độ thêm sản phẩm mới
    // Tạo ID mới cho sản phẩm
    product.id = generateNewProductId();

    // Thêm sản phẩm vào mảng
    allProducts.unshift(product);
    showNotification('Đã thêm sản phẩm mới thành công');
  }

  // Cập nhật lại danh sách sản phẩm đã lọc
  filteredProducts = [...allProducts];

  // Hiển thị lại danh sách sản phẩm
  renderProductList();

  // Đóng modal
  document.getElementById('product-modal').style.display = 'none';
}

// Hàm lấy thông tin sản phẩm từ form
function getProductFromForm() {
  const product = {};

  // Lấy ID sản phẩm (nếu có)
  const productId = document.getElementById('product-id').value;
  if (productId) {
    product.id = parseInt(productId);
  }

  // Lấy thông tin cơ bản
  product.name = document.getElementById('product-name').value;
  product.category = document.getElementById('product-category').value;
  product.size = document.getElementById('product-size').value;
  product.material = document.getElementById('product-material').value;
  product.warranty = document.getElementById('product-warranty').value;
  product.price = document.getElementById('product-price').value;
  product.promotion =
    document.getElementById('product-promotion').value || null;
  product.tag = document.getElementById('product-tag').value || null;

  const rating = parseFloat(document.getElementById('product-rating').value);
  product.rating = isNaN(rating) ? null : rating;

  const views = parseInt(document.getElementById('product-views').value);
  product.views = isNaN(views) ? null : views;

  const soldCount = parseInt(document.getElementById('product-sold').value);
  product.soldCount = isNaN(soldCount) ? null : soldCount;

  product.sku = document.getElementById('product-sku').value || null;
  product.reviewCode =
    document.getElementById('product-review-code').value || null;
  product.featured = document.getElementById('product-featured').checked;
  product.image = document.getElementById('product-image').value;
  product.description = document.getElementById('product-description').value;

  // Lấy thông tin Flash Sale
  const flashsaleActive = document.getElementById('flashsale-active').checked;
  if (flashsaleActive) {
    product.flashsale = {
      active: true,
      discountPercent:
        parseInt(document.getElementById('flashsale-discount').value) || 0,
      oldPrice:
        parseInt(document.getElementById('flashsale-old-price').value) || 0,
      newPrice:
        parseInt(document.getElementById('flashsale-new-price').value) || 0,
      type: document.getElementById('flashsale-type').value,
      endsAt: document.getElementById('flashsale-ends-at').value,
      hidePrice: document.getElementById('flashsale-hide-price').checked,
    };
  }

  // Lấy thông tin gallery
  product.gallery = [];
  const galleryInputs = document.querySelectorAll('.gallery-input');
  galleryInputs.forEach((input) => {
    if (input.value.trim()) {
      product.gallery.push(input.value.trim());
    }
  });

  // Lấy thông tin thông số kỹ thuật
  product.specifications = {};
  const specItems = document.querySelectorAll('.spec-item');
  specItems.forEach((item) => {
    const key = item.querySelector('.spec-key').value.trim();
    const value = item.querySelector('.spec-value').value.trim();

    if (key && value) {
      product.specifications[key] = value;
    }
  });

  // Lấy thông tin mô tả chi tiết
  product.detailedDescription = {
    content:
      getEditorContent() || document.getElementById('detailed-content').value,
    images: [],
  };

  // Lấy thông tin hình ảnh mô tả chi tiết
  const detailedImageItems = document.querySelectorAll('.detailed-image-item');
  detailedImageItems.forEach((item) => {
    const src = item.querySelector('.detailed-image-src').value.trim();
    const caption = item.querySelector('.detailed-image-caption').value.trim();

    if (src) {
      product.detailedDescription.images.push({
        src: src,
        caption: caption,
      });
    }
  });

  // Lấy thông tin đánh giá
  if (productId) {
    // Chỉ giữ lại đánh giá khi sửa sản phẩm
    const existingProduct = allProducts.find(
      (p) => p.id === parseInt(productId)
    );
    if (existingProduct && existingProduct.reviews) {
      product.reviews = existingProduct.reviews;
    }
  } else {
    // Kiểm tra xem có đánh giá mẫu trong container không
    const reviewsContainer = document.getElementById('reviews-container');
    if (reviewsContainer && reviewsContainer.querySelector('.review-card')) {
      // Có đánh giá mẫu, thêm vào sản phẩm
      product.reviews = [
        {
          author: 'Nguyễn Văn A',
          date: formatDate(new Date()),
          rating: 5.0,
          content:
            'Sản phẩm rất đẹp và chất lượng. Tôi rất hài lòng với tủ quần áo này. Giao hàng nhanh, lắp đặt chuyên nghiệp.',
          isAnonymous: false,
          avatar: '',
          images: [],
          videos: [],
          replies: [],
        },
      ];
    }
  }

  // Lấy thông tin chính sách
  product.policies = {
    shipping: document.getElementById('policy-shipping').value.trim(),
    returns: document.getElementById('policy-returns').value.trim(),
    warranty: document.getElementById('policy-warranty').value.trim(),
    payment: document.getElementById('policy-payment').value.trim(),
  };

  // Lấy thông tin bảo quản
  product.care = {
    cleaning: document.getElementById('care-cleaning').value.trim(),
    sunlight: document.getElementById('care-sunlight').value.trim(),
    humidity: document.getElementById('care-humidity').value.trim(),
    temperature: document.getElementById('care-temperature').value.trim(),
    tips: [],
  };

  // Lấy thông tin mẹo bảo quản
  const careTipInputs = document.querySelectorAll('.care-tip');
  careTipInputs.forEach((input) => {
    if (input.value.trim()) {
      product.care.tips.push(input.value.trim());
    }
  });

  return product;
}

// Hàm mở modal đánh giá
function openReviewModal(review = null, reviewIndex = -1) {
  const modal = document.getElementById('review-modal');
  const modalTitle = document.getElementById('review-modal-title');
  const reviewForm = document.getElementById('review-form');

  // Reset form
  reviewForm.reset();

  // Reset các trường động
  document.getElementById('review-images-container').innerHTML = `
        <div class="review-image-item">
            <input type="text" class="review-image" placeholder="Đường dẫn hình ảnh">
            <button type="button" class="btn remove-review-image"><i class="fas fa-trash"></i></button>
        </div>
    `;

  document.getElementById('review-videos-container').innerHTML = `
        <div class="review-video-item">
            <input type="text" class="review-video" placeholder="Đường dẫn video">
            <button type="button" class="btn remove-review-video"><i class="fas fa-trash"></i></button>
        </div>
    `;

  document.getElementById('review-replies-container').innerHTML = '';

  // Lưu index đánh giá hiện tại
  currentReviewIndex = reviewIndex;
  document.getElementById('review-index').value = reviewIndex;

  if (review) {
    // Chế độ sửa đánh giá
    modalTitle.textContent = 'Sửa Đánh giá';

    // Điền thông tin đánh giá
    document.getElementById('review-author').value = review.author || '';
    document.getElementById('review-date').value = review.date || '';
    document.getElementById('review-rating').value = review.rating || '';
    document.getElementById('review-anonymous').checked =
      review.isAnonymous || false;
    document.getElementById('review-avatar').value = review.avatar || '';
    document.getElementById('review-content').value = review.content || '';

    // Xử lý trạng thái ẩn danh
    if (review.isAnonymous) {
      document.getElementById('review-author').disabled = true;
      document.getElementById('review-avatar').disabled = true;
    } else {
      document.getElementById('review-author').disabled = false;
      document.getElementById('review-avatar').disabled = false;
    }

    // Điền thông tin hình ảnh đánh giá
    if (review.images && review.images.length > 0) {
      const reviewImagesContainer = document.getElementById(
        'review-images-container'
      );
      reviewImagesContainer.innerHTML = '';

      review.images.forEach((image) => {
        addDynamicFormItem(
          'review-images-container',
          'review-image-item',
          `
                    <input type="text" class="review-image" value="${image}" placeholder="Đường dẫn hình ảnh">
                    <button type="button" class="btn remove-review-image"><i class="fas fa-trash"></i></button>
                `
        );
      });
    }

    // Điền thông tin video đánh giá
    if (review.videos && review.videos.length > 0) {
      const reviewVideosContainer = document.getElementById(
        'review-videos-container'
      );
      reviewVideosContainer.innerHTML = '';

      review.videos.forEach((video) => {
        addDynamicFormItem(
          'review-videos-container',
          'review-video-item',
          `
                    <input type="text" class="review-video" value="${video}" placeholder="Đường dẫn video">
                    <button type="button" class="btn remove-review-video"><i class="fas fa-trash"></i></button>
                `
        );
      });
    }

    // Điền thông tin phản hồi
    if (review.replies && review.replies.length > 0) {
      const reviewRepliesContainer = document.getElementById(
        'review-replies-container'
      );
      reviewRepliesContainer.innerHTML = '';

      review.replies.forEach((reply, index) => {
        const replyCard = document.createElement('div');
        replyCard.className = 'review-card';
        replyCard.innerHTML = `
                    <div class="review-header">
                        <span class="review-author">${reply.author}</span>
                        <span class="review-date">${reply.date}</span>
                    </div>
                    <div class="review-content">${reply.content}</div>
                    <div class="review-actions">
                        <button type="button" class="btn secondary edit-reply" data-review-index="${reviewIndex}" data-index="${index}">
                            <i class="fas fa-edit"></i> Sửa
                        </button>
                        <button type="button" class="btn danger delete-reply" data-review-index="${reviewIndex}" data-index="${index}">
                            <i class="fas fa-trash"></i> Xóa
                        </button>
                    </div>
                `;
        reviewRepliesContainer.appendChild(replyCard);
      });

      // Thêm sự kiện cho các nút sửa và xóa phản hồi
      addReplyActionEvents();
    }
  } else {
    // Chế độ thêm đánh giá mới
    modalTitle.textContent = 'Thêm Đánh giá Mới';

    // Thiết lập giá trị mặc định
    const today = new Date();
    document.getElementById('review-date').value = formatDate(today);
    document.getElementById('review-rating').value = '5';
    document.getElementById('review-author').disabled = false;
    document.getElementById('review-avatar').disabled = false;
  }

  // Hiển thị modal
  modal.style.display = 'block';
}

// Hàm lưu đánh giá
function saveReview() {
  // Lấy ID sản phẩm
  const productIdField = document.getElementById('product-id');

  // Kiểm tra xem đang thêm sản phẩm mới hay chỉnh sửa sản phẩm
  if (!productIdField.value) {
    // Đang thêm sản phẩm mới, lưu sản phẩm trước
    saveProduct();

    // Lấy ID sản phẩm mới được tạo (sản phẩm đầu tiên trong mảng)
    if (allProducts.length > 0) {
      productIdField.value = allProducts[0].id;
    } else {
      showNotification(
        'Không thể thêm đánh giá, vui lòng lưu sản phẩm trước',
        'error'
      );
      return;
    }
  }

  const productId = parseInt(productIdField.value);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    showNotification('Không tìm thấy sản phẩm', 'error');
    return;
  }

  // Tạo đối tượng đánh giá từ form
  const review = {
    author: document.getElementById('review-author').value,
    date: document.getElementById('review-date').value,
    rating: parseFloat(document.getElementById('review-rating').value),
    content: document.getElementById('review-content').value,
    isAnonymous: document.getElementById('review-anonymous').checked,
    avatar: document.getElementById('review-avatar').value,
    images: [],
    videos: [],
    replies: [],
  };

  // Lấy thông tin hình ảnh đánh giá
  const reviewImageInputs = document.querySelectorAll('.review-image');
  reviewImageInputs.forEach((input) => {
    if (input.value.trim()) {
      review.images.push(input.value.trim());
    }
  });

  // Lấy thông tin video đánh giá
  const reviewVideoInputs = document.querySelectorAll('.review-video');
  reviewVideoInputs.forEach((input) => {
    if (input.value.trim()) {
      review.videos.push(input.value.trim());
    }
  });

  // Khởi tạo mảng đánh giá nếu chưa có
  if (!product.reviews) {
    product.reviews = [];
  }

  // Lấy index đánh giá hiện tại
  const reviewIndex = parseInt(document.getElementById('review-index').value);

  if (reviewIndex >= 0 && reviewIndex < product.reviews.length) {
    // Chế độ sửa đánh giá
    // Giữ lại các phản hồi
    review.replies = product.reviews[reviewIndex].replies || [];

    // Cập nhật đánh giá trong mảng
    product.reviews[reviewIndex] = review;
    showNotification('Đã cập nhật đánh giá thành công');
  } else {
    // Chế độ thêm đánh giá mới
    product.reviews.push(review);
    showNotification('Đã thêm đánh giá mới thành công');
  }

  // Cập nhật lại form sản phẩm
  fillProductForm(product);

  // Đóng modal
  document.getElementById('review-modal').style.display = 'none';
}

// Hàm thêm sự kiện cho các nút sửa và xóa phản hồi
function addReplyActionEvents() {
  // Xử lý nút sửa phản hồi
  const editReplyButtons = document.querySelectorAll('.edit-reply');
  editReplyButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const reviewIndex = parseInt(this.getAttribute('data-review-index'));
      const replyIndex = parseInt(this.getAttribute('data-index'));

      const productId = parseInt(document.getElementById('product-id').value);
      const product = allProducts.find((p) => p.id === productId);

      if (
        product &&
        product.reviews &&
        product.reviews[reviewIndex] &&
        product.reviews[reviewIndex].replies &&
        product.reviews[reviewIndex].replies[replyIndex]
      ) {
        openReplyModal(
          product.reviews[reviewIndex].replies[replyIndex],
          reviewIndex,
          replyIndex
        );
      }
    });
  });

  // Xử lý nút xóa phản hồi
  const deleteReplyButtons = document.querySelectorAll('.delete-reply');
  deleteReplyButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const reviewIndex = parseInt(this.getAttribute('data-review-index'));
      const replyIndex = parseInt(this.getAttribute('data-index'));

      const productId = parseInt(document.getElementById('product-id').value);
      const product = allProducts.find((p) => p.id === productId);

      if (
        product &&
        product.reviews &&
        product.reviews[reviewIndex] &&
        product.reviews[reviewIndex].replies &&
        product.reviews[reviewIndex].replies[replyIndex]
      ) {
        const reply = product.reviews[reviewIndex].replies[replyIndex];

        showConfirmModal(
          `Bạn có chắc chắn muốn xóa phản hồi của "${reply.author}"?`,
          () => {
            // Xóa phản hồi khỏi mảng
            product.reviews[reviewIndex].replies.splice(replyIndex, 1);

            // Cập nhật lại giao diện
            openReviewModal(product.reviews[reviewIndex], reviewIndex);

            showNotification('Đã xóa phản hồi thành công');
          }
        );
      }
    });
  });
}

// Hàm mở modal phản hồi
function openReplyModal(reply = null, reviewIndex = -1, replyIndex = -1) {
  const modal = document.getElementById('reply-modal');
  const modalTitle = document.getElementById('reply-modal-title');
  const replyForm = document.getElementById('reply-form');

  // Reset form
  replyForm.reset();

  // Lưu index đánh giá và phản hồi hiện tại
  currentReplyReviewIndex = reviewIndex;
  currentReplyIndex = replyIndex;

  document.getElementById('reply-review-index').value = reviewIndex;
  document.getElementById('reply-index').value = replyIndex;

  if (reply) {
    // Chế độ sửa phản hồi
    modalTitle.textContent = 'Sửa Phản hồi';

    // Điền thông tin phản hồi
    document.getElementById('reply-author').value = reply.author || '';
    document.getElementById('reply-date').value = reply.date || '';
    document.getElementById('reply-is-admin').checked = reply.isAdmin || false;
    document.getElementById('reply-avatar').value = reply.avatar || '';
    document.getElementById('reply-content').value = reply.content || '';
  } else {
    // Chế độ thêm phản hồi mới
    modalTitle.textContent = 'Thêm Phản hồi Mới';

    // Thiết lập giá trị mặc định
    const today = new Date();
    document.getElementById('reply-date').value = formatDate(today);
    document.getElementById('reply-is-admin').checked = true;
    document.getElementById('reply-author').value =
      'Nội Thất Chất Lượng Bàng Vũ';
    document.getElementById('reply-avatar').value = '../images/logo.svg';
  }

  // Hiển thị modal
  modal.style.display = 'block';
}

// Hàm lưu phản hồi
function saveReply() {
  // Lấy ID sản phẩm
  const productIdField = document.getElementById('product-id');

  // Kiểm tra xem đang thêm sản phẩm mới hay chỉnh sửa sản phẩm
  if (!productIdField.value) {
    // Đang thêm sản phẩm mới, lưu sản phẩm trước
    saveProduct();

    // Lấy ID sản phẩm mới được tạo (sản phẩm đầu tiên trong mảng)
    if (allProducts.length > 0) {
      productIdField.value = allProducts[0].id;
    } else {
      showNotification(
        'Không thể thêm phản hồi, vui lòng lưu sản phẩm trước',
        'error'
      );
      return;
    }
  }

  const productId = parseInt(productIdField.value);
  const product = allProducts.find((p) => p.id === productId);

  if (!product) {
    showNotification('Không tìm thấy sản phẩm', 'error');
    return;
  }

  // Lấy index đánh giá
  const reviewIndex = parseInt(
    document.getElementById('reply-review-index').value
  );

  if (
    reviewIndex < 0 ||
    !product.reviews ||
    reviewIndex >= product.reviews.length
  ) {
    showNotification('Không tìm thấy đánh giá', 'error');
    return;
  }

  // Tạo đối tượng phản hồi từ form
  const reply = {
    author: document.getElementById('reply-author').value,
    date: document.getElementById('reply-date').value,
    isAdmin: document.getElementById('reply-is-admin').checked,
    avatar: document.getElementById('reply-avatar').value,
    content: document.getElementById('reply-content').value,
  };

  // Khởi tạo mảng phản hồi nếu chưa có
  if (!product.reviews[reviewIndex].replies) {
    product.reviews[reviewIndex].replies = [];
  }

  // Lấy index phản hồi hiện tại
  const replyIndex = parseInt(document.getElementById('reply-index').value);

  if (
    replyIndex >= 0 &&
    replyIndex < product.reviews[reviewIndex].replies.length
  ) {
    // Chế độ sửa phản hồi
    product.reviews[reviewIndex].replies[replyIndex] = reply;
    showNotification('Đã cập nhật phản hồi thành công');
  } else {
    // Chế độ thêm phản hồi mới
    product.reviews[reviewIndex].replies.push(reply);
    showNotification('Đã thêm phản hồi mới thành công');
  }

  // Cập nhật lại modal đánh giá
  openReviewModal(product.reviews[reviewIndex], reviewIndex);

  // Đóng modal
  document.getElementById('reply-modal').style.display = 'none';
}
