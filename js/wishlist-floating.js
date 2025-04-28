// JavaScript cho tính năng yêu thích sản phẩm ghim

// Khởi tạo tính năng yêu thích sản phẩm
document.addEventListener('DOMContentLoaded', function () {
  initWishlistFeature();
});

// Khởi tạo khi trang được tải qua AJAX (nếu có)
document.addEventListener('ajaxPageLoaded', function () {
  initWishlistFeature();
});

// Khởi tạo khi hoàn tất chuyển trang (nếu có)
document.addEventListener('page-transition-complete', function () {
  initWishlistFeature();
});

// Hàm khởi tạo tính năng yêu thích sản phẩm
function initWishlistFeature() {
  console.log('Khởi tạo tính năng yêu thích sản phẩm...');

  // Kiểm tra xem có đang ở mobile không
  const isMobile = window.innerWidth <= 768;

  // Kiểm tra xem có đang ở trang sản phẩm không
  const isProductPage = isProductRelatedPage();

  // Tạo nút yêu thích ghim nếu chưa có và không phải ở mobile
  // Chỉ hiển thị nút yêu thích ghim trên các trang sản phẩm
  if (!isMobile && isProductPage) {
    createWishlistToggle();
  }

  // Tạo container danh sách sản phẩm yêu thích nếu chưa có
  createWishlistContainer();

  // Cập nhật số lượng sản phẩm yêu thích
  updateWishlistCount();

  // Cập nhật trạng thái nút yêu thích trên trang chi tiết sản phẩm
  updateWishlistButtonState();

  // Thêm sự kiện resize để ẩn/hiện nút yêu thích nổi khi thay đổi kích thước màn hình
  window.addEventListener('resize', handleResize);
}

// Hàm kiểm tra xem có đang ở trang liên quan đến sản phẩm không
function isProductRelatedPage() {
  const currentURL = window.location.href;
  return (
    currentURL.includes('products.html') ||
    currentURL.includes('product-details.html')
  );
}

// Hàm xử lý sự kiện resize
function handleResize() {
  const isMobile = window.innerWidth <= 768;
  const isProductPage = isProductRelatedPage();
  const wishlistToggle = document.querySelector('.wishlist-toggle');

  if (isMobile) {
    // Ẩn nút yêu thích nổi trên mobile
    if (wishlistToggle) {
      wishlistToggle.style.display = 'none';
    }
  } else {
    // Hiện nút yêu thích nổi trên desktop nếu đang ở trang sản phẩm
    if (isProductPage) {
      if (wishlistToggle) {
        wishlistToggle.style.display = 'flex';
      } else {
        // Tạo nút nếu chưa có
        createWishlistToggle();
      }
    } else {
      // Ẩn nút yêu thích nổi nếu không phải trang sản phẩm
      if (wishlistToggle) {
        wishlistToggle.style.display = 'none';
      }
    }
  }
}

// Hàm tạo nút yêu thích ghim
function createWishlistToggle() {
  // Kiểm tra xem nút đã tồn tại chưa
  if (document.querySelector('.wishlist-toggle')) {
    return;
  }

  // Tạo nút yêu thích ghim
  const wishlistToggle = document.createElement('button');
  wishlistToggle.className = 'wishlist-toggle';
  wishlistToggle.innerHTML = `
    <i class="fas fa-heart"></i>
    <span class="wishlist-count">0</span>
  `;

  // Thêm sự kiện click để mở danh sách sản phẩm yêu thích
  wishlistToggle.addEventListener('click', function () {
    toggleWishlistContainer();
  });

  // Thêm nút vào body
  document.body.appendChild(wishlistToggle);
}

// Hàm tạo container danh sách sản phẩm yêu thích
function createWishlistContainer() {
  // Kiểm tra xem container đã tồn tại chưa
  if (document.querySelector('.wishlist-container')) {
    return;
  }

  // Tạo overlay nền
  const wishlistOverlay = document.createElement('div');
  wishlistOverlay.className = 'wishlist-overlay';

  // Thêm sự kiện click để đóng danh sách khi click vào overlay
  wishlistOverlay.addEventListener('click', function () {
    toggleWishlistContainer(false);
  });

  // Tạo container danh sách sản phẩm yêu thích
  const wishlistContainer = document.createElement('div');
  wishlistContainer.className = 'wishlist-container';
  wishlistContainer.innerHTML = `
    <div class="wishlist-header">
      <h3><i class="fas fa-heart"></i> Sản phẩm yêu thích</h3>
      <button class="wishlist-close"><i class="fas fa-times"></i></button>
    </div>
    <div class="wishlist-list">
      <!-- Danh sách sản phẩm yêu thích sẽ được thêm vào đây -->
    </div>
    <div class="wishlist-footer">
      <button class="wishlist-clear"><i class="fas fa-trash-alt"></i> Xóa tất cả</button>
      <a href="products.html" class="wishlist-view-all"><i class="fas fa-shopping-bag"></i> Xem tất cả sản phẩm</a>
    </div>
  `;

  // Thêm sự kiện click cho nút đóng
  wishlistContainer
    .querySelector('.wishlist-close')
    .addEventListener('click', function () {
      toggleWishlistContainer(false);
    });

  // Thêm sự kiện click cho nút xóa tất cả
  wishlistContainer
    .querySelector('.wishlist-clear')
    .addEventListener('click', function () {
      clearAllWishlist();
    });

  // Thêm overlay và container vào body
  document.body.appendChild(wishlistOverlay);
  document.body.appendChild(wishlistContainer);

  // Render danh sách sản phẩm yêu thích
  renderWishlistItems();
}

// Hàm mở/đóng danh sách sản phẩm yêu thích
function toggleWishlistContainer(open) {
  const wishlistContainer = document.querySelector('.wishlist-container');
  const wishlistOverlay = document.querySelector('.wishlist-overlay');
  const isMobile = window.innerWidth <= 768;

  if (!wishlistContainer || !wishlistOverlay) {
    // Nếu container chưa tồn tại, tạo mới và thử lại
    createWishlistContainer();

    // Lấy lại các phần tử sau khi tạo
    const newWishlistContainer = document.querySelector('.wishlist-container');
    const newWishlistOverlay = document.querySelector('.wishlist-overlay');

    if (!newWishlistContainer || !newWishlistOverlay) {
      console.error('Không thể tạo container danh sách yêu thích');
      return;
    }

    // Tiếp tục với các phần tử mới tạo
    if (open === undefined || open === true) {
      newWishlistContainer.classList.add('open');
      newWishlistOverlay.classList.add('open');
      document.addEventListener('keydown', handleEscapeKey);
      renderWishlistItems();

      // Thêm class để xác định đang ở mobile hay desktop
      if (isMobile) {
        newWishlistContainer.classList.add('mobile-view');
      } else {
        newWishlistContainer.classList.remove('mobile-view');
      }
    }

    return;
  }

  // Nếu không có tham số, thì toggle trạng thái hiện tại
  if (open === undefined) {
    open = !wishlistContainer.classList.contains('open');
  }

  if (open) {
    // Thêm class để xác định đang ở mobile hay desktop
    if (isMobile) {
      wishlistContainer.classList.add('mobile-view');
    } else {
      wishlistContainer.classList.remove('mobile-view');
    }

    wishlistContainer.classList.add('open');
    wishlistOverlay.classList.add('open');

    // Thêm sự kiện đóng khi nhấn Escape
    document.addEventListener('keydown', handleEscapeKey);

    // Render lại danh sách sản phẩm yêu thích
    renderWishlistItems();

    // Cập nhật trạng thái active cho nút yêu thích trong thanh navigation
    const wishlistNavItem = document.getElementById('wishlist-nav');
    if (wishlistNavItem) {
      // Xóa class active từ tất cả các mục
      const bottomNavItems = document.querySelectorAll('.bottom-nav-item');
      bottomNavItems.forEach((item) => item.classList.remove('active'));

      // Thêm class active cho nút yêu thích
      wishlistNavItem.classList.add('active');
    }

    // Nếu đang ở mobile, thêm class vào body để ngăn cuộn trang
    if (isMobile) {
      document.body.classList.add('wishlist-open');

      // Đảm bảo container hiển thị toàn màn hình trên mobile
      wishlistContainer.style.height = '100%';
      // Không cần thiết lập z-index ở đây vì đã được thiết lập trong CSS
    }
  } else {
    wishlistContainer.classList.remove('open');
    wishlistOverlay.classList.remove('open');

    // Xóa sự kiện đóng khi nhấn Escape
    document.removeEventListener('keydown', handleEscapeKey);

    // Khôi phục trạng thái active cho nút navigation dựa trên URL hiện tại
    const currentURL = window.location.href;
    const bottomNavItems = document.querySelectorAll('.bottom-nav-item');

    // Xóa active từ tất cả các nút
    bottomNavItems.forEach((item) => item.classList.remove('active'));

    // Xác định nút nào nên active dựa trên URL
    if (
      currentURL.includes('products.html') ||
      currentURL.includes('product-details.html')
    ) {
      document.getElementById('products-nav')?.classList.add('active');
    } else if (
      currentURL.includes('blog.html') ||
      currentURL.includes('blog-detail.html')
    ) {
      document.getElementById('blog-nav')?.classList.add('active');
    } else if (
      currentURL.includes('index.html') ||
      currentURL.endsWith('/') ||
      currentURL.endsWith('.com') ||
      currentURL.endsWith('.net') ||
      currentURL.endsWith('.org') ||
      currentURL.endsWith('.io')
    ) {
      document.getElementById('home-nav')?.classList.add('active');
    }

    // Nếu đang ở mobile, xóa class khỏi body để cho phép cuộn trang
    if (isMobile) {
      document.body.classList.remove('wishlist-open');
    }
  }
}

// Hàm xử lý sự kiện nhấn phím Escape
function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    toggleWishlistContainer(false);
  }
}

// Hàm render danh sách sản phẩm yêu thích
function renderWishlistItems() {
  const wishlistList = document.querySelector('.wishlist-list');

  if (!wishlistList) {
    return;
  }

  // Lấy danh sách sản phẩm yêu thích
  const wishlist = getWishlist();

  // Nếu không có sản phẩm nào, hiển thị thông báo với giao diện cải tiến và nội dung phù hợp hơn
  if (wishlist.length === 0) {
    wishlistList.innerHTML = `
      <div class="wishlist-empty">


        <p class="wishlist-empty-tip">Nhấn vào biểu tượng <i class="fas fa-heart"></i> trên trang sản phẩm để thêm vào danh sách yêu thích</p>
      </div>
    `;
    return;
  }

  // Tạo HTML cho danh sách sản phẩm yêu thích
  let wishlistHTML = '';

  // Thêm số lượng sản phẩm yêu thích với giao diện cải tiến
  wishlistHTML += `
    <div class="wishlist-count-info">
      <span><i class="fas fa-heart"></i> Có ${wishlist.length} sản phẩm yêu thích</span>
    </div>
  `;

  // Lặp qua từng ID sản phẩm trong danh sách yêu thích
  wishlist.forEach((productId) => {
    // Tìm thông tin sản phẩm từ ID
    const product = findProductById(productId);

    if (product) {
      // Kiểm tra xem có đang ở mobile không
      const isMobile = window.innerWidth <= 768;

      // Tạo HTML cho item sản phẩm với cấu trúc cải tiến
      wishlistHTML += `
        <div class="wishlist-item" data-product-id="${product.id}">
          <div class="wishlist-item-image">
            <a href="product-details.html?id=${product.id}">
              <img src="${product.image}" alt="${product.name}">
            </a>
          </div>
          <div class="wishlist-item-content">
            <h4 class="wishlist-item-title">
              <a href="product-details.html?id=${product.id}">${product.name}</a>
            </h4>
            <div class="wishlist-item-category">
              <i class="fas fa-tag"></i> ${product.category}
            </div>
            <div class="wishlist-item-actions">
              <a href="product-details.html?id=${product.id}" class="wishlist-item-view">
                <i class="fas fa-eye"></i><span>Xem chi tiết</span>
              </a>
              <button class="wishlist-item-remove" data-product-id="${product.id}">
                <i class="fas fa-trash-alt"></i><span>Xóa</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }
  });

  // Cập nhật HTML cho danh sách
  wishlistList.innerHTML = wishlistHTML;

  // Thêm sự kiện click cho các nút xóa
  const removeButtons = wishlistList.querySelectorAll('.wishlist-item-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const productId = parseInt(this.dataset.productId);

      // Thêm hiệu ứng xóa trước khi thực sự xóa
      const wishlistItem = this.closest('.wishlist-item');

      // Sử dụng class để áp dụng animation thay vì inline style
      wishlistItem.classList.add('removing');

      // Vô hiệu hóa nút để tránh click nhiều lần
      this.disabled = true;

      // Lấy tên sản phẩm để hiển thị trong thông báo
      const productName = wishlistItem.querySelector(
        '.wishlist-item-title a'
      ).textContent;

      // Lưu trữ thông tin về container để sử dụng trong setTimeout
      const isMobile = window.innerWidth <= 576;

      setTimeout(() => {
        // Xóa sản phẩm khỏi danh sách yêu thích
        removeFromWishlist(productId);

        // Cập nhật trạng thái nút yêu thích trên trang chi tiết sản phẩm
        updateWishlistButtonState();

        // Render lại danh sách sản phẩm yêu thích
        renderWishlistItems();

        // Cập nhật số lượng sản phẩm yêu thích
        updateWishlistCount();

        // Hiển thị thông báo với tên sản phẩm
        showRemoveNotification(productName);

        // Trên thiết bị di động, đóng danh sách yêu thích sau một khoảng thời gian
        // để người dùng có thể thấy thông báo xóa
        if (isMobile && getWishlist().length === 0) {
          setTimeout(() => {
            toggleWishlistContainer(false);
          }, 1500); // Đợi 1.5 giây sau khi hiển thị thông báo
        }
      }, 500); // Tăng thời gian để phù hợp với thời gian animation
    });
  });

  // Thêm sự kiện click cho các ảnh sản phẩm
  const productImages = wishlistList.querySelectorAll('.wishlist-item-image a');
  productImages.forEach((image) => {
    image.addEventListener('click', function (e) {
      // Nếu đang ở mobile, đóng danh sách yêu thích khi chuyển đến trang chi tiết
      if (window.innerWidth <= 768) {
        toggleWishlistContainer(false);
      }
    });
  });
}

// Hàm hiển thị thông báo khi xóa sản phẩm
function showRemoveNotification(productName = '') {
  // Kiểm tra xem đã có thông báo chưa
  let notification = document.querySelector('.wishlist-remove-notification');

  // Xóa thông báo cũ nếu có
  if (notification) {
    notification.remove();
  }

  // Tạo thông báo mới
  notification = document.createElement('div');
  notification.className = 'wishlist-remove-notification';

  // Tạo nội dung thông báo
  let notificationText = 'Sản phẩm đã được xóa khỏi danh sách yêu thích';
  if (productName) {
    // Rút gọn tên sản phẩm nếu quá dài
    const shortName =
      productName.length > 30
        ? productName.substring(0, 30) + '...'
        : productName;
    notificationText = `"${shortName}" đã được xóa khỏi danh sách yêu thích`;
  }

  notification.innerHTML = `
    <div class="wishlist-notification-icon">
      <i class="fas fa-check-circle"></i>
    </div>
    <div class="wishlist-notification-content">
      <div class="wishlist-notification-title">Đã xóa sản phẩm</div>
      <div class="wishlist-notification-text">${notificationText}</div>
    </div>
  `;

  // Thêm vào body
  document.body.appendChild(notification);

  // Hiển thị thông báo sau một khoảng thời gian ngắn để tạo hiệu ứng mượt mà
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);

  // Ẩn thông báo sau 2.5 giây
  setTimeout(() => {
    notification.classList.remove('show');

    // Đảm bảo thông báo được xóa khỏi DOM sau khi hiệu ứng ẩn hoàn tất
    setTimeout(() => {
      // Kiểm tra xem thông báo còn tồn tại không và không có class show
      if (notification && !notification.classList.contains('show')) {
        notification.remove();
      }
    }, 300); // Thời gian phải khớp với thời gian transition trong CSS
  }, 2500);
}

// Hàm tìm sản phẩm theo ID
function findProductById(productId) {
  // Kiểm tra xem biến products có tồn tại không
  if (typeof products !== 'undefined') {
    return products.find((product) => product.id === productId);
  }

  // Nếu không có biến products, trả về null
  return null;
}

// Hàm lấy danh sách sản phẩm yêu thích từ localStorage
function getWishlist() {
  const wishlistJSON = localStorage.getItem('wishlist');
  return wishlistJSON ? JSON.parse(wishlistJSON) : [];
}

// Hàm thêm sản phẩm vào danh sách yêu thích
function addToWishlist(productId) {
  let wishlist = getWishlist();

  // Kiểm tra xem sản phẩm đã có trong danh sách chưa
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));

    // Cập nhật số lượng sản phẩm yêu thích
    updateWishlistCount();

    return true;
  }

  return false;
}

// Hàm xóa sản phẩm khỏi danh sách yêu thích
function removeFromWishlist(productId) {
  let wishlist = getWishlist();

  // Lọc ra các sản phẩm khác với sản phẩm cần xóa
  wishlist = wishlist.filter((id) => id !== productId);
  localStorage.setItem('wishlist', JSON.stringify(wishlist));

  // Cập nhật số lượng sản phẩm yêu thích
  updateWishlistCount();

  return true;
}

// Hàm xóa tất cả sản phẩm khỏi danh sách yêu thích
function clearAllWishlist() {
  // Hiển thị hộp thoại xác nhận
  if (confirm('Bạn có chắc muốn xóa tất cả sản phẩm yêu thích không?')) {
    localStorage.removeItem('wishlist');

    // Cập nhật số lượng sản phẩm yêu thích
    updateWishlistCount();

    // Cập nhật trạng thái nút yêu thích trên trang chi tiết sản phẩm
    updateWishlistButtonState();

    // Render lại danh sách sản phẩm yêu thích
    renderWishlistItems();
  }
}

// Hàm cập nhật số lượng sản phẩm yêu thích
function updateWishlistCount() {
  const wishlistCount = document.querySelector('.wishlist-count');

  if (wishlistCount) {
    const count = getWishlist().length;
    wishlistCount.textContent = count;

    // Ẩn số lượng nếu không có sản phẩm nào
    if (count === 0) {
      wishlistCount.style.display = 'none';
    } else {
      wishlistCount.style.display = 'flex';
    }
  }
}

// Hàm cập nhật trạng thái nút yêu thích trên trang chi tiết sản phẩm
function updateWishlistButtonState() {
  // Kiểm tra xem có đang ở trang chi tiết sản phẩm không
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  if (!productId) {
    return;
  }

  // Tìm nút yêu thích
  const wishlistBtn = document.getElementById('wishlistBtn');

  if (wishlistBtn) {
    // Kiểm tra xem sản phẩm đã có trong danh sách yêu thích chưa
    const wishlist = getWishlist();
    const isInWishlist = wishlist.includes(productId);

    // Cập nhật trạng thái nút
    updateWishlistButtonUI(wishlistBtn, isInWishlist);
  }
}

// Hàm cập nhật giao diện nút yêu thích
function updateWishlistButtonUI(button, isInWishlist) {
  if (isInWishlist) {
    button.classList.add('active');
    button.innerHTML = `
      <i class="fas fa-heart"></i> Đã thêm vào yêu thích
      <div class="heart-animation">
        <i class="fas fa-heart"></i>
      </div>
    `;
  } else {
    button.classList.remove('active');
    button.innerHTML = `
      <i class="far fa-heart"></i> Thêm vào yêu thích
      <div class="heart-animation">
        <i class="fas fa-heart"></i>
      </div>
    `;
  }
}

// Kiểm tra xem sản phẩm đã có trong danh sách yêu thích chưa
function isProductInWishlist(productId) {
  const wishlist = getWishlist();
  return wishlist.includes(productId);
}

// Export các hàm để sử dụng ở nơi khác
window.WishlistManager = {
  initWishlistFeature,
  addToWishlist,
  removeFromWishlist,
  isProductInWishlist,
  getWishlist,
  updateWishlistCount,
  toggleWishlistContainer,
};
