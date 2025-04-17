// Testimonial Slider functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get slider elements
  const slider = document.querySelector('.testimonial-slider');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  const pagination = document.querySelector('.testimonial-pagination');
  const cards = document.querySelectorAll('.testimonial-card');

  // Initialize variables
  let currentPosition = 0;
  let cardWidth = 0;
  let visibleCards = 3;
  let currentIndex = 0;
  let maxIndex = cards.length - 1;

  // Create pagination bullets
  function createPagination() {
    pagination.innerHTML = '';

    // Determine how many dots to show
    let maxDots;
    if (window.innerWidth > 768) {
      // On desktop, show only 5 dots for 6 cards
      maxDots = 5;
    } else {
      // On mobile, show one dot per card
      maxDots = cards.length;
    }

    // Create bullets
    for (let i = 0; i < maxDots; i++) {
      const bullet = document.createElement('span');
      bullet.classList.add('swiper-pagination-bullet');

      // Mark the active bullet
      if (window.innerWidth > 768) {
        // On desktop, active dot is based on our custom logic
        // We have 5 dots for 6 cards, so we need to map the currentIndex to the correct dot
        if (i === (currentIndex >= 5 ? 0 : currentIndex)) {
          bullet.classList.add('swiper-pagination-bullet-active');
        }
      } else {
        // On mobile, keep the original behavior
        if (i === currentIndex) {
          bullet.classList.add('swiper-pagination-bullet-active');
        }
      }

      // Add click event
      bullet.addEventListener('click', () => {
        if (window.innerWidth > 768 && i === 4 && cards.length > 5) {
          // On desktop, clicking the 5th dot (index 4) should go to card 4
          // The last card (5) doesn't have a dot
          goToCard(4);
        } else {
          // Normal behavior
          goToCard(i);
        }
      });

      pagination.appendChild(bullet);
    }
  }

  // Update pagination bullets
  function updatePagination() {
    const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');

    bullets.forEach((bullet, index) => {
      if (window.innerWidth > 768) {
        // On desktop with 5 dots for 6 cards
        if (currentIndex === 5) {
          // If we're on the 6th card (index 5), no dot should be active
          // This is a special case that shouldn't happen with our logic,
          // but we handle it just in case
          bullet.classList.remove('swiper-pagination-bullet-active');
        } else if (index === currentIndex) {
          // Normal case: dot index matches card index
          bullet.classList.add('swiper-pagination-bullet-active');
        } else {
          bullet.classList.remove('swiper-pagination-bullet-active');
        }
      } else {
        // On mobile, keep the original behavior
        if (index === currentIndex) {
          bullet.classList.add('swiper-pagination-bullet-active');
        } else {
          bullet.classList.remove('swiper-pagination-bullet-active');
        }
      }
    });
  }

  // Calculate dimensions based on screen size
  function calculateDimensions() {
    // Get the width of one card including gap
    // We'll use the first card's width as reference
    if (cards.length > 0) {
      // Get the actual width of a single card
      const firstCard = cards[0];

      // Get the gap between cards from CSS
      const gapSize = 30; // 30px is the gap between cards

      // Calculate card width including gap
      // We need to account for the border-box sizing
      cardWidth = firstCard.getBoundingClientRect().width + gapSize;

      console.log(`Card width calculated: ${cardWidth}px`);
    } else {
      // Fallback if no cards are found
      cardWidth = slider.offsetWidth / 3;
    }

    // Get the container width
    const containerWidth = slider.parentElement.offsetWidth - 80; // Subtract padding (40px on each side)

    // Calculate how many cards can be fully visible
    const visibleCards = Math.floor(containerWidth / cardWidth);
    console.log(
      `Container width: ${containerWidth}px, Visible cards: ${visibleCards}`
    );

    // Reset current index if needed
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }

    // Update slider position
    goToCard(currentIndex);

    // Update pagination
    createPagination();
  }

  // Handle transition end event
  slider.addEventListener('transitionend', function () {
    // Check if we need to handle the loop transition
    if (currentIndex === 0 && previousIndex === maxIndex) {
      // We've just looped from last to first
      console.log('Looped from last to first');
    } else if (currentIndex === maxIndex && previousIndex === 0) {
      // We've just looped from first to last
      console.log('Looped from first to last');
    }
  });

  // Variable to track previous index for loop detection
  let previousIndex = 0;

  // Go to specific card
  function goToCard(index) {
    // Store previous index before updating
    previousIndex = currentIndex;

    // Implement infinite loop with special handling for desktop
    if (window.innerWidth > 768) {
      // On desktop, limit to 5 cards (0-4) for our custom logic
      if (index < 0) {
        index = 4; // Go to the 5th card (index 4) if we're at the beginning and go back
      } else if (index > 5) {
        index = 0; // Go to the first card if we're beyond the 6th card
      }
    } else {
      // On mobile, keep the original behavior
      if (index < 0) {
        index = maxIndex; // Go to the last card if we're at the beginning and go back
      } else if (index > maxIndex) {
        index = 0; // Go to the first card if we're at the end and go forward
      }
    }

    currentIndex = index;

    // Calculate position based on current index and visible cards
    let position;

    // Get the container width
    const containerWidth = slider.parentElement.offsetWidth - 80; // Subtract padding (40px on each side)

    // Calculate how many cards can be fully visible
    const visibleCards = Math.floor(containerWidth / cardWidth);

    // Special handling for the last cards to avoid empty space
    // Calculate the maximum position we can scroll to (to show the last card at the right edge)
    const maxScrollPosition = (cards.length - visibleCards) * cardWidth;

    // Normal positioning first
    position = -index * cardWidth;

    // If we're near the end, make sure we don't show empty space
    if (index >= maxIndex - visibleCards + 1) {
      // Adjust to show the last card at the right edge
      position = -maxScrollPosition;

      // For small screens or when there are fewer cards than visible slots
      if (visibleCards >= cards.length) {
        position = 0;
      }
    }

    // Make sure we never scroll beyond the last card
    if (-position > maxScrollPosition && maxScrollPosition > 0) {
      position = -maxScrollPosition;
    }

    // Apply smooth transition
    slider.style.transition = 'transform 0.5s ease';
    slider.style.transform = `translateX(${position}px)`;

    // Update pagination
    updatePagination();

    // Log for debugging
    console.log(
      `Moving to card ${index}, position: ${position}px, cardWidth: ${cardWidth}px, visible: ${visibleCards}, maxScroll: ${maxScrollPosition}`
    );
  }

  // Next slide
  function nextCard() {
    // On desktop, implement custom logic to return to first card after 5 clicks
    if (window.innerWidth > 768) {
      // If we're at the 5th click (index 4), go back to the first card
      if (currentIndex === 4) {
        goToCard(0);
      } else {
        goToCard(currentIndex + 1);
      }
    } else {
      // On mobile, keep the original behavior
      goToCard(currentIndex + 1);
    }
  }

  // Previous slide
  function prevCard() {
    // On desktop, implement custom logic for consistency
    if (window.innerWidth > 768) {
      // If we're at the first card, go to the 5th card (index 4)
      if (currentIndex === 0) {
        goToCard(4);
      } else {
        goToCard(currentIndex - 1);
      }
    } else {
      // On mobile, keep the original behavior
      goToCard(currentIndex - 1);
    }
  }

  // Add event listeners
  prevButton.addEventListener('click', prevCard);
  nextButton.addEventListener('click', nextCard);

  // Handle touch events for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      // Swipe left
      nextCard();
    } else if (touchEndX > touchStartX + swipeThreshold) {
      // Swipe right
      prevCard();
    }
  }

  // Initialize slider
  calculateDimensions();

  // Recalculate on window resize with debounce
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      calculateDimensions();
    }, 250); // Wait 250ms after resize ends
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    nextCard();
  }, 5000);
});
