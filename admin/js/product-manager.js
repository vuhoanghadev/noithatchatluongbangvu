// Đảm bảo DOM đã được tải hoàn toàn trước khi thực thi code
document.addEventListener('DOMContentLoaded', function() {
    // Các phần tử DOM
    const productList = document.getElementById('productList');
    const productFormContainer = document.getElementById('productFormContainer');
    const productForm = document.getElementById('productForm');
    const formTitle = document.getElementById('formTitle');
    const addProductBtn = document.getElementById('addProductBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const exportBtn = document.getElementById('exportBtn');
    const exportModal = document.getElementById('exportModal');
    const exportCode = document.getElementById('exportCode');
    const copyExportBtn = document.getElementById('copyExportBtn');
    const downloadExportBtn = document.getElementById('downloadExportBtn');
    const closeModal = document.querySelector('.close-modal');
    const searchInput = document.getElementById('searchInput');
    
    // Các phần tử form
    const productIdInput = document.getElementById('productId');
    const productNameInput = document.getElementById('productName');
    const productCategoryInput = document.getElementById('productCategory');
    const productImageInput = document.getElementById('productImage');
    const productDescriptionInput = document.getElementById('productDescription');
    const productSizeInput = document.getElementById('productSize');
    const productWarrantyInput = document.getElementById('productWarranty');
    const productPriceInput = document.getElementById('productPrice');
    const productMaterialInput = document.getElementById('productMaterial');
    const productPromotionInput = document.getElementById('productPromotion');
    const productTagInput = document.getElementById('productTag');
    const productRatingInput = document.getElementById('productRating');
    const productViewsInput = document.getElementById('productViews');
    const productSoldCountInput = document.getElementById('productSoldCount');
    const productPromoEndDateInput = document.getElementById('productPromoEndDate');
    const productSkuInput = document.getElementById('productSku');
    const productFeaturedInput = document.getElementById('productFeatured');
    const productGalleryInput = document.getElementById('productGallery');
    
    // Flash sale inputs
    const flashsaleActiveInput = document.getElementById('flashsaleActive');
    const flashsaleDiscountPercentInput = document.getElementById('flashsaleDiscountPercent');
    const flashsaleOldPriceInput = document.getElementById('flashsaleOldPrice');
    const flashsaleNewPriceInput = document.getElementById('flashsaleNewPrice');
    const flashsaleTypeInput = document.getElementById('flashsaleType');
    const flashsaleEndsAtInput = document.getElementById('flashsaleEndsAt');
    const flashsaleHidePriceInput = document.getElementById('flashsaleHidePrice');
    
    // Detailed description inputs
    const detailedContentInput = document.getElementById('detailedContent');
    const detailedImagesContainer = document.getElementById('detailedImagesContainer');
    const addDetailedImageBtn = document.getElementById('addDetailedImageBtn');
    
    // Specifications inputs
    const specificationsContainer = document.getElementById('specificationsContainer');
    const addSpecBtn = document.getElementById('addSpecBtn');
    
    // Biến lưu trữ dữ liệu sản phẩm
    let productsData = [];
    
    // Khởi tạo dữ liệu từ file products.js
    if (typeof products !== 'undefined') {
        productsData = [...products];
        renderProductList();
    } else {
        console.error('Không thể tải dữ liệu sản phẩm từ file products.js');
    }
    
    // Xử lý sự kiện cho các nút
    addProductBtn.addEventListener('click', showAddProductForm);
    cancelBtn.addEventListener('click', hideProductForm);
    productForm.addEventListener('submit', handleFormSubmit);
    exportBtn.addEventListener('click', showExportModal);
    closeModal.addEventListener('click', hideExportModal);
    copyExportBtn.addEventListener('click', copyExportCode);
    downloadExportBtn.addEventListener('click', downloadExportFile);
    searchInput.addEventListener('input', handleSearch);
    addSpecBtn.addEventListener('click', addSpecificationField);
    addDetailedImageBtn.addEventListener('click', addDetailedImageField);
    
    // Xử lý sự kiện cho các phần có thể mở rộng
    const collapsibles = document.querySelectorAll('.collapsible-header');
    collapsibles.forEach(header => {
        header.addEventListener('click', function() {
            const parent = this.parentElement;
            parent.classList.toggle('active');
            const toggleIcon = this.querySelector('.toggle-icon');
            toggleIcon.textContent = parent.classList.contains('active') ? '−' : '+';
        });
    });
    
    // Hàm hiển thị danh sách sản phẩm
    function renderProductList(filteredProducts = null) {
        const products = filteredProducts || productsData;
        productList.innerHTML = '';
        
        if (products.length === 0) {
            productList.innerHTML = '<div class="product-item"><p>Không có sản phẩm nào.</p></div>';
            return;
        }
        
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';
            
            const imagePath = product.image || 'images/placeholder.png';
            
            productItem.innerHTML = `
                <div class="product-info">
                    <img src="../${imagePath}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <div class="product-category">${product.category}</div>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn secondary edit-btn" data-id="${product.id}">Sửa</button>
                    <button class="btn danger delete-btn" data-id="${product.id}">Xóa</button>
                </div>
            `;
            
            productList.appendChild(productItem);
            
            // Thêm sự kiện cho các nút
            const editBtn = productItem.querySelector('.edit-btn');
            const deleteBtn = productItem.querySelector('.delete-btn');
            
            editBtn.addEventListener('click', () => showEditProductForm(product.id));
            deleteBtn.addEventListener('click', () => deleteProduct(product.id));
        });
    }
    
    // Hàm hiển thị form thêm sản phẩm mới
    function showAddProductForm() {
        formTitle.textContent = 'Thêm sản phẩm mới';
        productForm.reset();
        productIdInput.value = '';
        
        // Xóa các trường thông số kỹ thuật
        while (specificationsContainer.children.length > 1) {
            specificationsContainer.removeChild(specificationsContainer.lastChild);
        }
        
        // Xóa các trường hình ảnh chi tiết
        const detailedImageItems = detailedImagesContainer.querySelectorAll('.detailed-image-item');
        detailedImageItems.forEach((item, index) => {
            if (index > 0) {
                detailedImagesContainer.removeChild(item);
            }
        });
        
        // Reset các trường input đầu tiên
        const firstSpecItem = specificationsContainer.querySelector('.specification-item');
        if (firstSpecItem) {
            const specKeyInput = firstSpecItem.querySelector('.spec-key');
            const specValueInput = firstSpecItem.querySelector('.spec-value');
            specKeyInput.value = '';
            specValueInput.value = '';
        }
        
        const firstImageItem = detailedImagesContainer.querySelector('.detailed-image-item');
        if (firstImageItem) {
            const imageSrcInput = firstImageItem.querySelector('.image-src');
            const imageCaptionInput = firstImageItem.querySelector('.image-caption');
            imageSrcInput.value = '';
            imageCaptionInput.value = '';
        }
        
        productFormContainer.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Hàm hiển thị form sửa sản phẩm
    function showEditProductForm(productId) {
        const product = productsData.find(p => p.id === productId);
        if (!product) return;
        
        formTitle.textContent = 'Sửa sản phẩm';
        
        // Điền thông tin sản phẩm vào form
        productIdInput.value = product.id;
        productNameInput.value = product.name || '';
        productCategoryInput.value = product.category || '';
        productImageInput.value = product.image || '';
        productDescriptionInput.value = product.description || '';
        productSizeInput.value = product.size || '';
        productWarrantyInput.value = product.warranty || '';
        productPriceInput.value = product.price || '';
        productMaterialInput.value = product.material || '';
        productPromotionInput.value = product.promotion || '';
        productTagInput.value = product.tag || '';
        productRatingInput.value = product.rating || '';
        productViewsInput.value = product.views || '';
        productSoldCountInput.value = product.soldCount || '';
        
        // Xử lý ngày kết thúc khuyến mãi
        if (product.promoEndDate) {
            const date = new Date(product.promoEndDate);
            productPromoEndDateInput.value = formatDateTimeForInput(date);
        } else {
            productPromoEndDateInput.value = '';
        }
        
        productSkuInput.value = product.sku || '';
        productFeaturedInput.value = product.featured ? 'true' : 'false';
        
        // Xử lý gallery
        if (product.gallery && Array.isArray(product.gallery)) {
            productGalleryInput.value = product.gallery.join('\n');
        } else {
            productGalleryInput.value = '';
        }
        
        // Xử lý flash sale
        if (product.flashsale) {
            flashsaleActiveInput.value = product.flashsale.active ? 'true' : 'false';
            flashsaleDiscountPercentInput.value = product.flashsale.discountPercent || '';
            flashsaleOldPriceInput.value = product.flashsale.oldPrice || '';
            flashsaleNewPriceInput.value = product.flashsale.newPrice || '';
            flashsaleTypeInput.value = product.flashsale.type || 'fixed';
            
            if (product.flashsale.endsAt) {
                const date = new Date(product.flashsale.endsAt);
                flashsaleEndsAtInput.value = formatDateTimeForInput(date);
            } else {
                flashsaleEndsAtInput.value = '';
            }
            
            flashsaleHidePriceInput.value = product.flashsale.hidePrice ? 'true' : 'false';
        } else {
            flashsaleActiveInput.value = 'false';
            flashsaleDiscountPercentInput.value = '';
            flashsaleOldPriceInput.value = '';
            flashsaleNewPriceInput.value = '';
            flashsaleTypeInput.value = 'fixed';
            flashsaleEndsAtInput.value = '';
            flashsaleHidePriceInput.value = 'false';
        }
        
        // Xử lý mô tả chi tiết
        if (product.detailedDescription) {
            detailedContentInput.value = product.detailedDescription.content || '';
            
            // Xóa các trường hình ảnh chi tiết hiện tại
            const detailedImageItems = detailedImagesContainer.querySelectorAll('.detailed-image-item');
            detailedImageItems.forEach((item, index) => {
                if (index > 0) {
                    detailedImagesContainer.removeChild(item);
                }
            });
            
            // Thêm các trường hình ảnh chi tiết mới
            if (product.detailedDescription.images && Array.isArray(product.detailedDescription.images)) {
                const firstImageItem = detailedImagesContainer.querySelector('.detailed-image-item');
                if (firstImageItem && product.detailedDescription.images.length > 0) {
                    const firstImage = product.detailedDescription.images[0];
                    const imageSrcInput = firstImageItem.querySelector('.image-src');
                    const imageCaptionInput = firstImageItem.querySelector('.image-caption');
                    imageSrcInput.value = firstImage.src || '';
                    imageCaptionInput.value = firstImage.caption || '';
                }
                
                // Thêm các hình ảnh còn lại
                for (let i = 1; i < product.detailedDescription.images.length; i++) {
                    const image = product.detailedDescription.images[i];
                    addDetailedImageField(image.src, image.caption);
                }
            } else {
                // Reset trường đầu tiên
                const firstImageItem = detailedImagesContainer.querySelector('.detailed-image-item');
                if (firstImageItem) {
                    const imageSrcInput = firstImageItem.querySelector('.image-src');
                    const imageCaptionInput = firstImageItem.querySelector('.image-caption');
                    imageSrcInput.value = '';
                    imageCaptionInput.value = '';
                }
            }
        } else {
            detailedContentInput.value = '';
            
            // Reset trường hình ảnh đầu tiên
            const firstImageItem = detailedImagesContainer.querySelector('.detailed-image-item');
            if (firstImageItem) {
                const imageSrcInput = firstImageItem.querySelector('.image-src');
                const imageCaptionInput = firstImageItem.querySelector('.image-caption');
                imageSrcInput.value = '';
                imageCaptionInput.value = '';
            }
        }
        
        // Xử lý thông số kỹ thuật
        // Xóa các trường thông số kỹ thuật hiện tại
        while (specificationsContainer.children.length > 1) {
            specificationsContainer.removeChild(specificationsContainer.lastChild);
        }
        
        if (product.specifications) {
            const specs = product.specifications;
            const firstSpecItem = specificationsContainer.querySelector('.specification-item');
            
            // Đặt giá trị cho trường đầu tiên
            let isFirstSpec = true;
            for (const key in specs) {
                if (isFirstSpec) {
                    const specKeyInput = firstSpecItem.querySelector('.spec-key');
                    const specValueInput = firstSpecItem.querySelector('.spec-value');
                    specKeyInput.value = key;
                    specValueInput.value = specs[key];
                    isFirstSpec = false;
                } else {
                    // Thêm các trường thông số kỹ thuật mới
                    addSpecificationField(key, specs[key]);
                }
            }
            
            // Nếu không có thông số nào, reset trường đầu tiên
            if (isFirstSpec) {
                const specKeyInput = firstSpecItem.querySelector('.spec-key');
                const specValueInput = firstSpecItem.querySelector('.spec-value');
                specKeyInput.value = '';
                specValueInput.value = '';
            }
        } else {
            // Reset trường đầu tiên
            const firstSpecItem = specificationsContainer.querySelector('.specification-item');
            if (firstSpecItem) {
                const specKeyInput = firstSpecItem.querySelector('.spec-key');
                const specValueInput = firstSpecItem.querySelector('.spec-value');
                specKeyInput.value = '';
                specValueInput.value = '';
            }
        }
        
        productFormContainer.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Hàm ẩn form sản phẩm
    function hideProductForm() {
        productFormContainer.classList.add('hidden');
    }
    
    // Hàm xử lý khi submit form
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Lấy dữ liệu từ form
        const productId = productIdInput.value ? parseInt(productIdInput.value) : null;
        const productData = {
            name: productNameInput.value,
            category: productCategoryInput.value,
            image: productImageInput.value,
            description: productDescriptionInput.value,
            size: productSizeInput.value,
            warranty: productWarrantyInput.value,
            price: productPriceInput.value,
            material: productMaterialInput.value,
            promotion: productPromotionInput.value || null,
            tag: productTagInput.value || null,
            rating: productRatingInput.value ? parseFloat(productRatingInput.value) : null,
            views: productViewsInput.value ? parseInt(productViewsInput.value) : null,
            soldCount: productSoldCountInput.value ? parseInt(productSoldCountInput.value) : null,
            promoEndDate: productPromoEndDateInput.value ? productPromoEndDateInput.value : null,
            sku: productSkuInput.value || null,
            featured: productFeaturedInput.value === 'true',
        };
        
        // Xử lý gallery
        if (productGalleryInput.value.trim()) {
            productData.gallery = productGalleryInput.value.split('\n')
                .map(url => url.trim())
                .filter(url => url);
        } else {
            productData.gallery = [productData.image];
        }
        
        // Xử lý flash sale
        if (flashsaleActiveInput.value === 'true') {
            productData.flashsale = {
                active: true,
                discountPercent: flashsaleDiscountPercentInput.value ? parseInt(flashsaleDiscountPercentInput.value) : null,
                oldPrice: flashsaleOldPriceInput.value ? parseInt(flashsaleOldPriceInput.value) : null,
                newPrice: flashsaleNewPriceInput.value ? parseInt(flashsaleNewPriceInput.value) : null,
                type: flashsaleTypeInput.value,
                endsAt: flashsaleEndsAtInput.value ? flashsaleEndsAtInput.value : null,
                hidePrice: flashsaleHidePriceInput.value === 'true',
            };
        }
        
        // Xử lý thông số kỹ thuật
        const specItems = specificationsContainer.querySelectorAll('.specification-item');
        const specifications = {};
        
        specItems.forEach(item => {
            const key = item.querySelector('.spec-key').value.trim();
            const value = item.querySelector('.spec-value').value.trim();
            
            if (key && value) {
                specifications[key] = value;
            }
        });
        
        if (Object.keys(specifications).length > 0) {
            productData.specifications = specifications;
        }
        
        // Xử lý mô tả chi tiết
        if (detailedContentInput.value.trim()) {
            const detailedImages = [];
            const imageItems = detailedImagesContainer.querySelectorAll('.detailed-image-item');
            
            imageItems.forEach(item => {
                const src = item.querySelector('.image-src').value.trim();
                const caption = item.querySelector('.image-caption').value.trim();
                
                if (src) {
                    detailedImages.push({
                        src,
                        caption
                    });
                }
            });
            
            productData.detailedDescription = {
                content: detailedContentInput.value,
                images: detailedImages
            };
        }
        
        // Thêm hoặc cập nhật sản phẩm
        if (productId) {
            // Cập nhật sản phẩm
            const index = productsData.findIndex(p => p.id === productId);
            if (index !== -1) {
                productData.id = productId;
                productsData[index] = productData;
            }
        } else {
            // Thêm sản phẩm mới
            const newId = productsData.length > 0 ? Math.max(...productsData.map(p => p.id)) + 1 : 1;
            productData.id = newId;
            productsData.push(productData);
        }
        
        // Cập nhật giao diện
        renderProductList();
        hideProductForm();
        
        // Hiển thị thông báo
        alert(productId ? 'Cập nhật sản phẩm thành công!' : 'Thêm sản phẩm mới thành công!');
    }
    
    // Hàm xóa sản phẩm
    function deleteProduct(productId) {
        if (!confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) return;
        
        const index = productsData.findIndex(p => p.id === productId);
        if (index !== -1) {
            productsData.splice(index, 1);
            renderProductList();
            alert('Xóa sản phẩm thành công!');
        }
    }
    
    // Hàm hiển thị modal xuất file
    function showExportModal() {
        const exportData = generateExportCode();
        exportCode.textContent = exportData;
        exportModal.classList.remove('hidden');
    }
    
    // Hàm ẩn modal xuất file
    function hideExportModal() {
        exportModal.classList.add('hidden');
    }
    
    // Hàm tạo mã xuất
    function generateExportCode() {
        return `const products = ${JSON.stringify(productsData, null, 2)};`;
    }
    
    // Hàm copy mã xuất vào clipboard
    function copyExportCode() {
        const exportData = exportCode.textContent;
        navigator.clipboard.writeText(exportData)
            .then(() => {
                alert('Đã copy mã vào clipboard!');
            })
            .catch(err => {
                console.error('Không thể copy: ', err);
                alert('Không thể copy mã. Vui lòng thử lại hoặc copy thủ công.');
            });
    }
    
    // Hàm tải xuống file
    function downloadExportFile() {
        const exportData = exportCode.textContent;
        const blob = new Blob([exportData], { type: 'application/javascript' });
        const url = URL.createObjectURL(blob);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = 'products.js';
        document.body.appendChild(a);
        a.click();
        
        // Dọn dẹp
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }, 0);
    }
    
    // Hàm xử lý tìm kiếm
    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        
        if (!searchTerm.trim()) {
            renderProductList();
            return;
        }
        
        const filteredProducts = productsData.filter(product => {
            return (
                product.name.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm) ||
                (product.description && product.description.toLowerCase().includes(searchTerm))
            );
        });
        
        renderProductList(filteredProducts);
    }
    
    // Hàm thêm trường thông số kỹ thuật
    function addSpecificationField(key = '', value = '') {
        const specItem = document.createElement('div');
        specItem.className = 'specification-item';
        
        specItem.innerHTML = `
            <input type="text" class="spec-key" placeholder="Tên thông số" value="${key}">
            <input type="text" class="spec-value" placeholder="Giá trị" value="${value}">
            <button type="button" class="remove-spec-btn">Xóa</button>
        `;
        
        specificationsContainer.appendChild(specItem);
        
        // Thêm sự kiện cho nút xóa
        const removeBtn = specItem.querySelector('.remove-spec-btn');
        removeBtn.addEventListener('click', function() {
            specificationsContainer.removeChild(specItem);
        });
    }
    
    // Hàm thêm trường hình ảnh chi tiết
    function addDetailedImageField(src = '', caption = '') {
        const imageItem = document.createElement('div');
        imageItem.className = 'detailed-image-item';
        
        imageItem.innerHTML = `
            <input type="text" class="image-src" placeholder="Đường dẫn hình ảnh" value="${src}">
            <input type="text" class="image-caption" placeholder="Chú thích" value="${caption}">
            <button type="button" class="remove-image-btn">Xóa</button>
        `;
        
        detailedImagesContainer.appendChild(imageItem);
        
        // Thêm sự kiện cho nút xóa
        const removeBtn = imageItem.querySelector('.remove-image-btn');
        removeBtn.addEventListener('click', function() {
            detailedImagesContainer.removeChild(imageItem);
        });
    }
    
    // Hàm định dạng ngày giờ cho input datetime-local
    function formatDateTimeForInput(date) {
        if (!date || !(date instanceof Date) || isNaN(date)) return '';
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }
});
