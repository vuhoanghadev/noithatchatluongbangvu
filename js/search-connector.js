/**
 * Search Connector
 * Connects product and blog data from existing files to the search functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Connect products data
    connectProductsData();
    
    // Connect blog posts data
    connectBlogPostsData();
});

/**
 * Connects products data from products.js to window.products for search
 */
function connectProductsData() {
    // Check if products variable exists (from products.js)
    if (typeof products !== 'undefined' && Array.isArray(products)) {
        console.log('Connecting products data to search...');
        
        // Map products to the format expected by search
        window.products = products.map(product => {
            return {
                id: product.id,
                name: product.name,
                category: product.category,
                images: [product.image], // Convert single image to array
                description: product.description,
                price: product.price || 'Liên hệ',
                material: product.material || '',
                promotion: product.promotion || null,
                tag: product.tag || '',
                rating: product.rating || 0,
                views: product.views || 0,
                soldCount: product.soldCount || 0
            };
        });
        
        console.log(`Connected ${window.products.length} products to search`);
    } else {
        console.warn('Products data not found. Using fallback data if available.');
    }
}

/**
 * Connects blog posts data from blog.js to window.blogPosts for search
 */
function connectBlogPostsData() {
    // Check if posts variable exists (from blog.js)
    if (typeof posts !== 'undefined' && Array.isArray(posts)) {
        console.log('Connecting blog posts data to search...');
        
        // Map blog posts to the format expected by search
        window.blogPosts = posts.map(post => {
            return {
                id: post.id,
                title: post.title,
                category: post.category,
                author: post.author || 'Admin',
                image: post.image,
                excerpt: post.excerpt,
                content: typeof post.content === 'string' ? post.content : 
                         (post.content && post.content.replace ? post.content.replace(/<[^>]*>/g, '') : ''),
                date: post.date || new Date().toISOString().split('T')[0],
                views: post.views || 0
            };
        });
        
        console.log(`Connected ${window.blogPosts.length} blog posts to search`);
    } else {
        console.warn('Blog posts data not found. Using fallback data if available.');
    }
}

/**
 * Fallback data in case the original data sources are not available
 */
function setupFallbackData() {
    // Only set up fallback data if no data is available
    if (!window.products || !Array.isArray(window.products) || window.products.length === 0) {
        window.products = [
            {
                id: 1,
                name: 'Tủ QA205 - 4 Cánh Mở, 2 Hàng Ngăn Kéo, Ô Hở Trái Vân Óc Chó',
                category: 'Tủ Quần Áo',
                images: ['images/products/product1.png'],
                description: 'Tủ quần áo QA205 được chế tác từ gỗ MDF phủ melamine cao cấp, mang phong cách hiện đại và tinh tế.',
                price: 'Liên hệ',
                material: 'Gỗ MDF phủ melamine',
                promotion: null,
                tag: 'bán chạy',
                rating: 4.7,
                views: 1250,
                soldCount: 120
            },
            {
                id: 2,
                name: 'Bàn Ăn Gỗ Tự Nhiên BA-501',
                category: 'Bàn Ăn',
                images: ['images/products/product3.png'],
                description: 'Bàn ăn BA-501 được làm từ gỗ tự nhiên 100%, mang đến vẻ đẹp sang trọng và ấm cúng cho không gian bếp.',
                price: 'Liên hệ',
                material: 'Gỗ tự nhiên',
                promotion: null,
                tag: null,
                rating: 4.8,
                views: 980,
                soldCount: 75
            }
        ];
    }
    
    if (!window.blogPosts || !Array.isArray(window.blogPosts) || window.blogPosts.length === 0) {
        window.blogPosts = [
            {
                id: 1,
                title: '5 Mẹo Chọn Tủ Quần Áo Phù Hợp Với Không Gian Sống Của Bạn',
                category: 'Mẹo thiết kế nội thất',
                author: 'Vũ Hoàng Hà',
                image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
                excerpt: 'Khám phá 5 mẹo vàng giúp bạn chọn tủ quần áo hoàn hảo, vừa đẹp mắt vừa tối ưu không gian và nhu cầu sử dụng.',
                content: 'Chọn được một chiếc tủ quần áo phù hợp không chỉ giúp bạn tổ chức không gian sống gọn gàng mà còn nâng tầm thẩm mỹ cho căn phòng.',
                date: '2025-04-15'
            },
            {
                id: 2,
                title: 'Xu Hướng Nội Thất 2025',
                category: 'Xu hướng',
                author: 'Trần Thị Hương',
                image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D',
                excerpt: 'Khám phá các xu hướng nội thất mới nhất cho năm 2025.',
                content: 'Năm 2025, nội thất tối giản và bền vững sẽ lên ngôi. Màu sắc: Tông màu trung tính kết hợp điểm nhấn cam.',
                date: '2025-03-20'
            }
        ];
    }
}

// Set up fallback data after a short delay to ensure main data has a chance to load
setTimeout(setupFallbackData, 500);
