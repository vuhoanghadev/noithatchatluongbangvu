// JavaScript for mobile optimizations in Intro section

document.addEventListener('DOMContentLoaded', function () {
  // Only apply these optimizations on mobile devices
  if (window.innerWidth <= 768) {
    // Add "Read more" functionality to long text sections
    setupMobileReadMore();

    // Make story card titles collapsible on very small screens
    if (window.innerWidth <= 576) {
      setupCollapsibleSections();
    }
  }

  // Handle window resize
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
      setupMobileReadMore();

      if (window.innerWidth <= 576) {
        setupCollapsibleSections();
      }
    } else {
      // Reset mobile optimizations on larger screens
      resetMobileOptimizations();
    }
  });
});

// Setup "Read more" functionality for long text sections
function setupMobileReadMore() {
  // Target long text sections (excluding story-card paragraphs)
  const longTextElements = document.querySelectorAll(
    '.timeline-text, .brand-description'
  );

  longTextElements.forEach((element) => {
    // Skip if already processed
    if (element.classList.contains('mobile-processed')) return;

    const text = element.textContent;

    // Only add read more to longer paragraphs
    if (text.length > 120) {
      element.classList.add('mobile-condensed', 'mobile-processed');

      // Create read more button
      const readMoreBtn = document.createElement('a');
      readMoreBtn.href = '#';
      readMoreBtn.className = 'mobile-read-more';
      readMoreBtn.textContent = 'Đọc thêm';

      // Insert after the paragraph
      element.parentNode.insertBefore(readMoreBtn, element.nextSibling);

      // Add click event
      readMoreBtn.addEventListener('click', function (e) {
        e.preventDefault();

        if (element.classList.contains('expanded')) {
          element.classList.remove('expanded');
          readMoreBtn.textContent = 'Đọc thêm';

          // Scroll back to the top of the element
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          element.classList.add('expanded');
          readMoreBtn.textContent = 'Thu gọn';
        }
      });
    }
  });
}

// Setup collapsible sections for very small screens
function setupCollapsibleSections() {
  // Không áp dụng tính năng này cho phần "Câu chuyện của chúng tôi"
  // Chỉ áp dụng cho các phần khác nếu cần

  // Đảm bảo phần "Câu chuyện của chúng tôi" hiển thị đầy đủ
  const storyCards = document.querySelectorAll('.story-card');
  storyCards.forEach((card) => {
    // Đảm bảo nội dung hiển thị đầy đủ
    const content = card.querySelector('.story-card-content');
    if (content) {
      content.style.display = 'block';
      content.style.maxHeight = 'none';
    }

    // Đảm bảo các đoạn văn hiển thị đầy đủ
    const paragraphs = card.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.style.display = 'block';
      p.style.webkitLineClamp = 'none';
      p.style.overflow = 'visible';
    });
  });
}

// Reset mobile optimizations when returning to larger screens
function resetMobileOptimizations() {
  // Remove condensed text classes
  document.querySelectorAll('.mobile-condensed').forEach((element) => {
    element.classList.remove('mobile-condensed', 'expanded');
  });

  // Remove read more buttons
  document.querySelectorAll('.mobile-read-more').forEach((button) => {
    button.remove();
  });

  // Reset collapsible sections
  document.querySelectorAll('.story-card.collapsed').forEach((card) => {
    card.classList.remove('collapsed');
    const content = card.querySelector('.story-card-content');
    if (content) {
      content.style.maxHeight = '';
    }

    // Remove toggle indicators
    card.querySelectorAll('.toggle-indicator').forEach((indicator) => {
      indicator.remove();
    });
  });

  // Remove processed flags
  document.querySelectorAll('.mobile-processed').forEach((element) => {
    element.classList.remove('mobile-processed');
  });
}
