/**
 * Fullscreen Search Functionality
 * Provides a mobile-friendly fullscreen search experience
 */
// Biến để theo dõi trạng thái khởi tạo
let searchInitialized = false;

document.addEventListener('DOMContentLoaded', function () {
  // Trì hoãn việc khởi tạo giao diện tìm kiếm để tránh hiệu ứng nháy
  setTimeout(function () {
    // Chỉ khởi tạo nếu chưa được khởi tạo
    if (!searchInitialized && !document.querySelector('.fullscreen-search')) {
      createSearchInterface();
      initSearch();
      searchInitialized = true;
    }
  }, 300); // Trì hoãn 300ms
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
                </div>
                <div class="search-autocomplete"></div>
                <button class="search-clear-btn">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <!-- Tabs for different search types -->
        <div class="search-tabs">
            <div class="search-tab active" data-tab="products">Sản phẩm <span class="search-count">0</span></div>
            <div class="search-tab" data-tab="blog">Bài viết <span class="search-count">0</span></div>
            <div class="search-filter-toggle">
                <i class="fas fa-filter"></i> Bộ lọc
            </div>
        </div>

        <div class="search-content">

            <!-- Advanced search filters for products -->
            <div class="search-advanced-filters" id="product-filters">
                <div class="search-filters-container" style="display: none;">
                    <!-- Category filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Danh mục</div>
                        <select id="search-category-filter" class="search-filter-select">
                            <option value="all">Tất cả danh mục</option>
                            <!-- Categories will be populated dynamically -->
                        </select>
                    </div>

                    <!-- Material filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Chất liệu</div>
                        <select id="search-material-filter" class="search-filter-select">
                            <option value="all">Tất cả chất liệu</option>
                            <!-- Materials will be populated dynamically -->
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

                    <!-- Product type filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Sản phẩm</div>
                        <div class="search-filter-product-types">
                            <div class="search-filter-checkbox-item">
                                <input type="checkbox" id="search-product-new" class="search-product-type-checkbox" value="new">
                                <label for="search-product-new">Sản phẩm mới</label>
                            </div>
                            <div class="search-filter-checkbox-item">
                                <input type="checkbox" id="search-product-bestselling" class="search-product-type-checkbox" value="bestselling">
                                <label for="search-product-bestselling">Sản phẩm bán chạy</label>
                            </div>
                            <div class="search-filter-checkbox-item">
                                <input type="checkbox" id="search-product-sale" class="search-product-type-checkbox" value="sale">
                                <label for="search-product-sale">Sale</label>
                            </div>
                        </div>
                    </div>

                    <!-- Price sort filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Sắp xếp theo giá</div>
                        <div class="search-filter-price-sort">
                            <div class="search-filter-checkbox-item">
                                <input type="checkbox" id="search-price-asc" class="search-price-sort-checkbox" value="asc">
                                <label for="search-price-asc">Từ thấp đến cao</label>
                            </div>
                            <div class="search-filter-checkbox-item">
                                <input type="checkbox" id="search-price-desc" class="search-price-sort-checkbox" value="desc">
                                <label for="search-price-desc">Từ cao đến thấp</label>
                            </div>
                        </div>
                    </div>

                    <!-- Filter actions -->
                    <div class="search-filter-actions">
                        <button id="search-apply-product-filters" class="search-filter-apply"><i class="fas fa-filter"></i> Lọc kết quả</button>
                        <button id="search-reset-product-filters" class="search-filter-reset"><i class="fas fa-trash"></i> Xóa bộ lọc</button>
                    </div>
                </div>
            </div>

            <!-- Advanced search filters for blog posts -->
            <div class="search-advanced-filters" id="blog-filters" style="display: none;">
                <div class="search-filters-container" style="display: none;">
                    <!-- Date filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Ngày đăng</div>
                        <select id="search-date-filter" class="search-filter-select">
                            <option value="all">Tất cả</option>
                            <option value="today">Hôm nay</option>
                            <option value="week">Tuần này</option>
                            <option value="month">Tháng này</option>
                            <option value="year">Năm nay</option>
                        </select>
                    </div>

                    <!-- Views filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Lượt xem</div>
                        <select id="search-views-filter" class="search-filter-select">
                            <option value="all">Tất cả</option>
                            <option value="most-viewed">Xem nhiều nhất</option>
                            <option value="least-viewed">Xem ít nhất</option>
                        </select>
                    </div>

                    <!-- Blog category filter -->
                    <div class="search-filter-group">
                        <div class="search-filter-label">Danh mục bài viết</div>
                        <select id="search-blog-category-filter" class="search-filter-select">
                            <option value="all">Tất cả danh mục</option>
                            <!-- Blog categories will be populated dynamically -->
                        </select>
                    </div>

                    <!-- Filter actions -->
                    <div class="search-filter-actions">
                        <button id="search-apply-blog-filters" class="search-filter-apply"><i class="fas fa-filter"></i> Lọc kết quả</button>
                        <button id="search-reset-blog-filters" class="search-filter-reset"><i class="fas fa-trash"></i> Xóa bộ lọc</button>
                    </div>
                </div>
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
            <div class="search-tab-content active" data-tab="products">
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
 * Gets unique categories from products data
 * @returns {Array} - Array of unique categories
 */
function getUniqueCategories() {
  if (!window.products || !Array.isArray(window.products)) {
    console.error('Products data not available');
    return [];
  }

  // Extract categories and filter out undefined/null values
  const categories = window.products
    .map((product) => product.category)
    .filter((category) => category);

  // Get unique categories
  const uniqueCategories = [...new Set(categories)];

  // Sort alphabetically
  return uniqueCategories.sort();
}

/**
 * Gets unique materials from products data
 * @returns {Array} - Array of unique materials
 */
function getUniqueMaterials() {
  if (!window.products || !Array.isArray(window.products)) {
    console.error('Products data not available');
    return [];
  }

  // Extract materials and filter out undefined/null values
  const materials = window.products
    .map((product) => product.material)
    .filter((material) => material);

  // Get unique materials
  const uniqueMaterials = [...new Set(materials)];

  // Sort alphabetically
  return uniqueMaterials.sort();
}

/**
 * Gets unique tags from products data
 * @returns {Array} - Array of unique tags
 */
function getUniqueTags() {
  if (!window.products || !Array.isArray(window.products)) {
    console.error('Products data not available');
    return [];
  }

  // Extract tags and filter out undefined/null values
  const tags = window.products
    .map((product) => product.tag)
    .filter((tag) => tag);

  // Get unique tags
  const uniqueTags = [...new Set(tags)];

  // Sort alphabetically
  return uniqueTags.sort();
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

  // Handle input container click to hide filters
  const searchInputContainer = document.querySelector(
    '.search-input-container'
  );
  if (searchInputContainer) {
    searchInputContainer.addEventListener('click', function () {
      // Hide all filter containers
      const productFiltersContainer = document.querySelector(
        '#product-filters .search-filters-container'
      );
      const blogFiltersContainer = document.querySelector(
        '#blog-filters .search-filters-container'
      );

      if (productFiltersContainer)
        productFiltersContainer.style.display = 'none';
      if (blogFiltersContainer) blogFiltersContainer.style.display = 'none';

      // Update the global filter state to closed
      document.body.setAttribute('data-filter-open', 'false');

      // Update filter toggle button state
      const filterToggleBtns = document.querySelectorAll(
        '.search-filter-toggle'
      );
      if (filterToggleBtns && filterToggleBtns.length > 0) {
        // Update all filter toggle buttons
        filterToggleBtns.forEach((btn) => {
          btn.classList.remove('active');

          // Update the icon color as well
          const icons = btn.querySelectorAll('i');
          icons.forEach((icon) => {
            icon.style.color = '#777';
          });
        });
      }
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

      // Show/hide appropriate filters based on active tab
      const productFilters = document.getElementById('product-filters');
      const blogFilters = document.getElementById('blog-filters');
      const filterToggle = document.querySelector('.search-filter-toggle');

      // Get filter containers
      const productFiltersContainer = document.querySelector(
        '#product-filters .search-filters-container'
      );
      const blogFiltersContainer = document.querySelector(
        '#blog-filters .search-filters-container'
      );

      // Check global filter state
      const isFilterOpen =
        document.body.getAttribute('data-filter-open') === 'true';

      console.log(
        'Tab changed to:',
        tabName,
        'Global filter state:',
        isFilterOpen
      );

      // First, hide all filter containers
      if (productFiltersContainer)
        productFiltersContainer.style.display = 'none';
      if (blogFiltersContainer) blogFiltersContainer.style.display = 'none';

      if (tabName === 'products') {
        // Show product filters container, hide blog filters container
        if (productFilters) productFilters.style.display = 'block';
        if (blogFilters) blogFilters.style.display = 'none';

        // If global filter state is open, show the product filter container
        if (isFilterOpen && productFiltersContainer) {
          productFiltersContainer.style.display = 'block';
        }
      } else if (tabName === 'blog') {
        // Show blog filters container, hide product filters container
        if (productFilters) productFilters.style.display = 'none';
        if (blogFilters) blogFilters.style.display = 'block';

        // If global filter state is open, show the blog filter container
        if (isFilterOpen && blogFiltersContainer) {
          blogFiltersContainer.style.display = 'block';
        }
      }

      // Update filter toggle button state based on global filter state
      if (filterToggle) {
        // Force remove first to ensure proper state
        filterToggle.classList.remove('active');
        if (isFilterOpen) {
          filterToggle.classList.add('active');
        }

        // Update the icon color as well
        const icons = filterToggle.querySelectorAll('i');
        icons.forEach((icon) => {
          if (isFilterOpen) {
            icon.style.color = '#0058dd';
          } else {
            icon.style.color = '#777';
          }
        });
      }
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
  setTimeout(() => {
    initAdvancedFilters();
    console.log('Advanced filters initialized with delay');
  }, 500);

  // Initialize global filter state to closed
  document.body.setAttribute('data-filter-open', 'false');

  // Initialize autocomplete
  initAutocomplete();

  // Add scroll event listener to update filter container position
  window.addEventListener('scroll', updateFilterContainerPosition);
  window.addEventListener('resize', updateFilterContainerPosition);

  // Ensure Products tab is active by default
  const productsTab = document.querySelector(
    '.search-tab[data-tab="products"]'
  );
  const productsContent = document.querySelector(
    '.search-tab-content[data-tab="products"]'
  );

  if (productsTab && productsContent) {
    // Remove active class from all tabs and contents
    document
      .querySelectorAll('.search-tab')
      .forEach((tab) => tab.classList.remove('active'));
    document
      .querySelectorAll('.search-tab-content')
      .forEach((content) => content.classList.remove('active'));

    // Set products tab and content as active
    productsTab.classList.add('active');
    productsContent.classList.add('active');

    // Show product filters and hide blog filters
    const productFilters = document.getElementById('product-filters');
    const blogFilters = document.getElementById('blog-filters');

    if (productFilters) productFilters.style.display = 'block';
    if (blogFilters) blogFilters.style.display = 'none';
  }
}

/**
 * Opens the fullscreen search
 */
function openSearch() {
  // Đảm bảo giao diện tìm kiếm được khởi tạo trước khi mở
  if (!searchInitialized || !document.querySelector('.fullscreen-search')) {
    createSearchInterface();
    initSearch();
    searchInitialized = true;

    // Trì hoãn mở giao diện tìm kiếm để đảm bảo khởi tạo hoàn tất
    setTimeout(() => {
      openSearchInterface();
    }, 100);
    return;
  }

  // Nếu đã khởi tạo, mở giao diện tìm kiếm ngay lập tức
  openSearchInterface();
}

/**
 * Mở giao diện tìm kiếm sau khi đã khởi tạo
 */
function openSearchInterface() {
  const searchContainer = document.querySelector('.fullscreen-search');
  const searchInput = document.querySelector('.search-input');

  // Show the search container
  searchContainer.classList.add('active');

  // Add search-active class to body to hide other elements
  document.body.classList.add('search-active');

  // Force hide any floating elements that might be using fixed positioning
  const floatingElements = document.querySelectorAll(
    '.fc-container, .bottom-nav, [class*="floating-"], [class*="scroll-to-top"]'
  );
  floatingElements.forEach((el) => {
    el.style.display = 'none';
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
  });

  // Focus the input
  setTimeout(() => {
    searchInput.focus();
  }, 300);

  // Prevent body scrolling - this is now handled by CSS
  // document.body.style.overflow = 'hidden';
}

/**
 * Closes the fullscreen search
 */
function closeSearch() {
  const searchContainer = document.querySelector('.fullscreen-search');

  // Hide the search container
  searchContainer.classList.remove('active');

  // Remove search-active class from body to show other elements
  document.body.classList.remove('search-active');

  // Show any floating elements that were hidden
  const floatingElements = document.querySelectorAll(
    '.fc-container, .bottom-nav, [class*="floating-"], [class*="scroll-to-top"]'
  );
  floatingElements.forEach((el) => {
    el.style.display = '';
    el.style.opacity = '';
    el.style.visibility = '';
  });

  // Allow body scrolling - this is now handled by CSS
  // document.body.style.overflow = '';
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

  // Handle filters container visibility
  const activeTab = document.querySelector('.search-tab.active');
  const tabName = activeTab ? activeTab.getAttribute('data-tab') : 'products';

  // Get both filter containers
  const productFiltersContainer = document.querySelector(
    '#product-filters .search-filters-container'
  );
  const blogFiltersContainer = document.querySelector(
    '#blog-filters .search-filters-container'
  );

  // Get current active filter container
  let activeFiltersContainer;
  if (tabName === 'products') {
    activeFiltersContainer = productFiltersContainer;
  } else if (tabName === 'blog') {
    activeFiltersContainer = blogFiltersContainer;
  }

  const filterToggle = document.querySelector('.search-filter-toggle');

  // Check if we should keep filters open
  if (filters.keepFiltersOpen) {
    // Update the global filter state to open
    document.body.setAttribute('data-filter-open', 'true');

    // Make sure filter toggle shows active state
    if (filterToggle) {
      filterToggle.classList.add('active');
    }

    // Show the active filter container
    if (activeFiltersContainer) {
      activeFiltersContainer.style.display = 'block';
    }

    console.log('Keeping filters container open during search');
  } else if (
    !filters.keepFiltersOpen &&
    activeFiltersContainer &&
    activeFiltersContainer.style.display === 'block'
  ) {
    // Hide all filter containers
    if (productFiltersContainer) productFiltersContainer.style.display = 'none';
    if (blogFiltersContainer) blogFiltersContainer.style.display = 'none';

    // Update the global filter state to closed
    document.body.setAttribute('data-filter-open', 'false');

    // Update filter toggle button state
    if (filterToggle) {
      filterToggle.classList.remove('active');
    }

    console.log('Hiding filters container during search');
  }

  // Show loading indicator
  const loadingIndicator = document.querySelector('.search-loading');
  loadingIndicator.classList.add('active');

  // Hide history and suggestions
  document.querySelector('.search-history').style.display = 'none';
  document.querySelector('.search-suggestions').style.display = 'none';

  // Clear previous results
  document.getElementById('product-results').innerHTML = '';
  document.getElementById('blog-results').innerHTML = '';

  // Show search query if there is one
  if (query) {
    const searchQueryDisplay = document.createElement('div');
    searchQueryDisplay.className = 'search-query-display';
    searchQueryDisplay.innerHTML = `<span>Kết quả tìm kiếm cho: <strong>${query}</strong></span>`;

    // Add search query display to tabs
    document
      .getElementById('product-results')
      .appendChild(searchQueryDisplay.cloneNode(true));
    document
      .getElementById('blog-results')
      .appendChild(searchQueryDisplay.cloneNode(true));
  } else {
    // Show filter-only message
    const filterQueryDisplay = document.createElement('div');
    filterQueryDisplay.className = 'search-query-display';
    filterQueryDisplay.innerHTML = `<span>Kết quả lọc theo bộ lọc đã chọn</span>`;

    // Add filter message to tabs
    document
      .getElementById('product-results')
      .appendChild(filterQueryDisplay.cloneNode(true));
    document
      .getElementById('blog-results')
      .appendChild(filterQueryDisplay.cloneNode(true));
  }

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

      // Search in blog posts with filters
      const blogResults = searchBlogPosts(query, filters);

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

        // Different message based on whether there was a query or just filters
        if (query) {
          document.querySelector(
            '.search-empty-text'
          ).textContent = `Không tìm thấy kết quả nào cho "${query}". Vui lòng thử từ khóa khác.`;
        } else {
          document.querySelector(
            '.search-empty-text'
          ).textContent = `Không tìm thấy kết quả nào phù hợp với bộ lọc đã chọn. Vui lòng thử bộ lọc khác.`;
        }
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

  // If query is empty, use all products as the starting point
  let results;
  if (!query) {
    results = [...window.products];
    console.log(
      'No query provided, starting with all products:',
      results.length
    );

    // Debug: Log some product prices to check format
    if (results.length > 0) {
      console.log('Sample product prices:');
      for (let i = 0; i < Math.min(5, results.length); i++) {
        console.log(
          `Product ${results[i].id}: ${results[i].price} (${typeof results[i]
            .price})`
        );
        // Try to convert price to numeric
        const numericPrice = getNumericPrice(results[i].price);
        console.log(`  -> Numeric price: ${numericPrice}`);
      }
    }
  } else {
    // Filter products that match the query
    results = window.products.filter((product) => {
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
  }

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

    // Special case for 'contact' filter
    if (filters.price === 'contact') {
      console.log('Filtering for "Liên hệ" products');
      results = results.filter((product) => {
        return (
          product.price === 'Liên hệ' ||
          product.price === 'Liên Hệ' ||
          product.price === null ||
          product.price === undefined
        );
      });
      console.log('Products after "Liên hệ" filter:', results.length);
    } else {
      // For price range filters
      console.log('Filtering by price range:', filters.price);

      // First, get all products with numeric prices
      const productsWithPrice = [];
      const productsWithoutPrice = [];

      results.forEach((product) => {
        // First check if product has flashsale with newPrice
        let numericPrice = null;

        if (
          product.flashsale &&
          product.flashsale.active &&
          typeof product.flashsale.newPrice === 'number' &&
          !product.flashsale.hidePrice
        ) {
          numericPrice = product.flashsale.newPrice;
          console.log(
            `Using flashsale price for product ${product.id}: ${numericPrice}`
          );
        } else {
          numericPrice = getNumericPrice(product.price);
        }

        if (numericPrice !== null && !isNaN(numericPrice)) {
          // Add price property for sorting
          product._numericPrice = numericPrice;
          productsWithPrice.push(product);
        } else {
          productsWithoutPrice.push(product);
        }
      });

      console.log(`Products with numeric price: ${productsWithPrice.length}`);
      console.log(
        `Products without numeric price: ${productsWithoutPrice.length}`
      );

      // Filter products with price based on the selected range
      const filteredProducts = productsWithPrice.filter((product) => {
        const price = product._numericPrice;
        let matches = false;

        switch (filters.price) {
          case 'under-5m':
            matches = price < 5000000;
            break;
          case '5m-10m':
            matches = price >= 5000000 && price <= 10000000;
            break;
          case '10m-20m':
            matches = price > 10000000 && price <= 20000000;
            break;
          case 'above-20m':
            matches = price > 20000000;
            break;
          default:
            matches = true;
        }

        // Debug log for price filtering
        if (matches) {
          console.log(
            `Product ${product.id} with price ${product.price} (${price}) matches filter ${filters.price}`
          );
        }

        return matches;
      });

      console.log(`Products matching price range: ${filteredProducts.length}`);

      // Update results with filtered products
      results = filteredProducts;
    }

    console.log('Products after price filter:', results.length);
  }

  // Apply product type filters
  if (filters.productTypes && filters.productTypes.length > 0) {
    console.log('Applying product type filters:', filters.productTypes);

    // Check if 'sale' is selected - this is the only one that actually filters
    if (filters.productTypes.includes('sale')) {
      console.log('Filtering for sale products');
      results = results.filter((product) => {
        return (
          (product.flashsale && product.flashsale.active) ||
          (product.promotion && product.promotion.trim() !== '')
        );
      });
      console.log('Products after sale filter:', results.length);
    }

    // Handle sorting based on product types
    // Priority: 'new' > 'bestselling' if both are selected
    if (filters.productTypes.includes('new')) {
      console.log('Sorting by newest (ID descending)');
      results.sort((a, b) => {
        return parseInt(b.id) - parseInt(a.id);
      });
    } else if (filters.productTypes.includes('bestselling')) {
      console.log('Sorting by bestselling (sold count descending)');
      results.sort((a, b) => {
        const soldA = a.soldCount || 0;
        const soldB = b.soldCount || 0;
        return soldB - soldA;
      });
    }
  }

  // Apply price sort filter
  if (filters.priceSort) {
    console.log('Applying price sort filter:', filters.priceSort);

    // First, separate products with and without prices
    const productsWithPrice = [];
    const productsWithoutPrice = [];

    results.forEach((product) => {
      // First check if product has flashsale with newPrice
      let numericPrice = null;

      if (
        product.flashsale &&
        product.flashsale.active &&
        typeof product.flashsale.newPrice === 'number' &&
        !product.flashsale.hidePrice
      ) {
        numericPrice = product.flashsale.newPrice;
        console.log(
          `Using flashsale price for sorting product ${product.id}: ${numericPrice}`
        );
      } else {
        numericPrice = getNumericPrice(product.price);
      }

      if (numericPrice !== null && !isNaN(numericPrice)) {
        // Add numeric price property for sorting
        product._numericPrice = numericPrice;
        productsWithPrice.push(product);
      } else {
        productsWithoutPrice.push(product);
      }
    });

    console.log(
      `Products with numeric price for sorting: ${productsWithPrice.length}`
    );
    console.log(
      `Products without numeric price: ${productsWithoutPrice.length}`
    );

    // Sort products with price
    productsWithPrice.sort((a, b) => {
      return filters.priceSort === 'asc'
        ? a._numericPrice - b._numericPrice
        : b._numericPrice - a._numericPrice;
    });

    // Combine the results - products with price first, then products without price
    results = [...productsWithPrice, ...productsWithoutPrice];

    console.log('Products after price sort:', results.length);
  }

  console.log('Final results count:', results.length);
  return results;
}

/**
 * Helper function to extract numeric price from various formats
 * @param {number|string} price - The price to convert
 * @returns {number|null} - The numeric price or null if not convertible
 */
function getNumericPrice(price) {
  // Check if price is a number
  if (typeof price === 'number') {
    return price;
  }
  // Check if price is a string but not 'Liên hệ'
  else if (
    typeof price === 'string' &&
    price !== 'Liên hệ' &&
    price !== 'Liên Hệ'
  ) {
    // Try to convert string price to number by removing non-numeric characters
    const priceStr = price.replace(/[^0-9]/g, '');
    if (priceStr) {
      const numericPrice = parseInt(priceStr, 10);
      console.log(
        `Converted string price "${price}" to numeric: ${numericPrice}`
      );
      return numericPrice;
    }
  }

  // For 'Liên hệ' or other non-convertible values
  console.log(`Could not convert price to numeric: ${price}`);
  return null;
}

/**
 * Searches for blog posts matching the query and filters
 * @param {string} query - The search query
 * @param {Object} filters - Optional filters to apply
 * @returns {Array} - Array of matching blog posts
 */
function searchBlogPosts(query, filters = {}) {
  // Normalize query for case-insensitive search
  const normalizedQuery = normalizeString(query);

  console.log('Searching blog posts with query:', query);
  console.log('Applying blog filters:', filters);

  // Check if blog posts are available
  if (!window.blogPosts || !Array.isArray(window.blogPosts)) {
    console.error('Blog posts data not available for search');
    return [];
  }

  console.log('Total blog posts available:', window.blogPosts.length);

  // If query is empty, use all blog posts as the starting point
  let results;
  if (!query) {
    results = [...window.blogPosts];
    console.log(
      'No query provided, starting with all blog posts:',
      results.length
    );
  } else {
    // Filter blog posts that match the query
    results = window.blogPosts.filter((post) => {
      // Check if post title, content, excerpt or category matches the query
      const titleMatch =
        post.title && normalizeString(post.title).includes(normalizedQuery);
      const contentMatch =
        post.content && normalizeString(post.content).includes(normalizedQuery);
      const excerptMatch =
        post.excerpt && normalizeString(post.excerpt).includes(normalizedQuery);
      const categoryMatch =
        post.category &&
        normalizeString(post.category).includes(normalizedQuery);

      return titleMatch || contentMatch || excerptMatch || categoryMatch;
    });
    console.log('Blog posts matching query:', results.length);
  }

  // Only apply blog filters if the filter type is 'blog'
  if (filters.filterType === 'blog') {
    // Apply blog category filter
    if (filters.blogCategory && filters.blogCategory !== 'all') {
      console.log('Applying blog category filter:', filters.blogCategory);
      results = results.filter((post) => {
        const match =
          post.category &&
          normalizeString(post.category) ===
            normalizeString(filters.blogCategory);
        return match;
      });
      console.log('Blog posts after category filter:', results.length);
    }

    // Apply date filter
    if (filters.date && filters.date !== 'all') {
      console.log('Applying date filter:', filters.date);
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay()); // Start of week (Sunday)
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startOfYear = new Date(now.getFullYear(), 0, 1);

      results = results.filter((post) => {
        // If post doesn't have a date, use a default date
        const postDate = post.date ? new Date(post.date) : new Date();

        switch (filters.date) {
          case 'today':
            return postDate >= today;
          case 'week':
            return postDate >= startOfWeek;
          case 'month':
            return postDate >= startOfMonth;
          case 'year':
            return postDate >= startOfYear;
          default:
            return true;
        }
      });
      console.log('Blog posts after date filter:', results.length);
    }

    // Apply views filter
    if (filters.views && filters.views !== 'all') {
      console.log('Applying views filter:', filters.views);

      // Sort by views
      if (filters.views === 'most-viewed') {
        results.sort((a, b) => (b.views || 0) - (a.views || 0));
        console.log('Blog posts sorted by most viewed');
      } else if (filters.views === 'least-viewed') {
        results.sort((a, b) => (a.views || 0) - (b.views || 0));
        console.log('Blog posts sorted by least viewed');
      }
    }
  }

  console.log('Final blog results count:', results.length);
  return results;
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
  const productResultsContainer = document.getElementById('product-results');

  // Create HTML for each product
  const productsHTML = products
    .map((product) => {
      // Use first image or placeholder
      const imageUrl =
        product.images && product.images.length > 0
          ? product.images[0]
          : 'images/placeholder.jpg';

      // Prepare promotion badge
      let promotionBadge = '';
      if (product.flashsale && product.flashsale.active) {
        promotionBadge = `<div class="search-result-badge search-result-flashsale">-${product.flashsale.discountPercent}%</div>`;
      } else if (product.promotion) {
        promotionBadge = `<div class="search-result-badge search-result-promotion">${product.promotion}</div>`;
      }

      // Prepare rating stars
      const rating = product.rating || 0;
      const fullStars = Math.floor(rating);
      const halfStar = rating % 1 >= 0.5;
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

      let starsHtml = '';
      for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
      }
      if (halfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
      }
      for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
      }

      return `
            <div class="search-result-card" data-id="${product.id}">
                <div class="search-result-image-container">
                    <img src="${imageUrl}" alt="${
        product.name
      }" class="search-result-image">
                    ${promotionBadge}
                </div>
                <div class="search-result-info">
                    <h3 class="search-result-title">${product.name}</h3>
                    <div class="search-result-meta">
                        <div class="search-result-rating">
                            ${starsHtml}
                            <span class="search-result-rating-value">${rating.toFixed(
                              1
                            )}</span>
                        </div>
                        ${
                          product.soldCount
                            ? `<div class="search-result-sold"><i class="fas fa-shopping-cart"></i> ${product.soldCount}</div>`
                            : ''
                        }
                    </div>
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

  // Add products to container
  if (products.length > 0) {
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
  const blogResultsContainer = document.getElementById('blog-results');

  // Create HTML for each blog post
  const postsHTML = posts
    .map((post) => {
      // Get blog image URL or use a default image from the post content or a generic icon
      let imageUrl = '';
      if (post.image) {
        imageUrl = post.image;
      } else if (post.content && post.content.includes('<img')) {
        // Try to extract the first image from content
        const imgMatch = post.content.match(
          /<img[^>]+src=["']([^"']+)["'][^>]*>/i
        );
        if (imgMatch && imgMatch[1]) {
          imageUrl = imgMatch[1];
        }
      }

      // If no image found, use a div with an icon instead
      const useImageTag = imageUrl !== '';

      // Get view count or default to 0
      const viewCount = post.views || 0;

      return `
            <div class="search-blog-card" data-id="${post.id}">
                ${
                  useImageTag
                    ? `<img src="${imageUrl}" alt="${post.title}" class="search-blog-image">`
                    : `<div class="search-blog-image-placeholder"><i class="fas fa-newspaper"></i></div>`
                }
                <div class="search-blog-info">
                    <h3 class="search-blog-title">${post.title}</h3>
                    <p class="search-blog-excerpt">${
                      post.excerpt ||
                      post.content.replace(/<[^>]*>/g, '').substring(0, 120)
                    }...</p>
                    <div class="search-blog-meta">
                        <span class="search-blog-date"><i class="far fa-calendar-alt"></i> ${
                          post.blogDate || formatDate(post.date)
                        }</span>
                        <span class="search-blog-views"><i class="fas fa-eye"></i> <span>${viewCount.toLocaleString(
                          'vi-VN'
                        )} lượt xem</span></span>
                    </div>
                </div>
            </div>
        `;
    })
    .join('');

  // Add blog posts to container
  if (posts.length > 0) {
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

  // Initialize product filters
  initProductFilters();

  // Initialize blog filters
  initBlogFilters();

  // Toggle filters visibility when filter button is clicked
  if (filterToggle) {
    filterToggle.addEventListener('click', function () {
      // Get current global filter state
      const currentFilterState =
        document.body.getAttribute('data-filter-open') === 'true';

      // Toggle the global filter state
      const newFilterState = !currentFilterState;
      document.body.setAttribute(
        'data-filter-open',
        newFilterState ? 'true' : 'false'
      );

      console.log(
        'Toggle global filter state:',
        currentFilterState,
        '->',
        newFilterState
      );

      // Determine which filter container to show based on active tab
      const activeTab = document.querySelector('.search-tab.active');
      const tabName = activeTab
        ? activeTab.getAttribute('data-tab')
        : 'products';

      // Get both filter containers - using a more direct approach
      const productFilters = document.getElementById('product-filters');
      const blogFilters = document.getElementById('blog-filters');

      // Get the filter containers directly
      const productFiltersContainer = productFilters
        ? productFilters.querySelector('.search-filters-container')
        : null;
      const blogFiltersContainer = blogFilters
        ? blogFilters.querySelector('.search-filters-container')
        : null;

      // Debug - log the parent elements
      console.log('Product filters parent:', productFilters);
      console.log('Blog filters parent:', blogFilters);

      // Debug information
      console.log('Product filters container:', productFiltersContainer);
      console.log('Blog filters container:', blogFiltersContainer);

      // First, hide all filter containers
      if (productFiltersContainer) {
        productFiltersContainer.style.display = 'none';
        console.log('Hiding product filters container');
      }
      if (blogFiltersContainer) {
        blogFiltersContainer.style.display = 'none';
        console.log('Hiding blog filters container');
      }

      // Update the global filter state
      document.body.setAttribute(
        'data-filter-open',
        newFilterState ? 'true' : 'false'
      );

      // Update filter toggle button state - IMPORTANT: This must be done AFTER setting data-filter-open
      // Update all filter toggle buttons to ensure consistency
      const filterToggleBtns = document.querySelectorAll(
        '.search-filter-toggle'
      );
      filterToggleBtns.forEach((btn) => {
        // Force remove first to ensure proper state
        btn.classList.remove('active');
        if (newFilterState) {
          btn.classList.add('active');
        }

        // Update the icon color as well
        const icons = btn.querySelectorAll('i');
        icons.forEach((icon) => {
          if (newFilterState) {
            icon.style.color = '#0058dd';
          } else {
            icon.style.color = '#777';
          }
        });
      });

      // Then, show the appropriate filter container based on active tab and new filter state
      if (newFilterState) {
        if (tabName === 'products' && productFiltersContainer) {
          // Show the container at the current scroll position
          if (productFilters) {
            productFilters.style.display = 'block';
          }

          if (productFiltersContainer) {
            // Calculate position based on current scroll and viewport
            const searchTabs = document.querySelector('.search-tabs');
            const searchTabsRect = searchTabs.getBoundingClientRect();
            const searchTabsBottom = searchTabsRect.bottom;

            // Position the filter container right below the search tabs
            productFiltersContainer.style.top = searchTabsBottom + 'px';
            productFiltersContainer.style.display = 'block';

            console.log(
              'Showing product filters container at position:',
              searchTabsBottom
            );
          }
        } else if (tabName === 'blog' && blogFiltersContainer) {
          // Show the container at the current scroll position
          if (blogFilters) {
            blogFilters.style.display = 'block';
          }

          if (blogFiltersContainer) {
            // Calculate position based on current scroll and viewport
            const searchTabs = document.querySelector('.search-tabs');
            const searchTabsRect = searchTabs.getBoundingClientRect();
            const searchTabsBottom = searchTabsRect.bottom;

            // Position the filter container right below the search tabs
            blogFiltersContainer.style.top = searchTabsBottom + 'px';
            blogFiltersContainer.style.display = 'block';

            console.log(
              'Showing blog filters container at position:',
              searchTabsBottom
            );
          }
        }
      }
    });
    console.log('Filter toggle event listener added');
  }
}

/**
 * Initializes the product filters
 */
function initProductFilters() {
  console.log('Initializing product filters');
  const productFiltersContainer = document.querySelector(
    '#product-filters .search-filters-container'
  );
  const applyProductFiltersBtn = document.getElementById(
    'search-apply-product-filters'
  );
  const resetProductFiltersBtn = document.getElementById(
    'search-reset-product-filters'
  );

  // Get filter select elements
  const categoryFilter = document.getElementById('search-category-filter');
  const materialFilter = document.getElementById('search-material-filter');

  console.log('Product filter elements:', {
    filtersContainer: !!productFiltersContainer,
    applyFiltersBtn: !!applyProductFiltersBtn,
    resetFiltersBtn: !!resetProductFiltersBtn,
    categoryFilter: !!categoryFilter,
    materialFilter: !!materialFilter,
  });

  // Ensure only one price sort option can be selected at a time
  const priceSortCheckboxes = document.querySelectorAll(
    '.search-price-sort-checkbox'
  );
  priceSortCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        // Uncheck all other price sort checkboxes
        priceSortCheckboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  // Populate category filter
  if (categoryFilter) {
    try {
      // Get unique categories
      const categories = getUniqueCategories();
      console.log('Unique categories:', categories);

      // Clear existing options except the first one (All categories)
      while (categoryFilter.options.length > 1) {
        categoryFilter.remove(1);
      }

      // Add category options
      categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
      });
    } catch (error) {
      console.error('Error populating category filter:', error);
    }
  }

  // Populate material filter
  if (materialFilter) {
    try {
      // Get unique materials
      const materials = getUniqueMaterials();
      console.log('Unique materials:', materials);

      // Clear existing options except the first one (All materials)
      while (materialFilter.options.length > 1) {
        materialFilter.remove(1);
      }

      // Add material options
      materials.forEach((material) => {
        const option = document.createElement('option');
        option.value = material;
        option.textContent = material;
        materialFilter.appendChild(option);
      });
    } catch (error) {
      console.error('Error populating material filter:', error);
    }
  }

  // Apply product filters
  if (applyProductFiltersBtn) {
    applyProductFiltersBtn.addEventListener('click', function () {
      console.log('Apply product filters button clicked');
      const filters = getSelectedProductFilters();
      const searchInput = document.querySelector('.search-input');
      const query = searchInput.value.trim();

      // Set isFilterSearch to true to prevent adding to search history
      filters.isFilterSearch = true;

      if (query) {
        console.log('Applying product filters to search with query:', query);
        performSearch(query, filters);
      } else {
        console.log('Applying product filters without search query');
        // Use empty string as query when no search query is provided
        performSearch('', filters);
      }
    });
    console.log('Apply product filters event listener added');
  }

  // Reset product filters
  if (resetProductFiltersBtn) {
    resetProductFiltersBtn.addEventListener('click', function () {
      console.log('Reset product filters button clicked');
      resetProductFilters();
    });
    console.log('Reset product filters event listener added');
  }
}

/**
 * Initializes the blog filters
 */
function initBlogFilters() {
  console.log('Initializing blog filters');
  const blogFiltersContainer = document.querySelector(
    '#blog-filters .search-filters-container'
  );
  const applyBlogFiltersBtn = document.getElementById(
    'search-apply-blog-filters'
  );
  const resetBlogFiltersBtn = document.getElementById(
    'search-reset-blog-filters'
  );
  const blogCategoryFilter = document.getElementById(
    'search-blog-category-filter'
  );

  console.log('Blog filter elements:', {
    filtersContainer: !!blogFiltersContainer,
    applyFiltersBtn: !!applyBlogFiltersBtn,
    resetFiltersBtn: !!resetBlogFiltersBtn,
    blogCategoryFilter: !!blogCategoryFilter,
  });

  // Populate blog category filter
  if (blogCategoryFilter && window.blogPosts) {
    try {
      // Get unique blog categories
      const categories = [
        ...new Set(
          window.blogPosts.map((post) => post.category).filter(Boolean)
        ),
      ];
      console.log('Unique blog categories:', categories);

      // Clear existing options except the first one (All categories)
      while (blogCategoryFilter.options.length > 1) {
        blogCategoryFilter.remove(1);
      }

      // Add category options
      categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        blogCategoryFilter.appendChild(option);
      });
    } catch (error) {
      console.error('Error populating blog category filter:', error);
    }
  }

  // Apply blog filters
  if (applyBlogFiltersBtn) {
    applyBlogFiltersBtn.addEventListener('click', function () {
      console.log('Apply blog filters button clicked');
      const filters = getSelectedBlogFilters();
      const searchInput = document.querySelector('.search-input');
      const query = searchInput.value.trim();

      // Set isFilterSearch to true to prevent adding to search history
      filters.isFilterSearch = true;

      if (query) {
        console.log('Applying blog filters to search with query:', query);
        performSearch(query, filters);
      } else {
        console.log('Applying blog filters without search query');
        // Use empty string as query when no search query is provided
        performSearch('', filters);
      }
    });
    console.log('Apply blog filters event listener added');
  }

  // Reset blog filters
  if (resetBlogFiltersBtn) {
    resetBlogFiltersBtn.addEventListener('click', function () {
      console.log('Reset blog filters button clicked');
      resetBlogFilters();
    });
    console.log('Reset blog filters event listener added');
  }
}

/**
 * Gets the currently selected product filters
 * @returns {Object} - The selected product filters
 */
function getSelectedProductFilters() {
  const categoryFilter = document.getElementById('search-category-filter');
  const materialFilter = document.getElementById('search-material-filter');
  const priceFilter = document.getElementById('search-price-filter');
  const productTypeCheckboxes = document.querySelectorAll(
    '.search-product-type-checkbox:checked'
  );
  const priceSortCheckboxes = document.querySelectorAll(
    '.search-price-sort-checkbox:checked'
  );

  const filters = {
    category: categoryFilter ? categoryFilter.value : 'all',
    material: materialFilter ? materialFilter.value : 'all',
    price: priceFilter ? priceFilter.value : 'all',
    productTypes: [],
    priceSort: null, // Will be set to 'asc' or 'desc' if selected
    filterType: 'product', // Indicate this is a product filter
  };

  // Get selected product types
  productTypeCheckboxes.forEach((checkbox) => {
    filters.productTypes.push(checkbox.value);
  });

  // Get selected price sort (only one should be selected)
  if (priceSortCheckboxes.length > 0) {
    filters.priceSort = priceSortCheckboxes[0].value; // 'asc' or 'desc'
  }

  console.log('Selected product filters:', filters);
  return filters;
}

/**
 * Gets the currently selected blog filters
 * @returns {Object} - The selected blog filters
 */
function getSelectedBlogFilters() {
  const dateFilter = document.getElementById('search-date-filter');
  const viewsFilter = document.getElementById('search-views-filter');
  const blogCategoryFilter = document.getElementById(
    'search-blog-category-filter'
  );

  const filters = {
    date: dateFilter ? dateFilter.value : 'all',
    views: viewsFilter ? viewsFilter.value : 'all',
    blogCategory: blogCategoryFilter ? blogCategoryFilter.value : 'all',
    filterType: 'blog', // Indicate this is a blog filter
  };

  console.log('Selected blog filters:', filters);
  return filters;
}

/**
 * For backward compatibility
 * @returns {Object} - The selected filters based on active tab
 */
function getSelectedFilters() {
  const activeTab = document.querySelector('.search-tab.active');
  const tabName = activeTab ? activeTab.getAttribute('data-tab') : 'products';

  if (tabName === 'blog') {
    return getSelectedBlogFilters();
  } else {
    return getSelectedProductFilters();
  }
}

/**
 * Resets product filters to their default values
 */
function resetProductFilters() {
  const categoryFilter = document.getElementById('search-category-filter');
  const materialFilter = document.getElementById('search-material-filter');
  const priceFilter = document.getElementById('search-price-filter');
  const productFiltersContainer = document.querySelector(
    '#product-filters .search-filters-container'
  );
  const filterToggle = document.querySelector('.search-filter-toggle');

  console.log('Resetting product filters...');

  // Reset select elements
  if (categoryFilter) {
    categoryFilter.value = 'all';
    console.log('Category filter reset to "all"');
  }

  if (materialFilter) {
    materialFilter.value = 'all';
    console.log('Material filter reset to "all"');
  }

  if (priceFilter) {
    priceFilter.value = 'all';
    console.log('Price filter reset to "all"');
  }

  // Uncheck all product type checkboxes
  const productTypeCheckboxes = document.querySelectorAll(
    '.search-product-type-checkbox'
  );
  let productTypeCount = 0;
  productTypeCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
      productTypeCount++;
    }
  });
  console.log(`${productTypeCount} product type checkboxes unchecked`);

  // Uncheck all price sort checkboxes
  const priceSortCheckboxes = document.querySelectorAll(
    '.search-price-sort-checkbox'
  );
  let priceSortCount = 0;
  priceSortCheckboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.checked = false;
      priceSortCount++;
    }
  });
  console.log(`${priceSortCount} price sort checkboxes unchecked`);

  console.log('All product filters reset successfully');

  // Re-run search with current query but no filters
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim();

  // Create an empty filters object
  const emptyFilters = {
    category: 'all',
    material: 'all',
    price: 'all',
    productTypes: [],
    filterType: 'product',
    isFilterSearch: true, // Prevent adding to search history again
    keepFiltersOpen: true, // Prevent closing the filters container
  };

  console.log(
    'Re-running search with' + (query ? ' query: ' + query : 'out query')
  );

  // Perform search with empty filters (works with or without query)
  performSearch(query, emptyFilters);
}

/**
 * Resets blog filters to their default values
 */
function resetBlogFilters() {
  const dateFilter = document.getElementById('search-date-filter');
  const viewsFilter = document.getElementById('search-views-filter');
  const blogCategoryFilter = document.getElementById(
    'search-blog-category-filter'
  );
  const blogFiltersContainer = document.querySelector(
    '#blog-filters .search-filters-container'
  );
  const filterToggle = document.querySelector('.search-filter-toggle');

  console.log('Resetting blog filters...');

  // Reset select elements
  if (dateFilter) {
    dateFilter.value = 'all';
    console.log('Date filter reset to "all"');
  }

  if (viewsFilter) {
    viewsFilter.value = 'all';
    console.log('Views filter reset to "all"');
  }

  if (blogCategoryFilter) {
    blogCategoryFilter.value = 'all';
    console.log('Blog category filter reset to "all"');
  }

  console.log('All blog filters reset successfully');

  // Re-run search with current query but no filters
  const searchInput = document.querySelector('.search-input');
  const query = searchInput.value.trim();

  // Create an empty filters object
  const emptyFilters = {
    date: 'all',
    views: 'all',
    blogCategory: 'all',
    filterType: 'blog',
    isFilterSearch: true, // Prevent adding to search history again
    keepFiltersOpen: true, // Prevent closing the filters container
  };

  console.log(
    'Re-running search with' + (query ? ' query: ' + query : 'out query')
  );

  // Perform search with empty filters (works with or without query)
  performSearch(query, emptyFilters);
}

/**
 * For backward compatibility - resets filters based on active tab
 */
function resetFilters() {
  const activeTab = document.querySelector('.search-tab.active');
  const tabName = activeTab ? activeTab.getAttribute('data-tab') : 'products';

  if (tabName === 'blog') {
    resetBlogFilters();
  } else {
    resetProductFilters();
  }
}

/**
 * Updates the position of filter containers based on search tabs position
 */
function updateFilterContainerPosition() {
  // Check if filters are open
  const isFilterOpen =
    document.body.getAttribute('data-filter-open') === 'true';

  // Update filter toggle button state based on global filter state
  // Use querySelectorAll to get all filter toggle buttons
  const filterToggleBtns = document.querySelectorAll('.search-filter-toggle');
  if (filterToggleBtns && filterToggleBtns.length > 0) {
    // Update all filter toggle buttons
    filterToggleBtns.forEach((btn) => {
      // Force remove and add to ensure proper state
      btn.classList.remove('active');
      if (isFilterOpen) {
        btn.classList.add('active');
      }
      // Update the icon color as well
      const icons = btn.querySelectorAll('i');
      icons.forEach((icon) => {
        if (isFilterOpen) {
          icon.style.color = '#0058dd';
        } else {
          icon.style.color = '#777';
        }
      });
    });
  }

  if (!isFilterOpen) return;

  // Get search tabs position
  const searchTabs = document.querySelector('.search-tabs');
  if (!searchTabs) return;

  const searchTabsRect = searchTabs.getBoundingClientRect();
  const searchTabsBottom = searchTabsRect.bottom;

  // Get active tab
  const activeTab = document.querySelector('.search-tab.active');
  const tabName = activeTab ? activeTab.getAttribute('data-tab') : 'products';

  // Update position of the active filter container
  if (tabName === 'products') {
    const productFiltersContainer = document.querySelector(
      '#product-filters .search-filters-container'
    );
    if (
      productFiltersContainer &&
      productFiltersContainer.style.display === 'block'
    ) {
      productFiltersContainer.style.top = searchTabsBottom + 'px';
    }
  } else if (tabName === 'blog') {
    const blogFiltersContainer = document.querySelector(
      '#blog-filters .search-filters-container'
    );
    if (
      blogFiltersContainer &&
      blogFiltersContainer.style.display === 'block'
    ) {
      blogFiltersContainer.style.top = searchTabsBottom + 'px';
    }
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

  // Reset z-index to ensure it's visible
  autocompleteContainer.style.zIndex = '9050';

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

  // Add product section title if there are product matches
  if (productMatches.length > 0) {
    html += `
      <div class="search-autocomplete-section-title">
        <i class="fas fa-box"></i> Sản phẩm gợi ý
      </div>
    `;
  }

  // Add product matches with images and view count
  productMatches.forEach((product) => {
    // Get product image URL or use a placeholder
    const imageUrl =
      product.images && product.images.length > 0
        ? product.images[0]
        : 'images/placeholder.jpg';

    // Get view count or default to 0
    const viewCount = product.views || 0;

    html += `
      <div class="search-autocomplete-item" data-type="product" data-id="${
        product.id
      }">
        <div class="search-autocomplete-product">
          <img src="${imageUrl}" alt="${
      product.name
    }" class="search-autocomplete-product-image">
          <div class="search-autocomplete-product-info">
            <div class="search-autocomplete-product-title">${highlightMatch(
              product.name,
              normalizedQuery
            )}</div>
            <div class="search-autocomplete-product-meta">
              <div class="search-autocomplete-product-views">
                <i class="fas fa-eye"></i> ${viewCount.toLocaleString(
                  'vi-VN'
                )} lượt xem
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Add blog section title if there are blog matches
  if (blogMatches.length > 0) {
    html += `
      <div class="search-autocomplete-section-title">
        <i class="fas fa-newspaper"></i> Bài viết gợi ý
      </div>
    `;
  }

  // Add blog matches with images, date and view count
  blogMatches.forEach((post) => {
    // Get blog image URL or use a default image from the post content or a generic icon
    let imageUrl = '';
    if (post.image) {
      imageUrl = post.image;
    } else if (post.content && post.content.includes('<img')) {
      // Try to extract the first image from content
      const imgMatch = post.content.match(
        /<img[^>]+src=["']([^"']+)["'][^>]*>/i
      );
      if (imgMatch && imgMatch[1]) {
        imageUrl = imgMatch[1];
      }
    }

    // If no image found, use a div with an icon instead
    const useImageTag = imageUrl !== '';

    // Get view count or default to 0
    const viewCount = post.views || 0;

    // Format date
    let dateStr = 'Không rõ';
    if (post.date) {
      try {
        const date = new Date(post.date);
        dateStr = date.toLocaleDateString('vi-VN', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
        });
      } catch (e) {
        console.error('Error formatting date:', e);
      }
    }

    html += `
      <div class="search-autocomplete-item" data-type="blog" data-id="${
        post.id
      }">
        <div class="search-autocomplete-blog">
          ${
            useImageTag
              ? `<img src="${imageUrl}" alt="${post.title}" class="search-autocomplete-blog-image">`
              : `<div class="search-autocomplete-blog-image-placeholder"><i class="fas fa-newspaper"></i></div>`
          }
          <div class="search-autocomplete-blog-info">
            <div class="search-autocomplete-blog-title">${highlightMatch(
              post.title,
              normalizedQuery
            )}</div>
            <div class="search-autocomplete-blog-meta">
              <div class="search-autocomplete-blog-date">
                <i class="far fa-calendar-alt"></i> ${post.blogDate || dateStr}
              </div>
              <div class="search-autocomplete-blog-views">
                <i class="fas fa-eye"></i> ${viewCount.toLocaleString(
                  'vi-VN'
                )} lượt xem
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  // Check if there are any results
  if (
    productMatches.length === 0 &&
    blogMatches.length === 0 &&
    !spellingSuggestion
  ) {
    // Show empty state
    html += `
      <div class="search-autocomplete-empty-state">
        <i class="fas fa-search"></i>
        <div>Không tìm thấy kết quả phù hợp với "${query}"</div>
      </div>
    `;
  }

  // Add search option
  html += `
    <div class="search-autocomplete-item" data-type="search-products">
      <i class="fas fa-search"></i>
      <span>Tìm kiếm sản phẩm "${query}"</span>
    </div>
  `;

  // Update autocomplete container
  autocompleteContainer.innerHTML = html;
  autocompleteContainer.classList.add('visible');

  // Add click event listeners to autocomplete items
  const autocompleteItems = autocompleteContainer.querySelectorAll(
    '.search-autocomplete-item'
  );
  autocompleteItems.forEach((item) => {
    item.addEventListener('click', function () {
      const type = this.getAttribute('data-type');
      const id = this.getAttribute('data-id');

      if (type === 'search-products') {
        // Perform search with current query
        searchInput.value = query;
        performSearch(query);
        addToSearchHistory(query);

        // Ensure Products tab is active
        const productsTab = document.querySelector(
          '.search-tab[data-tab="products"]'
        );
        if (productsTab) {
          productsTab.click();
        }
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
    autocompleteContainer.classList.remove('visible');
    autocompleteContainer.style.zIndex = '-1';
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
