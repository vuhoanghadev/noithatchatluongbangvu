// Menu mobile toggle - Đã được xử lý trong header.js
// Không thêm event listener ở đây để tránh xung đột
document.addEventListener('DOMContentLoaded', () => {
  // Đã chuyển xử lý menu toggle sang header.js
  console.log('main.js loaded - menu toggle handled in header.js');
});

// Fade-in animation cho các section
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s, transform 0.5s';
  observer.observe(section);
});
