const products = [
  {
    id: 1, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Bàn học đôi có giá sách BHS22 - Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn học', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Bàn học đôi có giá sách BHS22 sang trọng và hiện đại :  Bàn học BHS22 là bàn học đôi kết hợp giá sách hiện đại, tiện dụng cho 2 bé học tập. Giá sách được chia khoang khoa học, bàn rộng rãi , phù hợp cho mọi nhu cầu học tập .Chất liệu gỗ công nghiệp MDF phủ melamine bề mặt được gia công kỹ lưỡng đảm bảo tính thẩm mỹ và chất lượng vượt trội.',
    size: '140x160x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Đài Loan Chinhue Plus 2.0', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'BÁN CHẠY', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.9, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 657, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 75, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
    promoEndDate: '2025-04-31T00:00:00', // Ngày kết thúc khuyến mãi theo định dạng ISO, dùng để tính thời gian còn lại
    sku: 'NTBV-QA560', // Mã SKU (Stock Keeping Unit) để quản lý kho hàng và tham chiếu sản phẩm

    // Thông tin flash sale - chương trình giảm giá nhanh có thời hạn
    flashsale: {
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV.webp', // Hình ảnh chính
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-1.webp', // Hình ảnh 1 - Hình ảnh tổng thể sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-2.webp', // Hình ảnh 2 - Góc nhìn khác của sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-3.webp', // Hình ảnh 3 - Chi tiết sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-4.webp', // Hình ảnh 4 - Chi tiết sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-5.webp', // Hình ảnh 5 - Chi tiết sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-6.webp', // Hình ảnh 6 - Chi tiết sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-7.webp', // Hình ảnh 7 - Chi tiết sản phẩm
      'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-8.webp', // Hình ảnh 8 - Chi tiết sản phẩm
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
  {
    id: 2, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ bếp', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp.jpg', // Hình ảnh chính
      'images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
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
  {
    id: 3, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng.jpg', // Hình ảnh chính
      'images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
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
  {
    id: 4, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Giường ngủ', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 0.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 0.jpg', // Hình ảnh chính
      'images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 -N 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 5, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn trang điểm', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048.jpg', // Hình ảnh chính
      'images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048 -1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 6, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ giày', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056.jpg', // Hình ảnh chính
      'images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
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
  {
    id: 7, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng.jpg', // Hình ảnh chính
      'images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 8, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn học', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/image-product/id8/ban-hoc-doi-hien-dai-NTBV.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id8/ban-hoc-doi-hien-dai-NTBV.webp', // Hình ảnh chính
      'images/image-product/id8/ban-hoc-doi-hien-dai-NTBV-1.webp', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id8/ban-hoc-doi-hien-dai-NTBV-2.webp', // Hình ảnh 2 - Chi tiết sản phẩm
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
  {
    id: 9, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ bếp', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id9/tu-bep-go-cong-nghiep-mdf-thiet-ke-hien-dai-tbm050-0123456789.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id9/tu-bep-go-cong-nghiep-mdf-thiet-ke-hien-dai-tbm050-0123456789.jpg', // Hình ảnh chính
      'images/image-product/id9/tu-bep-go-cong-nghiep-cao-cap(5101).jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id9/tu-bep-go-cong-nghiep-chat-luong-cao(9615).jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id9/tu-bep-go-cong-nghiep-mau-sac-tinh-te(3566).jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 10, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Giường ngủ', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031.jpg', // Hình ảnh chính
      'images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 11, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077.jpg', // Hình ảnh chính
      'images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 12, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp.jpg', // Hình ảnh chính
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp 4.jpg', // Hình ảnh 4 - Chi tiết sản phẩm
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
  {
    id: 13, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ giày', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057.jpg', // Hình ảnh chính
      'images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
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
  {
    id: 14, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn học', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/image-product/id14/ban-hoc-doi-hien-dai-NTBV.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id14/ban-hoc-doi-hien-dai-NTBV.webp', // Hình ảnh chính
      'images/image-product/id14/ban-hoc-doi-hien-dai-NTBV-1.webp', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id14/ban-hoc-doi-hien-dai-NTBV-2.webp', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id14/ban-hoc-doi-hien-dai-NTBV-3.webp', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 15, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ bếp', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp.jpg', // Hình ảnh chính
      'images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 16, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Giường ngủ', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938.jpg', // Hình ảnh chính
      'images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 17, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Hình ảnh chính
      'images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 18, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí.jpg', // Hình ảnh chính
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí 4.jpg', // Hình ảnh 4 - Chi tiết sản phẩm
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí 5.jpg', // Hình ảnh 5 - Chi tiết sản phẩm
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
  {
    id: 19, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn trang điểm', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478.jpg', // Hình ảnh chính
      'images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
  {
    id: 20, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ Quần Áo NTBV9874 - 5 Cánh Mở, 3 Ngăn Kéo, Nhựa Đài Loan Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
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
      active: false, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 6000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4500000, // Giá mới sau khi giảm (VNĐ)
      type: 'daily', // Loại flash sale: 'fixed' (cố định theo thời gian) hoặc 'daily' (diễn ra hàng ngày)
      endsAt: '2025-04-31T23:59:59', // Thời điểm kết thúc flash sale theo định dạng ISO
      hidePrice: false, // Ẩn/hiện giá: true (ẩn giá), false (hiển thị giá)
    },

    // Thư viện hình ảnh sản phẩm - hiển thị trong trang chi tiết sản phẩm
    gallery: [
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Hình ảnh chính
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
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
