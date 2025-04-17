// Scroll Hint Animation
document.addEventListener('DOMContentLoaded', function () {
  const scrollHint = document.querySelector('.hero-scroll-hint');

  if (!scrollHint) return;

  // Position the scroll hint
  function positionScrollHint() {
    scrollHint.style.left = '50%';
    scrollHint.style.transform = 'translateX(-50%)';
    scrollHint.style.bottom = '15px';
  }

  // Initial positioning
  positionScrollHint();

  // Re-position on window resize
  window.addEventListener('resize', positionScrollHint);

  // Hide scroll hint when scrolling down, show when at top
  let lastScrollTop = 0;

  // Force check scroll position on page load
  setTimeout(function () {
    checkScrollPosition();
  }, 100);

  function checkScrollPosition() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let viewportHeight = window.innerHeight;
    let scrollRatio = scrollTop / (viewportHeight * 0.3);
    scrollRatio = Math.min(1, Math.max(0, scrollRatio)); // Clamp between 0 and 1

    // Apply smooth transition based on scroll position
    if (scrollRatio >= 1) {
      // Fully hide when scrolled past threshold
      if (!scrollHint.classList.contains('fade-out')) {
        scrollHint.classList.add('fade-out');
        console.log('Hiding scroll hint');
      }
    } else {
      // Show with smooth transition when near the top
      if (scrollHint.classList.contains('fade-out')) {
        scrollHint.classList.remove('fade-out');
        console.log('Showing scroll hint');
      }

      // Apply subtle transform effect while scrolling
      if (scrollRatio > 0) {
        let translateY = scrollRatio * 10; // Max 10px down
        let scale = 1 - scrollRatio * 0.05; // Min scale 0.95
        let opacity = 1 - scrollRatio * 0.5; // Min opacity 0.5

        scrollHint.style.transform = `translate(-50%, ${translateY}px) scale(${scale})`;
        scrollHint.style.opacity = opacity;
      } else {
        // Reset to default when at the very top
        scrollHint.style.transform = 'translate(-50%, 0)';
        scrollHint.style.opacity = 1;
      }
    }
  }

  window.addEventListener('scroll', function () {
    checkScrollPosition();
    lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  });

  // Smooth scroll when clicking the scroll hint
  scrollHint.addEventListener('click', function (e) {
    e.preventDefault();

    // Calculate the height of the viewport
    const viewportHeight = window.innerHeight;

    // Scroll to the section below the hero banner
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth',
    });
  });
});
