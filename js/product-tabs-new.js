// Product Tabs Functionality
document.addEventListener('DOMContentLoaded', function () {
  initProductTabs();
  updateReviewCount();
  initReviewFilters();
  initReviewPagination();
});

// Function to initialize product tabs
function initProductTabs() {
  const tabLinks = document.querySelectorAll('.product-tab-link');
  const tabContents = document.querySelectorAll('.product-tab-content');

  // Set first tab as active by default if none is active
  if (!document.querySelector('.product-tab-link.active')) {
    const firstTab = document.querySelector('.product-tab-link');
    if (firstTab) {
      firstTab.classList.add('active');
      const targetId = firstTab.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    }
  }

  // Add click event to tab links
  tabLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class from all tabs
      tabLinks.forEach((tab) => {
        tab.classList.remove('active');
      });

      // Hide all tab contents
      tabContents.forEach((content) => {
        content.classList.remove('active');
      });

      // Add active class to clicked tab
      this.classList.add('active');

      // Show corresponding tab content
      const targetId = this.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Function to update review count in tab
function updateReviewCount() {
  const reviewCountElement = document.querySelector('.review-count');
  if (!reviewCountElement) return;

  // Get current product
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));

  if (!productId || typeof products === 'undefined') return;

  const product = products.find((p) => p.id === productId);
  if (!product) return;
  
  // Load reviews from localStorage if available
  loadReviewsFromLocalStorage(product);

  // Get review count from product data
  const reviewCount = product.reviews ? product.reviews.length : 0;
  reviewCountElement.textContent = reviewCount;

  // Update review count in tab
  const reviewTabCount = document.querySelector('.review-tab-count');
  if (reviewTabCount) {
    reviewTabCount.textContent = reviewCount;
  }

  // Update review summary
  updateReviewSummary(product);
}

// Function to load reviews from localStorage
function loadReviewsFromLocalStorage(product) {
  try {
    // Get reviews from localStorage
    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || {};
    
    // Check if there are reviews for this product
    if (allReviews[product.id] && Array.isArray(allReviews[product.id])) {
      // Update product reviews with localStorage data
      product.reviews = allReviews[product.id];
      console.log('Reviews loaded from localStorage successfully');
    }
  } catch (error) {
    console.error('Error loading reviews from localStorage:', error);
  }
}

// Function to update review summary
function updateReviewSummary(product) {
  const reviewSummary = document.querySelector('.review-summary');
  if (!reviewSummary) return;

  // Get review data
  const reviews = product.reviews || [];
  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
      : 0;

  // Update average rating
  const averageRatingElement = document.querySelector('.average-rating');
  if (averageRatingElement) {
    averageRatingElement.textContent = averageRating.toFixed(1);
  }

  // Update rating stars
  const ratingStars = document.querySelector('.rating-stars');
  if (ratingStars) {
    const fullStars = Math.floor(averageRating);
    const halfStar = averageRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
      starsHTML += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
      starsHTML += '<i class="far fa-star"></i>';
    }

    ratingStars.innerHTML = starsHTML;
  }

  // Update rating count
  const ratingCountElement = document.querySelector('.rating-count');
  if (ratingCountElement) {
    ratingCountElement.textContent = `${totalReviews} trên 5`;
  }

  // Update review count
  const reviewCountElement = document.querySelector('.review-count-text');
  if (reviewCountElement) {
    reviewCountElement.textContent = `có bình luận (${totalReviews})`;
  }

  // Update rating breakdown
  const ratingBreakdown = document.querySelector('.rating-breakdown');
  if (ratingBreakdown) {
    // Count reviews by rating
    const ratingCounts = [0, 0, 0, 0, 0]; // 5, 4, 3, 2, 1 stars
    reviews.forEach((review) => {
      const rating = review.rating;
      if (rating >= 1 && rating <= 5) {
        ratingCounts[5 - rating]++;
      }
    });

    // Update rating bars
    const ratingBars = ratingBreakdown.querySelectorAll('.rating-bar-fill');
    const ratingLabels = ratingBreakdown.querySelectorAll('.rating-count-label');

    ratingBars.forEach((bar, index) => {
      const count = ratingCounts[index];
      const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
      bar.style.width = `${percentage}%`;

      // Update count label
      if (ratingLabels[index]) {
        ratingLabels[index].textContent = `(${count})`;
      }
    });
  }

  // Display reviews
  displayReviews(product);
}

// Function to display reviews
function displayReviews(product, page = 1, filter = 'all') {
  const reviewsContainer = document.querySelector('.reviews-container');
  if (!reviewsContainer) return;

  // Get reviews
  let reviews = product.reviews || [];

  // Apply filter
  if (filter !== 'all') {
    const filterRating = parseInt(filter);
    reviews = reviews.filter((review) => review.rating === filterRating);
  }

  // Pagination
  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (page - 1) * reviewsPerPage;
  const endIndex = startIndex + reviewsPerPage;
  const paginatedReviews = reviews.slice(startIndex, endIndex);

  // Update pagination UI
  updatePagination(page, totalPages);

  // Display no reviews message if no reviews
  if (reviews.length === 0) {
    reviewsContainer.innerHTML = `
            <div class="no-reviews">
                <p>Chưa có đánh giá nào cho sản phẩm này.</p>
                <p>Hãy là người đầu tiên đánh giá!</p>
            </div>
        `;
    return;
  }

  // Display filtered reviews message if no reviews match filter
  if (paginatedReviews.length === 0) {
    reviewsContainer.innerHTML = `
            <div class="no-reviews">
                <p>Không có đánh giá nào phù hợp với bộ lọc.</p>
                <p>Vui lòng thử bộ lọc khác.</p>
            </div>
        `;
    return;
  }

  // Build reviews HTML
  let reviewsHTML = '';
  paginatedReviews.forEach((review) => {
    // Get reviewer name and avatar
    const reviewerName = review.isAnonymous ? 'Ẩn danh' : review.author;
    const reviewerAvatar = review.isAnonymous
      ? '<i class="fas fa-user-circle"></i>'
      : `<img src="images/avatar-placeholder.jpg" alt="${reviewerName}" class="reviewer-avatar">`;

    // Build rating stars
    let ratingStars = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        ratingStars += '<i class="fas fa-star"></i>';
      } else {
        ratingStars += '<i class="far fa-star"></i>';
      }
    }

    // Build review HTML
    reviewsHTML += `
            <div class="review-item">
                <div class="reviewer-info">
                    <div class="reviewer-avatar-container">
                        ${reviewerAvatar}
                    </div>
                    <div class="reviewer-details">
                        <h4 class="reviewer-name">${reviewerName}</h4>
                        <div class="review-rating">${ratingStars}</div>
                        <div class="review-date">${review.date}</div>
                    </div>
                </div>
                <div class="review-content">
                    <p>${review.content}</p>
                </div>
        `;

        // Add review images if available
        if (review.images && review.images.length > 0) {
          reviewsHTML += '<div class="review-images">';
          review.images.forEach((image) => {
            // Check if image is a base64 data URL
            const isBase64 = image.startsWith('data:image');
            const imageSrc = isBase64 ? image : image; // Use as is if it's base64, otherwise use the path
            
            reviewsHTML += `
                            <div class="review-image-container">
                                <img src="${imageSrc}" alt="Hình ảnh đánh giá" class="review-image" onclick="openLightbox('${imageSrc}')">
                            </div>
                        `;
          });
          reviewsHTML += '</div>';
        }

        // Add review videos if available
        if (review.videos && review.videos.length > 0) {
          reviewsHTML += '<div class="review-videos">';
          review.videos.forEach((video) => {
            // Check if video is a base64 data URL
            const isBase64 = video.startsWith('data:video');
            const videoSrc = isBase64 ? video : video; // Use as is if it's base64, otherwise use the path
            const videoType = isBase64 ? video.split(';')[0].split(':')[1] : 'video/mp4';
            
            reviewsHTML += `
                            <div class="review-video-container">
                                <video controls class="review-video">
                                    <source src="${videoSrc}" type="${videoType}">
                                    Trình duyệt của bạn không hỗ trợ video.
                                </video>
                            </div>
                        `;
          });
          reviewsHTML += '</div>';
        }

        // Add seller response if available
        if (review.sellerResponse) {
          reviewsHTML += `
                <div class="seller-response">
                    <div class="seller-response-header">
                        <div class="seller-avatar">
                            <img src="images/seller-avatar.jpg" alt="Người bán" class="seller-avatar-img">
                        </div>
                        <div class="seller-info">
                            <h5 class="seller-name">Người bán</h5>
                            <div class="response-date">${review.sellerResponse.date}</div>
                        </div>
                    </div>
                    <div class="seller-response-content">
                        <p>${review.sellerResponse.content}</p>
                    </div>
                </div>
            `;
        }

        reviewsHTML += '</div>'; // Close review-item
  });

  // Update reviews container
  reviewsContainer.innerHTML = reviewsHTML;
}

// Function to update pagination
function updatePagination(currentPage, totalPages) {
  const paginationContainer = document.querySelector('.review-pagination');
  if (!paginationContainer) return;

  // Hide pagination if only one page
  if (totalPages <= 1) {
    paginationContainer.style.display = 'none';
    return;
  }

  // Show pagination
  paginationContainer.style.display = 'flex';

  // Build pagination HTML
  let paginationHTML = '';

  // Previous button
  paginationHTML += `
        <button class="pagination-btn prev-page ${
          currentPage === 1 ? 'disabled' : ''
        }" ${currentPage === 1 ? 'disabled' : ''}>
            <i class="fas fa-chevron-left"></i>
        </button>
    `;

  // Page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust start page if end page is maxed out
  if (endPage === totalPages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // Add first page if not visible
  if (startPage > 1) {
    paginationHTML += `
            <button class="pagination-btn page-number" data-page="1">1</button>
        `;
    if (startPage > 2) {
      paginationHTML += `<span class="pagination-ellipsis">...</span>`;
    }
  }

  // Add page numbers
  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
            <button class="pagination-btn page-number ${
              i === currentPage ? 'active' : ''
            }" data-page="${i}">${i}</button>
        `;
  }

  // Add last page if not visible
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHTML += `<span class="pagination-ellipsis">...</span>`;
    }
    paginationHTML += `
            <button class="pagination-btn page-number" data-page="${totalPages}">${totalPages}</button>
        `;
  }

  // Next button
  paginationHTML += `
        <button class="pagination-btn next-page ${
          currentPage === totalPages ? 'disabled' : ''
        }" ${currentPage === totalPages ? 'disabled' : ''}>
            <i class="fas fa-chevron-right"></i>
        </button>
    `;

  // Update pagination container
  paginationContainer.innerHTML = paginationHTML;

  // Add event listeners to pagination buttons
  const pageButtons = paginationContainer.querySelectorAll('.page-number');
  pageButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const page = parseInt(this.getAttribute('data-page'));
      const filter = document.querySelector('.rating-filter.active')?.getAttribute('data-rating') || 'all';
      
      // Get current product
      const urlParams = new URLSearchParams(window.location.search);
      const productId = parseInt(urlParams.get('id'));
      const product = products.find((p) => p.id === productId);
      
      if (product) {
        // Scroll to review section
        const reviewSection = document.querySelector('.review-summary');
        if (reviewSection) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offsetTop = reviewSection.offsetTop - headerHeight - 20;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        
        // Display reviews for selected page
        displayReviews(product, page, filter);
      }
    });
  });

  // Add event listeners to prev/next buttons
  const prevButton = paginationContainer.querySelector('.prev-page');
  const nextButton = paginationContainer.querySelector('.next-page');

  if (prevButton && !prevButton.disabled) {
    prevButton.addEventListener('click', function () {
      const page = currentPage - 1;
      const filter = document.querySelector('.rating-filter.active')?.getAttribute('data-rating') || 'all';
      
      // Get current product
      const urlParams = new URLSearchParams(window.location.search);
      const productId = parseInt(urlParams.get('id'));
      const product = products.find((p) => p.id === productId);
      
      if (product) {
        // Scroll to review section
        const reviewSection = document.querySelector('.review-summary');
        if (reviewSection) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offsetTop = reviewSection.offsetTop - headerHeight - 20;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        
        // Display reviews for selected page
        displayReviews(product, page, filter);
      }
    });
  }

  if (nextButton && !nextButton.disabled) {
    nextButton.addEventListener('click', function () {
      const page = currentPage + 1;
      const filter = document.querySelector('.rating-filter.active')?.getAttribute('data-rating') || 'all';
      
      // Get current product
      const urlParams = new URLSearchParams(window.location.search);
      const productId = parseInt(urlParams.get('id'));
      const product = products.find((p) => p.id === productId);
      
      if (product) {
        // Scroll to review section
        const reviewSection = document.querySelector('.review-summary');
        if (reviewSection) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offsetTop = reviewSection.offsetTop - headerHeight - 20;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
        
        // Display reviews for selected page
        displayReviews(product, page, filter);
      }
    });
  }
}

// Function to initialize review filters
function initReviewFilters() {
  const ratingFilters = document.querySelectorAll('.rating-filter');
  if (!ratingFilters.length) return;

  // Set 'all' filter as active by default
  const allFilter = document.querySelector('.rating-filter[data-rating="all"]');
  if (allFilter) {
    allFilter.classList.add('active');
  }

  // Add click event to rating filters
  ratingFilters.forEach((filter) => {
    filter.addEventListener('click', function () {
      // Remove active class from all filters
      ratingFilters.forEach((f) => {
        f.classList.remove('active');
      });

      // Add active class to clicked filter
      this.classList.add('active');

      // Get filter value
      const filterValue = this.getAttribute('data-rating');

      // Get current product
      const urlParams = new URLSearchParams(window.location.search);
      const productId = parseInt(urlParams.get('id'));
      const product = products.find((p) => p.id === productId);

      if (product) {
        // Display reviews with filter
        displayReviews(product, 1, filterValue);
      }
    });
  });
}

// Function to initialize review pagination
function initReviewPagination() {
  // Pagination is handled in displayReviews function
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
  
  // Handle base64 images (they can be very long strings)
  try {
    lightboxImage.src = imageSrc;
    lightbox.classList.add('active');
  } catch (error) {
    console.error('Error loading image in lightbox:', error);
    alert('Không thể hiển thị hình ảnh phóng to.');
  }
}
