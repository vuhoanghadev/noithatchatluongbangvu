const products = [
  {
    id: 1,
    name: 'Tủ QA205 - 4 Cánh Mở, 2 Hàng Ngăn Kéo, Ô Hở Trái Vân Óc Chó',
    category: 'Tủ Quần Áo',
    image: 'images/products/product1.png',
    reviewCode: 'NTBV2025', // Mã bình luận cho sản phẩm
    featured: true, // Sản phẩm nổi bật
    description:
      'Tủ quần áo QA205 được chế tác từ gỗ MDF phủ melamine cao cấp, mang phong cách hiện đại và tinh tế. Với thiết kế 4 cánh mở rộng rãi, 2 hàng ngăn kéo tiện lợi và ô hở bên trái, sản phẩm này không chỉ đáp ứng nhu cầu lưu trữ quần áo mà còn là điểm nhấn sang trọng cho phòng ngủ. Chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc, chống cong vênh, phù hợp với các không gian sống có diện tích nhỏ hoặc vừa. Tủ có màu vân óc chó ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất khác nhau.',
    size: '120x180x50cm',
    warranty: '10 năm',
    price: 'Liên Hệ',
    material: 'Nhựa Đài Loan Cao Cấp',
    promotion: 'Ưu đãi đặc biệt',
    tag: 'bán chạy',
    rating: 4.7,
    views: 1250,
    soldCount: 120,
    promoEndDate: '2025-05-30T00:00:00', // Ngày kết thúc khuyến mãi
    sku: 'NTBV-QA205', // SKU tự đặt, muốn tự động thì có thể thêm 'true'
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
    // Thông tin chi tiết cho tab mô tả chi tiết
    specifications: {
      'Kích thước': '120x180x50cm (Rộng x Cao x Sâu)',
      'Chất liệu': 'Gỗ MDF phủ melamine, Nhựa Đài Loan cao cấp',
      'Màu sắc': 'Vân gỗ óc chó',
      'Số cánh': '4 cánh mở',
      'Ngăn kéo': '2 hàng ngăn kéo',
      'Tính năng đặc biệt': 'Ô hở bên trái, Chống ẩm mốc, Chống cong vênh',
      'Phong cách': 'Hiện đại, Sang trọng',
      'Xuất xứ': 'Việt Nam',
      'Thời gian bảo hành': '10 năm',
      'Mã sản phẩm': 'NTBV-QA205',
      'ĐIỂM NỔI BẬT':
        'Thiết kế 4 cánh mở rộng rãi, 2 hàng ngăn kéo tiện lợi, Ô hở bên trái, Chất liệu nhựa Đài Loan bền chắc, Chống ẩm mốc, Chống cong vênh, Màu vân óc chó sang trọng',
    },
    detailedDescription: {
      content: `<p>Tủ quần áo QA205 là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại với thiết kế sang trọng và công năng vượt trội.</p>
      <p>Được chế tác từ gỗ MDF phủ melamine cao cấp với vân gỗ óc chó ấm áp, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền vượt trội theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế 4 cánh mở rộng rãi, tạo không gian lưu trữ tối đa</li>
        <li>2 hàng ngăn kéo tiện lợi cho việc sắp xếp đồ lót, phụ kiện</li>
        <li>Ô hở bên trái tiện dụng để trưng bày hoặc để đồ thường xuyên sử dụng</li>
        <li>Chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc, chống cong vênh</li>
        <li>Màu vân óc chó sang trọng, dễ dàng kết hợp với nhiều phong cách nội thất</li>
      </ul>`,
    },
    // Thông tin đánh giá cho tab đánh giá
    reviews: [
      {
        author: 'Nguyễn Trọng Tấn',
        date: '15/04/2025 10:30 AM',
        rating: 5,
        content:
          'Sản phẩm rất đẹp và chắc chắn, đúng với mô tả. Giao hàng nhanh và lắp đặt tận tình. Tôi rất hài lòng với tủ quần áo này!',
        images: [
          'images/products/product1.png',
          'images/products/product2.png',
        ],
        videos: [],
        isAnonymous: false,
        avatar: '../images/avt1.webp',
        replies: [
          {
            author: 'Nội Thất Bàng Vũ',
            isAdmin: true,
            date: '15/04/2025 14:45 PM',
            content:
              'Cảm ơn anh đã tin tưởng và ủng hộ sản phẩm của chúng tôi. Chúc anh và gia đình có trải nghiệm tuyệt vời với sản phẩm!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Tuấn Anh Lê',
        date: '09/04/2025 11:26AM',
        rating: 4.5,
        content:
          'Tủ đẹp, chất lượng tốt. Tuy nhiên thời gian giao hàng hơi lâu. Nhưng nhìn chung tôi vẫn rất hài lòng với sản phẩm.',
        images: [
          'images/products/product3.png',
          'images/products/product4.png',
          'images/products/product5.png',
        ],
        videos: ['../images/vifdeo1.mp4'],
        isAnonymous: false,
        avatar: '../images/avt2.webp',
        replies: [
          {
            author: 'Nội Thất Bàng Vũ',
            isAdmin: true,
            date: '10/04/2025 09:15 AM',
            content:
              'Cảm ơn anh đã phản hồi. Chúng tôi xin lỗi về sự chậm trễ trong quá trình giao hàng. Chúng tôi sẽ cải thiện dịch vụ trong thời gian tới.',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '05/02/2025 08:15 PM',
        rating: 5,
        content:
          'Đậu xanh sản phẩm gì vừa đẹp vừa chất lượng, đúng với giá tiền. Tuy nhiên có một vài vết xước nhỏ khi giao hàng.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Bàng Vũ',
            isAdmin: true,
            date: '10/04/2025 09:15 AM',
            content:
              'Cảm ơn anh/chị đã tin tưởng và ủng hộ sản phẩm của shop! 😊 Shop rất vui khi anh/chị đánh giá cao về chất lượng và thiết kế đẹp của sản phẩm đậu xanh. Về vấn đề một vài vết xước nhỏ khi giao hàng, shop thành thật xin lỗi vì sự bất tiện này. Shop sẽ cố gắng cải thiện dịch vụ giao hàng trong thời gian tới.',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '05/02/2025 08:15 PM',
        rating: 5,
        content:
          'Tủ quần áo thiết kế hiện đại, màu sắc sang trọng, giá cả rất hợp lý. Chỉ hơi tiếc là có vài vết xước nhỏ trên cánh tủ khi nhận.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '10/04/2025 09:15 AM',
            content:
              'Cảm ơn anh/chị đã ủng hộ shop! 🌟 Shop xin lỗi về vết xước nhỏ. Vui lòng gửi ảnh qua Zalo 0972774646 để shop hỗ trợ sửa chữa ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '06/02/2025 09:30 AM',
        rating: 5,
        content:
          'Tủ quần áo chất liệu nhựa giả gỗ đẹp, chắc chắn, giá tốt. Nhưng bao bì giao hàng hơi móp méo, may là tủ không bị ảnh hưởng nhiều.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '11/04/2025 10:00 AM',
            content:
              'Cảm ơn anh/chị đã tin tưởng shop! 😊 Shop xin lỗi vì bao bì chưa tốt. Shop sẽ kiểm tra lại vận chuyển để cải thiện. Có cần hỗ trợ thêm, anh/chị nhắn shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '07/02/2025 03:20 PM',
        rating: 4,
        content:
          'Tủ quần áo rộng rãi, nhiều ngăn tiện lợi, đúng như mô tả. Có điều lắp ráp hơi mất thời gian vì thiếu 1-2 con ốc nhỏ.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '12/04/2025 08:45 AM',
            content:
              'Cảm ơn anh/chị đã chọn sản phẩm shop! 🌼 Shop xin lỗi vì thiếu ốc. Anh/chị nhắn Zalo 0972774646, shop gửi bổ sung ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '08/02/2025 11:00 AM',
        rating: 5,
        content:
          'Tủ quần áo đẹp, chất lượng vượt mong đợi, giá rất ổn. Giao hàng đúng hẹn, chỉ có một vết xước nhẹ ở góc tủ.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '13/04/2025 09:30 AM',
            content:
              'Cảm ơn anh/chị đã yêu thích sản phẩm! 😍 Shop xin lỗi về vết xước. Vui lòng gửi ảnh qua Fanpage để shop khắc phục nhanh nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '09/02/2025 07:45 PM',
        rating: 5,
        content:
          'Tủ quần áo thiết kế tối giản, phù hợp không gian nhỏ, giá hợp lý. Nhưng giao hàng chậm hơn dự kiến 1 ngày.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '14/04/2025 10:15 AM',
            content:
              'Cảm ơn anh/chị đã ủng hộ! 🌈 Shop xin lỗi vì giao hàng chậm. Shop sẽ phối hợp vận chuyển để cải thiện. Cần hỗ trợ, anh/chị liên hệ shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '10/02/2025 02:10 PM',
        rating: 4,
        content:
          'Tủ quần áo màu trắng đẹp, chất liệu bền, giá cả phải chăng. Chỉ hơi tiếc là hướng dẫn lắp ráp hơi khó hiểu.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '15/04/2025 09:00 AM',
            content:
              'Cảm ơn anh/chị đã chọn shop! 😊 Shop xin lỗi vì hướng dẫn chưa rõ. Anh/chị nhắn Zalo, shop gửi video hướng dẫn chi tiết ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '11/02/2025 10:25 AM',
        rating: 4,
        content:
          'Tủ quần áo chắc chắn, thiết kế đẹp, phù hợp với phòng ngủ hiện đại. Có vài vết bẩn nhỏ trên bề mặt khi nhận hàng.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '16/04/2025 08:30 AM',
            content:
              'Cảm ơn anh/chị đã tin tưởng shop! 🌟 Shop xin lỗi về vết bẩn. Vui lòng gửi ảnh qua Zalo 0972774646 để shop hỗ trợ vệ sinh hoặc đổi mới ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '12/02/2025 06:50 PM',
        rating: 5,
        content:
          'Tủ quần áo rất đẹp, chất liệu tốt, giá hợp túi tiền. Giao hàng nhanh, nhưng đóng gói hơi lỏng lẻo.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '17/04/2025 09:45 AM',
            content:
              'Cảm ơn anh/chị đã yêu thích tủ! 😍 Shop xin lỗi vì đóng gói chưa tốt. Shop sẽ kiểm tra lại để cải thiện. Cần hỗ trợ, anh/chị nhắn shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '13/02/2025 01:30 PM',
        rating: 5,
        content:
          'Tủ quần áo thiết kế tinh tế, nhiều ngăn tiện dụng, giá ổn. Nhưng có một bản lề hơi lỏng sau khi lắp.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '18/04/2025 10:20 AM',
            content:
              'Cảm ơn anh/chị đã ủng hộ! 🌼 Shop xin lỗi vì bản lề. Anh/chị gửi ảnh qua Fanpage, shop hỗ trợ thay mới ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '14/02/2025 04:15 PM',
        rating: 5,
        content:
          'Tủ quần áo đẹp, chất liệu nhựa cao cấp, giá hợp lý. Chỉ hơi bất tiện vì giao hàng trễ giờ hẹn.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '19/04/2025 09:10 AM',
            content:
              'Cảm ơn anh/chị đã chọn shop! 🌈 Shop xin lỗi vì giao trễ. Shop sẽ cải thiện lịch trình vận chuyển. Cần hỗ trợ, anh/chị liên hệ shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
    ],
    // Thông tin chính sách cho tab chính sách
    policies: {
      shipping:
        'Miễn phí vận chuyển trong phạm vi 10km từ cửa hàng. Phí vận chuyển sẽ được tính dựa trên khoảng cách và khối lượng sản phẩm cho các khu vực khác.',
      returns:
        'Quý khách có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm đổi trả phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng.',
      warranty:
        'Sản phẩm được bảo hành chính hãng 10 năm cho các lỗi kỹ thuật. Bảo hành không áp dụng cho các trường hợp hư hỏng do sử dụng không đúng cách hoặc tự ý sửa chữa.',
      payment:
        'Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ và các ví điện tử phổ biến như MoMo, ZaloPay.',
    },
    // Thông tin bảo quản cho tab bảo quản
    care: {
      cleaning:
        'Lau chùi sản phẩm thường xuyên bằng khăn mềm, khô hoặc hơi ẩm. Tránh sử dụng các chất tẩy rửa có tính axit hoặc kiềm mạnh.',
      sunlight:
        'Không đặt sản phẩm dưới ánh nắng mặt trời trực tiếp trong thời gian dài để tránh bạc màu và biến dạng.',
      humidity:
        'Không đặt sản phẩm ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với nước để tránh gỗ bị cong vênh, nấm mốc.',
      temperature:
        'Duy trì sản phẩm ở nhiệt độ phòng ổn định, tránh thay đổi nhiệt độ đột ngột có thể gây nứt, cong vênh.',
      tips: [
        'Nhiệt độ lý tưởng: 18-24°C',
        'Độ ẩm lý tưởng: 40-60%',
        'Sử dụng miếng lót khi đặt vật dụng nóng hoặc lạnh lên bề mặt tủ',
        'Kiểm tra và siết chặt các ốc vít định kỳ 6 tháng/lần',
        'Sử dụng sáp đánh bóng gỗ 1 năm/lần để duy trì vẻ đẹp của sản phẩm',
      ],
    },
  },
  {
    id: 2,
    name: 'Tủ Bếp QA120 - 3 Cánh Lùa, Vân Gỗ Sồi Tự Nhiên',
    category: 'Tủ Bếp',
    image: 'images/products/product2.png',
    reviewCode: 'NTBV2025', // Mã bình luận cho sản phẩm
    description:
      'Tủ bếp QA120 là sự lựa chọn hoàn hảo cho không gian bếp hiện đại với thiết kế 3 cánh lùa tiết kiệm không gian. Sản phẩm được làm từ gỗ công nghiệp MDF phủ melamine vân gỗ sồi tự nhiên, mang lại vẻ đẹp sang trọng và ấm cúng. Chất liệu chống ẩm, chống mối mọt, đảm bảo độ bền lâu dài ngay cả trong môi trường bếp ẩm ướt. Với kích thước rộng rãi, tủ cung cấp không gian lưu trữ lớn cho các dụng cụ nhà bếp, thực phẩm khô và đồ dùng gia đình. Thiết kế tinh tế, dễ dàng vệ sinh, phù hợp với các căn bếp có diện tích vừa và nhỏ.',
    size: '200x60x80cm',
    warranty: '10 năm',
    price: 'Liên hệ',
    material: 'Gỗ MDF phủ melamine vân gỗ sồi',
    promotion: 'giảm 10%',
    tag: 'Mới',
    rating: 4.5,
    views: 980,
    soldCount: 42,
    promoEndDate: '2025-05-15T00:00:00', // Ngày kết thúc khuyến mãi
    sku: 'NTBV-TB120', // SKU tự đặt
    gallery: ['images/products/product2.png', 'images/products/product2.png'],
  },
  {
    id: 3,
    name: 'Bàn Học QA84 - 2 Cánh Dài, 1 Cánh Ngắn, 2 Ngăn Kéo, Vân Gỗ Sồi',
    category: 'Bàn Học',
    image: 'images/products/product3.png',
    reviewCode: 'NTBV2026', // Mã bình luận cho sản phẩm
    featured: true, // Sản phẩm nổi bật
    description:
      'Bàn học QA84 được thiết kế dành riêng cho học sinh và sinh viên với phong cách tối giản nhưng đầy đủ công năng. Sản phẩm được làm từ gỗ tự nhiên phủ sơn PU cao cấp, mang lại độ bền vượt trội và khả năng chống trầy xước. Thiết kế gồm 2 cánh dài, 1 cánh ngắn và 2 ngăn kéo tiện lợi, giúp lưu trữ sách vở, tài liệu và dụng cụ học tập một cách ngăn nắp. Màu vân gỗ sồi tự nhiên tạo cảm giác ấm áp, kích thích sự tập trung khi học tập. Kích thước bàn phù hợp với các phòng học nhỏ, đảm bảo sự thoải mái khi sử dụng trong thời gian dài.',
    size: '100x50x75cm',
    warranty: '10 năm',
    price: 'Liên hệ',
    material: 'Gỗ tự nhiên phủ sơn PU',
    promotion: 'ƯU ĐÃI ĐẶC BIỆT THÁNG 4',
    tag: 'Bán chạy',
    rating: 4.8,
    views: 1560,
    soldCount: 120,
    promoEndDate: '2025-04-30T00:00:00', // Ngày kết thúc khuyến mãi
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
    promotion: 'Giảm 15% - Quà tặng kèm',
    tag: 'Bán Chạy',
    promoEndDate: '2025-06-15T00:00:00', // Ngày kết thúc khuyến mãi
    gallery: ['images/products/product4.png'],
  },
  {
    id: 5,
    name: 'Bàn Trang Điểm Gương Tròn Sang Trọng',
    category: 'Bàn Trang Điểm',
    image: 'images/products/product5.png',
    featured: true, // Sản phẩm nổi bật
    description:
      'Bàn trang điểm gương tròn là điểm nhấn hoàn hảo cho phòng ngủ hiện đại. Được chế tác từ gỗ MDF phủ melamine cao cấp, sản phẩm mang lại độ bền cao và khả năng chống ẩm mốc hiệu quả. Gương tròn lớn được thiết kế tinh tế, giúp việc trang điểm trở nên dễ dàng và thoải mái. Bàn đi kèm các ngăn kéo và kệ lưu trữ rộng rãi, phù hợp để sắp xếp mỹ phẩm, phụ kiện và đồ dùng cá nhân. Màu sắc trung tính và thiết kế nhỏ gọn giúp bàn phù hợp với nhiều không gian phòng ngủ, từ phong cách tối giản đến sang trọng.',
    size: '80x40x130cm',
    promotion: 'Giảm 20% - Miễn phí vận chuyển',
    promoEndDate: '2025-05-20T00:00:00', // Ngày kết thúc khuyến mãi
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
    promotion: 'Giảm 25% - Quà tặng kèm',
    promoEndDate: '2025-06-30T00:00:00', // Ngày kết thúc khuyến mãi
    gallery: ['images/products/product6.png'],
  },
  {
    id: 7,
    name: 'Tủ Sách Đa Năng Vân Gỗ Óc Chó',
    category: 'Tủ Sách',
    image: 'images/products/product7.png',
    featured: true, // Sản phẩm nổi bật
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
    featured: true,
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
    featured: true,

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
    price: '50.500.000đ',
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
    price: '20.500.000đ',
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
    price: '10.500.000đ',
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
    price: '5.500.000đ',
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
    price: '2.500.000',
    description:
      'Tủ giày gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian sống. Với thiết kế cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Màu gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với các căn hộ có diện tích vừa và lớn, mang lại sự tiện nghi và thẩm mỹ.',
    size: '100x30x100cm',
    promotion: 'sale 20%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },
  {
    id: 54,
    name: 'Tủ Giày Gỗ Tự Nhiên Bền Đẹp',
    category: 'Tủ Giày',
    image: 'images/products/product6.png',
    price: '2.999.999',
    description:
      'Tủ giày gỗ tự nhiên được chế tác từ gỗ sồi cao cấp, mang lại vẻ đẹp sang trọng và bền bỉ cho không gian sống. Với thiết kế cánh mở rộng rãi, tủ cung cấp không gian lưu trữ lớn, phù hợp để sắp xếp nhiều đôi giày dép một cách gọn gàng. Bề mặt gỗ được phủ lớp sơn PU cao cấp, chống thấm nước, chống mối mọt và chống trầy xước, đảm bảo độ bền lâu dài. Màu gỗ tự nhiên ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất. Kích thước tủ phù hợp với các căn hộ có diện tích vừa và lớn, mang lại sự tiện nghi và thẩm mỹ.',
    size: '100x30x100cm',
    promotion: 'sale 20%',
    gallery: ['images/products/product6.png', 'images/products/product7.png'],
  },
  {
    id: 55,
    name: 'Tủ QA205 - 4 Cánh Mở, 2 Hàng Ngăn Kéo, Ô Hở Trái Vân Gỗ Sồi',
    category: 'Tủ Quần Áo',
    image:
      'https://bepnhanphat.com/wp-content/uploads/2022/03/mau-tu-quan-ao-go-mdf-loi-xanh-chong-am-phu-melamine-bepnhanphat-1.jpg',
    reviewCode: 'NTBV2025', // Mã bình luận cho sản phẩm
    description:
      'Tủ quần áo QA205 được chế tác từ gỗ MDF phủ melamine cao cấp, mang phong cách hiện đại và tinh tế. Với thiết kế 4 cánh mở rộng rãi, 2 hàng ngăn kéo tiện lợi và ô hở bên trái, sản phẩm này không chỉ đáp ứng nhu cầu lưu trữ quần áo mà còn là điểm nhấn sang trọng cho phòng ngủ. Chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc, chống cong vênh, phù hợp với các không gian sống có diện tích nhỏ hoặc vừa. Tủ có màu vân óc chó ấm áp, dễ dàng kết hợp với nhiều phong cách nội thất khác nhau.',
    size: '120x180x50cm',
    warranty: '10 năm',
    price: 'Liên Hệ',
    material: 'Nhựa Đài Loan Cao Cấp',
    promotion: null,
    tag: 'bán chạy',
    rating: 4.7,
    views: 1250,
    soldCount: 120,
    sku: 'NTBV-QA205', // SKU tự đặt, muốn tự động thì có thể thêm 'true'
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
    // Thông tin chi tiết cho tab mô tả chi tiết
    specifications: {
      'Kích thước': '120x180x50cm (Rộng x Cao x Sâu)',
      'Chất liệu': 'Gỗ MDF phủ melamine, Nhựa Đài Loan cao cấp',
      'Màu sắc': 'Vân gỗ óc chó',
      'Số cánh': '4 cánh mở',
      'Ngăn kéo': '2 hàng ngăn kéo',
      'Tính năng đặc biệt': 'Ô hở bên trái, Chống ẩm mốc, Chống cong vênh',
      'Phong cách': 'Hiện đại, Sang trọng',
      'Xuất xứ': 'Việt Nam',
      'Thời gian bảo hành': '10 năm',
      'Mã sản phẩm': 'NTBV-QA205',
      'ĐIỂM NỔI BẬT':
        'Thiết kế 4 cánh mở rộng rãi, 2 hàng ngăn kéo tiện lợi, Ô hở bên trái, Chất liệu nhựa Đài Loan bền chắc, Chống ẩm mốc, Chống cong vênh, Màu vân óc chó sang trọng',
    },
    detailedDescription: {
      content: `<p>Tủ quần áo QA205 là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại với thiết kế sang trọng và công năng vượt trội.</p>
      <p>Được chế tác từ gỗ MDF phủ melamine cao cấp với vân gỗ óc chó ấm áp, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền vượt trội theo thời gian.</p>

      <div class="product-image-showcase">
        <img src="images/products/product1.png" alt="Tủ quần áo QA205 - Góc nhìn tổng thể">
        <div class="image-caption">Tủ quần áo QA205 - Góc nhìn tổng thể</div>
      </div>

      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế 4 cánh mở rộng rãi, tạo không gian lưu trữ tối đa</li>
        <li>2 hàng ngăn kéo tiện lợi cho việc sắp xếp đồ lót, phụ kiện</li>
        <li>Ô hở bên trái tiện dụng để trưng bày hoặc để đồ thường xuyên sử dụng</li>
        <li>Chất liệu nhựa Đài Loan bền chắc, chống ẩm mốc, chống cong vênh</li>
        <li>Màu vân óc chó sang trọng, dễ dàng kết hợp với nhiều phong cách nội thất</li>
      </ul>

      <div class="product-image-showcase">
        <img src="images/products/product2.png" alt="Chi tiết ngăn kéo và ô hở bên trái">
        <div class="image-caption">Chi tiết ngăn kéo và ô hở bên trái</div>
      </div>

      <p>Với thiết kế tinh tế và chất lượng vượt trội, tủ quần áo QA205 không chỉ là nơi lưu trữ quần áo mà còn là điểm nhấn sang trọng cho không gian phòng ngủ của bạn.</p>

      <div class="product-image-showcase">
        <img src="images/products/product3.png" alt="Không gian lưu trữ bên trong tủ">
        <div class="image-caption">Không gian lưu trữ bên trong tủ</div>
      </div>
      `,
    },
    // Thông tin đánh giá cho tab đánh giá
    reviews: [
      {
        author: 'Nguyễn Trọng Tấn',
        date: '15/04/2025 10:30 AM',
        rating: 5,
        content:
          'Sản phẩm rất đẹp và chắc chắn, đúng với mô tả. Giao hàng nhanh và lắp đặt tận tình. Tôi rất hài lòng với tủ quần áo này!',
        images: [
          'images/products/product1.png',
          'images/products/product2.png',
        ],
        videos: [],
        isAnonymous: false,
        avatar: '../images/avt1.webp',
        replies: [
          {
            author: 'Nội Thất Bàng Vũ',
            isAdmin: true,
            date: '15/04/2025 14:45 PM',
            content:
              'Cảm ơn anh đã tin tưởng và ủng hộ sản phẩm của chúng tôi. Chúc anh và gia đình có trải nghiệm tuyệt vời với sản phẩm!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Tuấn Anh Lê',
        date: '09/04/2025 11:26AM',
        rating: 4.5,
        content:
          'Tủ đẹp, chất lượng tốt. Tuy nhiên thời gian giao hàng hơi lâu. Nhưng nhìn chung tôi vẫn rất hài lòng với sản phẩm.',
        images: [
          'images/products/product3.png',
          'images/products/product4.png',
          'images/products/product5.png',
        ],
        videos: ['../images/vifdeo1.mp4'],
        isAnonymous: false,
        avatar: '../images/avt2.webp',
        replies: [
          {
            author: 'Nội Thất Bàng Vũ',
            isAdmin: true,
            date: '10/04/2025 09:15 AM',
            content:
              'Cảm ơn anh đã phản hồi. Chúng tôi xin lỗi về sự chậm trễ trong quá trình giao hàng. Chúng tôi sẽ cải thiện dịch vụ trong thời gian tới.',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '05/02/2025 08:15 PM',
        rating: 5,
        content:
          'Đậu xanh sản phẩm gì vừa đẹp vừa chất lượng, đúng với giá tiền. Tuy nhiên có một vài vết xước nhỏ khi giao hàng.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Bàng Vũ',
            isAdmin: true,
            date: '10/04/2025 09:15 AM',
            content:
              'Cảm ơn anh/chị đã tin tưởng và ủng hộ sản phẩm của shop! 😊 Shop rất vui khi anh/chị đánh giá cao về chất lượng và thiết kế đẹp của sản phẩm đậu xanh. Về vấn đề một vài vết xước nhỏ khi giao hàng, shop thành thật xin lỗi vì sự bất tiện này. Shop sẽ cố gắng cải thiện dịch vụ giao hàng trong thời gian tới.',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '05/02/2025 08:15 PM',
        rating: 5,
        content:
          'Tủ quần áo thiết kế hiện đại, màu sắc sang trọng, giá cả rất hợp lý. Chỉ hơi tiếc là có vài vết xước nhỏ trên cánh tủ khi nhận.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '10/04/2025 09:15 AM',
            content:
              'Cảm ơn anh/chị đã ủng hộ shop! 🌟 Shop xin lỗi về vết xước nhỏ. Vui lòng gửi ảnh qua Zalo 0972774646 để shop hỗ trợ sửa chữa ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '06/02/2025 09:30 AM',
        rating: 5,
        content:
          'Tủ quần áo chất liệu nhựa giả gỗ đẹp, chắc chắn, giá tốt. Nhưng bao bì giao hàng hơi móp méo, may là tủ không bị ảnh hưởng nhiều.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '11/04/2025 10:00 AM',
            content:
              'Cảm ơn anh/chị đã tin tưởng shop! 😊 Shop xin lỗi vì bao bì chưa tốt. Shop sẽ kiểm tra lại vận chuyển để cải thiện. Có cần hỗ trợ thêm, anh/chị nhắn shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '07/02/2025 03:20 PM',
        rating: 4,
        content:
          'Tủ quần áo rộng rãi, nhiều ngăn tiện lợi, đúng như mô tả. Có điều lắp ráp hơi mất thời gian vì thiếu 1-2 con ốc nhỏ.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '12/04/2025 08:45 AM',
            content:
              'Cảm ơn anh/chị đã chọn sản phẩm shop! 🌼 Shop xin lỗi vì thiếu ốc. Anh/chị nhắn Zalo 0972774646, shop gửi bổ sung ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '08/02/2025 11:00 AM',
        rating: 5,
        content:
          'Tủ quần áo đẹp, chất lượng vượt mong đợi, giá rất ổn. Giao hàng đúng hẹn, chỉ có một vết xước nhẹ ở góc tủ.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '13/04/2025 09:30 AM',
            content:
              'Cảm ơn anh/chị đã yêu thích sản phẩm! 😍 Shop xin lỗi về vết xước. Vui lòng gửi ảnh qua Fanpage để shop khắc phục nhanh nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '09/02/2025 07:45 PM',
        rating: 5,
        content:
          'Tủ quần áo thiết kế tối giản, phù hợp không gian nhỏ, giá hợp lý. Nhưng giao hàng chậm hơn dự kiến 1 ngày.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '14/04/2025 10:15 AM',
            content:
              'Cảm ơn anh/chị đã ủng hộ! 🌈 Shop xin lỗi vì giao hàng chậm. Shop sẽ phối hợp vận chuyển để cải thiện. Cần hỗ trợ, anh/chị liên hệ shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '10/02/2025 02:10 PM',
        rating: 4,
        content:
          'Tủ quần áo màu trắng đẹp, chất liệu bền, giá cả phải chăng. Chỉ hơi tiếc là hướng dẫn lắp ráp hơi khó hiểu.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '15/04/2025 09:00 AM',
            content:
              'Cảm ơn anh/chị đã chọn shop! 😊 Shop xin lỗi vì hướng dẫn chưa rõ. Anh/chị nhắn Zalo, shop gửi video hướng dẫn chi tiết ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '11/02/2025 10:25 AM',
        rating: 4,
        content:
          'Tủ quần áo chắc chắn, thiết kế đẹp, phù hợp với phòng ngủ hiện đại. Có vài vết bẩn nhỏ trên bề mặt khi nhận hàng.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '16/04/2025 08:30 AM',
            content:
              'Cảm ơn anh/chị đã tin tưởng shop! 🌟 Shop xin lỗi về vết bẩn. Vui lòng gửi ảnh qua Zalo 0972774646 để shop hỗ trợ vệ sinh hoặc đổi mới ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '12/02/2025 06:50 PM',
        rating: 5,
        content:
          'Tủ quần áo rất đẹp, chất liệu tốt, giá hợp túi tiền. Giao hàng nhanh, nhưng đóng gói hơi lỏng lẻo.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '17/04/2025 09:45 AM',
            content:
              'Cảm ơn anh/chị đã yêu thích tủ! 😍 Shop xin lỗi vì đóng gói chưa tốt. Shop sẽ kiểm tra lại để cải thiện. Cần hỗ trợ, anh/chị nhắn shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '13/02/2025 01:30 PM',
        rating: 5,
        content:
          'Tủ quần áo thiết kế tinh tế, nhiều ngăn tiện dụng, giá ổn. Nhưng có một bản lề hơi lỏng sau khi lắp.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '18/04/2025 10:20 AM',
            content:
              'Cảm ơn anh/chị đã ủng hộ! 🌼 Shop xin lỗi vì bản lề. Anh/chị gửi ảnh qua Fanpage, shop hỗ trợ thay mới ngay ạ!',
            avatar: '../images/logo.svg',
          },
        ],
      },
      {
        author: 'Ẩn danh',
        date: '14/02/2025 04:15 PM',
        rating: 5,
        content:
          'Tủ quần áo đẹp, chất liệu nhựa cao cấp, giá hợp lý. Chỉ hơi bất tiện vì giao hàng trễ giờ hẹn.',
        images: [],
        videos: [],
        isAnonymous: true,
        avatar: '',
        replies: [
          {
            author: 'Nội Thất Chất Lượng Bàng Vũ',
            isAdmin: true,
            date: '19/04/2025 09:10 AM',
            content:
              'Cảm ơn anh/chị đã chọn shop! 🌈 Shop xin lỗi vì giao trễ. Shop sẽ cải thiện lịch trình vận chuyển. Cần hỗ trợ, anh/chị liên hệ shop nhé!',
            avatar: '../images/logo.svg',
          },
        ],
      },
    ],
    // Thông tin chính sách cho tab chính sách
    policies: {
      shipping:
        'Miễn phí vận chuyển trong phạm vi 10km từ cửa hàng. Phí vận chuyển sẽ được tính dựa trên khoảng cách và khối lượng sản phẩm cho các khu vực khác.',
      returns:
        'Quý khách có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm đổi trả phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng.',
      warranty:
        'Sản phẩm được bảo hành chính hãng 10 năm cho các lỗi kỹ thuật. Bảo hành không áp dụng cho các trường hợp hư hỏng do sử dụng không đúng cách hoặc tự ý sửa chữa.',
      payment:
        'Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ và các ví điện tử phổ biến như MoMo, ZaloPay.',
    },
    // Thông tin bảo quản cho tab bảo quản
    care: {
      cleaning:
        'Lau chùi sản phẩm thường xuyên bằng khăn mềm, khô hoặc hơi ẩm. Tránh sử dụng các chất tẩy rửa có tính axit hoặc kiềm mạnh.',
      sunlight:
        'Không đặt sản phẩm dưới ánh nắng mặt trời trực tiếp trong thời gian dài để tránh bạc màu và biến dạng.',
      humidity:
        'Không đặt sản phẩm ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với nước để tránh gỗ bị cong vênh, nấm mốc.',
      temperature:
        'Duy trì sản phẩm ở nhiệt độ phòng ổn định, tránh thay đổi nhiệt độ đột ngột có thể gây nứt, cong vênh.',
      tips: [
        'Nhiệt độ lý tưởng: 18-24°C',
        'Độ ẩm lý tưởng: 40-60%',
        'Sử dụng miếng lót khi đặt vật dụng nóng hoặc lạnh lên bề mặt tủ',
        'Kiểm tra và siết chặt các ốc vít định kỳ 6 tháng/lần',
        'Sử dụng sáp đánh bóng gỗ 1 năm/lần để duy trì vẻ đẹp của sản phẩm',
      ],
    },
  },

  {
    id: 56, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ Quần Áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/products/product1.png', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ quần áo QA560 là sự kết hợp hoàn hảo giữa thiết kế hiện đại và công năng vượt trội. Được chế tác từ gỗ MDF phủ melamine cao cấp với vân gỗ sồi tự nhiên, sản phẩm mang đến vẻ đẹp sang trọng và ấm áp cho không gian phòng ngủ. Thiết kế 5 cánh mở rộng rãi cùng 3 ngăn kéo tiện lợi giúp tối ưu hóa không gian lưu trữ, đáp ứng mọi nhu cầu sắp xếp quần áo và phụ kiện. Chất liệu chống ẩm mốc, chống cong vênh, đảm bảo độ bền lâu dài trong mọi điều kiện thời tiết.',
    size: '100x130x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ MDF phủ melamine vân gỗ sồi', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'BÁN CHẠY', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.9, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 657, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 75, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
    promoEndDate: '2025-04-31T00:00:00', // Ngày kết thúc khuyến mãi theo định dạng ISO, dùng để tính thời gian còn lại
    sku: 'NTBV-QA560', // Mã SKU (Stock Keeping Unit) để quản lý kho hàng và tham chiếu sản phẩm

    // Thông tin flash sale - chương trình giảm giá nhanh có thời hạn
    flashsale: {
      active: true, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/products/product1.png', // Hình ảnh 1 - Hình ảnh tổng thể sản phẩm
      'images/products/product2.png', // Hình ảnh 2 - Góc nhìn khác của sản phẩm
      'images/products/product3.png', // Hình ảnh 3 - Chi tiết sản phẩm
      'images/products/product4.png', // Hình ảnh 4 - Chi tiết sản phẩm
      'images/products/product5.png', // Hình ảnh 5 - Chi tiết sản phẩm
      'https://res.cloudinary.com/dpwsaqvl9/image/upload/v1745868300/TEST/ref8khrhh9swrazqibft.jpg',
    ],
    // Thông tin chi tiết cho tab mô tả chi tiết - hiển thị dưới dạng bảng thông số kỹ thuật
    specifications: {
      'Kích thước': '180x200x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ MDF phủ melamine vân gỗ sồi', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ sồi tự nhiên', // Màu sắc hoặc họa tiết của sản phẩm
      'Số cánh': '5 cánh mở', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '3 ngăn kéo', // Số lượng ngăn kéo của tủ
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống cong vênh, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Sang trọng', // Phong cách thiết kế của sản phẩm
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-QA560', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế 5 cánh mở rộng rãi, 3 ngăn kéo tiện lợi, Chất liệu gỗ MDF phủ melamine cao cấp, Chống ẩm mốc, Chống cong vênh, Màu vân gỗ sồi tự nhiên sang trọng',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ quần áo QA560 là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại với thiết kế sang trọng và công năng vượt trội.</p>
      <p>Được chế tác từ gỗ MDF phủ melamine cao cấp với vân gỗ sồi tự nhiên ấm áp, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền vượt trội theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế 5 cánh mở rộng rãi, tạo không gian lưu trữ tối đa</li>
        <li>3 ngăn kéo tiện lợi cho việc sắp xếp đồ lót, phụ kiện</li>
        <li>Chất liệu gỗ MDF phủ melamine cao cấp, bền chắc, chống ẩm mốc, chống cong vênh</li>
        <li>Màu vân gỗ sồi tự nhiên sang trọng, dễ dàng kết hợp với nhiều phong cách nội thất</li>
        <li>Kích thước rộng rãi, phù hợp với các phòng ngủ có diện tích vừa và lớn</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/products/product1.png" alt="Tủ quần áo QA560 - Góc nhìn tổng thể">
        <div class="image-caption">Tủ quần áo QA560 - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ quần áo QA560 được thiết kế với 5 cánh mở rộng rãi, mang đến không gian lưu trữ tối ưu cho quần áo và phụ kiện. Bên trong tủ được phân chia thành nhiều ngăn với kích thước khác nhau, giúp việc sắp xếp trở nên dễ dàng và khoa học hơn.</p>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/products/product2.png" alt="Cấu trúc bên trong tủ QA560">
        <div class="image-caption">Cấu trúc bên trong tủ QA560 với nhiều ngăn tiện lợi</div>
      </div>`,
    },
    // Thông tin đánh giá cho tab đánh giá - hiển thị dưới dạng danh sách các đánh giá từ khách hàng
    reviews: [
      {
        author: 'Nguyễn Văn Minh', // Tên người đánh giá
        date: '10/05/2025 09:15 AM', // Ngày và giờ đăng đánh giá theo định dạng DD/MM/YYYY HH:MM AM/PM
        rating: 5, // Số sao đánh giá (thang điểm từ 0-5)
        // Nội dung đánh giá
        content:
          'Tủ quần áo đẹp và chắc chắn, đúng với mô tả. Giao hàng nhanh và lắp đặt tận tình. Tôi rất hài lòng với sản phẩm này!',
        images: [
          // Mảng đường dẫn đến hình ảnh đính kèm trong đánh giá
          'images/products/product1.png',
          'images/products/product2.png',
        ],
        videos: [], // Mảng đường dẫn đến video đính kèm trong đánh giá (nếu có)
        isAnonymous: false, // Đánh dấu đánh giá ẩn danh hay không (true: ẩn danh, false: hiển thị tên)
        avatar: '../images/avt1.webp', // Đường dẫn đến ảnh đại diện của người đánh giá
        replies: [
          // Mảng các phản hồi cho đánh giá này
          {
            author: 'Nội Thất Bàng Vũ', // Tên người phản hồi
            isAdmin: true, // Đánh dấu người phản hồi là admin hay không (true: admin, false: khách hàng)
            date: '10/05/2025 14:30 PM', // Ngày và giờ phản hồi
            // Nội dung phản hồi
            content:
              'Cảm ơn anh đã tin tưởng và ủng hộ sản phẩm của chúng tôi. Chúc anh và gia đình có trải nghiệm tuyệt vời với sản phẩm!',
            avatar: '../images/logo.svg', // Đường dẫn đến ảnh đại diện của người phản hồi
          },
        ],
      },
      {
        author: 'Trần Thị Hương', // Tên người đánh giá thứ hai
        date: '05/05/2025 10:45 AM', // Ngày và giờ đăng đánh giá
        rating: 4.5, // Số sao đánh giá (4.5/5)
        // Nội dung đánh giá
        content:
          'Tủ đẹp, chất lượng tốt, màu sắc đúng như hình. Tuy nhiên thời gian giao hàng hơi lâu. Nhưng nhìn chung tôi vẫn rất hài lòng với sản phẩm.',
        images: ['images/products/product3.png'], // Một hình ảnh đính kèm
        videos: [], // Không có video đính kèm
        isAnonymous: false, // Không ẩn danh
        avatar: '../images/avt2.webp', // Ảnh đại diện của người đánh giá
        replies: [
          // Phản hồi từ cửa hàng
          {
            author: 'Nội Thất Bàng Vũ', // Tên cửa hàng
            isAdmin: true, // Đánh dấu là admin
            date: '06/05/2025 09:00 AM', // Ngày và giờ phản hồi
            // Nội dung phản hồi
            content:
              'Cảm ơn chị đã phản hồi. Chúng tôi xin lỗi về sự chậm trễ trong quá trình giao hàng. Chúng tôi sẽ cải thiện dịch vụ trong thời gian tới.',
            avatar: '../images/logo.svg', // Logo cửa hàng làm ảnh đại diện
          },
        ],
      },
    ],
    // Thông tin chính sách cho tab chính sách - hiển thị các chính sách liên quan đến sản phẩm
    policies: {
      // Chính sách vận chuyển - quy định về phí vận chuyển và phạm vi giao hàng
      shipping:
        'Miễn phí vận chuyển trong phạm vi 10km từ cửa hàng. Phí vận chuyển sẽ được tính dựa trên khoảng cách và khối lượng sản phẩm cho các khu vực khác.',
      // Chính sách đổi trả - quy định về thời gian và điều kiện đổi trả sản phẩm
      returns:
        'Quý khách có thể đổi trả sản phẩm trong vòng 7 ngày kể từ ngày nhận hàng nếu sản phẩm có lỗi từ nhà sản xuất. Sản phẩm đổi trả phải còn nguyên vẹn, không có dấu hiệu đã qua sử dụng.',
      // Chính sách bảo hành - thời gian và phạm vi bảo hành sản phẩm
      warranty:
        'Sản phẩm được bảo hành chính hãng 10 năm cho các lỗi kỹ thuật. Bảo hành không áp dụng cho các trường hợp hư hỏng do sử dụng không đúng cách hoặc tự ý sửa chữa.',
      // Phương thức thanh toán - các hình thức thanh toán được chấp nhận
      payment:
        'Chúng tôi chấp nhận thanh toán bằng tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ và các ví điện tử phổ biến như MoMo, ZaloPay.',
    },

    // Thông tin bảo quản cho tab bảo quản - hướng dẫn cách bảo quản và sử dụng sản phẩm
    care: {
      // Hướng dẫn vệ sinh sản phẩm - cách làm sạch và bảo dưỡng thường xuyên
      cleaning:
        'Lau chùi sản phẩm thường xuyên bằng khăn mềm, khô hoặc hơi ẩm. Tránh sử dụng các chất tẩy rửa có tính axit hoặc kiềm mạnh.',
      // Hướng dẫn về ánh sáng mặt trời - cách bảo vệ sản phẩm khỏi tác động của ánh nắng
      sunlight:
        'Không đặt sản phẩm dưới ánh nắng mặt trời trực tiếp trong thời gian dài để tránh bạc màu và biến dạng.',
      // Hướng dẫn về độ ẩm - cách bảo vệ sản phẩm khỏi tác động của độ ẩm
      humidity:
        'Không đặt sản phẩm ở nơi có độ ẩm cao hoặc tiếp xúc trực tiếp với nước để tránh gỗ bị cong vênh, nấm mốc.',
      // Hướng dẫn về nhiệt độ - cách bảo vệ sản phẩm khỏi tác động của nhiệt độ
      temperature:
        'Duy trì sản phẩm ở nhiệt độ phòng ổn định, tránh thay đổi nhiệt độ đột ngột có thể gây nứt, cong vênh.',
      tips: [
        // Mảng các mẹo bảo quản bổ sung - các lời khuyên hữu ích để kéo dài tuổi thọ sản phẩm
        'Nhiệt độ lý tưởng: 18-24°C', // Nhiệt độ phòng lý tưởng để bảo quản sản phẩm
        'Độ ẩm lý tưởng: 40-60%', // Độ ẩm phòng lý tưởng để bảo quản sản phẩm
        'Sử dụng miếng lót khi đặt vật dụng nóng hoặc lạnh lên bề mặt tủ', // Bảo vệ bề mặt khỏi nhiệt độ cực đoan
        'Kiểm tra và siết chặt các ốc vít định kỳ 6 tháng/lần', // Bảo dưỡng định kỳ để đảm bảo độ bền
        'Sử dụng sáp đánh bóng gỗ 1 năm/lần để duy trì vẻ đẹp của sản phẩm', // Bảo dưỡng bề mặt để giữ độ bóng
      ],
    },
  },

  // ... tiếp tục với các sản phẩm khác
];

// Trang chủ: Render sản phẩm nổi bật và khuyến mãi
if (document.getElementById('featured-products')) {
  const featuredProducts = document.getElementById('featured-products');

  // Lọc sản phẩm nổi bật dựa vào trường featured
  const featured = products.filter((p) => p.featured === true);
  // Nếu không có sản phẩm nào có trường featured = true, lấy 6 sản phẩm đầu tiên
  const featuredToShow = featured.length > 0 ? featured : products.slice(0, 6);

  featuredToShow.forEach((product) => {
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

  // Không hiển thị sản phẩm khuyến mãi ở đây vì đã được xử lý trong file promotion-new.js
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
