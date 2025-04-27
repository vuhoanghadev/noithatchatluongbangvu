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
    // Không cần tạo UI nữa vì đã có sẵn trong HTML
    console.log('Initializing chatbot...');
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

  // Attach event listeners
  attachEventListeners() {
    // Toggle chatbot
    const toggleButton = document.getElementById('chatbot-toggle');
    if (toggleButton) {
      // Thêm nhiều loại sự kiện để đảm bảo hoạt động trên mọi thiết bị
      toggleButton.addEventListener('click', () => {
        console.log('Toggle button clicked!');
        this.toggleChatbot();
      });
      
      toggleButton.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định trên thiết bị cảm ứng
        console.log('Toggle button touched!');
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
    console.log('Toggling chatbot...');
    const chatbotContainer = document.getElementById('chatbot-container');
    const toggleButton = document.getElementById('chatbot-toggle');
    
    if (!chatbotContainer || !toggleButton) {
      console.error('Chatbot elements not found');
      return;
    }

    this.isOpen = forceState !== null ? forceState : !this.isOpen;
    console.log('Chatbot is now ' + (this.isOpen ? 'open' : 'closed'));

    if (this.isOpen) {
      chatbotContainer.classList.add('active');
      toggleButton.classList.add('active');
      // Focus input field when opened
      setTimeout(() => {
        const inputField = document.getElementById('chatbot-input');
        if (inputField) {
          inputField.focus();
        }
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
    if (!messagesContainer) {
      console.error('Messages container not found');
      this.isTyping = false;
      return;
    }
    
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

    // Use default image if product image is not available
    const imageUrl = product.image || 'images/products/placeholder.png';

    card.innerHTML = `
            <img src="${imageUrl}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-category">${product.category}</div>
                <a href="product-details.html?id=${product.id}" class="product-button">Xem chi tiết</a>
            </div>
        `;

    return card;
  }

  // Add a user message
  addUserMessage(text) {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) {
      console.error('Messages container not found');
      return;
    }
    
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message user';
    messageElement.textContent = text;

    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Send a message
  sendMessage() {
    const inputField = document.getElementById('chatbot-input');
    if (!inputField) {
      console.error('Input field not found');
      return;
    }
    
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
    // Convert message to lowercase for easier comparison
    const lowerMessage = message.toLowerCase();

    // Check if message is asking about product categories
    const categoryMatch = this.findCategoryMatch(lowerMessage);

    if (categoryMatch) {
      // Find top selling products in the category
      const topProducts = this.getTopSellingProducts(categoryMatch, 3);

      if (topProducts.length > 0) {
        this.addBotMessage(
          `Đây là ${topProducts.length} sản phẩm ${categoryMatch} bán chạy nhất của chúng tôi:`,
          topProducts
        );
      } else {
        this.addBotMessage(
          `Rất tiếc, hiện tại chúng tôi không có sản phẩm nào trong danh mục ${categoryMatch}. Bạn có thể tham khảo các danh mục khác như: ${this.categories
            .slice(0, 3)
            .join(', ')}.`
        );
      }
    } else if (
      lowerMessage.includes('xin chào') ||
      lowerMessage.includes('chào') ||
      lowerMessage.includes('hello') ||
      lowerMessage.includes('hi')
    ) {
      this.addBotMessage('Xin chào! Tôi có thể giúp gì cho bạn hôm nay?');
    } else if (
      lowerMessage.includes('cảm ơn') ||
      lowerMessage.includes('thank')
    ) {
      this.addBotMessage(
        'Không có gì! Rất vui khi được giúp đỡ bạn. Bạn có cần hỗ trợ gì thêm không?'
      );
    } else if (
      lowerMessage.includes('giá') ||
      lowerMessage.includes('báo giá')
    ) {
      this.addBotMessage(
        'Để nhận báo giá chính xác nhất, bạn có thể sử dụng công cụ Báo Giá AI của chúng tôi ở trên trang này, hoặc liên hệ trực tiếp với đội ngũ tư vấn qua số điện thoại 097.277.4646.'
      );
    } else if (
      lowerMessage.includes('liên hệ') ||
      lowerMessage.includes('tư vấn')
    ) {
      this.addBotMessage(
        'Bạn có thể liên hệ với chúng tôi qua số điện thoại 097.277.4646 hoặc ghé thăm showroom tại Số 91,93 Ngõ 85, đường Đức Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội.'
      );
    } else if (
      lowerMessage.includes('danh mục') ||
      lowerMessage.includes('sản phẩm')
    ) {
      const categoryList = this.categories.join(', ');
      this.addBotMessage(
        `Chúng tôi có các danh mục sản phẩm sau: ${categoryList}. Bạn quan tâm đến danh mục nào?`
      );
    } else {
      this.addBotMessage(
        "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất."
      );
    }
  }

  // Find matching category from user message
  findCategoryMatch(message) {
    for (const category of this.categories) {
      if (message.includes(category.toLowerCase())) {
        return category;
      }
    }

    // Check for common category aliases
    if (message.includes('tủ quần áo') || message.includes('tu quan ao')) {
      return 'Tủ Quần Áo';
    }
    if (message.includes('tủ bếp') || message.includes('tu bep')) {
      return 'Tủ Bếp';
    }
    if (message.includes('giường') || message.includes('giuong')) {
      return 'Giường Ngủ';
    }
    if (message.includes('bàn học') || message.includes('ban hoc')) {
      return 'Bàn Học';
    }
    if (message.includes('tủ giày') || message.includes('tu giay')) {
      return 'Tủ Giày';
    }
    if (message.includes('tủ sách') || message.includes('tu sach')) {
      return 'Tủ Sách';
    }
    if (message.includes('bàn làm việc') || message.includes('ban lam viec')) {
      return 'Bàn Làm Việc';
    }
    if (
      message.includes('bàn trang điểm') ||
      message.includes('ban trang diem')
    ) {
      return 'Bàn Trang Điểm';
    }

    return null;
  }

  // Get top selling products in a category
  getTopSellingProducts(category, limit = 3) {
    if (!this.products || !this.products.length) {
      return [];
    }

    // Filter products by category
    const categoryProducts = this.products.filter(
      (product) =>
        product.category === category ||
        product.category.toLowerCase() === category.toLowerCase()
    );

    // Sort by soldCount (if available) or views
    const sortedProducts = categoryProducts.sort((a, b) => {
      // First try to sort by soldCount
      if (a.soldCount !== undefined && b.soldCount !== undefined) {
        return b.soldCount - a.soldCount;
      }

      // If soldCount is not available, sort by views
      if (a.views !== undefined && b.views !== undefined) {
        return b.views - a.views;
      }

      // If neither is available, keep original order
      return 0;
    });

    // Return top products
    return sortedProducts.slice(0, limit);
  }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing chatbot...');
  
  // Check if products are loaded
  if (typeof products !== 'undefined' && Array.isArray(products)) {
    // Initialize chatbot
    window.chatbot = new AIChatbot();
    console.log('Chatbot initialized successfully');
  } else {
    console.error('Products not loaded. Chatbot initialization delayed.');

    // Try to initialize after a delay to wait for products to load
    setTimeout(() => {
      if (typeof products !== 'undefined' && Array.isArray(products)) {
        window.chatbot = new AIChatbot();
        console.log('Chatbot initialized after delay');
      } else {
        console.error(
          'Products still not loaded. Chatbot initialization failed.'
        );
      }
    }, 2000);
  }
});
