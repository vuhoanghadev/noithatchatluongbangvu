const products = [
  {
    id: 1,
    name: 'Tủ Quần Áo 3 Cánh',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo 3 cánh gỗ MDF, kích thước 120x180x50cm, thiết kế hiện đại. Là loại tủ nhựa có chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc cong vênh và có kích thước vừa phải phù hợp với phòng ngủ có diện tích nhỏ. Là loại tủ nhựa có chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc cong vênh và có kích thước vừa phải phù hợp với phòng ngủ có diện tích nhỏ.',
    promotion: 'sale 20%',
    gallery: [
      'images/products/product1.png',
      'images/products/product2.png',
      'images/products/product3.png',
      'images/products/product4.png',
      'images/products/product1.png',
      'images/products/product2.png',
      'images/products/product3.png',
      'images/products/product4.png',
      'images/products/product1.png',
      'images/products/product2.png',
      'images/products/product3.png',
      'images/products/product4.png',
    ],
  },
  {
    id: 2,
    name: 'Tủ Bếp Gỗ Công Nghiệp',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description: 'Tủ bếp gỗ công nghiệp, kích thước 200x60x80cm, bền đẹp.',
    promotion: 'giảm 10%',
    gallery: ['images/products/product2.png', 'images/products/product2.png'],
  },
  {
    id: 3,
    name: 'Bàn Học Gỗ Tự Nhiên',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ tự nhiên, kích thước 100x50x75cm, thiết kế tối giản.',
    promotion: 'ƯU ĐÃI ĐẶC BIỆT THÁNG 4',
    gallery: ['images/products/product3.png'],
  },
  {
    id: 4,
    name: 'Bàn Làm Việc Gỗ MDF',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description: 'Bàn làm việc gỗ MDF, kích thước 120x60x75cm, hiện đại.',
    promotion: null,
    gallery: ['images/products/product4.png'],
  },
  {
    id: 5,
    name: 'Bàn Trang Điểm Gương Tròn',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description: 'Bàn trang điểm với gương tròn, kích thước 80x40x130cm.',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 6,
    name: 'Tủ Giày 2 Cánh',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description: 'Tủ giày 2 cánh gỗ công nghiệp, kích thước 80x30x100cm.',
    promotion: null,
    gallery: ['images/products/product6.png'],
  },
  {
    id: 7,
    name: 'Tủ Sách Đa Năng',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description: 'Tủ sách đa năng, kích thước 100x30x180cm, thiết kế tiện lợi.',
    promotion: 'Ưu đãi tháng 4',
    gallery: ['images/products/product7.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Tủ Quần Áo',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng. thiết kế hiện đại. Là loại tủ nhựa có chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc cong vênh và có kích thước vừa phải phù hợp với phòng ngủ có diện tích nhỏ. Là loại tủ nhựa có chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc cong vênh và có kích thước vừa phải phù hợp với phòng ngủ có diện tích nhỏ.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 9,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Tủ Quần Áo',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 10,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 11,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 12,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 13,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 14,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 15,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 16,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 17,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 18,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 19,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 20,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 21,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 22,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 23,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 24,
    name: 'Tủ Quần Áo 4 Cánh',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo 4 cánh gỗ MDF, kích thước 160x200x50cm, thiết kế hiện đại, phù hợp cho phòng ngủ lớn.',
    promotion: 'sale 15%',
    gallery: [
      'images/products/product1.png',
      'images/products/product2.png',
      'images/products/product3.png',
    ],
  },
  {
    id: 25,
    name: 'Tủ Bếp Tích Hợp',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp gỗ công nghiệp tích hợp kệ, kích thước 220x60x85cm, tiện lợi và bền bỉ.',
    promotion: null,
    gallery: ['images/products/product2.png', 'images/products/product4.png'],
  },
  {
    id: 26,
    name: 'Bàn Học Gỗ MDF',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ MDF, kích thước 90x45x70cm, thiết kế nhỏ gọn cho học sinh.',
    promotion: 'Ưu đãi tháng 5',
    gallery: ['images/products/product3.png'],
  },
  {
    id: 27,
    name: 'Bàn Làm Việc Gỗ Công Nghiệp',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ công nghiệp, kích thước 140x60x75cm, phù hợp văn phòng tại nhà.',
    promotion: 'sale 25%',
    gallery: [
      'images/products/product4.png',
      'images/products/product5.png',
      'images/products/product6.png',
    ],
  },
  {
    id: 28,
    name: 'Bàn Trang Điểm Gương Vuông',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gương vuông, kích thước 85x40x135cm, phong cách tối giản.',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 29,
    name: 'Tủ Giày 3 Cánh',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày 3 cánh gỗ công nghiệp, kích thước 100x30x110cm, chứa được nhiều giày.',
    promotion: 'sale 10%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },
  {
    id: 30,
    name: 'Tủ Sách Gỗ Tự Nhiên',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách gỗ tự nhiên, kích thước 120x30x200cm, thiết kế sang trọng.',
    promotion: null,
    gallery: ['images/products/product7.png', 'images/products/product8.png'],
  },
  {
    id: 31,
    name: 'Giường Ngủ Gỗ MDF',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ MDF, kích thước 160x200cm, thiết kế hiện đại và tiện dụng.',
    promotion: 'sale 20%',
    gallery: [
      'images/products/product8.png',
      'images/products/product1.png',
      'images/products/product2.png',
    ],
  },
  {
    id: 32,
    name: 'Tủ Quần Áo Kính Cường Lực',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo cửa kính cường lực, kích thước 140x190x50cm, phong cách hiện đại.',
    promotion: null,
    gallery: ['images/products/product1.png'],
  },
  {
    id: 33,
    name: 'Tủ Bếp Gỗ Tự Nhiên',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp gỗ tự nhiên, kích thước 210x60x80cm, bền đẹp và sang trọng.',
    promotion: 'Ưu đãi tháng 6',
    gallery: ['images/products/product2.png', 'images/products/product3.png'],
  },
  {
    id: 34,
    name: 'Bàn Học Gỗ Công Nghiệp',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ công nghiệp, kích thước 95x50x70cm, thiết kế tối giản.',
    promotion: 'sale 15%',
    gallery: ['images/products/product3.png', 'images/products/product4.png'],
  },
  {
    id: 35,
    name: 'Bàn Làm Việc Gỗ Tự Nhiên',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ tự nhiên, kích thước 130x60x75cm, chắc chắn và tinh tế.',
    promotion: null,
    gallery: ['images/products/product4.png'],
  },
  {
    id: 36,
    name: 'Bàn Trang Điểm Gương Gấp',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm với gương gấp, kích thước 80x40x130cm, tiện lợi và nhỏ gọn.',
    promotion: 'sale 10%',
    gallery: ['images/products/product5.png', 'images/products/product6.png'],
  },
  {
    id: 37,
    name: 'Tủ Giày Gỗ MDF',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description: 'Tủ giày gỗ MDF, kích thước 90x30x100cm, thiết kế hiện đại.',
    promotion: null,
    gallery: ['images/products/product6.png'],
  },
  {
    id: 38,
    name: 'Tủ Sách Kết Hợp Kệ',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách kết hợp kệ trang trí, kích thước 110x30x180cm, đa năng.',
    promotion: null,
    gallery: ['images/products/product7.png', 'images/products/product8.png'],
  },
  {
    id: 39,
    name: 'Giường Ngủ Gỗ Công Nghiệp',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ công nghiệp, kích thước 180x200cm, thiết kế tối giản.',
    promotion: null,
    gallery: ['images/products/product8.png', 'images/products/product1.png'],
  },
  {
    id: 40,
    name: 'Tủ Quần Áo 2 Cánh',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo 2 cánh gỗ MDF, kích thước 100x180x50cm, nhỏ gọn và tiện dụng.',
    promotion: 'sale 20%',
    gallery: ['images/products/product1.png', 'images/products/product2.png'],
  },
  {
    id: 41,
    name: 'Tủ Bếp Gỗ MDF',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description: 'Tủ bếp gỗ MDF, kích thước 200x60x80cm, bền đẹp và hiện đại.',
    promotion: null,
    gallery: ['images/products/product2.png'],
  },
  {
    id: 42,
    name: 'Bàn Học Gỗ Tự Nhiên Lớn',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ tự nhiên, kích thước 110x55x75cm, rộng rãi và chắc chắn.',
    promotion: 'Ưu đãi tháng 7',
    gallery: ['images/products/product3.png', 'images/products/product4.png'],
  },
  {
    id: 43,
    name: 'Bàn Làm Việc Gỗ MDF Lớn',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ MDF, kích thước 150x60x75cm, phù hợp văn phòng chuyên nghiệp.',
    promotion: 'sale 15%',
    gallery: ['images/products/product4.png', 'images/products/product5.png'],
  },
  {
    id: 44,
    name: 'Bàn Trang Điểm Gương Trượt',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gương trượt, kích thước 90x40x135cm, hiện đại và tiện ích.',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 45,
    name: 'Tủ Giày 4 Cánh',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày 4 cánh gỗ công nghiệp, kích thước 120x30x110cm, chứa nhiều giày.',
    promotion: 'sale 10%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },
  {
    id: 46,
    name: 'Tủ Sách Gỗ MDF',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách gỗ MDF, kích thước 100x30x180cm, thiết kế đơn giản và tiện lợi.',
    promotion: null,
    gallery: ['images/products/product7.png'],
  },
  {
    id: 47,
    name: 'Giường Ngủ Gỗ Tự Nhiên Lớn',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên, kích thước 200x220cm, sang trọng và rộng rãi.',
    promotion: 'sale 20%',
    gallery: ['images/products/product8.png', 'images/products/product1.png'],
  },
  {
    id: 48,
    name: 'Tủ Quần Áo Gương Trượt',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo gương trượt, kích thước 150x200x50cm, tiết kiệm không gian.',
    promotion: null,
    gallery: ['images/products/product1.png', 'images/products/product2.png'],
  },
  {
    id: 49,
    name: 'Tủ Bếp Gỗ Công Nghiệp Lớn',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp gỗ công nghiệp, kích thước 230x60x85cm, hiện đại và tiện nghi.',
    promotion: 'sale 15%',
    gallery: ['images/products/product2.png', 'images/products/product3.png'],
  },
  {
    id: 50,
    name: 'Bàn Học Gỗ MDF Nhỏ',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description: 'Bàn học gỗ MDF, kích thước 80x40x70cm, nhỏ gọn và tiện dụng.',
    promotion: null,
    gallery: ['images/products/product3.png'],
  },
  {
    id: 51,
    name: 'Bàn Làm Việc Gỗ Công Nghiệp Nhỏ',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ công nghiệp, kích thước 100x50x75cm, phù hợp không gian nhỏ.',
    promotion: 'sale 10%',
    gallery: ['images/products/product4.png', 'images/products/product5.png'],
  },
  {
    id: 52,
    name: 'Bàn Trang Điểm Gỗ Tự Nhiên',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gỗ tự nhiên, kích thước 85x40x130cm, sang trọng và tinh tế.',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 53,
    name: 'Tủ Giày Gỗ Tự Nhiên',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày gỗ tự nhiên, kích thước 100x30x100cm, bền đẹp và chắc chắn.',
    promotion: 'sale 20%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },

  // ... tiếp tục với các sản phẩm khác
];

// Trang chủ: Render sản phẩm nổi bật và khuyến mãi
if (document.getElementById('featured-products')) {
  const featuredProducts = document.getElementById('featured-products');
  const promotionList = document.getElementById('promotion-list');
  const featured = products.slice(0, 6); // 6 sản phẩm nổi bật
  const promotions = products.filter((p) => p.promotion);

  featured.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        ${
          product.promotion
            ? `<span class="promo-badge">${product.promotion}</span>`
            : ''
        }
        <div class="image-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
          <h3>${product.name}</h3>
          <div class="category"><i class="fas fa-tag"></i> ${
            product.category
          }</div>
          <p>${product.description}</p>
          <a href="product-details.html?id=${
            product.id
          }" class="btn-details">Xem chi tiết</a>
        </div>
      `;
    featuredProducts.appendChild(card);
  });

  promotions.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'promo-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>${product.promotion}</p>
        <a href="https://zalo.me/123456789" class="btn-contact">Tìm hiểu thêm</a>
      `;
    promotionList.appendChild(card);
  });
}

// Hàm chuyển đổi chuỗi có dấu thành không dấu
function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D'); // Đổi đ/Đ thành d/D
}

// Trang sản phẩm: Lọc, tìm kiếm, phân trang
if (document.getElementById('product-grid')) {
  const productGrid = document.getElementById('product-grid');
  const pagination = document.getElementById('pagination');
  const categoryFilter = document.getElementById('category');
  const searchInput = document.getElementById('search');
  const itemsPerPage = 12;
  let currentPage = 1;

  function renderProducts(products, page = 1) {
    productGrid.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach((product) => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <h3>${product.name}</h3>
          ${
            product.promotion
              ? `<span class="promo-badge">${product.promotion}</span>`
              : ''
          }
          <a href="product-details.html?id=${
            product.id
          }" class="btn-details">Xem chi tiết</a>
        `;
      productGrid.appendChild(card);
    });

    renderPagination(products.length);
  }

  function renderPagination(totalItems) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Không cần phân trang nếu chỉ có 1 trang
    if (totalPages <= 1) {
      updateProductCount(totalItems);
      return;
    }

    // Số trang hiển thị mỗi bên của trang hiện tại
    const visiblePages = 2;

    // Thêm nút Previous
    if (currentPage > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
      prevBtn.className = 'nav-btn';
      prevBtn.onclick = () => {
        currentPage--;
        renderProducts(getFilteredProducts(), currentPage);
      };
      pagination.appendChild(prevBtn);
    }

    // Xác định trang bắt đầu và kết thúc để hiển thị
    let startPage = Math.max(1, currentPage - visiblePages);
    let endPage = Math.min(totalPages, currentPage + visiblePages);

    // Điều chỉnh để luôn hiển thị đủ số trang cần thiết
    if (endPage - startPage < visiblePages * 2) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages, startPage + visiblePages * 2);
      } else {
        startPage = Math.max(1, endPage - visiblePages * 2);
      }
    }

    // Hiển thị nút trang đầu và dấu ...
    if (startPage > 1) {
      const firstBtn = document.createElement('button');
      firstBtn.textContent = '1';
      firstBtn.onclick = () => {
        currentPage = 1;
        renderProducts(getFilteredProducts(), 1);
      };
      pagination.appendChild(firstBtn);

      if (startPage > 2) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'ellipsis';
        pagination.appendChild(ellipsis);
      }
    }

    // Hiển thị các nút trang
    for (let i = startPage; i <= endPage; i++) {
      const btn = document.createElement('button');
      btn.textContent = i;
      btn.onclick = () => {
        currentPage = i;
        renderProducts(getFilteredProducts(), i);
      };
      if (i === currentPage) btn.className = 'active';
      pagination.appendChild(btn);
    }

    // Hiển thị dấu ... và nút trang cuối
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.className = 'ellipsis';
        pagination.appendChild(ellipsis);
      }

      const lastBtn = document.createElement('button');
      lastBtn.textContent = totalPages;
      lastBtn.onclick = () => {
        currentPage = totalPages;
        renderProducts(getFilteredProducts(), totalPages);
      };
      pagination.appendChild(lastBtn);
    }

    // Thêm nút Next
    if (currentPage < totalPages) {
      const nextBtn = document.createElement('button');
      nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
      nextBtn.className = 'nav-btn';
      nextBtn.onclick = () => {
        currentPage++;
        renderProducts(getFilteredProducts(), currentPage);
      };
      pagination.appendChild(nextBtn);
    }

    // Update product count
    updateProductCount(totalItems);
  }

  function updateProductCount(totalItems) {
    const productCount = document.getElementById('product-count');
    if (productCount) {
      const start = (currentPage - 1) * itemsPerPage + 1;
      const end = Math.min(currentPage * itemsPerPage, totalItems);

      if (totalItems === 0) {
        productCount.innerHTML = 'Không tìm thấy sản phẩm nào';
      } else {
        productCount.innerHTML = `Hiển thị <span>${start} - ${end}</span> trên tổng số <span>${totalItems}</span> sản phẩm`;
      }
    }
  }

  function getFilteredProducts() {
    let filtered = products;
    const category = categoryFilter.value;
    const search = searchInput.value.toLowerCase();
    const searchNoAccent = removeAccents(search);

    if (category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }
    if (search) {
      filtered = filtered.filter((p) => {
        // Tìm kiếm cả có dấu và không dấu
        const nameNoAccent = removeAccents(p.name.toLowerCase());
        const descNoAccent = p.description
          ? removeAccents(p.description.toLowerCase())
          : '';

        // Tìm trong tên sản phẩm
        const nameMatch =
          p.name.toLowerCase().includes(search) ||
          nameNoAccent.includes(searchNoAccent);

        // Tìm trong mô tả sản phẩm (nếu có)
        const descMatch = p.description
          ? p.description.toLowerCase().includes(search) ||
            descNoAccent.includes(searchNoAccent)
          : false;

        return nameMatch || descMatch;
      });
    }
    return filtered;
  }

  // Xóa các event handlers cũ vì đã được xử lý trong effects.js
  // categoryFilter.onchange = () => renderProducts(getFilteredProducts(), 1);
  // searchInput.oninput = () => renderProducts(getFilteredProducts(), 1);

  // Thêm event listeners mới
  categoryFilter.addEventListener('change', () => {
    currentPage = 1; // Reset về trang 1 khi lọc
    setTimeout(() => {
      renderProducts(getFilteredProducts(), 1);
    }, 800); // Đợi hiệu ứng loading hiển thị
  });

  // Xử lý nút tìm kiếm
  const searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      if (searchInput.value.trim() !== '') {
        currentPage = 1; // Reset về trang 1 khi tìm kiếm
        setTimeout(() => {
          renderProducts(getFilteredProducts(), 1);
        }, 800); // Đợi hiệu ứng loading hiển thị
      }
    });
  }

  // Xử lý sự kiện Enter trong ô tìm kiếm
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && searchInput.value.trim() !== '') {
      e.preventDefault();
      currentPage = 1; // Reset về trang 1 khi tìm kiếm
      setTimeout(() => {
        renderProducts(getFilteredProducts(), 1);
      }, 800); // Đợi hiệu ứng loading hiển thị
    }
  });

  renderProducts(products, 1);
}
