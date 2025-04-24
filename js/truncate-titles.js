// JavaScript để kiểm tra và thêm class 'truncated' cho các tiêu đề bị cắt
document.addEventListener('DOMContentLoaded', function () {
  // Hàm kiểm tra xem phần tử có bị cắt không
  function isEllipsisActive(element) {
    return (
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth
    );
  }

  // Kiểm tra và thêm class cho product-card h3
  const productTitles = document.querySelectorAll('.product-card h3');
  productTitles.forEach((title) => {
    if (isEllipsisActive(title)) {
      title.classList.add('truncated');
    }
  });

  // Kiểm tra và thêm class cho promo-card-title
  const promoTitles = document.querySelectorAll('.promo-card-title');
  promoTitles.forEach((title) => {
    if (isEllipsisActive(title)) {
      title.classList.add('truncated');
    }
  });

  // Thêm sự kiện resize để kiểm tra lại khi kích thước màn hình thay đổi
  window.addEventListener('resize', function () {
    // Kiểm tra lại product-card h3
    productTitles.forEach((title) => {
      title.classList.remove('truncated');
      if (isEllipsisActive(title)) {
        title.classList.add('truncated');
      }
    });

    // Kiểm tra lại promo-card-title
    promoTitles.forEach((title) => {
      title.classList.remove('truncated');
      if (isEllipsisActive(title)) {
        title.classList.add('truncated');
      }
    });
  });
});
