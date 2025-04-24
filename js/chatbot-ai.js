/**
 * Chatbot AI thông minh cho Nội Thất Chất Lượng Bàng Vũ
 * Tích hợp dữ liệu từ products.js và blog.js để cung cấp câu trả lời thông minh
 */

// Khởi tạo biến toàn cục
let chatbotData = {
  products: [], // Sẽ được điền từ products.js
  blogPosts: [], // Sẽ được điền từ blog.js
  categories: [], // Danh sách các danh mục sản phẩm
  blogCategories: [], // Danh sách các danh mục bài viết
  materials: [], // Danh sách các chất liệu
  chatHistory: [], // Lịch sử chat
  userPreferences: {}, // Lưu trữ sở thích người dùng
  isInitialized: false,

  // Dữ liệu kiến thức nội thất
  interiorKnowledge: {
    // Phong cách thiết kế
    styles: [
      {
        name: 'Hiện đại',
        description:
          'Phong cách hiện đại đề cao sự đơn giản, đường nét tinh tế và không gian thoáng đãng. Sử dụng vật liệu như kính, kim loại và gỗ công nghiệp.',
        materials: ['Gỗ công nghiệp', 'Kính', 'Kim loại', 'Nhựa cao cấp'],
        colors: ['Trắng', 'Đen', 'Xám', 'Nâu trung tính'],
      },
      {
        name: 'Tân cổ điển',
        description:
          'Phong cách tân cổ điển kết hợp giữa nét đẹp cổ điển và sự tiện nghi hiện đại. Đường nét thanh lịch, hoa văn tinh tế nhưng không quá cầu kỳ.',
        materials: ['Gỗ tự nhiên', 'Da', 'Đá cẩm thạch', 'Đồng'],
        colors: ['Kem', 'Be', 'Nâu gỗ', 'Vàng nhạt'],
      },
      {
        name: 'Minimalist',
        description:
          'Phong cách tối giản đề cao công năng và sự đơn giản. Không gian ít đồ đạc, màu sắc trung tính, đường nét đơn giản và rõ ràng.',
        materials: ['Gỗ sáng màu', 'Kim loại', 'Kính', 'Bê tông'],
        colors: ['Trắng', 'Xám', 'Đen', 'Màu gỗ tự nhiên'],
      },
      {
        name: 'Scandinavian',
        description:
          'Phong cách Bắc Âu chú trọng vào sự ấm áp, tự nhiên và chức năng. Màu sắc sáng, vật liệu tự nhiên và không gian thoáng đãng.',
        materials: ['Gỗ sồi', 'Len', 'Da', 'Vải tự nhiên'],
        colors: ['Trắng', 'Xám nhạt', 'Xanh pastel', 'Màu gỗ tự nhiên'],
      },
      {
        name: 'Industrial',
        description:
          'Phong cách công nghiệp lấy cảm hứng từ nhà máy và kho xưởng. Đặc trưng bởi vật liệu thô, không gian mở và chi tiết kỹ thuật.',
        materials: ['Kim loại', 'Gỗ tái chế', 'Bê tông', 'Gạch trần'],
        colors: ['Xám', 'Đen', 'Nâu gỉ', 'Xanh navy'],
      },
    ],

    // Kiến thức về chất liệu
    materialInfo: {
      'Gỗ tự nhiên':
        'Bền, đẹp theo thời gian, thân thiện với môi trường nhưng giá thành cao và cần bảo dưỡng định kỳ.',
      'Gỗ công nghiệp':
        'Giá thành hợp lý, đa dạng màu sắc, ít cong vênh nhưng độ bền thấp hơn gỗ tự nhiên.',
      MDF: 'Bề mặt mịn, dễ gia công, chống ẩm tốt, phù hợp với nhiều không gian nội thất.',
      Melamine:
        'Bề mặt phủ melamine chống trầy xước, chống ẩm, dễ lau chùi, giá thành hợp lý.',
      Acrylic:
        'Bề mặt bóng gương, màu sắc tươi sáng, dễ lau chùi nhưng dễ trầy xước.',
      Laminate:
        'Bền, chống trầy xước tốt, đa dạng màu sắc và vân gỗ, giá thành hợp lý.',
      Veneer:
        'Lớp gỗ tự nhiên mỏng dán trên gỗ công nghiệp, vẻ đẹp của gỗ tự nhiên với giá thành hợp lý hơn.',
    },

    // Mẹo bảo quản nội thất
    maintenanceTips: [
      'Lau chùi đồ gỗ bằng khăn mềm, tránh hóa chất tẩy rửa mạnh.',
      'Đặt đồ nội thất tránh ánh nắng trực tiếp để tránh phai màu và nứt nẻ.',
      'Sử dụng miếng lót khi đặt vật dụng nóng lên bề mặt đồ nội thất.',
      'Kiểm tra và siết chặt ốc vít định kỳ 6 tháng một lần.',
      'Đối với đồ gỗ tự nhiên, nên đánh bóng và phủ dầu bảo vệ 1-2 lần/năm.',
      'Xoay chuyển nệm và đệm ghế sofa định kỳ để đảm bảo độ mòn đều.',
      'Vệ sinh bụi bẩn thường xuyên, đặc biệt là các khe kẽ và góc khuất.',
    ],

    // Xu hướng thiết kế nội thất
    trends: [
      'Nội thất đa chức năng, tiết kiệm không gian cho nhà nhỏ.',
      'Sử dụng vật liệu tự nhiên và thân thiện với môi trường.',
      'Kết hợp công nghệ thông minh vào đồ nội thất.',
      'Màu sắc trung tính kết hợp với điểm nhấn màu sắc nổi bật.',
      'Đồ nội thất có đường nét mềm mại, hữu cơ thay vì góc cạnh.',
      'Không gian xanh với cây cảnh trong nhà kết hợp với nội thất.',
      'Phong cách Japandi - kết hợp giữa Nhật Bản và Scandinavian.',
    ],

    // Mẹo thiết kế cho từng không gian
    roomTips: {
      'Phòng khách': [
        'Bố trí sofa theo hướng đối diện để tạo không gian trò chuyện.',
        'Sử dụng thảm để phân vùng không gian và tạo cảm giác ấm cúng.',
        'Kết hợp ánh sáng tổng thể và ánh sáng điểm để tạo không gian linh hoạt.',
        'Chọn bàn trà có kích thước phù hợp với sofa, thường bằng 2/3 chiều dài sofa.',
      ],
      'Phòng ngủ': [
        'Đặt giường theo hướng có thể nhìn thấy cửa ra vào nhưng không đối diện trực tiếp.',
        'Sử dụng rèm cửa hai lớp để điều chỉnh ánh sáng linh hoạt.',
        'Chọn màu sắc nhẹ nhàng, tạo cảm giác thư giãn và yên bình.',
        'Bố trí đèn đầu giường để thuận tiện cho việc đọc sách.',
      ],
      'Phòng bếp': [
        'Tuân thủ nguyên tắc tam giác bếp: bồn rửa, bếp nấu và tủ lạnh.',
        'Ưu tiên không gian lưu trữ và bề mặt làm việc rộng rãi.',
        'Sử dụng vật liệu dễ lau chùi cho bề mặt bàn bếp và tủ bếp.',
        'Lắp đặt hệ thống chiếu sáng đủ sáng cho khu vực nấu nướng.',
      ],
      'Phòng làm việc': [
        'Đặt bàn làm việc gần cửa sổ để tận dụng ánh sáng tự nhiên.',
        'Chọn ghế ergonomic để bảo vệ sức khỏe khi ngồi lâu.',
        'Bố trí hệ thống lưu trữ hợp lý để dễ dàng tìm kiếm tài liệu.',
        'Tạo không gian riêng tư và yên tĩnh, tránh xa khu vực sinh hoạt chung.',
      ],
    },
  },
};

// Cấu hình chatbot
const chatbotConfig = {
  greetings: [
    'Xin chào! Tôi là trợ lý ảo của Nội Thất Chất Lượng Bàng Vũ. Tôi có thể giúp gì cho bạn?',
    'Chào bạn! Tôi có thể tư vấn về sản phẩm nội thất hoặc giải đáp thắc mắc của bạn.',
    'Xin chào quý khách! Tôi là chatbot AI của Nội Thất Chất Lượng Bàng Vũ, sẵn sàng hỗ trợ bạn.',
  ],
  defaultResponses: [
    'Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi về sản phẩm nội thất, giá cả, chất liệu, hoặc các bài viết về thiết kế nội thất.',
    'Tôi chưa có thông tin về vấn đề này. Bạn có thể hỏi về các sản phẩm nội thất hoặc bài viết trên trang web của chúng tôi.',
    'Câu hỏi của bạn hơi phức tạp với tôi. Bạn có thể liên hệ trực tiếp với chúng tôi qua số điện thoại 097.277.4646 để được tư vấn chi tiết hơn.',
  ],
  contactInfo: {
    phone: '097.277.4646',
    email: 'contact@noithatbangvu.com',
    address: 'Số 91,93 Ngõ 85, đường Đức Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội',
  },
};

// Các từ khóa và mẫu câu để nhận diện ý định người dùng
const intentPatterns = {
  greeting: [
    'xin chào',
    'chào',
    'hello',
    'hi',
    'hey',
    'alo',
    'chào bạn',
    'chào em',
    'chào anh',
    'chào chị',
    'good morning',
    'buổi sáng',
    'buổi chiều',
    'buổi tối',
  ],

  productInfo: [
    // Loại sản phẩm
    'sản phẩm',
    'tủ',
    'bàn',
    'ghế',
    'giường',
    'kệ',
    'sofa',
    'nội thất',
    'tủ quần áo',
    'tủ bếp',
    'tủ giày',
    'bàn ăn',
    'bàn làm việc',
    'bàn trang điểm',
    'ghế sofa',
    'ghế văn phòng',
    'giường ngủ',
    'kệ tivi',
    'kệ sách',
    'kệ trang trí',
    'đèn',
    'thảm',
    'gương',
    'tủ rượu',
    'tủ trưng bày',
    'bàn trà',
    'bàn góc',
    'bàn console',

    // Thông tin sản phẩm
    'giá',
    'bao nhiêu',
    'mua',
    'đặt hàng',
    'chất liệu',
    'kích thước',
    'màu sắc',
    'thiết kế',
    'mẫu mã',
    'kiểu dáng',
    'công năng',
    'chức năng',
    'đặc điểm',
    'thông số',
    'chi tiết',
    'xuất xứ',
    'thương hiệu',
    'hãng',
    'nhà sản xuất',
    'có sẵn',
    'còn hàng',
    'hết hàng',
    'đặt trước',
    'đặt làm',
    'tùy chỉnh',

    // Chất liệu
    'gỗ tự nhiên',
    'gỗ công nghiệp',
    'mdf',
    'melamine',
    'acrylic',
    'laminate',
    'veneer',
    'inox',
    'kim loại',
    'nhựa',
    'da',
    'vải',
    'thủy tinh',
    'kính',
    'đá',
    'đá cẩm thạch',
    'gỗ sồi',
    'gỗ óc chó',
    'gỗ tần bì',
    'gỗ dẻ gai',
  ],

  blogInfo: [
    // Chủ đề bài viết
    'bài viết',
    'blog',
    'thiết kế',
    'mẹo',
    'hướng dẫn',
    'tư vấn',
    'ý tưởng',
    'phong cách',
    'xu hướng',
    'kiến thức',
    'cách',
    'làm sao',
    'làm thế nào',
    'bí quyết',
    'kinh nghiệm',
    'lưu ý',
    'trang trí',
    'decor',
    'nội thất',

    // Phong cách thiết kế
    'hiện đại',
    'tân cổ điển',
    'cổ điển',
    'tối giản',
    'minimalist',
    'scandinavian',
    'bắc âu',
    'industrial',
    'công nghiệp',
    'vintage',
    'retro',
    'bohemian',
    'rustic',
    'đương đại',
    'truyền thống',
    'japandi',
    'wabi-sabi',
    'mid-century',
    'art deco',

    // Không gian
    'phòng khách',
    'phòng ngủ',
    'phòng bếp',
    'phòng ăn',
    'phòng làm việc',
    'phòng tắm',
    'ban công',
    'sân vườn',
    'hành lang',
    'cầu thang',
    'lối vào',
    'căn hộ',
    'chung cư',
    'nhà phố',
    'biệt thự',
    'studio',
    'không gian nhỏ',
    'không gian mở',
    'không gian hẹp',
    'không gian rộng',
  ],

  interiorDesign: [
    // Thiết kế nội thất
    'thiết kế nội thất',
    'trang trí',
    'decor',
    'bố trí',
    'sắp xếp',
    'phối màu',
    'phối cảnh',
    'phong thủy',
    'ánh sáng',
    'chiếu sáng',
    'đèn',
    'màu sắc',
    'họa tiết',
    'texture',
    'vật liệu',
    'cây xanh',
    'tranh',
    'gương',
    'thảm',
    'rèm cửa',
    'gối trang trí',
    'phụ kiện',
    'đồ trang trí',
    'tác phẩm nghệ thuật',

    // Xu hướng
    'xu hướng',
    'trend',
    'hot',
    'mới nhất',
    'phổ biến',
    'thịnh hành',
    'năm nay',
    '2023',
    '2024',
    'hiện nay',
    'đang được ưa chuộng',
    'đang được yêu thích',

    // Mẹo và lời khuyên
    'mẹo',
    'lời khuyên',
    'tip',
    'gợi ý',
    'đề xuất',
    'nên',
    'không nên',
    'tránh',
    'lưu ý',
    'cần biết',
    'quan trọng',
    'cách',
    'làm sao',
    'làm thế nào',
  ],

  maintenance: [
    // Bảo quản và vệ sinh
    'bảo quản',
    'vệ sinh',
    'lau chùi',
    'làm sạch',
    'dọn dẹp',
    'giữ gìn',
    'chăm sóc',
    'bảo dưỡng',
    'lau dọn',
    'tẩy vết bẩn',
    'đánh bóng',
    'phủ bóng',
    'chống mối mọt',
    'chống ẩm',
    'chống nấm mốc',
    'chống trầy xước',
    'chống phai màu',

    // Sửa chữa
    'sửa chữa',
    'khắc phục',
    'xử lý',
    'thay thế',
    'tân trang',
    'làm mới',
    'phục hồi',
    'cải tạo',
    'nâng cấp',
    'cải thiện',
    'tháo lắp',
    'tháo rời',
  ],

  contact: [
    'liên hệ',
    'địa chỉ',
    'số điện thoại',
    'email',
    'gọi',
    'tư vấn viên',
    'nhân viên',
    'cửa hàng',
    'showroom',
    'chi nhánh',
    'văn phòng',
    'trụ sở',
    'hotline',
    'zalo',
    'facebook',
    'messenger',
    'fanpage',
    'mạng xã hội',
    'website',
    'trang web',
    'tư vấn',
    'hỗ trợ',
    'giúp đỡ',
    'phản hồi',
    'góp ý',
  ],

  warranty: [
    'bảo hành',
    'bảo trì',
    'sửa chữa',
    'lỗi',
    'hỏng',
    'thay thế',
    'đổi trả',
    'hoàn tiền',
    'khiếu nại',
    'phàn nàn',
    'không hài lòng',
    'chính sách',
    'điều khoản',
    'quy định',
    'cam kết',
    'đảm bảo',
    'chất lượng',
    'dịch vụ',
    'hậu mãi',
    'sau bán hàng',
    'bảo đảm',
    'bảo hiểm',
    'thời hạn',
    'thời gian',
  ],

  delivery: [
    'giao hàng',
    'vận chuyển',
    'ship',
    'thời gian',
    'phí',
    'miễn phí',
    'free',
    'nhanh',
    'chậm',
    'đúng hẹn',
    'trễ',
    'chuyển phát',
    'đơn vị vận chuyển',
    'shipper',
    'đóng gói',
    'bao bì',
    'bảo quản',
    'lắp đặt',
    'lắp ráp',
    'vận chuyển',
    'khu vực',
    'tỉnh thành',
    'nội thành',
    'ngoại thành',
    'toàn quốc',
    'quốc tế',
  ],

  promotion: [
    'khuyến mãi',
    'giảm giá',
    'ưu đãi',
    'sale',
    'quà tặng',
    'voucher',
    'mã giảm giá',
    'coupon',
    'flash sale',
    'deal sốc',
    'hot deal',
    'combo',
    'ưu đãi',
    'chiết khấu',
    'tri ân',
    'đặc biệt',
    'dịp',
    'sự kiện',
    'lễ',
    'tết',
    'sinh nhật',
    'kỷ niệm',
    'black friday',
    'cyber monday',
    'cuối năm',
    'đầu năm',
    'mùa',
    'mùa hè',
    'mùa đông',
  ],

  pricing: [
    'báo giá',
    'bảng giá',
    'giá cả',
    'chi phí',
    'phí',
    'tiền',
    'đắt',
    'rẻ',
    'hợp lý',
    'phải chăng',
    'cao cấp',
    'bình dân',
    'tầm trung',
    'sang trọng',
    'giá gốc',
    'giá niêm yết',
    'giá thị trường',
    'giá cạnh tranh',
    'so sánh giá',
    'trả góp',
    'thanh toán',
    'chuyển khoản',
    'tiền mặt',
    'thẻ tín dụng',
    'ví điện tử',
  ],

  customization: [
    'thiết kế riêng',
    'đặt làm',
    'tùy chỉnh',
    'tùy biến',
    'theo yêu cầu',
    'theo ý thích',
    'theo kích thước',
    'theo không gian',
    'theo phong cách',
    'đo đạc',
    'khảo sát',
    'tư vấn tại nhà',
    '3D',
    'phối cảnh',
    'bản vẽ',
    'mẫu',
    'demo',
    'prototype',
    'đặc biệt',
    'độc quyền',
    'duy nhất',
    'cá nhân hóa',
  ],
};

// Khởi tạo chatbot
function initChatbot() {
  if (chatbotData.isInitialized) return;

  // Tải dữ liệu từ products.js và blog.js
  loadProductData();
  loadBlogData();

  // Khởi tạo giao diện chatbot
  initChatbotUI();

  // Đánh dấu đã khởi tạo
  chatbotData.isInitialized = true;

  console.log('Chatbot AI đã được khởi tạo thành công!');
}

// Tải dữ liệu sản phẩm từ products.js
function loadProductData() {
  // Kiểm tra xem biến products có tồn tại không (được định nghĩa trong products.js)
  if (typeof products !== 'undefined') {
    chatbotData.products = products;

    // Trích xuất danh mục và chất liệu
    const categories = new Set();
    const materials = new Set();

    products.forEach((product) => {
      if (product.category) categories.add(product.category);
      if (product.material) materials.add(product.material);
    });

    chatbotData.categories = Array.from(categories);
    chatbotData.materials = Array.from(materials);

    console.log(
      `Đã tải ${products.length} sản phẩm, ${chatbotData.categories.length} danh mục, ${chatbotData.materials.length} chất liệu`
    );
  } else {
    console.warn('Không tìm thấy dữ liệu sản phẩm (products.js)');
  }
}

// Tải dữ liệu bài viết từ blog.js
function loadBlogData() {
  // Kiểm tra xem biến posts có tồn tại không (được định nghĩa trong blog.js)
  if (typeof posts !== 'undefined') {
    chatbotData.blogPosts = posts;

    // Trích xuất danh mục bài viết
    const blogCategories = new Set();

    posts.forEach((post) => {
      if (post.category) blogCategories.add(post.category);
    });

    chatbotData.blogCategories = Array.from(blogCategories);

    console.log(
      `Đã tải ${posts.length} bài viết, ${chatbotData.blogCategories.length} danh mục bài viết`
    );
  } else {
    console.warn('Không tìm thấy dữ liệu bài viết (blog.js)');
  }
}

// Khởi tạo giao diện chatbot
function initChatbotUI() {
  // Lấy các phần tử DOM
  const chatWidget = document.querySelector('.ai-chat-widget');
  const chatContainer = document.querySelector('.ai-chat-container');
  const chatMessages = document.querySelector('.ai-chat-messages');
  const chatInput = document.querySelector('.ai-chat-input input');
  const chatButton = document.querySelector('.ai-chat-input button');
  const chatClose = document.querySelector('.ai-chat-close');

  if (
    !chatWidget ||
    !chatContainer ||
    !chatMessages ||
    !chatInput ||
    !chatButton ||
    !chatClose
  ) {
    console.error('Không tìm thấy các phần tử DOM cần thiết cho chatbot');
    return;
  }

  // Thêm sự kiện click cho nút chat
  chatWidget.addEventListener('click', () => {
    chatContainer.classList.add('open');

    // Nếu chưa có tin nhắn chào, thêm vào
    if (chatMessages.children.length === 0) {
      // Chọn ngẫu nhiên một lời chào
      const randomGreeting =
        chatbotConfig.greetings[
          Math.floor(Math.random() * chatbotConfig.greetings.length)
        ];
      addBotMessage(randomGreeting);
    }

    // Focus vào ô input
    setTimeout(() => chatInput.focus(), 300);
  });

  // Thêm sự kiện click cho nút đóng
  chatClose.addEventListener('click', () => {
    chatContainer.classList.remove('open');
  });

  // Thêm sự kiện click cho nút gửi
  chatButton.addEventListener('click', sendMessage);

  // Thêm sự kiện nhấn Enter để gửi tin nhắn
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  console.log('Đã khởi tạo giao diện chatbot');
}

// Hàm gửi tin nhắn
function sendMessage() {
  const chatInput = document.querySelector('.ai-chat-input input');
  const chatMessages = document.querySelector('.ai-chat-messages');

  if (!chatInput || !chatMessages) return;

  const message = chatInput.value.trim();
  if (message === '') return;

  // Thêm tin nhắn của người dùng vào khung chat
  addUserMessage(message);

  // Xóa nội dung input
  chatInput.value = '';

  // Xử lý tin nhắn và trả lời
  processMessage(message);
}

// Thêm tin nhắn của bot vào khung chat
function addBotMessage(message) {
  const chatMessages = document.querySelector('.ai-chat-messages');
  if (!chatMessages) return;

  const messageElement = document.createElement('div');
  messageElement.className = 'ai-message ai-message-bot';
  messageElement.textContent = message;

  chatMessages.appendChild(messageElement);

  // Cuộn xuống dưới cùng
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Thêm vào lịch sử chat
  chatbotData.chatHistory.push({ sender: 'bot', message });
}

// Thêm tin nhắn của người dùng vào khung chat
function addUserMessage(message) {
  const chatMessages = document.querySelector('.ai-chat-messages');
  if (!chatMessages) return;

  const messageElement = document.createElement('div');
  messageElement.className = 'ai-message ai-message-user';
  messageElement.textContent = message;

  chatMessages.appendChild(messageElement);

  // Cuộn xuống dưới cùng
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Thêm vào lịch sử chat
  chatbotData.chatHistory.push({ sender: 'user', message });
}

// Xử lý tin nhắn và trả lời
function processMessage(message) {
  // Chuyển tin nhắn về chữ thường để dễ so sánh
  const lowerMessage = message.toLowerCase();

  // Hiển thị hiệu ứng "đang nhập..."
  showTypingIndicator();

  // Phân tích ý định người dùng
  const intent = detectIntent(lowerMessage);

  // Tạo câu trả lời dựa trên ý định
  setTimeout(() => {
    // Ẩn hiệu ứng "đang nhập..."
    hideTypingIndicator();

    // Trả lời dựa trên ý định
    switch (intent) {
      case 'greeting':
        handleGreeting();
        break;
      case 'productInfo':
        handleProductInfo(lowerMessage);
        break;
      case 'blogInfo':
        handleBlogInfo(lowerMessage);
        break;
      case 'interiorDesign':
        handleInteriorDesign(lowerMessage);
        break;
      case 'maintenance':
        handleMaintenance(lowerMessage);
        break;
      case 'pricing':
        handlePricing(lowerMessage);
        break;
      case 'customization':
        handleCustomization(lowerMessage);
        break;
      case 'contact':
        handleContact();
        break;
      case 'warranty':
        handleWarranty();
        break;
      case 'delivery':
        handleDelivery();
        break;
      case 'promotion':
        handlePromotion();
        break;
      default:
        handleUnknown();
        break;
    }
  }, 1000); // Giả lập thời gian suy nghĩ của bot
}

// Hiển thị hiệu ứng "đang nhập..."
function showTypingIndicator() {
  const chatMessages = document.querySelector('.ai-chat-messages');
  if (!chatMessages) return;

  const indicator = document.createElement('div');
  indicator.className = 'ai-message ai-message-bot ai-typing-indicator';
  indicator.innerHTML = '<span></span><span></span><span></span>';

  chatMessages.appendChild(indicator);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Ẩn hiệu ứng "đang nhập..."
function hideTypingIndicator() {
  const indicator = document.querySelector('.ai-typing-indicator');
  if (indicator) {
    indicator.remove();
  }
}

// Phát hiện ý định người dùng từ tin nhắn
function detectIntent(message) {
  // Kiểm tra từng nhóm ý định
  for (const [intent, patterns] of Object.entries(intentPatterns)) {
    for (const pattern of patterns) {
      if (message.includes(pattern)) {
        return intent;
      }
    }
  }

  // Nếu không tìm thấy ý định cụ thể
  return 'unknown';
}

// Khởi tạo chatbot khi trang được tải
document.addEventListener('DOMContentLoaded', () => {
  // Đợi một chút để đảm bảo products.js và blog.js đã được tải
  setTimeout(initChatbot, 1000);
});
