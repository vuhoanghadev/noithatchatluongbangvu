// Maintenance Notice Modal Script
document.addEventListener('DOMContentLoaded', function() {
    const maintenanceNotice = document.getElementById('maintenanceNotice');
    const closeBtn = document.getElementById('closeMaintenanceNotice');

    // Show modal every time the page loads
    setTimeout(() => {
        showMaintenanceNotice();
    }, 1000); // Show after 1 second delay
    
    // Show maintenance notice
    function showMaintenanceNotice() {
        if (maintenanceNotice) {
            maintenanceNotice.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    }
    
    // Hide maintenance notice
    function hideMaintenanceNotice() {
        if (maintenanceNotice) {
            maintenanceNotice.classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
    }
    
    // Close button event
    if (closeBtn) {
        closeBtn.addEventListener('click', hideMaintenanceNotice);
    }
    
    // Close when clicking outside the modal
    if (maintenanceNotice) {
        maintenanceNotice.addEventListener('click', function(e) {
            if (e.target === maintenanceNotice) {
                hideMaintenanceNotice();
            }
        });
    }
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && maintenanceNotice.classList.contains('show')) {
            hideMaintenanceNotice();
        }
    });
    
    // Track contact button clicks for analytics (optional)
    const contactButtons = document.querySelectorAll('.maintenance-btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonType = this.classList.contains('primary') ? 'phone' : 
                              this.classList.contains('secondary') ? 'zalo' : 'facebook';
            
            // You can add analytics tracking here
            console.log(`Maintenance notice: ${buttonType} button clicked`);
            
            // Close modal when contact button is clicked
            setTimeout(() => {
                hideMaintenanceNotice();
            }, 500);
        });
    });
    
    // Auto-hide after 30 seconds if user doesn't interact
    let autoHideTimer;
    
    function startAutoHideTimer() {
        autoHideTimer = setTimeout(() => {
            if (maintenanceNotice.classList.contains('show')) {
                hideMaintenanceNotice();
            }
        }, 30000); // 30 seconds
    }
    
    function resetAutoHideTimer() {
        if (autoHideTimer) {
            clearTimeout(autoHideTimer);
        }
        startAutoHideTimer();
    }
    
    // Start timer when modal is shown
    if (maintenanceNotice) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (maintenanceNotice.classList.contains('show')) {
                        startAutoHideTimer();
                    } else {
                        if (autoHideTimer) {
                            clearTimeout(autoHideTimer);
                        }
                    }
                }
            });
        });
        
        observer.observe(maintenanceNotice, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
    
    // Reset timer on user interaction with modal
    if (maintenanceNotice) {
        maintenanceNotice.addEventListener('mousemove', resetAutoHideTimer);
        maintenanceNotice.addEventListener('click', resetAutoHideTimer);
        maintenanceNotice.addEventListener('scroll', resetAutoHideTimer);
    }
    
    // Add smooth scroll to top when modal is closed
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Optional: Add a "Don't show again" option
    function addDontShowAgainOption() {
        const modalBody = document.querySelector('.maintenance-notice-body');
        if (modalBody) {
            const dontShowContainer = document.createElement('div');
            dontShowContainer.style.cssText = `
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
            `;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = 'dontShowAgain';
            checkbox.style.marginRight = '8px';
            
            const label = document.createElement('label');
            label.htmlFor = 'dontShowAgain';
            label.textContent = 'Không hiển thị lại trong 7 ngày';
            label.style.cssText = `
                font-size: 0.9rem;
                color: #666;
                cursor: pointer;
            `;
            
            dontShowContainer.appendChild(checkbox);
            dontShowContainer.appendChild(label);
            modalBody.appendChild(dontShowContainer);
            
            // Handle "don't show again" functionality
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    const weekFromNow = new Date();
                    weekFromNow.setDate(weekFromNow.getDate() + 7);
                    localStorage.setItem('maintenanceNoticeDontShow', weekFromNow.toISOString());
                } else {
                    localStorage.removeItem('maintenanceNoticeDontShow');
                }
            });
        }
    }
    
    // Optional: Uncomment the lines below if you want to add the "don't show again" option
    // setTimeout(() => {
    //     addDontShowAgainOption();
    // }, 1000);
});
