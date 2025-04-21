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
                <div class="search-input-wrapper">
                    <input type="text" class="search-input" placeholder="Tìm kiếm sản phẩm, bài viết...">
                    <div class="search-autocomplete" style="display: none;"></div>
                </div>
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
                <!-- Advanced search filters -->
                <div class="search-advanced-filters">
                    <div class="search-filter-toggle">
                        <i class="fas fa-sliders-h"></i> Bộ lọc nâng cao
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="search-filters-container" style="display: none;">
                        <!-- Category filter -->
                        <div class="search-filter-group">
                            <div class="search-filter-label">Danh mục</div>
                            <select id="search-category-filter" class="search-filter-select">
                                <option value="all">Tất cả danh mục</option>
                                <option value="Tủ Quần Áo">Tủ quần áo</option>
                                <option value="Bàn Làm Việc">Bàn làm việc</option>
                                <option value="Giường Ngủ">Giường ngủ</option>
                                <option value="Bàn Ăn">Bàn ăn</option>
                                <option value="Ghế">Ghế</option>
                                <option value="Kệ Sách">Kệ sách</option>
                            </select>
                        </div>

                        <!-- Material filter -->
                        <div class="search-filter-group">
                            <div class="search-filter-label">Chất liệu</div>
                            <select id="search-material-filter" class="search-filter-select">
                                <option value="all">Tất cả chất liệu</option>
                                <option value="Gỗ MDF">Gỗ MDF</option>
                                <option value="Gỗ tự nhiên">Gỗ tự nhiên</option>
                                <option value="Gỗ công nghiệp">Gỗ công nghiệp</option>
                                <option value="Gỗ sồi">Gỗ sồi</option>
                            </select>
                        </div>

                        <!-- Price range filter -->
                        <div class="search-filter-group">
                            <div class="search-filter-label">Khoảng giá</div>
                            <select id="search-price-filter" class="search-filter-select">
                                <option value="all">Tất cả giá</option>
                                <option value="contact">Liên hệ báo giá</option>
                                <option value="under-5m">Dưới 5 triệu</option>
                                <option value="5m-10m">5 - 10 triệu</option>
                                <option value="10m-20m">10 - 20 triệu</option>
                                <option value="above-20m">Trên 20 triệu</option>
                            </select>
                        </div>

                        <!-- Tag filter -->
                        <div class="search-filter-group">
                            <div class="search-filter-label">Thẻ</div>
                            <div class="search-filter-tags">
                                <label class="search-filter-tag">
                                    <input type="checkbox" value="bán chạy" class="search-tag-checkbox">
                                    <span>Bán chạy</span>
                                </label>
                                <label class="search-filter-tag">
                                    <input type="checkbox" value="mới" class="search-tag-checkbox">
                                    <span>Mới</span>
                                </label>
                                <label class="search-filter-tag">
                                    <input type="checkbox" value="khuyến mãi" class="search-tag-checkbox">
                                    <span>Khuyến mãi</span>
                                </label>
                            </div>
                        </div>

                        <!-- Filter actions -->
                        <div class="search-filter-actions">
                            <button id="search-apply-filters" class="search-filter-apply">Lọc kết quả</button>
                            <button id="search-reset-filters" class="search-filter-reset">Xóa bộ lọc</button>
                        </div>
                    </div>
                </div>

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

      // Show autocomplete if input has at least 2 characters
      const query = searchInput.value.trim();
      if (query.length >= 2) {
        showAutocomplete(query);
      } else {
        hideAutocomplete();
      }

      // If the input is empty, hide results and show history/suggestions
      if (query === '') {
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

  // Initialize advanced filters
  initAdvancedFilters();

  // Initialize autocomplete
  initAutocomplete();
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
 * @param {Object} filters - Optional filters to apply
 */
function performSearch(query, filters = {}) {
  // Hide autocomplete
  hideAutocomplete();

  // Show loading indicator
  const loadingIndicator = document.querySelector('.search-loading');
  loadingIndicator.classList.add('active');

  // Hide history and suggestions
  document.querySelector('.search-history').style.display = 'none';
  document.querySelector('.search-suggestions').style.display = 'none';

  // Show search query
  const searchQueryDisplay = document.createElement('div');
  searchQueryDisplay.className = 'search-query-display';
  searchQueryDisplay.innerHTML = `<span>Kết quả tìm kiếm cho: <strong>${query}</strong></span>`;

  // Clear previous results
  document.getElementById('all-results').innerHTML = '';
  document.getElementById('product-results').innerHTML = '';
  document.getElementById('blog-results').innerHTML = '';

  // Add search query display to all tabs
  document
    .getElementById('all-results')
    .appendChild(searchQueryDisplay.cloneNode(true));
  document
    .getElementById('product-results')
    .appendChild(searchQueryDisplay.cloneNode(true));
  document
    .getElementById('blog-results')
    .appendChild(searchQueryDisplay.cloneNode(true));

  // Simulate search delay
  setTimeout(() => {
    // Hide loading indicator
    loadingIndicator.classList.remove('active');

    try {
      console.log(
        'Performing search with query:',
        query,
        'and filters:',
        filters
      );

      // Search in products with filters
      const productResults = searchProducts(query, filters);

      // Search in blog posts
      const blogResults = searchBlogPosts(query);

      console.log('Search results:', {
        products: productResults.length,
        blogs: blogResults.length,
      });

      // Update result counts
      updateResultCounts(productResults.length, blogResults.length);

      // If no results found, show empty state
      if (productResults.length === 0 && blogResults.length === 0) {
        document.querySelector('.search-empty-state').style.display = 'flex';
        document.querySelector('.search-empty-title').textContent =
          'Không tìm thấy kết quả';
        document.querySelector(
          '.search-empty-text'
        ).textContent = `Không tìm thấy kết quả nào cho "${query}". Vui lòng thử từ khóa khác.`;
      } else {
        document.querySelector('.search-empty-state').style.display = 'none';

        // Display product results
        displayProductResults(productResults);

        // Display blog results
        displayBlogResults(blogResults);

        console.log('Results displayed successfully');
      }

      // Save search to history if it's a new search (not just filtering)
      if (!filters.isFilterSearch) {
        console.log('Adding search to history:', query);
        addToSearchHistory(query);
      } else {
        console.log('Not adding filtered search to history');
      }
    } catch (error) {
      console.error('Error during search:', error);
      document.querySelector('.search-empty-state').style.display = 'flex';
      document.querySelector('.search-empty-title').textContent =
        'Đã xảy ra lỗi';
      document.querySelector('.search-empty-text').textContent =
        'Vui lòng thử lại sau';

      // Clear search query display
      document.querySelectorAll('.search-query-display').forEach((el) => {
        el.style.display = 'none';
      });
    }
  }, 500);
}

/**
 * Searches for products matching the query
 * @param {string} query - The search query
 * @param {Object} filters - Optional filters to apply
 * @returns {Array} - Array of matching products
 */
function searchProducts(query, filters = {}) {
  // Normalize query for case-insensitive search
  const normalizedQuery = normalizeString(query);

  console.log('Searching products with query:', query);
  console.log('Applying filters:', filters);

  // Check if products are available
  if (!window.products || !Array.isArray(window.products)) {
    console.error('Products data not available for search');
    return [];
  }

  console.log('Total products available:', window.products.length);

  // Filter products that match the query
  let results = window.products.filter((product) => {
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

  console.log('Products matching query:', results.length);

  // Apply category filter
  if (filters.category && filters.category !== 'all') {
    console.log('Applying category filter:', filters.category);
    results = results.filter((product) => {
      const match =
        product.category &&
        normalizeString(product.category) === normalizeString(filters.category);
      return match;
    });
    console.log('Products after category filter:', results.length);
  }

  // Apply material filter
  if (filters.material && filters.material !== 'all') {
    console.log('Applying material filter:', filters.material);
    results = results.filter((product) => {
      const match =
        product.material &&
        normalizeString(product.material).includes(
          normalizeString(filters.material)
        );
      return match;
    });
    console.log('Products after material filter:', results.length);
  }

  // Apply price filter
  if (filters.price && filters.price !== 'all') {
    console.log('Applying price filter:', filters.price);
    results = results.filter((product) => {
      if (filters.price === 'contact') {
        return (
          product.price === 'Liên hệ' ||
          product.price === 'Liên Hệ' ||
          typeof product.price !== 'number'
        );
      }

      if (typeof product.price === 'number') {
        const price = product.price;
        switch (filters.price) {
          case 'under-5m':
            return price < 5000000;
          case '5m-10m':
            return price >= 5000000 && price <= 10000000;
          case '10m-20m':
            return price > 10000000 && price <= 20000000;
          case 'above-20m':
            return price > 20000000;
          default:
            return true;
        }
      }
      return true;
    });
    console.log('Products after price filter:', results.length);
  }

  // Apply tag filters
  if (filters.tags && filters.tags.length > 0) {
    console.log('Applying tag filters:', filters.tags);
    results = results.filter((product) => {
      if (!product.tag) return false;

      // Check if any of the selected tags match the product tag
      const match = filters.tags.some((tag) => {
        const tagMatch = normalizeString(product.tag).includes(
          normalizeString(tag)
        );
        return tagMatch;
      });
      return match;
    });
    console.log('Products after tag filter:', results.length);
  }

  console.log('Final results count:', results.length);
  return results;
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
      // Use first image or placeholder
      const imageUrl =
        product.images && product.images.length > 0
          ? product.images[0]
          : 'images/placeholder.jpg';

      return `
            <div class="search-result-card" data-id="${product.id}">
                <img src="${imageUrl}" alt="${
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
  if (products.length > 0) {
    allResultsContainer.innerHTML = `
      <div class="search-section-header">
        <div class="search-section-title">Sản phẩm</div>
        <button class="search-section-view-all" data-tab="products">Xem tất cả <i class="fas fa-angle-right"></i></button>
      </div>
      <div class="search-products-wrapper">${productsHTML}</div>
    `;
    productResultsContainer.innerHTML = productsHTML;
  } else {
    productResultsContainer.innerHTML = `
      <div class="search-empty-category">
        <div class="search-empty-icon"><i class="fas fa-box-open"></i></div>
        <div class="search-empty-text">Không tìm thấy sản phẩm nào</div>
      </div>
    `;
  }

  // Add click event to product cards
  const productCards = document.querySelectorAll('.search-result-card');
  productCards.forEach((card) => {
    card.addEventListener('click', function () {
      const productId = this.getAttribute('data-id');
      window.location.href = `product-details.html?id=${productId}`;
    });
  });

  // Add click event to "View All" buttons
  const viewAllButtons = document.querySelectorAll('.search-section-view-all');
  viewAllButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      const tabName = this.getAttribute('data-tab');

      // Find and click the corresponding tab
      const tab = document.querySelector(`.search-tab[data-tab="${tabName}"]`);
      if (tab) {
        tab.click();
      }
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
      document.querySelectorAll('#all-results .search-products-wrapper')
        .length > 0
    ) {
      allResultsContainer.innerHTML += `
        <div class="search-section-header">
          <div class="search-section-title">Bài viết</div>
          <button class="search-section-view-all" data-tab="blog">Xem tất cả <i class="fas fa-angle-right"></i></button>
        </div>
        <div class="search-blog-wrapper">${postsHTML}</div>
      `;
    } else {
      allResultsContainer.innerHTML = `
        <div class="search-section-header">
          <div class="search-section-title">Bài viết</div>
          <button class="search-section-view-all" data-tab="blog">Xem tất cả <i class="fas fa-angle-right"></i></button>
        </div>
        <div class="search-blog-wrapper">${postsHTML}</div>
      `;
    }

    // Add to blog results
    blogResultsContainer.innerHTML = `<div class="search-blog-wrapper">${postsHTML}</div>`;
  } else {
    blogResultsContainer.innerHTML = `
      <div class="search-empty-category">
        <div class="search-empty-icon"><i class="fas fa-newspaper"></i></div>
        <div class="search-empty-text">Không tìm thấy bài viết nào</div>
      </div>
    `;
  }

  // Add click event to blog cards
  const blogCards = document.querySelectorAll('.search-blog-card');
  blogCards.forEach((card) => {
    card.addEventListener('click', function () {
      const postId = this.getAttribute('data-id');
      window.location.href = `blog-detail.html?id=${postId}`;
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

/**
 * Initializes the advanced filters functionality
 */
function initAdvancedFilters() {
  console.log('Initializing advanced filters');
  const filterToggle = document.querySelector('.search-filter-toggle');
  const filtersContainer = document.querySelector('.search-filters-container');
  const applyFiltersBtn = document.getElementById('search-apply-filters');
  const resetFiltersBtn = document.getElementById('search-reset-filters');

  console.log('Filter elements:', {
    filterToggle: !!filterToggle,
    filtersContainer: !!filtersContainer,
    applyFiltersBtn: !!applyFiltersBtn,
    resetFiltersBtn: !!resetFiltersBtn,
  });

  // Toggle filters visibility
  if (filterToggle && filtersContainer) {
    filterToggle.addEventListener('click', function () {
      const isVisible = filtersContainer.style.display !== 'none';
      console.log('Toggle filters visibility, current state:', isVisible);
      filtersContainer.style.display = isVisible ? 'none' : 'block';
      this.classList.toggle('active', !isVisible);
    });
    console.log('Filter toggle event listener added');
  }

  // Apply filters
  if (applyFiltersBtn) {
    applyFiltersBtn.addEventListener('click', function () {
      console.log('Apply filters button clicked');
      const filters = getSelectedFilters();
      const searchInput = document.querySelector('.search-input');
      const query = searchInput.value.trim();

      if (query) {
        console.log('Applying filters to search:', query);
        // Set isFilterSearch to true to prevent adding to search history
        filters.isFilterSearch = true;
        performSearch(query, filters);
      } else {
        console.log('No search query to apply filters to');
      }
    });
    console.log('Apply filters event listener added');
  }

  // Reset filters
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', function () {
      console.log('Reset filters button clicked');
      resetFilters();
    });
    console.log('Reset filters event listener added');
  }
}

/**
 * Gets the currently selected filters
 * @returns {Object} - The selected filters
 */
function getSelectedFilters() {
  const categoryFilter = document.getElementById('search-category-filter');
  const materialFilter = document.getElementById('search-material-filter');
  const priceFilter = document.getElementById('search-price-filter');
  const tagCheckboxes = document.querySelectorAll(
    '.search-tag-checkbox:checked'
  );

  const filters = {
    category: categoryFilter ? categoryFilter.value : 'all',
    material: materialFilter ? materialFilter.value : 'all',
    price: priceFilter ? priceFilter.value : 'all',
    tags: [],
  };

  // Get selected tags
  tagCheckboxes.forEach((checkbox) => {
    filters.tags.push(checkbox.value);
  });

  console.log('Selected filters:', filters);
  return filters;
}

/**
 * Resets all filters to their default values
 */
function resetFilters() {
  const categoryFilter = document.getElementById('search-category-filter');
  const materialFilter = document.getElementById('search-material-filter');
  const priceFilter = document.getElementById('search-price-filter');
  const tagCheckboxes = document.querySelectorAll('.search-tag-checkbox');

  if (categoryFilter) categoryFilter.value = 'all';
  if (materialFilter) materialFilter.value = 'all';
  if (priceFilter) priceFilter.value = 'all';

  // Uncheck all tag checkboxes
  tagCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  console.log('Filters reset');

  // Re-run search with current query but no filters
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim();

  if (query) {
    console.log('Re-running search with query:', query);
    performSearch(query);
  }
}

/**
 * Initializes the autocomplete functionality
 */
function initAutocomplete() {
  const searchInput = document.querySelector('.search-input');
  const autocompleteContainer = document.querySelector('.search-autocomplete');

  // Add click event listener to document to hide autocomplete when clicking outside
  document.addEventListener('click', function (e) {
    if (
      !searchInput.contains(e.target) &&
      !autocompleteContainer.contains(e.target)
    ) {
      hideAutocomplete();
    }
  });
}

/**
 * Shows autocomplete suggestions for the given query
 * @param {string} query - The search query
 */
function showAutocomplete(query) {
  const autocompleteContainer = document.querySelector('.search-autocomplete');

  // Normalize query
  const normalizedQuery = normalizeString(query);

  // Get matching products (limit to 3)
  const productMatches = window.products
    ? window.products
        .filter((product) =>
          normalizeString(product.name).includes(normalizedQuery)
        )
        .slice(0, 3)
    : [];

  // Get matching blog posts (limit to 2)
  const blogMatches = window.blogPosts
    ? window.blogPosts
        .filter((post) => normalizeString(post.title).includes(normalizedQuery))
        .slice(0, 2)
    : [];

  // Check for spelling suggestions
  const spellingSuggestion = getSpellingSuggestion(query);

  // Build autocomplete HTML
  let html = '';

  // Add spelling suggestion if available
  if (spellingSuggestion) {
    html += `
      <div class="search-autocomplete-suggestion">
        Ý bạn là: <strong>${spellingSuggestion}</strong>
      </div>
    `;
  }

  // Add product matches
  productMatches.forEach((product) => {
    html += `
      <div class="search-autocomplete-item" data-type="product" data-id="${
        product.id
      }">
        <i class="fas fa-box"></i>
        <span>${highlightMatch(product.name, normalizedQuery)}</span>
        <span class="search-autocomplete-category">Sản phẩm</span>
      </div>
    `;
  });

  // Add blog matches
  blogMatches.forEach((post) => {
    html += `
      <div class="search-autocomplete-item" data-type="blog" data-id="${
        post.id
      }">
        <i class="fas fa-newspaper"></i>
        <span>${highlightMatch(post.title, normalizedQuery)}</span>
        <span class="search-autocomplete-category">Bài viết</span>
      </div>
    `;
  });

  // Add search all option
  html += `
    <div class="search-autocomplete-item" data-type="search-all">
      <i class="fas fa-search"></i>
      <span>Tìm kiếm "${query}"</span>
    </div>
  `;

  // Update autocomplete container
  autocompleteContainer.innerHTML = html;
  autocompleteContainer.style.display = 'block';

  // Add click event listeners to autocomplete items
  const autocompleteItems = autocompleteContainer.querySelectorAll(
    '.search-autocomplete-item'
  );
  autocompleteItems.forEach((item) => {
    item.addEventListener('click', function () {
      const type = this.getAttribute('data-type');
      const id = this.getAttribute('data-id');

      if (type === 'search-all') {
        // Perform search with current query
        searchInput.value = query;
        performSearch(query);
        addToSearchHistory(query);
      } else if (type === 'product') {
        // Go to product details
        window.location.href = `product-details.html?id=${id}`;
      } else if (type === 'blog') {
        // Go to blog post
        window.location.href = `blog-detail.html?id=${id}`;
      }

      hideAutocomplete();
    });
  });
}

/**
 * Hides the autocomplete container
 */
function hideAutocomplete() {
  const autocompleteContainer = document.querySelector('.search-autocomplete');
  if (autocompleteContainer) {
    autocompleteContainer.style.display = 'none';
  }
}

/**
 * Highlights the matching part of a text
 * @param {string} text - The text to highlight
 * @param {string} query - The query to highlight
 * @returns {string} - The highlighted text
 */
function highlightMatch(text, query) {
  // Normalize text for comparison
  const normalizedText = normalizeString(text);

  // Find the position of the query in the normalized text
  const index = normalizedText.indexOf(query);

  if (index >= 0) {
    // Get the actual substring from the original text
    const prefix = text.substring(0, index);
    const match = text.substring(index, index + query.length);
    const suffix = text.substring(index + query.length);

    return `${prefix}<span class="highlight">${match}</span>${suffix}`;
  }

  return text;
}

/**
 * Gets a spelling suggestion for the query
 * @param {string} query - The search query
 * @returns {string|null} - The spelling suggestion or null if none
 */
function getSpellingSuggestion(query) {
  // Simple spelling suggestions for common furniture terms
  const commonMisspellings = {
    tu: 'tủ',
    ban: 'bàn',
    ghe: 'ghế',
    giuong: 'giường',
    ke: 'kệ',
    sofa: 'sofa',
    salon: 'salon',
    go: 'gỗ',
    'noi that': 'nội thất',
    'phong khach': 'phòng khách',
    'phong ngu': 'phòng ngủ',
    'phong an': 'phòng ăn',
  };

  // Normalize query
  const normalizedQuery = normalizeString(query);

  // Check for common misspellings
  for (const [misspelling, correction] of Object.entries(commonMisspellings)) {
    if (
      normalizedQuery.includes(normalizeString(misspelling)) &&
      query !== correction
    ) {
      // Replace the misspelling with the correction in the original query
      return query.replace(new RegExp(misspelling, 'gi'), correction);
    }
  }

  return null;
}
