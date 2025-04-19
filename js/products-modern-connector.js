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
  const promotionFilter = document.getElementById('promotion-filter');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.querySelector('.search-button');
  const paginationContainer = document.querySelector('.pagination');

  // Scroll to top button removed as requested

  // Variables
  let currentPage = 1;
  let productsPerPage = 12;
  let filteredProducts = [...products]; // Use existing products array from products.js

  // Products per page selector
  const productsPerPageSelect = document.getElementById('products-per-page');
  if (productsPerPageSelect) {
    productsPerPageSelect.addEventListener('change', function () {
      productsPerPage = parseInt(this.value);
      currentPage = 1; // Reset to first page when changing items per page

      // Show loading effect
      showLoading();

      // Apply changes after loading time
      setTimeout(() => {
        renderProducts();
        renderPagination();
        updateProductCount();

        // Cập nhật search-results-review nếu đang hiển thị và có từ khóa tìm kiếm
        if (
          searchInput &&
          searchInput.value.trim() !== '' &&
          document.querySelector('.search-results-review')
        ) {
          showSearchResults();
        }

        hideLoading();
      }, 500);
    });
  }

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

  if (promotionFilter) {
    promotionFilter.addEventListener('change', handleFilter);
  }

  if (searchButton) {
    searchButton.addEventListener('click', handleSearch);
  }

  if (searchInput) {
    // Handle Enter key press
    searchInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        handleSearch();
      }
    });

    // Handle input changes with debounce
    let searchTimeout;
    searchInput.addEventListener('input', function () {
      // Clear previous timeout
      if (searchTimeout) {
        clearTimeout(searchTimeout);
      }

      // Hide search suggestions if input is empty
      if (this.value.trim().length === 0) {
        hideSearchSuggestions();
        return;
      }

      // Set new timeout (debounce for 300ms)
      searchTimeout = setTimeout(() => {
        // Show search suggestions
        showSearchSuggestions(this.value.trim());
      }, 300);
    });

    // Hide suggestions when clicking outside
    document.addEventListener('click', function (e) {
      // Check if click is outside both search container and suggestions
      if (
        !e.target.closest('.search-container') &&
        !e.target.closest('.search-suggestions')
      ) {
        hideSearchSuggestions();
      }
    });

    // Handle window resize to reposition or hide suggestions
    window.addEventListener('resize', function () {
      const suggestions = document.querySelector('.search-suggestions');
      if (suggestions) {
        // On mobile, just hide suggestions when resizing
        if (window.innerWidth < 768) {
          hideSearchSuggestions();
          return;
        }

        // On desktop, reposition
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
          const rect = searchContainer.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft;

          suggestions.style.top = rect.bottom + scrollTop + 'px';
          suggestions.style.left = rect.left + scrollLeft + 'px';
          suggestions.style.width = rect.width + 'px';
        }
      }
    });

    // Handle scroll to reposition suggestions
    window.addEventListener('scroll', function () {
      const suggestions = document.querySelector('.search-suggestions');
      if (suggestions) {
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer) {
          const rect = searchContainer.getBoundingClientRect();
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft;

          suggestions.style.top = rect.bottom + scrollTop + 'px';
          suggestions.style.left = rect.left + scrollLeft + 'px';
        }
      }
    });
  }

  // Scroll to top button event listeners removed as requested

  // Function to show search suggestions
  function showSearchSuggestions(searchTerm) {
    // Remove existing suggestions
    hideSearchSuggestions();

    // Normalize search term for non-accented search
    const normalizedSearchTerm = removeAccents(searchTerm.toLowerCase());

    // Find matching products
    let matchingProducts = products.filter((product) => {
      const normalizedName = removeAccents(product.name.toLowerCase());
      const normalizedDescription = removeAccents(
        product.description.toLowerCase()
      );

      return (
        normalizedName.includes(normalizedSearchTerm) ||
        normalizedDescription.includes(normalizedSearchTerm) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    // Store total count before limiting
    const totalMatchCount = matchingProducts.length;

    // Limit to 5 results for display
    matchingProducts = matchingProducts.slice(0, 5);

    // If no matches, show "no results" message
    if (matchingProducts.length === 0) {
      // Create no results container
      const noResultsContainer = document.createElement('div');
      noResultsContainer.className = 'search-suggestions';

      // Style the container
      Object.assign(noResultsContainer.style, {
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        zIndex: '9999',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow:
          '0 6px 16px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.08)',
        marginTop: '8px',
        border: 'none',
        opacity: '0',
        transform: 'translateY(-8px) scale(0.98)',
        transition: 'all 0.25s cubic-bezier(0.165, 0.84, 0.44, 1)',
        padding: '20px',
        textAlign: 'center',
      });

      // Create icon
      const noResultsIcon = document.createElement('div');
      Object.assign(noResultsIcon.style, {
        fontSize: '2rem',
        color: 'rgba(249, 115, 22, 0.5)',
        marginBottom: '10px',
      });
      noResultsIcon.innerHTML = '<i class="fas fa-search"></i>';

      // Create message
      const noResultsMessage = document.createElement('div');
      Object.assign(noResultsMessage.style, {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#1c2332',
        marginBottom: '8px',
      });
      noResultsMessage.textContent = `Không tìm thấy kết quả cho "${searchTerm}"`;

      // Create suggestions
      const noResultsSuggestions = document.createElement('div');
      Object.assign(noResultsSuggestions.style, {
        fontSize: '0.9rem',
        color: 'var(--product-text-light)',
        marginBottom: '15px',
      });
      noResultsSuggestions.innerHTML =
        'Vui lòng thử lại với từ khóa khác hoặc xem các gợi ý dưới đây';

      // Create suggested keywords
      const suggestedKeywords = document.createElement('div');
      Object.assign(suggestedKeywords.style, {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        justifyContent: 'center',
        marginTop: '15px',
      });

      // Get some popular categories as suggestions
      const categories = [...new Set(products.map((p) => p.category))].slice(
        0,
        3
      );

      // Add suggested keywords
      [...categories, 'tủ', 'bàn', 'giường'].forEach((keyword) => {
        const keywordBtn = document.createElement('button');
        Object.assign(keywordBtn.style, {
          padding: '6px 12px',
          backgroundColor: 'rgba(249, 115, 22, 0.1)',
          color: 'var(--product-primary)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.85rem',
          fontWeight: '500',
          transition: 'all 0.2s ease',
        });
        keywordBtn.textContent = keyword;

        // Add hover effect
        keywordBtn.addEventListener('mouseenter', () => {
          keywordBtn.style.backgroundColor = 'rgba(249, 115, 22, 0.2)';
          keywordBtn.style.transform = 'translateY(-2px)';
        });

        keywordBtn.addEventListener('mouseleave', () => {
          keywordBtn.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
          keywordBtn.style.transform = 'translateY(0)';
        });

        // Add click event
        keywordBtn.addEventListener('click', () => {
          if (searchInput) {
            searchInput.value = keyword;
            handleSearch(); // hideSearchSuggestions() is already called inside handleSearch
          }
        });

        suggestedKeywords.appendChild(keywordBtn);
      });

      // Append all elements
      noResultsContainer.appendChild(noResultsIcon);
      noResultsContainer.appendChild(noResultsMessage);
      noResultsContainer.appendChild(noResultsSuggestions);
      noResultsContainer.appendChild(suggestedKeywords);

      // Add to DOM
      const searchContainer = document.querySelector('.search-container');
      if (searchContainer) {
        // Ensure search container has proper positioning
        searchContainer.style.position = 'relative';
        searchContainer.style.zIndex = '1001';

        // Append to body
        document.body.appendChild(noResultsContainer);

        // Position the container
        const searchContainerRect = searchContainer.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft =
          window.pageXOffset || document.documentElement.scrollLeft;

        noResultsContainer.style.position = 'absolute';
        noResultsContainer.style.top =
          searchContainerRect.bottom + scrollTop + 'px';
        noResultsContainer.style.left =
          searchContainerRect.left + scrollLeft + 'px';
        noResultsContainer.style.width = searchContainerRect.width + 'px';

        // Animate in
        setTimeout(() => {
          noResultsContainer.style.opacity = '1';
          noResultsContainer.style.transform = 'translateY(0) scale(1)';
        }, 10);
      }

      return;
    }

    // Create suggestions container
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'search-suggestions';

    // Create header
    const header = document.createElement('div');
    header.className = 'search-suggestions-header';

    // Add search icon with animation
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search';
    Object.assign(searchIcon.style, {
      color: 'var(--product-primary)',
      marginRight: '10px',
      fontSize: '0.9rem',
      animation: 'pulse 1.5s infinite',
    });

    header.appendChild(searchIcon);
    header.appendChild(document.createTextNode(`Kết quả tìm kiếm cho `));

    const searchTermSpan = document.createElement('span');
    searchTermSpan.textContent = `"${searchTerm}"`;
    Object.assign(searchTermSpan.style, {
      color: 'var(--product-primary)',
      fontWeight: '600',
      marginLeft: '2px',
      marginRight: '2px',
    });

    header.appendChild(searchTermSpan);
    header.appendChild(document.createTextNode(':'));

    // Create content container for scrollable items
    const contentContainer = document.createElement('div');
    contentContainer.className = 'search-suggestions-content';

    // Create suggestions list
    matchingProducts.forEach((product) => {
      const item = document.createElement('div');
      item.className = 'search-suggestion-item';

      // Add hover effect
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'rgba(249, 115, 22, 0.05)';
        item.style.transform = 'translateX(4px)';
      });

      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
        item.style.transform = 'translateX(0)';
      });

      // Add ripple effect on click
      item.addEventListener('mousedown', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'search-ripple-effect';

        const rect = item.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 2;

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        item.appendChild(ripple);

        setTimeout(() => {
          ripple.remove();
        }, 600);
      });

      // Create thumbnail with enhanced styling
      const thumbnail = document.createElement('div');
      thumbnail.style.width = '48px';
      thumbnail.style.height = '48px';
      thumbnail.style.flexShrink = '0';
      thumbnail.style.borderRadius = '6px';
      thumbnail.style.overflow = 'hidden';
      thumbnail.style.backgroundColor = 'rgba(0, 0, 0, 0.03)';
      thumbnail.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.08)';
      thumbnail.style.transition = 'transform 0.3s ease';
      thumbnail.style.position = 'relative';

      const img = document.createElement('img');
      img.src = product.image || 'images/products/placeholder.jpg';
      img.alt = product.name;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      img.style.transition = 'transform 0.3s ease';

      img.onerror = function () {
        this.src = 'images/products/placeholder.jpg';
      };

      // Add hover effect for image
      thumbnail.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
      });

      thumbnail.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
      });

      thumbnail.appendChild(img);
      item.appendChild(thumbnail);

      // Create content with enhanced styling
      const content = document.createElement('div');
      content.style.flex = '1';
      content.style.minWidth = '0';
      content.style.display = 'flex';
      content.style.flexDirection = 'column';
      content.style.justifyContent = 'center';

      const name = document.createElement('div');
      name.style.fontWeight = '600';
      name.style.marginBottom = '4px';
      name.style.whiteSpace = 'nowrap';
      name.style.overflow = 'hidden';
      name.style.textOverflow = 'ellipsis';
      name.style.color = '#1c2332';
      name.style.fontSize = '0.95rem';
      name.style.transition = 'color 0.2s ease';
      name.textContent = product.name;
      content.appendChild(name);

      // Add hover effect for product name
      item.addEventListener('mouseenter', () => {
        name.style.color = 'var(--product-primary)';
      });

      item.addEventListener('mouseleave', () => {
        name.style.color = '#1c2332';
      });

      // Create flex container for category and price (if available)
      const metaContainer = document.createElement('div');
      metaContainer.style.display = 'flex';
      metaContainer.style.alignItems = 'center';
      metaContainer.style.gap = '12px';

      const category = document.createElement('div');
      category.style.fontSize = '0.8rem';
      category.style.color = 'var(--product-text-light)';
      category.style.display = 'flex';
      category.style.alignItems = 'center';
      category.style.gap = '5px';

      const tagIcon = document.createElement('i');
      tagIcon.className = 'fas fa-tag';
      tagIcon.style.fontSize = '0.7rem';
      tagIcon.style.color = 'var(--product-primary)';

      category.appendChild(tagIcon);
      category.appendChild(document.createTextNode(product.category));
      metaContainer.appendChild(category);

      // Add price if available (extracted from description)
      const priceMatch = product.description.match(/giá[:\s]*([\d.,]+)/i);
      if (priceMatch && priceMatch[1]) {
        const price = document.createElement('div');
        price.style.fontSize = '0.8rem';
        price.style.fontWeight = '600';
        price.style.color = 'var(--product-primary)';
        price.style.display = 'flex';
        price.style.alignItems = 'center';
        price.style.gap = '5px';

        const priceIcon = document.createElement('i');
        priceIcon.className = 'fas fa-tag';
        priceIcon.style.fontSize = '0.7rem';

        price.appendChild(priceIcon);
        price.appendChild(document.createTextNode(priceMatch[1]));
        metaContainer.appendChild(price);
      }

      content.appendChild(metaContainer);
      item.appendChild(content);

      // Add click event
      item.addEventListener('click', () => {
        // Show loading effect
        showLoading();

        // Navigate to product details
        setTimeout(() => {
          window.location.href = `product-details.html?id=${product.id}`;
        }, 300);
      });

      contentContainer.appendChild(item);
    });

    // Add "View all results" button
    const viewAllButton = document.createElement('div');
    viewAllButton.className = 'view-all-results';

    // Create icon
    const searchAllIcon = document.createElement('i');
    searchAllIcon.className = 'fas fa-search-plus';

    // Create text span
    const textSpan = document.createElement('span');
    textSpan.textContent = `Xem tất cả kết quả (${totalMatchCount})`;

    viewAllButton.appendChild(searchAllIcon);
    viewAllButton.appendChild(textSpan);

    // Add hover effect
    viewAllButton.addEventListener('mouseenter', () => {
      viewAllButton.style.backgroundColor = 'rgba(249, 115, 22, 0.1)';
      viewAllButton.style.transform = 'translateY(-2px)';
      searchAllIcon.style.transform = 'scale(1.2)';
    });

    viewAllButton.addEventListener('mouseleave', () => {
      viewAllButton.style.backgroundColor = 'rgba(249, 115, 22, 0.05)';
      viewAllButton.style.transform = 'translateY(0)';
      searchAllIcon.style.transform = 'scale(1)';
    });

    // Add ripple effect on click
    viewAllButton.addEventListener('mousedown', (e) => {
      const ripple = document.createElement('span');
      ripple.className = 'search-ripple-effect';

      const rect = viewAllButton.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

      viewAllButton.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });

    // Add click event
    viewAllButton.addEventListener('click', () => {
      // Set search input value
      if (searchInput) {
        searchInput.value = searchTerm;
      }

      // Trigger search (hideSearchSuggestions() is already called inside handleSearch)
      handleSearch();
    });

    // Assemble the container
    suggestionsContainer.appendChild(header);
    suggestionsContainer.appendChild(contentContainer);
    suggestionsContainer.appendChild(viewAllButton);

    // Add to DOM
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
      // Ensure search container has proper positioning
      searchContainer.style.position = 'relative';
      searchContainer.style.zIndex = '1001'; // Higher z-index for the container

      // Find the search input field to align with
      const searchInputField =
        searchContainer.querySelector('input[type="text"]');

      // Append to body instead of search container for better positioning
      document.body.appendChild(suggestionsContainer);

      // Position the suggestions relative to the search container
      const searchContainerRect = searchContainer.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;

      // Calculate position to align with search input
      let leftPosition = searchContainerRect.left + scrollLeft;
      let width = searchContainerRect.width;

      // If we found the input field, align with it precisely
      if (searchInputField) {
        const inputRect = searchInputField.getBoundingClientRect();
        leftPosition = inputRect.left + scrollLeft;
        width = inputRect.width;
      }

      suggestionsContainer.style.position = 'absolute';
      suggestionsContainer.style.top =
        searchContainerRect.bottom + scrollTop + 'px';
      suggestionsContainer.style.left = leftPosition + 'px';
      suggestionsContainer.style.width = width + 'px';

      // Animate in with improved animation
      setTimeout(() => {
        suggestionsContainer.style.opacity = '1';
        suggestionsContainer.style.transform = 'translateY(0) scale(1)';
      }, 10);
    }
  }

  // Function to hide search suggestions
  function hideSearchSuggestions() {
    const existingSuggestions = document.querySelector('.search-suggestions');
    if (existingSuggestions) {
      // Animate out with improved animation
      existingSuggestions.style.opacity = '0';
      existingSuggestions.style.transform = 'translateY(-8px) scale(0.98)';

      // Remove after animation
      setTimeout(() => {
        // Remove from document body
        if (document.body.contains(existingSuggestions)) {
          document.body.removeChild(existingSuggestions);
        }
        // Also check parent node as fallback
        else if (existingSuggestions.parentNode) {
          existingSuggestions.parentNode.removeChild(existingSuggestions);
        }
      }, 300);
    }
  }

  // Functions
  function initCategoryFilter() {
    if (!categoryFilter) return;

    // Get unique categories
    let categories = [...new Set(products.map((product) => product.category))];

    // Định nghĩa danh sách ưu tiên cho các danh mục phổ biến
    const priorityCategories = [
      'Tủ Quần Áo',
      'Tủ Bếp',
      'Giường Ngủ',
      'Bàn Làm Việc',
      'Bàn Học',
    ];

    // Sắp xếp danh mục theo thứ tự ưu tiên, sau đó theo bảng chữ cái
    categories.sort((a, b) => {
      const priorityA = priorityCategories.indexOf(a);
      const priorityB = priorityCategories.indexOf(b);

      // Nếu cả hai đều trong danh sách ưu tiên, sắp xếp theo thứ tự ưu tiên
      if (priorityA !== -1 && priorityB !== -1) {
        return priorityA - priorityB;
      }

      // Nếu chỉ có một trong danh sách ưu tiên, đặt nó lên trước
      if (priorityA !== -1) return -1;
      if (priorityB !== -1) return 1;

      // Nếu không có cái nào trong danh sách ưu tiên, sắp xếp theo bảng chữ cái
      return a.localeCompare(b, 'vi');
    });

    // Clear existing options except the first one
    while (categoryFilter.options.length > 1) {
      categoryFilter.remove(1);
    }

    // Kiểm tra xem có danh mục đã lưu trong localStorage không
    const savedCategory = localStorage.getItem('selectedCategory');

    // Add options to select
    categories.forEach((category) => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });

    // Nếu có danh mục đã lưu, chọn nó
    if (savedCategory && savedCategory !== 'all') {
      // Kiểm tra xem danh mục đã lưu có tồn tại trong danh sách không
      const categoryExists = Array.from(categoryFilter.options).some(
        (option) => option.value === savedCategory
      );

      if (categoryExists) {
        categoryFilter.value = savedCategory;
        // Áp dụng bộ lọc ngay lập tức
        setTimeout(() => {
          handleFilter();
        }, 100);
      } else {
        // Nếu danh mục không tồn tại, xóa khỏi localStorage
        localStorage.removeItem('selectedCategory');
      }
    }

    // Khởi tạo bộ lọc khuyến mãi
    initPromotionFilter();
  }

  function initPromotionFilter() {
    if (!promotionFilter) return;

    // Xóa các tùy chọn hiện tại trừ tùy chọn đầu tiên và thứ hai
    while (promotionFilter.options.length > 2) {
      promotionFilter.remove(2);
    }

    // Lấy danh sách các loại khuyến mãi duy nhất
    const promotions = [];
    products.forEach((product) => {
      if (product.promotion && !promotions.includes(product.promotion)) {
        promotions.push(product.promotion);
      }
    });

    // Sắp xếp các loại khuyến mãi theo bảng chữ cái
    promotions.sort((a, b) => a.localeCompare(b, 'vi'));

    // Thêm các tùy chọn vào select
    promotions.forEach((promotion) => {
      const option = document.createElement('option');
      option.value = promotion;
      option.textContent = promotion;
      promotionFilter.appendChild(option);
    });

    // Kiểm tra xem có khuyến mãi đã lưu trong localStorage không
    const savedPromotion = localStorage.getItem('selectedPromotion');

    if (savedPromotion && savedPromotion !== 'all') {
      // Kiểm tra xem khuyến mãi đã lưu có tồn tại trong danh sách không
      const promotionExists = Array.from(promotionFilter.options).some(
        (option) => option.value === savedPromotion
      );

      if (promotionExists) {
        promotionFilter.value = savedPromotion;
        // Áp dụng bộ lọc ngay lập tức
        setTimeout(() => {
          handleFilter();
        }, 100);
      } else {
        // Nếu khuyến mãi không tồn tại, xóa khỏi localStorage
        localStorage.removeItem('selectedPromotion');
      }
    }
  }

  // Biến để theo dõi trạng thái loading
  let isLoading = false;
  let spinnerOverlay = null;

  // Show loading spinner
  function showLoading() {
    // Nếu đang loading, không làm gì thêm
    if (isLoading) return;

    // Đánh dấu đang loading
    isLoading = true;

    // Tạo spinner overlay nếu chưa tồn tại
    if (!spinnerOverlay) {
      spinnerOverlay = document.createElement('div');
      spinnerOverlay.className = 'spinner-overlay';
      spinnerOverlay.innerHTML = `
        <div class="spinner-container">
          <div class="spinner"></div>
          <div class="loading-text">Đang tải sản phẩm...</div>
        </div>
      `;
      document.body.appendChild(spinnerOverlay);
    }

    // Xóa các style inline cũ và reset trạng thái
    spinnerOverlay.style.display = 'block';
    spinnerOverlay.style.opacity = '0';
    spinnerOverlay.style.transition = 'opacity 0.3s ease';

    // Force reflow để đảm bảo transition hoạt động
    void spinnerOverlay.offsetWidth;

    // Hiển thị spinner với hiệu ứng fade in
    requestAnimationFrame(() => {
      spinnerOverlay.style.opacity = '1';
      spinnerOverlay.classList.add('active');
    });

    // Thêm hiệu ứng loading cho category filter
    if (categoryFilter) {
      categoryFilter.classList.add('loading');
    }

    // Thêm hiệu ứng loading cho search button
    if (searchButton) {
      // Lưu giá trị vị trí gốc nếu cần
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

      // Thêm class loading
      searchButton.classList.add('loading');
    }

    // Thêm trạng thái loading cho product grid
    if (productGrid) {
      productGrid.classList.add('loading');
    }

    // Log để debug
    console.log('Loading shown at:', new Date().toISOString());
  }

  // Hide loading spinner
  function hideLoading() {
    // Nếu không đang loading hoặc không có spinner, không làm gì
    if (!isLoading || !spinnerOverlay) return;

    // Đánh dấu không còn loading
    isLoading = false;

    // Fade out spinner
    spinnerOverlay.style.opacity = '0';
    spinnerOverlay.classList.remove('active');

    // Xóa spinner sau khi animation hoàn tất
    setTimeout(() => {
      if (spinnerOverlay) {
        spinnerOverlay.style.display = 'none';
      }
    }, 300);

    // Xóa hiệu ứng loading từ category filter
    if (categoryFilter) {
      categoryFilter.classList.remove('loading');
    }

    // Xóa hiệu ứng loading từ search button
    if (searchButton) {
      searchButton.classList.remove('loading');

      // Khôi phục vị trí gốc nếu cần
      if (searchButton.dataset.originalPosition) {
        const originalPosition = JSON.parse(
          searchButton.dataset.originalPosition
        );
        // Chỉ áp dụng nếu cần
        if (searchButton.style.position !== originalPosition.position) {
          Object.assign(searchButton.style, originalPosition);
        }
      }
    }

    // Xóa trạng thái loading từ product grid
    if (productGrid) {
      productGrid.classList.remove('loading');
    }

    // Log để debug
    console.log('Loading hidden at:', new Date().toISOString());
  }

  function handleFilter() {
    currentPage = 1;

    // Lưu danh mục đã chọn vào localStorage
    if (categoryFilter) {
      localStorage.setItem('selectedCategory', categoryFilter.value);
    }

    // Lưu khuyến mãi đã chọn vào localStorage
    if (promotionFilter) {
      localStorage.setItem('selectedPromotion', promotionFilter.value);
    }

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
        updateProductCount(); // Khôi phục cập nhật số lượng sản phẩm
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

    // Ẩn box gợi ý sản phẩm khi nhấn nút tìm kiếm
    hideSearchSuggestions();

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
        updateProductCount(); // Khôi phục cập nhật số lượng sản phẩm

        // Show search results review if there are results and search input is not empty
        if (searchInput && searchInput.value.trim() !== '') {
          showSearchResults();
        }
      } catch (error) {
        console.error('Error during search processing:', error);
      } finally {
        // Always hide loading, even if there was an error
        hideLoading();
        window.loadingTimeout = null;
      }
    }, 800);
  }

  // Function to show search results review
  function showSearchResults() {
    // Remove any existing search results container
    const existingResults = document.querySelector('.search-results-review');
    if (existingResults) {
      existingResults.remove();
    }

    // Create search results container
    const searchResultsContainer = document.createElement('div');
    searchResultsContainer.className = 'search-results-review';

    // Style the container
    Object.assign(searchResultsContainer.style, {
      position: 'relative',
      margin: '15px 0',
      padding: '15px',
      backgroundColor: 'rgba(249, 115, 22, 0.05)',
      borderRadius: '8px',
      borderLeft: '4px solid var(--product-primary)',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
      opacity: '0',
      transform: 'translateY(10px)',
    });

    // Get search term and result count
    const searchTerm = searchInput.value.trim();
    const resultCount = filteredProducts.length;

    // Tính toán phạm vi sản phẩm đang hiển thị
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(startIndex + productsPerPage - 1, resultCount);
    const pageInfo =
      resultCount > 0
        ? `(trang ${currentPage}/${Math.ceil(resultCount / productsPerPage)})`
        : '';

    // Create content with improved information
    searchResultsContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h3 style="margin: 0 0 5px 0; font-size: 1rem; color: var(--product-dark);">
            <i class="fas fa-search" style="color: var(--product-primary); margin-right: 8px;"></i>
            Kết quả tìm kiếm cho "<span style="color: var(--product-primary);">${searchTerm}</span>"
          </h3>
          <p style="margin: 0; font-size: 0.9rem; color: var(--product-text-light);">
            ${
              resultCount > 0
                ? `Hiển thị <strong>${startIndex}-${endIndex}</strong> của <strong>${resultCount}</strong> sản phẩm phù hợp ${pageInfo}`
                : 'Không tìm thấy sản phẩm nào phù hợp'
            }
          </p>
        </div>
        <button class="close-search-results" style="background: none; border: none; cursor: pointer; color: var(--product-text-light); font-size: 1.2rem;">
          <i class="fas fa-times"></i>
        </button>
      </div>
    `;

    // Insert after filter section
    const filterSection = document.querySelector('.filter-section');
    if (filterSection && filterSection.parentNode) {
      filterSection.parentNode.insertBefore(
        searchResultsContainer,
        filterSection.nextSibling
      );

      // Add animation after a small delay to ensure DOM update
      setTimeout(() => {
        searchResultsContainer.style.opacity = '1';
        searchResultsContainer.style.transform = 'translateY(0)';
      }, 10);

      // Add event listener to close button
      const closeButton = searchResultsContainer.querySelector(
        '.close-search-results'
      );
      if (closeButton) {
        closeButton.addEventListener('click', () => {
          searchResultsContainer.style.opacity = '0';
          searchResultsContainer.style.transform = 'translateY(10px)';

          setTimeout(() => {
            searchResultsContainer.remove();
          }, 300);
        });
      }
    }
  }

  // Function to remove Vietnamese accents
  function removeAccents(str) {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  }

  function applyFilters() {
    const categoryValue = categoryFilter ? categoryFilter.value : 'all';
    const promotionValue = promotionFilter ? promotionFilter.value : 'all';
    const searchValue = searchInput
      ? searchInput.value.toLowerCase().trim()
      : '';

    // Remove accents from search value for non-accented search
    const normalizedSearchValue = removeAccents(searchValue);

    filteredProducts = products.filter((product) => {
      // Category filter
      const categoryMatch =
        categoryValue === 'all' || product.category === categoryValue;

      // Promotion filter
      let promotionMatch = true;
      if (promotionValue !== 'all') {
        if (promotionValue === 'has-promotion') {
          // Lọc sản phẩm có khuyến mãi bất kỳ
          promotionMatch = !!product.promotion;
        } else {
          // Lọc sản phẩm có khuyến mãi cụ thể
          promotionMatch = product.promotion === promotionValue;
        }
      }

      // Search filter - support both accented and non-accented search
      const normalizedName = removeAccents(product.name.toLowerCase());
      const normalizedDescription = removeAccents(
        product.description.toLowerCase()
      );

      const searchMatch =
        product.name.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue) ||
        normalizedName.includes(normalizedSearchValue) ||
        normalizedDescription.includes(normalizedSearchValue);

      return categoryMatch && promotionMatch && searchMatch;
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

        // Determine badge type based on promotion text
        let badgeClass = 'promo-badge';
        let badgeIcon = '';

        if (
          product.promotion.toLowerCase().includes('sale') ||
          product.promotion.toLowerCase().includes('giảm')
        ) {
          badgeClass += ' sale';
          badgeIcon = '<i class="fas fa-percent"></i>';
        } else if (product.promotion.toLowerCase().includes('mới')) {
          badgeClass += ' new';
          badgeIcon = '<i class="fas fa-star"></i>';
        } else if (
          product.promotion.toLowerCase().includes('đặc biệt') ||
          product.promotion.toLowerCase().includes('ưu đãi')
        ) {
          badgeClass += ' special';
          badgeIcon = '<i class="fas fa-gift"></i>';
        } else {
          badgeIcon = '<i class="fas fa-tag"></i>';
        }

        // Add ribbon style for longer promotions
        if (product.promotion.length > 10) {
          badgeClass += ' ribbon';
        }

        // Add pulse animation for important promotions
        if (
          product.promotion.toLowerCase().includes('hot') ||
          product.promotion.toLowerCase().includes('đặc biệt') ||
          product.promotion.toLowerCase().includes('20%')
        ) {
          badgeClass += ' pulse';
        }

        badge.className = badgeClass;
        badge.innerHTML = badgeIcon + ' ' + product.promotion;
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

      // Add click event to show loading before navigation
      detailsLink.addEventListener('click', function (e) {
        e.preventDefault();

        // Show loading effect
        showLoading();

        // Navigate after a short delay
        setTimeout(() => {
          window.location.href = this.href;
        }, 300);
      });

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
          // Show loading effect before navigation
          showLoading();

          // Set a timeout to navigate after showing loading effect
          setTimeout(() => {
            window.location.href = `product-details.html?id=${productId}`;
          }, 300);
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

    // Kiểm tra xem có bộ lọc danh mục hoặc khuyến mãi đang áp dụng không
    const hasActiveCategoryFilter =
      categoryFilter && categoryFilter.value !== 'all';
    const hasActivePromotionFilter =
      promotionFilter && promotionFilter.value !== 'all';
    const hasSearchTerm = searchInput && searchInput.value.trim() !== '';

    // Tạo thông báo giải thích phù hợp
    let explanationMessage = '';

    if (hasActiveCategoryFilter && hasSearchTerm) {
      // Trường hợp có cả bộ lọc danh mục và từ khóa tìm kiếm
      const categoryName =
        categoryFilter.options[categoryFilter.selectedIndex].text;
      const searchTerm = searchInput.value.trim();
      explanationMessage = `Không tìm thấy sản phẩm nào thuộc danh mục <strong>${categoryName}</strong> phù hợp với từ khóa <strong>${searchTerm}</strong>.`;
    } else if (hasActivePromotionFilter && hasSearchTerm) {
      // Trường hợp có cả bộ lọc khuyến mãi và từ khóa tìm kiếm
      const promotionName =
        promotionFilter.options[promotionFilter.selectedIndex].text;
      const searchTerm = searchInput.value.trim();
      explanationMessage = `Không tìm thấy sản phẩm nào có khuyến mãi <strong>${promotionName}</strong> phù hợp với từ khóa <strong>${searchTerm}</strong>.`;
    } else if (hasActiveCategoryFilter && hasActivePromotionFilter) {
      // Trường hợp có cả bộ lọc danh mục và khuyến mãi
      const categoryName =
        categoryFilter.options[categoryFilter.selectedIndex].text;
      const promotionName =
        promotionFilter.options[promotionFilter.selectedIndex].text;
      explanationMessage = `Không tìm thấy sản phẩm nào thuộc danh mục <strong>${categoryName}</strong> có khuyến mãi <strong>${promotionName}</strong>.`;
    } else if (hasActiveCategoryFilter) {
      // Chỉ có bộ lọc danh mục
      const categoryName =
        categoryFilter.options[categoryFilter.selectedIndex].text;
      explanationMessage = `Không tìm thấy sản phẩm nào thuộc danh mục <strong>${categoryName}</strong>.`;
    } else if (hasActivePromotionFilter) {
      // Chỉ có bộ lọc khuyến mãi
      const promotionName =
        promotionFilter.options[promotionFilter.selectedIndex].text;
      explanationMessage = `Không tìm thấy sản phẩm nào có khuyến mãi <strong>${promotionName}</strong>.`;
    } else if (hasSearchTerm) {
      // Chỉ có từ khóa tìm kiếm
      const searchTerm = searchInput.value.trim();
      explanationMessage = `Không tìm thấy sản phẩm nào phù hợp với từ khóa <strong>${searchTerm}</strong>.`;
    } else {
      // Không có bộ lọc nào
      explanationMessage = 'Không tìm thấy sản phẩm nào.';
    }

    // Tạo nút gợi ý mở rộng tìm kiếm nếu có từ khóa tìm kiếm và bộ lọc danh mục/khuyến mãi
    let searchAllCategoriesButton = '';
    if (
      hasSearchTerm &&
      (hasActiveCategoryFilter || hasActivePromotionFilter)
    ) {
      const searchTerm = searchInput.value.trim();
      searchAllCategoriesButton = `
        <button onclick="searchAllCategories('${searchTerm}')" class="search-all-categories-btn">
            <i class="fas fa-search"></i> Tìm kiếm "${searchTerm}" trong tất cả danh mục
        </button>
      `;
    }

    // Create a more responsive and visually appealing empty state
    productGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon-container">
                    <i class="fas fa-search"></i>
                </div>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>${explanationMessage}</p>
                ${searchAllCategoriesButton}
                <button onclick="resetFilters()" class="reset-filters-btn">
                    <i class="fas fa-sync-alt"></i> Xóa bộ lọc
                </button>
            </div>
        `;

    // Hide pagination when no products
    if (paginationContainer) {
      paginationContainer.innerHTML = '';
    }

    // Tự động cuộn xuống và căn giữa empty-state
    setTimeout(() => {
      const emptyState = document.querySelector('.empty-state');
      if (emptyState) {
        // Lấy chiều cao của header
        const announcementBanner = document.querySelector(
          '.announcement-banner'
        );
        const mainHeader = document.querySelector('.main-header');

        // Tính tổng chiều cao của header (announcement banner + main header)
        const announcementHeight = announcementBanner
          ? announcementBanner.offsetHeight
          : 0;
        const headerHeight = mainHeader ? mainHeader.offsetHeight : 0;
        const totalHeaderHeight = announcementHeight + headerHeight;

        // Tính toán vị trí để empty-state nằm giữa phần nhìn thấy của màn hình (trừ đi chiều cao của header)
        const windowHeight = window.innerHeight;
        const visibleWindowHeight = windowHeight - totalHeaderHeight;
        const emptyStateRect = emptyState.getBoundingClientRect();
        const emptyStateHeight = emptyStateRect.height;
        const emptyStateTop = emptyStateRect.top + window.pageYOffset;

        // Tính toán vị trí cuộn để empty-state nằm giữa phần nhìn thấy của màn hình
        const scrollToPosition =
          emptyStateTop -
          totalHeaderHeight -
          (visibleWindowHeight - emptyStateHeight) / 2;

        // Cuộn đến vị trí đã tính toán với hiệu ứng mượt mà
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth',
        });

        console.log('Empty state centered with header adjustment');
        console.log('Header height:', totalHeaderHeight);
        console.log('Window height:', windowHeight);
        console.log('Visible window height:', visibleWindowHeight);
        console.log('Empty state height:', emptyStateHeight);
        console.log('Scroll position:', scrollToPosition);
      }
    }, 300); // Tăng thời gian chờ để đảm bảo empty-state đã được render đầy đủ
  }

  // Hàm tìm kiếm trong tất cả danh mục
  window.searchAllCategories = function (searchTerm) {
    try {
      // Đặt bộ lọc danh mục và khuyến mãi về "Tất cả"
      if (categoryFilter) categoryFilter.value = 'all';
      if (promotionFilter) promotionFilter.value = 'all';

      // Đặt từ khóa tìm kiếm
      if (searchInput) searchInput.value = searchTerm;

      // Xóa danh mục và khuyến mãi đã lưu trong localStorage
      localStorage.removeItem('selectedCategory');
      localStorage.removeItem('selectedPromotion');

      // Áp dụng tìm kiếm
      handleSearch();
    } catch (error) {
      console.error('Error searching all categories:', error);
    }
  };

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
        scrollToTopFix();

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
        scrollToTopFix();

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
        scrollToTopFix();

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
        scrollToTopFix();

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
    const productCountElement = document.getElementById('product-count-number');
    const productTotalElement = document.getElementById('product-total-number');
    const productCountInfoElement = document.querySelector(
      '.product-count-info span'
    );

    // Tính toán phạm vi sản phẩm đang hiển thị
    const startIndex = (currentPage - 1) * productsPerPage + 1;
    const endIndex = Math.min(
      startIndex + productsPerPage - 1,
      filteredProducts.length
    );

    // Xử lý trường hợp không có sản phẩm nào
    if (filteredProducts.length === 0) {
      if (productCountInfoElement) {
        productCountInfoElement.innerHTML = 'Không có sản phẩm nào phù hợp';
      }
      if (productCountElement) {
        productCountElement.textContent = '0';
      }
      if (productTotalElement) {
        productTotalElement.textContent = products.length;
      }
      return;
    }

    // Cập nhật thông tin hiển thị
    if (productCountInfoElement) {
      // Hiển thị phạm vi sản phẩm và tổng số sản phẩm sau khi lọc
      productCountInfoElement.innerHTML = `Hiển thị <strong>${startIndex}-${endIndex}</strong> của <strong>${filteredProducts.length}</strong> sản phẩm`;
    }

    // Cập nhật các phần tử riêng lẻ nếu cần
    if (productCountElement) {
      productCountElement.textContent = endIndex - startIndex + 1;
    }

    if (productTotalElement) {
      productTotalElement.textContent = filteredProducts.length;
    }

    // Cập nhật search-results-review nếu đang hiển thị và có từ khóa tìm kiếm
    const searchResultsReview = document.querySelector(
      '.search-results-review'
    );
    if (searchResultsReview && searchInput && searchInput.value.trim() !== '') {
      // Tìm phần tử hiển thị thông tin số lượng sản phẩm trong search-results-review
      const searchResultsInfo = searchResultsReview.querySelector('p');
      if (searchResultsInfo) {
        const searchTerm = searchInput.value.trim();
        const pageInfo =
          filteredProducts.length > 0
            ? `(trang ${currentPage}/${Math.ceil(
                filteredProducts.length / productsPerPage
              )})`
            : '';

        if (filteredProducts.length > 0) {
          searchResultsInfo.innerHTML = `Hiển thị <strong>${startIndex}-${endIndex}</strong> của <strong>${filteredProducts.length}</strong> sản phẩm phù hợp ${pageInfo}`;
        } else {
          searchResultsInfo.innerHTML = 'Không tìm thấy sản phẩm nào phù hợp';
        }
      }
    }
  }

  // Expose functions to global scope with Safari compatibility
  window.resetFilters = function () {
    try {
      // Xóa danh mục và khuyến mãi đã lưu trong localStorage
      localStorage.removeItem('selectedCategory');
      localStorage.removeItem('selectedPromotion');

      if (categoryFilter) categoryFilter.value = 'all';
      if (promotionFilter) promotionFilter.value = 'all';
      if (searchInput) searchInput.value = '';

      currentPage = 1;
      filteredProducts = Array.isArray(products) ? [...products] : [];

      // Xóa kết quả tìm kiếm hiển thị
      const existingResults = document.querySelector('.search-results-review');
      if (existingResults) {
        existingResults.remove();
      }

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
