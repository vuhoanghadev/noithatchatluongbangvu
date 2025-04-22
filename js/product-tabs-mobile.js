/**
 * Product Tabs Mobile Enhancement
 * Improves the user experience of product tabs on mobile devices
 */
document.addEventListener('DOMContentLoaded', function () {
  // Initialize after a short delay to ensure tabs are fully loaded
  setTimeout(initProductTabsMobile, 1000);
});

/**
 * Initializes mobile enhancements for product tabs
 */
function initProductTabsMobile() {
  const tabsContainer = document.querySelector('.product-tabs');
  if (!tabsContainer) return;

  const tabs = document.querySelectorAll('.product-tab');
  if (!tabs.length) return;

  // Only apply these enhancements on mobile devices
  if (window.innerWidth <= 768) {
    // Scroll active tab into view
    scrollActiveTabIntoView();

    // Add click event to tabs to scroll the clicked tab into view
    tabs.forEach((tab) => {
      tab.addEventListener('click', function () {
        // Short delay to allow the active class to be applied
        setTimeout(() => {
          scrollTabIntoView(this);
        }, 50);
      });
    });

    // Add custom horizontal scroll behavior
    addSmoothHorizontalScroll(tabsContainer);
  }

  // Listen for window resize events
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 768) {
      scrollActiveTabIntoView();
    }
  });
}

/**
 * Scrolls the active tab into view
 */
function scrollActiveTabIntoView() {
  const activeTab = document.querySelector('.product-tab.active');
  if (activeTab) {
    scrollTabIntoView(activeTab);
  }
}

/**
 * Scrolls a specific tab into view with a smooth animation
 * @param {HTMLElement} tab - The tab element to scroll into view
 */
function scrollTabIntoView(tab) {
  const tabsContainer = document.querySelector('.product-tabs');
  if (!tabsContainer) return;

  // Calculate the scroll position to center the tab
  const containerWidth = tabsContainer.offsetWidth;
  const tabWidth = tab.offsetWidth;
  const tabLeft = tab.offsetLeft;

  // Center the tab in the container
  const scrollPosition = tabLeft - containerWidth / 2 + tabWidth / 2;

  // Scroll with smooth animation
  tabsContainer.scrollTo({
    left: Math.max(0, scrollPosition),
    behavior: 'smooth',
  });
}

/**
 * Adds smooth horizontal scroll behavior to the tabs container
 * @param {HTMLElement} container - The tabs container element
 */
function addSmoothHorizontalScroll(container) {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDown = true;
    container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('mouseleave', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mouseup', () => {
    isDown = false;
    container.style.cursor = 'grab';
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener('touchmove', (e) => {
    if (e.touches.length > 1) return; // Ignore multi-touch
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (startX - x) * 1.5; // Scroll speed multiplier
    container.scrollLeft = scrollLeft + walk;
  });
}

// Handle tab changes from URL parameters or other scripts
document.addEventListener('ajaxPageLoaded', function () {
  setTimeout(initProductTabsMobile, 500);
});

// Handle tab changes after page transitions
document.addEventListener('page-transition-complete', function () {
  setTimeout(initProductTabsMobile, 500);
});
