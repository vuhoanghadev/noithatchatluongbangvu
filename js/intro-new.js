document.addEventListener('DOMContentLoaded', function () {
  // Timeline animation on scroll
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };

  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        timelineObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  timelineItems.forEach((item) => {
    timelineObserver.observe(item);
  });

  // Project category filter
  const projectCategories = document.querySelectorAll('.project-category');
  const projectCards = document.querySelectorAll('.project-card');

  projectCategories.forEach((category) => {
    category.addEventListener('click', () => {
      // Remove active class from all categories
      projectCategories.forEach((cat) => cat.classList.remove('active'));

      // Add active class to clicked category
      category.classList.add('active');

      const filter = category.getAttribute('data-filter');

      // Show all projects if filter is 'all'
      if (filter === 'all') {
        projectCards.forEach((card) => {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        });
        return;
      }

      // Filter projects based on category
      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');

        if (cardCategory === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // Brand cards hover effect
  const brandCards = document.querySelectorAll('.brand-card');

  brandCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      brandCards.forEach((c) => {
        if (c !== card) {
          c.style.opacity = '0.7';
          c.style.transform = 'scale(0.95)';
        }
      });
    });

    card.addEventListener('mouseleave', () => {
      brandCards.forEach((c) => {
        c.style.opacity = '1';
        c.style.transform = 'translateY(0)';
      });
    });
  });
});
