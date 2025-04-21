/**
 * Fullscreen Search Functionality
 * Provides a mobile-friendly fullscreen search experience
 */
document.addEventListener('DOMContentLoaded', function () {
  // Create the fullscreen search container if it doesn't exist
  if (!document.querySelector('.fullscreen-search')) {
    createSearchInterface();
  }

  // Initialize search functionality
  initSearch();
});

/**
 * Creates the fullscreen search interface
 */
function createSearchInterface() {
  // Create the fullscreen search container
  const searchContainer = document.createElement('div');
  searchContainer.className = 'fullscreen-search';

  // Add the search header
  searchContainer.innerHTML = `
        <div class="search-header">
            <button class="search-back-btn">
                <i class="fas fa-arrow-left"></i>
            </button>
            <div class="search-input-container">
                <i class="fas fa-search"></i>
                <input type="text" class="search-input" placeholder="Tìm kiếm sản phẩm, bài viết...">
                <button class="search-clear-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <div class="search-content">
            <!-- Tabs for different search types -->
            <div class="search-tabs">
                <div class="search-tab active" data-tab="all">Tất cả <span class="search-count">0</span></div>
                <div class="search-tab" data-tab="products">Sản phẩm <span class="search-count">0</span></div>
                <div class="search-tab" data-tab="blog">Bài viết <span class="search-count">0</span></div>
            </div>

            <!-- Search history -->
            <div class="search-history">
                <div class="search-history-title">
                    Tìm kiếm gần đây
                    <button class="search-history-clear">Xóa tất cả</button>
                </div>
                <div class="search-history-items">
                    <!-- Search history items will be added dynamically -->
                </div>
            </div>

            <!-- Popular searches -->
            <div class="search-suggestions">
                <div class="search-suggestions-title">Tìm kiếm phổ biến</div>
                <div class="search-suggestion-tags">
                    <div class="search-suggestion-tag">Tủ quần áo</div>
                    <div class="search-suggestion-tag">Bàn làm việc</div>
                    <div class="search-suggestion-tag">Giường ngủ</div>
                    <div class="search-suggestion-tag">Tủ bếp</div>
                    <div class="search-suggestion-tag">Bàn trang điểm</div>
                </div>
            </div>

            <!-- Loading indicator -->
            <div class="search-loading">
                <div class="search-spinner"></div>
                <div class="search-loading-text">Đang tìm kiếm...</div>
            </div>

            <!-- Tab content -->
            <div class="search-tab-content active" data-tab="all">
                <!-- All results will be shown here -->
                <div class="search-results" id="all-results"></div>
            </div>

            <div class="search-tab-content" data-tab="products">
                <!-- Product results will be shown here -->
                <div class="search-results" id="product-results"></div>
            </div>

            <div class="search-tab-content" data-tab="blog">
                <!-- Blog results will be shown here -->
                <div class="search-blog-results" id="blog-results"></div>
            </div>

            <!-- Empty state -->
            <div class="search-empty-state" style="display: none;">
                <div class="search-empty-icon">
                    <i class="fas fa-search"></i>
                </div>
                <div class="search-empty-title">Không tìm thấy kết quả</div>
                <div class="search-empty-text">Vui lòng thử lại với từ khóa khác</div>
            </div>
        </div>
    `;

  // Add the search container to the body
  document.body.appendChild(searchContainer);

  // Add the CSS file if it's not already added
  if (!document.querySelector('link[href="css/fullscreen-search.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'css/fullscreen-search.css';
    document.head.appendChild(link);
  }
}

/**
 * Initializes the search functionality
 */
function initSearch() {
  // Get DOM elements
  const searchNav = document.getElementById('search-nav');
  const searchContainer = document.querySelector('.fullscreen-search');
  const searchBackBtn = document.querySelector('.search-back-btn');
  const searchInput = document.querySelector('.search-input');
  const searchClearBtn = document.querySelector('.search-clear-btn');
  const searchTabs = document.querySelectorAll('.search-tab');
  const searchTabContents = document.querySelectorAll('.search-tab-content');
  const searchHistoryClear = document.querySelector('.search-history-clear');
  const searchHistoryItems = document.querySelector('.search-history-items');
  const searchSuggestionTags = document.querySelectorAll(
    '.search-suggestion-tag'
  );

  // Handle search nav click
  if (searchNav) {
    searchNav.addEventListener('click', function (e) {
      e.preventDefault();
      openSearch();
    });
  }

  // Handle back button click
  if (searchBackBtn) {
    searchBackBtn.addEventListener('click', function () {
      closeSearch();
    });
  }

  // Handle clear button click
  if (searchClearBtn) {
    searchClearBtn.addEventListener('click', function () {
      searchInput.value = '';
      searchInput.focus();
      updateClearButtonVisibility();
    });
  }

  // Handle input changes
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      updateClearButtonVisibility();

      // If the input is not empty, perform search
      if (searchInput.value.trim() !== '') {
        performSearch(searchInput.value.trim());
      } else {
        // If the input is empty, hide results and show history/suggestions
        document.querySelector('.search-history').style.display = 'block';
        document.querySelector('.search-suggestions').style.display = 'block';
        document.querySelector('.search-empty-state').style.display = 'none';

        // Clear results
        document.getElementById('all-results').innerHTML = '';
        document.getElementById('product-results').innerHTML = '';
        document.getElementById('blog-results').innerHTML = '';

        // Update counts
        updateResultCounts(0, 0);
      }
    });

    // Handle enter key
    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && searchInput.value.trim() !== '') {
        performSearch(searchInput.value.trim());

        // Add to search history
        addToSearchHistory(searchInput.value.trim());
      }
    });
  }

  // Handle tab clicks
  searchTabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs
      searchTabs.forEach((t) => t.classList.remove('active'));

      // Add active class to clicked tab
      this.classList.add('active');

      // Show corresponding tab content
      const tabName = this.getAttribute('data-tab');
      searchTabContents.forEach((content) => {
        if (content.getAttribute('data-tab') === tabName) {
          content.classList.add('active');
        } else {
          content.classList.remove('active');
        }
      });
    });
  });

  // Handle clear history
  if (searchHistoryClear) {
    searchHistoryClear.addEventListener('click', function () {
      // Clear search history from localStorage
      localStorage.removeItem('searchHistory');

      // Clear search history items
      searchHistoryItems.innerHTML = '';

      // Hide search history if empty
      document.querySelector('.search-history').style.display = 'none';
    });
  }

  // Handle suggestion tag clicks
  searchSuggestionTags.forEach((tag) => {
    tag.addEventListener('click', function () {
      // Set input value to tag text
      searchInput.value = this.textContent;

      // Perform search
      performSearch(this.textContent);

      // Add to search history
      addToSearchHistory(this.textContent);
    });
  });

  // Load search history
  loadSearchHistory();
}

/**
 * Opens the fullscreen search
 */
function openSearch() {
  const searchContainer = document.querySelector('.fullscreen-search');
  const searchInput = document.querySelector('.search-input');

  // Show the search container
  searchContainer.classList.add('active');

  // Focus the input
  setTimeout(() => {
    searchInput.focus();
  }, 300);

  // Prevent body scrolling
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the fullscreen search
 */
function closeSearch() {
  const searchContainer = document.querySelector('.fullscreen-search');

  // Hide the search container
  searchContainer.classList.remove('active');

  // Allow body scrolling
  document.body.style.overflow = '';
}

/**
 * Updates the visibility of the clear button
 */
function updateClearButtonVisibility() {
  const searchInput = document.querySelector('.search-input');
  const searchClearBtn = document.querySelector('.search-clear-btn');

  if (searchInput.value.trim() !== '') {
    searchClearBtn.style.display = 'block';
  } else {
    searchClearBtn.style.display = 'none';
  }
}

/**
 * Performs a search with the given query
 * @param {string} query - The search query
 */
function performSearch(query) {
  // Show loading indicator
  const loadingIndicator = document.querySelector('.search-loading');
  loadingIndicator.classList.add('active');

  // Hide history and suggestions
  document.querySelector('.search-history').style.display = 'none';
  document.querySelector('.search-suggestions').style.display = 'none';

  // Clear previous results
  document.getElementById('all-results').innerHTML = '';
  document.getElementById('product-results').innerHTML = '';
  document.getElementById('blog-results').innerHTML = '';

  // Simulate search delay
  setTimeout(() => {
    // Hide loading indicator
    loadingIndicator.classList.remove('active');

    // Search in products
    const productResults = searchProducts(query);

    // Search in blog posts
    const blogResults = searchBlogPosts(query);

    // Update result counts
    updateResultCounts(productResults.length, blogResults.length);

    // If no results found, show empty state
    if (productResults.length === 0 && blogResults.length === 0) {
      document.querySelector('.search-empty-state').style.display = 'flex';
    } else {
      document.querySelector('.search-empty-state').style.display = 'none';

      // Display product results
      displayProductResults(productResults);

      // Display blog results
      displayBlogResults(blogResults);
    }
  }, 500);
}

/**
 * Searches for products matching the query
 * @param {string} query - The search query
 * @returns {Array} - Array of matching products
 */
function searchProducts(query) {
  // Normalize query for case-insensitive search
  const normalizedQuery = normalizeString(query);

  // Check if products are available
  if (!window.products || !Array.isArray(window.products)) {
    console.error('Products data not available for search');
    return [];
  }

  // Filter products that match the query
  return window.products.filter((product) => {
    // Check if product name or category matches the query
    const nameMatch =
      product.name && normalizeString(product.name).includes(normalizedQuery);
    const categoryMatch =
      product.category &&
      normalizeString(product.category).includes(normalizedQuery);
    const descriptionMatch =
      product.description &&
      normalizeString(product.description).includes(normalizedQuery);

    return nameMatch || categoryMatch || descriptionMatch;
  });
}

/**
 * Searches for blog posts matching the query
 * @param {string} query - The search query
 * @returns {Array} - Array of matching blog posts
 */
function searchBlogPosts(query) {
  // Normalize query for case-insensitive search
  const normalizedQuery = normalizeString(query);

  // Check if blog posts are available
  if (!window.blogPosts || !Array.isArray(window.blogPosts)) {
    console.error('Blog posts data not available for search');
    return [];
  }

  // Filter blog posts that match the query
  return window.blogPosts.filter((post) => {
    // Check if post title, content, excerpt or category matches the query
    const titleMatch =
      post.title && normalizeString(post.title).includes(normalizedQuery);
    const contentMatch =
      post.content && normalizeString(post.content).includes(normalizedQuery);
    const excerptMatch =
      post.excerpt && normalizeString(post.excerpt).includes(normalizedQuery);
    const categoryMatch =
      post.category && normalizeString(post.category).includes(normalizedQuery);

    return titleMatch || contentMatch || excerptMatch || categoryMatch;
  });
}

/**
 * Normalizes a string for search (removes accents, converts to lowercase)
 * @param {string} str - The string to normalize
 * @returns {string} - The normalized string
 */
function normalizeString(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Displays product search results
 * @param {Array} products - Array of products to display
 */
function displayProductResults(products) {
  const allResultsContainer = document.getElementById('all-results');
  const productResultsContainer = document.getElementById('product-results');

  // Create HTML for each product
  const productsHTML = products
    .map((product) => {
      return `
            <div class="search-result-card" data-id="${product.id}">
                <img src="${product.images[0]}" alt="${
        product.name
      }" class="search-result-image">
                <div class="search-result-info">
                    <h3 class="search-result-title">${product.name}</h3>
                    <div class="search-result-price">${
                      product.price === 'Liên hệ'
                        ? 'Liên hệ'
                        : formatPrice(product.price)
                    }</div>
                    <div class="search-result-contact">
                        <a href="product-details.html?id=${
                          product.id
                        }" class="search-result-contact-btn">
                            <i class="fas fa-eye"></i> Xem chi tiết
                        </a>
                    </div>
                </div>
            </div>
        `;
    })
    .join('');

  // Add products to containers
  allResultsContainer.innerHTML = productsHTML;
  productResultsContainer.innerHTML = productsHTML;

  // Add click event to product cards
  const productCards = document.querySelectorAll('.search-result-card');
  productCards.forEach((card) => {
    card.addEventListener('click', function () {
      const productId = this.getAttribute('data-id');
      window.location.href = `product-details.html?id=${productId}`;
    });
  });
}

/**
 * Displays blog search results
 * @param {Array} posts - Array of blog posts to display
 */
function displayBlogResults(posts) {
  const allResultsContainer = document.getElementById('all-results');
  const blogResultsContainer = document.getElementById('blog-results');

  // Create HTML for each blog post
  const postsHTML = posts
    .map((post) => {
      return `
            <div class="search-blog-card" data-id="${post.id}">
                <img src="${post.image || 'images/placeholder.jpg'}" alt="${
        post.title
      }" class="search-blog-image">
                <div class="search-blog-info">
                    <h3 class="search-blog-title">${post.title}</h3>
                    <p class="search-blog-excerpt">${
                      post.excerpt || post.content.substring(0, 100)
                    }...</p>
                    <div class="search-blog-meta">
                        <span class="search-blog-date"><i class="far fa-calendar-alt"></i> ${formatDate(
                          post.date
                        )}</span>
                        <span class="search-blog-category">${
                          post.category
                        }</span>
                    </div>
                </div>
            </div>
        `;
    })
    .join('');

  // Add blog posts to containers
  if (posts.length > 0) {
    // Add to all results if there are products
    if (
      document.querySelectorAll('#all-results .search-result-card').length > 0
    ) {
      allResultsContainer.innerHTML += `
                <div class="search-section-divider">Bài viết</div>
                <div class="search-blog-wrapper">${postsHTML}</div>
            `;
    } else {
      allResultsContainer.innerHTML = `<div class="search-blog-wrapper">${postsHTML}</div>`;
    }

    // Add to blog results
    blogResultsContainer.innerHTML = `<div class="search-blog-wrapper">${postsHTML}</div>`;
  }

  // Add click event to blog cards
  const blogCards = document.querySelectorAll('.search-blog-card');
  blogCards.forEach((card) => {
    card.addEventListener('click', function () {
      const postId = this.getAttribute('data-id');
      window.location.href = `blog-post.html?id=${postId}`;
    });
  });
}

/**
 * Updates the result counts in the tabs
 * @param {number} productCount - Number of product results
 * @param {number} blogCount - Number of blog results
 */
function updateResultCounts(productCount, blogCount) {
  const totalCount = productCount + blogCount;

  // Update all tab count
  document.querySelector(
    '.search-tab[data-tab="all"] .search-count'
  ).textContent = totalCount;

  // Update products tab count
  document.querySelector(
    '.search-tab[data-tab="products"] .search-count'
  ).textContent = productCount;

  // Update blog tab count
  document.querySelector(
    '.search-tab[data-tab="blog"] .search-count'
  ).textContent = blogCount;
}

/**
 * Formats a price with currency
 * @param {number|string} price - The price to format
 * @returns {string} - The formatted price
 */
function formatPrice(price) {
  if (typeof price === 'string') {
    return price;
  }

  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}

/**
 * Formats a date
 * @param {string} dateString - The date string to format
 * @returns {string} - The formatted date
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN');
}

/**
 * Adds a search query to the search history
 * @param {string} query - The search query
 */
function addToSearchHistory(query) {
  // Get existing search history
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  // Remove the query if it already exists
  searchHistory = searchHistory.filter((item) => item !== query);

  // Add the query to the beginning of the array
  searchHistory.unshift(query);

  // Limit the history to 5 items
  searchHistory = searchHistory.slice(0, 5);

  // Save the updated history
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

  // Update the search history display
  loadSearchHistory();
}

/**
 * Loads and displays the search history
 */
function loadSearchHistory() {
  const searchHistoryItems = document.querySelector('.search-history-items');
  const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  // Clear existing items
  searchHistoryItems.innerHTML = '';

  // If there are no history items, hide the history section
  if (searchHistory.length === 0) {
    document.querySelector('.search-history').style.display = 'none';
    return;
  }

  // Show the history section
  document.querySelector('.search-history').style.display = 'block';

  // Add each history item
  searchHistory.forEach((query) => {
    const historyItem = document.createElement('div');
    historyItem.className = 'search-history-item';
    historyItem.innerHTML = `
            <i class="fas fa-history"></i>
            <div class="search-history-text">${query}</div>
            <button class="search-history-remove" data-query="${query}">
                <i class="fas fa-times"></i>
            </button>
        `;

    // Add click event to history item
    historyItem.addEventListener('click', function (e) {
      // Ignore clicks on the remove button
      if (e.target.closest('.search-history-remove')) {
        return;
      }

      // Set input value to history item text
      document.querySelector('.search-input').value = query;

      // Perform search
      performSearch(query);
    });

    // Add click event to remove button
    historyItem
      .querySelector('.search-history-remove')
      .addEventListener('click', function (e) {
        e.stopPropagation();

        // Remove from search history
        removeFromSearchHistory(query);
      });

    // Add to container
    searchHistoryItems.appendChild(historyItem);
  });
}

/**
 * Removes a query from the search history
 * @param {string} query - The query to remove
 */
function removeFromSearchHistory(query) {
  // Get existing search history
  let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  // Remove the query
  searchHistory = searchHistory.filter((item) => item !== query);

  // Save the updated history
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));

  // Update the search history display
  loadSearchHistory();
}
