/**
 * Cloudinary Image Fix
 * Script để khắc phục vấn đề hiển thị hình ảnh từ Cloudinary
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Cloudinary Fix: Đang kiểm tra hình ảnh...');
    
    // Tìm tất cả hình ảnh có URL Cloudinary
    const cloudinaryImages = Array.from(document.querySelectorAll('img')).filter(img => {
        return img.src && img.src.includes('cloudinary.com');
    });
    
    console.log(`Cloudinary Fix: Tìm thấy ${cloudinaryImages.length} hình ảnh Cloudinary`);
    
    // Thêm thuộc tính crossorigin cho tất cả hình ảnh Cloudinary
    cloudinaryImages.forEach((img, index) => {
        // Lưu URL gốc
        const originalSrc = img.src;
        
        // Thêm thuộc tính crossorigin
        img.setAttribute('crossorigin', 'anonymous');
        
        // Thêm xử lý lỗi nếu chưa có
        if (!img.hasAttribute('onerror')) {
            img.onerror = function() {
                console.warn(`Cloudinary Fix: Không thể tải hình ảnh ${originalSrc}`);
                
                // Thử tải lại với tham số mới để tránh cache
                if (!this.src.includes('?bypass=cache')) {
                    console.log(`Cloudinary Fix: Thử tải lại hình ảnh ${index + 1} với tham số bypass cache`);
                    this.src = originalSrc + '?bypass=cache';
                } else if (!this.src.includes('?fl_lossy,q_auto')) {
                    // Thử với tham số tối ưu hóa của Cloudinary
                    console.log(`Cloudinary Fix: Thử tải lại hình ảnh ${index + 1} với tham số tối ưu hóa`);
                    this.src = originalSrc.replace('upload/', 'upload/fl_lossy,q_auto/');
                } else {
                    // Nếu vẫn không được, sử dụng hình ảnh thay thế
                    console.log(`Cloudinary Fix: Sử dụng hình ảnh thay thế cho hình ảnh ${index + 1}`);
                    this.src = 'images/products/placeholder.jpg';
                }
            };
        }
        
        // Thêm xử lý khi tải thành công
        img.onload = function() {
            console.log(`Cloudinary Fix: Hình ảnh ${index + 1} đã tải thành công`);
        };
        
        // Thử tải lại hình ảnh để kích hoạt các xử lý mới
        img.src = originalSrc;
    });
    
    // Kiểm tra và hiển thị thông báo nếu có vấn đề
    if (cloudinaryImages.length > 0) {
        setTimeout(function() {
            const failedImages = cloudinaryImages.filter(img => !img.complete || img.naturalHeight === 0);
            
            if (failedImages.length > 0) {
                console.warn(`Cloudinary Fix: ${failedImages.length}/${cloudinaryImages.length} hình ảnh không tải được`);
                
                // Hiển thị thông báo cho người dùng (tùy chọn)
                // showCloudinaryWarning();
            } else {
                console.log('Cloudinary Fix: Tất cả hình ảnh đã tải thành công');
            }
        }, 5000); // Đợi 5 giây để hình ảnh có thời gian tải
    }
});

/**
 * Hiển thị thông báo về vấn đề Cloudinary (tùy chọn)
 */
function showCloudinaryWarning() {
    // Chỉ hiển thị thông báo cho quản trị viên hoặc trong chế độ debug
    if (window.isAdmin || window.debugMode) {
        const warningDiv = document.createElement('div');
        warningDiv.style.position = 'fixed';
        warningDiv.style.bottom = '10px';
        warningDiv.style.right = '10px';
        warningDiv.style.backgroundColor = '#fff3cd';
        warningDiv.style.color = '#856404';
        warningDiv.style.padding = '10px 15px';
        warningDiv.style.borderRadius = '4px';
        warningDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        warningDiv.style.zIndex = '9999';
        warningDiv.style.maxWidth = '300px';
        
        warningDiv.innerHTML = `
            <div style="font-weight: bold; margin-bottom: 5px;">Cảnh báo Cloudinary</div>
            <div>Một số hình ảnh từ Cloudinary không tải được. Vui lòng kiểm tra cấu hình CORS trong tài khoản Cloudinary của bạn.</div>
            <div style="text-align: right; margin-top: 10px;">
                <button onclick="this.parentNode.parentNode.remove()" style="padding: 3px 8px; background: #f8f9fa; border: 1px solid #ddd; border-radius: 3px; cursor: pointer;">Đóng</button>
            </div>
        `;
        
        document.body.appendChild(warningDiv);
    }
}
