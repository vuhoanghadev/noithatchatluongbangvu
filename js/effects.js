document.addEventListener('DOMContentLoaded', () => {
  // Create spinner overlay
  const spinnerOverlay = document.createElement('div');
  spinnerOverlay.className = 'spinner-overlay';
  spinnerOverlay.innerHTML = `
        <div class="spinner"></div>
        <div class="loading-text">Chờ Nội Thất Bàng Vũ tải trang xíu nha^^</div>
    `;
  document.body.appendChild(spinnerOverlay);

  // Function to show spinner
  function showSpinner() {
    spinnerOverlay.classList.add('active');
  }

  // Function to hide spinner
  function hideSpinner() {
    spinnerOverlay.classList.remove('active');
  }

  // Function to scroll to top with animation
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Function to apply loading effect
  function applyLoadingEffect(contentContainer) {
    showSpinner();

    // Simulate loading time (remove in production)
    setTimeout(() => {
      scrollToTop();

      // Hide spinner after scrolling
      setTimeout(() => {
        hideSpinner();

        // Add fade-in effect to the content
        if (contentContainer) {
          contentContainer.classList.add('fade-in');

          // Remove the class after animation completes
          setTimeout(() => {
            contentContainer.classList.remove('fade-in');
          }, 600);
        }
      }, 400);
    }, 600);
  }

  // Add loading effect to pagination buttons
  const pagination = document.getElementById('pagination');
  if (pagination) {
    // Use event delegation for pagination buttons
    pagination.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const contentContainer = pagination.closest('section');
        applyLoadingEffect(contentContainer);
      }
    });
  }

  // Add loading effect to category filter and search
  const categoryFilter = document.getElementById('category');
  const searchInput = document.getElementById('search');
  const searchButton = document.getElementById('search-button');
  const productSection = document.querySelector('.products');

  if (categoryFilter) {
    categoryFilter.addEventListener('change', () => {
      applyLoadingEffect(productSection);
    });
  }

  if (searchButton && searchInput) {
    // Add click event to search button
    searchButton.addEventListener('click', () => {
      if (searchInput.value.trim() !== '') {
        applyLoadingEffect(productSection);
      }
    });

    // Add enter key press event to search input
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        e.preventDefault();
        applyLoadingEffect(productSection);
      }
    });
  }
});
