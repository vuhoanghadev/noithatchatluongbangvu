document.addEventListener('DOMContentLoaded', function () {
  // Logo animation
  const logoContainer = document.querySelector('.logo-container');
  const logoText = document.querySelector('.logo-text');
  const logoTagline = document.querySelector('.logo-tagline');
  const logoImage = document.querySelector('.logo-image img');

  // Initial animation on page load
  setTimeout(() => {
    logoText.style.opacity = '0';
    logoTagline.style.opacity = '0';
    logoText.style.transform = 'translateY(-10px)';
    logoTagline.style.transform = 'translateY(-5px)';

    setTimeout(() => {
      logoText.style.transition =
        'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      logoTagline.style.transition =
        'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      logoText.style.opacity = '1';
      logoTagline.style.opacity = '1';
      logoText.style.transform = 'translateY(0)';
      logoTagline.style.transform = 'translateY(0)';

      // Add subtle pulse effect to logo image
      logoImage.style.animation =
        'logoPulse 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards';
    }, 200);
  }, 500);

  // Add subtle shine effect on hover
  logoContainer.addEventListener('mouseenter', function () {
    // Create shine element if it doesn't exist
    if (!document.querySelector('.logo-shine')) {
      const shine = document.createElement('div');
      shine.classList.add('logo-shine');
      shine.style.position = 'absolute';
      shine.style.top = '0';
      shine.style.left = '-100%';
      shine.style.width = '50%';
      shine.style.height = '100%';
      shine.style.background =
        'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)';
      shine.style.transform = 'skewX(-25deg)';
      shine.style.zIndex = '0';
      logoContainer.appendChild(shine);
    }

    // Animate shine
    const shine = document.querySelector('.logo-shine');
    shine.style.transition = 'left 0.8s ease';
    shine.style.left = '150%';

    // Reset shine position after animation
    setTimeout(() => {
      shine.style.transition = 'none';
      shine.style.left = '-100%';
    }, 800);
  });
});

// Add keyframes for logo pulse animation
const style = document.createElement('style');
style.textContent = `
@keyframes logoPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(style);
