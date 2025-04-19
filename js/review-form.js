// Review Form Functionality
document.addEventListener('DOMContentLoaded', function () {
  initReviewForm();
});

function initReviewForm() {
  const reviewForm = document.getElementById('reviewForm');
  if (!reviewForm) return;

  const reviewImages = document.getElementById('reviewImages');
  const reviewVideos = document.getElementById('reviewVideos');
  const mediaPreview = document.getElementById('mediaPreview');
  const successMessage = document.querySelector('.review-success');
  const errorMessage = document.querySelector('.review-error');

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
      const reader = new FileReader();

      reader.onload = function (e) {
        const previewItem = document.createElement('div');
        previewItem.className = 'preview-item';

        if (type === 'image') {
          previewItem.innerHTML = `
            <img src="${e.target.result}" alt="Preview">
            <div class="remove-preview"><i class="fas fa-times"></i></div>
            <input type="hidden" name="mediaFiles" value="${file.name}" data-type="image">
          `;
        } else if (type === 'video') {
          previewItem.innerHTML = `
            <video controls>
              <source src="${e.target.result}" type="${file.type}">
            </video>
            <div class="remove-preview"><i class="fas fa-times"></i></div>
            <input type="hidden" name="mediaFiles" value="${file.name}" data-type="video">
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
      };

      reader.readAsDataURL(file);
    }
  }

  // Function to submit review
  function submitReview() {
    // Get form data
    const name = document.getElementById('reviewName').value;
    const rating = document.querySelector(
      'input[name="rating"]:checked'
    )?.value;
    const content = document.getElementById('reviewContent').value;
    const isAnonymous = document.getElementById('isAnonymous').checked;

    // Validate form data
    if (!name || !rating || !content) {
      alert('Vui lòng điền đầy đủ thông tin bắt buộc.');
      return;
    }

    // Get media files
    const mediaFiles = [];
    const mediaInputs = document.querySelectorAll('input[name="mediaFiles"]');
    mediaInputs.forEach((input) => {
      mediaFiles.push({
        name: input.value,
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
      images: mediaFiles
        .filter((file) => file.type === 'image')
        .map((file) => file.name),
      videos: mediaFiles
        .filter((file) => file.type === 'video')
        .map((file) => file.name),
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

        if (!productId || !window.products) {
          throw new Error('Không tìm thấy thông tin sản phẩm');
        }

        // Find product
        const product = window.products.find((p) => p.id === productId);
        if (!product) {
          throw new Error('Không tìm thấy sản phẩm');
        }

        // Add review to product
        if (!product.reviews) {
          product.reviews = [];
        }

        // Add review to beginning of array
        product.reviews.unshift(review);

        // Show success message
        successMessage.classList.add('show');

        // Reset form
        reviewForm.reset();
        mediaPreview.innerHTML = '';

        // Reload reviews section after 2 seconds
        setTimeout(() => {
          location.reload();
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

  // Helper function to format date
  function formatDate(date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }
}
