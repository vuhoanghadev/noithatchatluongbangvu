// Simple modal functionality
document.addEventListener('DOMContentLoaded', function () {
  // Get elements
  const bookingButton = document.getElementById('bookingButton');
  const bookingModal = document.getElementById('bookingModal');
  const closeModal = document.getElementById('closeModal');
  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const loadingOverlay = document.getElementById('loadingOverlay');

  // Function to show modal
  function showModal() {
    if (bookingModal) {
      // Save current scroll position
      const scrollY = window.scrollY;

      // Check if form was previously submitted in this session
      const formSubmitted = sessionStorage.getItem('formSubmitted');

      // Clear the flag
      sessionStorage.removeItem('formSubmitted');

      // Make sure loading overlay is hidden
      if (loadingOverlay) {
        loadingOverlay.classList.remove('show');

        // Reset loading text
        const loadingText = loadingOverlay.querySelector('.loading-text');
        if (loadingText) {
          loadingText.textContent = 'Đang xử lý yêu cầu...';
        }
      }

      // Make sure success notification is hidden
      if (bookingSuccess) {
        bookingSuccess.classList.remove('show');
      }

      // Make sure modal content is visible
      const modalContent = document.querySelector('.booking-modal');
      if (modalContent) {
        // Reset any inline styles that might have been set
        modalContent.style.opacity = '';
        modalContent.style.visibility = '';

        // Force reflow to ensure styles are applied
        void modalContent.offsetWidth;

        // Now set to visible
        modalContent.style.opacity = '1';
        modalContent.style.visibility = 'visible';
      }

      // Show modal
      bookingModal.style.display = 'flex';
      bookingModal.style.opacity = '1';
      bookingModal.style.visibility = 'visible';

      // Prevent body scrolling but maintain position
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    }
  }

  // Function to hide modal
  function hideModal() {
    if (bookingModal) {
      // Get the scroll position from body top
      const scrollY = document.body.style.top;

      // Hide modal
      bookingModal.style.display = 'none';
      bookingModal.style.opacity = '0';
      bookingModal.style.visibility = 'hidden';

      // Restore body scrolling and position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';

      // Scroll back to original position
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }

  // Function to show success notification
  function showSuccessNotification(name, phone) {
    if (bookingSuccess) {
      // Set user data in success message
      const successName = document.getElementById('successName');
      const successPhone = document.getElementById('successPhone');

      if (successName && name) {
        successName.textContent = name;
      }

      if (successPhone && phone) {
        // Format phone number for better readability
        const formattedPhone = formatPhoneNumber(phone);
        successPhone.textContent = formattedPhone;
      }

      // Show success notification
      bookingSuccess.classList.add('show');
    }
  }

  // Helper function to format phone number
  function formatPhoneNumber(phone) {
    // Remove any non-digit characters
    const digits = phone.replace(/\D/g, '');

    // Format based on length
    if (digits.length === 10) {
      return digits.replace(/(\d{4})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (digits.length === 11) {
      return digits.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3');
    } else {
      // If not standard length, just add spaces every 3-4 digits
      return digits.replace(/(\d{3,4})(?=\d)/g, '$1 ');
    }
  }

  // Function to hide success notification
  function hideSuccessNotification() {
    if (bookingSuccess) {
      bookingSuccess.classList.remove('show');

      // Hide the entire modal overlay after hiding success notification
      setTimeout(function () {
        hideModal();

        // Reset modal content visibility for next time
        const modalContent = document.querySelector('.booking-modal');
        if (modalContent) {
          // We set these after modal is hidden to avoid flicker
          setTimeout(function () {
            modalContent.style.opacity = '';
            modalContent.style.visibility = '';
          }, 300);
        }
      }, 300);
    }
  }

  // Add click event to booking button
  if (bookingButton) {
    bookingButton.onclick = function (e) {
      e.preventDefault();
      showModal();
    };
  }

  // Add click event to close button
  if (closeModal) {
    closeModal.onclick = function () {
      hideModal();
    };
  }

  // Close modal when clicking outside
  window.onclick = function (e) {
    if (e.target === bookingModal) {
      // Check if success notification is visible
      if (bookingSuccess && bookingSuccess.classList.contains('show')) {
        hideSuccessNotification();
      } else {
        hideModal();
      }
    }
  };

  // Add click event to success close button
  if (successCloseBtn) {
    successCloseBtn.onclick = function () {
      hideSuccessNotification();
      // hideModal() is called inside hideSuccessNotification
    };
  }

  // Handle form submission
  if (bookingForm) {
    bookingForm.onsubmit = function (e) {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value;
      const phone = document.getElementById('phone').value;

      if (!fullName || !phone) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
      }

      // Show loading state
      const submitBtn = e.target.querySelector('.booking-form-submit');
      submitBtn.classList.add('loading');

      // Show loading overlay
      if (loadingOverlay) {
        loadingOverlay.classList.add('show');

        // Get loading text element
        const loadingText = loadingOverlay.querySelector('.loading-text');

        // Change loading text after a delay
        if (loadingText) {
          // First message
          setTimeout(function () {
            loadingText.textContent = 'Đang kiểm tra thông tin...';
          }, 200);

          // Second message
          setTimeout(function () {
            loadingText.textContent = 'Đang xử lý...';
          }, 800);

          // Third message with user name
          setTimeout(function () {
            loadingText.textContent =
              'Đang gửi thông tin của ' + fullName + '...';
          }, 2500);

          // Fourth message with company name
          setTimeout(function () {
            loadingText.textContent =
              'Đang gửi thông tin đến Nội Thất Bàng Vũ...';
          }, 3500);

          // Final message
          setTimeout(function () {
            loadingText.textContent = 'Đang xác nhận...';
          }, 1000);
        }
      }

      // Simulate API call with timeout
      setTimeout(function () {
        // Log form data
        console.log('Name:', fullName);
        console.log('Phone:', phone);

        // Reset form
        bookingForm.reset();

        // Remove loading state
        submitBtn.classList.remove('loading');

        // Hide loading overlay
        if (loadingOverlay) {
          loadingOverlay.classList.remove('show');
        }

        // Hide modal content but keep overlay visible
        const modalContent = document.querySelector('.booking-modal');
        if (modalContent) {
          modalContent.style.opacity = '0';
          modalContent.style.visibility = 'hidden';

          // Show success notification after a slight delay
          setTimeout(function () {
            // Pass user data to success notification
            showSuccessNotification(fullName, phone);

            // Store a flag in sessionStorage to indicate form was submitted
            // This helps us handle page refreshes or multiple modal openings
            sessionStorage.setItem('formSubmitted', 'true');
          }, 300);
        }
      }, 6000); // 5 seconds loading time
    };
  }

  // Add a test button for debugging
  const testButton = document.createElement('button');
  testButton.textContent = 'Test Modal';
  testButton.style.position = 'fixed';
  testButton.style.bottom = '20px';
  testButton.style.right = '20px';
  testButton.style.zIndex = '9998';
  testButton.style.padding = '10px 15px';
  testButton.style.background = '#f97316';
  testButton.style.color = 'white';
  testButton.style.border = 'none';
  testButton.style.borderRadius = '5px';
  testButton.style.cursor = 'pointer';

  testButton.onclick = function () {
    showModal();
  };

  document.body.appendChild(testButton);
});
