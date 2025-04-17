// Floating Contact Buttons
document.addEventListener('DOMContentLoaded', function () {
  const floatingButtons = document.querySelectorAll('.floating-contact-button');
  const floatingContact = document.querySelector('.floating-contact');

  // Initial animation sequence
  setTimeout(() => {
    floatingButtons.forEach((button, index) => {
      setTimeout(() => {
        button.classList.add('animated');

        // Add a small bounce effect after appearing
        setTimeout(() => {
          button.style.transform = 'translateY(-10px)';
          setTimeout(() => {
            button.style.transform = '';
          }, 200);
        }, 300);
      }, index * 150);
    });
  }, 1000); // Start after page load

  // Interactive hover effects
  floatingButtons.forEach((button) => {
    button.addEventListener('mouseenter', function () {
      // Create ripple effect
      const ripple = document.createElement('span');
      ripple.classList.add('contact-ripple');
      this.appendChild(ripple);

      // Remove ripple after animation completes
      setTimeout(() => {
        ripple.remove();
      }, 1000);

      // You can add a subtle hover sound here if needed
      // const hoverSound = new Audio('path/to/hover-sound.mp3');
      // hoverSound.volume = 0.2;
      // hoverSound.play();
    });
  });

  // Add scroll behavior - hide when scrolling down, show when scrolling up
  let lastScrollTop = 0;
  let scrollTimer;

  window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Don't hide buttons when near the top of the page
    if (scrollTop < 300) {
      floatingContact.style.transform = 'translateY(0)';
      floatingContact.style.opacity = '1';
      return;
    }

    clearTimeout(scrollTimer);

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      floatingContact.style.transform = 'translateY(20px)';
      floatingContact.style.opacity = '0.5';
    } else {
      // Scrolling up
      floatingContact.style.transform = 'translateY(0)';
      floatingContact.style.opacity = '1';
    }

    // Show buttons again after scrolling stops
    scrollTimer = setTimeout(() => {
      floatingContact.style.transform = 'translateY(0)';
      floatingContact.style.opacity = '1';
    }, 1500);

    lastScrollTop = scrollTop;
  });

  // Periodic attention-grabbing animations
  setInterval(() => {
    // Only animate if visible and not being hovered
    if (
      window.getComputedStyle(floatingContact).opacity === '1' &&
      !floatingContact.matches(':hover')
    ) {
      // Choose a random button to animate
      const randomIndex = Math.floor(Math.random() * floatingButtons.length);
      const button = floatingButtons[randomIndex];

      // Apply a subtle attention animation
      button.classList.add('attention');
      setTimeout(() => {
        button.classList.remove('attention');
      }, 1000);
    }
  }, 10000); // Every 10 seconds

  // Add click tracking and feedback
  floatingButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      const type = this.classList.contains('floating-contact-phone')
        ? 'phone'
        : this.classList.contains('floating-contact-zalo')
        ? 'zalo'
        : 'messenger';

      // Add click feedback
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);

      // You can add analytics tracking here
      console.log(`Contact button clicked: ${type}`);
    });
  });
});
