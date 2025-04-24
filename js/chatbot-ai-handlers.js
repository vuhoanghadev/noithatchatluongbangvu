/**
 * Chatbot AI - Phần xử lý các ý định người dùng
 * File này chứa các hàm xử lý cho từng loại ý định được phát hiện
 */

// Xử lý ý định chào hỏi
function handleGreeting() {
  const responses = [
    'Xin chào! Tôi có thể giúp gì cho bạn về nội thất?',
    'Chào bạn! Bạn đang quan tâm đến sản phẩm nội thất nào?',
    'Xin chào! Tôi có thể tư vấn cho bạn về các sản phẩm nội thất hoặc bài viết thiết kế.',
  ];

  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];
  addBotMessage(randomResponse);
}

// Xử lý ý định tìm hiểu về sản phẩm
function handleProductInfo(message) {
  // Nếu chưa tải được dữ liệu sản phẩm
  if (!chatbotData.products || chatbotData.products.length === 0) {
    addBotMessage(
      'Xin lỗi, tôi đang gặp vấn đề khi truy cập thông tin sản phẩm. Vui lòng thử lại sau hoặc liên hệ với chúng tôi qua số điện thoại ' +
        chatbotConfig.contactInfo.phone
    );
    return;
  }

  // Tìm kiếm sản phẩm phù hợp với tin nhắn
  const matchedProducts = findMatchingProducts(message);

  if (matchedProducts.length > 0) {
    // Nếu tìm thấy sản phẩm phù hợp
    if (matchedProducts.length === 1) {
      // Nếu chỉ có một sản phẩm phù hợp
      const product = matchedProducts[0];
      const response = `Tôi tìm thấy sản phẩm "${
        product.name
      }" thuộc danh mục ${product.category}. ${
        product.description ? product.description.substring(0, 150) + '...' : ''
      } Bạn có thể xem chi tiết sản phẩm này tại trang web của chúng tôi.`;
      addBotMessage(response);

      // Thêm nút xem chi tiết sản phẩm
      addProductButton(product);
    } else {
      // Nếu có nhiều sản phẩm phù hợp
      const response = `Tôi tìm thấy ${matchedProducts.length} sản phẩm phù hợp với yêu cầu của bạn. Dưới đây là một số gợi ý:`;
      addBotMessage(response);

      // Hiển thị tối đa 3 sản phẩm
      const productsToShow = matchedProducts.slice(0, 3);
      productsToShow.forEach((product) => {
        addProductButton(product);
      });

      // Nếu có nhiều hơn 3 sản phẩm, thêm nút xem thêm
      if (matchedProducts.length > 3) {
        addBotMessage(
          `Và còn ${
            matchedProducts.length - 3
          } sản phẩm khác. Bạn có thể xem thêm tại trang sản phẩm của chúng tôi.`
        );
      }
    }
  } else if (message.includes('giá') || message.includes('bao nhiêu')) {
    // Nếu người dùng hỏi về giá
    addBotMessage(
      "Giá sản phẩm của chúng tôi phụ thuộc vào kích thước, chất liệu và thiết kế. Để nhận báo giá chính xác, bạn có thể sử dụng tính năng 'Báo Giá AI' trên trang web hoặc liên hệ trực tiếp với chúng tôi qua số điện thoại " +
        chatbotConfig.contactInfo.phone
    );
  } else if (message.includes('chất liệu')) {
    // Nếu người dùng hỏi về chất liệu
    const materials = chatbotData.materials.join(', ');
    addBotMessage(
      `Chúng tôi cung cấp nhiều loại chất liệu khác nhau như: ${materials}. Mỗi loại chất liệu có đặc tính và ưu điểm riêng phù hợp với từng không gian sống.`
    );
  } else {
    // Nếu không tìm thấy sản phẩm cụ thể
    const categories = chatbotData.categories.join(', ');
    addBotMessage(
      `Chúng tôi có nhiều danh mục sản phẩm như: ${categories}. Bạn quan tâm đến danh mục nào? Hoặc bạn có thể mô tả chi tiết hơn về sản phẩm bạn đang tìm kiếm.`
    );
  }
}

// Tìm sản phẩm phù hợp với tin nhắn
function findMatchingProducts(message) {
  const products = chatbotData.products;
  if (!products || products.length === 0) return [];

  // Tạo danh sách từ khóa từ tin nhắn
  const keywords = message.split(/\s+/).filter((word) => word.length > 2);

  // Tìm các sản phẩm phù hợp
  return products.filter((product) => {
    // Kiểm tra tên sản phẩm
    if (
      product.name &&
      product.name
        .toLowerCase()
        .split(/\s+/)
        .some((word) => keywords.includes(word.toLowerCase()))
    ) {
      return true;
    }

    // Kiểm tra danh mục
    if (
      product.category &&
      keywords.some((keyword) =>
        product.category.toLowerCase().includes(keyword)
      )
    ) {
      return true;
    }

    // Kiểm tra mô tả
    if (
      product.description &&
      keywords.some((keyword) =>
        product.description.toLowerCase().includes(keyword)
      )
    ) {
      return true;
    }

    // Kiểm tra chất liệu
    if (
      product.material &&
      keywords.some((keyword) =>
        product.material.toLowerCase().includes(keyword)
      )
    ) {
      return true;
    }

    return false;
  });
}

// Thêm nút xem chi tiết sản phẩm
function addProductButton(product) {
  const chatMessages = document.querySelector('.ai-chat-messages');
  if (!chatMessages) return;

  const buttonElement = document.createElement('div');
  buttonElement.className = 'ai-message ai-message-bot ai-product-button';

  buttonElement.innerHTML = `
    <div class="ai-product-card">
      <img src="${product.image || 'images/placeholder.jpg'}" alt="${
    product.name
  }">
      <div class="ai-product-info">
        <h4>${product.name}</h4>
        <p>${product.category || ''}</p>
        <a href="product-details.html?id=${
          product.id
        }" target="_blank" class="ai-product-link">Xem chi tiết</a>
      </div>
    </div>
  `;

  chatMessages.appendChild(buttonElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Xử lý ý định tìm hiểu về bài viết
function handleBlogInfo(message) {
  // Nếu chưa tải được dữ liệu bài viết
  if (!chatbotData.blogPosts || chatbotData.blogPosts.length === 0) {
    addBotMessage(
      'Xin lỗi, tôi đang gặp vấn đề khi truy cập thông tin bài viết. Vui lòng thử lại sau hoặc truy cập trực tiếp mục Blog trên trang web của chúng tôi.'
    );
    return;
  }

  // Tìm kiếm bài viết phù hợp với tin nhắn
  const matchedPosts = findMatchingBlogPosts(message);

  if (matchedPosts.length > 0) {
    // Nếu tìm thấy bài viết phù hợp
    if (matchedPosts.length === 1) {
      // Nếu chỉ có một bài viết phù hợp
      const post = matchedPosts[0];
      const response = `Tôi tìm thấy bài viết "${post.title}" thuộc danh mục ${
        post.category
      }. ${
        post.excerpt ? post.excerpt : ''
      } Bạn có thể đọc chi tiết bài viết này tại trang web của chúng tôi.`;
      addBotMessage(response);

      // Thêm nút xem chi tiết bài viết
      addBlogButton(post);
    } else {
      // Nếu có nhiều bài viết phù hợp
      const response = `Tôi tìm thấy ${matchedPosts.length} bài viết phù hợp với yêu cầu của bạn. Dưới đây là một số gợi ý:`;
      addBotMessage(response);

      // Hiển thị tối đa 3 bài viết
      const postsToShow = matchedPosts.slice(0, 3);
      postsToShow.forEach((post) => {
        addBlogButton(post);
      });

      // Nếu có nhiều hơn 3 bài viết, thêm nút xem thêm
      if (matchedPosts.length > 3) {
        addBotMessage(
          `Và còn ${
            matchedPosts.length - 3
          } bài viết khác. Bạn có thể xem thêm tại trang Blog của chúng tôi.`
        );
      }
    }
  } else {
    // Nếu không tìm thấy bài viết cụ thể
    const categories = chatbotData.blogCategories.join(', ');
    addBotMessage(
      `Chúng tôi có nhiều bài viết về các chủ đề như: ${categories}. Bạn quan tâm đến chủ đề nào? Hoặc bạn có thể mô tả chi tiết hơn về thông tin bạn đang tìm kiếm.`
    );
  }
}

// Tìm bài viết phù hợp với tin nhắn
function findMatchingBlogPosts(message) {
  const posts = chatbotData.blogPosts;
  if (!posts || posts.length === 0) return [];

  // Tạo danh sách từ khóa từ tin nhắn
  const keywords = message.split(/\s+/).filter((word) => word.length > 2);

  // Tìm các bài viết phù hợp
  return posts.filter((post) => {
    // Kiểm tra tiêu đề
    if (
      post.title &&
      post.title
        .toLowerCase()
        .split(/\s+/)
        .some((word) => keywords.includes(word.toLowerCase()))
    ) {
      return true;
    }

    // Kiểm tra danh mục
    if (
      post.category &&
      keywords.some((keyword) => post.category.toLowerCase().includes(keyword))
    ) {
      return true;
    }

    // Kiểm tra tóm tắt
    if (
      post.excerpt &&
      keywords.some((keyword) => post.excerpt.toLowerCase().includes(keyword))
    ) {
      return true;
    }

    // Kiểm tra nội dung
    if (
      post.content &&
      keywords.some((keyword) => post.content.toLowerCase().includes(keyword))
    ) {
      return true;
    }

    return false;
  });
}

// Thêm nút xem chi tiết bài viết
function addBlogButton(post) {
  const chatMessages = document.querySelector('.ai-chat-messages');
  if (!chatMessages) return;

  const buttonElement = document.createElement('div');
  buttonElement.className = 'ai-message ai-message-bot ai-blog-button';

  buttonElement.innerHTML = `
    <div class="ai-blog-card">
      <img src="${post.image || 'images/placeholder.jpg'}" alt="${post.title}">
      <div class="ai-blog-info">
        <h4>${post.title}</h4>
        <p>${post.category || ''}</p>
        <a href="blog-detail.html?id=${
          post.id
        }" target="_blank" class="ai-blog-link">Đọc bài viết</a>
      </div>
    </div>
  `;

  chatMessages.appendChild(buttonElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Xử lý ý định liên hệ
function handleContact() {
  const response = `Bạn có thể liên hệ với chúng tôi qua:
- Số điện thoại: ${chatbotConfig.contactInfo.phone}
- Email: ${chatbotConfig.contactInfo.email}
- Địa chỉ: ${chatbotConfig.contactInfo.address}

Hoặc bạn có thể để lại thông tin và chúng tôi sẽ liên hệ lại với bạn.`;

  addBotMessage(response);
}

// Xử lý ý định về bảo hành
function handleWarranty() {
  const response = `Tất cả sản phẩm của Nội Thất Chất Lượng Bàng Vũ đều được bảo hành từ 5-10 năm tùy theo loại sản phẩm. Chúng tôi cam kết:

- Sửa chữa miễn phí các lỗi do nhà sản xuất
- Thay thế linh kiện chính hãng
- Hỗ trợ bảo trì định kỳ

Để biết thêm chi tiết về chính sách bảo hành, vui lòng liên hệ với chúng tôi qua số điện thoại ${chatbotConfig.contactInfo.phone}.`;

  addBotMessage(response);
}

// Xử lý ý định về giao hàng
function handleDelivery() {
  const response = `Chính sách giao hàng của chúng tôi:

- Miễn phí giao hàng trong nội thành Hà Nội cho đơn hàng từ 5 triệu đồng
- Thời gian giao hàng: 3-5 ngày làm việc tùy khu vực
- Đội ngũ vận chuyển chuyên nghiệp, đảm bảo sản phẩm không bị hư hỏng
- Hỗ trợ lắp đặt tận nơi

Để biết chính xác thời gian giao hàng và phí vận chuyển cho khu vực của bạn, vui lòng liên hệ với chúng tôi.`;

  addBotMessage(response);
}

// Xử lý ý định về khuyến mãi
function handlePromotion() {
  // Tìm các sản phẩm đang khuyến mãi
  const promotionProducts = chatbotData.products.filter(
    (product) =>
      product.promotion || (product.flashsale && product.flashsale.active)
  );

  if (promotionProducts.length > 0) {
    addBotMessage(
      `Hiện tại chúng tôi đang có ${promotionProducts.length} sản phẩm khuyến mãi. Dưới đây là một số sản phẩm nổi bật:`
    );

    // Hiển thị tối đa 3 sản phẩm khuyến mãi
    const productsToShow = promotionProducts.slice(0, 3);
    productsToShow.forEach((product) => {
      addProductButton(product);
    });

    addBotMessage(
      'Bạn có thể xem thêm các sản phẩm khuyến mãi khác tại trang web của chúng tôi.'
    );
  } else {
    addBotMessage(
      'Hiện tại chúng tôi chưa có chương trình khuyến mãi nào. Vui lòng theo dõi trang web hoặc fanpage của chúng tôi để cập nhật các chương trình khuyến mãi sắp tới.'
    );
  }
}

// Xử lý ý định về thiết kế nội thất
function handleInteriorDesign(message) {
  // Kiểm tra xem tin nhắn liên quan đến phong cách thiết kế nào
  const styles = chatbotData.interiorKnowledge.styles;
  let matchedStyle = null;

  for (const style of styles) {
    if (message.includes(style.name.toLowerCase())) {
      matchedStyle = style;
      break;
    }
  }

  if (matchedStyle) {
    // Nếu tìm thấy phong cách phù hợp
    const response = `Phong cách ${matchedStyle.name}: ${
      matchedStyle.description
    }

Chất liệu phổ biến: ${matchedStyle.materials.join(', ')}
Màu sắc đặc trưng: ${matchedStyle.colors.join(', ')}`;

    addBotMessage(response);
    return;
  }

  // Kiểm tra xem tin nhắn liên quan đến không gian nào
  const roomTips = chatbotData.interiorKnowledge.roomTips;
  let matchedRoom = null;

  for (const [room, tips] of Object.entries(roomTips)) {
    if (message.includes(room.toLowerCase())) {
      matchedRoom = { name: room, tips: tips };
      break;
    }
  }

  if (matchedRoom) {
    // Nếu tìm thấy không gian phù hợp
    const response = `Mẹo thiết kế cho ${matchedRoom.name}:`;
    addBotMessage(response);

    // Hiển thị các mẹo
    matchedRoom.tips.forEach((tip) => {
      addBotMessage(`• ${tip}`);
    });

    return;
  }

  // Nếu tin nhắn liên quan đến xu hướng thiết kế
  if (
    message.includes('xu hướng') ||
    message.includes('trend') ||
    message.includes('mới nhất')
  ) {
    const trends = chatbotData.interiorKnowledge.trends;
    const response = `Xu hướng thiết kế nội thất hiện nay:`;
    addBotMessage(response);

    // Hiển thị các xu hướng
    trends.forEach((trend) => {
      addBotMessage(`• ${trend}`);
    });

    return;
  }

  // Nếu không tìm thấy thông tin cụ thể
  addBotMessage(
    'Tôi có thể tư vấn cho bạn về các phong cách thiết kế nội thất như: Hiện đại, Tân cổ điển, Minimalist, Scandinavian, Industrial. Bạn quan tâm đến phong cách nào?'
  );

  // Gợi ý thêm
  addBotMessage(
    'Hoặc tôi có thể chia sẻ mẹo thiết kế cho các không gian như phòng khách, phòng ngủ, phòng bếp, phòng làm việc. Bạn đang muốn trang trí không gian nào?'
  );
}

// Xử lý ý định về bảo quản và bảo dưỡng
function handleMaintenance(message) {
  // Lấy các mẹo bảo quản
  const maintenanceTips = chatbotData.interiorKnowledge.maintenanceTips;

  // Kiểm tra xem tin nhắn liên quan đến chất liệu nào
  const materialInfo = chatbotData.interiorKnowledge.materialInfo;
  let matchedMaterial = null;

  for (const [material, info] of Object.entries(materialInfo)) {
    if (message.toLowerCase().includes(material.toLowerCase())) {
      matchedMaterial = { name: material, info: info };
      break;
    }
  }

  if (matchedMaterial) {
    // Nếu tìm thấy chất liệu phù hợp
    const response = `Thông tin về chất liệu ${matchedMaterial.name}: ${matchedMaterial.info}`;
    addBotMessage(response);

    // Thêm mẹo bảo quản phù hợp với chất liệu
    addBotMessage('Mẹo bảo quản:');

    // Chọn 2-3 mẹo ngẫu nhiên
    const randomTips = maintenanceTips
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    randomTips.forEach((tip) => {
      addBotMessage(`• ${tip}`);
    });

    return;
  }

  // Nếu tin nhắn liên quan đến vệ sinh, bảo quản
  if (
    message.includes('vệ sinh') ||
    message.includes('lau chùi') ||
    message.includes('bảo quản')
  ) {
    const response = 'Mẹo bảo quản và vệ sinh đồ nội thất:';
    addBotMessage(response);

    // Hiển thị các mẹo bảo quản
    maintenanceTips.forEach((tip) => {
      addBotMessage(`• ${tip}`);
    });

    return;
  }

  // Nếu tin nhắn liên quan đến sửa chữa
  if (
    message.includes('sửa chữa') ||
    message.includes('hỏng') ||
    message.includes('lỗi')
  ) {
    addBotMessage(
      'Để sửa chữa đồ nội thất, bạn có thể liên hệ với chúng tôi qua số điện thoại ' +
        chatbotConfig.contactInfo.phone +
        '. Chúng tôi có đội ngũ kỹ thuật chuyên nghiệp sẽ hỗ trợ bạn.'
    );
    addBotMessage(
      'Hoặc bạn có thể mang sản phẩm đến showroom của chúng tôi tại ' +
        chatbotConfig.contactInfo.address +
        ' để được kiểm tra và tư vấn trực tiếp.'
    );
    return;
  }

  // Nếu không tìm thấy thông tin cụ thể
  addBotMessage(
    'Tôi có thể tư vấn cho bạn về cách bảo quản và vệ sinh đồ nội thất làm từ các chất liệu khác nhau như gỗ tự nhiên, gỗ công nghiệp, da, vải, kim loại, kính, đá...'
  );
  addBotMessage(
    'Bạn đang quan tâm đến việc bảo quản sản phẩm làm từ chất liệu nào?'
  );
}

// Xử lý ý định về báo giá
function handlePricing(message) {
  addBotMessage(
    'Để có báo giá chính xác nhất cho sản phẩm nội thất, bạn có thể sử dụng công cụ Báo Giá AI trên trang web của chúng tôi.'
  );

  // Kiểm tra xem tin nhắn có đề cập đến loại sản phẩm cụ thể không
  const productTypes = [
    {
      keyword: 'tủ quần áo',
      name: 'Tủ quần áo',
      priceRange: '4.000.000đ - 25.000.000đ',
    },
    {
      keyword: 'tủ bếp',
      name: 'Tủ bếp',
      priceRange: '8.000.000đ - 35.000.000đ',
    },
    {
      keyword: 'giường ngủ',
      name: 'Giường ngủ',
      priceRange: '5.000.000đ - 20.000.000đ',
    },
    {
      keyword: 'bàn ăn',
      name: 'Bàn ăn',
      priceRange: '3.500.000đ - 15.000.000đ',
    },
    { keyword: 'sofa', name: 'Sofa', priceRange: '7.000.000đ - 30.000.000đ' },
    {
      keyword: 'kệ tivi',
      name: 'Kệ tivi',
      priceRange: '2.500.000đ - 12.000.000đ',
    },
    {
      keyword: 'bàn làm việc',
      name: 'Bàn làm việc',
      priceRange: '2.000.000đ - 10.000.000đ',
    },
  ];

  for (const product of productTypes) {
    if (message.includes(product.keyword)) {
      addBotMessage(
        `Đối với ${product.name}, mức giá thông thường dao động từ ${product.priceRange} tùy thuộc vào kích thước, chất liệu và thiết kế.`
      );
      addBotMessage(
        'Tuy nhiên, để có báo giá chính xác nhất cho nhu cầu cụ thể của bạn, vui lòng cung cấp thêm thông tin về kích thước, chất liệu và thiết kế mong muốn.'
      );
      return;
    }
  }

  // Nếu tin nhắn liên quan đến thanh toán
  if (message.includes('thanh toán') || message.includes('trả góp')) {
    addBotMessage(
      'Chúng tôi hỗ trợ nhiều phương thức thanh toán: tiền mặt, chuyển khoản ngân hàng, thẻ tín dụng/ghi nợ, và trả góp 0% lãi suất qua thẻ tín dụng của các ngân hàng đối tác.'
    );
    addBotMessage(
      'Đối với hình thức trả góp, chúng tôi liên kết với nhiều ngân hàng để hỗ trợ khách hàng với kỳ hạn từ 3-12 tháng. Bạn có thể liên hệ với chúng tôi để được tư vấn chi tiết.'
    );
    return;
  }

  // Nếu không tìm thấy thông tin cụ thể
  addBotMessage(
    'Giá sản phẩm của chúng tôi phụ thuộc vào nhiều yếu tố như kích thước, chất liệu, thiết kế và tính năng. Bạn có thể cho tôi biết bạn đang quan tâm đến sản phẩm nào để tôi có thể cung cấp thông tin giá tham khảo?'
  );
  addBotMessage(
    'Hoặc bạn có thể liên hệ trực tiếp với chúng tôi qua số điện thoại ' +
      chatbotConfig.contactInfo.phone +
      ' để được tư vấn chi tiết và nhận báo giá chính xác nhất.'
  );
}

// Xử lý ý định về tùy chỉnh sản phẩm
function handleCustomization(message) {
  addBotMessage(
    'Nội Thất Chất Lượng Bàng Vũ chuyên thiết kế và sản xuất nội thất theo yêu cầu riêng của khách hàng.'
  );

  // Kiểm tra xem tin nhắn có đề cập đến loại sản phẩm cụ thể không
  const productTypes = [
    'tủ quần áo',
    'tủ bếp',
    'giường ngủ',
    'bàn ăn',
    'sofa',
    'kệ tivi',
    'bàn làm việc',
  ];

  let matchedProduct = null;
  for (const product of productTypes) {
    if (message.includes(product)) {
      matchedProduct = product;
      break;
    }
  }

  if (matchedProduct) {
    addBotMessage(
      `Đối với ${matchedProduct} thiết kế riêng, quy trình của chúng tôi bao gồm:`
    );
    addBotMessage('1. Tư vấn và khảo sát không gian tại nhà (miễn phí)');
    addBotMessage('2. Thiết kế 3D và báo giá chi tiết');
    addBotMessage('3. Ký hợp đồng và đặt cọc');
    addBotMessage('4. Sản xuất và thi công');
    addBotMessage('5. Bàn giao và bảo hành');

    addBotMessage(
      'Thời gian hoàn thiện thường từ 10-15 ngày tùy thuộc vào độ phức tạp của thiết kế và khối lượng công việc.'
    );
    return;
  }

  // Nếu tin nhắn liên quan đến thiết kế 3D
  if (
    message.includes('3d') ||
    message.includes('phối cảnh') ||
    message.includes('bản vẽ')
  ) {
    addBotMessage(
      'Chúng tôi cung cấp dịch vụ thiết kế 3D miễn phí cho khách hàng đặt sản phẩm. Bạn sẽ được xem trước thiết kế 3D và có thể yêu cầu điều chỉnh cho đến khi hài lòng trước khi chúng tôi tiến hành sản xuất.'
    );
    addBotMessage(
      'Dịch vụ này giúp bạn hình dung rõ ràng về sản phẩm cuối cùng và đảm bảo sản phẩm đáp ứng đúng nhu cầu và sở thích của bạn.'
    );
    return;
  }

  // Nếu không tìm thấy thông tin cụ thể
  addBotMessage(
    'Chúng tôi có thể tùy chỉnh hầu hết các sản phẩm nội thất theo yêu cầu của bạn, bao gồm kích thước, chất liệu, màu sắc, kiểu dáng và tính năng.'
  );
  addBotMessage(
    'Bạn đang quan tâm đến việc đặt làm sản phẩm nào? Hoặc bạn có thể liên hệ với chúng tôi qua số điện thoại ' +
      chatbotConfig.contactInfo.phone +
      ' để được tư vấn chi tiết.'
  );
}

// Xử lý khi không hiểu ý định người dùng
function handleUnknown() {
  // Chọn ngẫu nhiên một câu trả lời mặc định
  const randomResponse =
    chatbotConfig.defaultResponses[
      Math.floor(Math.random() * chatbotConfig.defaultResponses.length)
    ];
  addBotMessage(randomResponse);

  // Gợi ý một số chủ đề
  addBotMessage(
    'Bạn có thể hỏi tôi về các chủ đề sau: sản phẩm nội thất, thiết kế nội thất, phong cách thiết kế, bài viết, bảo quản và vệ sinh, báo giá, tùy chỉnh sản phẩm, thông tin liên hệ, chính sách bảo hành, giao hàng hoặc khuyến mãi.'
  );
}
