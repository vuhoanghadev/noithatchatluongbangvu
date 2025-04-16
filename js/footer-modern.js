// Modern Footer with Enhanced Animations
document.addEventListener('DOMContentLoaded', function () {
  // Add scroll reveal animation to footer elements
  const footerBrand = document.querySelector('.footer-brand');
  const footerInfo = document.querySelector('.footer-info');
  const footerLinks = document.querySelector('.footer-links');
  const footerSocial = document.querySelector('.footer-social');
  const footerBottom = document.querySelector('.footer-bottom');
  const socialIcons = document.querySelectorAll('.social-icons a');
  const newsletterForm = document.querySelector('.newsletter-form');
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  
  // Function to handle scroll animation
  function handleScrollAnimation() {
    // Footer brand animation
    if (footerBrand && isInViewport(footerBrand) && !footerBrand.classList.contains('animated')) {
      footerBrand.classList.add('animated');
      footerBrand.style.opacity = '1';
      footerBrand.style.transform = 'translateY(0)';
    }
    
    // Footer info animation
    if (footerInfo && isInViewport(footerInfo) && !footerInfo.classList.contains('animated')) {
      footerInfo.classList.add('animated');
      setTimeout(() => {
        footerInfo.style.opacity = '1';
        footerInfo.style.transform = 'translateY(0)';
      }, 200);
    }
    
    // Footer links animation
    if (footerLinks && isInViewport(footerLinks) && !footerLinks.classList.contains('animated')) {
      footerLinks.classList.add('animated');
      setTimeout(() => {
        footerLinks.style.opacity = '1';
        footerLinks.style.transform = 'translateY(0)';
      }, 400);
    }
    
    // Footer social animation
    if (footerSocial && isInViewport(footerSocial) && !footerSocial.classList.contains('animated')) {
      footerSocial.classList.add('animated');
      setTimeout(() => {
        footerSocial.style.opacity = '1';
        footerSocial.style.transform = 'translateY(0)';
      }, 600);
      
      // Animate social icons
      socialIcons.forEach((icon, index) => {
        setTimeout(() => {
          icon.style.opacity = '1';
          icon.style.transform = 'translateY(0)';
        }, 700 + (index * 100));
      });
    }
    
    // Newsletter form animation
    if (newsletterForm && isInViewport(newsletterForm) && !newsletterForm.classList.contains('animated')) {
      newsletterForm.classList.add('animated');
      setTimeout(() => {
        newsletterForm.style.opacity = '1';
        newsletterForm.style.transform = 'translateY(0)';
      }, 800);
    }
    
    // Footer bottom animation
    if (footerBottom && isInViewport(footerBottom) && !footerBottom.classList.contains('animated')) {
      footerBottom.classList.add('animated');
      setTimeout(() => {
        footerBottom.style.opacity = '1';
      }, 1000);
    }
  }
  
  // Initialize elements
  if (footerBrand) footerBrand.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  if (footerInfo) footerInfo.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  if (footerLinks) footerLinks.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  if (footerSocial) footerSocial.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  if (footerBottom) footerBottom.style.cssText = 'opacity: 0; transition: opacity 0.6s ease;';
  if (newsletterForm) newsletterForm.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  
  socialIcons.forEach(icon => {
    icon.style.cssText = 'opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease;';
  });
  
  // Add hover effect to footer links
  const footerLinkItems = document.querySelectorAll('.footer-links a');
  
  footerLinkItems.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.paddingLeft = '5px';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.paddingLeft = '0';
    });
  });
  
  // Add functionality to newsletter form
  const newsletterButton = document.querySelector('.newsletter-button');
  const newsletterInput = document.querySelector('.newsletter-input');
  
  if (newsletterButton && newsletterInput) {
    newsletterButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      if (newsletterInput.value.trim() === '') {
        alert('Vui lòng nhập địa chỉ email của bạn');
        return;
      }
      
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(newsletterInput.value)) {
        alert('Vui lòng nhập địa chỉ email hợp lệ');
        return;
      }
      
      // Simulate form submission
      newsletterButton.textContent = 'Đang xử lý...';
      newsletterButton.disabled = true;
      
      setTimeout(() => {
        alert('Cảm ơn bạn đã đăng ký nhận thông tin!');
        newsletterInput.value = '';
        newsletterButton.textContent = 'Đăng ký';
        newsletterButton.disabled = false;
      }, 1500);
    });
  }
  
  // Run once on load
  handleScrollAnimation();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScrollAnimation);
  
  console.log('Footer enhanced with modern animations');
});
