// Modern Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const productGrid = document.querySelector('.product-grid');
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.querySelector('.search-button');
    const paginationContainer = document.querySelector('.pagination');
    const productCountElement = document.querySelector('.product-count span');
    
    // Product data (example data - replace with your actual products)
    const products = [
        {
            id: 1,
            title: 'Sofa Góc Hiện Đại',
            category: 'sofa',
            description: 'Sofa góc hiện đại với chất liệu vải cao cấp, khung gỗ tự nhiên bền vững.',
            image: 'images/products/sofa-goc-hien-dai.jpg',
            dimensions: '250 x 180 x 85 cm',
            badge: 'Mới'
        },
        {
            id: 2,
            title: 'Bàn Ăn Gỗ Sồi',
            category: 'ban-an',
            description: 'Bàn ăn gỗ sồi tự nhiên với thiết kế tinh tế, phù hợp cho gia đình 6 người.',
            image: 'images/products/ban-an-go-soi.jpg',
            dimensions: '160 x 80 x 75 cm',
            badge: 'Bán chạy'
        },
        {
            id: 3,
            title: 'Giường Ngủ Hiện Đại',
            category: 'giuong-ngu',
            description: 'Giường ngủ hiện đại với đầu giường bọc da, khung gỗ tự nhiên chắc chắn.',
            image: 'images/products/giuong-ngu-hien-dai.jpg',
            dimensions: '200 x 180 x 100 cm',
            badge: 'Mới'
        },
        {
            id: 4,
            title: 'Tủ Quần Áo 4 Cánh',
            category: 'tu-quan-ao',
            description: 'Tủ quần áo 4 cánh với thiết kế hiện đại, không gian lưu trữ rộng rãi.',
            image: 'images/products/tu-quan-ao-4-canh.jpg',
            dimensions: '200 x 60 x 220 cm',
            badge: ''
        },
        {
            id: 5,
            title: 'Kệ Tivi Gỗ Công Nghiệp',
            category: 'ke-tivi',
            description: 'Kệ tivi gỗ công nghiệp với thiết kế tối giản, kết hợp không gian lưu trữ.',
            image: 'images/products/ke-tivi-go-cong-nghiep.jpg',
            dimensions: '180 x 45 x 50 cm',
            badge: 'Giảm giá'
        },
        {
            id: 6,
            title: 'Bàn Làm Việc Hiện Đại',
            category: 'ban-lam-viec',
            description: 'Bàn làm việc hiện đại với ngăn kéo tiện lợi, thiết kế tối giản.',
            image: 'images/products/ban-lam-viec-hien-dai.jpg',
            dimensions: '120 x 60 x 75 cm',
            badge: ''
        },
        {
            id: 7,
            title: 'Ghế Ăn Gỗ Tự Nhiên',
            category: 'ghe-an',
            description: 'Ghế ăn gỗ tự nhiên với đệm ngồi êm ái, thiết kế tinh tế.',
            image: 'images/products/ghe-an-go-tu-nhien.jpg',
            dimensions: '45 x 45 x 90 cm',
            badge: 'Bán chạy'
        },
        {
            id: 8,
            title: 'Tủ Giày Thông Minh',
            category: 'tu-giay',
            description: 'Tủ giày thông minh với thiết kế tiết kiệm không gian, nhiều ngăn lưu trữ.',
            image: 'images/products/tu-giay-thong-minh.jpg',
            dimensions: '100 x 30 x 120 cm',
            badge: ''
        },
        {
            id: 9,
            title: 'Đèn Sàn Hiện Đại',
            category: 'den-trang-tri',
            description: 'Đèn sàn hiện đại với chân đế bằng đồng, thiết kế tinh tế.',
            image: 'images/products/den-san-hien-dai.jpg',
            dimensions: '40 x 40 x 160 cm',
            badge: 'Mới'
        },
        {
            id: 10,
            title: 'Gương Trang Trí Phòng Khách',
            category: 'guong-trang-tri',
            description: 'Gương trang trí phòng khách với viền kim loại mạ vàng, thiết kế sang trọng.',
            image: 'images/products/guong-trang-tri-phong-khach.jpg',
            dimensions: '80 x 120 cm',
            badge: ''
        },
        {
            id: 11,
            title: 'Bàn Nước Mặt Đá',
            category: 'ban-nuoc',
            description: 'Bàn nước mặt đá cẩm thạch với chân kim loại mạ vàng, thiết kế sang trọng.',
            image: 'images/products/ban-nuoc-mat-da.jpg',
            dimensions: '120 x 60 x 45 cm',
            badge: 'Giảm giá'
        },
        {
            id: 12,
            title: 'Tủ Rượu Hiện Đại',
            category: 'tu-ruou',
            description: 'Tủ rượu hiện đại với kệ kính, đèn LED trang trí, thiết kế sang trọng.',
            image: 'images/products/tu-ruou-hien-dai.jpg',
            dimensions: '100 x 45 x 180 cm',
            badge: ''
        }
    ];
    
    // Variables
    let currentPage = 1;
    const productsPerPage = 6;
    let filteredProducts = [...products];
    
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
        
        // Add options to select
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            
            // Format category name (replace hyphens with spaces and capitalize)
            const categoryName = category
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            
            option.textContent = categoryName;
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
                product.title.toLowerCase().includes(searchValue) || 
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
        
        // Format category name
        const categoryName = product.category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        // Create badge HTML if badge exists
        const badgeHTML = product.badge 
            ? `<div class="product-badge">${product.badge}</div>` 
            : '';
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='images/products/placeholder.jpg'">
                ${badgeHTML}
            </div>
            <div class="product-content">
                <div class="product-category">
                    <i class="fas fa-tag"></i> ${categoryName}
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-action">
                    <button class="product-details" onclick="showProductDetails(${product.id})">
                        Chi tiết <i class="fas fa-arrow-right"></i>
                    </button>
                    <div class="product-dimensions">
                        <i class="fas fa-ruler-combined"></i> ${product.dimensions}
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
    window.showProductDetails = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            alert(`Chi tiết sản phẩm: ${product.title}`);
            // In a real implementation, you would redirect to a product detail page
            // window.location.href = `product-detail.html?id=${productId}`;
        }
    };
    
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
