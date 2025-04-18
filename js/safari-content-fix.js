/**
 * Safari Content Visibility Fix
 *
 * Script này sửa lỗi hiển thị nội dung trên Safari, nơi nội dung chỉ xuất hiện
 * trong thời gian ngắn rồi biến mất hoặc chỉ hiển thị khi cuộn trang.
 */
(function () {
  // Phát hiện Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  if (isSafari) {
    console.log(
      'Safari được phát hiện, đang áp dụng sửa lỗi hiển thị nội dung...'
    );

    // Vô hiệu hóa tất cả các animation có thể gây ra vấn đề
    const disableAnimations = function () {
      // Tạo style để vô hiệu hóa tất cả các animation
      const styleOverride = document.createElement('style');
      styleOverride.id = 'safari-animation-fix';
      styleOverride.textContent = `
                * {
                    animation: none !important;
                    transition: none !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                }

                .product-card, .fade-in, .fade-out {
                    opacity: 1 !important;
                    transform: none !important;
                    animation: none !important;
                    transition: none !important;
                }

                .product-container, .product-gallery, .product-info,
                .related-products, .customers-also-liked {
                    opacity: 1 !important;
                    visibility: visible !important;
                    display: block !important;
                }

                .main-image-container img {
                    opacity: 1 !important;
                    transform: none !important;
                    transition: none !important;
                }

                /* Đảm bảo tất cả các phần tử đều hiển thị */
                html, body, .product-details-section, .container {
                    height: auto !important;
                    min-height: 100% !important;
                    visibility: visible !important;
                    opacity: 1 !important;
                }
            `;
      document.head.appendChild(styleOverride);
    };

    // Ghi đè các hàm JavaScript có thể gây ra vấn đề
    const overrideProblemFunctions = function () {
      // Ghi đè hàm changeMainImage để không có animation
      if (typeof window.changeMainImage === 'function') {
        const originalChangeMainImage = window.changeMainImage;
        window.changeMainImage = function (thumbnail, imageSrc) {
          // Thay đổi hình ảnh trực tiếp không có animation
          const mainImage = document.getElementById('main-image');
          if (mainImage) {
            mainImage.src = imageSrc;
          }

          // Cập nhật thumbnail active
          const thumbnails = document.querySelectorAll('.thumbnails img');
          thumbnails.forEach((thumb) => {
            thumb.classList.remove('active');
          });
          thumbnail.classList.add('active');
        };
      }

      // Ghi đè các hàm setTimeout liên quan đến animation
      const originalSetTimeout = window.setTimeout;
      window.setTimeout = function (callback, delay, ...args) {
        // Nếu delay nhỏ và có thể là animation, thực thi ngay lập tức
        if (delay < 600 && typeof callback === 'function') {
          try {
            callback(...args);
            return 0; // Trả về ID giả
          } catch (e) {
            console.error('Error executing immediate callback:', e);
          }
        }
        return originalSetTimeout(callback, delay, ...args);
      };
    };

    // Sửa lỗi hiển thị nội dung
    const fixContentVisibility = function () {
      // Đảm bảo tất cả các phần tử đều hiển thị
      const elementsToFix = [
        document.querySelector('.product-container'),
        document.querySelector('.product-gallery'),
        document.querySelector('.product-info'),
        document.querySelector('.related-products'),
        document.querySelector('.customers-also-liked'),
        document.querySelector('.product-details-section'),
        document.querySelector('.container'),
      ];

      elementsToFix.forEach((element) => {
        if (element) {
          element.style.display = 'block';
          element.style.visibility = 'visible';
          element.style.opacity = '1';
          element.style.transform = 'none';
          element.style.height = 'auto';
          element.style.minHeight = element.scrollHeight + 'px';

          // Buộc trình duyệt phải vẽ lại
          void element.offsetHeight;
        }
      });

      // Sửa lỗi cho các product card
      const productCards = document.querySelectorAll('.product-card');
      productCards.forEach((card) => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.style.visibility = 'visible';
        card.classList.add('fade-in'); // Thêm class này để đảm bảo nó hiển thị
      });

      // Sửa lỗi cho hình ảnh
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        img.style.opacity = '1';
        img.style.visibility = 'visible';
      });

      // Buộc body phải vẽ lại
      document.body.style.display = 'block';
      document.body.style.visibility = 'visible';
      document.body.style.opacity = '1';
      document.body.style.height = 'auto';
      document.body.style.minHeight = '100vh';
      void document.body.offsetHeight;
    };

    // Thực thi các sửa lỗi
    const applyAllFixes = function () {
      disableAnimations();
      overrideProblemFunctions();
      fixContentVisibility();

      // Đảm bảo rằng các sửa lỗi được áp dụng sau khi tất cả nội dung đã tải
      document.body.style.display = 'block';
      document.documentElement.style.display = 'block';
    };

    // Áp dụng sửa lỗi ngay lập tức
    applyAllFixes();

    // Áp dụng lại sau khi DOM đã sẵn sàng
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', applyAllFixes);
    }

    // Áp dụng lại sau khi trang đã tải hoàn toàn
    window.addEventListener('load', applyAllFixes);

    // Áp dụng lại sau một khoảng thời gian để đảm bảo
    setTimeout(applyAllFixes, 0);
    setTimeout(applyAllFixes, 100);
    setTimeout(applyAllFixes, 500);
    setTimeout(applyAllFixes, 1000);

    // Áp dụng lại khi cuộn trang (phòng trường hợp nội dung bị ẩn sau khi cuộn)
    window.addEventListener(
      'scroll',
      function () {
        fixContentVisibility();
      },
      { passive: true }
    );
  }
})();
