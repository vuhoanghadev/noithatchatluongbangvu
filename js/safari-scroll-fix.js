// Safari Scroll Fix for Products Page
function scrollToTopFix() {
  const productsSection = document.querySelector('.products-section');
  if (!productsSection) return;
  
  // Check if we're on Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
    (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
  
  if (isSafari) {
    // Use window.scrollTo for Safari
    const rect = productsSection.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop;
    
    // First scroll with smooth behavior
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
    
    // Then force scroll with auto behavior after a short delay
    // This ensures Safari completes the scroll operation
    setTimeout(() => {
      window.scrollTo({
        top: targetY,
        behavior: 'auto'
      });
    }, 100);
  } else {
    // Use scrollIntoView for other browsers
    productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
