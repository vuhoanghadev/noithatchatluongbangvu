// Modern Testimonials Section with Enhanced Animations
document.addEventListener('DOMContentLoaded', function () {
  // Add scroll reveal animation to testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
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
    testimonialCards.forEach((card, index) => {
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
  testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on load
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Add hover effect to rating stars
  const ratingStars = document.querySelectorAll('.testimonial-rating i');
  
  ratingStars.forEach(star => {
    star.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.2)';
      this.style.color = '#ffac33'; // Brighter orange on hover
    });
    
    star.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
      this.style.color = ''; // Back to default color
    });
  });
  
  console.log('Testimonials section enhanced with modern animations');
});
