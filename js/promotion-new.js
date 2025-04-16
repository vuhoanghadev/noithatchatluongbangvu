// JavaScript for Enhanced Promotion Section

document.addEventListener('DOMContentLoaded', function () {
  // Render enhanced promotion section
  if (document.getElementById('promotion-list')) {
    renderEnhancedPromotions();
    initCountdownTimers();
  }
});

// Render enhanced promotions with more details and better UI
function renderEnhancedPromotions() {
  const promotionList = document.getElementById('promotion-list');
  const promotionSection = document.querySelector('.promotion');

  // Add subtitle to the promotion section
  if (!document.querySelector('.promotion .section-subtitle')) {
    const subtitle = document.createElement('p');
    subtitle.className = 'section-subtitle';
    subtitle.textContent =
      'Khám phá những ưu đãi hấp dẫn và độc quyền dành riêng cho khách hàng của Nội Thất Chất Lượng Bàng Vũ';
    promotionSection
      .querySelector('h2')
      .insertAdjacentElement('afterend', subtitle);
  }

  // Get products with promotions
  const promotions = products.filter((p) => p.promotion);

  // If no promotions, show a message
  if (promotions.length === 0) {
    promotionList.innerHTML =
      '<div class="no-promotions">Hiện tại không có ưu đãi nào. Vui lòng quay lại sau!</div>';
    return;
  }

  // Clear existing content
  promotionList.innerHTML = '';

  // Enhanced promotion data with additional details
  const enhancedPromotions = [
    {
      product: promotions[0],
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      isLimited: true,
      discount: '20%',
      code: 'SUMMER20',
    },
    {
      product: promotions.length > 1 ? promotions[1] : promotions[0],
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days from now
      isLimited: true,
      discount: 'Quà tặng kèm',
      code: 'GIFT2023',
    },
    {
      product: promotions.length > 2 ? promotions[2] : promotions[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      isLimited: true,
      discount: 'Miễn phí vận chuyển',
      code: 'FREESHIP',
    },
  ];

  // Render each enhanced promotion
  enhancedPromotions.forEach((promo, index) => {
    const card = document.createElement('div');
    card.className = 'promo-card';
    card.setAttribute('data-index', index);

    // Không cần format end date nữa vì đã xóa phần hiển thị

    // Create HTML for the promotion card
    card.innerHTML = `
            <div class="promo-badge ${
              promo.product.promotion.toLowerCase().includes('ưu đãi đặc biệt')
                ? 'special-promo'
                : promo.product.promotion.toLowerCase().includes('sale')
                ? 'sale-promo'
                : promo.product.promotion.toLowerCase().includes('tháng')
                ? 'monthly-promo'
                : ''
            }">${promo.product.promotion}</div>
            <div class="promo-card-image">
                <img src="${promo.product.image}" alt="${
      promo.product.name
    }" loading="lazy">
            </div>
            <div class="promo-card-content">
                <h3 class="promo-card-title">${promo.product.name}</h3>
                <span class="promo-card-category"><i class="fas fa-tag"></i> ${
                  promo.product.category
                }</span>
                <p class="promo-card-description">${
                  promo.product.description
                }</p>

                ${
                  promo.isLimited
                    ? `
                <div class="promo-timer" data-end="${promo.endDate.getTime()}">
                    <div class="timer-item">
                        <span class="timer-number days">00</span>
                        <span class="timer-label">Ngày</span>
                    </div>
                    <div class="timer-item">
                        <span class="timer-number hours">00</span>
                        <span class="timer-label">Giờ</span>
                    </div>
                    <div class="timer-item">
                        <span class="timer-number minutes">00</span>
                        <span class="timer-label">Phút</span>
                    </div>
                    <div class="timer-item">
                        <span class="timer-number seconds">00</span>
                        <span class="timer-label">Giây</span>
                    </div>
                </div>
                `
                    : ''
                }



                <div class="promo-card-actions">
                    <a href="product-details.html?id=${
                      promo.product.id
                    }" class="btn-promo-details">Xem chi tiết</a>
                    <a href="https://zalo.me/123456789" class="btn-promo-contact"><i class="fas fa-comment"></i> Tư vấn</a>
                </div>
            </div>
        `;

    promotionList.appendChild(card);
  });

  // Add "View All" button
  const viewAllContainer = document.createElement('div');
  viewAllContainer.className = 'view-all-promos';
  viewAllContainer.innerHTML =
    '<a href="products.html" class="btn-view-all-promos">Xem tất cả ưu đãi</a>';
  promotionSection.querySelector('.container').appendChild(viewAllContainer);
}

// Initialize countdown timers for limited time offers
function initCountdownTimers() {
  const timers = document.querySelectorAll('.promo-timer');

  timers.forEach((timer) => {
    const endTime = parseInt(timer.getAttribute('data-end'));

    // Update the timer every second
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      // If the countdown is over, clear the interval
      if (distance < 0) {
        clearInterval(timerInterval);
        timer.innerHTML = '<p class="expired">Ưu đãi đã kết thúc!</p>';
        return;
      }

      // Calculate time units
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the timer display
      timer.querySelector('.days').textContent = days
        .toString()
        .padStart(2, '0');
      timer.querySelector('.hours').textContent = hours
        .toString()
        .padStart(2, '0');
      timer.querySelector('.minutes').textContent = minutes
        .toString()
        .padStart(2, '0');
      timer.querySelector('.seconds').textContent = seconds
        .toString()
        .padStart(2, '0');
    }, 1000);
  });
}

// Add animation to promotion cards
function animatePromotionCards() {
  const cards = document.querySelectorAll('.promo-card');

  cards.forEach((card, index) => {
    // Add staggered animation delay
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = `${index * 0.1}s`;

    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 100);
  });
}

// Handle window load event to trigger animations
window.addEventListener('load', function () {
  animatePromotionCards();
});
