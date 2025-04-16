const products = [
  {
    id: 1,
    name: 'Tủ Quần Áo 3 Cánh',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo 3 cánh gỗ MDF, kích thước 120x180x50cm, thiết kế hiện đại.',
    promotion: 'sale 20%',
    gallery: [
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
    promotion: 'sale 10%',
    gallery: ['images/products/product2.png', 'images/products/product2.png'],
  },
  {
    id: 3,
    name: 'Bàn Học Gỗ Tự Nhiên',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ tự nhiên, kích thước 100x50x75cm, thiết kế tối giản.',
    promotion: 'Ưu đãi đặc biệt',
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
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },

  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description: 'Giường ngủ gỗ tự nhiên, kích thước 180x200cm, sang trọng.',
    promotion: null,
    gallery: ['images/products/product8.png'],
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
        <div class="image-container">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${
            product.promotion
              ? `<span class="promo-badge">${product.promotion}</span>`
              : ''
          }
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
