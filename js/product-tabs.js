// Product Tabs Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Wait for product details to load
  setTimeout(initProductTabs, 1000);
});

function initProductTabs() {
  const tabsContainer = document.querySelector('.product-tabs');
  if (!tabsContainer) return;

  const tabs = document.querySelectorAll('.product-tab');
  const tabContents = document.querySelectorAll('.product-tab-content');

  // Set first tab as active by default
  if (tabs.length > 0 && !document.querySelector('.product-tab.active')) {
    tabs[0].classList.add('active');
    if (tabContents.length > 0) {
      tabContents[0].classList.add('active');
    }
  }

  // Add click event to tabs
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs and contents
      tabs.forEach((t) => t.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Show corresponding content
      const tabId = this.getAttribute('data-tab');
      const content = document.getElementById(tabId);
      if (content) {
        content.classList.add('active');
      }

      // Scroll to tab content on mobile
      if (window.innerWidth < 768) {
        // Get the header height
        const header = document.querySelector('header.main-header');
        const announcementBanner = document.querySelector(
          '.announcement-banner'
        );

        // Calculate total header height
        const headerHeight = header ? header.offsetHeight : 0;
        const announcementHeight =
          announcementBanner &&
          window.getComputedStyle(announcementBanner).display !== 'none'
            ? announcementBanner.offsetHeight
            : 0;
        const totalHeaderHeight = headerHeight + announcementHeight;

        // Calculate the position to scroll to
        const tabsOffset =
          tabsContainer.getBoundingClientRect().top + window.pageYOffset;

        // Scroll to the calculated position, accounting for header height
        window.scrollTo({
          top: tabsOffset - totalHeaderHeight - 20, // 20px extra padding
          behavior: 'smooth',
        });
      }
    });
  });

  // Update review count
  updateReviewCount();
}

function updateReviewCount() {
  const reviewTab = document.querySelector('[data-tab="product-reviews"]');
  if (!reviewTab) return;

  const reviewCountElement = reviewTab.querySelector('.tab-count');
  if (!reviewCountElement) return;

  // Get current product
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  if (!productId || !window.products) return;

  const product = window.products.find((p) => p.id === parseInt(productId));
  if (!product) return;

  // Get review count from product data
  const reviewCount = product.reviews ? product.reviews.length : 0;
  reviewCountElement.textContent = reviewCount;
}

// Function to populate tab content based on product data
function populateTabContent(product) {
  if (!product) return;

  // Populate description tab
  const descriptionContent = document.getElementById('product-description');
  if (descriptionContent) {
    // Check if product has detailed description
    if (product.detailedDescription) {
      let descriptionHTML = '<div class="product-description-content">';

      // Add specifications if available (moved to the top)
      console.log('Product object:', product);

      descriptionHTML += '<div class="product-specifications">';
      descriptionHTML += '<h3>Thông số kỹ thuật</h3>';
      descriptionHTML += '<table class="specifications-table">';

      // Check if product has specifications
      if (
        product.specifications &&
        typeof product.specifications === 'object'
      ) {
        // Use specifications from product object
        for (const [key, value] of Object.entries(product.specifications)) {
          descriptionHTML += `
              <tr>
                  <td class="spec-name">${key}</td>
                  <td class="spec-value">${value}</td>
              </tr>
          `;
        }
      } else {
        // Fallback to basic specifications if specifications object is not available
        descriptionHTML += `
            <tr>
                <td class="spec-name">Kích thước</td>
                <td class="spec-value">${product.size || 'Chưa cập nhật'}</td>
            </tr>
            <tr>
                <td class="spec-name">Chất liệu</td>
                <td class="spec-value">${
                  product.material || 'Chưa cập nhật'
                }</td>
            </tr>
            <tr>
                <td class="spec-name">Danh mục</td>
                <td class="spec-value">${
                  product.category || 'Chưa cập nhật'
                }</td>
            </tr>
            <tr>
                <td class="spec-name">Bảo hành</td>
                <td class="spec-value">${
                  product.warranty || 'Chưa cập nhật'
                }</td>
            </tr>
            <tr>
                <td class="spec-name">Mã sản phẩm</td>
                <td class="spec-value">${product.sku || 'Chưa cập nhật'}</td>
            </tr>
        `;
      }

      descriptionHTML += '</table>';
      descriptionHTML += '</div>';

      // Add content from detailedDescription
      descriptionHTML += product.detailedDescription.content;

      // Add images if available
      if (
        product.detailedDescription.images &&
        product.detailedDescription.images.length > 0
      ) {
        descriptionHTML += '<div class="description-images">';
        product.detailedDescription.images.forEach((image) => {
          descriptionHTML += `
                        <div class="description-image-container">
                            <img src="${image.src}" alt="${
            image.caption || product.name
          }" class="description-image">
                            ${
                              image.caption
                                ? `<p class="description-image-caption">${image.caption}</p>`
                                : ''
                            }
                        </div>
                    `;
        });
        descriptionHTML += '</div>';
      }

      descriptionHTML += '</div>';
      descriptionContent.innerHTML = descriptionHTML;
    } else {
      // Fallback to basic description if detailed description is not available
      let descriptionHTML = '<div class="product-description-content">';

      // Add specifications if available (moved to the top)
      console.log('Fallback - Product object:', product);

      descriptionHTML += '<div class="product-specifications">';
      descriptionHTML += '<h3>Thông số kỹ thuật</h3>';
      descriptionHTML += '<table class="specifications-table">';

      // Check if product has specifications
      if (
        product.specifications &&
        typeof product.specifications === 'object'
      ) {
        // Use specifications from product object
        for (const [key, value] of Object.entries(product.specifications)) {
          descriptionHTML += `
              <tr>
                  <td class="spec-name">${key}</td>
                  <td class="spec-value">${value}</td>
              </tr>
          `;
        }
      } else {
        // Fallback to basic specifications if specifications object is not available
        descriptionHTML += `
            <tr>
                <td class="spec-name">Kích thước</td>
                <td class="spec-value">${product.size || 'Chưa cập nhật'}</td>
            </tr>
            <tr>
                <td class="spec-name">Chất liệu</td>
                <td class="spec-value">${
                  product.material || 'Chưa cập nhật'
                }</td>
            </tr>
            <tr>
                <td class="spec-name">Danh mục</td>
                <td class="spec-value">${
                  product.category || 'Chưa cập nhật'
                }</td>
            </tr>
            <tr>
                <td class="spec-name">Bảo hành</td>
                <td class="spec-value">${
                  product.warranty || 'Chưa cập nhật'
                }</td>
            </tr>
            <tr>
                <td class="spec-name">Mã sản phẩm</td>
                <td class="spec-value">${product.sku || 'Chưa cập nhật'}</td>
            </tr>
        `;
      }

      descriptionHTML += '</table>';
      descriptionHTML += '</div>';

      descriptionHTML += `<h3>Mô tả chi tiết sản phẩm ${product.name}</h3>`;

      // Split description into paragraphs
      const paragraphs = product.description
        .split('\n')
        .filter((p) => p.trim() !== '');
      paragraphs.forEach((paragraph) => {
        descriptionHTML += `<p>${paragraph}</p>`;
      });

      descriptionHTML += '</div>';
      descriptionContent.innerHTML = descriptionHTML;
    }
  }

  // Populate reviews tab
  const reviewsContent = document.getElementById('product-reviews');
  if (reviewsContent) {
    let reviewsHTML = '<div class="product-reviews-content">';

    // Add review summary section
    if (product.reviews && product.reviews.length > 0) {
      // Count unique reviewers (non-anonymous)
      const uniqueReviewers = new Set();
      product.reviews.forEach((review) => {
        if (!review.isAnonymous) {
          uniqueReviewers.add(review.author);
        } else {
          // Count each anonymous review as a separate person
          uniqueReviewers.add('anonymous-' + Math.random());
        }
      });

      // Calculate average rating
      const totalRating = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
      );
      const averageRating = totalRating / product.reviews.length;

      // Count reviews by rating
      const ratingCounts = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0,
      };

      product.reviews.forEach((review) => {
        const rating = Math.floor(review.rating);
        if (rating >= 1 && rating <= 5) {
          ratingCounts[rating]++;
        }
      });

      reviewsHTML += `
        <div class="review-summary">
          <div class="review-summary-rating">
            <div class="rating-wrapper">
              <div class="average-rating">${averageRating.toFixed(
                1
              )}<span class="rating-max">/5</span></div>
              <div class="rating-stars">${generateStarRating(
                averageRating
              )}</div>
            </div>
            <div class="rating-count">Có bình luận (${
              product.reviews.length
            })</div>
          </div>

          <div class="review-filters">
            <div class="review-filter active" data-rating="all">Tất cả</div>
            <div class="review-filter" data-rating="5">
              <div class="filter-stars">${generateStarRating(5)}</div>
              <span class="filter-count">(${ratingCounts[5]})</span>
            </div>
            <div class="review-filter" data-rating="4">
              <div class="filter-stars">${generateStarRating(4)}</div>
              <span class="filter-count">(${ratingCounts[4]})</span>
            </div>
            <div class="review-filter" data-rating="3">
              <div class="filter-stars">${generateStarRating(3)}</div>
              <span class="filter-count">(${ratingCounts[3]})</span>
            </div>
            <div class="review-filter" data-rating="2">
              <div class="filter-stars">${generateStarRating(2)}</div>
              <span class="filter-count">(${ratingCounts[2]})</span>
            </div>
            <div class="review-filter" data-rating="1">
              <div class="filter-stars">${generateStarRating(1)}</div>
              <span class="filter-count">(${ratingCounts[1]})</span>
            </div>
          </div>
        </div>
      `;
    }

    if (product.reviews && product.reviews.length > 0) {
      // Pagination variables
      const reviewsPerPage = 6;
      const totalReviews = product.reviews.length;
      const totalPages = Math.ceil(totalReviews / reviewsPerPage);

      // Add a container for reviews with data attributes for pagination
      reviewsHTML += `<div class="reviews-container" data-current-page="1" data-total-pages="${totalPages}" data-reviews-per-page="${reviewsPerPage}">
        <div class="reviews-loading-overlay">
          <div class="spinner"></div>
        </div>
      `;

      // Render all reviews but only show the first page initially
      product.reviews.forEach((review, index) => {
        // Determine if this review should be visible on the first page
        const isVisible =
          index < reviewsPerPage ? '' : 'style="display: none;"';
        const pageNumber = Math.floor(index / reviewsPerPage) + 1;

        // Determine author display name based on isAnonymous flag
        const displayName = review.isAnonymous ? 'Ẩn danh' : review.author;

        // Determine avatar content
        let avatarContent = '';
        if (review.isAnonymous) {
          avatarContent = '<i class="fas fa-user-secret"></i>';
        } else if (review.avatar) {
          avatarContent = `<img src="${review.avatar}" alt="${displayName}" class="review-avatar-img">`;
        } else {
          avatarContent = displayName.charAt(0);
        }

        reviewsHTML += `
                    <div class="review" data-rating="${
                      review.rating
                    }" data-page="${pageNumber}" ${isVisible}>
                        <div class="review-header">
                            <div class="review-avatar ${
                              review.isAnonymous ? 'anonymous' : ''
                            }">${avatarContent}</div>
                            <div class="review-info">
                                <div class="review-author">${displayName}</div>
                                <div class="review-date">${review.date}</div>
                            </div>
                        </div>
                        <div class="review-rating">
                            ${generateStarRating(review.rating)}
                        </div>
                        <div class="review-content">
                            ${review.content}
                        </div>
                `;

        // Add review images if available
        if (review.images && review.images.length > 0) {
          reviewsHTML += '<div class="review-images">';
          review.images.forEach((image) => {
            reviewsHTML += `
                            <div class="review-image-container">
                                <img src="${image}" alt="Hình ảnh đánh giá" class="review-image" onclick="openLightbox('${image}')">
                            </div>
                        `;
          });
          reviewsHTML += '</div>';
        }

        // Add review videos if available
        if (review.videos && review.videos.length > 0) {
          reviewsHTML += '<div class="review-videos">';
          review.videos.forEach((video) => {
            reviewsHTML += `
                            <div class="review-video-container">
                                <video controls class="review-video">
                                    <source src="${video}" type="video/mp4">
                                    Trình duyệt của bạn không hỗ trợ video.
                                </video>
                            </div>
                        `;
          });
          reviewsHTML += '</div>';
        }

        // Add replies if available
        if (review.replies && review.replies.length > 0) {
          reviewsHTML += '<div class="review-replies">';
          review.replies.forEach((reply) => {
            // Determine reply avatar content
            let replyAvatarContent = '';
            if (reply.avatar) {
              replyAvatarContent = `<img src="${reply.avatar}" alt="${reply.author}" class="review-avatar-img">`;
            } else {
              replyAvatarContent = reply.author.charAt(0);
            }

            reviewsHTML += `
                <div class="review-reply ${reply.isAdmin ? 'admin-reply' : ''}">
                    <div class="review-header">
                        <div class="review-avatar ${
                          reply.isAdmin ? 'admin' : ''
                        }">${replyAvatarContent}</div>
                        <div class="review-info">
                            <div class="review-author">${reply.author} ${
              reply.isAdmin
                ? '<span class="admin-badge">Quản trị viên</span>'
                : ''
            }</div>
                            <div class="review-date">${reply.date}</div>
                        </div>
                    </div>
                    <div class="review-content">
                        ${reply.content}
                    </div>
                </div>
            `;
          });
          reviewsHTML += '</div>';
        }

        reviewsHTML += '</div>';
      });

      // Close the reviews container
      reviewsHTML += '</div>';

      // Add pagination controls if there are multiple pages
      if (totalPages > 1) {
        reviewsHTML += '<div class="reviews-pagination">';
        reviewsHTML += '<div class="pagination-controls">';

        // Previous page button
        reviewsHTML +=
          '<button class="pagination-prev" disabled><i class="fas fa-chevron-left"></i></button>';

        // Page numbers
        reviewsHTML += '<div class="pagination-numbers">';
        for (let i = 1; i <= totalPages; i++) {
          const activeClass = i === 1 ? 'active' : '';
          reviewsHTML += `<button class="pagination-number ${activeClass}" data-page="${i}">${i}</button>`;
        }
        reviewsHTML += '</div>';

        // Next page button
        const nextDisabled = totalPages === 1 ? 'disabled' : '';
        reviewsHTML += `<button class="pagination-next" ${nextDisabled}><i class="fas fa-chevron-right"></i></button>`;

        reviewsHTML += '</div>';
        reviewsHTML += '</div>';
      }
    } else {
      reviewsHTML += `
                <div class="no-reviews">
                    <i class="far fa-comment-dots"></i>
                    <p>Chưa có đánh giá nào cho sản phẩm này</p>
                </div>
            `;
    }

    reviewsHTML += '</div>';
    reviewsContent.innerHTML = reviewsHTML;
  }

  // Populate policy tab
  const policyContent = document.getElementById('product-policy');
  if (policyContent && product.policies) {
    let policyHTML = '<div class="product-policy-content">';

    // Shipping policy
    if (product.policies.shipping) {
      policyHTML += `
                <div class="policy-item">
                    <h4><i class="fas fa-truck"></i> Chính sách vận chuyển</h4>
                    <p>${product.policies.shipping}</p>
                </div>
            `;
    }

    // Returns policy
    if (product.policies.returns) {
      policyHTML += `
                <div class="policy-item">
                    <h4><i class="fas fa-exchange-alt"></i> Chính sách đổi trả</h4>
                    <p>${product.policies.returns}</p>
                </div>
            `;
    }

    // Warranty policy
    if (product.policies.warranty) {
      policyHTML += `
                <div class="policy-item">
                    <h4><i class="fas fa-shield-alt"></i> Chính sách bảo hành</h4>
                    <p>${product.policies.warranty}</p>
                </div>
            `;
    }

    // Payment policy
    if (product.policies.payment) {
      policyHTML += `
                <div class="policy-item">
                    <h4><i class="fas fa-credit-card"></i> Phương thức thanh toán</h4>
                    <p>${product.policies.payment}</p>
                </div>
            `;
    }

    policyHTML += '</div>';
    policyContent.innerHTML = policyHTML;
  } else if (policyContent) {
    // Default policy content if product doesn't have specific policies
    policyContent.innerHTML = `
            <div class="product-policy-content">
                <div class="policy-item">
                    <h4><i class="fas fa-truck"></i> Chính sách vận chuyển</h4>
                    <p>Miễn phí vận chuyển trong phạm vi 10km từ cửa hàng. Phí vận chuyển sẽ được tính dựa trên khoảng cách và khối lượng sản phẩm cho các khu vực khác.</p>
                </div>
                <div class="policy-item">
                    <h4><i class="fas fa-exchange-alt"></i> Chính sách đổi trả</h4>
                    <p>Quý khách có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm đổi trả phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng.</p>
                </div>
                <div class="policy-item">
                    <h4><i class="fas fa-shield-alt"></i> Chính sách bảo hành</h4>
                    <p>Sản phẩm được bảo hành chính hãng 10 năm cho các lỗi kỹ thuật. Bảo hành không áp dụng cho các trường hợp hư hỏng do sử dụng không đúng cách hoặc tự ý sửa chữa.</p>
                </div>
                <div class="policy-item">
                    <h4><i class="fas fa-credit-card"></i> Phương thức thanh toán</h4>
                    <p>Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ và các ví điện tử phổ biến như MoMo, ZaloPay.</p>
                </div>
            </div>
        `;
  }

  // Populate care tab
  const careContent = document.getElementById('product-care');
  if (careContent && product.care) {
    let careHTML = '<div class="product-care-content">';

    // Cleaning instructions
    if (product.care.cleaning) {
      careHTML += `
                <div class="care-item">
                    <h4><i class="fas fa-broom"></i> Vệ sinh thường xuyên</h4>
                    <p>${product.care.cleaning}</p>
                </div>
            `;
    }

    // Sunlight instructions
    if (product.care.sunlight) {
      careHTML += `
                <div class="care-item">
                    <h4><i class="fas fa-sun"></i> Tránh ánh nắng trực tiếp</h4>
                    <p>${product.care.sunlight}</p>
                </div>
            `;
    }

    // Humidity instructions
    if (product.care.humidity) {
      careHTML += `
                <div class="care-item">
                    <h4><i class="fas fa-tint-slash"></i> Tránh độ ẩm cao</h4>
                    <p>${product.care.humidity}</p>
                </div>
            `;
    }

    // Temperature instructions
    if (product.care.temperature) {
      careHTML += `
                <div class="care-item">
                    <h4><i class="fas fa-temperature-low"></i> Điều kiện nhiệt độ</h4>
                    <p>${product.care.temperature}</p>
            `;

      // Additional care tips
      if (product.care.tips && product.care.tips.length > 0) {
        careHTML += '<ul>';
        product.care.tips.forEach((tip) => {
          careHTML += `<li>${tip}</li>`;
        });
        careHTML += '</ul>';
      }

      careHTML += '</div>';
    }

    careHTML += '</div>';
    careContent.innerHTML = careHTML;
  } else if (careContent) {
    // Default care content if product doesn't have specific care instructions
    careContent.innerHTML = `
            <div class="product-care-content">
                <div class="care-item">
                    <h4><i class="fas fa-broom"></i> Vệ sinh thường xuyên</h4>
                    <p>Lau chùi sản phẩm thường xuyên bằng khăn mềm, khô hoặc hơi ẩm. Tránh sử dụng các chất tẩy rửa có tính axit hoặc kiềm mạnh.</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-sun"></i> Tránh ánh nắng trực tiếp</h4>
                    <p>Không đặt sản phẩm dưới ánh nắng mặt trời trực tiếp trong thời gian dài để tránh bạc màu và biến dạng.</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-tint-slash"></i> Tránh độ ẩm cao</h4>
                    <p>Không đặt sản phẩm ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với nước để tránh gỗ bị cong vênh, nấm mốc.</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-temperature-low"></i> Điều kiện nhiệt độ</h4>
                    <p>Duy trì sản phẩm ở nhiệt độ phòng ổn định, tránh thay đổi nhiệt độ đột ngột có thể gây nứt, cong vênh.</p>
                    <ul>
                        <li>Nhiệt độ lý tưởng: 18-24°C</li>
                        <li>Độ ẩm lý tưởng: 40-60%</li>
                    </ul>
                </div>
            </div>
        `;
  }
}

// Helper function to generate star rating HTML
function generateStarRating(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += '<i class="fas fa-star"></i>';
    } else if (i - 0.5 <= rating) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    } else {
      starsHTML += '<i class="far fa-star"></i>';
    }
  }
  return starsHTML;
}

// Function to initialize review pagination
function initReviewPagination() {
  const reviewsContainer = document.querySelector('.reviews-container');
  if (!reviewsContainer) return;

  const paginationNumbers = document.querySelectorAll('.pagination-number');
  const paginationPrev = document.querySelector('.pagination-prev');
  const paginationNext = document.querySelector('.pagination-next');

  if (!paginationNumbers.length) return;

  // Get pagination data
  let currentPage =
    parseInt(reviewsContainer.getAttribute('data-current-page')) || 1;
  const totalPages =
    parseInt(reviewsContainer.getAttribute('data-total-pages')) || 1;

  // Function to go to a specific page
  const goToPage = (pageNumber) => {
    // Show loading overlay
    const loadingOverlay = reviewsContainer.querySelector(
      '.reviews-loading-overlay'
    );
    if (loadingOverlay) {
      loadingOverlay.classList.add('active');
    }

    // Update current page
    currentPage = pageNumber;
    reviewsContainer.setAttribute('data-current-page', currentPage);

    // Update active page number
    paginationNumbers.forEach((button) => {
      const buttonPage = parseInt(button.getAttribute('data-page'));
      if (buttonPage === currentPage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Update prev/next buttons
    if (paginationPrev) {
      paginationPrev.disabled = currentPage === 1;
    }

    if (paginationNext) {
      paginationNext.disabled = currentPage === totalPages;
    }

    // Use setTimeout to create a small delay for the loading effect to be visible
    setTimeout(() => {
      // Show/hide reviews based on current page
      const reviews = document.querySelectorAll('.review');
      reviews.forEach((review) => {
        const reviewPage = parseInt(review.getAttribute('data-page'));
        if (reviewPage === currentPage) {
          review.style.display = 'block';
        } else {
          review.style.display = 'none';
        }
      });

      // Hide loading overlay after a short delay
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.classList.remove('active');
        }
      }, 500); // 500ms delay before hiding the loading overlay
    }, 500); // 500ms delay for the loading effect

    // Scroll to review summary instead of reviews container, accounting for fixed header height
    const reviewSummary = document.querySelector('.review-summary');
    if (reviewSummary) {
      // Get the header height
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;

      // Calculate the position to scroll to (element position - header height)
      const summaryRect = reviewSummary.getBoundingClientRect();
      const summaryPosition =
        window.pageYOffset + summaryRect.top - headerHeight - 20; // 20px extra padding

      // Scroll to the calculated position
      window.scrollTo({
        top: summaryPosition,
        behavior: 'smooth',
      });
    } else {
      // Fallback to reviews container if summary doesn't exist
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;

      const containerRect = reviewsContainer.getBoundingClientRect();
      const containerPosition =
        window.pageYOffset + containerRect.top - headerHeight - 20;

      window.scrollTo({
        top: containerPosition,
        behavior: 'smooth',
      });
    }
  };

  // Add click event listeners to page numbers
  paginationNumbers.forEach((button) => {
    button.addEventListener('click', () => {
      const pageNumber = parseInt(button.getAttribute('data-page'));
      goToPage(pageNumber);
    });
  });

  // Add click event listeners to prev/next buttons
  if (paginationPrev) {
    paginationPrev.addEventListener('click', () => {
      if (currentPage > 1) {
        goToPage(currentPage - 1);
      }
    });
  }

  if (paginationNext) {
    paginationNext.addEventListener('click', () => {
      if (currentPage < totalPages) {
        goToPage(currentPage + 1);
      }
    });
  }

  // Initialize with page 1
  goToPage(1);
}

// Function to open lightbox for review images
function openLightbox(imageSrc) {
  // Check if lightbox already exists
  let lightbox = document.getElementById('review-lightbox');

  // Create lightbox if it doesn't exist
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'review-lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="" alt="Enlarged image" class="lightbox-image">
            </div>
            <span class="lightbox-close">&times;</span>
        `;
    document.body.appendChild(lightbox);

    // Add close functionality
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    // Close on click outside image
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  // Set image source and show lightbox
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  lightboxImage.src = imageSrc;
  lightbox.classList.add('active');
}

// Add this function to the product-details-modern.js file's renderProductInfo function
function addTabsToProductDetails(product) {
  // Create tabs container
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'product-tabs-container';

  // Create tabs HTML
  // Count unique reviewers
  const uniqueReviewers = new Set();
  if (product.reviews && product.reviews.length > 0) {
    product.reviews.forEach((review) => {
      if (!review.isAnonymous) {
        uniqueReviewers.add(review.author);
      } else {
        // Count each anonymous review as a separate person
        uniqueReviewers.add('anonymous-' + Math.random());
      }
    });
  }

  tabsContainer.innerHTML = `
        <div class="product-tabs">
            <div class="product-tab active" data-tab="product-description">
                <i class="fas fa-info-circle"></i> Mô tả chi tiết
            </div>
            <div class="product-tab" data-tab="product-reviews">
                <i class="fas fa-star"></i> Đánh giá <span class="tab-count">(${
                  product.reviews ? uniqueReviewers.size : 0
                })</span>
            </div>
            <div class="product-tab" data-tab="product-policy">
                <i class="fas fa-shield-alt"></i> Chính sách
            </div>
            <div class="product-tab" data-tab="product-care">
                <i class="fas fa-hand-holding-heart"></i> Bảo quản
            </div>
        </div>
        <div class="product-tab-content active" id="product-description">
            <div class="product-description-content">
                <h3>Mô tả chi tiết sản phẩm ${product.name}</h3>
                <p>${product.description}</p>
            </div>
        </div>
        <div class="product-tab-content" id="product-reviews">
            <div class="product-reviews-content">
                <div class="no-reviews">
                    <i class="far fa-comment-dots"></i>
                    <p>Chưa có đánh giá nào cho sản phẩm này</p>
                </div>
            </div>
        </div>
        <div class="product-tab-content" id="product-policy">
            <div class="product-policy-content">
                <div class="policy-item">
                    <h4><i class="fas fa-truck"></i> Chính sách vận chuyển</h4>
                    <p>Miễn phí vận chuyển trong phạm vi 10km từ cửa hàng. Phí vận chuyển sẽ được tính dựa trên khoảng cách và khối lượng sản phẩm cho các khu vực khác.</p>
                </div>
                <div class="policy-item">
                    <h4><i class="fas fa-exchange-alt"></i> Chính sách đổi trả</h4>
                    <p>Quý khách có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm đổi trả phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng.</p>
                </div>
                <div class="policy-item">
                    <h4><i class="fas fa-shield-alt"></i> Chính sách bảo hành</h4>
                    <p>Sản phẩm được bảo hành chính hãng 10 năm cho các lỗi kỹ thuật. Bảo hành không áp dụng cho các trường hợp hư hỏng do sử dụng không đúng cách hoặc tự ý sửa chữa.</p>
                </div>
                <div class="policy-item">
                    <h4><i class="fas fa-credit-card"></i> Phương thức thanh toán</h4>
                    <p>Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ và các ví điện tử phổ biến như MoMo, ZaloPay.</p>
                </div>
            </div>
        </div>
        <div class="product-tab-content" id="product-care">
            <div class="product-care-content">
                <div class="care-item">
                    <h4><i class="fas fa-broom"></i> Vệ sinh thường xuyên</h4>
                    <p>Lau chùi sản phẩm thường xuyên bằng khăn mềm, khô hoặc hơi ẩm. Tránh sử dụng các chất tẩy rửa có tính axit hoặc kiềm mạnh.</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-sun"></i> Tránh ánh nắng trực tiếp</h4>
                    <p>Không đặt sản phẩm dưới ánh nắng mặt trời trực tiếp trong thời gian dài để tránh bạc màu và biến dạng.</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-tint-slash"></i> Tránh độ ẩm cao</h4>
                    <p>Không đặt sản phẩm ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với nước để tránh gỗ bị cong vênh, nấm mốc.</p>
                </div>
                <div class="care-item">
                    <h4><i class="fas fa-temperature-low"></i> Điều kiện nhiệt độ</h4>
                    <p>Duy trì sản phẩm ở nhiệt độ phòng ổn định, tránh thay đổi nhiệt độ đột ngột có thể gây nứt, cong vênh.</p>
                    <ul>
                        <li>Nhiệt độ lý tưởng: 18-24°C</li>
                        <li>Độ ẩm lý tưởng: 40-60%</li>
                    </ul>
                </div>
            </div>
        </div>
    `;

  // Add tabs container after product container
  const productContainer = document.querySelector('.product-container');
  if (productContainer && productContainer.parentNode) {
    productContainer.parentNode.insertBefore(
      tabsContainer,
      productContainer.nextSibling
    );
  }

  // Initialize tabs functionality
  initProductTabs();

  // Populate tab content with product data
  populateTabContent(product);

  // Initialize review filters
  initReviewFilters();

  // Initialize review pagination
  initReviewPagination();
}

// Function to initialize review filters
function initReviewFilters() {
  const reviewFilters = document.querySelectorAll('.review-filter');
  const reviews = document.querySelectorAll('.review');
  const reviewsContainer = document.querySelector('.reviews-container');
  const paginationControls = document.querySelector('.reviews-pagination');

  if (!reviewFilters.length) return;

  reviewFilters.forEach((filter) => {
    filter.addEventListener('click', () => {
      // Show loading overlay
      const loadingOverlay = reviewsContainer
        ? reviewsContainer.querySelector('.reviews-loading-overlay')
        : null;
      if (loadingOverlay) {
        loadingOverlay.classList.add('active');
      }

      // Remove active class from all filters
      reviewFilters.forEach((f) => f.classList.remove('active'));

      // Add active class to clicked filter
      filter.classList.add('active');

      const rating = filter.getAttribute('data-rating');

      // Use setTimeout to create a small delay for the loading effect to be visible
      setTimeout(() => {
        // Show/hide reviews based on filter
        let visibleReviews = [];

        reviews.forEach((review) => {
          if (rating === 'all') {
            review.classList.remove('filtered-out');
            visibleReviews.push(review);
          } else {
            const reviewRating = Math.floor(
              parseFloat(review.getAttribute('data-rating') || 0)
            );
            if (reviewRating === parseInt(rating)) {
              review.classList.remove('filtered-out');
              visibleReviews.push(review);
            } else {
              review.classList.add('filtered-out');
              review.style.display = 'none';
            }
          }
        });

        // Show message if no reviews match the filter
        const reviewsContent = document.querySelector(
          '.product-reviews-content'
        );
        let noMatchingReviews = document.querySelector('.no-matching-reviews');

        if (visibleReviews.length === 0 && rating !== 'all') {
          // Hide pagination controls
          if (paginationControls) {
            paginationControls.style.display = 'none';
          }

          // Create message if it doesn't exist
          if (!noMatchingReviews) {
            noMatchingReviews = document.createElement('div');
            noMatchingReviews.className = 'no-matching-reviews';
            noMatchingReviews.innerHTML = `
              <i class="far fa-comment-dots"></i>
              <p>Không có đánh giá nào với ${rating} sao</p>
            `;
            reviewsContent.appendChild(noMatchingReviews);
          } else {
            noMatchingReviews.innerHTML = `
              <i class="far fa-comment-dots"></i>
              <p>Không có đánh giá nào với ${rating} sao</p>
            `;
            noMatchingReviews.style.display = 'block';
          }
        } else {
          // Show pagination controls if there are visible reviews
          if (paginationControls) {
            paginationControls.style.display = 'flex';
          }

          if (noMatchingReviews) {
            noMatchingReviews.style.display = 'none';
          }

          // Recalculate pagination for filtered reviews
          if (reviewsContainer && visibleReviews.length > 0) {
            const reviewsPerPage =
              parseInt(
                reviewsContainer.getAttribute('data-reviews-per-page')
              ) || 6;
            const totalFilteredPages = Math.ceil(
              visibleReviews.length / reviewsPerPage
            );

            // Update total pages attribute
            reviewsContainer.setAttribute(
              'data-total-pages',
              totalFilteredPages
            );

            // Reassign page numbers to visible reviews
            visibleReviews.forEach((review, index) => {
              const pageNumber = Math.floor(index / reviewsPerPage) + 1;
              review.setAttribute('data-page', pageNumber);
              review.style.display = pageNumber === 1 ? 'block' : 'none';
            });

            // Reset to page 1
            reviewsContainer.setAttribute('data-current-page', 1);

            // Update pagination UI
            const paginationNumbers = document.querySelector(
              '.pagination-numbers'
            );
            if (paginationNumbers) {
              paginationNumbers.innerHTML = '';
              for (let i = 1; i <= totalFilteredPages; i++) {
                const activeClass = i === 1 ? 'active' : '';
                paginationNumbers.innerHTML += `<button class="pagination-number ${activeClass}" data-page="${i}">${i}</button>`;
              }

              // Reinitialize pagination event listeners
              const newPaginationNumbers =
                document.querySelectorAll('.pagination-number');
              newPaginationNumbers.forEach((button) => {
                button.addEventListener('click', () => {
                  const pageNumber = parseInt(button.getAttribute('data-page'));
                  goToFilteredPage(pageNumber, visibleReviews);
                });
              });
            }

            // Update prev/next buttons
            const paginationPrev = document.querySelector('.pagination-prev');
            const paginationNext = document.querySelector('.pagination-next');

            if (paginationPrev) {
              paginationPrev.disabled = true;
            }

            if (paginationNext) {
              paginationNext.disabled = totalFilteredPages <= 1;
            }
          }
        }

        // Hide loading overlay after processing
        setTimeout(() => {
          if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
          }
        }, 500);
      }, 500); // 500ms delay for the loading effect
    });
  });

  // Function to go to a specific page for filtered reviews
  function goToFilteredPage(pageNumber, visibleReviews) {
    const reviewsContainer = document.querySelector('.reviews-container');
    if (!reviewsContainer) return;

    // Show loading overlay
    const loadingOverlay = reviewsContainer.querySelector(
      '.reviews-loading-overlay'
    );
    if (loadingOverlay) {
      loadingOverlay.classList.add('active');
    }

    // Update current page
    reviewsContainer.setAttribute('data-current-page', pageNumber);

    // Update active page number
    const paginationNumbers = document.querySelectorAll('.pagination-number');
    paginationNumbers.forEach((button) => {
      const buttonPage = parseInt(button.getAttribute('data-page'));
      if (buttonPage === pageNumber) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Update prev/next buttons
    const paginationPrev = document.querySelector('.pagination-prev');
    const paginationNext = document.querySelector('.pagination-next');
    const totalPages =
      parseInt(reviewsContainer.getAttribute('data-total-pages')) || 1;

    if (paginationPrev) {
      paginationPrev.disabled = pageNumber === 1;
    }

    if (paginationNext) {
      paginationNext.disabled = pageNumber === totalPages;
    }

    // Use setTimeout to create a small delay for the loading effect to be visible
    setTimeout(() => {
      // Show/hide reviews based on current page
      visibleReviews.forEach((review) => {
        const reviewPage = parseInt(review.getAttribute('data-page'));
        review.style.display = reviewPage === pageNumber ? 'block' : 'none';
      });

      // Hide loading overlay after a short delay
      setTimeout(() => {
        if (loadingOverlay) {
          loadingOverlay.classList.remove('active');
        }
      }, 500); // 500ms delay before hiding the loading overlay
    }, 500); // 500ms delay for the loading effect

    // Scroll to review summary instead of reviews container, accounting for fixed header height
    const reviewSummary = document.querySelector('.review-summary');
    if (reviewSummary) {
      // Get the header height
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;

      // Calculate the position to scroll to (element position - header height)
      const summaryRect = reviewSummary.getBoundingClientRect();
      const summaryPosition =
        window.pageYOffset + summaryRect.top - headerHeight - 20; // 20px extra padding

      // Scroll to the calculated position
      window.scrollTo({
        top: summaryPosition,
        behavior: 'smooth',
      });
    } else {
      // Fallback to reviews container if summary doesn't exist
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;

      const containerRect = reviewsContainer.getBoundingClientRect();
      const containerPosition =
        window.pageYOffset + containerRect.top - headerHeight - 20;

      window.scrollTo({
        top: containerPosition,
        behavior: 'smooth',
      });
    }
  }
}
