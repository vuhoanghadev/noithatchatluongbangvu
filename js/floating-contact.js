// Floating Contact Buttons
document.addEventListener('DOMContentLoaded', function() {
    const floatingButtons = document.querySelectorAll('.floating-contact-button');
    
    // Add hover sound effect
    floatingButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // You can add a subtle hover sound here if needed
            // const hoverSound = new Audio('path/to/hover-sound.mp3');
            // hoverSound.volume = 0.2;
            // hoverSound.play();
        });
    });
    
    // Add scroll behavior - hide when scrolling down, show when scrolling up
    let lastScrollTop = 0;
    const floatingContact = document.querySelector('.floating-contact');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Don't hide buttons when near the top of the page
        if (scrollTop < 300) {
            floatingContact.style.transform = 'translateY(0)';
            return;
        }
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            floatingContact.style.transform = 'translateY(20px)';
            floatingContact.style.opacity = '0.5';
        } else {
            // Scrolling up
            floatingContact.style.transform = 'translateY(0)';
            floatingContact.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Add click tracking
    floatingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const type = this.classList.contains('floating-contact-phone') ? 'phone' : 
                         this.classList.contains('floating-contact-zalo') ? 'zalo' : 'messenger';
            
            // You can add analytics tracking here
            console.log(`Contact button clicked: ${type}`);
        });
    });
});
