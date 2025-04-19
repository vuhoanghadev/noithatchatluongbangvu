const products = [
  {
    id: 1,
    name: 'Tủ QA205 - 4 Cánh Mở, 2 Hàng Ngăn Kéo, Ô Hở Trái Vân Óc Chó',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo QA205 được chế tác từ gỗ MDF phủ melamine cao cấp, mang phong cách hiện đại và tinh tế. Với thiết kế 4 cánh mở rộng rãi, 2 hàng ngăn kéo tiện lợi và ô hở bên trái, sản phẩm này không chỉ đáp ứng nhu cầu lưu trữ quần áo mà còn là điểm nhấn sang trọng cho phòng ngủ. Chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc, chống cong vênh, phù hợp với các không gian sống có diện tích nhỏ hoặc vừa. Tủ có màu vân óc chó ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất khác nhau.',
    size: '120x180x50cm',
    warranty: '10 năm',
    price: 'Liên Hệ',
    material: 'Nhựa Đài Loan Cao Cấp',
    promotion: 'SALE 30%',
    flashsale: {
      active: true,
      discountPercent: 30,
      oldPrice: 5000000,
      newPrice: 3500000,
      type: 'daily', // 'fixed' hoặc 'daily' => fixed là cố định , daily là hàng ngày
      endsAt: '2025-04-19T23:59:59',
      hidePrice: false, // true: không hiển thị giá, false: hiển thị giá
    },
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
    name: 'Tủ Bếp QA120 - 3 Cánh Lùa, Vân Gỗ Sồi Tự Nhiên',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp QA120 là sự lựa chọn hoàn hảo cho không gian bếp hiện đại với thiết kế 3 cánh lùa tiết kiệm không gian. Sản phẩm được làm từ gỗ công nghiệp MDF phủ melamine vân gỗ sồi tự nhiên, mang lại vẻ đẹp sang trọng và ấm cúng. Chất liệu chống ẩm, chống mối mọt, đảm bảo độ bền lâu dài ngay cả trong môi trường bếp ẩm ướt. Với kích thước rộng rãi, tủ cung cấp không gian lưu trữ lớn cho các dụng cụ nhà bếp, thực phẩm khô và đồ dùng gia đình. Thiết kế tinh tế, dễ dàng vệ sinh, phù hợp với các căn bếp có diện tích vừa và nhỏ.',
    size: '200x60x80cm',
    warranty: '10 năm',
    price: 'Liên hệ',
    material: 'Gỗ MDF phủ melamine vân gỗ sồi',
    promotion: 'giảm 10%',
    gallery: ['images/products/product2.png', 'images/products/product2.png'],
  },
  {
    id: 3,
    name: 'Bàn Học QA84 - 2 Cánh Dài, 1 Cánh Ngắn, 2 Ngăn Kéo, Vân Gỗ Sồi',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học QA84 được thiết kế dành riêng cho học sinh và sinh viên với phong cách tối giản nhưng đầy đủ công năng. Sản phẩm được làm từ gỗ tự nhiên phủ sơn PU cao cấp, mang lại độ bền vượt trội và khả năng chống trầy xước. Thiết kế gồm 2 cánh dài, 1 cánh ngắn và 2 ngăn kéo tiện lợi, giúp lưu trữ sách vở, tài liệu và dụng cụ học tập một cách ngăn nắp. Màu vân gỗ sồi tự nhiên tạo cảm giác ấm áp, kích thích sự tập trung khi học tập. Kích thước bàn phù hợp với các phòng học nhỏ, đảm bảo sự thoải mái khi sử dụng trong thời gian dài.',
    size: '100x50x75cm',
    warranty: '10 năm',
    price: 'Liên hệ',
    material: 'Gỗ tự nhiên phủ sơn PU',
    promotion: 'ƯU ĐÃI ĐẶC BIỆT THÁNG 4',
    flashsale: {
      active: true,
      discountPercent: 25,
      oldPrice: 2500000,
      newPrice: 1875000,
      type: 'fixed', // 'fixed' hoặc 'daily'
      endsAt: '2025-04-19T23:59:59',
      hidePrice: true, // true: không hiển thị giá, false: hiển thị giá
    },
    gallery: ['images/products/product3.png'],
  },
  {
    id: 4,
    name: 'Bàn Làm Việc QA126 - 3 Cánh Không Ngăn Kéo, 1 Cánh Nhỏ, Màu Trắng Sáng',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc QA126 là lựa chọn lý tưởng cho không gian văn phòng tại nhà hoặc văn phòng chuyên nghiệp. Sản phẩm được làm từ gỗ MDF phủ melamine màu trắng sáng, mang lại vẻ đẹp hiện đại và dễ dàng phối hợp với nhiều phong cách nội thất. Thiết kế gồm 3 cánh mở rộng rãi và 1 cánh nhỏ, cung cấp không gian lưu trữ lớn cho tài liệu, thiết bị văn phòng và vật dụng cá nhân. Bề mặt bàn chống thấm nước, chống trầy xước, dễ dàng vệ sinh. Kích thước bàn phù hợp với các không gian làm việc vừa và nhỏ, mang lại sự tiện nghi và chuyên nghiệp.',
    size: '120x60x75cm',
    promotion: null,
    gallery: ['images/products/product4.png'],
  },
  {
    id: 5,
    name: 'Bàn Trang Điểm Gương Tròn Sang Trọng',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gương tròn là điểm nhấn hoàn hảo cho phòng ngủ hiện đại. Được chế tác từ gỗ MDF phủ melamine cao cấp, sản phẩm mang lại độ bền cao và khả năng chống ẩm mốc hiệu quả. Gương tròn lớn được thiết kế tinh tế, giúp việc trang điểm trở nên dễ dàng và thoải mái. Bàn đi kèm các ngăn kéo và kệ lưu trữ rộng rãi, phù hợp để sắp xếp mỹ phẩm, phụ kiện và đồ dùng cá nhân. Màu sắc trung tính và thiết kế nhỏ gọn giúp bàn phù hợp với nhiều không gian phòng ngủ, từ phong cách tối giản đến sang trọng.',
    size: '80x40x130cm',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 6,
    name: 'Tủ Giày 2 Cánh Gỗ Công Nghiệp',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày 2 cánh được làm từ gỗ công nghiệp MDF phủ melamine, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế 2 cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt tủ được hoàn thiện mịn màng, dễ dàng vệ sinh và chống trầy xước. Màu sắc vân gỗ tự nhiên mang lại vẻ đẹp hiện đại, dễ dàng kết hợp với các không gian nội thất như phòng khách, hành lang hoặc phòng ngủ. Kích thước nhỏ gọn, lý tưởng cho các căn hộ có diện tích hạn chế.',
    size: '80x30x100cm',
    promotion: null,
    gallery: ['images/products/product6.png'],
  },
  {
    id: 7,
    name: 'Tủ Sách Đa Năng Vân Gỗ Óc Chó',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách đa năng được thiết kế để đáp ứng nhu cầu lưu trữ và trang trí trong không gian sống hiện đại. Sản phẩm được làm từ gỗ MDF phủ melamine vân gỗ óc chó sang trọng, mang lại độ bền cao và khả năng chống ẩm, chống mối mọt hiệu quả. Với các kệ mở và ngăn kéo tích hợp, tủ phù hợp để lưu trữ sách, tài liệu, đồ trang trí hoặc các vật dụng cá nhân. Thiết kế tinh tế, tối ưu không gian, giúp tủ dễ dàng phù hợp với phòng khách, phòng làm việc hoặc phòng ngủ. Kích thước lớn nhưng vẫn gọn gàng, lý tưởng cho nhiều phong cách nội thất.',
    size: '100x30x180cm',
    promotion: 'Ưu đãi tháng 4',
    gallery: ['images/products/product7.png'],
  },
  {
    id: 8,
    name: 'Giường Ngủ Gỗ Tự Nhiên Sang Trọng',
    category: 'Tủ Quần Áo',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và độ bền vượt trội. Với thiết kế hiện đại, giường có các đường nét tinh tế, phù hợp với nhiều phong cách nội thất từ cổ điển đến hiện đại. Bề mặt gỗ được xử lý kỹ lưỡng, phủ lớp sơn PU chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích sự tinh tế và chất lượng cao trong không gian phòng ngủ.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 9,
    name: 'Giường Ngủ Gỗ Tự Nhiên Cao Cấp',
    category: 'Tủ Quần Áo',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên cao cấp được làm từ gỗ óc chó nhập khẩu, mang lại vẻ đẹp sang trọng và đẳng cấp cho phòng ngủ. Thiết kế giường tối giản nhưng tinh tế, với các đường nét mềm mại và bề mặt gỗ được xử lý mịn màng. Lớp phủ sơn PU cao cấp giúp bảo vệ gỗ khỏi ẩm mốc, mối mọt và trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, phù hợp cho các cặp đôi hoặc những ai yêu thích không gian ngủ thoải mái. Sản phẩm này là sự kết hợp hoàn hảo giữa thẩm mỹ và công năng, nâng tầm không gian sống.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 10,
    name: 'Giường Ngủ Gỗ Tự Nhiên Tối Giản',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên tối giản được chế tác từ gỗ sồi tự nhiên, mang lại cảm giác gần gũi và ấm áp cho không gian phòng ngủ. Với thiết kế đơn giản nhưng không kém phần tinh tế, giường phù hợp với những ai yêu thích phong cách nội thất hiện đại, tối giản. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho các căn hộ hoặc nhà phố hiện đại.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 11,
    name: 'Giường Ngủ Gỗ Tự Nhiên Phong Cách Bắc Âu',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên phong cách Bắc Âu được làm từ gỗ thông nhập khẩu, mang lại vẻ đẹp mộc mạc nhưng không kém phần hiện đại. Thiết kế giường nhấn mạnh vào sự tối giản, với các đường nét thanh thoát và màu gỗ sáng tự nhiên. Bề mặt gỗ được xử lý kỹ lưỡng, phủ lớp sơn PU chống ẩm và chống trầy xước, đảm bảo độ bền lâu dài trong mọi điều kiện thời tiết. Kích thước giường rộng rãi, phù hợp cho các phòng ngủ có diện tích vừa và lớn. Sản phẩm này là sự lựa chọn hoàn hảo cho những ai yêu thích phong cách Scandinavian.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 12,
    name: 'Giường Ngủ Gỗ Tự Nhiên Cổ Điển',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên cổ điển được chế tác từ gỗ óc chó cao cấp, mang lại vẻ đẹp sang trọng và đẳng cấp cho không gian phòng ngủ. Với thiết kế cổ điển, giường có các chi tiết chạm khắc tinh xảo, tạo nên sự khác biệt và nổi bật. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích phong cách nội thất cổ điển và sang trọng.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 13,
    name: 'Giường Ngủ Gỗ Tự Nhiên Hiện Đại',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên hiện đại được làm từ gỗ sồi tự nhiên, mang lại vẻ đẹp tinh tế và sang trọng cho không gian phòng ngủ. Thiết kế giường đơn giản nhưng hiện đại, với các đường nét mạnh mẽ và bề mặt gỗ mịn màng. Lớp phủ sơn PU cao cấp giúp bảo vệ gỗ khỏi ẩm mốc, mối mọt và trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, phù hợp cho các cặp đôi hoặc những ai yêu thích không gian ngủ thoải mái. Sản phẩm này là sự kết hợp hoàn hảo giữa thẩm mỹ và công năng, nâng tầm không gian sống.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 14,
    name: 'Giường Ngủ Gỗ Tự Nhiên Sang Trọng Lớn',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên sang trọng được chế tác từ gỗ óc chó nhập khẩu, mang lại vẻ đẹp đẳng cấp và tinh tế cho phòng ngủ. Với thiết kế hiện đại, giường có các đường nét mềm mại và bề mặt gỗ được xử lý mịn màng. Lớp phủ sơn PU cao cấp giúp bảo vệ gỗ khỏi ẩm mốc, mối mọt và trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, phù hợp cho các phòng ngủ lớn, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích sự sang trọng và chất lượng cao.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 15,
    name: 'Giường Ngủ Gỗ Tự Nhiên Tối Giản Lớn',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên tối giản được làm từ gỗ sồi tự nhiên, mang lại cảm giác gần gũi và ấm áp cho không gian phòng ngủ. Với thiết kế đơn giản nhưng không kém phần tinh tế, giường phù hợp với những ai yêu thích phong cách nội thất hiện đại, tối giản. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho các căn hộ hoặc nhà phố hiện đại.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 16,
    name: 'Giường Ngủ Gỗ Tự Nhiên Phong Cách Nhật Bản',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên phong cách Nhật Bản được làm từ gỗ thông nhập khẩu, mang lại vẻ đẹp mộc mạc và thanh lịch. Thiết kế giường thấp, tối giản, với các đường nét thanh thoát, phù hợp với những ai yêu thích phong cách Zen và sự yên bình. Bề mặt gỗ được xử lý kỹ lưỡng, phủ lớp sơn PU chống ẩm và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, phù hợp cho các phòng ngủ có diện tích vừa và lớn. Sản phẩm này mang lại cảm giác thư giãn và thoải mái, lý tưởng cho giấc ngủ chất lượng.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 17,
    name: 'Giường Ngủ Gỗ Tự Nhiên Cao Cấp Lớn',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên cao cấp được làm từ gỗ óc chó nhập khẩu, mang lại vẻ đẹp sang trọng và đẳng cấp cho phòng ngủ. Thiết kế giường hiện đại, với các đường nét mềm mại và bề mặt gỗ mịn màng. Lớp phủ sơn PU cao cấp giúp bảo vệ gỗ khỏi ẩm mốc, mối mọt và trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, phù hợp cho các cặp đôi hoặc những ai yêu thích không gian ngủ thoải mái. Sản phẩm này là sự kết hợp hoàn hảo giữa thẩm mỹ và công năng, nâng tầm không gian sống.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 18,
    name: 'Giường Ngủ Gỗ Tự Nhiên Tinh Tế',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên tinh tế được chế tác từ gỗ sồi tự nhiên, mang lại vẻ đẹp hiện đại và sang trọng cho không gian phòng ngủ. Thiết kế giường đơn giản nhưng tinh tế, với các đường nét mạnh mẽ và bề mặt gỗ mịn màng. Lớp phủ sơn PU cao cấp giúp bảo vệ gỗ khỏi ẩm mốc, mối mọt và trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, phù hợp cho các cặp đôi hoặc những ai yêu thích không gian ngủ thoải mái. Sản phẩm này là sự kết hợp hoàn hảo giữa thẩm mỹ và công năng, nâng tầm không gian sống.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 19,
    name: 'Giường Ngủ Gỗ Tự Nhiên Sang Trọng Tối Giản',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên sang trọng tối giản được làm từ gỗ sồi tự nhiên, mang lại cảm giác gần gũi và ấm áp cho không gian phòng ngủ. Với thiết kế đơn giản nhưng không kém phần tinh tế, giường phù hợp với những ai yêu thích phong cách nội thất hiện đại, tối giản. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho các căn hộ hoặc nhà phố hiện đại.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 20,
    name: 'Giường Ngủ Gỗ Tự Nhiên Cổ Điển Lớn',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên cổ điển được chế tác từ gỗ óc chó cao cấp, mang lại vẻ đẹp sang trọng và đẳng cấp cho không gian phòng ngủ. Với thiết kế cổ điển, giường có các chi tiết chạm khắc tinh xảo, tạo nên sự khác biệt và nổi bật. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích phong cách nội thất cổ điển và sang trọng.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 21,
    name: 'Giường Ngủ Gỗ Tự Nhiên Phong Cách Bắc Âu Lớn',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên phong cách Bắc Âu được làm từ gỗ thông nhập khẩu, mang lại vẻ đẹp mộc mạc nhưng không kém phần hiện đại. Thiết kế giường nhấn mạnh vào sự tối giản, với các đường nét thanh thoát và màu gỗ sáng tự nhiên. Bề mặt gỗ được xử lý kỹ lưỡng, phủ lớp sơn PU chống ẩm và chống trầy xước, đảm bảo độ bền lâu dài trong mọi điều kiện thời tiết. Kích thước giường rộng rãi, phù hợp cho các phòng ngủ có diện tích vừa và lớn. Sản phẩm này là sự lựa chọn hoàn hảo cho những ai yêu thích phong cách Scandinavian.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 22,
    name: 'Giường Ngủ Gỗ Tự Nhiên Tối Giản Hiện Đại',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên tối giản hiện đại được làm từ gỗ sồi tự nhiên, mang lại cảm giác gần gũi và ấm áp cho không gian phòng ngủ. Với thiết kế đơn giản nhưng không kém phần tinh tế, giường phù hợp với những ai yêu thích phong cách nội thất hiện đại, tối giản. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho các căn hộ hoặc nhà phố hiện đại.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 23,
    name: 'Giường Ngủ Gỗ Tự Nhiên Sang Trọng Cổ Điển',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên sang trọng cổ điển được chế tác từ gỗ óc chó cao cấp, mang lại vẻ đẹp đẳng cấp và tinh tế cho phòng ngủ. Với thiết kế cổ điển, giường có các chi tiết chạm khắc tinh xảo, tạo nên sự khác biệt và nổi bật. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích phong cách nội thất cổ điển và sang trọng.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png'],
  },
  {
    id: 24,
    name: 'Tủ Quần Áo 4 Cánh Vân Gỗ Óc Chó',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo 4 cánh được chế tác từ gỗ MDF phủ melamine vân gỗ óc chó cao cấp, mang phong cách hiện đại và tinh tế. Với thiết kế 4 cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn cho quần áo, phụ kiện và các vật dụng cá nhân. Chất liệu chống ẩm mốc, chống cong vênh, đảm bảo độ bền lâu dài trong mọi điều kiện thời tiết. Màu vân gỗ óc chó ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với các phòng ngủ lớn, mang lại sự tiện nghi và sang trọng cho không gian sống.',
    size: '160x200x50cm',
    promotion: 'sale 15%',
    gallery: [
      'images/products/product1.png',
      'images/products/product2.png',
      'images/products/product3.png',
    ],
  },
  {
    id: 25,
    name: 'Tủ Bếp Tích Hợp Vân Gỗ Sồi',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp tích hợp được làm từ gỗ công nghiệp MDF phủ melamine vân gỗ sồi, mang lại vẻ đẹp hiện đại và ấm cúng cho không gian bếp. Với thiết kế tích hợp kệ lưu trữ, tủ cung cấp không gian rộng rãi để sắp xếp dụng cụ nhà bếp, thực phẩm khô và đồ dùng gia đình. Chất liệu chống ẩm, chống mối mọt, đảm bảo độ bền lâu dài ngay cả trong môi trường bếp ẩm ướt. Bề mặt tủ mịn màng, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với các căn bếp lớn, mang lại sự tiện nghi và thẩm mỹ cho ngôi nhà của bạn.',
    size: '220x60x85cm',
    promotion: null,
    gallery: ['images/products/product2.png', 'images/products/product4.png'],
  },
  {
    id: 26,
    name: 'Bàn Học Gỗ MDF Nhỏ Gọn',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ MDF được thiết kế dành riêng cho học sinh với phong cách tối giản và tiện dụng. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống trầy xước. Thiết kế nhỏ gọn với các ngăn kéo và kệ lưu trữ, giúp sắp xếp sách vở, tài liệu và dụng cụ học tập một cách ngăn nắp. Màu sắc vân gỗ tự nhiên tạo cảm giác ấm áp, kích thích sự tập trung khi học tập. Kích thước bàn phù hợp với các phòng học nhỏ, đảm bảo sự thoải mái khi sử dụng trong thời gian dài.',
    size: '90x45x70cm',
    promotion: 'Ưu đãi tháng 5',
    gallery: ['images/products/product3.png'],
  },
  {
    id: 27,
    name: 'Bàn Làm Việc Gỗ Công Nghiệp Chuyên Nghiệp',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ công nghiệp được chế tác từ gỗ MDF phủ melamine cao cấp, mang lại vẻ đẹp hiện đại và chuyên nghiệp cho không gian làm việc. Với thiết kế rộng rãi, bàn cung cấp không gian lưu trữ lớn cho tài liệu, thiết bị văn phòng và vật dụng cá nhân. Bề mặt bàn chống thấm nước, chống trầy xước, dễ dàng vệ sinh, đảm bảo độ bền lâu dài. Màu sắc trung tính, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước bàn phù hợp với các văn phòng tại nhà hoặc văn phòng chuyên nghiệp, mang lại sự tiện nghi và hiệu quả khi làm việc.',
    size: '140x60x75cm',
    promotion: 'sale 25%',
    gallery: [
      'images/products/product4.png',
      'images/products/product5.png',
      'images/products/product6.png',
    ],
  },
  {
    id: 28,
    name: 'Bàn Trang Điểm Gương Vuông Tối Giản',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gương vuông là sự lựa chọn hoàn hảo cho những ai yêu thích phong cách tối giản và hiện đại. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc hiệu quả. Gương vuông lớn được thiết kế tinh tế, giúp việc trang điểm trở nên dễ dàng và thoải mái. Bàn đi kèm các ngăn kéo và kệ lưu trữ rộng rãi, phù hợp để sắp xếp mỹ phẩm, phụ kiện và đồ dùng cá nhân. Kích thước nhỏ gọn, phù hợp với nhiều không gian phòng ngủ, từ căn hộ nhỏ đến nhà phố lớn.',
    size: '85x40x135cm',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 29,
    name: 'Tủ Giày 3 Cánh Gỗ Công Nghiệp',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày 3 cánh được làm từ gỗ công nghiệp MDF phủ melamine, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế 3 cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt tủ được hoàn thiện mịn màng, dễ dàng vệ sinh và chống trầy xước. Màu sắc vân gỗ tự nhiên mang lại vẻ đẹp hiện đại, dễ dàng kết hợp với các không gian nội thất như phòng khách, hành lang hoặc phòng ngủ. Kích thước tủ phù hợp với các căn hộ có diện tích vừa và lớn.',
    size: '100x30x110cm',
    promotion: 'sale 10%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },
  {
    id: 30,
    name: 'Tủ Sách Gỗ Tự Nhiên Sang Trọng',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và đẳng cấp cho không gian sống. Với thiết kế các kệ mở và ngăn kéo tích hợp, tủ cung cấp không gian lưu trữ lớn cho sách, tài liệu, đồ trang trí hoặc các vật dụng cá nhân. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Màu gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với phòng khách, phòng làm việc hoặc phòng ngủ lớn.',
    size: '120x30x200cm',
    promotion: null,
    gallery: ['images/products/product7.png', 'images/products/product8.png'],
  },
  {
    id: 31,
    name: 'Giường Ngủ Gỗ MDF Hiện Đại',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ MDF được chế tác từ gỗ công nghiệp phủ melamine cao cấp, mang lại vẻ đẹp hiện đại và tiện dụng cho phòng ngủ. Với thiết kế tối giản, giường có các đường nét tinh tế, phù hợp với nhiều phong cách nội thất từ hiện đại đến tối giản. Bề mặt gỗ được xử lý kỹ lưỡng, chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích sự tiện nghi và thẩm mỹ trong không gian phòng ngủ.',
    size: '160x200cm',
    promotion: 'sale 20%',
    gallery: [
      'images/products/product8.png',
      'images/products/product1.png',
      'images/products/product2.png',
    ],
  },
  {
    id: 32,
    name: 'Tủ Quần Áo Kính Cường Lực Hiện Đại',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo kính cường lực là sự kết hợp hoàn hảo giữa công năng và thẩm mỹ, mang lại vẻ đẹp hiện đại cho không gian phòng ngủ. Sản phẩm được làm từ gỗ MDF phủ melamine kết hợp với cửa kính cường lực chắc chắn, đảm bảo độ bền và an toàn khi sử dụng. Thiết kế cánh mở rộng rãi, cung cấp không gian lưu trữ lớn cho quần áo, phụ kiện và các vật dụng cá nhân. Bề mặt tủ chống thấm nước, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với các phòng ngủ vừa và lớn, mang lại sự tiện nghi và sang trọng.',
    size: '140x190x50cm',
    promotion: null,
    gallery: ['images/products/product1.png'],
  },
  {
    id: 33,
    name: 'Tủ Bếp Gỗ Tự Nhiên Cao Cấp',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian bếp. Với thiết kế hiện đại, tủ cung cấp không gian lưu trữ lớn cho dụng cụ nhà bếp, thực phẩm khô và đồ dùng gia đình. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài trong môi trường bếp ẩm ướt. Màu gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với các căn bếp lớn, mang lại sự tiện nghi và thẩm mỹ.',
    size: '210x60x80cm',
    promotion: 'Ưu đãi tháng 6',
    gallery: ['images/products/product2.png', 'images/products/product3.png'],
  },
  {
    id: 34,
    name: 'Bàn Học Gỗ Công Nghiệp Tối Giản',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ công nghiệp được thiết kế dành riêng cho học sinh và sinh viên với phong cách tối giản và tiện dụng. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống trầy xước. Thiết kế nhỏ gọn với các ngăn kéo và kệ lưu trữ, giúp sắp xếp sách vở, tài liệu và dụng cụ học tập một cách ngăn nắp. Màu sắc vân gỗ tự nhiên tạo cảm giác ấm áp, kích thích sự tập trung khi học tập. Kích thước bàn phù hợp với các phòng học nhỏ, đảm bảo sự thoải mái khi sử dụng trong thời gian dài.',
    size: '95x50x70cm',
    promotion: 'sale 15%',
    gallery: ['images/products/product3.png', 'images/products/product4.png'],
  },
  {
    id: 35,
    name: 'Bàn Làm Việc Gỗ Tự Nhiên Tinh Tế',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp tinh tế và sang trọng cho không gian làm việc. Với thiết kế hiện đại, bàn cung cấp không gian lưu trữ lớn cho tài liệu, thiết bị văn phòng và vật dụng cá nhân. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Màu gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước bàn phù hợp với các văn phòng tại nhà hoặc văn phòng chuyên nghiệp, mang lại sự tiện nghi và hiệu quả khi làm việc.',
    size: '130x60x75cm',
    promotion: null,
    gallery: ['images/products/product4.png'],
  },
  {
    id: 36,
    name: 'Bàn Trang Điểm Gương Gấp Tiện Lợi',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gương gấp là sự lựa chọn hoàn hảo cho những ai yêu thích sự tiện lợi và nhỏ gọn. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc hiệu quả. Gương gấp linh hoạt, giúp tiết kiệm không gian khi không sử dụng. Bàn đi kèm các ngăn kéo và kệ lưu trữ rộng rãi, phù hợp để sắp xếp mỹ phẩm, phụ kiện và đồ dùng cá nhân. Kích thước nhỏ gọn, phù hợp với nhiều không gian phòng ngủ, từ căn hộ nhỏ đến nhà phố lớn.',
    size: '80x40x130cm',
    promotion: 'sale 10%',
    gallery: ['images/products/product5.png', 'images/products/product6.png'],
  },
  {
    id: 37,
    name: 'Tủ Giày Gỗ MDF Hiện Đại',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày gỗ MDF được thiết kế với phong cách hiện đại, mang lại sự tiện nghi và thẩm mỹ cho không gian sống. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt tủ mịn màng, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với các căn hộ có diện tích vừa và nhỏ, mang lại sự tiện lợi cho hành lang hoặc phòng khách.',
    size: '90x30x100cm',
    promotion: null,
    gallery: ['images/products/product6.png'],
  },
  {
    id: 38,
    name: 'Tủ Sách Kết Hợp Kệ Trang Trí',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách kết hợp kệ trang trí được thiết kế để đáp ứng nhu cầu lưu trữ và trang trí trong không gian sống hiện đại. Sản phẩm được làm từ gỗ MDF phủ melamine vân gỗ óc chó sang trọng, mang lại độ bền cao và khả năng chống ẩm, chống mối mọt hiệu quả. Với các kệ mở và ngăn kéo tích hợp, tủ phù hợp để lưu trữ sách, tài liệu, đồ trang trí hoặc các vật dụng cá nhân. Thiết kế tinh tế, tối ưu không gian, giúp tủ dễ dàng phù hợp với phòng khách, phòng làm việc hoặc phòng ngủ. Kích thước lớn nhưng vẫn gọn gàng, lý tưởng cho nhiều phong cách nội thất.',
    size: '110x30x180cm',
    promotion: null,
    gallery: ['images/products/product7.png', 'images/products/product8.png'],
  },
  {
    id: 39,
    name: 'Giường Ngủ Gỗ Công Nghiệp Tối Giản',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ công nghiệp được chế tác từ gỗ MDF phủ melamine cao cấp, mang lại vẻ đẹp hiện đại và tiện dụng cho phòng ngủ. Với thiết kế tối giản, giường có các đường nét tinh tế, phù hợp với nhiều phong cách nội thất từ hiện đại đến tối giản. Bề mặt gỗ được xử lý kỹ lưỡng, chống thấm nước và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích sự tiện nghi và thẩm mỹ trong không gian phòng ngủ.',
    size: '180x200cm',
    promotion: null,
    gallery: ['images/products/product8.png', 'images/products/product1.png'],
  },
  {
    id: 40,
    name: 'Tủ Quần Áo 2 Cánh Nhỏ Gọn',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo 2 cánh được chế tác từ gỗ MDF phủ melamine cao cấp, mang phong cách hiện đại và nhỏ gọn. Với thiết kế 2 cánh mở tiện lợi, tủ cung cấp không gian lưu trữ vừa đủ cho quần áo, phụ kiện và các vật dụng cá nhân. Chất liệu chống ẩm mốc, chống cong vênh, đảm bảo độ bền lâu dài trong mọi điều kiện thời tiết. Màu vân gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với các phòng ngủ nhỏ, mang lại sự tiện nghi và tiết kiệm không gian cho căn hộ hoặc nhà phố.',
    size: '100x180x50cm',
    promotion: 'sale 20%',
    gallery: ['images/products/product1.png', 'images/products/product2.png'],
  },
  {
    id: 41,
    name: 'Tủ Bếp Gỗ MDF Hiện Đại',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp gỗ MDF được thiết kế với phong cách hiện đại, mang lại sự tiện nghi và thẩm mỹ cho không gian bếp. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn cho dụng cụ nhà bếp, thực phẩm khô và đồ dùng gia đình. Bề mặt tủ mịn màng, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với các căn bếp vừa và lớn, mang lại sự tiện lợi và sang trọng cho ngôi nhà của bạn.',
    size: '200x60x80cm',
    promotion: null,
    gallery: ['images/products/product2.png'],
  },
  {
    id: 42,
    name: 'Bàn Học Gỗ Tự Nhiên Rộng Rãi',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian học tập. Với thiết kế rộng rãi, bàn cung cấp không gian lưu trữ lớn cho sách vở, tài liệu và dụng cụ học tập. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Màu gỗ tự nhiên ấm áp, kích thích sự tập trung khi học tập. Kích thước bàn phù hợp với các phòng học vừa và lớn, mang lại sự thoải mái và hiệu quả khi sử dụng.',
    size: '110x55x75cm',
    promotion: 'Ưu đãi tháng 7',
    gallery: ['images/products/product3.png', 'images/products/product4.png'],
  },
  {
    id: 43,
    name: 'Bàn Làm Việc Gỗ MDF Chuyên Nghiệp Lớn',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ MDF được chế tác từ gỗ công nghiệp phủ melamine cao cấp, mang lại vẻ đẹp hiện đại và chuyên nghiệp cho không gian làm việc. Với thiết kế rộng rãi, bàn cung cấp không gian lưu trữ lớn cho tài liệu, thiết bị văn phòng và vật dụng cá nhân. Bề mặt bàn chống thấm nước, chống trầy xước, dễ dàng vệ sinh, đảm bảo độ bền lâu dài. Màu sắc trung tính, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước bàn phù hợp với các văn phòng tại nhà hoặc văn phòng chuyên nghiệp, mang lại sự tiện nghi và hiệu quả khi làm việc.',
    size: '150x60x75cm',
    promotion: 'sale 15%',
    gallery: ['images/products/product4.png', 'images/products/product5.png'],
  },
  {
    id: 44,
    name: 'Bàn Trang Điểm Gương Trượt Hiện Đại',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gương trượt là sự lựa chọn hoàn hảo cho những ai yêu thích sự tiện lợi và hiện đại. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc hiệu quả. Gương trượt linh hoạt, giúp tiết kiệm không gian khi không sử dụng. Bàn đi kèm các ngăn kéo và kệ lưu trữ rộng rãi, phù hợp để sắp xếp mỹ phẩm, phụ kiện và đồ dùng cá nhân. Kích thước nhỏ gọn, phù hợp với nhiều không gian phòng ngủ, từ căn hộ nhỏ đến nhà phố lớn.',
    size: '90x40x135cm',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 45,
    name: 'Tủ Giày 4 Cánh Gỗ Công Nghiệp',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày 4 cánh được làm từ gỗ công nghiệp MDF phủ melamine, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế 4 cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt tủ được hoàn thiện mịn màng, dễ dàng vệ sinh và chống trầy xước. Màu sắc vân gỗ tự nhiên mang lại vẻ đẹp hiện đại, dễ dàng kết hợp với các không gian nội thất như phòng khách, hành lang hoặc phòng ngủ. Kích thước tủ phù hợp với các căn hộ có diện tích vừa và lớn.',
    size: '120x30x110cm',
    promotion: 'sale 10%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },
  {
    id: 46,
    name: 'Tủ Sách Gỗ MDF Tiện Lợi',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    description:
      'Tủ sách gỗ MDF được thiết kế với phong cách hiện đại, mang lại sự tiện nghi và thẩm mỹ cho không gian sống. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế các kệ mở và ngăn kéo tích hợp, tủ cung cấp không gian lưu trữ lớn cho sách, tài liệu, đồ trang trí hoặc các vật dụng cá nhân. Bề mặt tủ mịn màng, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với phòng khách, phòng làm việc hoặc phòng ngủ, mang lại sự tiện lợi và sang trọng.',
    size: '100x30x180cm',
    promotion: null,
    gallery: ['images/products/product7.png'],
  },
  {
    id: 47,
    name: 'Giường Ngủ Gỗ Tự Nhiên Rộng Rãi',
    category: 'Giường Ngủ',
    image: 'images/products/product8.png',
    description:
      'Giường ngủ gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian phòng ngủ. Với thiết kế hiện đại, giường có các đường nét tinh tế, phù hợp với nhiều phong cách nội thất từ hiện đại đến tối giản. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước giường rộng rãi, mang lại sự thoải mái tối đa cho giấc ngủ. Sản phẩm này là lựa chọn lý tưởng cho những ai yêu thích sự tiện nghi và thẩm mỹ trong không gian phòng ngủ.',
    size: '200x220cm',
    promotion: 'sale 20%',
    gallery: ['images/products/product8.png', 'images/products/product1.png'],
  },
  {
    id: 48,
    name: 'Tủ Quần Áo Gương Trượt Tiết Kiệm Không Gian',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    description:
      'Tủ quần áo gương trượt là giải pháp hoàn hảo cho những không gian phòng ngủ hạn chế về diện tích. Sản phẩm được làm từ gỗ MDF phủ melamine kết hợp với cửa gương trượt hiện đại, mang lại vẻ đẹp sang trọng và tiện dụng. Thiết kế cánh trượt tiết kiệm không gian, cung cấp không gian lưu trữ lớn cho quần áo, phụ kiện và các vật dụng cá nhân. Bề mặt tủ chống thấm nước, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với các phòng ngủ vừa và lớn, mang lại sự tiện nghi và thẩm mỹ cho không gian sống.',
    size: '150x200x50cm',
    promotion: null,
    gallery: ['images/products/product1.png', 'images/products/product2.png'],
  },
  {
    id: 49,
    name: 'Tủ Bếp Gỗ Công Nghiệp Tiện Nghi',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    description:
      'Tủ bếp gỗ công nghiệp được thiết kế với phong cách hiện đại, mang lại sự tiện nghi và thẩm mỹ cho không gian bếp. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống ẩm mốc vượt trội. Với thiết kế cánh mở rộng rãi và kệ tích hợp, tủ cung cấp không gian lưu trữ lớn cho dụng cụ nhà bếp, thực phẩm khô và đồ dùng gia đình. Bề mặt tủ mịn màng, dễ dàng vệ sinh và chống trầy xước. Kích thước tủ phù hợp với các căn bếp lớn, mang lại sự tiện lợi và sang trọng cho ngôi nhà của bạn.',
    size: '230x60x85cm',
    promotion: 'sale 15%',
    gallery: ['images/products/product2.png', 'images/products/product3.png'],
  },
  {
    id: 50,
    name: 'Bàn Học Gỗ MDF Nhỏ Gọn Tiện Dụng',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    description:
      'Bàn học gỗ MDF được thiết kế dành riêng cho học sinh với phong cách tối giản và tiện dụng. Sản phẩm được làm từ gỗ MDF phủ melamine cao cấp, mang lại độ bền cao và khả năng chống trầy xước. Thiết kế nhỏ gọn với các ngăn kéo và kệ lưu trữ, giúp sắp xếp sách vở, tài liệu và dụng cụ học tập một cách ngăn nắp. Màu sắc vân gỗ tự nhiên tạo cảm giác ấm áp, kích thích sự tập trung khi học tập. Kích thước bàn phù hợp với các phòng học nhỏ, đảm bảo sự thoải mái khi sử dụng trong thời gian dài.',
    size: '80x40x70cm',
    promotion: null,
    gallery: ['images/products/product3.png'],
  },
  {
    id: 51,
    name: 'Bàn Làm Việc Gỗ Công Nghiệp Nhỏ Gọn',
    category: 'Bàn Làm Việc',
    image: 'images/products/product4.png',
    description:
      'Bàn làm việc gỗ công nghiệp được chế tác từ gỗ MDF phủ melamine cao cấp, mang lại vẻ đẹp hiện đại và tiện dụng cho không gian làm việc. Với thiết kế nhỏ gọn, bàn cung cấp không gian lưu trữ vừa đủ cho tài liệu, thiết bị văn phòng và vật dụng cá nhân. Bề mặt bàn chống thấm nước, chống trầy xước, dễ dàng vệ sinh, đảm bảo độ bền lâu dài. Màu sắc trung tính, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước bàn phù hợp với các không gian làm việc nhỏ, mang lại sự tiện nghi và hiệu quả khi làm việc.',
    size: '100x50x75cm',
    promotion: 'sale 10%',
    gallery: ['images/products/product4.png', 'images/products/product5.png'],
  },
  {
    id: 52,
    name: 'Bàn Trang Điểm Gỗ Tự Nhiên Sang Trọng',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    description:
      'Bàn trang điểm gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và tinh tế cho phòng ngủ. Với thiết kế hiện đại, bàn đi kèm gương lớn và các ngăn kéo, kệ lưu trữ rộng rãi, phù hợp để sắp xếp mỹ phẩm, phụ kiện và đồ dùng cá nhân. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Kích thước bàn phù hợp với nhiều không gian phòng ngủ, từ căn hộ nhỏ đến nhà phố lớn, mang lại sự tiện nghi và thẩm mỹ.',
    size: '85x40x130cm',
    promotion: null,
    gallery: ['images/products/product5.png'],
  },
  {
    id: 53,
    name: 'Tủ Giày Gỗ Tự Nhiên Bền Đẹp',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    description:
      'Tủ giày gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian sống. Với thiết kế cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Màu gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với các căn hộ có diện tích vừa và lớn, mang lại sự tiện nghi và thẩm mỹ.',
    size: '100x30x100cm',
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
