// Modern Products Page JavaScript - Connector to existing data
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const productGrid = document.querySelector('.product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-button');
    const paginationContainer = document.querySelector('.pagination');
    const productCountElement = document.querySelector('.product-count span');
    
    // Variables
    let currentPage = 1;
    const productsPerPage = 12;
    let filteredProducts = [...products]; // Use existing products array from products.js
    
    // Initialize
    initCategoryFilter();
    renderProducts();
    renderPagination();
    updateProductCount();
    
    // Event listeners
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilter);
    }
    
    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Functions
    function initCategoryFilter() {
        if (!categoryFilter) return;
        
        // Get unique categories
        const categories = [...new Set(products.map(product => product.category))];
        
        // Clear existing options except the first one
        while (categoryFilter.options.length > 1) {
            categoryFilter.remove(1);
        }
        
        // Add options to select
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categoryFilter.appendChild(option);
        });
    }
    
    function handleFilter() {
        currentPage = 1;
        applyFilters();
        renderProducts();
        renderPagination();
        updateProductCount();
    }
    
    function handleSearch() {
        currentPage = 1;
        applyFilters();
        renderProducts();
        renderPagination();
        updateProductCount();
    }
    
    function applyFilters() {
        const categoryValue = categoryFilter ? categoryFilter.value : 'all';
        const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : '';
        
        filteredProducts = products.filter(product => {
            // Category filter
            const categoryMatch = categoryValue === 'all' || product.category === categoryValue;
            
            // Search filter
            const searchMatch = 
                product.name.toLowerCase().includes(searchValue) || 
                product.description.toLowerCase().includes(searchValue);
            
            return categoryMatch && searchMatch;
        });
    }
    
    function renderProducts() {
        if (!productGrid) return;
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
        
        // Clear product grid
        productGrid.innerHTML = '';
        
        // Check if no products found
        if (paginatedProducts.length === 0) {
            renderEmptyState();
            return;
        }
        
        // Render products
        paginatedProducts.forEach(product => {
            const productCard = createProductCard(product);
            productGrid.appendChild(productCard);
        });
        
        // Add fade-in animation
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 100);
        });
    }
    
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Create badge HTML if promotion exists
        const badgeHTML = product.promotion 
            ? `<div class="product-badge">${product.promotion}</div>` 
            : '';
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/products/placeholder.jpg'">
                ${badgeHTML}
            </div>
            <div class="product-content">
                <div class="product-category">
                    <i class="fas fa-tag"></i> ${product.category}
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-action">
                    <a href="product-details.html?id=${product.id}" class="product-details">
                        Chi tiết <i class="fas fa-arrow-right"></i>
                    </a>
                    <div class="product-dimensions">
                        <i class="fas fa-ruler-combined"></i> ${product.description.match(/kích thước ([^,]+)/i) ? product.description.match(/kích thước ([^,]+)/i)[1] : 'Đang cập nhật'}
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
    
    function renderEmptyState() {
        productGrid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>Không tìm thấy sản phẩm</h3>
                <p>Không có sản phẩm nào phù hợp với tiêu chí tìm kiếm của bạn. Vui lòng thử lại với các bộ lọc khác.</p>
                <button onclick="resetFilters()">Xóa bộ lọc</button>
            </div>
        `;
    }
    
    function renderPagination() {
        if (!paginationContainer) return;
        
        // Calculate total pages
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        
        // Clear pagination container
        paginationContainer.innerHTML = '';
        
        // Don't render pagination if no pages or only one page
        if (totalPages <= 1) return;
        
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.className = 'nav-btn';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                renderPagination();
            }
        });
        paginationContainer.appendChild(prevButton);
        
        // Page buttons
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        
        // Adjust start page if end page is maxed out
        if (endPage === totalPages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        
        // First page
        if (startPage > 1) {
            const firstPageButton = document.createElement('button');
            firstPageButton.textContent = '1';
            firstPageButton.addEventListener('click', () => {
                currentPage = 1;
                renderProducts();
                renderPagination();
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
        
        // Page buttons
        for (let i = startPage; i <= endPage; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            if (i === currentPage) {
                pageButton.className = 'active';
            }
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderProducts();
                renderPagination();
            });
            paginationContainer.appendChild(pageButton);
        }
        
        // Last page
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
            lastPageButton.addEventListener('click', () => {
                currentPage = totalPages;
                renderProducts();
                renderPagination();
            });
            paginationContainer.appendChild(lastPageButton);
        }
        
        // Next button
        const nextButton = document.createElement('button');
        nextButton.className = 'nav-btn';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                renderPagination();
            }
        });
        paginationContainer.appendChild(nextButton);
    }
    
    function updateProductCount() {
        if (!productCountElement) return;
        productCountElement.textContent = filteredProducts.length;
    }
    
    // Expose functions to global scope
    window.resetFilters = function() {
        if (categoryFilter) categoryFilter.value = 'all';
        if (searchInput) searchInput.value = '';
        
        currentPage = 1;
        filteredProducts = [...products];
        
        renderProducts();
        renderPagination();
        updateProductCount();
    };
});
