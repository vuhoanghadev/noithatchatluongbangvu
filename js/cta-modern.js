// Modern CTA Section with Enhanced Animations
document.addEventListener('DOMContentLoaded', function () {
  // Add scroll reveal animation to CTA section
  const ctaSection = document.querySelector('.cta-section');
  const ctaTitle = document.querySelector('.cta-section h2');
  const ctaText = document.querySelector('.cta-section p');
  const ctaButtons = document.querySelectorAll('.cta-section .cta-buttons a');
  const ctaDecorations = document.querySelectorAll('.cta-decoration');
  
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
    if (isInViewport(ctaSection) && !ctaSection.classList.contains('animated')) {
      // Add animated class to prevent re-animation
      ctaSection.classList.add('animated');
      
      // Animate title
      setTimeout(() => {
        ctaTitle.style.opacity = '1';
        ctaTitle.style.transform = 'translateY(0)';
      }, 100);
      
      // Animate text
      setTimeout(() => {
        ctaText.style.opacity = '1';
        ctaText.style.transform = 'translateY(0)';
      }, 300);
      
      // Animate buttons
      ctaButtons.forEach((button, index) => {
        setTimeout(() => {
          button.style.opacity = '1';
          button.style.transform = 'translateY(0)';
        }, 500 + (index * 150));
      });
      
      // Animate decorations
      ctaDecorations.forEach((decoration, index) => {
        setTimeout(() => {
          decoration.style.opacity = '1';
          decoration.style.transform = 'scale(1)';
        }, 200 + (index * 100));
      });
    }
  }
  
  // Initialize elements
  if (ctaTitle) ctaTitle.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  if (ctaText) ctaText.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  
  ctaButtons.forEach(button => {
    button.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  });
  
  ctaDecorations.forEach(decoration => {
    decoration.style.cssText = 'opacity: 0; transform: scale(0.8); transition: opacity 0.8s ease, transform 0.8s ease;';
  });
  
  // Add hover effect to buttons
  ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.querySelector('i').style.transform = 'translateX(5px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.querySelector('i').style.transform = 'translateX(0)';
    });
  });
  
  // Run once on load
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  console.log('CTA section enhanced with modern animations');
});
