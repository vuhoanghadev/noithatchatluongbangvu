// Modern Products Page JavaScript - Connector to existing data
document.addEventListener('DOMContentLoaded', function () {
  // Safari detection
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Log for debugging
  console.log('Browser detection - Safari:', isSafari);

  // Add Safari-specific class to body if needed
  if (isSafari) {
    document.body.classList.add('safari-browser');
  }
  // Elements
  const productGrid = document.querySelector('.product-grid');
  const categoryFilter = document.getElementById('category-filter');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.querySelector('.search-button');
  const paginationContainer = document.querySelector('.pagination');
  const productCountElement = document.querySelector('.product-count span');

  // Create scroll to top button
  const scrollToTopButton = document.createElement('div');
  scrollToTopButton.className = 'scroll-to-top';
  scrollToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollToTopButton);

  // Variables
  let currentPage = 1;
  const productsPerPage = 12;
  let filteredProducts = [...products]; // Use existing products array from products.js

  // Initialize with a slight delay for Safari
  setTimeout(
    function () {
      try {
        initCategoryFilter();
        renderProducts();
        renderPagination();
        updateProductCount();
        console.log('Products initialized successfully');
      } catch (error) {
        console.error('Error initializing products:', error);
      }
    },
    isSafari ? 100 : 0
  ); // Small delay for Safari

  // Event listeners
  if (categoryFilter) {
    categoryFilter.addEventListener('change', handleFilter);
  }

  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });
  }

  // Scroll to top button event listener
  scrollToTopButton.addEventListener('click', function () {
    // Show loading effect
    showLoading();

    // Scroll to top of products
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Clear any existing timeouts
    if (window.loadingTimeout) {
      clearTimeout(window.loadingTimeout);
    }

    // Apply changes after loading time
    window.loadingTimeout = setTimeout(() => {
      try {
        // No need to re-render, just hide loading
        hideLoading();
        window.loadingTimeout = null;
      } catch (error) {
        console.error('Error during scroll to top:', error);
        hideLoading();
        window.loadingTimeout = null;
      }
    }, 800);
  });

  // Show/hide scroll to top button based on scroll position
  window.addEventListener('scroll', function () {
    if (window.pageYOffset > 300) {
      scrollToTopButton.classList.add('visible');
    } else {
      scrollToTopButton.classList.remove('visible');
    }
  });

  // Functions
  function initCategoryFilter() {
    if (!categoryFilter) return;

    // Get unique categories
    const categories = [
      ...new Set(products.map((product) => product.category)),
    ];

    // Clear existing options except the first one
    while (categoryFilter.options.length > 1) {
      categoryFilter.remove(1);
    }

    // Add options to select
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }

  // Show loading spinner
  function showLoading() {
    // Create spinner overlay if it doesn't exist
    let spinnerOverlay = document.querySelector('.spinner-overlay');
    if (!spinnerOverlay) {
      spinnerOverlay = document.createElement('div');
      spinnerOverlay.className = 'spinner-overlay';
      spinnerOverlay.innerHTML = `
        <div class="spinner"></div>
        <div class="loading-text">Đang tải sản phẩm...</div>
      `;
      document.body.appendChild(spinnerOverlay);
    } else {
      // Reset any inline styles that might be preventing display
      spinnerOverlay.style.display = '';
    }

    // Show the spinner - use a small delay to ensure DOM updates
    setTimeout(() => {
      spinnerOverlay.classList.add('active');
    }, 10);

    // Add loading effect to category filter
    if (categoryFilter) {
      categoryFilter.classList.add('loading');
    }

    // Add loading effect to search button while preserving its position
    if (searchButton) {
      // Store original position values if needed
      if (!searchButton.dataset.originalPosition) {
        const computedStyle = window.getComputedStyle(searchButton);
        searchButton.dataset.originalPosition = JSON.stringify({
          position: computedStyle.position,
          right: computedStyle.right,
          top: computedStyle.top,
          bottom: computedStyle.bottom,
          width: computedStyle.width,
        });
      }

      // Add loading class
      searchButton.classList.add('loading');
    }

    // Add loading state to product grid
    if (productGrid) {
      productGrid.classList.add('loading');
    }

    // Log for debugging
    console.log('Loading shown at:', new Date().toISOString());
  }

  // Hide loading spinner
  function hideLoading() {
    const spinnerOverlay = document.querySelector('.spinner-overlay');
    if (spinnerOverlay) {
      spinnerOverlay.classList.remove('active');

      // Force removal after transition completes
      setTimeout(() => {
        if (spinnerOverlay.parentNode) {
          spinnerOverlay.style.display = 'none';
          // Reset display after a brief moment to allow future showings
          setTimeout(() => {
            spinnerOverlay.style.display = '';
          }, 100);
        }
      }, 300); // Match the transition duration in CSS
    }

    // Remove loading effect from category filter
    if (categoryFilter) {
      categoryFilter.classList.remove('loading');
    }

    // Remove loading effect from search button while preserving its position
    if (searchButton) {
      searchButton.classList.remove('loading');

      // Restore original position if needed
      if (searchButton.dataset.originalPosition) {
        const originalPosition = JSON.parse(
          searchButton.dataset.originalPosition
        );
        // Only apply if needed
        if (searchButton.style.position !== originalPosition.position) {
          Object.assign(searchButton.style, originalPosition);
        }
      }
    }

    // Remove loading state from product grid
    if (productGrid) {
      productGrid.classList.remove('loading');
    }

    // Log for debugging
    console.log('Loading hidden at:', new Date().toISOString());
  }

  function handleFilter() {
    currentPage = 1;

    // Clear any existing timeouts
    if (window.loadingTimeout) {
      clearTimeout(window.loadingTimeout);
    }

    // Show loading effect
    showLoading();

    // Apply filters and render after exactly 800ms
    window.loadingTimeout = setTimeout(() => {
      try {
        applyFilters();
        renderProducts();
        renderPagination();
        updateProductCount();
      } catch (error) {
        console.error('Error during filter processing:', error);
      } finally {
        // Always hide loading, even if there was an error
        hideLoading();
        window.loadingTimeout = null;
      }
    }, 800);
  }

  function handleSearch() {
    currentPage = 1;

    // Clear any existing timeouts
    if (window.loadingTimeout) {
      clearTimeout(window.loadingTimeout);
    }

    // Show loading effect
    showLoading();

    // Apply filters and render after exactly 800ms
    window.loadingTimeout = setTimeout(() => {
      try {
        applyFilters();
        renderProducts();
        renderPagination();
        updateProductCount();
      } catch (error) {
        console.error('Error during search processing:', error);
      } finally {
        // Always hide loading, even if there was an error
        hideLoading();
        window.loadingTimeout = null;
      }
    }, 800);
  }

  function applyFilters() {
    const categoryValue = categoryFilter ? categoryFilter.value : 'all';
    const searchValue = searchInput
      ? searchInput.value.toLowerCase().trim()
      : '';

    filteredProducts = products.filter((product) => {
      // Category filter
      const categoryMatch =
        categoryValue === 'all' || product.category === categoryValue;

      // Search filter
      const searchMatch =
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue);

      return categoryMatch && searchMatch;
    });
  }

  function renderProducts() {
    if (!productGrid) {
      console.error('Product grid element not found');
      return;
    }

    try {
      // Calculate pagination
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

      // Clear product grid - use safer approach for Safari
      while (productGrid.firstChild) {
        productGrid.removeChild(productGrid.firstChild);
      }

      // Check if no products found
      if (paginatedProducts.length === 0) {
        renderEmptyState();
        return;
      }

      // Create a document fragment for better performance
      const fragment = document.createDocumentFragment();

      // Render products
      paginatedProducts.forEach((product) => {
        const productCard = createProductCard(product);
        // Hide cards initially
        productCard.style.opacity = '0';
        productCard.style.transform = 'translateY(20px)';
        fragment.appendChild(productCard);
      });

      // Append all cards at once
      productGrid.appendChild(fragment);

      // Add fade-in animation with synchronized timing
      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach((card, index) => {
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 50); // Staggered animation for each card
      });
    } catch (error) {
      console.error('Error rendering products:', error);
    }
  }

  function createProductCard(product) {
    try {
      const card = document.createElement('div');
      card.className = 'product-card';

      // Safely access product properties with fallbacks
      const productName = product.name || 'Sản phẩm';
      const productImage = product.image || 'images/products/placeholder.jpg';
      const productCategory = product.category || 'Danh mục';
      const productDescription =
        product.description || 'Đang cập nhật thông tin sản phẩm';
      const productId = product.id || '1';

      // Create badge HTML if promotion exists
      const badgeHTML = product.promotion
        ? `<div class="product-badge">${product.promotion}</div>`
        : '';

      // Extract dimensions from description if available
      let dimensions = 'Đang cập nhật';
      try {
        const dimensionsMatch = productDescription.match(/kích thước ([^,]+)/i);
        if (dimensionsMatch && dimensionsMatch[1]) {
          dimensions = dimensionsMatch[1];
        }
      } catch (e) {
        console.log('Error extracting dimensions:', e);
      }

      // Create product card HTML - using safer approach for Safari
      const imageDiv = document.createElement('div');
      imageDiv.className = 'product-image';

      const img = document.createElement('img');
      img.src = productImage;
      img.alt = productName;
      img.setAttribute('loading', 'lazy');
      img.onerror = function () {
        this.src = 'images/products/placeholder.jpg';
      };
      imageDiv.appendChild(img);

      if (product.promotion) {
        const badge = document.createElement('div');
        badge.className = 'product-badge';
        badge.textContent = product.promotion;
        imageDiv.appendChild(badge);
      }

      card.appendChild(imageDiv);

      const contentDiv = document.createElement('div');
      contentDiv.className = 'product-content';

      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'product-category';
      const categoryIcon = document.createElement('i');
      categoryIcon.className = 'fas fa-tag';
      categoryDiv.appendChild(categoryIcon);
      categoryDiv.appendChild(document.createTextNode(' ' + productCategory));
      contentDiv.appendChild(categoryDiv);

      const title = document.createElement('h3');
      title.className = 'product-title';
      title.textContent = productName;
      contentDiv.appendChild(title);

      const desc = document.createElement('p');
      desc.className = 'product-description';
      desc.textContent = productDescription;
      contentDiv.appendChild(desc);

      const actionDiv = document.createElement('div');
      actionDiv.className = 'product-action';

      const detailsLink = document.createElement('a');
      detailsLink.href = `product-details.html?id=${productId}`;
      detailsLink.className = 'product-details';
      detailsLink.innerHTML = 'Chi tiết <i class="fas fa-arrow-right"></i>';
      actionDiv.appendChild(detailsLink);

      const dimensionsDiv = document.createElement('div');
      dimensionsDiv.className = 'product-dimensions';
      dimensionsDiv.innerHTML = `<i class="fas fa-ruler-combined"></i> ${dimensions}`;
      actionDiv.appendChild(dimensionsDiv);

      contentDiv.appendChild(actionDiv);
      card.appendChild(contentDiv);

      // Add click event to the entire card for better mobile experience
      card.addEventListener('click', function (e) {
        // Only navigate if the click wasn't on a button or link
        if (!e.target.closest('a') && !e.target.closest('button')) {
          window.location.href = `product-details.html?id=${productId}`;
        }
      });

      return card;
    } catch (error) {
      console.error('Error creating product card:', error);
      // Return a fallback card
      const fallbackCard = document.createElement('div');
      fallbackCard.className = 'product-card error-card';
      fallbackCard.textContent = 'Không thể hiển thị sản phẩm';
      return fallbackCard;
    }
  }

  function renderEmptyState() {
    // Check if we're on mobile
    const isMobile = window.innerWidth <= 576;

    // Create a more responsive empty state
    productGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>${
                  isMobile
                    ? 'Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm.'
                    : 'Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với các bộ lọc khác.'
                }</p>
                <button onclick="resetFilters()" class="reset-filters-btn">
                    <i class="fas fa-sync-alt"></i> Xóa bộ lọc
                </button>
            </div>
        `;

    // Hide pagination when no products
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
    }
  }

  function renderPagination() {
    if (!paginationContainer) return;

    // Calculate total pages
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Clear pagination container
    paginationContainer.innerHTML = '';

    // Don't render pagination if no pages or only one page
    if (totalPages <= 1) return;

    // Check if we're on mobile
    const isMobile = window.innerWidth <= 576;

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'nav-btn';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevButton.disabled = currentPage === 1;
    prevButton.setAttribute('aria-label', 'Trang trước');
    if (currentPage === 1) {
      prevButton.style.opacity = '0.5';
      prevButton.style.cursor = 'not-allowed';
    }
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;

        // Show loading effect
        showLoading();

        // Scroll to top of products
        document
          .querySelector('.products-section')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear any existing timeouts
        if (window.loadingTimeout) {
          clearTimeout(window.loadingTimeout);
        }

        // Apply changes after loading time
        window.loadingTimeout = setTimeout(() => {
          try {
            renderProducts();
            renderPagination();
            updateProductCount();
          } catch (error) {
            console.error('Error during pagination processing:', error);
          } finally {
            // Always hide loading, even if there was an error
            hideLoading();
            window.loadingTimeout = null;
          }
        }, 800);
      }
    });
    paginationContainer.appendChild(prevButton);

    // Page buttons
    const maxVisiblePages = isMobile ? 3 : 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // Adjust start page if end page is maxed out
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // For mobile, adjust pagination to show consecutive pages
    if (isMobile) {
      // On mobile, show a window of consecutive pages
      if (totalPages <= 5) {
        // If 5 or fewer pages, show all pages
        startPage = 1;
        endPage = totalPages;
      } else {
        // If more than 5 pages, show a window of 3 pages centered on current page
        if (currentPage <= 2) {
          // Near the start
          startPage = 1;
          endPage = 3;
        } else if (currentPage >= totalPages - 1) {
          // Near the end
          startPage = totalPages - 2;
          endPage = totalPages;
        } else {
          // In the middle
          startPage = currentPage - 1;
          endPage = currentPage + 1;
        }
      }
    }

    // First page - only add separately if not included in the range
    if (startPage > 1) {
      const firstPageButton = document.createElement('button');
      firstPageButton.textContent = '1';
      if (currentPage === 1) {
        firstPageButton.className = 'active';
      }
      firstPageButton.addEventListener('click', () => {
        currentPage = 1;

        // Show loading effect
        showLoading();

        // Scroll to top of products
        document
          .querySelector('.products-section')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear any existing timeouts
        if (window.loadingTimeout) {
          clearTimeout(window.loadingTimeout);
        }

        // Apply changes after loading time
        window.loadingTimeout = setTimeout(() => {
          try {
            renderProducts();
            renderPagination();
            updateProductCount();
          } catch (error) {
            console.error('Error during pagination processing:', error);
          } finally {
            // Always hide loading, even if there was an error
            hideLoading();
            window.loadingTimeout = null;
          }
        }, 800);
      });
      paginationContainer.appendChild(firstPageButton);

      // Ellipsis if needed
      if (startPage > 2) {
        const ellipsis = document.createElement('div');
        ellipsis.className = 'ellipsis';
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
      }
    }

    // Page buttons for the range
    for (let i = startPage; i <= endPage; i++) {
      // Skip if this is page 1 or the last page and they're already added separately
      if (
        (i === 1 && startPage > 1) ||
        (i === totalPages && endPage < totalPages)
      ) {
        continue;
      }

      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.className = 'active';
      }
      pageButton.addEventListener('click', () => {
        currentPage = i;

        // Show loading effect
        showLoading();

        // Scroll to top of products
        document
          .querySelector('.products-section')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear any existing timeouts
        if (window.loadingTimeout) {
          clearTimeout(window.loadingTimeout);
        }

        // Apply changes after loading time
        window.loadingTimeout = setTimeout(() => {
          try {
            renderProducts();
            renderPagination();
            updateProductCount();
          } catch (error) {
            console.error('Error during pagination processing:', error);
          } finally {
            // Always hide loading, even if there was an error
            hideLoading();
            window.loadingTimeout = null;
          }
        }, 800);
      });
      paginationContainer.appendChild(pageButton);
    }

    // Last page - only add separately if not included in the range
    if (endPage < totalPages) {
      // Ellipsis if needed
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement('div');
        ellipsis.className = 'ellipsis';
        ellipsis.textContent = '...';
        paginationContainer.appendChild(ellipsis);
      }

      const lastPageButton = document.createElement('button');
      lastPageButton.textContent = totalPages;
      if (currentPage === totalPages) {
        lastPageButton.className = 'active';
      }
      lastPageButton.addEventListener('click', () => {
        currentPage = totalPages;

        // Show loading effect
        showLoading();

        // Scroll to top of products
        document
          .querySelector('.products-section')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear any existing timeouts
        if (window.loadingTimeout) {
          clearTimeout(window.loadingTimeout);
        }

        // Apply changes after loading time
        window.loadingTimeout = setTimeout(() => {
          try {
            renderProducts();
            renderPagination();
            updateProductCount();
          } catch (error) {
            console.error('Error during pagination processing:', error);
          } finally {
            // Always hide loading, even if there was an error
            hideLoading();
            window.loadingTimeout = null;
          }
        }, 800);
      });
      paginationContainer.appendChild(lastPageButton);
    }

    // Next button
    const nextButton = document.createElement('button');
    nextButton.className = 'nav-btn';
    nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.setAttribute('aria-label', 'Trang tiếp');
    if (currentPage === totalPages) {
      nextButton.style.opacity = '0.5';
      nextButton.style.cursor = 'not-allowed';
    }
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;

        // Show loading effect
        showLoading();

        // Scroll to top of products
        document
          .querySelector('.products-section')
          .scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Clear any existing timeouts
        if (window.loadingTimeout) {
          clearTimeout(window.loadingTimeout);
        }

        // Apply changes after loading time
        window.loadingTimeout = setTimeout(() => {
          try {
            renderProducts();
            renderPagination();
            updateProductCount();
          } catch (error) {
            console.error('Error during pagination processing:', error);
          } finally {
            // Always hide loading, even if there was an error
            hideLoading();
            window.loadingTimeout = null;
          }
        }, 800);
      }
    });
    paginationContainer.appendChild(nextButton);
  }

  function updateProductCount() {
    if (!productCountElement) return;

    const totalProducts = filteredProducts.length;
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts);

    // Update text based on number of products
    if (totalProducts === 0) {
      productCountElement.textContent = '0';
      productCountElement.parentElement.textContent = 'Không có sản phẩm nào';
    } else {
      productCountElement.textContent = totalProducts;

      // On mobile, show simplified count
      if (window.innerWidth <= 576) {
        const countText = productCountElement.parentElement;
        countText.innerHTML = `Hiển thị <span>${totalProducts}</span> sản phẩm`;
      } else {
        const countText = productCountElement.parentElement;
        countText.innerHTML = `Hiển thị <span>${startIndex}-${endIndex}</span> của <span>${totalProducts}</span> sản phẩm`;
      }
    }
  }

  // Expose functions to global scope with Safari compatibility
  window.resetFilters = function () {
    try {
      if (categoryFilter) categoryFilter.value = 'all';
      if (searchInput) searchInput.value = '';

      currentPage = 1;
      filteredProducts = Array.isArray(products) ? [...products] : [];

      // Clear any existing timeouts
      if (window.loadingTimeout) {
        clearTimeout(window.loadingTimeout);
      }

      // Show loading when resetting filters
      showLoading();

      // Use setTimeout to avoid potential Safari issues and show loading effect
      window.loadingTimeout = setTimeout(function () {
        try {
          renderProducts();
          renderPagination();
          updateProductCount();
        } catch (error) {
          console.error('Error during reset processing:', error);
        } finally {
          // Always hide loading, even if there was an error
          hideLoading();
          window.loadingTimeout = null;
        }
      }, 800);
    } catch (error) {
      console.error('Error resetting filters:', error);
      // Attempt recovery
      location.reload();
    }
  };

  // Add a global recovery function for Safari
  window.recoverProductsPage = function () {
    try {
      filteredProducts = Array.isArray(products) ? [...products] : [];
      currentPage = 1;
      renderProducts();
      renderPagination();
      updateProductCount();
    } catch (error) {
      console.error('Recovery failed:', error);
      location.reload();
    }
  };

  // Add a page visibility change handler for Safari
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && isSafari) {
      console.log('Page became visible again, checking products...');
      // Check if products are displayed
      if (productGrid && productGrid.children.length === 0) {
        console.log('Products missing, attempting recovery...');
        setTimeout(window.recoverProductsPage, 100);
      }
    }
  });
});
