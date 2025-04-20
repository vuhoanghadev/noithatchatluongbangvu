// Review Form Functionality
document.addEventListener('DOMContentLoaded', function () {
  // Load reviews from localStorage for current product
  loadReviewsFromLocalStorage();

  // Initialize review form
  initReviewForm();
});

// Function to load reviews from localStorage
function loadReviewsFromLocalStorage() {
  try {
    // Get current product ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId || typeof products === 'undefined') return;

    // Find product
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    // Get reviews from localStorage
    const allReviews = JSON.parse(localStorage.getItem('productReviews')) || {};

    // Check if there are reviews for this product
    if (allReviews[productId] && Array.isArray(allReviews[productId])) {
      // Update product reviews with localStorage data
      product.reviews = allReviews[productId];
      console.log('Reviews loaded from localStorage successfully');
    }
  } catch (error) {
    console.error('Error loading reviews from localStorage:', error);
  }
}

function initReviewForm() {
  const reviewForm = document.getElementById('reviewForm');
  if (!reviewForm) return;

  const reviewImages = document.getElementById('reviewImages');
  const reviewVideos = document.getElementById('reviewVideos');
  const reviewAvatar = document.getElementById('reviewAvatar');
  const avatarPreview = document.getElementById('avatarPreview');
  const mediaPreview = document.getElementById('mediaPreview');
  const successMessage = document.querySelector('.review-success');
  const errorMessage = document.querySelector('.review-error');

  // Variable to store avatar data URL
  let avatarDataUrl = null;

  // Handle avatar upload
  if (reviewAvatar) {
    reviewAvatar.addEventListener('change', function (e) {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        // Resize avatar image
        resizeImage(file, 200, 200, function (resizedDataUrl) {
          // Update avatar preview
          avatarPreview.innerHTML = `
            <img src="${resizedDataUrl}" alt="Avatar">
            <div class="avatar-remove"><i class="fas fa-times"></i></div>
          `;

          // Store avatar data URL
          avatarDataUrl = resizedDataUrl;

          // Add event listener to remove button
          const removeButton = avatarPreview.querySelector('.avatar-remove');
          if (removeButton) {
            removeButton.addEventListener('click', function (event) {
              event.stopPropagation();
              // Reset avatar preview
              avatarPreview.innerHTML = `
                <div class="avatar-placeholder">
                  <i class="fas fa-user"></i>
                </div>
              `;
              // Clear avatar data URL
              avatarDataUrl = null;
              // Reset file input
              reviewAvatar.value = '';
            });
          }
        });
      }
    });
  }

  // Handle image upload preview
  if (reviewImages) {
    reviewImages.addEventListener('change', function (e) {
      handleFileUpload(e.target.files, 'image');
    });
  }

  // Handle video upload preview
  if (reviewVideos) {
    reviewVideos.addEventListener('change', function (e) {
      handleFileUpload(e.target.files, 'video');
    });
  }

  // Handle form submission
  if (reviewForm) {
    reviewForm.addEventListener('submit', function (e) {
      e.preventDefault();
      submitReview();
    });
  }

  // Function to handle file upload preview
  function handleFileUpload(files, type) {
    if (!files || files.length === 0) return;

    // Limit the number of files (max 5 total)
    const currentFiles = mediaPreview.querySelectorAll('.preview-item').length;
    const maxFiles = 5;
    const remainingSlots = maxFiles - currentFiles;

    if (remainingSlots <= 0) {
      alert('Bạn chỉ có thể tải lên tối đa 5 file (hình ảnh và video).');
      return;
    }

    // Process only the allowed number of files
    const filesToProcess = Math.min(files.length, remainingSlots);

    for (let i = 0; i < filesToProcess; i++) {
      const file = files[i];

      if (type === 'image') {
        // For images, resize before saving
        resizeImage(file, 800, 600, function (resizedDataUrl) {
          addMediaPreview(resizedDataUrl, 'image', file.type);
        });
      } else if (type === 'video') {
        // For videos, just read as data URL
        const reader = new FileReader();
        reader.onload = function (e) {
          addMediaPreview(e.target.result, 'video', file.type);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Function to resize image
  function resizeImage(file, maxWidth, maxHeight, callback) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions
        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width *= maxHeight / height;
            height = maxHeight;
          }
        }

        // Create canvas and resize
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        // Draw resized image
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        // Get data URL (JPEG format with 0.7 quality to reduce size)
        const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.7);
        callback(resizedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Function to add media preview
  function addMediaPreview(dataUrl, type, fileType) {
    const previewItem = document.createElement('div');
    previewItem.className = 'preview-item';

    if (type === 'image') {
      previewItem.innerHTML = `
        <img src="${dataUrl}" alt="Preview">
        <div class="remove-preview"><i class="fas fa-times"></i></div>
        <input type="hidden" name="mediaFiles" value="${dataUrl}" data-type="image">
      `;
    } else if (type === 'video') {
      previewItem.innerHTML = `
        <video controls>
          <source src="${dataUrl}" type="${fileType}">
        </video>
        <div class="remove-preview"><i class="fas fa-times"></i></div>
        <input type="hidden" name="mediaFiles" value="${dataUrl}" data-type="video">
      `;
    }

    mediaPreview.appendChild(previewItem);

    // Add event listener to remove button
    const removeButton = previewItem.querySelector('.remove-preview');
    if (removeButton) {
      removeButton.addEventListener('click', function () {
        mediaPreview.removeChild(previewItem);
      });
    }
  }

  // Function to show review code modal
  function showReviewCodeModal() {
    const modal = document.getElementById('reviewCodeModal');
    const closeBtn = document.querySelector('.review-code-close');
    const submitBtn = document.getElementById('reviewCodeSubmit');
    const codeInput = document.getElementById('reviewCodeInput');

    // Clear previous input
    codeInput.value = '';

    // Show modal
    modal.style.display = 'block';

    // Focus on input
    setTimeout(() => codeInput.focus(), 300);

    // Close modal when clicking on X
    closeBtn.onclick = function () {
      modal.style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };

    // Get error element
    const errorElement = document.getElementById('reviewCodeError');

    // Clear previous error
    errorElement.style.display = 'none';
    errorElement.textContent = '';

    // Submit review when clicking submit button
    submitBtn.onclick = function () {
      const reviewCode = codeInput.value.trim();
      if (validateReviewCode(reviewCode)) {
        // Hide error if previously shown
        errorElement.style.display = 'none';

        // Hide review code modal
        modal.style.display = 'none';

        // Show confirmation modal
        showReviewConfirmModal(reviewCode);
      } else {
        // Show error message in the modal
        errorElement.textContent =
          'Mã bình luận không hợp lệ. Vui lòng kiểm tra lại hoặc liên hệ cửa hàng.';
        errorElement.style.display = 'block';
        // Shake input to indicate error
        codeInput.classList.add('shake');
        setTimeout(() => {
          codeInput.classList.remove('shake');
        }, 500);
      }
    };

    // Submit when pressing Enter
    codeInput.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        // Trigger click event on submit button to show confirmation dialog
        submitBtn.click();
      } else {
        // Clear error when typing
        errorElement.style.display = 'none';
      }
    });
  }

  // Function to validate review code
  function validateReviewCode(code) {
    // Get current product ID
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    if (!productId || typeof products === 'undefined') {
      return false;
    }

    // Find product
    const product = products.find((p) => p.id === productId);

    if (!product || !product.reviewCode) {
      return false;
    }

    // Compare with product's review code
    return (
      code.trim().toUpperCase() === product.reviewCode.trim().toUpperCase()
    );
  }

  // Function to submit review
  function submitReview() {
    // Validate basic form data first
    const name = document.getElementById('reviewName').value;
    const rating = document.querySelector(
      'input[name="rating"]:checked'
    )?.value;
    const content = document.getElementById('reviewContent').value;

    if (!name || !rating || !content) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }

    // Không cần kiểm tra trùng lặp theo tên nữa

    // Show review code modal
    showReviewCodeModal();
  }

  // Đã loại bỏ hàm hasUserAlreadyReviewed

  // Function to submit review with code
  function submitReviewWithCode(reviewCode) {
    // Get form data
    const name = document.getElementById('reviewName').value;
    const rating = document.querySelector(
      'input[name="rating"]:checked'
    )?.value;
    const content = document.getElementById('reviewContent').value;
    const isAnonymous = document.getElementById('isAnonymous').checked;

    // Note: We don't need to get the product ID here as we've already validated the review code

    // Get media files
    const mediaFiles = [];
    const mediaInputs = document.querySelectorAll('input[name="mediaFiles"]');
    mediaInputs.forEach((input) => {
      mediaFiles.push({
        value: input.value,
        type: input.dataset.type,
      });
    });

    // Create review object
    const review = {
      author: name,
      date: formatDate(new Date()),
      rating: parseInt(rating),
      content: content,
      isAnonymous: isAnonymous,
      avatar: avatarDataUrl, // Add avatar data URL
      reviewCode: reviewCode, // Add review code
      images: mediaFiles
        .filter((file) => file.type === 'image')
        .map((file) => file.value),
      videos: mediaFiles
        .filter((file) => file.type === 'video')
        .map((file) => file.value),
    };

    // Show loading state
    const submitButton = reviewForm.querySelector('.submit-review');
    submitButton.innerHTML = '<span class="spinner"></span> Đang gửi...';
    submitButton.classList.add('loading');
    submitButton.disabled = true;

    // Simulate API call (replace with actual API call)
    setTimeout(() => {
      try {
        // Get current product ID
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id'));

        if (!productId || typeof products === 'undefined') {
          throw new Error('Không tìm thấy thông tin sản phẩm');
        }

        // Find product
        const product = products.find((p) => p.id === productId);
        if (!product) {
          throw new Error('Không tìm thấy sản phẩm');
        }

        // Add review to product
        if (!product.reviews) {
          product.reviews = [];
        }

        // Add review to beginning of array
        product.reviews.unshift(review);

        // Save reviews to localStorage
        saveReviewsToLocalStorage(productId, product.reviews);

        // Show success message
        successMessage.classList.add('show');

        // Reset form
        reviewForm.reset();
        mediaPreview.innerHTML = '';

        // Reload reviews section after 2 seconds with tab parameter
        setTimeout(() => {
          // Get current URL and add tab parameter
          const url = new URL(window.location.href);
          url.searchParams.set('tab', 'product-reviews');
          window.location.href = url.toString();
        }, 2000);
      } catch (error) {
        console.error('Error submitting review:', error);
        errorMessage.classList.add('show');

        // Hide error message after 5 seconds
        setTimeout(() => {
          errorMessage.classList.remove('show');
        }, 5000);
      } finally {
        // Reset button state
        submitButton.innerHTML =
          '<i class="fas fa-paper-plane"></i> Gửi đánh giá';
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
      }
    }, 1500);
  }

  // Function to save reviews to localStorage
  function saveReviewsToLocalStorage(productId, reviews) {
    try {
      // Get existing reviews from localStorage
      const allReviews =
        JSON.parse(localStorage.getItem('productReviews')) || {};

      // Update reviews for this product
      allReviews[productId] = reviews;

      // Save back to localStorage
      localStorage.setItem('productReviews', JSON.stringify(allReviews));

      console.log('Reviews saved to localStorage successfully');
    } catch (error) {
      console.error('Error saving reviews to localStorage:', error);
    }
  }

  // Helper function to format date
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  // Function to show review confirmation modal
  function showReviewConfirmModal(reviewCode) {
    const confirmModal = document.getElementById('reviewConfirmModal');
    const closeBtn = confirmModal.querySelector('.review-confirm-close');
    const cancelBtn = document.getElementById('reviewConfirmCancel');
    const submitBtn = document.getElementById('reviewConfirmSubmit');

    // Show modal
    confirmModal.style.display = 'block';

    // Close modal when clicking on X
    closeBtn.onclick = function () {
      confirmModal.style.display = 'none';
    };

    // Close modal when clicking outside
    window.onclick = function (event) {
      if (event.target == confirmModal) {
        confirmModal.style.display = 'none';
      }
    };

    // Cancel button action
    cancelBtn.onclick = function () {
      confirmModal.style.display = 'none';
    };

    // Submit button action
    submitBtn.onclick = function () {
      confirmModal.style.display = 'none';
      submitReviewWithCode(reviewCode);
    };
  }
}
