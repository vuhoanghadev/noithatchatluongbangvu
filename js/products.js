const products = [
  {
    id: 1, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Bàn có giá sách cho bé - NTBV', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn học', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/image-product/id1/ban-co-gia-sach-cho-be-NTBV.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Bàn có giá sách cho bé NTBV là sự lựa chọn hoàn hảo cho không gian học tập của bé. Thiết kế thông minh với giá sách tích hợp giúp bé dễ dàng sắp xếp sách vở, đồ dùng học tập. Bàn được làm từ gỗ công nghiệp MDF phủ melamine cao cấp, bề mặt nhẵn mịn, chống trầy xước, dễ dàng vệ sinh. Kích thước phù hợp với lứa tuổi học sinh tiểu học, giúp bé có tư thế ngồi học đúng, bảo vệ thị lực và cột sống.',
    size: '120x75x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '5 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF phủ melamine', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.8, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 723, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 86, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '120x75x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF phủ melamine', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng kết hợp vân gỗ tự nhiên', // Màu sắc hoặc họa tiết của sản phẩm
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của bàn
      'Giá sách': 'Có giá sách tích hợp', // Tính năng giá sách tích hợp
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh',
      'Phong cách': 'Hiện đại, Thông minh', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Học sinh tiểu học, trung học cơ sở', // Đối tượng phù hợp sử dụng
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '5 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-BH001', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế thông minh với giá sách tích hợp, Bề mặt rộng rãi thoải mái cho việc học tập, Chất liệu gỗ MDF phủ melamine cao cấp, Kích thước phù hợp với lứa tuổi học sinh, Dễ dàng vệ sinh và bảo quản',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Bàn có giá sách cho bé NTBV là sự lựa chọn hoàn hảo cho không gian học tập của bé, kết hợp giữa tính thẩm mỹ và công năng vượt trội.</p>
      <p>Được chế tác từ gỗ công nghiệp MDF phủ melamine cao cấp với tông màu trắng kết hợp vân gỗ tự nhiên, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế thông minh với giá sách tích hợp, giúp bé dễ dàng sắp xếp sách vở, đồ dùng học tập</li>
        <li>Bề mặt rộng rãi thoải mái cho việc học tập, đọc sách và làm bài tập</li>
        <li>2 ngăn kéo tiện lợi giúp lưu trữ đồ dùng học tập gọn gàng</li>
        <li>Chất liệu gỗ MDF phủ melamine cao cấp, bề mặt nhẵn mịn, chống trầy xước, dễ dàng vệ sinh</li>
        <li>Kích thước phù hợp với lứa tuổi học sinh tiểu học, giúp bé có tư thế ngồi học đúng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-1.webp" alt="Bàn có giá sách cho bé - Góc nhìn tổng thể">
        <div class="image-caption">Bàn có giá sách cho bé - Góc nhìn tổng thể</div>
      </div>
      <p>Bàn học được thiết kế với các góc bo tròn an toàn, giúp bảo vệ bé khỏi những va chạm không mong muốn. Chân bàn vững chắc đảm bảo sự ổn định khi sử dụng, không bị rung lắc khi bé viết hoặc vẽ.</p>
      <h4>Lợi ích khi sử dụng:</h4>
      <ul>
        <li>Giúp bé hình thành thói quen học tập và đọc sách tốt</li>
        <li>Bảo vệ thị lực và cột sống của bé nhờ thiết kế phù hợp với chiều cao</li>
        <li>Tạo không gian học tập riêng biệt, giúp bé tập trung hơn</li>
        <li>Dạy bé cách sắp xếp đồ dùng học tập gọn gàng, ngăn nắp</li>
        <li>Tạo điểm nhấn thẩm mỹ cho không gian phòng của bé</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id1/ban-co-gia-sach-cho-be-NTBV-4.webp" alt="Bàn có giá sách cho bé - Chi tiết giá sách">
        <div class="image-caption">Chi tiết giá sách tích hợp tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hoặc phòng học của bé, dễ dàng kết hợp với các sản phẩm nội thất khác như giường ngủ, tủ quần áo để tạo nên không gian học tập và sinh hoạt hoàn chỉnh cho bé.</p>`,
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
    name: 'Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ bếp', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp là sự kết hợp hoàn hảo giữa tính thẩm mỹ và công năng. Được làm từ nhựa Đài Loan Chinhue cao cấp với bề mặt vân gỗ phối màu xám tinh tế, sản phẩm mang đến vẻ đẹp sang trọng và hiện đại cho không gian bếp. Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng giúp tối ưu hóa không gian lưu trữ, đáp ứng mọi nhu cầu sắp xếp đồ dùng nhà bếp. Chất liệu chống ẩm, chống mối mọt, dễ dàng vệ sinh và bền bỉ theo thời gian.',
    size: '240x85x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '8 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Đài Loan Chinhue cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 542, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 63, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '240x85x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Nhựa Đài Loan Chinhue cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ phối xám', // Màu sắc hoặc họa tiết của sản phẩm
      'Số cánh tủ': '6 cánh', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '4 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Kệ mở': '2 kệ mở', // Số lượng kệ mở
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Chịu nhiệt tốt',
      'Phong cách': 'Hiện đại, Tiện dụng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Căn hộ chung cư, Nhà phố', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '8 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TB002', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với nhiều ngăn kéo và kệ mở, Chất liệu nhựa Đài Loan Chinhue cao cấp bền bỉ, Khả năng chống ẩm và mối mọt tốt, Dễ dàng vệ sinh và bảo quản, Màu vân gỗ phối xám sang trọng',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp là sự kết hợp hoàn hảo giữa tính thẩm mỹ và công năng, mang đến giải pháp lưu trữ tối ưu cho không gian bếp hiện đại.</p>
      <p>Được làm từ nhựa Đài Loan Chinhue cao cấp với bề mặt vân gỗ phối màu xám tinh tế, sản phẩm không chỉ mang đến vẻ đẹp sang trọng mà còn đảm bảo độ bền vượt trội theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với nhiều ngăn kéo, kệ mở và tủ đóng, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>6 cánh tủ và 4 ngăn kéo giúp phân chia không gian lưu trữ hợp lý</li>
        <li>2 kệ mở tiện lợi để trưng bày và sử dụng các vật dụng thường xuyên</li>
        <li>Chất liệu nhựa Đài Loan Chinhue cao cấp, chống ẩm mốc, chống mối mọt, dễ dàng vệ sinh</li>
        <li>Màu vân gỗ phối xám sang trọng, dễ dàng kết hợp với nhiều phong cách nội thất</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp.jpg" alt="Tủ Bếp Nhựa Đài Loan Chinhue - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Bếp Nhựa Đài Loan Chinhue - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ bếp được thiết kế với kích thước 240x85x60cm (Rộng x Cao x Sâu), phù hợp với không gian bếp của căn hộ chung cư và nhà phố. Bề mặt tủ có khả năng chịu nhiệt tốt, an toàn khi sử dụng trong môi trường nhà bếp.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Khả năng chống ẩm và mối mọt tốt, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam</li>
        <li>Bề mặt dễ dàng vệ sinh, chỉ cần lau nhẹ bằng khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại tủ bếp làm từ gỗ tự nhiên</li>
        <li>Trọng lượng nhẹ, dễ dàng di chuyển và lắp đặt</li>
        <li>Thời gian bảo hành lên đến 8 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id2/Tủ Bếp Nhựa Đài Loan Chinhue Vân Gỗ Phối Xám Cao Cấp 1.jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian bếp hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho căn bếp của bạn. Với thiết kế thông minh và chất liệu bền bỉ, tủ bếp Nhựa Đài Loan Chinhue sẽ là người bạn đồng hành đáng tin cậy trong không gian bếp của gia đình bạn.</p>`,
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
    name: 'Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 với thiết kế cửa lùa màu trắng mang đến vẻ đẹp quý phái và sang trọng cho không gian phòng ngủ. Sản phẩm được làm từ gỗ nhựa Đài Loan cao cấp loại 1, đảm bảo độ bền và tính thẩm mỹ vượt trội. Thiết kế cửa lùa thông minh giúp tiết kiệm không gian, đặc biệt phù hợp với những căn phòng có diện tích hạn chế. Bên trong tủ được phân chia thành nhiều ngăn hợp lý, giúp việc sắp xếp quần áo và phụ kiện trở nên dễ dàng và khoa học.',
    size: '180x220x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ nhựa Đài Loan cao cấp loại 1', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'BÁN CHẠY', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.9, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 789, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 92, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '180x220x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ nhựa Đài Loan cao cấp loại 1', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Kiểu cửa': 'Cửa lùa', // Kiểu cửa của tủ
      'Số cánh': '4 cánh lùa', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Ngăn chia': '6 ngăn chia', // Số lượng ngăn chia bên trong
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Sang trọng, Quý phái', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ diện tích vừa và nhỏ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TQA003', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế cửa lùa thông minh tiết kiệm không gian, Chất liệu gỗ nhựa Đài Loan cao cấp loại 1 bền bỉ, Màu trắng sang trọng và quý phái, Nhiều ngăn chia hợp lý giúp sắp xếp đồ dùng khoa học, Khả năng chống ẩm mốc và mối mọt tốt',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 với thiết kế cửa lùa màu trắng là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp quý phái và sang trọng.</p>
      <p>Được làm từ gỗ nhựa Đài Loan cao cấp loại 1, sản phẩm không chỉ đảm bảo tính thẩm mỹ vượt trội mà còn có độ bền cao theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế cửa lùa thông minh tiết kiệm không gian, đặc biệt phù hợp với phòng ngủ có diện tích hạn chế</li>
        <li>4 cánh lùa rộng rãi, mang đến không gian lưu trữ tối ưu cho quần áo và phụ kiện</li>
        <li>2 ngăn kéo tiện lợi giúp sắp xếp đồ lót, phụ kiện gọn gàng</li>
        <li>6 ngăn chia bên trong được thiết kế hợp lý, giúp phân loại và sắp xếp đồ dùng khoa học</li>
        <li>Màu trắng tinh khôi mang đến vẻ đẹp sang trọng, quý phái cho không gian phòng ngủ</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng.jpg" alt="Tủ Quần Áo Gỗ Nhựa Đài Loan - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Quần Áo Gỗ Nhựa Đài Loan - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ quần áo được thiết kế với kích thước 180x220x60cm (Rộng x Cao x Sâu), phù hợp với không gian phòng ngủ có diện tích vừa và nhỏ. Cơ chế cửa lùa hoạt động trơn tru, êm ái, giúp việc sử dụng trở nên dễ dàng và thuận tiện.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Chất liệu gỗ nhựa Đài Loan cao cấp loại 1 có khả năng chống ẩm mốc và mối mọt tốt</li>
        <li>Bề mặt chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại tủ làm từ gỗ tự nhiên</li>
        <li>Trọng lượng nhẹ, dễ dàng di chuyển khi cần thiết</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id3/Tủ Quần Áo Gỗ Nhựa Đài Loan Cao Cấp Loại 1 - Cửa Lùa Màu Trắng Quý Phái, Sang Trọng 1.jpg" alt="Chi tiết cửa lùa và ngăn kéo">
        <div class="image-caption">Chi tiết cửa lùa và ngăn kéo tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, đặc biệt là những căn phòng có diện tích hạn chế. Với thiết kế thông minh và chất liệu bền bỉ, tủ quần áo gỗ nhựa Đài Loan sẽ là người bạn đồng hành đáng tin cậy trong không gian sống của bạn.</p>`,
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
    name: 'Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Giường ngủ', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 0.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng NTBV030 là sự kết hợp hoàn hảo giữa vẻ đẹp tự nhiên của gỗ và sự sang trọng của nệm bọc màu trắng. Sản phẩm được chế tác từ gỗ tự nhiên cao cấp, đảm bảo độ bền và tính thẩm mỹ vượt trội. Phần đầu giường được bọc nệm màu trắng tinh khôi, tạo điểm nhấn nổi bật và mang lại cảm giác thoải mái khi tựa lưng. Thiết kế hiện đại, tinh tế phù hợp với nhiều phong cách nội thất, từ hiện đại đến tân cổ điển.',
    size: '160x120x200cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ tự nhiên, nệm bọc vải cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.8, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 845, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 78, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '160x120x200cm (Rộng x Cao x Dài)', // Kích thước chi tiết của sản phẩm
      'Chất liệu khung': 'Gỗ tự nhiên', // Chất liệu khung giường
      'Chất liệu đầu giường': 'Gỗ tự nhiên bọc nệm vải cao cấp', // Chất liệu đầu giường
      'Màu sắc': 'Màu gỗ tự nhiên, đầu giường màu trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Kích thước đệm phù hợp': '160x200cm', // Kích thước đệm phù hợp
      'Hộc kéo': 'Không', // Có hộc kéo hay không
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Đầu giường bọc nệm êm ái, Khung gỗ tự nhiên chắc chắn, Chân giường cao thoáng',
      'Phong cách': 'Hiện đại, Thanh lịch', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ master, Phòng ngủ người lớn', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-GN004', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với đầu giường bọc nệm màu trắng tinh tế, Khung giường làm từ gỗ tự nhiên cao cấp chắc chắn, Kết cấu vững chãi đảm bảo độ bền theo thời gian, Phù hợp với nhiều phong cách nội thất từ hiện đại đến tân cổ điển',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp tinh tế và sự thoải mái tuyệt đối cho giấc ngủ của bạn.</p>
      <p>Được chế tác từ gỗ tự nhiên cao cấp với thiết kế đầu giường bọc nệm vải cao cấp màu trắng, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền vượt trội theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với đường nét mềm mại, tạo điểm nhấn tinh tế cho không gian phòng ngủ</li>
        <li>Đầu giường bọc nệm êm ái màu trắng, mang đến cảm giác thoải mái khi tựa lưng đọc sách hoặc xem TV</li>
        <li>Khung giường làm từ gỗ tự nhiên cao cấp, chắc chắn và bền bỉ theo thời gian</li>
        <li>Kết cấu vững chãi, đảm bảo sự ổn định và an toàn khi sử dụng</li>
        <li>Phù hợp với đệm kích thước 160x200cm, tạo không gian nghỉ ngơi rộng rãi và thoải mái</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 0.jpg" alt="Giường Ngủ Gỗ Tự Nhiên - Góc nhìn tổng thể">
        <div class="image-caption">Giường Ngủ Gỗ Tự Nhiên - Góc nhìn tổng thể</div>
      </div>
      <p>Giường ngủ được thiết kế với kích thước 160x120x200cm (Rộng x Cao x Dài), phù hợp với không gian phòng ngủ master hoặc phòng ngủ người lớn. Chiều cao từ mặt đất đến mặt giường là 35cm, tạo cảm giác thoải mái khi lên xuống giường.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Chất liệu gỗ tự nhiên cao cấp có độ bền cao, không bị mối mọt, cong vênh theo thời gian</li>
        <li>Đầu giường bọc nệm vải cao cấp màu trắng, mang đến cảm giác êm ái và sang trọng</li>
        <li>Thiết kế không hộc kéo giúp không gian phòng ngủ trở nên thoáng đãng hơn</li>
        <li>Màu gỗ tự nhiên kết hợp với đầu giường màu trắng tạo nên sự hài hòa, dễ dàng kết hợp với nhiều phong cách nội thất</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id4/Giường Ngủ Gỗ Tự Nhiên Có Bọc Nệm Đầu Giường Màu Trắng - NTBV030 - 1.jpg" alt="Chi tiết đầu giường bọc nệm">
        <div class="image-caption">Chi tiết đầu giường bọc nệm êm ái</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, mang đến không gian nghỉ ngơi thoải mái và sang trọng. Với thiết kế tinh tế và chất liệu bền bỉ, giường ngủ gỗ tự nhiên sẽ là người bạn đồng hành đáng tin cậy trong giấc ngủ của bạn.</p>`,
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
    name: 'Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn trang điểm', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch BTD048 là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại. Được chế tác từ gỗ sồi cao cấp với tông màu trắng tinh tế, sản phẩm mang đến vẻ đẹp thanh lịch và sang trọng. Thiết kế thông minh với gương lớn, nhiều ngăn kéo tiện dụng giúp bạn dễ dàng sắp xếp mỹ phẩm và phụ kiện. Bàn trang điểm còn được trang bị hệ thống đèn LED tiết kiệm năng lượng, mang lại ánh sáng hoàn hảo cho việc trang điểm.',
    size: '120x75x45cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ sồi tự nhiên sơn trắng', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 512, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 45, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '120x75x45cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ sồi tự nhiên sơn trắng', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng', // Màu sắc hoặc họa tiết của sản phẩm
      Gương: 'Gương lớn có khung gỗ', // Thông tin về gương
      'Ngăn kéo': '5 ngăn kéo', // Số lượng ngăn kéo của bàn
      'Hệ thống đèn': 'Đèn LED tích hợp', // Hệ thống đèn tích hợp
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Đèn LED tiết kiệm năng lượng, Ngăn kéo trượt êm, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Thanh lịch', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ, Phòng thay đồ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-BTD005', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại thanh lịch với tông màu trắng tinh tế, Gương lớn với khung gỗ sang trọng, Hệ thống đèn LED tích hợp cung cấp ánh sáng hoàn hảo, Nhiều ngăn kéo tiện dụng giúp sắp xếp mỹ phẩm và phụ kiện, Chất liệu gỗ sồi tự nhiên cao cấp đảm bảo độ bền',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp tinh tế và sự tiện nghi cho việc chăm sóc sắc đẹp hàng ngày.</p>
      <p>Được chế tác từ gỗ sồi tự nhiên sơn trắng cao cấp, sản phẩm không chỉ mang đến vẻ đẹp thanh lịch mà còn đảm bảo độ bền vượt trội theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại thanh lịch với tông màu trắng tinh tế, tạo điểm nhấn cho không gian phòng ngủ</li>
        <li>Gương lớn với khung gỗ sang trọng, giúp bạn dễ dàng trang điểm và chăm sóc da</li>
        <li>Hệ thống đèn LED tích hợp cung cấp ánh sáng hoàn hảo cho việc trang điểm</li>
        <li>5 ngăn kéo tiện dụng giúp bạn dễ dàng sắp xếp mỹ phẩm và phụ kiện</li>
        <li>Chất liệu gỗ sồi tự nhiên cao cấp đảm bảo độ bền theo thời gian</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048.jpg" alt="Bàn Trang Điểm Gỗ Sồi Màu Trắng - Góc nhìn tổng thể">
        <div class="image-caption">Bàn Trang Điểm Gỗ Sồi Màu Trắng - Góc nhìn tổng thể</div>
      </div>
      <p>Bàn trang điểm được thiết kế với kích thước 120x75x45cm (Rộng x Cao x Sâu), phù hợp với không gian phòng ngủ hoặc phòng thay đồ. Hệ thống đèn LED tích hợp không chỉ tiết kiệm năng lượng mà còn cung cấp ánh sáng hoàn hảo cho việc trang điểm.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Ngăn kéo trượt êm ái, giúp việc sử dụng trở nên dễ dàng và thuận tiện</li>
        <li>Bề mặt chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Tông màu trắng tinh tế dễ dàng kết hợp với nhiều phong cách nội thất</li>
        <li>Thiết kế gương lớn giúp bạn có góc nhìn toàn diện khi trang điểm</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id5/Bàn Trang Điểm Gỗ Sồi Màu Trắng Hiện Đại Thanh Lịch - BTD048 -1.jpg" alt="Chi tiết ngăn kéo và gương">
        <div class="image-caption">Chi tiết ngăn kéo và gương với đèn LED tích hợp</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hoặc phòng thay đồ hiện đại, mang đến không gian làm đẹp tiện nghi và sang trọng. Với thiết kế tinh tế và chất liệu bền bỉ, bàn trang điểm gỗ sồi màu trắng sẽ là người bạn đồng hành đáng tin cậy trong việc chăm sóc sắc đẹp hàng ngày của bạn.</p>`,
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
    name: 'Tủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ giày', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ TG056 là giải pháp lưu trữ hoàn hảo cho không gian lối vào nhà. Được chế tác từ gỗ sồi tự nhiên với tông màu vàng ấm áp, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền bỉ theo thời gian. Thiết kế thông minh với nhiều ngăn xếp giày dép khoa học, giúp bạn dễ dàng sắp xếp và tìm kiếm. Bề mặt gỗ được xử lý chống ẩm, chống mối mọt, dễ dàng vệ sinh và bảo quản.',
    size: '120x100x35cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '8 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ sồi tự nhiên màu vàng', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'BÁN CHẠY', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 598, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 67, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '120x100x35cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ sồi tự nhiên', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Màu vàng gỗ tự nhiên', // Màu sắc hoặc họa tiết của sản phẩm
      'Số tầng': '4 tầng', // Số tầng của tủ giày
      'Số đôi giày chứa được': '12-16 đôi', // Số lượng giày có thể chứa
      'Kiểu cửa': 'Cửa lật xuống', // Kiểu cửa của tủ giày
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Tiện dụng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Lối vào nhà, Hành lang, Phòng thay đồ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '8 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TG006', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với tông màu vàng gỗ tự nhiên ấm áp, Nhiều ngăn xếp giày dép khoa học, Chất liệu gỗ sồi tự nhiên bền bỉ, Bề mặt được xử lý chống ẩm và mối mọt, Dễ dàng vệ sinh và bảo quản',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ là giải pháp lưu trữ hoàn hảo cho không gian lối vào nhà, mang đến vẻ đẹp hiện đại và sự tiện nghi cho việc sắp xếp giày dép.</p>
      <p>Được chế tác từ gỗ sồi tự nhiên với tông màu vàng gỗ tự nhiên ấm áp, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền vượt trội theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với tông màu vàng gỗ tự nhiên ấm áp, tạo điểm nhấn cho không gian lối vào nhà</li>
        <li>4 tầng xếp giày dép khoa học, có thể chứa từ 12-16 đôi giày dép các loại</li>
        <li>Kiểu cửa lật xuống tiện lợi, giúp dễ dàng lấy và cất giày dép</li>
        <li>Chất liệu gỗ sồi tự nhiên bền bỉ, chống mối mọt và cong vênh theo thời gian</li>
        <li>Bề mặt được xử lý chống ẩm và trầy xước, dễ dàng vệ sinh và bảo quản</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056.jpg" alt="Tủ Giày Dép Gỗ Sồi Tự Nhiên - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Giày Dép Gỗ Sồi Tự Nhiên - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ giày được thiết kế với kích thước 120x100x35cm (Rộng x Cao x Sâu), phù hợp với không gian lối vào nhà, hành lang hoặc phòng thay đồ. Với chiều sâu chỉ 35cm, sản phẩm không chiếm nhiều diện tích nhưng vẫn đảm bảo công năng lưu trữ tối ưu.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Thiết kế thông minh giúp tối ưu hóa không gian lưu trữ giày dép</li>
        <li>Cơ chế cửa lật xuống hoạt động trơn tru, êm ái, giúp việc sử dụng trở nên dễ dàng</li>
        <li>Chất liệu gỗ sồi tự nhiên có độ bền cao, không bị mối mọt, cong vênh theo thời gian</li>
        <li>Tông màu vàng gỗ tự nhiên ấm áp dễ dàng kết hợp với nhiều phong cách nội thất</li>
        <li>Thời gian bảo hành lên đến 8 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id6/ủ Giày Dép Gỗ Sồi Tự Nhiên Màu Vàng Hiện Đại Bền Bỉ - TG056 - 1.jpg" alt="Chi tiết cửa lật và ngăn xếp giày">
        <div class="image-caption">Chi tiết cửa lật và ngăn xếp giày tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian lối vào nhà, hành lang hoặc phòng thay đồ, mang đến giải pháp lưu trữ giày dép gọn gàng và khoa học. Với thiết kế tinh tế và chất liệu bền bỉ, tủ giày dép gỗ sồi tự nhiên sẽ là người bạn đồng hành đáng tin cậy trong việc sắp xếp và bảo quản giày dép của gia đình bạn.</p>`,
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
    name: 'Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue 4 Cánh Kịch Trần Tone Vàng', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue 4 Cánh Kịch Trần Tone Vàng là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại. Với thiết kế 4 cánh kịch trần, sản phẩm tối ưu hóa không gian lưu trữ từ sàn đến trần nhà. Chất liệu nhựa Đài Loan Chinhue cao cấp đảm bảo độ bền, chống ẩm mốc và dễ dàng vệ sinh. Tông màu vàng ấm áp mang đến vẻ đẹp sang trọng và tạo điểm nhấn nổi bật cho không gian. Bên trong tủ được thiết kế thông minh với nhiều ngăn, kệ và thanh treo quần áo tiện dụng.',
    size: '200x260x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Đài Loan Chinhue cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.9, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 876, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 95, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '200x260x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Nhựa Đài Loan Chinhue cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Tone vàng', // Màu sắc hoặc họa tiết của sản phẩm
      'Kiểu thiết kế': 'Kịch trần', // Kiểu thiết kế của tủ
      'Số cánh': '4 cánh mở', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Ngăn chia': '8 ngăn chia', // Số lượng ngăn chia bên trong
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Tối ưu không gian từ sàn đến trần',
      'Phong cách': 'Hiện đại, Sang trọng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ diện tích vừa và lớn', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TQA007', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế 4 cánh kịch trần tối ưu hóa không gian lưu trữ, Chất liệu nhựa Đài Loan Chinhue cao cấp bền bỉ, Tông màu vàng ấm áp sang trọng, Nhiều ngăn chia hợp lý giúp sắp xếp đồ dùng khoa học, Khả năng chống ẩm mốc và mối mọt tốt',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue 4 Cánh Kịch Trần Tone Vàng là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp sang trọng và công năng lưu trữ vượt trội.</p>
      <p>Được làm từ nhựa Đài Loan Chinhue cao cấp với tông màu vàng ấm áp, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền vượt trội theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế 4 cánh kịch trần tối ưu hóa không gian lưu trữ từ sàn đến trần nhà</li>
        <li>Chất liệu nhựa Đài Loan Chinhue cao cấp bền bỉ, chống ẩm mốc và mối mọt</li>
        <li>Tông màu vàng ấm áp sang trọng, tạo điểm nhấn nổi bật cho không gian phòng ngủ</li>
        <li>2 ngăn kéo tiện lợi và 8 ngăn chia bên trong giúp sắp xếp đồ dùng khoa học</li>
        <li>Kích thước lớn 200x260x60cm phù hợp với phòng ngủ diện tích vừa và lớn</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng.jpg" alt="Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ quần áo được thiết kế với 4 cánh mở rộng rãi, mang đến không gian lưu trữ tối ưu cho quần áo và phụ kiện. Thiết kế kịch trần giúp tận dụng tối đa không gian từ sàn đến trần nhà, đặc biệt phù hợp với các căn hộ chung cư và nhà phố hiện đại.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Khả năng chống ẩm mốc và mối mọt tốt, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam</li>
        <li>Dễ dàng vệ sinh, chỉ cần lau nhẹ bằng khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại tủ làm từ gỗ tự nhiên</li>
        <li>Trọng lượng nhẹ, dễ dàng di chuyển khi cần thiết</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id7/Tủ Quần Áo Nhựa Đài Loan Cao Cấp Chinhue  4 Cánh Kịch Trần Tone Vàng 1.jpg" alt="Chi tiết ngăn chia bên trong tủ">
        <div class="image-caption">Chi tiết ngăn chia bên trong tủ giúp sắp xếp đồ dùng khoa học</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho không gian sống. Với thiết kế thông minh và chất liệu bền bỉ, tủ quần áo nhựa Đài Loan Chinhue sẽ là người bạn đồng hành đáng tin cậy trong không gian sống của bạn.</p>`,
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
    name: 'Bàn học đôi hiện đại - NTBV', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn học', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/image-product/id8/ban-hoc-doi-hien-dai-NTBV.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Bàn học đôi hiện đại NTBV là giải pháp tối ưu cho không gian học tập của hai người. Thiết kế hiện đại, gọn gàng với bề mặt rộng rãi, tạo không gian làm việc thoải mái. Sản phẩm được làm từ gỗ công nghiệp MDF phủ melamine cao cấp, đảm bảo độ bền và tính thẩm mỹ. Bàn được thiết kế với các ngăn kéo tiện dụng, giúp lưu trữ đồ dùng học tập gọn gàng. Chân bàn chắc chắn, đảm bảo sự ổn định khi sử dụng.',
    size: '160x75x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '5 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF phủ melamine', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'BÁN CHẠY', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 612, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 82, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '160x75x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF phủ melamine', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng kết hợp vân gỗ tự nhiên', // Màu sắc hoặc họa tiết của sản phẩm
      'Kiểu thiết kế': 'Bàn học đôi', // Kiểu thiết kế của bàn
      'Ngăn kéo': '4 ngăn kéo (2 bên mỗi bên)', // Số lượng ngăn kéo của bàn
      'Số người sử dụng': '2 người', // Số người có thể sử dụng cùng lúc
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh, Chân bàn chắc chắn',
      'Phong cách': 'Hiện đại, Tiện dụng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng học, Phòng làm việc, Phòng ngủ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '5 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-BH008', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại gọn gàng phù hợp cho 2 người sử dụng, Bề mặt rộng rãi tạo không gian làm việc thoải mái, Nhiều ngăn kéo tiện dụng giúp lưu trữ đồ dùng học tập, Chân bàn chắc chắn đảm bảo sự ổn định khi sử dụng, Chất liệu gỗ công nghiệp MDF cao cấp bền bỉ',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Bàn học đôi hiện đại NTBV là giải pháp tối ưu cho không gian học tập và làm việc của hai người, mang đến sự tiện nghi và thẩm mỹ cho không gian sống.</p>
      <p>Được làm từ gỗ công nghiệp MDF phủ melamine cao cấp với tông màu trắng kết hợp vân gỗ tự nhiên, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại gọn gàng phù hợp cho 2 người sử dụng cùng lúc</li>
        <li>Bề mặt rộng rãi 160x60cm tạo không gian làm việc thoải mái</li>
        <li>4 ngăn kéo tiện dụng (2 bên mỗi bên) giúp lưu trữ đồ dùng học tập gọn gàng</li>
        <li>Chất liệu gỗ công nghiệp MDF phủ melamine cao cấp, bền bỉ và dễ dàng vệ sinh</li>
        <li>Chân bàn chắc chắn đảm bảo sự ổn định khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id8/ban-hoc-doi-hien-dai-NTBV.webp" alt="Bàn học đôi hiện đại - Góc nhìn tổng thể">
        <div class="image-caption">Bàn học đôi hiện đại - Góc nhìn tổng thể</div>
      </div>
      <p>Bàn học được thiết kế với kích thước 160x75x60cm (Rộng x Cao x Sâu), phù hợp với không gian phòng học, phòng làm việc hoặc phòng ngủ. Chiều cao 75cm được tính toán phù hợp với chiều cao trung bình của người Việt Nam, giúp người dùng có tư thế ngồi thoải mái khi học tập và làm việc.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Khả năng chống ẩm mốc tốt, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam</li>
        <li>Thiết kế thông minh giúp tối ưu hóa không gian sử dụng</li>
        <li>Tông màu trắng kết hợp vân gỗ tự nhiên dễ dàng kết hợp với nhiều phong cách nội thất</li>
        <li>Thời gian bảo hành lên đến 5 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id8/ban-hoc-doi-hien-dai-NTBV-1.webp" alt="Chi tiết ngăn kéo và bề mặt bàn">
        <div class="image-caption">Chi tiết ngăn kéo và bề mặt bàn</div>
      </div>
      <p>Sản phẩm phù hợp với không gian học tập và làm việc của gia đình có hai con hoặc vợ chồng cùng làm việc tại nhà. Với thiết kế tinh tế và chất liệu bền bỉ, bàn học đôi hiện đại NTBV sẽ là người bạn đồng hành đáng tin cậy trong quá trình học tập và làm việc của bạn.</p>`,
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
    name: 'Tủ bếp gỗ công nghiệp MDF thiết kế hiện đại - TBM050', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ bếp', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id9/tu-bep-go-cong-nghiep-mdf-thiet-ke-hien-dai-tbm050-0123456789.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ bếp gỗ công nghiệp MDF thiết kế hiện đại TBM050 là sự lựa chọn hoàn hảo cho không gian bếp hiện đại. Sản phẩm được làm từ gỗ công nghiệp MDF cao cấp, đảm bảo độ bền và khả năng chống ẩm tốt. Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng giúp tối ưu hóa không gian lưu trữ. Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh. Tủ bếp được thiết kế theo phong cách hiện đại, tối giản với tông màu trung tính, dễ dàng kết hợp với nhiều phong cách nội thất khác nhau.',
    size: '260x85x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '8 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF phủ melamine', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 487, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 42, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '260x85x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF phủ melamine', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trung tính (xám, trắng, vân gỗ)', // Màu sắc hoặc họa tiết của sản phẩm
      'Số cánh tủ': '8 cánh', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '5 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Kệ mở': '3 kệ mở', // Số lượng kệ mở
      'Bề mặt bếp': 'Đá nhân tạo chịu nhiệt', // Chất liệu bề mặt bếp
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống cong vênh, Bề mặt chống trầy xước, Chịu nhiệt tốt',
      'Phong cách': 'Hiện đại, Tối giản', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Căn hộ chung cư, Nhà phố', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '8 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TB009', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng, Chất liệu gỗ công nghiệp MDF cao cấp bền bỉ, Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh, Tông màu trung tính dễ dàng kết hợp với nhiều phong cách nội thất, Khả năng chống ẩm và chịu nhiệt tốt',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ bếp gỗ công nghiệp MDF thiết kế hiện đại TBM050 là sự lựa chọn hoàn hảo cho không gian bếp hiện đại, mang đến vẻ đẹp tinh tế và công năng vượt trội.</p>
      <p>Được làm từ gỗ công nghiệp MDF cao cấp phủ melamine với tông màu trung tính (xám, trắng, vân gỗ), sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>8 cánh tủ và 5 ngăn kéo giúp phân chia không gian lưu trữ hợp lý</li>
        <li>3 kệ mở tiện lợi để trưng bày và sử dụng các vật dụng thường xuyên</li>
        <li>Bề mặt bếp làm từ đá nhân tạo chịu nhiệt, đảm bảo an toàn khi sử dụng</li>
        <li>Chất liệu gỗ công nghiệp MDF cao cấp, chống ẩm mốc, chống cong vênh</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id9/tu-bep-go-cong-nghiep-mdf-thiet-ke-hien-dai-tbm050-0123456789.jpg" alt="Tủ bếp gỗ công nghiệp MDF - Góc nhìn tổng thể">
        <div class="image-caption">Tủ bếp gỗ công nghiệp MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ bếp được thiết kế với kích thước 260x85x60cm (Rộng x Cao x Sâu), phù hợp với không gian bếp của căn hộ chung cư và nhà phố. Tông màu trung tính dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Khả năng chống ẩm và chịu nhiệt tốt, đặc biệt phù hợp với môi trường nhà bếp</li>
        <li>Thiết kế tối giản nhưng đầy đủ công năng, tối ưu hóa không gian sử dụng</li>
        <li>Hệ thống ray trượt và bản lề cao cấp, đảm bảo độ bền và sự êm ái khi sử dụng</li>
        <li>Thời gian bảo hành lên đến 8 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id9/tu-bep-go-cong-nghiep-chat-luong-cao(9615).jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian bếp hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho căn bếp của bạn. Với thiết kế thông minh và chất liệu bền bỉ, tủ bếp gỗ công nghiệp MDF sẽ là người bạn đồng hành đáng tin cậy trong không gian bếp của gia đình bạn.</p>`,
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
    name: 'Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Giường ngủ', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng NTBV031 là sự kết hợp hoàn hảo giữa vẻ đẹp tự nhiên và sự sang trọng. Được chế tác từ gỗ sồi tự nhiên cao cấp, sản phẩm mang đến vẻ đẹp ấm áp và sang trọng cho không gian phòng ngủ. Thiết kế tinh tế với đường nét mềm mại, tạo nên sự hài hòa và thanh lịch. Bề mặt gỗ được xử lý kỹ lưỡng, đảm bảo độ bền và tính thẩm mỹ vượt trội. Giường được thiết kế chắc chắn, đảm bảo sự thoải mái và an toàn khi sử dụng.',
    size: '180x120x200cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ sồi tự nhiên cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.9, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 923, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 89, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '180x120x200cm (Rộng x Cao x Dài)', // Kích thước chi tiết của sản phẩm
      'Chất liệu khung': 'Gỗ sồi tự nhiên cao cấp', // Chất liệu khung giường
      'Chất liệu đầu giường': 'Gỗ sồi tự nhiên', // Chất liệu đầu giường
      'Màu sắc': 'Màu gỗ sồi tự nhiên', // Màu sắc hoặc họa tiết của sản phẩm
      'Kích thước đệm phù hợp': '180x200cm', // Kích thước đệm phù hợp
      'Hộc kéo': 'Không', // Có hộc kéo hay không
      'Chiều cao từ mặt đất': '35cm', // Chiều cao từ mặt đất đến mặt giường
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Khung gỗ tự nhiên chắc chắn, Kết cấu vững chãi, Bề mặt gỗ xử lý kỹ lưỡng',
      'Phong cách': 'Hiện đại, Sang trọng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ master, Phòng ngủ người lớn', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-GN010', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế tinh tế với đường nét mềm mại, Chất liệu gỗ sồi tự nhiên cao cấp bền bỉ, Bề mặt gỗ được xử lý kỹ lưỡng đảm bảo độ bền, Kết cấu chắc chắn đảm bảo sự thoải mái và an toàn, Phù hợp với nhiều phong cách nội thất',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp tinh tế và sự thoải mái tuyệt đối cho giấc ngủ của bạn.</p>
      <p>Được chế tác từ gỗ sồi tự nhiên cao cấp, sản phẩm không chỉ mang đến vẻ đẹp sang trọng mà còn đảm bảo độ bền vượt trội theo thời gian, tạo nên không gian nghỉ ngơi đẳng cấp cho gia chủ.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế tinh tế với đường nét mềm mại, tạo điểm nhấn sang trọng cho không gian phòng ngủ</li>
        <li>Chất liệu gỗ sồi tự nhiên cao cấp, bền bỉ và không bị mối mọt, cong vênh theo thời gian</li>
        <li>Bề mặt gỗ được xử lý kỹ lưỡng, mang đến vẻ đẹp tự nhiên và cảm giác ấm áp</li>
        <li>Kết cấu chắc chắn, đảm bảo sự thoải mái và an toàn khi sử dụng</li>
        <li>Kích thước 180x200cm phù hợp với không gian phòng ngủ master hoặc phòng ngủ người lớn</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031.jpg" alt="Giường Ngủ Gỗ Sồi Tự Nhiên - Góc nhìn tổng thể">
        <div class="image-caption">Giường Ngủ Gỗ Sồi Tự Nhiên - Góc nhìn tổng thể</div>
      </div>
      <p>Giường ngủ được thiết kế với kích thước 180x120x200cm (Rộng x Cao x Dài), phù hợp với không gian phòng ngủ master hoặc phòng ngủ người lớn. Chiều cao từ mặt đất đến mặt giường là 35cm, tạo cảm giác thoải mái khi lên xuống giường.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Vẻ đẹp tự nhiên của gỗ sồi mang đến không gian ấm cúng và sang trọng</li>
        <li>Thiết kế không hộc kéo giúp không gian phòng ngủ trở nên thoáng đãng hơn</li>
        <li>Khung giường chắc chắn, đảm bảo sự ổn định và an toàn khi sử dụng</li>
        <li>Dễ dàng kết hợp với nhiều phong cách nội thất từ hiện đại đến tân cổ điển</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id10/Giường Ngủ Gỗ Sồi Tự Nhiên Cao Cấp, Sang Trọng - NTBV031 - 1.jpg" alt="Chi tiết đầu giường">
        <div class="image-caption">Chi tiết đầu giường với đường nét tinh tế</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, mang đến không gian nghỉ ngơi thoải mái và sang trọng. Với thiết kế tinh tế và chất liệu bền bỉ, giường ngủ gỗ sồi tự nhiên sẽ là người bạn đồng hành đáng tin cậy trong giấc ngủ của bạn, đồng thời nâng tầm không gian sống của gia đình.</p>`,
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
    name: 'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế KTV077 là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại. Được làm từ gỗ công nghiệp MDF cao cấp, sản phẩm đảm bảo độ bền và tính thẩm mỹ vượt trội. Thiết kế thông minh kết hợp giữa kệ mở và hộc kéo tiện dụng, giúp tối ưu hóa không gian lưu trữ. Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh. Kệ tivi được thiết kế với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách.',
    size: '180x45x40cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.8, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 532, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 58, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '180x45x40cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ tự nhiên kết hợp màu trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của kệ
      'Kệ mở': '3 kệ mở', // Số lượng kệ mở
      'Kích thước TV phù hợp': 'Lên đến 65 inch', // Kích thước TV phù hợp
      'Khả năng chịu lực': 'Lên đến 50kg', // Khả năng chịu lực của kệ
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh, Thiết kế thông minh',
      'Phong cách': 'Hiện đại, Tinh tế', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng khách, Phòng giải trí', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-KTV011', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế thông minh kết hợp giữa kệ mở và hộc kéo, Chất liệu gỗ công nghiệp MDF cao cấp bền bỉ, Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh, Đường nét tinh tế tạo điểm nhấn cho không gian, Khả năng chịu lực tốt phù hợp với nhiều loại TV',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại, mang đến vẻ đẹp tinh tế và công năng vượt trội.</p>
      <p>Được làm từ gỗ công nghiệp MDF cao cấp với tông màu vân gỗ tự nhiên kết hợp màu trắng, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế thông minh kết hợp giữa kệ mở và hộc kéo, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>2 ngăn kéo tiện lợi giúp cất giữ các vật dụng nhỏ như điều khiển, đĩa DVD, phụ kiện</li>
        <li>3 kệ mở rộng rãi để trưng bày và sử dụng các thiết bị điện tử như đầu thu, loa</li>
        <li>Chất liệu gỗ công nghiệp MDF cao cấp, bền bỉ và chống ẩm mốc, chống cong vênh</li>
        <li>Khả năng chịu lực lên đến 50kg, phù hợp với nhiều loại TV có kích thước lên đến 65 inch</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077.jpg" alt="Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể">
        <div class="image-caption">Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Kệ tivi được thiết kế với kích thước 180x45x40cm (Rộng x Cao x Sâu), phù hợp với không gian phòng khách hoặc phòng giải trí. Tông màu vân gỗ tự nhiên kết hợp màu trắng dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Thiết kế tối giản nhưng đầy đủ công năng, tối ưu hóa không gian sử dụng</li>
        <li>Đường nét tinh tế tạo điểm nhấn nổi bật cho không gian phòng khách</li>
        <li>Hệ thống ray trượt và bản lề cao cấp, đảm bảo độ bền và sự êm ái khi sử dụng</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id11/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Kết Hợp Hộc Kéo Tinh Tế - KTV077 - 1.jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng khách hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho không gian sống. Với thiết kế thông minh và chất liệu bền bỉ, kệ tivi gỗ công nghiệp MDF sẽ là người bạn đồng hành đáng tin cậy trong không gian giải trí của gia đình bạn.</p>`,
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
    name: 'Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại. Được làm từ nhựa Ecoplast cao cấp với bề mặt giả vân gỗ sồi màu nâu sang trọng, sản phẩm mang đến vẻ đẹp tự nhiên và ấm áp. Thiết kế cửa lùa thông minh giúp tiết kiệm không gian, đặc biệt phù hợp với những căn phòng có diện tích hạn chế. Bên trong tủ được phân chia thành nhiều ngăn hợp lý, giúp việc sắp xếp quần áo và phụ kiện trở nên dễ dàng và khoa học.',
    size: '180x220x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Ecoplast cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'BÁN CHẠY', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.8, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 745, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 83, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '180x220x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Nhựa Ecoplast cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Màu nâu giả vân gỗ sồi', // Màu sắc hoặc họa tiết của sản phẩm
      'Kiểu cửa': 'Cửa lùa', // Kiểu cửa của tủ
      'Số cánh': '3 cánh lùa', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Ngăn chia': '5 ngăn chia', // Số lượng ngăn chia bên trong
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Tiện dụng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ diện tích vừa và nhỏ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TQA012', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế cửa lùa thông minh tiết kiệm không gian, Chất liệu nhựa Ecoplast cao cấp bền bỉ, Bề mặt giả vân gỗ sồi màu nâu sang trọng, Nhiều ngăn chia hợp lý giúp sắp xếp đồ dùng khoa học, Khả năng chống ẩm mốc và mối mọt tốt',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp tự nhiên và công năng vượt trội.</p>
      <p>Được làm từ nhựa Ecoplast cao cấp với bề mặt giả vân gỗ sồi màu nâu sang trọng, sản phẩm không chỉ mang đến vẻ đẹp tự nhiên và ấm áp mà còn đảm bảo độ bền theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế cửa lùa thông minh tiết kiệm không gian, đặc biệt phù hợp với phòng ngủ có diện tích hạn chế</li>
        <li>3 cánh lùa rộng rãi, mang đến không gian lưu trữ tối ưu cho quần áo và phụ kiện</li>
        <li>2 ngăn kéo tiện lợi giúp sắp xếp đồ lót, phụ kiện gọn gàng</li>
        <li>5 ngăn chia bên trong được thiết kế hợp lý, giúp phân loại và sắp xếp đồ dùng khoa học</li>
        <li>Chất liệu nhựa Ecoplast cao cấp bền bỉ, chống ẩm mốc và mối mọt</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp.jpg" alt="Tủ Quần Áo Nhựa Ecoplast - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Quần Áo Nhựa Ecoplast - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ quần áo được thiết kế với kích thước 180x220x60cm (Rộng x Cao x Sâu), phù hợp với không gian phòng ngủ có diện tích vừa và nhỏ. Cơ chế cửa lùa hoạt động trơn tru, êm ái, giúp việc sử dụng trở nên dễ dàng và thuận tiện.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt giả vân gỗ sồi màu nâu sang trọng, mang đến vẻ đẹp tự nhiên và ấm áp</li>
        <li>Khả năng chống ẩm mốc và mối mọt tốt, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm</li>
        <li>Dễ dàng vệ sinh, chỉ cần lau nhẹ bằng khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại tủ làm từ gỗ tự nhiên</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id12/Tủ Quần Áo Nhựa Ecoplast Cửa Lùa Màu Nâu Gỉa Vân Gỗ Sồi Cao Cấp 1.jpg" alt="Chi tiết cửa lùa và ngăn kéo">
        <div class="image-caption">Chi tiết cửa lùa và ngăn kéo tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, đặc biệt là những căn phòng có diện tích hạn chế. Với thiết kế thông minh và chất liệu bền bỉ, tủ quần áo nhựa Ecoplast sẽ là người bạn đồng hành đáng tin cậy trong việc sắp xếp và bảo quản quần áo, phụ kiện của bạn.</p>`,
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
    name: 'Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ giày', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt TG057 là giải pháp lưu trữ hoàn hảo cho không gian lối vào nhà. Được làm từ gỗ MDF phủ sơn cao cấp với vân gỗ bắt mắt, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền bỉ theo thời gian. Thiết kế thông minh với nhiều ngăn xếp giày dép khoa học, giúp bạn dễ dàng sắp xếp và tìm kiếm. Bề mặt phủ sơn chống trầy xước, chống ẩm mốc, dễ dàng vệ sinh và bảo quản.',
    size: '120x100x35cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ MDF phủ sơn vân gỗ', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 478, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 53, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '120x90x35cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ MDF phủ sơn bền bỉ', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ tự nhiên', // Màu sắc hoặc họa tiết của sản phẩm
      'Số tầng': '3 tầng', // Số tầng của tủ giày
      'Số đôi giày chứa được': '10-12 đôi', // Số lượng giày có thể chứa
      'Kiểu cửa': 'Cửa lật xuống', // Kiểu cửa của tủ giày
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Tiện dụng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Lối vào nhà, Hành lang, Phòng thay đồ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TG013', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với vân gỗ bắt mắt, Nhiều ngăn xếp giày dép khoa học, Chất liệu gỗ MDF phủ sơn bền bỉ, Bề mặt được xử lý chống ẩm và mối mọt, Dễ dàng vệ sinh và bảo quản',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt là giải pháp lưu trữ hoàn hảo cho không gian lối vào nhà, mang đến vẻ đẹp hiện đại và sự tiện nghi cho việc sắp xếp giày dép.</p>
      <p>Được làm từ gỗ MDF phủ sơn cao cấp với vân gỗ bắt mắt, sản phẩm không chỉ mang đến vẻ đẹp thẩm mỹ mà còn đảm bảo độ bền theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với vân gỗ bắt mắt, tạo điểm nhấn cho không gian lối vào nhà</li>
        <li>3 tầng xếp giày dép khoa học, có thể chứa từ 10-12 đôi giày dép các loại</li>
        <li>Kiểu cửa lật xuống tiện lợi, giúp dễ dàng lấy và cất giày dép</li>
        <li>Chất liệu gỗ MDF phủ sơn bền bỉ, chống ẩm mốc và mối mọt</li>
        <li>Bề mặt được xử lý chống trầy xước, dễ dàng vệ sinh và bảo quản</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057.jpg" alt="Tủ Giày Dép Gỗ MDF - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Giày Dép Gỗ MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ giày được thiết kế với kích thước 120x90x35cm (Rộng x Cao x Sâu), phù hợp với không gian lối vào nhà, hành lang hoặc phòng thay đồ. Với chiều sâu chỉ 35cm, sản phẩm không chiếm nhiều diện tích nhưng vẫn đảm bảo công năng lưu trữ tối ưu.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Thiết kế thông minh giúp tối ưu hóa không gian lưu trữ giày dép</li>
        <li>Cơ chế cửa lật xuống hoạt động trơn tru, êm ái, giúp việc sử dụng trở nên dễ dàng</li>
        <li>Chất liệu gỗ MDF phủ sơn có khả năng chống ẩm mốc và mối mọt tốt</li>
        <li>Vân gỗ bắt mắt dễ dàng kết hợp với nhiều phong cách nội thất</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id13/Tủ Giày Dép Gỗ MDF Phủ Sơn Bền Bỉ Vân Gỗ Bắt Mắt - TG057 - 1.jpg" alt="Chi tiết cửa lật và ngăn xếp giày">
        <div class="image-caption">Chi tiết cửa lật và ngăn xếp giày tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian lối vào nhà, hành lang hoặc phòng thay đồ, mang đến giải pháp lưu trữ giày dép gọn gàng và khoa học. Với thiết kế tinh tế và chất liệu bền bỉ, tủ giày dép gỗ MDF sẽ là người bạn đồng hành đáng tin cậy trong việc sắp xếp và bảo quản giày dép của gia đình bạn.</p>`,
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
    name: 'Bàn Học Đôi Nhựa Chinhue 2.0 Plus - NTBV', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn học', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image: 'images/image-product/id14/ban-hoc-doi-hien-dai-NTBV.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Bàn học đôi hiện đại NTBV là giải pháp tối ưu cho không gian học tập của hai người. Thiết kế hiện đại, gọn gàng với bề mặt rộng rãi, tạo không gian làm việc thoải mái. Sản phẩm được làm từ nhựa Chinhue 2.0 Plus cao cấp, đảm bảo độ bền và tính thẩm mỹ. Bàn được thiết kế với các ngăn kéo tiện dụng, giúp lưu trữ đồ dùng học tập gọn gàng. Chân bàn chắc chắn, đảm bảo sự ổn định khi sử dụng.',
    size: '160x75x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '5 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Chinhue 2.0 Plus', // Chất liệu chính của sản phẩm
    promotion: 'Ưu Đãi Giảm 20%', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 645, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 81, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
    promoEndDate: '2025-05-06T00:00:00', // Ngày kết thúc khuyến mãi theo định dạng ISO, dùng để tính thời gian còn lại
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
      'Kích thước': '160x75x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Nhựa Chinhue 2.0 Plus cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng kết hợp vân gỗ', // Màu sắc hoặc họa tiết của sản phẩm
      'Kiểu thiết kế': 'Bàn học đôi', // Kiểu thiết kế của bàn
      'Ngăn kéo': '4 ngăn kéo (2 bên mỗi bên)', // Số lượng ngăn kéo của bàn
      'Số người sử dụng': '2 người', // Số người có thể sử dụng cùng lúc
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh, Chân bàn chắc chắn',
      'Phong cách': 'Hiện đại, Tiện dụng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng học, Phòng làm việc, Phòng ngủ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '5 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-BH014', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại gọn gàng phù hợp cho 2 người sử dụng, Bề mặt rộng rãi tạo không gian làm việc thoải mái, Nhiều ngăn kéo tiện dụng giúp lưu trữ đồ dùng học tập, Chân bàn chắc chắn đảm bảo sự ổn định khi sử dụng, Chất liệu nhựa Chinhue 2.0 Plus cao cấp bền bỉ',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Bàn Học Đôi Nhựa Chinhue 2.0 Plus là giải pháp tối ưu cho không gian học tập và làm việc của hai người, mang đến sự tiện nghi và thẩm mỹ cho không gian sống.</p>
      <p>Được làm từ nhựa Chinhue 2.0 Plus cao cấp với tông màu trắng kết hợp vân gỗ tự nhiên, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại gọn gàng phù hợp cho 2 người sử dụng cùng lúc</li>
        <li>Bề mặt rộng rãi 160x60cm tạo không gian làm việc thoải mái</li>
        <li>4 ngăn kéo tiện dụng (2 bên mỗi bên) giúp lưu trữ đồ dùng học tập gọn gàng</li>
        <li>Chất liệu nhựa Chinhue 2.0 Plus cao cấp, bền bỉ và dễ dàng vệ sinh</li>
        <li>Chân bàn chắc chắn đảm bảo sự ổn định khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id14/ban-hoc-doi-hien-dai-NTBV.webp" alt="Bàn học đôi hiện đại - Góc nhìn tổng thể">
        <div class="image-caption">Bàn học đôi hiện đại - Góc nhìn tổng thể</div>
      </div>
      <p>Bàn học được thiết kế với kích thước 160x75x60cm (Rộng x Cao x Sâu), phù hợp với không gian phòng học, phòng làm việc hoặc phòng ngủ. Chiều cao 75cm được tính toán phù hợp với chiều cao trung bình của người Việt Nam, giúp người dùng có tư thế ngồi thoải mái khi học tập và làm việc.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Chất liệu nhựa Chinhue 2.0 Plus có khả năng chống ẩm mốc và mối mọt tốt</li>
        <li>Bề mặt chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại bàn làm từ gỗ tự nhiên</li>
        <li>Trọng lượng nhẹ, dễ dàng di chuyển khi cần thiết</li>
        <li>Thời gian bảo hành lên đến 5 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id14/ban-hoc-doi-hien-dai-NTBV-1.webp" alt="Chi tiết ngăn kéo và bề mặt bàn">
        <div class="image-caption">Chi tiết ngăn kéo và bề mặt bàn</div>
      </div>
      <p>Sản phẩm phù hợp với không gian học tập và làm việc của gia đình có hai con hoặc vợ chồng cùng làm việc tại nhà. Với thiết kế tinh tế và chất liệu bền bỉ, bàn học đôi nhựa Chinhue 2.0 Plus sẽ là người bạn đồng hành đáng tin cậy trong quá trình học tập và làm việc của bạn.</p>`,
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
    name: 'Tủ Bếp Nhựa Đài Loan 2.0 Plus Màu Trắng Phối Xám Cao Cấp', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ bếp', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp là sự lựa chọn hoàn hảo cho không gian bếp hiện đại. Được làm từ nhựa Đài Lona 2.0 Plus cao cấp với tông màu trắng phối xám tinh tế, sản phẩm mang đến vẻ đẹp sang trọng và hiện đại. Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng giúp tối ưu hóa không gian lưu trữ, đáp ứng mọi nhu cầu sắp xếp đồ dùng nhà bếp. Chất liệu chống ẩm, chống mối mọt, dễ dàng vệ sinh và bền bỉ theo thời gian.',
    size: '240x85x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '8 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Đài Lona 2.0 Plus cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 521, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 48, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '240x85x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Nhựa Đài Lona 2.0 Plus cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng phối xám', // Màu sắc hoặc họa tiết của sản phẩm
      'Số cánh tủ': '6 cánh', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '4 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Kệ mở': '2 kệ mở', // Số lượng kệ mở
      'Bề mặt bếp': 'Đá nhân tạo chịu nhiệt', // Chất liệu bề mặt bếp
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống cong vênh, Bề mặt chống trầy xước, Chịu nhiệt tốt',
      'Phong cách': 'Hiện đại, Tối giản', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Căn hộ chung cư, Nhà phố', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '8 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TB015', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng, Chất liệu nhựa Đài Lona 2.0 Plus cao cấp bền bỉ, Bề mặt chống trầy xước, dễ dàng vệ sinh, Tông màu trắng phối xám hiện đại và sang trọng, Khả năng chống ẩm và chịu nhiệt tốt',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp là sự lựa chọn hoàn hảo cho không gian bếp hiện đại, mang đến vẻ đẹp tinh tế và công năng vượt trội.</p>
      <p>Được làm từ nhựa Đài Lona 2.0 Plus cao cấp với tông màu trắng phối xám tinh tế, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế thông minh với nhiều ngăn kéo, kệ mở và tủ đóng, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>6 cánh tủ và 4 ngăn kéo giúp phân chia không gian lưu trữ hợp lý</li>
        <li>2 kệ mở tiện lợi để trưng bày và sử dụng các vật dụng thường xuyên</li>
        <li>Bề mặt bếp làm từ đá nhân tạo chịu nhiệt, đảm bảo an toàn khi sử dụng</li>
        <li>Chất liệu nhựa Đài Lona 2.0 Plus cao cấp, chống ẩm mốc, chống cong vênh</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp.jpg" alt="Tủ Bếp Nhựa Đài Lona 2.0 Plus - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Bếp Nhựa Đài Lona 2.0 Plus - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ bếp được thiết kế với kích thước 240x85x60cm (Rộng x Cao x Sâu), phù hợp với không gian bếp của căn hộ chung cư và nhà phố. Tông màu trắng phối xám dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Khả năng chống ẩm mốc và mối mọt tốt, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam</li>
        <li>Bề mặt dễ dàng vệ sinh, chỉ cần lau nhẹ bằng khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại tủ bếp làm từ gỗ tự nhiên</li>
        <li>Trọng lượng nhẹ, dễ dàng di chuyển và lắp đặt</li>
        <li>Thời gian bảo hành lên đến 8 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id15/Tủ Bếp Nhựa Đài Lona 2.0 Plus Màu Trắng Phối Xám Cao Cấp 1.jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian bếp hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho căn bếp của bạn. Với thiết kế thông minh và chất liệu bền bỉ, tủ bếp nhựa Đài Lona 2.0 Plus sẽ là người bạn đồng hành đáng tin cậy trong không gian bếp của gia đình bạn.</p>`,
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
    name: 'Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Giường ngủ', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường NTBV2938 là sự kết hợp hoàn hảo giữa vẻ đẹp tự nhiên của gỗ sồi và sự sang trọng của nệm bọc. Sản phẩm được chế tác từ gỗ sồi tự nhiên cao cấp, đảm bảo độ bền và tính thẩm mỹ vượt trội. Phần đầu giường được bọc nệm êm ái, tạo điểm nhấn nổi bật và mang lại cảm giác thoải mái khi tựa lưng. Thiết kế hiện đại, tinh tế phù hợp với nhiều phong cách nội thất, từ hiện đại đến tân cổ điển.',
    size: '160x120x200cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ sồi tự nhiên, nệm bọc vải cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.8, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 712, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 68, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'Kích thước': '160x120x200cm (Rộng x Cao x Dài)', // Kích thước chi tiết của sản phẩm
      'Chất liệu khung': 'Gỗ sồi tự nhiên cao cấp', // Chất liệu khung giường
      'Chất liệu đầu giường': 'Gỗ sồi tự nhiên bọc nệm vải cao cấp', // Chất liệu đầu giường
      'Màu sắc': 'Màu gỗ tự nhiên, đầu giường màu trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Kích thước đệm phù hợp': '160x200cm', // Kích thước đệm phù hợp
      'Hộc kéo': 'Không', // Có hộc kéo hay không
      'Chiều cao từ mặt đất': '35cm', // Chiều cao từ mặt đất đến mặt giường
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Đầu giường bọc nệm êm ái, Khung gỗ tự nhiên chắc chắn, Kết cấu vững chãi',
      'Phong cách': 'Hiện đại, Thanh lịch', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ master, Phòng ngủ người lớn', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-GN016', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với đầu giường bọc nệm sang trọng, Chất liệu gỗ sồi tự nhiên cao cấp bền bỉ, Kết cấu chắc chắn đảm bảo độ bền theo thời gian, Đầu giường bọc nệm êm ái tạo cảm giác thoải mái khi tựa lưng, Phù hợp với nhiều phong cách nội thất',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp tinh tế và sự thoải mái tuyệt đối cho giấc ngủ của bạn.</p>
      <p>Được chế tác từ gỗ sồi tự nhiên cao cấp với thiết kế đầu giường bọc nệm vải cao cấp, sản phẩm không chỉ mang đến vẻ đẹp sang trọng mà còn đảm bảo độ bền vượt trội theo thời gian, tạo nên không gian nghỉ ngơi đẳng cấp cho gia chủ.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với đầu giường bọc nệm sang trọng, tạo điểm nhấn tinh tế cho không gian phòng ngủ</li>
        <li>Khung giường làm từ gỗ sồi tự nhiên cao cấp, chắc chắn và bền bỉ theo thời gian</li>
        <li>Đầu giường bọc nệm vải cao cấp, mang đến cảm giác êm ái khi tựa lưng đọc sách hoặc xem TV</li>
        <li>Kết cấu vững chãi, đảm bảo sự ổn định và an toàn khi sử dụng</li>
        <li>Phù hợp với đệm kích thước 160x200cm, tạo không gian nghỉ ngơi rộng rãi và thoải mái</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938.jpg" alt="Giường Ngủ Gỗ Sồi Tự Nhiên - Góc nhìn tổng thể">
        <div class="image-caption">Giường Ngủ Gỗ Sồi Tự Nhiên - Góc nhìn tổng thể</div>
      </div>
      <p>Giường ngủ được thiết kế với kích thước 160x120x200cm (Rộng x Cao x Dài), phù hợp với không gian phòng ngủ master hoặc phòng ngủ người lớn. Chiều cao từ mặt đất đến mặt giường là 35cm, tạo cảm giác thoải mái khi lên xuống giường.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Vẻ đẹp tự nhiên của gỗ sồi kết hợp với nệm bọc tạo nên sự hài hòa và sang trọng</li>
        <li>Đầu giường bọc nệm êm ái, tạo cảm giác thoải mái khi tựa lưng</li>
        <li>Thiết kế không hộc kéo giúp không gian phòng ngủ trở nên thoáng đãng hơn</li>
        <li>Dễ dàng kết hợp với nhiều phong cách nội thất từ hiện đại đến tân cổ điển</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id16/Giường Ngủ Gỗ Sồi Tự Nhiên Có Bọc Nệm Đầu Giường - NTBV2938 - 1.jpg" alt="Chi tiết đầu giường bọc nệm">
        <div class="image-caption">Chi tiết đầu giường bọc nệm êm ái</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, mang đến không gian nghỉ ngơi thoải mái và sang trọng. Với thiết kế tinh tế và chất liệu bền bỉ, giường ngủ gỗ sồi tự nhiên sẽ là người bạn đồng hành đáng tin cậy trong giấc ngủ của bạn, đồng thời nâng tầm không gian sống của gia đình.</p>`,
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
    name: 'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại KTV075 là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại. Được làm từ gỗ công nghiệp MDF cao cấp, sản phẩm đảm bảo độ bền và tính thẩm mỹ vượt trội. Thiết kế thông minh với nhiều ngăn kệ tiện dụng, giúp tối ưu hóa không gian lưu trữ. Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh. Kệ tivi được thiết kế với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách.',
    size: '180x45x40cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính của sản phẩm
    promotion: 'Ưu Đãi Đặc Biệt Tháng 5', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 567, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 61, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
    promoEndDate: '2025-05-31T00:00:00', // Ngày kết thúc khuyến mãi theo định dạng ISO, dùng để tính thời gian còn lại
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
      'Kích thước': '180x45x40cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ tự nhiên kết hợp màu trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của kệ
      'Kệ mở': '3 kệ mở', // Số lượng kệ mở
      'Kích thước TV phù hợp': 'Lên đến 65 inch', // Kích thước TV phù hợp
      'Khả năng chịu lực': 'Lên đến 50kg', // Khả năng chịu lực của kệ
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh, Thiết kế thông minh',
      'Phong cách': 'Hiện đại, Tinh tế', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng khách, Phòng giải trí', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-KTV017', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với đường nét tinh tế, Chất liệu gỗ công nghiệp MDF cao cấp bền bỉ, Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh, Kết hợp hài hòa giữa kệ mở và ngăn kéo, Khả năng chịu lực tốt phù hợp với nhiều loại TV',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại, mang đến vẻ đẹp tinh tế và công năng vượt trội.</p>
      <p>Được làm từ gỗ công nghiệp MDF cao cấp với tông màu vân gỗ tự nhiên kết hợp màu trắng, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, tạo điểm nhấn nổi bật cho không gian phòng khách.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách</li>
        <li>2 ngăn kéo tiện lợi giúp cất giữ các vật dụng nhỏ như điều khiển, đĩa DVD, phụ kiện</li>
        <li>3 kệ mở rộng rãi để trưng bày và sử dụng các thiết bị điện tử như đầu thu, loa</li>
        <li>Chất liệu gỗ công nghiệp MDF cao cấp, bền bỉ và chống ẩm mốc, chống cong vênh</li>
        <li>Khả năng chịu lực lên đến 50kg, phù hợp với nhiều loại TV có kích thước lên đến 65 inch</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg" alt="Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể">
        <div class="image-caption">Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Kệ tivi được thiết kế với kích thước 180x45x40cm (Rộng x Cao x Sâu), phù hợp với không gian phòng khách hoặc phòng giải trí. Tông màu vân gỗ tự nhiên kết hợp màu trắng dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Thiết kế tối giản nhưng đầy đủ công năng, tối ưu hóa không gian sử dụng</li>
        <li>Kết hợp hài hòa giữa kệ mở và ngăn kéo, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>Hệ thống ray trượt và bản lề cao cấp, đảm bảo độ bền và sự êm ái khi sử dụng</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id17/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 1.jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng khách hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho không gian sống. Với thiết kế thông minh và chất liệu bền bỉ, kệ tivi gỗ công nghiệp MDF sẽ là người bạn đồng hành đáng tin cậy trong không gian giải trí của gia đình bạn.</p>`,
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
    name: 'Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Tủ quần áo', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí là sự kết hợp hoàn hảo giữa công năng và thẩm mỹ. Được làm từ nhựa Đài Loan cao cấp, sản phẩm đảm bảo độ bền và tính thẩm mỹ vượt trội. Thiết kế 4 cánh thông minh kết hợp với kệ trang trí tích hợp, vừa đáp ứng nhu cầu lưu trữ vừa tạo điểm nhấn nổi bật cho không gian phòng ngủ. Bên trong tủ được phân chia thành nhiều ngăn hợp lý, giúp việc sắp xếp quần áo và phụ kiện trở nên dễ dàng và khoa học.',
    size: '180x220x60cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '10 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Nhựa Đài Loan cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'HOT', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.8, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 698, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 87, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
    promoEndDate: '2025-04-31T00:00:00', // Ngày kết thúc khuyến mãi theo định dạng ISO, dùng để tính thời gian còn lại
    sku: 'NTBV-QA560', // Mã SKU (Stock Keeping Unit) để quản lý kho hàng và tham chiếu sản phẩm

    // Thông tin flash sale - chương trình giảm giá nhanh có thời hạn
    flashsale: {
      active: true, // Trạng thái kích hoạt flash sale (true: đang diễn ra, false: không có)
      discountPercent: 25, // Phần trăm giảm giá (%)
      oldPrice: 7000000, // Giá gốc trước khi giảm (VNĐ)
      newPrice: 4600000, // Giá mới sau khi giảm (VNĐ)
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
      'Kích thước': '180x220x60cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Nhựa Đài Loan cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng kết hợp vân gỗ', // Màu sắc hoặc họa tiết của sản phẩm
      'Kiểu thiết kế': 'Tủ quần áo kết hợp kệ trang trí', // Kiểu thiết kế của tủ
      'Số cánh': '4 cánh mở', // Số lượng cánh cửa của tủ
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của tủ
      'Kệ trang trí': 'Có', // Có kệ trang trí hay không
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Chống ẩm mốc, Chống mối mọt, Dễ dàng vệ sinh, Bề mặt chống trầy xước',
      'Phong cách': 'Hiện đại, Đa năng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ diện tích vừa và lớn', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '10 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-TQA018', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại kết hợp kệ trang trí tạo điểm nhấn, Chất liệu nhựa Đài Loan cao cấp bền bỉ, Bề mặt trắng kết hợp vân gỗ sang trọng, Nhiều ngăn chia hợp lý giúp sắp xếp đồ dùng khoa học, Khả năng chống ẩm mốc và mối mọt tốt',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí là sự kết hợp hoàn hảo giữa công năng và thẩm mỹ, mang đến giải pháp lưu trữ tối ưu cho không gian phòng ngủ hiện đại.</p>
      <p>Được làm từ nhựa Đài Loan cao cấp với tông màu trắng kết hợp vân gỗ tinh tế, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm tại Việt Nam.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với 4 cánh mở rộng rãi, tạo không gian lưu trữ tối đa</li>
        <li>Kệ trang trí tích hợp giúp trưng bày các vật dụng trang trí, ảnh gia đình hoặc sách</li>
        <li>2 ngăn kéo tiện lợi giúp sắp xếp đồ lót, phụ kiện gọn gàng</li>
        <li>Nhiều ngăn chia bên trong được thiết kế hợp lý, giúp phân loại và sắp xếp đồ dùng khoa học</li>
        <li>Chất liệu nhựa Đài Loan cao cấp bền bỉ, chống ẩm mốc và mối mọt</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí.jpg" alt="Tủ Quần Áo Nhựa Đài Loan - Góc nhìn tổng thể">
        <div class="image-caption">Tủ Quần Áo Nhựa Đài Loan - Góc nhìn tổng thể</div>
      </div>
      <p>Tủ quần áo được thiết kế với kích thước 180x220x60cm (Rộng x Cao x Sâu), phù hợp với không gian phòng ngủ có diện tích vừa và lớn. Tông màu trắng kết hợp vân gỗ dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Kệ trang trí tích hợp tạo điểm nhấn nổi bật cho không gian phòng ngủ</li>
        <li>Khả năng chống ẩm mốc và mối mọt tốt, đặc biệt phù hợp với điều kiện khí hậu nhiệt đới ẩm</li>
        <li>Bề mặt dễ dàng vệ sinh, chỉ cần lau nhẹ bằng khăn ẩm</li>
        <li>Không bị cong vênh, biến dạng theo thời gian như các loại tủ làm từ gỗ tự nhiên</li>
        <li>Thời gian bảo hành lên đến 10 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id18/Tủ Quần Áo Nhựa Đài Loan Cao Cấp 4 Cánh Tích Hợp Kệ Trang Trí 1.jpg" alt="Chi tiết kệ trang trí tích hợp">
        <div class="image-caption">Chi tiết kệ trang trí tích hợp</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho không gian sống. Với thiết kế thông minh và chất liệu bền bỉ, tủ quần áo nhựa Đài Loan sẽ là người bạn đồng hành đáng tin cậy trong không gian sống của bạn.</p>`,
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
    name: 'Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Bàn trang điểm', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng BTD0478 là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại. Được chế tác từ gỗ MDF cao cấp, sản phẩm mang đến vẻ đẹp tinh tế và sang trọng. Thiết kế đa năng với gương lớn, nhiều ngăn kéo tiện dụng giúp bạn dễ dàng sắp xếp mỹ phẩm và phụ kiện. Bàn trang điểm còn được trang bị hệ thống đèn LED tiết kiệm năng lượng, mang lại ánh sáng hoàn hảo cho việc trang điểm.',
    size: '120x75x45cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ MDF cao cấp', // Chất liệu chính của sản phẩm
    promotion: 'Ưu Đãi Giảm 30%', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 498, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 43, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
    promoEndDate: '2025-05-10T00:00:00', // Ngày kết thúc khuyến mãi theo định dạng ISO, dùng để tính thời gian còn lại
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
      'Kích thước': '120x75x45cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ MDF cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Trắng kết hợp vân gỗ', // Màu sắc hoặc họa tiết của sản phẩm
      Gương: 'Gương lớn có khung gỗ', // Thông tin về gương
      'Ngăn kéo': '4 ngăn kéo', // Số lượng ngăn kéo của bàn
      'Hệ thống đèn': 'Không', // Hệ thống đèn tích hợp
      'Kiểu thiết kế': 'Đa năng, hiện đại', // Kiểu thiết kế của bàn
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Ngăn kéo trượt êm, Bề mặt chống trầy xước, Dễ dàng vệ sinh',
      'Phong cách': 'Hiện đại, Đa năng', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng ngủ, Phòng thay đồ', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-BTD019', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại đa năng phù hợp nhiều không gian, Gương lớn với khung gỗ sang trọng, Nhiều ngăn kéo tiện dụng giúp sắp xếp mỹ phẩm và phụ kiện, Chất liệu gỗ MDF cao cấp đảm bảo độ bền, Bề mặt chống trầy xước, dễ dàng vệ sinh',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng là sự lựa chọn hoàn hảo cho không gian phòng ngủ hiện đại, mang đến vẻ đẹp tinh tế và sự tiện nghi cho việc chăm sóc sắc đẹp hàng ngày.</p>
      <p>Được chế tác từ gỗ MDF cao cấp với tông màu trắng kết hợp vân gỗ tinh tế, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, tạo điểm nhấn nổi bật cho không gian phòng ngủ.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại đa năng phù hợp với nhiều không gian sống</li>
        <li>Gương lớn với khung gỗ sang trọng, giúp bạn dễ dàng trang điểm và chăm sóc da</li>
        <li>4 ngăn kéo tiện dụng giúp bạn dễ dàng sắp xếp mỹ phẩm và phụ kiện</li>
        <li>Chất liệu gỗ MDF cao cấp đảm bảo độ bền theo thời gian</li>
        <li>Bề mặt chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478.jpg" alt="Bàn Trang Điểm Gỗ MDF - Góc nhìn tổng thể">
        <div class="image-caption">Bàn Trang Điểm Gỗ MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Bàn trang điểm được thiết kế với kích thước 120x75x45cm (Rộng x Cao x Sâu), phù hợp với không gian phòng ngủ hoặc phòng thay đồ. Tông màu trắng kết hợp vân gỗ dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Ngăn kéo trượt êm ái, giúp việc sử dụng trở nên dễ dàng và thuận tiện</li>
        <li>Thiết kế gương lớn giúp bạn có góc nhìn toàn diện khi trang điểm</li>
        <li>Bề mặt rộng rãi tạo không gian thoải mái cho việc đặt các sản phẩm làm đẹp</li>
        <li>Tông màu trắng kết hợp vân gỗ tạo nên sự hài hòa và sang trọng</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id19/Bàn Trang Điểm Gỗ MDF Thiết Kế Hiện Đại, Đa Năng - BTD0478 - 1.jpg" alt="Chi tiết ngăn kéo và gương">
        <div class="image-caption">Chi tiết ngăn kéo và gương</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng ngủ hoặc phòng thay đồ hiện đại, mang đến không gian làm đẹp tiện nghi và sang trọng. Với thiết kế tinh tế và chất liệu bền bỉ, bàn trang điểm gỗ MDF sẽ là người bạn đồng hành đáng tin cậy trong việc chăm sóc sắc đẹp hàng ngày của bạn.</p>`,
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
    name: 'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại KTV075 là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại. Được làm từ gỗ công nghiệp MDF cao cấp, sản phẩm đảm bảo độ bền và tính thẩm mỹ vượt trội. Thiết kế thông minh với nhiều ngăn kệ tiện dụng, giúp tối ưu hóa không gian lưu trữ. Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh. Kệ tivi được thiết kế với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách.',
    size: '180x45x40cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 589, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 65, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg', // Hình ảnh chính
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 1.jpg', // Hình ảnh 1 - Chi tiết sản phẩm
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 2.jpg', // Hình ảnh 2 - Chi tiết sản phẩm
      'images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 3.jpg', // Hình ảnh 3 - Chi tiết sản phẩm
    ],
    // Thông tin chi tiết cho tab mô tả chi tiết - hiển thị dưới dạng bảng thông số kỹ thuật
    specifications: {
      'Kích thước': '180x45x40cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ tự nhiên kết hợp màu trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của kệ
      'Kệ mở': '3 kệ mở', // Số lượng kệ mở
      'Kích thước TV phù hợp': 'Lên đến 65 inch', // Kích thước TV phù hợp
      'Khả năng chịu lực': 'Lên đến 50kg', // Khả năng chịu lực của kệ
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh, Thiết kế thông minh',
      'Phong cách': 'Hiện đại, Tinh tế', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng khách, Phòng giải trí', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-KTV020', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với đường nét tinh tế, Chất liệu gỗ công nghiệp MDF cao cấp bền bỉ, Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh, Kết hợp hài hòa giữa kệ mở và ngăn kéo, Khả năng chịu lực tốt phù hợp với nhiều loại TV',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại, mang đến vẻ đẹp tinh tế và công năng vượt trội.</p>
      <p>Được làm từ gỗ công nghiệp MDF cao cấp với tông màu vân gỗ tự nhiên kết hợp màu trắng, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, tạo điểm nhấn nổi bật cho không gian phòng khách.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách</li>
        <li>2 ngăn kéo tiện lợi giúp cất giữ các vật dụng nhỏ như điều khiển, đĩa DVD, phụ kiện</li>
        <li>3 kệ mở rộng rãi để trưng bày và sử dụng các thiết bị điện tử như đầu thu, loa</li>
        <li>Chất liệu gỗ công nghiệp MDF cao cấp, bền bỉ và chống ẩm mốc, chống cong vênh</li>
        <li>Khả năng chịu lực lên đến 50kg, phù hợp với nhiều loại TV có kích thước lên đến 65 inch</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg" alt="Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể">
        <div class="image-caption">Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Kệ tivi được thiết kế với kích thước 180x45x40cm (Rộng x Cao x Sâu), phù hợp với không gian phòng khách hoặc phòng giải trí. Tông màu vân gỗ tự nhiên kết hợp màu trắng dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Thiết kế tối giản nhưng đầy đủ công năng, tối ưu hóa không gian sử dụng</li>
        <li>Kết hợp hài hòa giữa kệ mở và ngăn kéo, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>Hệ thống ray trượt và bản lề cao cấp, đảm bảo độ bền và sự êm ái khi sử dụng</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 1.jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng khách hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho không gian sống. Với thiết kế thông minh và chất liệu bền bỉ, kệ tivi gỗ công nghiệp MDF sẽ là người bạn đồng hành đáng tin cậy trong không gian giải trí của gia đình bạn.</p>`,
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
    id: 21, // Mã số định danh duy nhất của sản phẩm, sử dụng để tham chiếu trong hệ thống
    name: 'Tủ quần áo kết hợp bàn trang điểm - nhựa đài loan cao cấp - KTV075', // Tên đầy đủ của sản phẩm, nên bao gồm các đặc điểm chính
    category: 'Kệ tivi', // Danh mục sản phẩm, sử dụng để phân loại và lọc sản phẩm
    image:
      'https://res.cloudinary.com/dpwsaqvl9/image/upload/v1746440746/noithatbangvu/id21/tu-quan-ao-ket-hop-ban-trang-diem-combo-phong-ngu-03_she57t.webp', // Đường dẫn đến hình ảnh chính của sản phẩm, hiển thị trong danh sách sản phẩm
    reviewCode: 'NTBV2056', // Mã bình luận cho sản phẩm, sử dụng để quản lý đánh giá và bình luận
    featured: false, // Đánh dấu sản phẩm nổi bật, sẽ được hiển thị ở trang chủ hoặc các vị trí đặc biệt
    // Mô tả ngắn gọn về sản phẩm, hiển thị trong danh sách sản phẩm và trang chi tiết
    description:
      'Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại KTV075 là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại. Được làm từ gỗ công nghiệp MDF cao cấp, sản phẩm đảm bảo độ bền và tính thẩm mỹ vượt trội. Thiết kế thông minh với nhiều ngăn kệ tiện dụng, giúp tối ưu hóa không gian lưu trữ. Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh. Kệ tivi được thiết kế với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách.',
    size: '180x45x40cm', // Kích thước sản phẩm theo định dạng Rộng x Cao x Sâu (cm)
    warranty: '7 năm', // Thời gian bảo hành của sản phẩm
    price: 'Liên Hệ', // Giá sản phẩm, có thể là số hoặc chuỗi như "Liên Hệ" nếu không hiển thị giá cố định
    material: 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính của sản phẩm
    promotion: '', // Thông tin khuyến mãi, hiển thị như badge trên sản phẩm
    tag: 'MỚI', // Nhãn đánh dấu sản phẩm (Mới, Bán chạy, Hot, v.v.)
    rating: 4.7, // Điểm đánh giá trung bình của sản phẩm, thang điểm từ 0-5
    views: 589, // Số lượt xem sản phẩm, dùng để thống kê và sắp xếp theo độ phổ biến
    soldCount: 65, // Số lượng đã bán, dùng để thống kê và hiển thị độ phổ biến
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
      'https://res.cloudinary.com/dpwsaqvl9/image/upload/v1746440746/noithatbangvu/id21/tu-quan-ao-ket-hop-ban-trang-diem-combo-phong-ngu-03_she57t.webp', // Hình ảnh chính
      'https://res.cloudinary.com/dpwsaqvl9/image/upload/v1746440746/noithatbangvu/id21/tu-quan-ao-ket-hop-ban-trang-diem-combo-phong-ngu-01_z3hbe2.webp', // Hình ảnh 1 - Chi tiết sản phẩm
      'https://res.cloudinary.com/dpwsaqvl9/image/upload/v1746440746/noithatbangvu/id21/tu-quan-ao-ket-hop-ban-trang-diem-combo-phong-ngu-02_r6jfao.webp', // Hình ảnh 2 - Chi tiết sản phẩm
    ],
    // Thông tin chi tiết cho tab mô tả chi tiết - hiển thị dưới dạng bảng thông số kỹ thuật
    specifications: {
      'Kích thước': '180x45x40cm (Rộng x Cao x Sâu)', // Kích thước chi tiết của sản phẩm
      'Chất liệu': 'Gỗ công nghiệp MDF cao cấp', // Chất liệu chính và phụ của sản phẩm
      'Màu sắc': 'Vân gỗ tự nhiên kết hợp màu trắng', // Màu sắc hoặc họa tiết của sản phẩm
      'Ngăn kéo': '2 ngăn kéo', // Số lượng ngăn kéo của kệ
      'Kệ mở': '3 kệ mở', // Số lượng kệ mở
      'Kích thước TV phù hợp': 'Lên đến 65 inch', // Kích thước TV phù hợp
      'Khả năng chịu lực': 'Lên đến 50kg', // Khả năng chịu lực của kệ
      // Các tính năng nổi bật của sản phẩm
      'Tính năng đặc biệt':
        'Bề mặt chống trầy xước, Chống ẩm mốc, Dễ dàng vệ sinh, Thiết kế thông minh',
      'Phong cách': 'Hiện đại, Tinh tế', // Phong cách thiết kế của sản phẩm
      'Phù hợp': 'Phòng khách, Phòng giải trí', // Không gian phù hợp
      'Xuất xứ': 'Việt Nam', // Nơi sản xuất sản phẩm
      'Thời gian bảo hành': '7 năm', // Thời gian bảo hành của sản phẩm
      'Mã sản phẩm': 'NTBV-KTV020', // Mã sản phẩm để tham chiếu
      // Tóm tắt các điểm nổi bật của sản phẩm
      'ĐIỂM NỔI BẬT':
        'Thiết kế hiện đại với đường nét tinh tế, Chất liệu gỗ công nghiệp MDF cao cấp bền bỉ, Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh, Kết hợp hài hòa giữa kệ mở và ngăn kéo, Khả năng chịu lực tốt phù hợp với nhiều loại TV',
    },

    // Mô tả chi tiết sản phẩm - hiển thị dưới dạng nội dung HTML có định dạng
    detailedDescription: {
      content: `<p>Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại là sự lựa chọn hoàn hảo cho không gian phòng khách hiện đại, mang đến vẻ đẹp tinh tế và công năng vượt trội.</p>
      <p>Được làm từ gỗ công nghiệp MDF cao cấp với tông màu vân gỗ tự nhiên kết hợp màu trắng, sản phẩm không chỉ mang đến vẻ đẹp hiện đại mà còn đảm bảo độ bền theo thời gian, tạo điểm nhấn nổi bật cho không gian phòng khách.</p>
      <h4>Đặc điểm nổi bật:</h4>
      <ul>
        <li>Thiết kế hiện đại với đường nét tinh tế, tạo điểm nhấn nổi bật cho không gian phòng khách</li>
        <li>2 ngăn kéo tiện lợi giúp cất giữ các vật dụng nhỏ như điều khiển, đĩa DVD, phụ kiện</li>
        <li>3 kệ mở rộng rãi để trưng bày và sử dụng các thiết bị điện tử như đầu thu, loa</li>
        <li>Chất liệu gỗ công nghiệp MDF cao cấp, bền bỉ và chống ẩm mốc, chống cong vênh</li>
        <li>Khả năng chịu lực lên đến 50kg, phù hợp với nhiều loại TV có kích thước lên đến 65 inch</li>
      </ul>
      <!-- Khối hiển thị hình ảnh với chú thích - sử dụng class product-image-showcase -->
      <div class="product-image-showcase">
        <img src="images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075.jpg" alt="Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể">
        <div class="image-caption">Kệ Tivi Gỗ Công Nghiệp MDF - Góc nhìn tổng thể</div>
      </div>
      <p>Kệ tivi được thiết kế với kích thước 180x45x40cm (Rộng x Cao x Sâu), phù hợp với không gian phòng khách hoặc phòng giải trí. Tông màu vân gỗ tự nhiên kết hợp màu trắng dễ dàng kết hợp với nhiều phong cách nội thất, từ hiện đại đến tối giản.</p>
      <h4>Ưu điểm vượt trội:</h4>
      <ul>
        <li>Bề mặt phủ melamine chống trầy xước, dễ dàng vệ sinh chỉ với khăn ẩm</li>
        <li>Thiết kế tối giản nhưng đầy đủ công năng, tối ưu hóa không gian sử dụng</li>
        <li>Kết hợp hài hòa giữa kệ mở và ngăn kéo, đáp ứng đa dạng nhu cầu lưu trữ</li>
        <li>Hệ thống ray trượt và bản lề cao cấp, đảm bảo độ bền và sự êm ái khi sử dụng</li>
        <li>Thời gian bảo hành lên đến 7 năm, đảm bảo sự an tâm khi sử dụng</li>
      </ul>
      <!-- Khối hiển thị hình ảnh thứ hai với chú thích -->
      <div class="product-image-showcase">
        <img src="images/image-product/id20/Kệ Tivi Gỗ Công Nghiệp MDF Cao Cấp Thiết Kế Hiện Đại - KTV075 - 1.jpg" alt="Chi tiết ngăn kéo và kệ mở">
        <div class="image-caption">Chi tiết ngăn kéo và kệ mở tiện lợi</div>
      </div>
      <p>Sản phẩm phù hợp với không gian phòng khách hiện đại, mang đến giải pháp lưu trữ tối ưu và nâng cao tính thẩm mỹ cho không gian sống. Với thiết kế thông minh và chất liệu bền bỉ, kệ tivi gỗ công nghiệp MDF sẽ là người bạn đồng hành đáng tin cậy trong không gian giải trí của gia đình bạn.</p>`,
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
