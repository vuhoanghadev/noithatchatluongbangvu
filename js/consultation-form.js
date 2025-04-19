// Consultation Form Handling
document.addEventListener('DOMContentLoaded', function () {
  // Wait for the product details to load
  setTimeout(function () {
    initConsultationForm();
  }, 1000);
});

function initConsultationForm() {
  const submitButton = document.getElementById('submit-consultation');
  const phoneInput = document.getElementById('callback-phone');
  const successMessage = document.getElementById('consultation-success');

  if (!submitButton || !phoneInput || !successMessage) return;

  submitButton.addEventListener('click', function () {
    const phoneNumber = phoneInput.value.trim();

    // Validate phone number (simple Vietnamese phone number validation)
    if (!isValidVietnamesePhone(phoneNumber)) {
      alert('Vui lòng nhập số điện thoại hợp lệ (10 số, bắt đầu bằng 0)');
      phoneInput.focus();
      return;
    }

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Đang gửi...';

    // Add loading class to parent for visual feedback
    const callbackContainer = document.querySelector('.consultation-callback');
    if (callbackContainer) {
      callbackContainer.classList.add('loading');
    }

    // Get product information
    const productName =
      document.querySelector('.product-info h1')?.textContent ||
      'Không xác định';
    const productUrl = window.location.href;

    // Simulate sending data to server
    setTimeout(function () {
      // Show success message
      successMessage.style.display = 'block';

      // Clear input
      phoneInput.value = '';

      // Hide success message after 5 seconds
      setTimeout(function () {
        successMessage.style.display = 'none';
      }, 5000);

      // Log data that would be sent to server
      console.log('Form data that would be sent:', {
        phone: phoneNumber,
        productName: productName,
        productUrl: productUrl,
      });

      // Reset button
      submitButton.disabled = false;
      submitButton.innerHTML =
        '<i class="fas fa-paper-plane"></i> Gửi yêu cầu tư vấn';

      // Remove loading class
      if (callbackContainer) {
        callbackContainer.classList.remove('loading');
      }
    }, 1500);
  });

  // Add input validation
  phoneInput.addEventListener('input', function () {
    // Remove non-numeric characters
    this.value = this.value.replace(/[^0-9]/g, '');

    // Limit to 10 digits
    if (this.value.length > 10) {
      this.value = this.value.slice(0, 10);
    }
  });
}

// Vietnamese phone number validation
function isValidVietnamesePhone(phone) {
  const regex = /^0\d{9}$/;
  return regex.test(phone);
}
