/**
 * AI Chatbot for Pricing Page
 * This chatbot helps users find top-selling products in different categories
 */

class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.isTyping = false;
    this.messages = [];
    this.products = window.products || [];
    this.categories = this.extractCategories();
    this.init();
  }

  // Initialize the chatbot
  init() {
    this.createChatbotUI();
    this.attachEventListeners();
    this.addWelcomeMessage();
  }

  // Extract unique categories from products
  extractCategories() {
    if (!this.products || !this.products.length) {
      console.error('No products found');
      return [];
    }

    const categories = this.products.map((product) => product.category);
    return [...new Set(categories)];
  }

  // Create chatbot UI elements
  createChatbotUI() {
    // Create toggle button
    const toggleButton = document.createElement('div');
    toggleButton.className = 'chatbot-toggle';
    toggleButton.innerHTML = '<i class="fas fa-robot"></i>';
    toggleButton.id = 'chatbot-toggle';
    toggleButton.style.cursor = 'pointer'; // Đảm bảo con trỏ hiển thị dạng pointer khi hover
    toggleButton.setAttribute('role', 'button'); // Thêm role button cho accessibility
    toggleButton.setAttribute('aria-label', 'Mở chatbot'); // Thêm label cho accessibility

    // Create chatbot container
    const chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot-container';
    chatbotContainer.id = 'chatbot-container';

    // Create chatbot header
    const chatbotHeader = document.createElement('div');
    chatbotHeader.className = 'chatbot-header';
    chatbotHeader.innerHTML = `
            <div class="chatbot-header-title">
                <i class="fas fa-robot"></i>
                <h3>Trợ lý AI</h3>
            </div>
            <button class="chatbot-close" id="chatbot-close">
                <i class="fas fa-times"></i>
            </button>
        `;

    // Create messages container
    const messagesContainer = document.createElement('div');
    messagesContainer.className = 'chatbot-messages';
    messagesContainer.id = 'chatbot-messages';

    // Create input container
    const inputContainer = document.createElement('div');
    inputContainer.className = 'chatbot-input-container';
    inputContainer.innerHTML = `
            <input type="text" class="chatbot-input" id="chatbot-input" placeholder="Nhập tin nhắn...">
            <button class="chatbot-send" id="chatbot-send">
                <i class="fas fa-paper-plane"></i>
            </button>
        `;

    // Append all elements
    chatbotContainer.appendChild(chatbotHeader);
    chatbotContainer.appendChild(messagesContainer);
    chatbotContainer.appendChild(inputContainer);

    // Append to body
    document.body.appendChild(toggleButton);
    document.body.appendChild(chatbotContainer);
  }

  // Attach event listeners
  attachEventListeners() {
    // Toggle chatbot
    const toggleButton = document.getElementById('chatbot-toggle');
    if (toggleButton) {
      // Thêm nhiều loại sự kiện để đảm bảo hoạt động trên mọi thiết bị
      toggleButton.addEventListener('click', () => this.toggleChatbot());
      toggleButton.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định trên thiết bị cảm ứng
        this.toggleChatbot();
      });
      // Thêm sự kiện keyboard cho accessibility
      toggleButton.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggleChatbot();
        }
      });
      console.log('Chatbot toggle button initialized');
    } else {
      console.error('Chatbot toggle button not found');
    }

    // Close chatbot
    const closeButton = document.getElementById('chatbot-close');
    if (closeButton) {
      closeButton.addEventListener('click', () => this.toggleChatbot(false));
      closeButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.toggleChatbot(false);
      });
      console.log('Chatbot close button initialized');
    }

    // Send message
    const sendButton = document.getElementById('chatbot-send');
    if (sendButton) {
      sendButton.addEventListener('click', () => this.sendMessage());
      sendButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        this.sendMessage();
      });
      console.log('Chatbot send button initialized');
    }

    // Send message on Enter key
    const inputField = document.getElementById('chatbot-input');
    if (inputField) {
      inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.sendMessage();
        }
      });
      console.log('Chatbot input field initialized');
    }
  }

  // Toggle chatbot visibility
  toggleChatbot(forceState = null) {
    const chatbotContainer = document.getElementById('chatbot-container');
    const toggleButton = document.getElementById('chatbot-toggle');

    this.isOpen = forceState !== null ? forceState : !this.isOpen;

    if (this.isOpen) {
      chatbotContainer.classList.add('active');
      toggleButton.classList.add('active');
      // Focus input field when opened
      setTimeout(() => {
        document.getElementById('chatbot-input').focus();
      }, 300);
    } else {
      chatbotContainer.classList.remove('active');
      toggleButton.classList.remove('active');
    }
  }

  // Add welcome message
  addWelcomeMessage() {
    setTimeout(() => {
      this.addBotMessage(
        'Xin chào! Tôi là trợ lý AI của Nội Thất Chất Lượng Bàng Vũ. Tôi có thể giúp bạn tìm kiếm sản phẩm hoặc trả lời các câu hỏi về sản phẩm của chúng tôi.'
      );

      setTimeout(() => {
        this.addBotMessage(
          "Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất."
        );
      }, 1000);
    }, 500);
  }

  // Add a bot message
  addBotMessage(text, products = null) {
    if (this.isTyping) return;

    this.isTyping = true;

    // Show typing indicator
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chatbot-message bot typing';
    typingIndicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // After a delay, remove typing indicator and add the actual message
    setTimeout(() => {
      messagesContainer.removeChild(typingIndicator);

      const messageElement = document.createElement('div');
      messageElement.className = 'chatbot-message bot';
      messageElement.textContent = text;

      messagesContainer.appendChild(messageElement);

      // If products are provided, add product cards
      if (products && products.length > 0) {
        const productsContainer = document.createElement('div');
        productsContainer.className = 'products-container';

        products.forEach((product) => {
          const productCard = this.createProductCard(product);
          productsContainer.appendChild(productCard);
        });

        messagesContainer.appendChild(productsContainer);
      }

      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      this.isTyping = false;
    }, 1500);
  }

  // Create a product card element
  createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    // Log product info for debugging
    console.log('Creating product card for:', product);

    // Use default image if product image is not available
    // Check for image in different possible properties (image, images array, gallery array)
    let imageUrl = 'images/products/placeholder.png';
    if (product.image) {
      imageUrl = product.image;
    } else if (product.images && product.images.length > 0) {
      imageUrl = product.images[0];
    } else if (product.gallery && product.gallery.length > 0) {
      imageUrl = product.gallery[0];
    }

    // Ensure product has a valid ID
    const productId = product.id || 'unknown';

    // Ensure product has a valid name
    const productName = product.name || 'Sản phẩm không có tên';

    // Ensure product has a valid category
    const productCategory = product.category || 'Không có danh mục';

    // Create badge if product has a tag
    const badgeHTML = product.tag
      ? `<span class="product-tag">${product.tag}</span>`
      : product.promotion
      ? `<span class="product-tag">${product.promotion}</span>`
      : '';

    // Add sold count or views if available
    let statsHTML = '';
    if (product.soldCount) {
      statsHTML = `<div class="product-stats">Đã bán: ${product.soldCount}</div>`;
    } else if (product.views) {
      statsHTML = `<div class="product-stats">Lượt xem: ${product.views}</div>`;
    }

    card.innerHTML = `
            <div class="product-image-container">
                <img src="${imageUrl}" alt="${productName}" class="product-image">
                ${badgeHTML}
            </div>
            <div class="product-info">
                <div class="product-name">${productName}</div>
                <div class="product-category">${productCategory}</div>
                ${statsHTML}
                <a href="product-details.html?id=${productId}" class="product-button">Xem chi tiết</a>
            </div>
        `;

    // Add click event to the entire card
    card.addEventListener('click', function (e) {
      // Only navigate if the click wasn't on the button
      if (!e.target.closest('.product-button')) {
        window.location.href = `product-details.html?id=${productId}`;
      }
    });

    return card;
  }

  // Add a user message
  addUserMessage(text) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message user';
    messageElement.textContent = text;

    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Send a message
  sendMessage() {
    const inputField = document.getElementById('chatbot-input');
    const message = inputField.value.trim();

    if (!message) return;

    // Add user message
    this.addUserMessage(message);

    // Clear input field
    inputField.value = '';

    // Process the message
    this.processMessage(message);
  }

  // Process user message
  processMessage(message) {
    console.log('Processing message:', message);

    // Convert message to lowercase for easier comparison
    const lowerMessage = message.toLowerCase();

    // Check if message is asking about product categories
    const categoryMatch = this.findCategoryMatch(lowerMessage);
    console.log('Category match result:', categoryMatch);

    if (categoryMatch) {
      // Find top selling products in the category
      const topProducts = this.getTopSellingProducts(categoryMatch, 3);
      console.log('Found top products:', topProducts.length);

      if (topProducts.length > 0) {
        // Show success message with products
        this.addBotMessage(
          `Đây là ${topProducts.length} sản phẩm ${categoryMatch} bán chạy nhất của chúng tôi:`,
          topProducts
        );
      } else {
        // Show no products found message with alternative categories
        const suggestedCategories = this.categories
          .filter((cat) => cat !== categoryMatch)
          .slice(0, 3)
          .join(', ');

        this.addBotMessage(
          `Rất tiếc, hiện tại chúng tôi không có sản phẩm nào trong danh mục ${categoryMatch}. Bạn có thể tham khảo các danh mục khác như: ${suggestedCategories}.`
        );
      }
    } else if (
      lowerMessage.includes('xin chào') ||
      lowerMessage.includes('chào') ||
      lowerMessage.includes('hello') ||
      lowerMessage.includes('hi')
    ) {
      // Greeting message
      this.addBotMessage('Xin chào! Tôi có thể giúp gì cho bạn hôm nay?');
    } else if (
      lowerMessage.includes('cảm ơn') ||
      lowerMessage.includes('thank')
    ) {
      // Thank you response
      this.addBotMessage(
        'Không có gì! Rất vui khi được giúp đỡ bạn. Bạn có cần hỗ trợ gì thêm không?'
      );
    } else if (
      lowerMessage.includes('giá') ||
      lowerMessage.includes('báo giá')
    ) {
      // Price inquiry response
      this.addBotMessage(
        'Để nhận báo giá chính xác nhất, bạn có thể sử dụng công cụ Báo Giá AI của chúng tôi ở trên trang này, hoặc liên hệ trực tiếp với đội ngũ tư vấn qua số điện thoại 097.277.4646.'
      );
    } else if (
      lowerMessage.includes('liên hệ') ||
      lowerMessage.includes('tư vấn')
    ) {
      // Contact information
      this.addBotMessage(
        'Bạn có thể liên hệ với chúng tôi qua số điện thoại 097.277.4646 hoặc ghé thăm showroom tại Số 91,93 Ngõ 85, đường Đức Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội.'
      );
    } else if (
      lowerMessage.includes('danh mục') ||
      lowerMessage.includes('sản phẩm') ||
      lowerMessage.includes('loại')
    ) {
      // List all categories
      const categoryList = this.categories.join(', ');
      this.addBotMessage(
        `Chúng tôi có các danh mục sản phẩm sau: ${categoryList}. Bạn quan tâm đến danh mục nào?`
      );
    } else {
      // Try to find any product related to the message
      const words = lowerMessage.split(' ').filter((word) => word.length > 3);
      let foundProducts = [];

      // Try to find products containing any of the words
      if (words.length > 0) {
        for (const word of words) {
          const products = this.products.filter(
            (product) =>
              (product.name && product.name.toLowerCase().includes(word)) ||
              (product.description &&
                product.description.toLowerCase().includes(word))
          );

          if (products.length > 0) {
            foundProducts = products.slice(0, 3);
            break;
          }
        }
      }

      if (foundProducts.length > 0) {
        // Found some related products
        this.addBotMessage(
          `Tôi tìm thấy một số sản phẩm có thể bạn quan tâm:`,
          foundProducts
        );
      } else {
        // Default response
        this.addBotMessage(
          "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất."
        );
      }
    }
  }

  // Find matching category from user message
  findCategoryMatch(message) {
    console.log('Finding category match for:', message);
    console.log('Available categories:', this.categories);

    // Normalize message for better matching
    const normalizedMessage = message.toLowerCase().trim();

    // First try exact match with categories from products
    for (const category of this.categories) {
      // Check if the message contains the exact category name (case insensitive)
      if (normalizedMessage.includes(category.toLowerCase())) {
        console.log('Found exact category match:', category);
        return category;
      }
    }

    // Define common category aliases and normalize them
    const categoryAliases = {
      // Tủ Quần Áo aliases
      'tủ quần áo': 'Tủ Quần Áo',
      'tu quan ao': 'Tủ Quần Áo',
      'tủ áo': 'Tủ Quần Áo',
      'tu ao': 'Tủ Quần Áo',
      'tủ đồ': 'Tủ Quần Áo',
      'tu do': 'Tủ Quần Áo',

      // Tủ Bếp aliases
      'tủ bếp': 'Tủ Bếp',
      'tu bep': 'Tủ Bếp',
      'kệ bếp': 'Tủ Bếp',
      'ke bep': 'Tủ Bếp',
      'tủ nhà bếp': 'Tủ Bếp',
      'tu nha bep': 'Tủ Bếp',

      // Giường Ngủ aliases
      giường: 'Giường Ngủ',
      giuong: 'Giường Ngủ',
      'giường ngủ': 'Giường Ngủ',
      'giuong ngu': 'Giường Ngủ',
      'giường nằm': 'Giường Ngủ',
      'giuong nam': 'Giường Ngủ',

      // Bàn Học aliases
      'bàn học': 'Bàn Học',
      'ban hoc': 'Bàn Học',
      'bàn học sinh': 'Bàn Học',
      'ban hoc sinh': 'Bàn Học',

      // Tủ Giày aliases
      'tủ giày': 'Tủ Giày',
      'tu giay': 'Tủ Giày',
      'kệ giày': 'Tủ Giày',
      'ke giay': 'Tủ Giày',
      'tủ để giày': 'Tủ Giày',
      'tu de giay': 'Tủ Giày',

      // Tủ Sách aliases
      'tủ sách': 'Tủ Sách',
      'tu sach': 'Tủ Sách',
      'kệ sách': 'Tủ Sách',
      'ke sach': 'Tủ Sách',
      'giá sách': 'Tủ Sách',
      'gia sach': 'Tủ Sách',

      // Bàn Làm Việc aliases
      'bàn làm việc': 'Bàn Làm Việc',
      'ban lam viec': 'Bàn Làm Việc',
      'bàn văn phòng': 'Bàn Làm Việc',
      'ban van phong': 'Bàn Làm Việc',

      // Bàn Trang Điểm aliases
      'bàn trang điểm': 'Bàn Trang Điểm',
      'ban trang diem': 'Bàn Trang Điểm',
      'bàn makeup': 'Bàn Trang Điểm',
      'ban makeup': 'Bàn Trang Điểm',

      // Sofa aliases
      sofa: 'Sofa',
      'ghế sofa': 'Sofa',
      'ghe sofa': 'Sofa',
      'ghế salon': 'Sofa',
      'ghe salon': 'Sofa',

      // Bàn Ăn aliases
      'bàn ăn': 'Bàn Ăn',
      'ban an': 'Bàn Ăn',
      'bàn ăn cơm': 'Bàn Ăn',
      'ban an com': 'Bàn Ăn',
    };

    // Check if any alias is in the message
    for (const [alias, category] of Object.entries(categoryAliases)) {
      if (normalizedMessage.includes(alias)) {
        // Check if this category actually exists in our product data
        if (this.categories.includes(category)) {
          console.log('Found category match via alias:', alias, '->', category);
          return category;
        }
      }
    }

    // If no match found, check for partial matches in category names
    for (const category of this.categories) {
      const words = category.toLowerCase().split(' ');
      for (const word of words) {
        if (word.length > 2 && normalizedMessage.includes(word)) {
          console.log('Found partial category match:', word, '->', category);
          return category;
        }
      }
    }

    console.log('No category match found');
    return null;
  }

  // Get top selling products in a category
  getTopSellingProducts(category, limit = 3) {
    if (!this.products || !this.products.length) {
      console.warn('No products available');
      return [];
    }

    console.log(`Finding top ${limit} products in category: ${category}`);

    // Ensure we have a valid category
    if (!category) {
      console.warn('Invalid category provided');
      return [];
    }

    // Step 1: First try to find products with exact category match
    let categoryProducts = this.products.filter((product) => {
      const productCategory = product.category || '';
      return productCategory.toLowerCase() === category.toLowerCase();
    });

    console.log(
      `Found ${categoryProducts.length} products with exact category match: ${category}`
    );

    // Step 2: If we found products in the category, use them
    if (categoryProducts.length > 0) {
      // Fix any products with incorrect categories
      categoryProducts = categoryProducts.map((product) => {
        // Create a copy to avoid modifying the original
        const fixedProduct = { ...product };
        // Ensure the category is set correctly
        fixedProduct.category = category;
        return fixedProduct;
      });

      // Sort products by relevance
      const sortedProducts = this.sortProductsByRelevance(categoryProducts);

      // Log the products we're returning
      console.log(
        'Returning products:',
        sortedProducts.slice(0, limit).map((p) => p.name)
      );

      // Return top products
      return sortedProducts.slice(0, limit);
    }

    // Step 3: If no exact category match, try to find products by name
    console.log(`Trying to find products by name containing ${category}`);

    const normalizedCategory = category.toLowerCase();
    const productsByName = this.products.filter((product) => {
      const productName = product.name || '';
      return productName.toLowerCase().includes(normalizedCategory);
    });

    console.log(`Found ${productsByName.length} products by name match`);

    if (productsByName.length > 0) {
      // Fix the category for these products
      const fixedProducts = productsByName.map((product) => {
        // Create a copy to avoid modifying the original
        const fixedProduct = { ...product };
        // Set the category to the requested category
        fixedProduct.category = category;
        return fixedProduct;
      });

      // Sort and return results
      const sortedByName = this.sortProductsByRelevance(fixedProducts);

      // Log the products we're returning
      console.log(
        'Returning products by name:',
        sortedByName.slice(0, limit).map((p) => p.name)
      );

      return sortedByName.slice(0, limit);
    }

    // Step 4: If still no products found, try to find products with similar categories
    console.log('Trying to find products with similar categories');

    const similarCategoryProducts = this.products.filter((product) => {
      const productCategory = product.category || '';
      // Check if any word in the category matches any word in the product category
      const categoryWords = normalizedCategory.split(' ');
      const productCategoryWords = productCategory.toLowerCase().split(' ');

      return categoryWords.some(
        (word) =>
          word.length > 2 &&
          productCategoryWords.some((pcWord) => pcWord.includes(word))
      );
    });

    console.log(
      `Found ${similarCategoryProducts.length} products with similar categories`
    );

    if (similarCategoryProducts.length > 0) {
      // Fix the category for these products
      const fixedProducts = similarCategoryProducts.map((product) => {
        // Create a copy to avoid modifying the original
        const fixedProduct = { ...product };
        // Set the category to the requested category
        fixedProduct.category = category;
        return fixedProduct;
      });

      // Sort and return results
      const sortedBySimilar = this.sortProductsByRelevance(fixedProducts);

      // Log the products we're returning
      console.log(
        'Returning products by similar category:',
        sortedBySimilar.slice(0, limit).map((p) => p.name)
      );

      return sortedBySimilar.slice(0, limit);
    }

    // No products found
    console.log('No products found for category:', category);
    return [];
  }

  // Helper method to sort products by relevance
  sortProductsByRelevance(products) {
    return products.sort((a, b) => {
      // First try to sort by soldCount
      if (a.soldCount !== undefined && b.soldCount !== undefined) {
        return b.soldCount - a.soldCount;
      }

      // If soldCount is not available, sort by views
      if (a.views !== undefined && b.views !== undefined) {
        return b.views - a.views;
      }

      // If neither is available, prioritize featured products
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // If all else is equal, keep original order
      return 0;
    });
  }
}

// Global variable to store chatbot instance
let chatbotInstance = null;

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Check if products are loaded
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    // Initialize chatbot
    chatbotInstance = new AIChatbot();
    console.log('Chatbot initialized with', products.length, 'products');
  } else {
    console.error('Products not loaded. Chatbot initialization delayed.');

    // Try to initialize after a delay to wait for products to load
    setTimeout(() => {
      if (typeof products !== 'undefined' && Array.isArray(products)) {
        chatbotInstance = new AIChatbot();
        console.log(
          'Chatbot initialized with',
          products.length,
          'products (delayed)'
        );
      } else {
        console.error(
          'Products still not loaded. Chatbot initialization failed.'
        );
      }
    }, 2000);
  }
});
