/**
 * New Floating Contact Buttons
 * Isolated JavaScript for floating contact buttons
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize floating contact buttons
    initFloatingContact();
});

function initFloatingContact() {
    const fcContainer = document.querySelector('.fc-container');
    if (!fcContainer) return;

    const fcButtons = document.querySelectorAll('.fc-button');
    const isMobile = window.innerWidth <= 768;

    // Add ripple effect on click/touch
    fcButtons.forEach(button => {
        // Mouse click effect
        button.addEventListener('click', function(e) {
            createRippleEffect(this, e);
            addClickFeedback(this);
        });

        // Touch effect for mobile
        button.addEventListener('touchstart', function(e) {
            createRippleEffect(this, e);
        }, { passive: true });
    });

    // Handle scroll behavior - hide when scrolling down, show when scrolling up
    let lastScrollTop = 0;
    let scrollTimer;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Don't hide buttons when near the top of the page
        if (scrollTop < 300) {
            fcContainer.style.transform = 'translateY(0)';
            fcContainer.style.opacity = '1';
            return;
        }

        clearTimeout(scrollTimer);

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            fcContainer.style.transform = 'translateY(20px)';
            fcContainer.style.opacity = '0.5';
        } else {
            // Scrolling up
            fcContainer.style.transform = 'translateY(0)';
            fcContainer.style.opacity = '1';
        }

        // Show buttons again after scrolling stops
        scrollTimer = setTimeout(() => {
            fcContainer.style.transform = 'translateY(0)';
            fcContainer.style.opacity = '1';
        }, 1500);

        lastScrollTop = scrollTop;
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        // Update mobile detection if needed
        const newIsMobile = window.innerWidth <= 768;
        if (newIsMobile !== isMobile) {
            location.reload(); // Reload to apply correct animations
        }
    });
}

// Create ripple effect on button
function createRippleEffect(element, event) {
    // Remove any existing ripples
    const existingRipples = element.querySelectorAll('.fc-ripple');
    existingRipples.forEach(ripple => ripple.remove());
    
    // Create new ripple
    const ripple = document.createElement('span');
    ripple.classList.add('fc-ripple');
    
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
}

// Add click feedback animation
function addClickFeedback(element) {
    element.classList.add('fc-clicked');
    
    setTimeout(() => {
        element.classList.remove('fc-clicked');
    }, 300);
}
