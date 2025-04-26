/**
 * View Counter Enhanced - Hệ thống đếm lượt xem nâng cao
 *
 * File này chứa các chức năng nâng cao cho hệ thống đếm lượt xem của blog,
 * bao gồm:
 * - Mô hình tăng trưởng lượt xem tự nhiên
 * - Hiệu ứng "đang xem" để tạo cảm giác có người dùng thực đang xem bài viết
 * - Hiệu ứng tăng lượt xem trong thời gian thực
 * - Xử lý mượt mà khi admin thay đổi lượt xem thủ công
 */

// Đối tượng chứa tất cả các chức năng của hệ thống đếm lượt xem nâng cao
const ViewCounterEnhanced = {
  // Cấu hình hệ thống
  config: {
    // Thời gian cập nhật số người đang xem (ms)
    currentViewersUpdateInterval: {
      min: 30000, // 30 giây
      max: 60000, // 60 giây
    },
    // Thời gian hiển thị thông báo có người mới xem (ms)
    newViewerNotificationDuration: 5000, // 5 giây
    // Thời gian giữa các lần tăng lượt xem giả lập (ms)
    simulatedViewIncreaseInterval: {
      min: 180000, // 3 phút
      max: 300000, // 5 phút
    },
    // Thời gian chờ trước khi hiển thị thông báo lượt xem mới (ms)
    initialViewIncreaseDelay: {
      min: 120000, // 2 phút
      max: 180000, // 3 phút
    },
    // Số lượng lượt xem tăng mỗi lần giả lập
    simulatedViewIncreaseAmount: {
      min: 1,
      max: 3,
    },
    // Tốc độ hiệu ứng đếm số (ms)
    countAnimationSpeed: 200,
    // Số lượng thông báo tối đa hiển thị cùng lúc
    maxNotifications: 3,
  },

  // Biến lưu trữ dữ liệu
  data: {
    // ID bài viết hiện tại
    currentPostId: null,
    // Thông tin bài viết hiện tại
    currentPost: null,
    // Số người đang xem hiện tại
    currentViewers: 0,
    // ID của timeout để cập nhật số người đang xem
    currentViewersTimeoutId: null,
    // ID của timeout để tăng lượt xem giả lập
    simulatedViewIncreaseTimeoutId: null,
    // Lưu trữ giá trị baseViews trước đó
    previousBaseViews: {},
  },

  /**
   * Khởi tạo hệ thống đếm lượt xem nâng cao
   * @param {number} postId - ID của bài viết hiện tại
   */
  init: function (postId) {
    // Lưu ID bài viết hiện tại
    this.data.currentPostId = postId;

    // Tìm bài viết theo ID
    this.data.currentPost = posts.find((p) => p.id === postId);
    if (!this.data.currentPost) return;

    // Tạo các phần tử UI cần thiết
    this.createUIElements();

    // Khởi tạo giá trị baseViews nếu chưa có
    this.initBaseViews();

    // Cập nhật số người đang xem
    this.updateCurrentViewers();

    // Bắt đầu giả lập tăng lượt xem
    this.startSimulatedViewIncrease();

    // Xử lý khi admin thay đổi lượt xem thủ công
    this.handleManualViewChange();

    console.log(
      'ViewCounterEnhanced: Đã khởi tạo hệ thống đếm lượt xem nâng cao cho bài viết ID',
      postId
    );
  },

  /**
   * Tạo các phần tử UI cần thiết
   */
  createUIElements: function () {
    // Tạo phần tử hiển thị số người đang xem
    this.createCurrentViewersElement();

    // Tạo phần tử thông báo lượt xem mới
    this.createViewNotificationElement();

    // Thêm CSS cho các phần tử mới
    this.addStyles();
  },

  /**
   * Tạo phần tử hiển thị số người đang xem
   */
  createCurrentViewersElement: function () {
    // Kiểm tra xem phần tử đã tồn tại chưa
    if (document.getElementById('current-viewers-container')) return;

    // Tìm phần tử cha để chèn vào
    const blogMetaElement = document.querySelector('.blog-meta');
    if (!blogMetaElement) {
      console.error('Không tìm thấy phần tử .blog-meta');
      return;
    }

    // Tìm phần tử hiển thị lượt xem
    const blogViewsElement = blogMetaElement.querySelector('.blog-views');
    if (!blogViewsElement) {
      console.error('Không tìm thấy phần tử .blog-views');
      // Nếu không tìm thấy phần tử lượt xem, vẫn thêm vào blog-meta

      // Tạo phần tử hiển thị số người đang xem
      const currentViewersContainer = document.createElement('div');
      currentViewersContainer.id = 'current-viewers-container';
      currentViewersContainer.className = 'blog-current-viewers';
      currentViewersContainer.innerHTML = `
        <i class="fas fa-user-friends"></i>
        <span id="current-viewers-count">0</span>&nbsp;người đang xem
      `;

      // Thêm vào cuối blog-meta
      blogMetaElement.appendChild(currentViewersContainer);
      return;
    }

    // Tạo phần tử hiển thị số người đang xem
    const currentViewersContainer = document.createElement('div');
    currentViewersContainer.id = 'current-viewers-container';
    currentViewersContainer.className = 'blog-current-viewers';
    currentViewersContainer.innerHTML = `
      <i class="fas fa-user-friends"></i>
      <span id="current-viewers-count">0</span>&nbsp;người đang xem
    `;

    // Thêm vào sau phần tử hiển thị lượt xem
    blogViewsElement.insertAdjacentElement('afterend', currentViewersContainer);
    console.log('Đã tạo phần tử hiển thị số người đang xem');
  },

  /**
   * Tạo phần tử thông báo lượt xem mới
   */
  createViewNotificationElement: function () {
    // Kiểm tra xem phần tử đã tồn tại chưa
    if (document.getElementById('view-notification-container')) return;

    // Tạo phần tử chứa thông báo
    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'view-notification-container';

    // Thêm vào trang
    document.body.appendChild(notificationContainer);
  },

  /**
   * Thêm CSS cho các phần tử mới
   */
  addStyles: function () {
    // Kiểm tra xem style đã tồn tại chưa
    if (document.getElementById('view-counter-enhanced-styles')) return;

    // Tạo phần tử style
    const styleElement = document.createElement('style');
    styleElement.id = 'view-counter-enhanced-styles';
    styleElement.textContent = `
      /* Phần tử hiển thị số người đang xem */
      .blog-current-viewers {
        display: flex;
        align-items: center;
        background-color: rgba(0, 88, 221, 0.1);
        color: #0058dd;
        padding: 4px 10px;
        border-radius: 20px;
        font-size: 0.85rem;
        margin-left: 10px;
        animation: pulse-viewers 2s infinite;
      }

      .blog-current-viewers i {
        margin-right: 5px;
        font-size: 0.9rem;
      }

      @keyframes pulse-viewers {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 88, 221, 0.4);
        }
        70% {
          box-shadow: 0 0 0 6px rgba(0, 88, 221, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(0, 88, 221, 0);
        }
      }

      /* Thông báo lượt xem mới */
      #view-notification-container {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
      }

      .view-notification {
        background-color: #fff;
        color: #333;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        margin-top: 10px;
        display: flex;
        align-items: center;
        transform: translateX(120%);
        transition: transform 0.3s ease;
        border-left: 4px solid #0058dd;
      }

      .view-notification.show {
        transform: translateX(0);
      }

      .view-notification i {
        color: #0058dd;
        margin-right: 10px;
        font-size: 1.1rem;
      }

      /* Hiệu ứng đếm số */
      .count-animation {
        transition: color 0.3s ease;
      }

      .count-animation.highlight {
        color: #f97316;
      }

      /* Responsive */
      @media (max-width: 576px) {
        .blog-current-viewers {
          font-size: 0.8rem;
          padding: 3px 8px;
        }

        .view-notification {
          padding: 10px 15px;
          font-size: 0.9rem;
          max-width: 90%;
        }
      }
    `;

    // Thêm vào trang
    document.head.appendChild(styleElement);
  },

  /**
   * Khởi tạo giá trị baseViews nếu chưa có
   */
  initBaseViews: function () {
    const post = this.data.currentPost;
    if (!post) return;

    // Nếu chưa có baseViews, sử dụng giá trị views hiện tại
    if (post.baseViews === undefined) {
      post.baseViews = post.views || 0;
      post.views = 0;
    }

    // Lấy giá trị baseViews trước đó từ localStorage
    const previousBaseViewsData = localStorage.getItem('previousBaseViews');
    if (previousBaseViewsData) {
      this.data.previousBaseViews = JSON.parse(previousBaseViewsData);
    }
  },

  /**
   * Cập nhật số người đang xem
   */
  updateCurrentViewers: function () {
    const post = this.data.currentPost;
    if (!post) return;

    // Hủy timeout cũ nếu có
    if (this.data.currentViewersTimeoutId) {
      clearTimeout(this.data.currentViewersTimeoutId);
    }

    // Tính số người đang xem dựa trên tuổi bài viết và danh mục
    const viewersCount = this.calculateCurrentViewers(post);

    // Cập nhật hiển thị
    const currentViewersElement = document.getElementById(
      'current-viewers-count'
    );
    if (currentViewersElement) {
      // Lưu giá trị cũ để so sánh
      const oldValue = this.data.currentViewers;

      // Cập nhật giá trị mới
      this.data.currentViewers = viewersCount;
      currentViewersElement.textContent = viewersCount;

      // Hiển thị/ẩn phần tử dựa trên số người đang xem
      const container = document.getElementById('current-viewers-container');
      if (container) {
        if (viewersCount > 0) {
          container.style.display = 'flex';

          // Thêm hiệu ứng nếu số người đang xem thay đổi
          if (oldValue !== viewersCount) {
            // Hiệu ứng nhấp nháy cho số người đang xem
            currentViewersElement.classList.add('highlight');
            setTimeout(() => {
              currentViewersElement.classList.remove('highlight');
            }, 1000);

            // Hiệu ứng nhấp nháy cho container
            const container = document.getElementById(
              'current-viewers-container'
            );
            if (container) {
              container.style.transform = 'scale(1.1)';
              setTimeout(() => {
                container.style.transform = 'scale(1)';
              }, 300);
            }

            // Hiển thị thông báo nếu số người đang xem tăng
            if (viewersCount > oldValue) {
              this.showCurrentViewersNotification(viewersCount - oldValue);
            }
          }
        } else {
          container.style.display = 'none';
        }
      }
    }

    // Đặt timeout để cập nhật lại sau một khoảng thời gian
    const updateInterval = this.getRandomInRange(
      this.config.currentViewersUpdateInterval.min,
      this.config.currentViewersUpdateInterval.max
    );

    this.data.currentViewersTimeoutId = setTimeout(() => {
      this.updateCurrentViewers();
    }, updateInterval);
  },

  /**
   * Tính số người đang xem dựa trên tuổi bài viết và danh mục
   * @param {Object} post - Bài viết cần tính số người đang xem
   * @returns {number} - Số người đang xem
   */
  calculateCurrentViewers: function (post) {
    // Tính tuổi bài viết (ngày)
    const postAge = this.getPostAge(post);

    // Xác định số người đang xem cơ bản dựa trên tuổi bài viết
    let baseViewers;
    if (postAge <= 7) {
      // Bài viết mới (1-7 ngày): 2-5 người đang xem
      baseViewers = this.getRandomInRange(2, 5);
    } else if (postAge <= 30) {
      // Bài viết trung bình (8-30 ngày): 1-3 người đang xem
      baseViewers = this.getRandomInRange(1, 3);
    } else {
      // Bài viết cũ (>30 ngày): 0-1 người đang xem
      baseViewers = this.getRandomInRange(0, 1);
    }

    // Áp dụng hệ số danh mục
    const categoryFactor = this.getCategoryPopularityFactor(post.category);
    baseViewers = Math.round(baseViewers * categoryFactor);

    // Áp dụng hệ số thời gian trong ngày
    const timeOfDayFactor = this.getTimeOfDayFactor();
    baseViewers = Math.round(baseViewers * timeOfDayFactor);

    // Đảm bảo giá trị không âm
    return Math.max(0, baseViewers);
  },

  /**
   * Bắt đầu giả lập tăng lượt xem
   */
  startSimulatedViewIncrease: function () {
    // Hủy timeout cũ nếu có
    if (this.data.simulatedViewIncreaseTimeoutId) {
      clearTimeout(this.data.simulatedViewIncreaseTimeoutId);
    }

    // Đợi một khoảng thời gian trước khi bắt đầu
    const initialDelay = this.getRandomInRange(
      this.config.initialViewIncreaseDelay.min,
      this.config.initialViewIncreaseDelay.max
    );

    this.data.simulatedViewIncreaseTimeoutId = setTimeout(() => {
      this.simulateViewIncrease();
    }, initialDelay);
  },

  /**
   * Giả lập tăng lượt xem
   */
  simulateViewIncrease: function () {
    const postId = this.data.currentPostId;
    if (!postId) return;

    // Tạo số lượt xem ngẫu nhiên (1-3)
    const newViews = this.getRandomInRange(
      this.config.simulatedViewIncreaseAmount.min,
      this.config.simulatedViewIncreaseAmount.max
    );

    // Hiển thị thông báo
    this.showViewNotification(newViews);

    // Cập nhật số lượt xem hiển thị
    this.updateViewCountDisplay(postId, newViews);

    // Lặp lại quá trình sau một khoảng thời gian
    const nextInterval = this.getRandomInRange(
      this.config.simulatedViewIncreaseInterval.min,
      this.config.simulatedViewIncreaseInterval.max
    );

    this.data.simulatedViewIncreaseTimeoutId = setTimeout(() => {
      this.simulateViewIncrease();
    }, nextInterval);
  },

  /**
   * Hiển thị thông báo có người mới xem
   * @param {number} newViews - Số lượt xem mới
   */
  showViewNotification: function (newViews) {
    // Tạo phần tử thông báo
    const notification = document.createElement('div');
    notification.className = 'view-notification';
    notification.innerHTML = `<i class="far fa-eye"></i> Có thêm ${newViews} người vừa xem bài viết này`;

    // Thêm vào container
    const container = document.getElementById('view-notification-container');
    if (container) {
      // Thêm vào đầu container thay vì cuối
      if (container.firstChild) {
        container.insertBefore(notification, container.firstChild);
      } else {
        container.appendChild(notification);
      }

      // Hiển thị với hiệu ứng
      setTimeout(() => notification.classList.add('show'), 100);

      // Ẩn sau một khoảng thời gian
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
      }, this.config.newViewerNotificationDuration);

      // Giới hạn số lượng thông báo hiển thị cùng lúc
      this.limitNotifications(container);
    }
  },

  /**
   * Hiển thị thông báo khi số người đang xem tăng
   * @param {number} newViewers - Số người đang xem mới
   */
  showCurrentViewersNotification: function (newViewers) {
    // Tạo phần tử thông báo
    const notification = document.createElement('div');
    notification.className = 'view-notification';
    notification.innerHTML = `<i class="fas fa-user-friends"></i> Có thêm ${newViewers} người đang xem bài viết này`;

    // Thêm vào container
    const container = document.getElementById('view-notification-container');
    if (container) {
      // Thêm vào đầu container thay vì cuối
      if (container.firstChild) {
        container.insertBefore(notification, container.firstChild);
      } else {
        container.appendChild(notification);
      }

      // Hiển thị với hiệu ứng
      setTimeout(() => notification.classList.add('show'), 100);

      // Ẩn sau một khoảng thời gian
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
      }, this.config.newViewerNotificationDuration);

      // Giới hạn số lượng thông báo hiển thị cùng lúc
      this.limitNotifications(container);
    }
  },

  /**
   * Cập nhật số lượt xem hiển thị
   * @param {number} postId - ID của bài viết
   * @param {number} newViews - Số lượt xem mới cần thêm vào
   */
  updateViewCountDisplay: function (postId, newViews) {
    const viewsElement = document.getElementById('blog-views');
    if (!viewsElement) return;

    // Lấy số lượt xem hiện tại
    const currentViews = parseInt(viewsElement.textContent);

    // Cập nhật số lượt xem trong localStorage
    let viewsData = localStorage.getItem('blogPostViews');
    let views = viewsData ? JSON.parse(viewsData) : {};
    views[postId] = (views[postId] || 0) + newViews;
    localStorage.setItem('blogPostViews', JSON.stringify(views));

    // Cập nhật views trong đối tượng post
    const post = this.data.currentPost;
    if (post) {
      post.views = (post.views || 0) + newViews;
    }

    // Hiệu ứng đếm số
    this.animateCountUp(viewsElement, currentViews, currentViews + newViews);
  },

  /**
   * Hiệu ứng đếm số tăng dần
   * @param {HTMLElement} element - Phần tử hiển thị số
   * @param {number} start - Giá trị bắt đầu
   * @param {number} end - Giá trị kết thúc
   */
  animateCountUp: function (element, start, end) {
    // Thêm class để đánh dấu đang có hiệu ứng
    element.classList.add('count-animation');

    let current = start;
    const increment = Math.max(1, Math.ceil((end - start) / 10)); // Tăng ít nhất 1, tối đa 1/10 khoảng cách
    const timer = setInterval(() => {
      current += increment;

      // Nếu đã đạt hoặc vượt quá giá trị kết thúc
      if (current >= end) {
        element.textContent = end;
        element.classList.add('highlight');
        clearInterval(timer);

        // Xóa highlight sau 1 giây
        setTimeout(() => {
          element.classList.remove('highlight');
          element.classList.remove('count-animation');
        }, 1000);
      } else {
        element.textContent = current;
      }
    }, this.config.countAnimationSpeed);
  },

  /**
   * Xử lý khi admin thay đổi lượt xem thủ công
   */
  handleManualViewChange: function () {
    const post = this.data.currentPost;
    const postId = this.data.currentPostId;
    if (!post || !postId) return;

    // Lấy giá trị baseViews trước đó
    const previousBaseViews = this.data.previousBaseViews[postId] || 0;

    // Luôn cập nhật baseViews từ blog.js
    console.log(
      `Cập nhật lượt xem cơ sở: ${previousBaseViews} -> ${post.baseViews}`
    );

    // Lưu giá trị baseViews mới
    this.data.previousBaseViews[postId] = post.baseViews;
    localStorage.setItem(
      'previousBaseViews',
      JSON.stringify(this.data.previousBaseViews)
    );

    // Lấy tổng lượt xem hiện tại
    let viewsData = localStorage.getItem('blogPostViews');
    let views = viewsData ? JSON.parse(viewsData) : {};
    const userViews = views[postId] || 0;

    // Tính tổng lượt xem mới
    const totalViews = post.baseViews + userViews;

    // Cập nhật hiển thị với hiệu ứng
    const viewsElement = document.getElementById('blog-views');
    if (viewsElement) {
      const currentDisplayedViews = parseInt(viewsElement.textContent);
      // Chỉ hiển thị hiệu ứng nếu có sự thay đổi
      if (currentDisplayedViews !== totalViews) {
        this.animateCountUp(viewsElement, currentDisplayedViews, totalViews);
      } else {
        viewsElement.textContent = totalViews;
      }
    }
  },

  /**
   * Lấy tuổi của bài viết (ngày)
   * @param {Object} post - Bài viết cần tính tuổi
   * @returns {number} - Tuổi của bài viết (ngày)
   */
  getPostAge: function (post) {
    if (!post.blogDate) return 0;

    // Chuyển đổi chuỗi ngày thành đối tượng Date
    const dateParts = post.blogDate.split('/');
    const postDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

    // Tính số ngày từ ngày đăng đến hiện tại
    const now = new Date();
    const diffTime = Math.abs(now - postDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  },

  /**
   * Lấy hệ số phổ biến của danh mục
   * @param {string} category - Danh mục cần lấy hệ số
   * @returns {number} - Hệ số phổ biến
   */
  getCategoryPopularityFactor: function (category) {
    const popularCategories = ['Xu hướng', 'Mẹo thiết kế nội thất'];
    const lessPopularCategories = ['Công nghệ', 'Dự án'];

    if (popularCategories.includes(category)) {
      return 1.5;
    } else if (lessPopularCategories.includes(category)) {
      return 0.7;
    } else {
      return 1.0;
    }
  },

  /**
   * Lấy hệ số thời gian trong ngày
   * @returns {number} - Hệ số thời gian trong ngày
   */
  getTimeOfDayFactor: function () {
    const hour = new Date().getHours();

    if (hour >= 5 && hour <= 8) {
      return 0.7; // Sáng sớm
    } else if (hour >= 9 && hour <= 17) {
      return 1.2; // Giờ làm việc
    } else if (hour >= 18 && hour <= 23) {
      return 1.5; // Buổi tối
    } else {
      return 0.5; // Đêm khuya
    }
  },

  /**
   * Lấy số ngẫu nhiên trong khoảng
   * @param {number} min - Giá trị nhỏ nhất
   * @param {number} max - Giá trị lớn nhất
   * @returns {number} - Số ngẫu nhiên
   */
  getRandomInRange: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /**
   * Giới hạn số lượng thông báo hiển thị cùng lúc
   * @param {HTMLElement} container - Container chứa các thông báo
   */
  limitNotifications: function (container) {
    // Lấy tất cả các thông báo đang hiển thị
    const notifications = container.querySelectorAll('.view-notification');

    // Nếu số lượng thông báo vượt quá giới hạn
    if (notifications.length > this.config.maxNotifications) {
      // Xóa các thông báo cũ nhất (từ cuối container)
      for (
        let i = this.config.maxNotifications;
        i < notifications.length;
        i++
      ) {
        // Ẩn thông báo trước khi xóa
        notifications[i].classList.remove('show');

        // Xóa thông báo sau khi hiệu ứng ẩn hoàn tất
        setTimeout(() => {
          if (notifications[i] && notifications[i].parentNode) {
            notifications[i].remove();
          }
        }, 300);
      }
    }
  },

  /**
   * Dọn dẹp khi rời khỏi trang
   */
  cleanup: function () {
    // Hủy các timeout
    if (this.data.currentViewersTimeoutId) {
      clearTimeout(this.data.currentViewersTimeoutId);
    }

    if (this.data.simulatedViewIncreaseTimeoutId) {
      clearTimeout(this.data.simulatedViewIncreaseTimeoutId);
    }

    console.log(
      'ViewCounterEnhanced: Đã dọn dẹp hệ thống đếm lượt xem nâng cao'
    );
  },
};

// Khởi tạo khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
  // Kiểm tra xem có phải trang blog-detail không
  if (window.location.pathname.includes('blog-detail.html')) {
    // Lấy ID bài viết từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));

    if (postId) {
      // Khởi tạo hệ thống đếm lượt xem nâng cao
      ViewCounterEnhanced.init(postId);
    }
  }
});

// Khởi tạo khi trang được tải qua AJAX
document.addEventListener('ajaxPageLoaded', function (event) {
  // Kiểm tra xem có phải trang blog-detail không
  if (event.detail.url.includes('blog-detail.html')) {
    // Lấy ID bài viết từ URL
    const urlParams = new URLSearchParams(
      new URL(event.detail.url, window.location.origin).search
    );
    const postId = parseInt(urlParams.get('id'));

    if (postId) {
      // Dọn dẹp trước khi khởi tạo lại
      ViewCounterEnhanced.cleanup();

      // Khởi tạo hệ thống đếm lượt xem nâng cao
      setTimeout(() => {
        ViewCounterEnhanced.init(postId);
      }, 100);
    }
  }
});

// Dọn dẹp khi rời khỏi trang
window.addEventListener('beforeunload', function () {
  ViewCounterEnhanced.cleanup();
});
