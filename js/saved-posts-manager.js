/**
 * Quản lý bài viết đã lưu
 * File này chứa các hàm để quản lý bài viết đã lưu
 */

// Khóa lưu trữ trong localStorage
const STORAGE_KEY = 'bangvu_saved_posts';

// Lấy danh sách bài viết đã lưu
function getSavedPosts() {
  try {
    const savedPostsJson = localStorage.getItem(STORAGE_KEY);
    return savedPostsJson ? JSON.parse(savedPostsJson) : [];
  } catch (error) {
    console.error('Lỗi khi lấy bài viết đã lưu:', error);
    return [];
  }
}

// Lưu danh sách bài viết vào localStorage
function savePosts(posts) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
    return true;
  } catch (error) {
    console.error('Lỗi khi lưu bài viết:', error);
    return false;
  }
}

// Kiểm tra xem bài viết đã được lưu chưa
function isPostSaved(postUrl) {
  if (!postUrl) {
    console.error('URL bài viết không hợp lệ khi kiểm tra trạng thái lưu');
    return false;
  }

  // Chuẩn hóa URL để so sánh chính xác
  let normalizedUrl = postUrl;
  try {
    const urlParts = postUrl.split('?');
    if (urlParts.length > 1) {
      const params = new URLSearchParams(urlParts[1]);
      const postId = params.get('id');
      if (postId) {
        normalizedUrl = urlParts[0] + '?id=' + postId;
      }
    }
  } catch (error) {
    console.error('Lỗi khi chuẩn hóa URL:', error);
  }

  const posts = getSavedPosts();
  const isSaved = posts.some((post) => {
    // Chuẩn hóa URL đã lưu để so sánh
    let savedUrl = post.url;
    try {
      const urlParts = post.url.split('?');
      if (urlParts.length > 1) {
        const params = new URLSearchParams(urlParts[1]);
        const postId = params.get('id');
        if (postId) {
          savedUrl = urlParts[0] + '?id=' + postId;
        }
      }
    } catch (error) {
      console.error('Lỗi khi chuẩn hóa URL đã lưu:', error);
    }

    return savedUrl === normalizedUrl;
  });

  console.log(
    'Kiểm tra bài viết đã lưu:',
    normalizedUrl,
    isSaved ? 'Đã lưu' : 'Chưa lưu'
  );
  return isSaved;
}

// Thêm bài viết vào danh sách đã lưu
function savePost(postInfo) {
  const posts = getSavedPosts();

  // Kiểm tra xem bài viết đã tồn tại chưa
  if (isPostSaved(postInfo.url)) {
    return false;
  }

  // Thêm bài viết mới
  posts.push({
    ...postInfo,
    savedAt: new Date().toISOString(),
  });

  return savePosts(posts);
}

// Xóa bài viết khỏi danh sách đã lưu
function removePost(postUrl) {
  console.log('Xóa bài viết khỏi danh sách đã lưu:', postUrl);

  if (!postUrl) {
    console.error('URL bài viết không hợp lệ khi xóa');
    return false;
  }

  const posts = getSavedPosts();

  // Chuẩn hóa URL để so sánh chính xác
  let normalizedUrl = postUrl;
  try {
    const urlParts = postUrl.split('?');
    if (urlParts.length > 1) {
      const params = new URLSearchParams(urlParts[1]);
      const postId = params.get('id');
      if (postId) {
        normalizedUrl = urlParts[0] + '?id=' + postId;
      }
    }
  } catch (error) {
    console.error('Lỗi khi chuẩn hóa URL:', error);
  }

  // Lọc bỏ bài viết cần xóa
  const newPosts = posts.filter((post) => {
    // Chuẩn hóa URL đã lưu để so sánh
    let savedUrl = post.url;
    try {
      const urlParts = post.url.split('?');
      if (urlParts.length > 1) {
        const params = new URLSearchParams(urlParts[1]);
        const postId = params.get('id');
        if (postId) {
          savedUrl = urlParts[0] + '?id=' + postId;
        }
      }
    } catch (error) {
      console.error('Lỗi khi chuẩn hóa URL đã lưu:', error);
    }

    return savedUrl !== normalizedUrl;
  });

  // Nếu số lượng bài viết không thay đổi, nghĩa là không có bài viết nào bị xóa
  if (newPosts.length === posts.length) {
    console.log('Không tìm thấy bài viết để xóa');
    return false;
  }

  console.log('Đã xóa bài viết, còn lại', newPosts.length, 'bài viết');
  return savePosts(newPosts);
}

// Xóa tất cả bài viết đã lưu
function clearAllSavedPosts() {
  return savePosts([]);
}

// Cập nhật giao diện nút lưu bài viết
function updateSaveButtonUI(button, isSaved) {
  if (isSaved) {
    button.innerHTML = '<i class="fas fa-bookmark"></i> Đã lưu';
    button.classList.add('saved');
  } else {
    button.innerHTML = '<i class="far fa-bookmark"></i> Lưu để đọc sau';
    button.classList.remove('saved');
  }
}

// Hiển thị thông báo
function showNotification(message, duration = 2000) {
  console.log('Hiển thị thông báo:', message);

  // Xóa thông báo cũ nếu có
  const oldNotification = document.querySelector('.save-notification');
  if (oldNotification) {
    oldNotification.remove();
  }

  // Tạo thông báo mới
  const notification = document.createElement('div');
  notification.className = 'save-notification';
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '4px';
  notification.style.zIndex = '9999';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.3s ease';
  notification.textContent = message;
  document.body.appendChild(notification);

  // Hiển thị thông báo (sử dụng setTimeout để đảm bảo transition hoạt động)
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);

  // Ẩn thông báo sau thời gian chỉ định
  setTimeout(() => {
    notification.style.opacity = '0';

    // Xóa thông báo khỏi DOM sau khi ẩn
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, duration);
}

// Hiển thị hộp thoại xác nhận
function showConfirmDialog(title, message, onConfirm) {
  console.log('Hiển thị hộp thoại xác nhận:', message);

  // Xóa hộp thoại cũ nếu có
  const oldDialog = document.querySelector('.confirm-dialog-container');
  if (oldDialog) {
    oldDialog.remove();
  }

  // Tạo overlay
  const overlay = document.createElement('div');
  overlay.className = 'confirm-dialog-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = '0';
  overlay.style.left = '0';
  overlay.style.width = '100%';
  overlay.style.height = '100%';
  overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  overlay.style.zIndex = '10000';
  overlay.style.display = 'flex';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';

  // Tạo hộp thoại
  const dialogContainer = document.createElement('div');
  dialogContainer.className = 'confirm-dialog-container';
  dialogContainer.style.backgroundColor = 'white';
  dialogContainer.style.borderRadius = '8px';
  dialogContainer.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  dialogContainer.style.width = '90%';
  dialogContainer.style.maxWidth = '400px';
  dialogContainer.style.padding = '20px';
  dialogContainer.style.animation = 'dialogFadeIn 0.3s ease';

  // Tạo tiêu đề
  const dialogTitle = document.createElement('h3');
  dialogTitle.style.margin = '0 0 15px 0';
  dialogTitle.style.color = '#333';
  dialogTitle.style.fontSize = '1.2rem';
  dialogTitle.style.fontWeight = '600';
  dialogTitle.textContent = title;

  // Tạo nội dung
  const dialogMessage = document.createElement('p');
  dialogMessage.style.margin = '0 0 20px 0';
  dialogMessage.style.color = '#555';
  dialogMessage.style.fontSize = '1rem';
  dialogMessage.style.lineHeight = '1.5';
  dialogMessage.textContent = message;

  // Tạo phần nút
  const dialogButtons = document.createElement('div');
  dialogButtons.style.display = 'flex';
  dialogButtons.style.justifyContent = 'flex-end';
  dialogButtons.style.gap = '10px';

  // Nút hủy
  const cancelButton = document.createElement('button');
  cancelButton.style.padding = '8px 16px';
  cancelButton.style.backgroundColor = '#f1f1f1';
  cancelButton.style.color = '#333';
  cancelButton.style.border = 'none';
  cancelButton.style.borderRadius = '4px';
  cancelButton.style.cursor = 'pointer';
  cancelButton.style.fontWeight = '500';
  cancelButton.style.transition = 'all 0.2s ease';
  cancelButton.textContent = 'Hủy';

  // Nút xác nhận
  const confirmButton = document.createElement('button');
  confirmButton.style.padding = '8px 16px';
  confirmButton.style.backgroundColor = '#f44336';
  confirmButton.style.color = 'white';
  confirmButton.style.border = 'none';
  confirmButton.style.borderRadius = '4px';
  confirmButton.style.cursor = 'pointer';
  confirmButton.style.fontWeight = '500';
  confirmButton.style.transition = 'all 0.2s ease';
  confirmButton.textContent = 'Xóa';

  // Thêm hiệu ứng hover
  cancelButton.onmouseover = function () {
    this.style.backgroundColor = '#e0e0e0';
  };
  cancelButton.onmouseout = function () {
    this.style.backgroundColor = '#f1f1f1';
  };

  confirmButton.onmouseover = function () {
    this.style.backgroundColor = '#d32f2f';
  };
  confirmButton.onmouseout = function () {
    this.style.backgroundColor = '#f44336';
  };

  // Thêm sự kiện
  cancelButton.onclick = function () {
    overlay.remove();
  };

  confirmButton.onclick = function () {
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
    overlay.remove();
  };

  // Thêm các phần tử vào hộp thoại
  dialogButtons.appendChild(cancelButton);
  dialogButtons.appendChild(confirmButton);

  dialogContainer.appendChild(dialogTitle);
  dialogContainer.appendChild(dialogMessage);
  dialogContainer.appendChild(dialogButtons);

  overlay.appendChild(dialogContainer);

  // Thêm style cho animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes dialogFadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(style);

  // Thêm overlay vào body
  document.body.appendChild(overlay);

  // Thêm sự kiện đóng khi nhấn Escape
  const handleKeyDown = function (e) {
    if (e.key === 'Escape') {
      overlay.remove();
      document.removeEventListener('keydown', handleKeyDown);
    }
  };

  document.addEventListener('keydown', handleKeyDown);
}

// Tạo nút lưu bài viết
function createSaveButton(postInfo) {
  console.log('Tạo nút lưu bài viết cho:', postInfo.title);

  const button = document.createElement('button');
  button.className = 'save-for-later';

  // Kiểm tra trạng thái lưu
  const isSaved = isPostSaved(postInfo.url);
  console.log('Trạng thái lưu hiện tại:', isSaved ? 'Đã lưu' : 'Chưa lưu');
  updateSaveButtonUI(button, isSaved);

  // Thêm sự kiện click
  button.addEventListener('click', function (e) {
    // Ngăn chặn hành vi mặc định và sự kiện nổi bọt
    e.preventDefault();
    e.stopPropagation();

    const currentlySaved = isPostSaved(postInfo.url);
    console.log(
      'Xử lý click nút lưu, trạng thái hiện tại:',
      currentlySaved ? 'Đã lưu' : 'Chưa lưu'
    );

    if (currentlySaved) {
      // Hiển thị hộp thoại xác nhận trước khi xóa
      showConfirmDialog(
        'Xác nhận xóa',
        `Bạn có chắc muốn xóa bài viết "${postInfo.title}" khỏi danh sách đọc sau không?`,
        () => {
          // Xóa bài viết sau khi xác nhận
          if (removePost(postInfo.url)) {
            updateSaveButtonUI(button, false);
            showNotification('Đã xóa bài viết khỏi danh sách đọc sau');
            updateSavedPostsCount();
            console.log('Đã xóa bài viết khỏi danh sách đọc sau');
          } else {
            console.log('Lỗi khi xóa bài viết');
          }
        }
      );
    } else {
      // Lưu bài viết
      if (savePost(postInfo)) {
        updateSaveButtonUI(button, true);
        showNotification('Đã lưu bài viết để đọc sau');
        updateSavedPostsCount();
        console.log('Đã lưu bài viết để đọc sau');
      } else {
        console.log('Lỗi khi lưu bài viết');
      }
    }

    return false;
  });

  // Thêm thông báo gợi ý cho nút lưu bài viết
  setTimeout(() => {
    // Kiểm tra xem nút còn tồn tại trong DOM không
    if (!document.body.contains(button)) return;

    // Lấy vị trí của nút lưu bài viết
    const buttonRect = button.getBoundingClientRect();

    // Tạo thông báo gợi ý
    const hint = document.createElement('div');
    hint.className = 'save-button-hint';
    hint.textContent = 'Lưu bài viết này để đọc sau!';
    hint.style.position = 'fixed';
    hint.style.backgroundColor = 'white';
    hint.style.color = '#0058dd';
    hint.style.padding = '8px 15px';
    hint.style.borderRadius = '20px';
    hint.style.fontSize = '0.9rem';
    hint.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    hint.style.zIndex = '1000';
    hint.style.fontWeight = '500';
    hint.style.border = '1px solid rgba(0, 88, 221, 0.2)';
    hint.style.whiteSpace = 'nowrap';
    hint.style.opacity = '0';
    hint.style.transition = 'opacity 0.3s ease';
    hint.style.pointerEvents = 'none'; // Đảm bảo hint không cản trở sự kiện click

    // Đặt vị trí dựa trên vị trí của nút lưu bài viết
    hint.style.top = buttonRect.top + buttonRect.height / 2 + 'px';
    hint.style.left = buttonRect.right + 15 + 'px';
    hint.style.transform = 'translateY(-50%)';

    // Điều chỉnh cho màn hình nhỏ hơn
    if (window.innerWidth <= 768) {
      hint.style.fontSize = '0.8rem';
      hint.style.padding = '6px 12px';
    }

    if (window.innerWidth <= 576) {
      hint.style.fontSize = '0.75rem';
      hint.style.padding = '5px 10px';
      hint.style.maxWidth = '150px';
      hint.style.whiteSpace = 'normal';
      hint.style.textAlign = 'center';
      hint.style.lineHeight = '1.3';
    }

    // Tạo mũi tên
    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.top = '50%';
    arrow.style.left = '-5px';
    arrow.style.transform = 'translateY(-50%) rotate(45deg)';
    arrow.style.width = '10px';
    arrow.style.height = '10px';
    arrow.style.backgroundColor = 'white';
    arrow.style.borderLeft = '1px solid rgba(0, 88, 221, 0.2)';
    arrow.style.borderBottom = '1px solid rgba(0, 88, 221, 0.2)';

    // Điều chỉnh mũi tên cho màn hình nhỏ hơn
    if (window.innerWidth <= 576) {
      arrow.style.width = '7px';
      arrow.style.height = '7px';
    }

    hint.appendChild(arrow);
    document.body.appendChild(hint);

    // Cập nhật vị trí khi cửa sổ thay đổi kích thước
    const updatePosition = function () {
      if (!document.body.contains(button)) {
        window.removeEventListener('resize', updatePosition);
        hint.remove();
        return;
      }

      const updatedRect = button.getBoundingClientRect();
      hint.style.top = updatedRect.top + updatedRect.height / 2 + 'px';
      hint.style.left = updatedRect.right + 15 + 'px';
    };

    window.addEventListener('resize', updatePosition);

    // Biến để theo dõi trạng thái hiển thị
    let isVisible = false;
    let hideTimeout;

    // Hiển thị thông báo sau 1 giây
    setTimeout(() => {
      if (!document.body.contains(button)) {
        hint.remove();
        return;
      }

      hint.style.opacity = '1';
      isVisible = true;

      // Ẩn thông báo sau 5 giây
      hideTimeout = setTimeout(() => {
        hint.style.opacity = '0';
        isVisible = false;

        // Xóa thông báo sau khi ẩn
        setTimeout(() => {
          if (!isVisible) {
            hint.remove();
          }
        }, 300);
      }, 5000);
    }, 1000);

    // Thêm sự kiện hover cho nút lưu bài viết
    button.addEventListener('mouseenter', function () {
      // Hủy bỏ timeout ẩn nếu đang có
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      hint.style.opacity = '1';
      isVisible = true;
    });

    button.addEventListener('mouseleave', function () {
      // Ẩn thông báo sau 2 giây khi rời chuột
      hideTimeout = setTimeout(() => {
        hint.style.opacity = '0';
        isVisible = false;

        // Xóa thông báo sau khi ẩn
        setTimeout(() => {
          if (!isVisible) {
            hint.remove();
          }
        }, 300);
      }, 2000);
    });
  }, 1000);

  return button;
}

// Cập nhật số lượng bài viết đã lưu
function updateSavedPostsCount() {
  const countElement = document.querySelector('.saved-posts-count');
  if (!countElement) return;

  const count = getSavedPosts().length;

  // Luôn hiển thị số lượng bài viết đã lưu
  countElement.textContent = count;

  // Ẩn số lượng nếu không có bài viết nào
  if (count === 0) {
    countElement.style.display = 'none';
  } else {
    countElement.style.display = 'flex';
  }
}

// Tạo danh sách bài viết đã lưu
function renderSavedPostsList(container) {
  if (!container) return;

  // Xóa nội dung hiện tại
  container.innerHTML = '';

  // Lấy danh sách bài viết đã lưu
  const posts = getSavedPosts();

  // Nếu không có bài viết nào
  if (posts.length === 0) {
    container.innerHTML = `
      <div class="saved-posts-empty">
        <i class="far fa-bookmark"></i>
        <p>Bạn chưa lưu bài viết nào</p>
        <a href="blog.html">Xem tất cả bài viết</a>
      </div>
    `;
    return;
  }

  // Sắp xếp bài viết theo thời gian lưu (mới nhất lên đầu)
  posts.sort((a, b) => new Date(b.savedAt) - new Date(a.savedAt));

  // Tạo danh sách bài viết
  posts.forEach((post) => {
    const item = document.createElement('div');
    item.className = 'saved-post-item';

    // Định dạng ngày lưu
    const savedDate = new Date(post.savedAt);
    const formattedDate = savedDate.toLocaleDateString('vi-VN');

    // Tìm hình ảnh cho bài viết (nếu có)
    let thumbnailHtml = '';
    if (post.image) {
      thumbnailHtml = `<div class="saved-post-thumbnail"><img src="${post.image}" alt="${post.title}"></div>`;
    } else {
      thumbnailHtml = `<div class="saved-post-thumbnail"><i class="fas fa-newspaper"></i></div>`;
    }

    item.innerHTML = `
      ${thumbnailHtml}
      <div class="saved-post-content">
        <h4 class="saved-post-title"><a href="${post.url}">${
      post.title
    }</a></h4>
        <div class="saved-post-meta">
          <span class="saved-post-date"><i class="far fa-calendar-alt"></i> ${
            post.date || formattedDate
          }</span>
          <button class="saved-post-remove" data-url="${post.url}">Xóa</button>
        </div>
      </div>
    `;

    container.appendChild(item);
  });

  // Thêm sự kiện xóa bài viết
  container.querySelectorAll('.saved-post-remove').forEach((button) => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('data-url');

      // Tìm tiêu đề bài viết để hiển thị trong hộp thoại xác nhận
      const postTitle = this.closest('.saved-post-item').querySelector(
        '.saved-post-title a'
      ).textContent;

      // Hiển thị hộp thoại xác nhận
      showConfirmDialog(
        'Xác nhận xóa',
        `Bạn có chắc muốn xóa bài viết "${postTitle}" khỏi danh sách đọc sau không?`,
        () => {
          // Hàm callback khi người dùng xác nhận xóa
          if (removePost(url)) {
            // Cập nhật lại danh sách
            renderSavedPostsList(container);

            // Cập nhật trạng thái nút lưu nếu đang ở trang chi tiết bài viết
            if (window.location.href === url) {
              const saveButton = document.querySelector('.save-for-later');
              if (saveButton) {
                updateSaveButtonUI(saveButton, false);
              }
            }

            // Cập nhật số lượng bài viết đã lưu
            updateSavedPostsCount();

            // Hiển thị thông báo
            showNotification('Đã xóa bài viết khỏi danh sách đọc sau');
          }
        }
      );
    });
  });
}

// Tạo container cho danh sách bài viết đã lưu
function createSavedPostsContainer() {
  console.log('Tạo container cho danh sách bài viết đã lưu...');

  // Xóa container cũ nếu đã tồn tại để tránh trùng lặp
  const existingContainer = document.querySelector('.saved-posts-container');
  if (existingContainer) {
    console.log('Container đã tồn tại, xóa để tạo mới');
    existingContainer.remove();
  }

  // Tạo overlay nền
  const overlay = document.createElement('div');
  overlay.className = 'saved-posts-overlay';

  // Thêm sự kiện click để đóng danh sách khi click vào overlay
  overlay.addEventListener('click', function () {
    toggleSavedPostsContainer(false);
  });

  // Tạo container
  const container = document.createElement('div');
  container.className = 'saved-posts-container';

  // Tạo header
  const header = document.createElement('div');
  header.className = 'saved-posts-header';
  header.innerHTML = `
    <h3><i class="fas fa-bookmark"></i> Bài viết đã lưu</h3>
    <button class="saved-posts-close"><i class="fas fa-times"></i></button>
  `;

  // Tạo danh sách bài viết
  const list = document.createElement('div');
  list.className = 'saved-posts-list';

  // Tạo footer
  const footer = document.createElement('div');
  footer.className = 'saved-posts-footer';
  footer.innerHTML = `
    <button class="saved-posts-clear"><i class="fas fa-trash-alt"></i> Xóa tất cả</button>
    <a href="blog.html" class="saved-posts-view-all"><i class="fas fa-newspaper"></i> Xem tất cả bài viết</a>
  `;

  // Thêm các phần tử vào container
  container.appendChild(header);
  container.appendChild(list);
  container.appendChild(footer);

  // Thêm overlay và container vào body
  document.body.appendChild(overlay);
  document.body.appendChild(container);
  console.log('Đã thêm container vào body');

  // Render danh sách bài viết
  renderSavedPostsList(list);

  // Thêm sự kiện đóng container
  container
    .querySelector('.saved-posts-close')
    .addEventListener('click', function () {
      toggleSavedPostsContainer(false);
    });

  // Thêm sự kiện xóa tất cả
  container
    .querySelector('.saved-posts-clear')
    .addEventListener('click', function () {
      clearAllSavedPosts();
    });

  return container;
}

// Hàm mở/đóng danh sách bài viết đã lưu
function toggleSavedPostsContainer(open) {
  const container = document.querySelector('.saved-posts-container');
  const overlay = document.querySelector('.saved-posts-overlay');

  if (!container || !overlay) {
    return;
  }

  // Nếu không có tham số, thì toggle trạng thái hiện tại
  if (open === undefined) {
    open = !container.classList.contains('open');
  }

  if (open) {
    container.classList.add('open');
    overlay.classList.add('open');

    // Thêm sự kiện đóng khi nhấn Escape
    document.addEventListener('keydown', handleEscapeKey);

    // Render lại danh sách bài viết đã lưu
    renderSavedPostsList(container.querySelector('.saved-posts-list'));
  } else {
    container.classList.remove('open');
    overlay.classList.remove('open');

    // Xóa sự kiện đóng khi nhấn Escape
    document.removeEventListener('keydown', handleEscapeKey);
  }
}

// Hàm xử lý sự kiện nhấn phím Escape
function handleEscapeKey(e) {
  if (e.key === 'Escape') {
    toggleSavedPostsContainer(false);
  }
}

// Hàm xóa tất cả bài viết đã lưu
function clearAllSavedPosts() {
  // Hiển thị hộp thoại xác nhận
  if (confirm('Bạn có chắc muốn xóa tất cả bài viết đã lưu không?')) {
    // Xóa tất cả bài viết đã lưu
    savePosts([]);

    // Cập nhật số lượng bài viết đã lưu
    updateSavedPostsCount();

    // Cập nhật trạng thái nút lưu bài viết trên trang chi tiết bài viết
    const saveButton = document.querySelector('.save-for-later');
    if (saveButton) {
      updateSaveButtonUI(saveButton, false);
    }

    // Render lại danh sách bài viết đã lưu
    const container = document.querySelector('.saved-posts-container');
    if (container) {
      renderSavedPostsList(container.querySelector('.saved-posts-list'));
    }

    // Hiển thị thông báo
    showNotification('Đã xóa tất cả bài viết đã lưu');
  }
}

// Tạo nút hiển thị danh sách bài viết đã lưu
function createSavedPostsToggle() {
  console.log('Tạo nút hiển thị danh sách bài viết đã lưu...');

  // Xóa nút cũ nếu đã tồn tại để tránh trùng lặp
  const existingToggle = document.querySelector('.saved-posts-toggle');
  if (existingToggle) {
    console.log('Nút hiển thị đã tồn tại, xóa để tạo mới');
    existingToggle.remove();
  }

  // Tạo nút
  const toggle = document.createElement('button');
  toggle.className = 'saved-posts-toggle';
  toggle.innerHTML = `
    <i class="fas fa-bookmark"></i>
    <span class="saved-posts-count">0</span>
  `;
  toggle.setAttribute('title', 'Bài viết đã lưu');

  // Thêm sự kiện click để mở danh sách bài viết đã lưu
  toggle.addEventListener('click', function () {
    // Tạo container nếu chưa có
    if (!document.querySelector('.saved-posts-container')) {
      createSavedPostsContainer();
    }

    // Mở danh sách bài viết đã lưu
    toggleSavedPostsContainer(true);
  });

  // Thêm nút vào body
  document.body.appendChild(toggle);
  console.log('Đã thêm nút hiển thị danh sách bài viết đã lưu vào trang');

  // Cập nhật số lượng bài viết đã lưu
  updateSavedPostsCount();

  // Tạo và thêm thông báo gợi ý
  setTimeout(() => {
    // Lấy vị trí của nút toggle
    const toggleRect = toggle.getBoundingClientRect();

    const hint = document.createElement('div');
    hint.className = 'saved-posts-hint';
    hint.textContent = 'Lưu bài viết này để đọc sau!';
    hint.style.position = 'fixed';
    hint.style.backgroundColor = 'white';
    hint.style.color = '#0058dd';
    hint.style.padding = '8px 15px';
    hint.style.borderRadius = '20px';
    hint.style.fontSize = '0.9rem';
    hint.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    hint.style.zIndex = '1000';
    hint.style.fontWeight = '500';
    hint.style.border = '1px solid rgba(0, 88, 221, 0.2)';
    hint.style.whiteSpace = 'nowrap';
    hint.style.opacity = '0';
    hint.style.transition = 'opacity 0.3s ease';
    hint.style.pointerEvents = 'none'; // Đảm bảo hint không cản trở sự kiện click

    // Đặt vị trí dựa trên vị trí của nút toggle
    hint.style.top = toggleRect.top + toggleRect.height / 2 + 'px';
    hint.style.right = window.innerWidth - toggleRect.left + 15 + 'px';
    hint.style.transform = 'translateY(-50%)';

    // Điều chỉnh cho màn hình nhỏ hơn
    if (window.innerWidth <= 768) {
      hint.style.fontSize = '0.8rem';
      hint.style.padding = '6px 12px';
    }

    if (window.innerWidth <= 576) {
      hint.style.fontSize = '0.75rem';
      hint.style.padding = '5px 10px';
      hint.style.maxWidth = '150px';
      hint.style.whiteSpace = 'normal';
      hint.style.textAlign = 'center';
      hint.style.lineHeight = '1.3';
    }

    // Tạo mũi tên
    const arrow = document.createElement('div');
    arrow.style.position = 'absolute';
    arrow.style.top = '50%';
    arrow.style.right = '-5px';
    arrow.style.transform = 'translateY(-50%) rotate(45deg)';
    arrow.style.width = '10px';
    arrow.style.height = '10px';
    arrow.style.backgroundColor = 'white';
    arrow.style.borderRight = '1px solid rgba(0, 88, 221, 0.2)';
    arrow.style.borderBottom = '1px solid rgba(0, 88, 221, 0.2)';

    // Điều chỉnh mũi tên cho màn hình nhỏ hơn
    if (window.innerWidth <= 576) {
      arrow.style.width = '7px';
      arrow.style.height = '7px';
    }

    hint.appendChild(arrow);
    document.body.appendChild(hint);

    // Cập nhật vị trí khi cửa sổ thay đổi kích thước
    window.addEventListener('resize', function () {
      const updatedRect = toggle.getBoundingClientRect();
      hint.style.top = updatedRect.top + updatedRect.height / 2 + 'px';
      hint.style.right = window.innerWidth - updatedRect.left + 15 + 'px';
    });

    // Biến để theo dõi trạng thái hiển thị
    let isVisible = false;
    let hideTimeout;

    // Hiển thị thông báo sau 1.5 giây
    setTimeout(() => {
      hint.style.opacity = '1';
      isVisible = true;

      // Ẩn thông báo sau 6 giây
      hideTimeout = setTimeout(() => {
        hint.style.opacity = '0';
        isVisible = false;

        // Xóa thông báo sau khi ẩn
        setTimeout(() => {
          if (!isVisible) {
            // Chỉ xóa nếu không đang hiển thị
            hint.remove();
          }
        }, 300);
      }, 6000);
    }, 1500);

    // Thêm sự kiện hover cho nút bookmark
    toggle.addEventListener('mouseenter', function () {
      // Hủy bỏ timeout ẩn nếu đang có
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      hint.style.opacity = '1';
      isVisible = true;
    });

    toggle.addEventListener('mouseleave', function () {
      // Ẩn thông báo sau 2 giây khi rời chuột
      hideTimeout = setTimeout(() => {
        hint.style.opacity = '0';
        isVisible = false;

        // Xóa thông báo sau khi ẩn
        setTimeout(() => {
          if (!isVisible) {
            // Chỉ xóa nếu không đang hiển thị
            hint.remove();
          }
        }, 300);
      }, 2000);
    });
  }, 500);

  return toggle;
}

// Khởi tạo tính năng lưu bài viết
function initSaveForLaterFeature() {
  console.log('Khởi tạo tính năng lưu bài viết...');

  // Kiểm tra xem đang ở trang nào
  const isBlogDetail = window.location.href.includes('blog-detail.html');
  const isBlogPage = window.location.href.includes('blog.html');

  // Nếu không phải trang blog-detail.html hoặc blog.html, bỏ qua khởi tạo
  if (!isBlogDetail && !isBlogPage) {
    console.log('Không phải trang blog, bỏ qua khởi tạo');
    return;
  }

  // Nếu là trang blog.html, chỉ tạo nút hiển thị danh sách bài viết đã lưu
  if (isBlogPage) {
    console.log(
      'Đang ở trang blog, tạo nút hiển thị danh sách bài viết đã lưu'
    );
    createSavedPostsToggle();
    return;
  }

  // Lấy thông tin bài viết hiện tại
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  if (!postId) {
    console.log('Không tìm thấy ID bài viết trong URL');
    return; // Thoát nếu không có ID bài viết
  }

  // Đợi một chút để đảm bảo DOM đã được tải đầy đủ
  setTimeout(() => {
    const postTitleElement = document.querySelector('.blog-title');
    // Tìm kiếm phần tử ngày theo nhiều cách khác nhau để đảm bảo tìm được
    let postDateElement = document.querySelector('.blog-date span');
    if (!postDateElement) {
      postDateElement = document.querySelector('.blog-date');
    }

    if (!postTitleElement) {
      console.log('Không tìm thấy tiêu đề bài viết trong DOM');
      return; // Thoát nếu không tìm thấy tiêu đề
    }

    const postTitle = postTitleElement.textContent.trim();
    const postDate = postDateElement ? postDateElement.textContent.trim() : '';
    const postUrl = window.location.href;

    // Tìm hình ảnh bài viết
    let postImage = '';
    const blogImage = document.querySelector('.blog-image img');
    if (blogImage && blogImage.src) {
      postImage = blogImage.src;
    } else {
      // Tìm hình ảnh đầu tiên trong nội dung bài viết
      const contentImage = document.querySelector('#blog-content img');
      if (contentImage && contentImage.src) {
        postImage = contentImage.src;
      }
    }

    console.log('Thông tin bài viết:', {
      id: postId,
      title: postTitle,
      date: postDate,
      image: postImage,
    });

    // Tạo thông tin bài viết
    const postInfo = {
      id: postId,
      title: postTitle,
      date: postDate,
      url: postUrl,
      image: postImage,
    };

    // Kiểm tra xem nút lưu đã tồn tại chưa
    let existingSaveButton = document.querySelector('.save-for-later');
    if (existingSaveButton) {
      console.log('Nút lưu bài viết đã tồn tại, cập nhật trạng thái');
      updateSaveButtonUI(existingSaveButton, isPostSaved(postUrl));
      return;
    }

    // Tạo nút lưu bài viết
    const saveButton = createSaveButton(postInfo);

    // Tạo container cho nút lưu bài viết
    const saveButtonContainer = document.createElement('div');
    saveButtonContainer.className = 'save-button-container';
    saveButtonContainer.style.display = 'flex';
    saveButtonContainer.style.justifyContent = 'flex-start';
    saveButtonContainer.style.marginTop = '20px';
    saveButtonContainer.appendChild(saveButton);

    // Thêm nút vào trang
    const blogContent = document.getElementById('blog-content');
    if (blogContent) {
      // Chèn vào trước phần nội dung hoặc sau mục lục nếu có
      const tableOfContents = blogContent.querySelector('.table-of-contents');
      if (tableOfContents) {
        tableOfContents.after(saveButtonContainer);
      } else {
        blogContent.prepend(saveButtonContainer);
      }
      console.log('Đã thêm nút lưu bài viết vào trang');
    } else {
      console.log('Không tìm thấy phần nội dung bài viết');
    }

    // Tạo nút hiển thị danh sách bài viết đã lưu
    createSavedPostsToggle();
  }, 300); // Đợi 300ms để đảm bảo DOM đã được tải
}

// Export các hàm để sử dụng ở nơi khác
window.SavedPostsManager = {
  initSaveForLaterFeature,
  createSavedPostsToggle,
  updateSavedPostsCount,
  getSavedPosts,
  savePost,
  removePost,
  clearAllSavedPosts,
  toggleSavedPostsContainer,
};

// Tự động khởi tạo tính năng lưu bài viết khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  initSaveForLaterFeature();
});

// Khởi tạo khi trang được tải qua AJAX (nếu có)
document.addEventListener('ajaxPageLoaded', function () {
  initSaveForLaterFeature();
});

// Khởi tạo khi hoàn tất chuyển trang (nếu có)
document.addEventListener('page-transition-complete', function () {
  initSaveForLaterFeature();
});
