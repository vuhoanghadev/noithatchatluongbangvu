// JavaScript for Privacy Policy and Terms of Service Modals
document.addEventListener('DOMContentLoaded', function () {
  // Create modal elements
  createLegalModals();

  // Add event listeners
  const privacyLink = document.getElementById('privacy-policy-link');
  const termsLink = document.getElementById('terms-of-service-link');

  if (privacyLink) {
    privacyLink.addEventListener('click', function (e) {
      e.preventDefault();
      openModal('privacy-policy-modal');
    });
  }

  if (termsLink) {
    termsLink.addEventListener('click', function (e) {
      e.preventDefault();
      openModal('terms-of-service-modal');
    });
  }

  // Close modal when clicking/touching outside
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('legal-modal-overlay')) {
      closeAllModals();
    }
  });

  // Add touch event for mobile devices
  document.addEventListener('touchend', function (e) {
    if (e.target.classList.contains('legal-modal-overlay')) {
      closeAllModals();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Add smooth scrolling for anchor links within modals
  document
    .querySelectorAll('.legal-modal-body a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const modalBody = this.closest('.legal-modal-body');
        const targetId = this.getAttribute('href');
        const targetElement = modalBody.querySelector(targetId);

        if (targetElement) {
          // Adjust offset based on screen size
          const offset = window.innerWidth <= 480 ? 60 : 80;

          modalBody.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth',
          });
        }
      });
    });

  // Handle modal position on orientation change
  window.addEventListener('orientationchange', function () {
    // Small delay to allow the browser to complete the orientation change
    setTimeout(function () {
      const activeModal = document.querySelector('.legal-modal-overlay.active');
      if (activeModal) {
        // Reset scroll position
        const modalBody = activeModal.querySelector('.legal-modal-body');
        if (modalBody) {
          modalBody.scrollTop = 0;
        }
      }
    }, 300);
  });
});

// Function to create modal elements
function createLegalModals() {
  // Create Privacy Policy Modal
  const privacyModal = document.createElement('div');
  privacyModal.id = 'privacy-policy-modal';
  privacyModal.className = 'legal-modal-overlay';
  privacyModal.innerHTML = `
        <div class="legal-modal">
            <div class="legal-modal-decoration legal-modal-decoration-1"></div>
            <div class="legal-modal-decoration legal-modal-decoration-2"></div>

            <div class="legal-modal-header">
                <h2 class="legal-modal-title">Chính Sách Bảo Mật</h2>
                <button class="legal-modal-close">&times;</button>
            </div>

            <div class="legal-modal-body">
                <div class="legal-modal-body-content">
                    <p>Cảm ơn quý khách đã truy cập website của Nội Thất Chất Lượng Bàng Vũ. Với hơn 15 năm kinh nghiệm trong lĩnh vực thiết kế - sản xuất - lắp đặt nội thất, chúng tôi không chỉ cam kết về chất lượng sản phẩm mà còn đặc biệt coi trọng việc bảo vệ thông tin cá nhân của quý khách. Chính sách bảo mật này được xây dựng nhằm giúp quý khách hiểu rõ cách thức chúng tôi thu thập, sử dụng, bảo vệ và quản lý thông tin cá nhân của quý khách khi sử dụng website của chúng tôi.</p>

                    <h3>1. Thông tin chúng tôi thu thập</h3>
                    <p>Để phục vụ quý khách tốt nhất, chúng tôi có thể thu thập các loại thông tin sau:</p>
                    <ul>
                        <li><strong>Thông tin cá nhân được cung cấp trực tiếp:</strong> Họ tên, địa chỉ email, số điện thoại, địa chỉ giao hàng/lắp đặt, thông tin thanh toán khi quý khách liên hệ tư vấn, đặt lịch hẹn, hoặc đặt hàng.</li>
                        <li><strong>Thông tin sử dụng website:</strong> Dữ liệu về cách quý khách tương tác với website của chúng tôi, bao gồm địa chỉ IP, loại thiết bị, trình duyệt, các trang quý khách truy cập, thời gian truy cập, và các thông tin khác được thu thập tự động thông qua cookie và công nghệ theo dõi khác.</li>
                        <li><strong>Thông tin từ khảo sát và phản hồi:</strong> Các ý kiến, đánh giá, phản hồi mà quý khách cung cấp về sản phẩm và dịch vụ của chúng tôi.</li>
                        <li><strong>Thông tin từ mạng xã hội:</strong> Khi quý khách tương tác với chúng tôi qua các nền tảng mạng xã hội, chúng tôi có thể thu thập thông tin từ tài khoản mạng xã hội của quý khách theo quy định của nền tảng đó và sự đồng ý của quý khách.</li>
                    </ul>

                    <h3>2. Mục đích sử dụng thông tin</h3>
                    <p>Nội Thất Chất Lượng Bàng Vũ cam kết chỉ sử dụng thông tin của quý khách cho các mục đích sau:</p>
                    <ul>
                        <li><strong>Cung cấp và cải thiện dịch vụ:</strong> Xử lý đơn hàng, cung cấp dịch vụ tư vấn thiết kế, báo giá, lắp đặt và bảo hành sản phẩm nội thất.</li>
                        <li><strong>Liên lạc với quý khách:</strong> Phản hồi yêu cầu, giải đáp thắc mắc, thông báo về tình trạng đơn hàng, lịch lắp đặt, bảo hành và các thông tin liên quan đến dịch vụ.</li>
                        <li><strong>Cá nhân hóa trải nghiệm:</strong> Cung cấp nội dung và đề xuất sản phẩm phù hợp với sở thích và nhu cầu của quý khách.</li>
                        <li><strong>Cải thiện website và dịch vụ:</strong> Phân tích dữ liệu sử dụng để tối ưu hóa giao diện, chức năng và trải nghiệm người dùng trên website.</li>
                        <li><strong>Marketing và truyền thông:</strong> Gửi thông tin về sản phẩm mới, dịch vụ, khuyến mãi và sự kiện (chỉ khi quý khách đã đồng ý nhận thông tin này).</li>
                        <li><strong>Bảo vệ quyền lợi hợp pháp:</strong> Phát hiện, ngăn chặn và xử lý các hoạt động gian lận, lạm dụng hoặc bất hợp pháp liên quan đến dịch vụ của chúng tôi.</li>
                    </ul>

                    <h3>3. Cơ sở pháp lý cho việc xử lý thông tin</h3>
                    <p>Chúng tôi chỉ thu thập và xử lý thông tin cá nhân của quý khách khi có một trong các cơ sở pháp lý sau:</p>
                    <ul>
                        <li><strong>Thực hiện hợp đồng:</strong> Khi việc xử lý thông tin là cần thiết để thực hiện hợp đồng với quý khách hoặc để thực hiện các biện pháp theo yêu cầu của quý khách trước khi ký kết hợp đồng.</li>
                        <li><strong>Lợi ích hợp pháp:</strong> Khi chúng tôi có lợi ích hợp pháp trong việc xử lý thông tin, miễn là lợi ích đó không vượt quá quyền và lợi ích của quý khách.</li>
                        <li><strong>Sự đồng ý:</strong> Khi quý khách đã đồng ý rõ ràng cho chúng tôi xử lý thông tin cá nhân của mình cho một mục đích cụ thể.</li>
                        <li><strong>Nghĩa vụ pháp lý:</strong> Khi chúng tôi cần xử lý thông tin để tuân thủ nghĩa vụ pháp lý.</li>
                    </ul>

                    <h3>4. Bảo mật thông tin</h3>
                    <p>Bảo vệ thông tin cá nhân của quý khách là ưu tiên hàng đầu của chúng tôi. Chúng tôi áp dụng các biện pháp bảo mật kỹ thuật và tổ chức phù hợp để bảo vệ thông tin cá nhân của quý khách khỏi việc truy cập, sử dụng hoặc tiết lộ trái phép:</p>
                    <ul>
                        <li><strong>Mã hóa dữ liệu:</strong> Chúng tôi sử dụng công nghệ mã hóa tiêu chuẩn ngành để bảo vệ dữ liệu nhạy cảm, đặc biệt là thông tin thanh toán.</li>
                        <li><strong>Hạn chế truy cập:</strong> Chỉ nhân viên được ủy quyền mới có quyền truy cập vào thông tin cá nhân của quý khách và họ phải tuân thủ nghiêm ngặt các quy định về bảo mật.</li>
                        <li><strong>Đánh giá bảo mật thường xuyên:</strong> Chúng tôi thường xuyên kiểm tra và cập nhật các biện pháp bảo mật để đảm bảo mức độ bảo vệ cao nhất.</li>
                        <li><strong>Chính sách lưu trữ dữ liệu:</strong> Chúng tôi chỉ lưu trữ thông tin cá nhân trong thời gian cần thiết cho mục đích thu thập hoặc theo yêu cầu của pháp luật.</li>
                    </ul>
                    <p>Chúng tôi cam kết không bán, cho thuê, trao đổi hoặc tiết lộ thông tin cá nhân của quý khách cho bất kỳ bên thứ ba nào mà không có sự đồng ý rõ ràng của quý khách, trừ khi cần thiết để cung cấp dịch vụ theo yêu cầu của quý khách hoặc khi có yêu cầu từ cơ quan nhà nước có thẩm quyền.</p>

                    <h3>5. Cookie và công nghệ theo dõi</h3>
                    <p>Website của chúng tôi sử dụng cookie và các công nghệ tương tự để cải thiện trải nghiệm của quý khách và thu thập thông tin về cách quý khách sử dụng website:</p>
                    <ul>
                        <li><strong>Cookie cần thiết:</strong> Đảm bảo các chức năng cơ bản của website hoạt động đúng.</li>
                        <li><strong>Cookie phân tích:</strong> Giúp chúng tôi hiểu cách quý khách sử dụng website để cải thiện trải nghiệm người dùng.</li>
                        <li><strong>Cookie tiếp thị:</strong> Được sử dụng để hiển thị quảng cáo phù hợp với sở thích của quý khách.</li>
                    </ul>
                    <p>Quý khách có thể điều chỉnh cài đặt trình duyệt để từ chối một số hoặc tất cả cookie, hoặc để nhận thông báo khi cookie được gửi đến thiết bị của quý khách. Tuy nhiên, việc từ chối cookie có thể ảnh hưởng đến một số chức năng của website.</p>

                    <h3>6. Quyền của quý khách</h3>
                    <p>Theo quy định của pháp luật về bảo vệ dữ liệu cá nhân, quý khách có các quyền sau đối với thông tin cá nhân của mình:</p>
                    <ul>
                        <li><strong>Quyền truy cập:</strong> Quý khách có quyền yêu cầu bản sao thông tin cá nhân mà chúng tôi lưu trữ về quý khách.</li>
                        <li><strong>Quyền chỉnh sửa:</strong> Quý khách có quyền yêu cầu chúng tôi cập nhật hoặc sửa chữa thông tin cá nhân không chính xác.</li>
                        <li><strong>Quyền xóa:</strong> Trong một số trường hợp, quý khách có quyền yêu cầu chúng tôi xóa thông tin cá nhân của mình.</li>
                        <li><strong>Quyền hạn chế xử lý:</strong> Quý khách có quyền yêu cầu chúng tôi tạm thời hoặc vĩnh viễn ngừng xử lý một số thông tin cá nhân nhất định.</li>
                        <li><strong>Quyền phản đối:</strong> Quý khách có quyền phản đối việc xử lý thông tin cá nhân trong một số trường hợp nhất định.</li>
                        <li><strong>Quyền rút lại sự đồng ý:</strong> Khi việc xử lý dựa trên sự đồng ý của quý khách, quý khách có quyền rút lại sự đồng ý đó bất cứ lúc nào.</li>
                        <li><strong>Quyền khiếu nại:</strong> Quý khách có quyền khiếu nại với cơ quan bảo vệ dữ liệu có thẩm quyền nếu quý khách cho rằng việc xử lý thông tin cá nhân của mình vi phạm quy định về bảo vệ dữ liệu.</li>
                    </ul>
                    <p>Để thực hiện bất kỳ quyền nào nêu trên, vui lòng liên hệ với chúng tôi theo thông tin ở mục "Liên hệ" bên dưới.</p>

                    <h3>7. Chia sẻ thông tin với bên thứ ba</h3>
                    <p>Trong một số trường hợp, chúng tôi có thể chia sẻ thông tin cá nhân của quý khách với các bên thứ ba sau:</p>
                    <ul>
                        <li><strong>Đối tác cung cấp dịch vụ:</strong> Chúng tôi có thể chia sẻ thông tin với các đối tác cung cấp dịch vụ giúp chúng tôi vận hành website và cung cấp dịch vụ (như dịch vụ vận chuyển, lắp đặt, thanh toán).</li>
                        <li><strong>Đối tác kinh doanh:</strong> Khi cần thiết để cung cấp sản phẩm hoặc dịch vụ mà quý khách yêu cầu.</li>
                        <li><strong>Cơ quan nhà nước:</strong> Khi có yêu cầu từ cơ quan nhà nước có thẩm quyền hoặc khi cần thiết để tuân thủ quy định pháp luật.</li>
                        <li><strong>Trong trường hợp sáp nhập hoặc mua lại:</strong> Nếu công ty chúng tôi tham gia vào việc sáp nhập, mua lại hoặc bán tài sản, thông tin cá nhân có thể được chuyển giao như một phần của giao dịch đó.</li>
                    </ul>
                    <p>Chúng tôi chỉ chia sẻ thông tin cá nhân với các bên thứ ba khi họ cam kết bảo vệ thông tin đó với mức độ bảo mật tương đương với chúng tôi và tuân thủ các quy định về bảo vệ dữ liệu cá nhân.</p>

                    <h3>8. Thay đổi chính sách bảo mật</h3>
                    <p>Chúng tôi có thể cập nhật Chính sách Bảo mật này theo thời gian để phản ánh những thay đổi trong hoạt động kinh doanh của chúng tôi hoặc để tuân thủ các yêu cầu pháp lý mới. Khi có sự thay đổi đáng kể, chúng tôi sẽ thông báo cho quý khách thông qua email hoặc thông báo trên website của chúng tôi. Chúng tôi khuyến khích quý khách định kỳ xem lại Chính sách Bảo mật này để cập nhật thông tin mới nhất về cách chúng tôi bảo vệ thông tin cá nhân của quý khách.</p>

                    <h3>9. Liên hệ</h3>
                    <p>Nếu quý khách có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu nào liên quan đến Chính sách Bảo mật này hoặc cách chúng tôi xử lý thông tin cá nhân của quý khách, vui lòng liên hệ với chúng tôi qua:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:noithatbangvu@gmail.com">noithatbangvu@gmail.com</a></li>
                        <li><strong>Điện thoại:</strong> <a href="tel:0972774646">097.277.4646</a></li>
                    </ul>
                    <p>Chúng tôi cam kết phản hồi mọi yêu cầu trong thời gian sớm nhất có thể, thông thường trong vòng 48 giờ làm việc.</p>
                </div>
            </div>

            <div class="legal-modal-footer">
                 <p>© 2025 Nội Thất Chất Lượng Bàng Vũ. Cập nhật lần cuối: 15/04/2025</p>
            </div>
        </div>
    `;
  document.body.appendChild(privacyModal);

  // Create Terms of Service Modal
  const termsModal = document.createElement('div');
  termsModal.id = 'terms-of-service-modal';
  termsModal.className = 'legal-modal-overlay';
  termsModal.innerHTML = `
        <div class="legal-modal">
            <div class="legal-modal-decoration legal-modal-decoration-1"></div>
            <div class="legal-modal-decoration legal-modal-decoration-2"></div>

            <div class="legal-modal-header">
                <h2 class="legal-modal-title">Điều Khoản Sử Dụng</h2>
                <button class="legal-modal-close">&times;</button>
            </div>

            <div class="legal-modal-body">
                <div class="legal-modal-body-content">
                    <p>Chào mừng quý khách đến với website của Nội Thất Chất Lượng Bàng Vũ. Điều khoản sử dụng này thiết lập các quy tắc và quy định cho việc sử dụng website của chúng tôi. Bằng việc truy cập và sử dụng website này, quý khách mặc nhiên đồng ý tuân thủ các điều khoản và điều kiện được nêu dưới đây. Nếu quý khách không đồng ý với bất kỳ phần nào của điều khoản này, vui lòng không sử dụng website của chúng tôi.</p>

                    <h3>1. Định nghĩa</h3>
                    <p>Trong Điều khoản sử dụng này, các từ ngữ dưới đây được hiểu như sau:</p>
                    <ul>
                        <li><strong>"Chúng tôi", "của chúng tôi"</strong> đề cập đến Nội Thất Chất Lượng Bàng Vũ.</li>
                        <li><strong>"Quý khách", "của quý khách"</strong> đề cập đến người truy cập và sử dụng website của chúng tôi.</li>
                        <li><strong>"Website"</strong> đề cập đến trang web noithatbangvu.shop và tất cả các trang con thuộc sở hữu của Nội Thất Chất Lượng Bàng Vũ.</li>
                        <li><strong>"Nội dung"</strong> bao gồm tất cả thông tin, dữ liệu, văn bản, hình ảnh, âm thanh, video, phần mềm, mã nguồn và các tài liệu khác được hiển thị trên hoặc có thể truy cập thông qua website.</li>
                        <li><strong>"Dịch vụ"</strong> đề cập đến tất cả các dịch vụ được cung cấp thông qua website, bao gồm nhưng không giới hạn ở dịch vụ tư vấn thiết kế, báo giá, đặt hàng và hỗ trợ khách hàng.</li>
                    </ul>

                    <h3>2. Sử dụng website</h3>
                    <p>Khi sử dụng website của chúng tôi, quý khách đồng ý:</p>
                    <ul>
                        <li>Chỉ sử dụng website cho các mục đích hợp pháp và phù hợp với các điều khoản này.</li>
                        <li>Không thực hiện bất kỳ hành động nào có thể gây hại, làm gián đoạn, vô hiệu hóa, làm quá tải hoặc làm suy yếu hoạt động của website.</li>
                        <li>Không sử dụng bất kỳ thiết bị, phần mềm hoặc quy trình nào để can thiệp vào hoạt động bình thường của website.</li>
                        <li>Không sử dụng bất kỳ robot, spider, crawler hoặc các phương tiện tự động khác để truy cập website mà không có sự cho phép trước bằng văn bản của chúng tôi.</li>
                        <li>Không thu thập hoặc lưu trữ dữ liệu cá nhân về người dùng khác của website.</li>
                        <li>Không tải lên, đăng tải hoặc truyền bất kỳ virus, trojan, worm hoặc mã độc hại nào khác.</li>
                        <li>Không cố gắng truy cập trái phép vào hệ thống máy tính hoặc cơ sở dữ liệu liên quan đến website.</li>
                    </ul>

                    <h3>3. Quyền sở hữu trí tuệ</h3>
                    <p>Tất cả quyền sở hữu trí tuệ liên quan đến website và nội dung của website (bao gồm nhưng không giới hạn ở văn bản, hình ảnh, đồ họa, logo, biểu tượng, âm thanh, video, phần mềm và thiết kế) đều thuộc sở hữu của Nội Thất Chất Lượng Bàng Vũ hoặc được cấp phép hợp pháp cho chúng tôi sử dụng.</p>
                    <p>Quý khách được cấp quyền giới hạn, không độc quyền và không thể chuyển nhượng để truy cập và sử dụng website cho mục đích cá nhân, phi thương mại. Quý khách không được:</p>
                    <ul>
                        <li>Sao chép, sửa đổi, phân phối, xuất bản, truyền tải, hiển thị công khai, biểu diễn công khai, tái sản xuất, cấp phép lại, tạo các tác phẩm phái sinh, chuyển giao hoặc bán bất kỳ nội dung nào từ website mà không có sự cho phép trước bằng văn bản của chúng tôi.</li>
                        <li>Sử dụng bất kỳ nội dung nào từ website cho mục đích thương mại mà không có sự cho phép trước bằng văn bản của chúng tôi.</li>
                        <li>Gỡ bỏ bất kỳ thông báo bản quyền, thương hiệu hoặc thông báo quyền sở hữu khác từ bất kỳ nội dung nào được tải xuống từ website.</li>
                    </ul>

                    <h3>4. Thông tin sản phẩm và dịch vụ</h3>
                    <p>Chúng tôi nỗ lực cung cấp thông tin chính xác và cập nhật về sản phẩm và dịch vụ trên website. Tuy nhiên, chúng tôi không đảm bảo rằng:</p>
                    <ul>
                        <li>Mô tả sản phẩm, hình ảnh, thông số kỹ thuật, giá cả và thông tin khác là hoàn toàn chính xác, đầy đủ, đáng tin cậy, cập nhật hoặc không có lỗi.</li>
                        <li>Màu sắc của sản phẩm hiển thị trên website sẽ chính xác như sản phẩm thực tế, do sự khác biệt trong cài đặt màn hình và công nghệ hiển thị.</li>
                        <li>Tất cả sản phẩm hiển thị trên website đều có sẵn tại thời điểm đặt hàng.</li>
                    </ul>
                    <p>Chúng tôi có quyền thay đổi thông tin sản phẩm, giá cả, khuyến mãi và dịch vụ mà không cần thông báo trước. Chúng tôi có quyền giới hạn số lượng sản phẩm được bán cho mỗi khách hàng.</p>

                    <h3>5. Đặt hàng và thanh toán</h3>
                    <p>Khi đặt hàng qua website của chúng tôi, quý khách đồng ý:</p>
                    <ul>
                        <li>Cung cấp thông tin chính xác, đầy đủ và cập nhật về tên, địa chỉ, số điện thoại, email và các thông tin khác được yêu cầu.</li>
                        <li>Đơn hàng của quý khách là một đề nghị mua sản phẩm, và chỉ được xem là đã được chấp nhận khi chúng tôi gửi xác nhận đơn hàng qua email hoặc điện thoại.</li>
                        <li>Chúng tôi có quyền từ chối hoặc hủy bỏ đơn hàng của quý khách vì bất kỳ lý do gì, bao gồm nhưng không giới hạn ở lỗi trong mô tả sản phẩm hoặc giá cả, hết hàng, hoặc nếu chúng tôi nghi ngờ có gian lận.</li>
                        <li>Quý khách chịu trách nhiệm thanh toán đầy đủ cho tất cả sản phẩm và dịch vụ đã đặt, cùng với bất kỳ khoản phí vận chuyển, thuế hoặc phí áp dụng khác.</li>
                    </ul>
                    <p>Chúng tôi chấp nhận các phương thức thanh toán được liệt kê trên website. Tất cả các giao dịch thanh toán đều được xử lý thông qua các kênh thanh toán an toàn và bảo mật.</p>

                    <h3>6. Giao hàng và lắp đặt</h3>
                    <p>Chúng tôi sẽ nỗ lực giao hàng và lắp đặt sản phẩm theo thời gian đã thỏa thuận. Tuy nhiên, thời gian giao hàng và lắp đặt có thể bị ảnh hưởng bởi nhiều yếu tố ngoài tầm kiểm soát của chúng tôi. Chúng tôi không chịu trách nhiệm về bất kỳ sự chậm trễ nào do các yếu tố này gây ra.</p>
                    <p>Quý khách có trách nhiệm kiểm tra sản phẩm tại thời điểm giao hàng và lắp đặt, và thông báo cho chúng tôi về bất kỳ vấn đề hoặc khiếm khuyết nào. Việc ký nhận sản phẩm đồng nghĩa với việc quý khách đã kiểm tra và chấp nhận tình trạng của sản phẩm.</p>

                    <h3>7. Chính sách đổi trả và bảo hành</h3>
                    <p>Chúng tôi cam kết cung cấp sản phẩm chất lượng cao và dịch vụ khách hàng xuất sắc. Chính sách đổi trả và bảo hành của chúng tôi tuân theo quy định của pháp luật Việt Nam và các điều khoản cụ thể được nêu trên website.</p>
                    <p>Để yêu cầu đổi trả hoặc bảo hành, quý khách cần cung cấp bằng chứng mua hàng (hóa đơn, biên nhận) và tuân thủ các quy trình được nêu trong chính sách đổi trả và bảo hành của chúng tôi.</p>

                    <h3>8. Giới hạn trách nhiệm</h3>
                    <p>Trong phạm vi tối đa được pháp luật cho phép, Nội Thất Chất Lượng Bàng Vũ và các bên liên quan sẽ không chịu trách nhiệm đối với:</p>
                    <ul>
                        <li>Bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên, đặc biệt, hậu quả hoặc mang tính trừng phạt nào phát sinh từ việc sử dụng hoặc không thể sử dụng website hoặc dịch vụ của chúng tôi.</li>
                        <li>Bất kỳ lỗi, gián đoạn, thiếu sót, khiếm khuyết, chậm trễ trong hoạt động hoặc truyền tải, virus máy tính hoặc lỗi hệ thống và đường truyền.</li>
                        <li>Bất kỳ thiệt hại nào phát sinh từ việc truy cập trái phép hoặc thay đổi dữ liệu truyền tải hoặc tài liệu.</li>
                        <li>Bất kỳ tuyên bố hoặc hành vi nào của bên thứ ba trên website của chúng tôi.</li>
                    </ul>
                    <p>Trách nhiệm tổng hợp của chúng tôi đối với bất kỳ khiếu nại nào liên quan đến website hoặc dịch vụ sẽ không vượt quá số tiền quý khách đã thanh toán cho sản phẩm hoặc dịch vụ cụ thể đó.</p>

                    <h3>9. Bồi thường</h3>
                    <p>Quý khách đồng ý bảo vệ, bồi thường và giữ cho Nội Thất Chất Lượng Bàng Vũ và các bên liên quan không bị tổn hại từ bất kỳ khiếu nại, thiệt hại, chi phí và trách nhiệm nào, bao gồm cả phí luật sư hợp lý, phát sinh từ việc quý khách vi phạm các Điều khoản sử dụng này hoặc bất kỳ luật hoặc quyền của bên thứ ba nào.</p>

                    <h3>10. Liên kết đến website khác</h3>
                    <p>Website của chúng tôi có thể chứa các liên kết đến website của bên thứ ba. Các liên kết này được cung cấp chỉ để thuận tiện cho quý khách. Chúng tôi không kiểm soát và không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc thực tiễn của bất kỳ website bên thứ ba nào. Việc đưa vào bất kỳ liên kết nào không ngụ ý sự xác nhận của chúng tôi đối với website được liên kết.</p>

                    <h3>11. Chấm dứt</h3>
                    <p>Chúng tôi có quyền, theo quyết định riêng của mình, chấm dứt hoặc hạn chế quyền truy cập của quý khách vào website hoặc bất kỳ dịch vụ nào trên website, mà không cần thông báo trước, vì bất kỳ lý do gì, bao gồm nhưng không giới hạn ở việc vi phạm các Điều khoản sử dụng này.</p>

                    <h3>12. Luật áp dụng và giải quyết tranh chấp</h3>
                    <p>Các Điều khoản sử dụng này được điều chỉnh và giải thích theo luật pháp Việt Nam. Bất kỳ tranh chấp nào phát sinh từ hoặc liên quan đến việc sử dụng website hoặc các Điều khoản sử dụng này sẽ được giải quyết thông qua thương lượng thiện chí. Nếu không thể giải quyết thông qua thương lượng, tranh chấp sẽ được đưa ra giải quyết tại tòa án có thẩm quyền tại Việt Nam.</p>

                    <h3>13. Thay đổi điều khoản</h3>
                    <p>Chúng tôi có quyền sửa đổi, cập nhật hoặc thay đổi các Điều khoản sử dụng này vào bất kỳ lúc nào mà không cần thông báo trước. Bất kỳ thay đổi nào sẽ có hiệu lực ngay khi được đăng trên website. Việc quý khách tiếp tục sử dụng website sau khi các thay đổi được đăng tải đồng nghĩa với việc quý khách chấp nhận các điều khoản đã được sửa đổi.</p>
                    <p>Chúng tôi khuyến nghị quý khách thường xuyên xem lại các Điều khoản sử dụng này để cập nhật về bất kỳ thay đổi nào.</p>

                    <h3>14. Điều khoản riêng biệt</h3>
                    <p>Nếu bất kỳ điều khoản nào trong các Điều khoản sử dụng này bị coi là không hợp lệ, bất hợp pháp hoặc không thể thực thi vì bất kỳ lý do gì, điều khoản đó sẽ được tách ra khỏi các điều khoản còn lại, và sẽ không ảnh hưởng đến hiệu lực và khả năng thực thi của bất kỳ điều khoản còn lại nào.</p>

                    <h3>15. Liên hệ</h3>
                    <p>Nếu quý khách có bất kỳ câu hỏi, thắc mắc hoặc góp ý nào về các Điều khoản sử dụng này hoặc về website của chúng tôi, vui lòng liên hệ với chúng tôi qua:</p>
                    <ul>
                        <li><strong>Email:</strong> <a href="mailto:noithatbangvu@gmail.com">noithatbangvu@gmail.com</a></li>
                        <li><strong>Điện thoại:</strong> <a href="tel:0972774646">097.277.4646</a></li>
                    </ul>
                    <p>Chúng tôi sẽ nỗ lực phản hồi mọi thắc mắc của quý khách trong thời gian sớm nhất.</p>
                </div>
            </div>

            <div class="legal-modal-footer">
                <p>© 2025 Nội Thất Chất Lượng Bàng Vũ. Cập nhật lần cuối: 15/04/2025</p>
            </div>
        </div>
    `;
  document.body.appendChild(termsModal);

  // Add event listeners to close buttons
  const closeButtons = document.querySelectorAll('.legal-modal-close');
  closeButtons.forEach((button) => {
    button.addEventListener('click', closeAllModals);
  });
}

// Function to open modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }
}

// Function to close all modals
function closeAllModals() {
  const modals = document.querySelectorAll('.legal-modal-overlay');
  modals.forEach((modal) => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = ''; // Restore scrolling
}
