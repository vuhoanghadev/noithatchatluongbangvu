/**
 * AI Chatbot Simple Version
 * Phiên bản đơn giản nhất của chatbot
 */

// Khi trang được tải xong
document.addEventListener('DOMContentLoaded', function() {
    console.log('Simple chatbot script loaded');
    
    // Lấy các phần tử cần thiết
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    // Kiểm tra xem các phần tử có tồn tại không
    if (!chatbotToggle || !chatbotContainer) {
        console.error('Chatbot elements not found');
        return;
    }
    
    console.log('Chatbot elements found');
    
    // Thêm sự kiện click cho nút toggle
    chatbotToggle.onclick = function() {
        console.log('Toggle button clicked');
        
        // Chuyển đổi trạng thái hiển thị của chatbot
        if (chatbotContainer.classList.contains('active')) {
            // Nếu đang hiển thị, ẩn đi
            chatbotContainer.classList.remove('active');
            chatbotToggle.classList.remove('active');
            
            // Thêm style trực tiếp
            chatbotContainer.style.transform = 'translateY(20px)';
            chatbotContainer.style.opacity = '0';
            chatbotContainer.style.pointerEvents = 'none';
            chatbotContainer.style.visibility = 'hidden';
        } else {
            // Nếu đang ẩn, hiển thị lên
            chatbotContainer.classList.add('active');
            chatbotToggle.classList.add('active');
            
            // Thêm style trực tiếp
            chatbotContainer.style.transform = 'translateY(0)';
            chatbotContainer.style.opacity = '1';
            chatbotContainer.style.pointerEvents = 'all';
            chatbotContainer.style.visibility = 'visible';
            
            // Thêm tin nhắn chào mừng nếu chưa có
            if (chatbotMessages && chatbotMessages.children.length === 0) {
                // Tạo tin nhắn chào mừng
                const welcomeMessage = document.createElement('div');
                welcomeMessage.className = 'chatbot-message bot';
                welcomeMessage.textContent = 'Xin chào! Tôi là trợ lý AI của Nội Thất Chất Lượng Bàng Vũ. Tôi có thể giúp bạn tìm kiếm sản phẩm hoặc trả lời các câu hỏi về sản phẩm của chúng tôi.';
                chatbotMessages.appendChild(welcomeMessage);
                
                // Thêm tin nhắn hướng dẫn sau 1 giây
                setTimeout(function() {
                    const helpMessage = document.createElement('div');
                    helpMessage.className = 'chatbot-message bot';
                    helpMessage.textContent = "Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất.";
                    chatbotMessages.appendChild(helpMessage);
                    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                }, 1000);
            }
            
            // Focus vào ô input
            if (chatbotInput) {
                setTimeout(function() {
                    chatbotInput.focus();
                }, 300);
            }
        }
    };
    
    // Thêm sự kiện click cho nút đóng
    if (chatbotClose) {
        chatbotClose.onclick = function() {
            console.log('Close button clicked');
            
            // Ẩn chatbot
            chatbotContainer.classList.remove('active');
            chatbotToggle.classList.remove('active');
            
            // Thêm style trực tiếp
            chatbotContainer.style.transform = 'translateY(20px)';
            chatbotContainer.style.opacity = '0';
            chatbotContainer.style.pointerEvents = 'none';
            chatbotContainer.style.visibility = 'hidden';
        };
    }
    
    // Thêm sự kiện gửi tin nhắn
    if (chatbotSend && chatbotInput && chatbotMessages) {
        // Hàm gửi tin nhắn
        const sendMessage = function() {
            // Lấy nội dung tin nhắn
            const message = chatbotInput.value.trim();
            if (!message) return;
            
            console.log('Sending message:', message);
            
            // Thêm tin nhắn của người dùng
            const userMessage = document.createElement('div');
            userMessage.className = 'chatbot-message user';
            userMessage.textContent = message;
            chatbotMessages.appendChild(userMessage);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            
            // Xóa nội dung input
            chatbotInput.value = '';
            
            // Hiển thị đang nhập
            const typingIndicator = document.createElement('div');
            typingIndicator.className = 'chatbot-message bot typing';
            typingIndicator.innerHTML = `
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            `;
            chatbotMessages.appendChild(typingIndicator);
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            
            // Xử lý tin nhắn và phản hồi sau 1.5 giây
            setTimeout(function() {
                // Xóa đang nhập
                chatbotMessages.removeChild(typingIndicator);
                
                // Tạo tin nhắn phản hồi
                const botMessage = document.createElement('div');
                botMessage.className = 'chatbot-message bot';
                
                // Xử lý tin nhắn
                const lowerMessage = message.toLowerCase();
                
                if (lowerMessage.includes('tủ quần áo') || lowerMessage.includes('tu quan ao')) {
                    // Hiển thị sản phẩm tủ quần áo
                    botMessage.textContent = 'Đây là một số sản phẩm Tủ Quần Áo bán chạy nhất của chúng tôi:';
                    chatbotMessages.appendChild(botMessage);
                    
                    // Tạo container cho sản phẩm
                    const productsContainer = document.createElement('div');
                    productsContainer.className = 'products-container';
                    
                    // Tạo 2 sản phẩm mẫu
                    for (let i = 0; i < 2; i++) {
                        const productCard = document.createElement('div');
                        productCard.className = 'product-card';
                        productCard.innerHTML = `
                            <img src="images/products/product${i+1}.png" alt="Tủ Quần Áo ${i+1}" class="product-image">
                            <div class="product-info">
                                <div class="product-name">Tủ Quần Áo Hiện Đại ${i+1}</div>
                                <div class="product-category">Tủ Quần Áo</div>
                                <a href="product-details.html?id=${i+1}" class="product-button">Xem chi tiết</a>
                            </div>
                        `;
                        productsContainer.appendChild(productCard);
                    }
                    
                    chatbotMessages.appendChild(productsContainer);
                } else if (lowerMessage.includes('tủ bếp') || lowerMessage.includes('tu bep')) {
                    // Hiển thị sản phẩm tủ bếp
                    botMessage.textContent = 'Đây là một số sản phẩm Tủ Bếp bán chạy nhất của chúng tôi:';
                    chatbotMessages.appendChild(botMessage);
                    
                    // Tạo container cho sản phẩm
                    const productsContainer = document.createElement('div');
                    productsContainer.className = 'products-container';
                    
                    // Tạo 2 sản phẩm mẫu
                    for (let i = 0; i < 2; i++) {
                        const productCard = document.createElement('div');
                        productCard.className = 'product-card';
                        productCard.innerHTML = `
                            <img src="images/products/product${i+2}.png" alt="Tủ Bếp ${i+1}" class="product-image">
                            <div class="product-info">
                                <div class="product-name">Tủ Bếp Hiện Đại ${i+1}</div>
                                <div class="product-category">Tủ Bếp</div>
                                <a href="product-details.html?id=${i+3}" class="product-button">Xem chi tiết</a>
                            </div>
                        `;
                        productsContainer.appendChild(productCard);
                    }
                    
                    chatbotMessages.appendChild(productsContainer);
                } else if (lowerMessage.includes('giường') || lowerMessage.includes('giuong')) {
                    // Hiển thị sản phẩm giường ngủ
                    botMessage.textContent = 'Đây là một số sản phẩm Giường Ngủ bán chạy nhất của chúng tôi:';
                    chatbotMessages.appendChild(botMessage);
                    
                    // Tạo container cho sản phẩm
                    const productsContainer = document.createElement('div');
                    productsContainer.className = 'products-container';
                    
                    // Tạo 2 sản phẩm mẫu
                    for (let i = 0; i < 2; i++) {
                        const productCard = document.createElement('div');
                        productCard.className = 'product-card';
                        productCard.innerHTML = `
                            <img src="images/products/product${i+4}.png" alt="Giường Ngủ ${i+1}" class="product-image">
                            <div class="product-info">
                                <div class="product-name">Giường Ngủ Hiện Đại ${i+1}</div>
                                <div class="product-category">Giường Ngủ</div>
                                <a href="product-details.html?id=${i+5}" class="product-button">Xem chi tiết</a>
                            </div>
                        `;
                        productsContainer.appendChild(productCard);
                    }
                    
                    chatbotMessages.appendChild(productsContainer);
                } else if (lowerMessage.includes('xin chào') || lowerMessage.includes('chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                    botMessage.textContent = 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay?';
                    chatbotMessages.appendChild(botMessage);
                } else if (lowerMessage.includes('cảm ơn') || lowerMessage.includes('thank')) {
                    botMessage.textContent = 'Không có gì! Rất vui khi được giúp đỡ bạn. Bạn có cần hỗ trợ gì thêm không?';
                    chatbotMessages.appendChild(botMessage);
                } else if (lowerMessage.includes('giá') || lowerMessage.includes('báo giá')) {
                    botMessage.textContent = 'Để nhận báo giá chính xác nhất, bạn có thể sử dụng công cụ Báo Giá AI của chúng tôi ở trên trang này, hoặc liên hệ trực tiếp với đội ngũ tư vấn qua số điện thoại 097.277.4646.';
                    chatbotMessages.appendChild(botMessage);
                } else if (lowerMessage.includes('liên hệ') || lowerMessage.includes('tư vấn')) {
                    botMessage.textContent = 'Bạn có thể liên hệ với chúng tôi qua số điện thoại 097.277.4646 hoặc ghé thăm showroom tại Số 91,93 Ngõ 85, đường Đức Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội.';
                    chatbotMessages.appendChild(botMessage);
                } else if (lowerMessage.includes('danh mục') || lowerMessage.includes('sản phẩm')) {
                    botMessage.textContent = 'Chúng tôi có các danh mục sản phẩm sau: Tủ Quần Áo, Tủ Bếp, Giường Ngủ, Bàn Học, Tủ Giày, Tủ Sách, Bàn Làm Việc, Bàn Trang Điểm. Bạn quan tâm đến danh mục nào?';
                    chatbotMessages.appendChild(botMessage);
                } else {
                    botMessage.textContent = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất.";
                    chatbotMessages.appendChild(botMessage);
                }
                
                // Cuộn xuống dưới
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }, 1500);
        };
        
        // Thêm sự kiện click cho nút gửi
        chatbotSend.onclick = sendMessage;
        
        // Thêm sự kiện Enter cho input
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
