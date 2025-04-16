// Create a global function to open the modal
window.openBookingModal = function () {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
};

document.addEventListener('DOMContentLoaded', function () {
  // Get modal elements
  const bookingModal = document.getElementById('bookingModal');
  const closeModal = document.getElementById('closeModal');
  const bookingForm = document.getElementById('bookingForm');

  // Get all buttons that should open the modal
  const bookingButtons = document.querySelectorAll('.btn-service');

  // Function to open modal
  function openModal() {
    if (!bookingModal) return;
    bookingModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  }

  // Function to close modal
  function closeModal() {
    bookingModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  }

  // Add click event to booking buttons
  bookingButtons.forEach((button) => {
    // Check if the button is for booking (contains "Đặt Lịch" text or has ID "bookingButton")
    if (
      button.textContent.includes('Đặt Lịch') ||
      button.textContent.includes('đặt lịch') ||
      button.id === 'bookingButton'
    ) {
      button.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        openModal();
      });
    }
  });

  // Direct event for the booking button with ID
  const bookingButton = document.getElementById('bookingButton');
  if (bookingButton) {
    bookingButton.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  }

  // Close modal when clicking the close button
  closeModal.addEventListener('click', function () {
    // Use the closeModal function
    bookingModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  });

  // Close modal when clicking outside the modal content
  bookingModal.addEventListener('click', function (e) {
    if (e.target === bookingModal) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });

  // Close modal when pressing Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && bookingModal.classList.contains('active')) {
      bookingModal.classList.remove('active');
      document.body.style.overflow = ''; // Re-enable scrolling
    }
  });

  // Handle form submission
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;

    // Simple validation
    if (!fullName || !phone) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Here you would typically send the data to a server
    // For demo purposes, we'll just show a success message
    alert(
      `Cảm ơn ${fullName}! Chúng tôi sẽ liên hệ với bạn qua số điện thoại ${phone} trong thời gian sớm nhất.`
    );

    // Reset form and close modal
    bookingForm.reset();
    bookingModal.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
  });
});
