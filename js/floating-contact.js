// Floating Contact Buttons
document.addEventListener('DOMContentLoaded', function () {
  const floatingButtons = document.querySelectorAll('.floating-contact-button');
  const floatingContact = document.querySelector('.floating-contact');
  let isMobile = window.innerWidth <= 768;

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

  // Function to create ripple effect
  const createRippleEffect = function (element, event) {
    // Create ripple effect
    const ripple = document.createElement('span');
    ripple.classList.add('contact-ripple');

    // For touch events, position the ripple at the touch point
    if (event.type.startsWith('touch')) {
      const rect = element.getBoundingClientRect();
      const touch = event.touches[0] || event.changedTouches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
    }

    element.appendChild(ripple);

    // Remove ripple after animation completes
    setTimeout(() => {
      ripple.remove();
    }, 1000);
  };

  // Interactive effects for both mouse and touch
  floatingButtons.forEach((button) => {
    // Mouse events for desktop
    button.addEventListener('mouseenter', function (event) {
      createRippleEffect(this, event);
    });

    // Touch events for mobile
    button.addEventListener(
      'touchstart',
      function (event) {
        createRippleEffect(this, event);
        this.classList.add('touch-active');
      },
      { passive: true }
    );

    button.addEventListener(
      'touchend',
      function () {
        this.classList.remove('touch-active');
      },
      { passive: true }
    );
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

  // Apply mobile animations directly
  function applyMobileAnimations() {
    // Apply to all devices for consistency, but with different animations based on device type
    const phoneIcon = document.querySelector('.floating-contact-phone i');
    const zaloImg = document.querySelector('.floating-contact-zalo img');
    const messengerIcon = document.querySelector(
      '.floating-contact-messenger i'
    );

    if (!phoneIcon || !zaloImg || !messengerIcon) return;

    // Remove any existing animation styles first
    phoneIcon.style.animation = '';
    zaloImg.style.animation = '';
    messengerIcon.style.animation = '';

    // Force reflow to ensure animations restart
    void phoneIcon.offsetWidth;
    void zaloImg.offsetWidth;
    void messengerIcon.offsetWidth;

    // Apply animations based on device type
    if (isMobile) {
      // Mobile animations
      phoneIcon.style.animation = 'shake-mobile 6s ease-in-out infinite';
      zaloImg.style.animation = 'bounce-mobile 6s ease-in-out infinite 2s';
      messengerIcon.style.animation = 'spin-mobile 6s ease-in-out infinite 4s';

      // Add a class to indicate mobile animations are applied
      document
        .querySelector('.floating-contact')
        .classList.add('mobile-animations-applied');
    } else {
      // Desktop animations
      phoneIcon.style.animation = 'shake 4s ease-in-out infinite';
      zaloImg.style.animation = 'bounce 4s ease-in-out infinite';
      messengerIcon.style.animation = 'spin 4s ease-in-out infinite';
    }
  }

  // Function to check if animations are running
  function checkAnimationsRunning() {
    if (isMobile) {
      const phoneIcon = document.querySelector('.floating-contact-phone i');
      const computedStyle = window.getComputedStyle(phoneIcon);

      // If animation-name is 'none', animations aren't running
      if (
        computedStyle.animationName === 'none' ||
        !computedStyle.animationName
      ) {
        console.log('Animations not running, reapplying...');
        applyMobileAnimations();
      }
    }
  }

  // Apply animations initially
  applyMobileAnimations();

  // Also apply animations after a delay to ensure they work
  setTimeout(applyMobileAnimations, 2000);

  // And apply again when page is fully loaded
  window.addEventListener('load', function () {
    setTimeout(applyMobileAnimations, 500);

    // Check animations periodically
    setInterval(checkAnimationsRunning, 5000);
  });

  // Apply animations on visibility change (when user returns to tab)
  document.addEventListener('visibilitychange', function () {
    if (!document.hidden && isMobile) {
      setTimeout(applyMobileAnimations, 300);
    }
  });

  // Periodic attention-grabbing animations
  setInterval(() => {
    // Only animate if visible and not being interacted with
    if (
      window.getComputedStyle(floatingContact).opacity === '1' &&
      (!floatingContact.matches(':hover') || isMobile)
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

  // Handle window resize to update mobile detection
  window.addEventListener('resize', function () {
    isMobile = window.innerWidth <= 768;
    applyMobileAnimations();
  });

  // Add click and touch tracking and feedback
  floatingButtons.forEach((button) => {
    // Handle both click and touch events
    ['click', 'touchend'].forEach((eventType) => {
      button.addEventListener(
        eventType,
        function (e) {
          // Prevent default only for touchend to avoid double triggering
          if (eventType === 'touchend') {
            e.preventDefault();
          }

          const type = this.classList.contains('floating-contact-phone')
            ? 'phone'
            : this.classList.contains('floating-contact-zalo')
            ? 'zalo'
            : 'messenger';

          // Add click/touch feedback
          this.classList.add('clicked');
          setTimeout(() => {
            this.classList.remove('clicked');
          }, 300);

          // You can add analytics tracking here
          console.log(`Contact button ${eventType}: ${type}`);
        },
        { passive: eventType !== 'touchend' }
      );
    });
  });
});
