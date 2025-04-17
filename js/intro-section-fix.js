// Fix for intro section - remove fade-in animations for section-title and company-story
document.addEventListener('DOMContentLoaded', function() {
    // Get the intro section elements
    const introSection = document.querySelector('.intro-new');
    const sectionTitle = document.querySelector('.intro-new .section-title');
    const companyStory = document.querySelector('.intro-new .company-story');
    
    // If elements exist, immediately show them without animation
    if (introSection) {
        // Make sure the intro section itself is visible
        introSection.style.opacity = '1';
        introSection.style.transform = 'translateY(0)';
        
        // Make section title immediately visible
        if (sectionTitle) {
            sectionTitle.style.opacity = '1';
            sectionTitle.style.transform = 'translateY(0)';
            // Apply to all children as well
            const titleChildren = sectionTitle.querySelectorAll('*');
            titleChildren.forEach(child => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
            });
        }
        
        // Make company story immediately visible
        if (companyStory) {
            companyStory.style.opacity = '1';
            companyStory.style.transform = 'translateY(0)';
            // Apply to all children as well
            const storyChildren = companyStory.querySelectorAll('*');
            storyChildren.forEach(child => {
                child.style.opacity = '1';
                child.style.transform = 'translateY(0)';
                // Remove any transition to ensure immediate display
                child.style.transition = 'none';
            });
        }
    }
    
    // This script runs after main.js, so it will override any animations applied there
    console.log('Intro section animations fixed - section-title and company-story display immediately');
});
