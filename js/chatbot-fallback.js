/**
 * Fallback script for chatbot button
 * This is a simplified version that should work even if the main script fails
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Fallback script loaded');
    
    // Kiểm tra xem nút chatbot đã tồn tại chưa
    let chatbotToggle = document.getElementById('chatbot-toggle');
    
    // Nếu không tìm thấy nút, tạo một nút mới
    if (!chatbotToggle) {
        console.log('Creating fallback chatbot button');
        
        // Tạo nút chatbot
        chatbotToggle = document.createElement('button');
        chatbotToggle.id = 'chatbot-toggle-fallback';
        chatbotToggle.className = 'chatbot-toggle';
        chatbotToggle.setAttribute('type', 'button');
        chatbotToggle.setAttribute('aria-label', 'Mở trợ lý AI');
        chatbotToggle.innerHTML = '<i class="fas fa-robot"></i>';
        
        // Thêm vào body
        document.body.appendChild(chatbotToggle);
    }
    
    // Thêm inline style để đảm bảo nút hiển thị đúng
    chatbotToggle.style.cssText = `
        position: fixed !important;
        bottom: 20px !important;
        right: 20px !important;
        width: 60px !important;
        height: 60px !important;
        border-radius: 50% !important;
        background: linear-gradient(135deg, #f97316, #ea580c) !important;
        color: white !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        cursor: pointer !important;
        box-shadow: 0 4px 15px rgba(249, 115, 22, 0.4) !important;
        z-index: 99999 !important;
        border: none !important;
        outline: none !important;
        padding: 0 !important;
        margin: 0 !important;
        font-size: 24px !important;
        line-height: 1 !important;
    `;
    
    // Thêm sự kiện click trực tiếp
    chatbotToggle.onclick = function() {
        console.log('Fallback button clicked');
        
        // Tìm container chatbot
        const chatbotContainer = document.getElementById('chatbot-container');
        
        // Nếu không tìm thấy container, tạo một container mới
        if (!chatbotContainer) {
            alert('Xin chào! Tôi là trợ lý AI của Nội Thất Chất Lượng Bàng Vũ. Tôi có thể giúp bạn tìm kiếm sản phẩm hoặc trả lời các câu hỏi về sản phẩm của chúng tôi.');
            return;
        }
        
        // Chuyển đổi trạng thái hiển thị
        if (chatbotContainer.classList.contains('active')) {
            chatbotContainer.classList.remove('active');
            chatbotToggle.classList.remove('active');
        } else {
            chatbotContainer.classList.add('active');
            chatbotToggle.classList.add('active');
            
            // Thêm tin nhắn chào mừng nếu chưa có
            const messagesContainer = document.getElementById('chatbot-messages');
            if (messagesContainer && messagesContainer.children.length === 0) {
                const welcomeMessage = document.createElement('div');
                welcomeMessage.className = 'chatbot-message bot';
                welcomeMessage.textContent = 'Xin chào! Tôi là trợ lý AI của Nội Thất Chất Lượng Bàng Vũ. Tôi có thể giúp bạn tìm kiếm sản phẩm hoặc trả lời các câu hỏi về sản phẩm của chúng tôi.';
                messagesContainer.appendChild(welcomeMessage);
                
                setTimeout(() => {
                    const helpMessage = document.createElement('div');
                    helpMessage.className = 'chatbot-message bot';
                    helpMessage.textContent = "Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất.";
                    messagesContainer.appendChild(helpMessage);
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }, 1000);
            }
        }
    };
    
    // Thêm sự kiện touch cho thiết bị di động
    chatbotToggle.addEventListener('touchstart', function(e) {
        e.preventDefault();
        this.onclick();
    });
    
    // Thêm hiệu ứng nhấp nháy
    chatbotToggle.style.animation = 'pulse 2s infinite';
    
    // Thêm sự kiện đóng chatbot
    const closeButton = document.getElementById('chatbot-close');
    if (closeButton) {
        closeButton.onclick = function() {
            const chatbotContainer = document.getElementById('chatbot-container');
            if (chatbotContainer) {
                chatbotContainer.classList.remove('active');
                if (chatbotToggle) {
                    chatbotToggle.classList.remove('active');
                }
            }
        };
    }
    
    // Thêm sự kiện gửi tin nhắn
    const sendButton = document.getElementById('chatbot-send');
    const inputField = document.getElementById('chatbot-input');
    
    if (sendButton && inputField) {
        const sendMessage = function() {
            const message = inputField.value.trim();
            if (!message) return;
            
            // Thêm tin nhắn của người dùng
            const messagesContainer = document.getElementById('chatbot-messages');
            if (messagesContainer) {
                const userMessage = document.createElement('div');
                userMessage.className = 'chatbot-message user';
                userMessage.textContent = message;
                messagesContainer.appendChild(userMessage);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                
                // Xóa nội dung input
                inputField.value = '';
                
                // Hiển thị tin nhắn đang nhập
                const typingIndicator = document.createElement('div');
                typingIndicator.className = 'chatbot-message bot typing';
                typingIndicator.innerHTML = `
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                `;
                messagesContainer.appendChild(typingIndicator);
                messagesContainer.scrollTop = messagesContainer.scrollHeight;
                
                // Sau một khoảng thời gian, hiển thị phản hồi
                setTimeout(() => {
                    messagesContainer.removeChild(typingIndicator);
                    
                    const botMessage = document.createElement('div');
                    botMessage.className = 'chatbot-message bot';
                    
                    // Phản hồi đơn giản
                    const lowerMessage = message.toLowerCase();
                    if (lowerMessage.includes('xin chào') || lowerMessage.includes('chào') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
                        botMessage.textContent = 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay?';
                    } else if (lowerMessage.includes('cảm ơn') || lowerMessage.includes('thank')) {
                        botMessage.textContent = 'Không có gì! Rất vui khi được giúp đỡ bạn. Bạn có cần hỗ trợ gì thêm không?';
                    } else if (lowerMessage.includes('giá') || lowerMessage.includes('báo giá')) {
                        botMessage.textContent = 'Để nhận báo giá chính xác nhất, bạn có thể sử dụng công cụ Báo Giá AI của chúng tôi ở trên trang này, hoặc liên hệ trực tiếp với đội ngũ tư vấn qua số điện thoại 097.277.4646.';
                    } else if (lowerMessage.includes('liên hệ') || lowerMessage.includes('tư vấn')) {
                        botMessage.textContent = 'Bạn có thể liên hệ với chúng tôi qua số điện thoại 097.277.4646 hoặc ghé thăm showroom tại Số 91,93 Ngõ 85, đường Đức Diễn, Phúc Diễn, Bắc Từ Liêm, Hà Nội.';
                    } else {
                        botMessage.textContent = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Bạn có thể hỏi tôi về các danh mục sản phẩm như 'Tủ Quần Áo', 'Tủ Bếp', 'Giường Ngủ', v.v. để xem các sản phẩm bán chạy nhất.";
                    }
                    
                    messagesContainer.appendChild(botMessage);
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }, 1500);
            }
        };
        
        // Thêm sự kiện click cho nút gửi
        sendButton.onclick = sendMessage;
        
        // Thêm sự kiện Enter cho input
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});
