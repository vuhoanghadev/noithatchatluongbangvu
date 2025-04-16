// Modern Services Section with Enhanced Animations
document.addEventListener('DOMContentLoaded', function () {
  // Add scroll reveal animation to service cards
  const serviceCards = document.querySelectorAll('.service-card');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll animation
  function handleScrollAnimation() {
    serviceCards.forEach((card, index) => {
      if (isInViewport(card) && !card.classList.contains('animated')) {
        // Add animated class to prevent re-animation
        card.classList.add('animated');
        
        // Add animation with delay based on index
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 150);
      }
    });
  }
  
  // Initialize cards
  serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on load
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Add hover effect to service icons
  const serviceIcons = document.querySelectorAll('.service-card-icon');
  
  serviceIcons.forEach(icon => {
    icon.addEventListener('mouseenter', function() {
      this.querySelector('i').classList.add('fa-beat');
    });
    
    icon.addEventListener('mouseleave', function() {
      this.querySelector('i').classList.remove('fa-beat');
    });
  });
  
  // Add click effect to booking button
  const bookingButton = document.getElementById('bookingButton');
  
  if (bookingButton) {
    bookingButton.addEventListener('click', function() {
      this.classList.add('clicked');
      
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  }
  
  console.log('Services section enhanced with modern animations');
});
