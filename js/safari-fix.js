// Safari Fix for Products Page
(function() {
    // Detect Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        console.log('Safari detected, applying fixes...');
        
        // Add class to body
        document.body.classList.add('safari-browser');
        
        // Fix for products page
        if (window.location.pathname.includes('products.html')) {
            // Store page state in sessionStorage
            const storePageState = function() {
                try {
                    const productGrid = document.querySelector('.product-grid');
                    if (productGrid) {
                        sessionStorage.setItem('safari_products_loaded', 'true');
                        console.log('Products page state saved');
                    }
                } catch (e) {
                    console.error('Error storing page state:', e);
                }
            };
            
            // Check if we need to reload the page
            const checkPageState = function() {
                try {
                    const productGrid = document.querySelector('.product-grid');
                    if (productGrid && productGrid.children.length === 0) {
                        console.log('Empty product grid detected, attempting recovery...');
                        
                        // Try to recover using the global function
                        if (typeof window.recoverProductsPage === 'function') {
                            window.recoverProductsPage();
                        } else {
                            // Fallback: reload the page
                            window.location.reload();
                        }
                    } else {
                        console.log('Product grid looks good');
                        storePageState();
                    }
                } catch (e) {
                    console.error('Error checking page state:', e);
                }
            };
            
            // Add event listeners
            window.addEventListener('load', function() {
                setTimeout(checkPageState, 500);
                
                // Also check when page becomes visible again
                document.addEventListener('visibilitychange', function() {
                    if (document.visibilityState === 'visible') {
                        setTimeout(checkPageState, 300);
                    }
                });
            });
            
            // Check page state periodically
            setInterval(checkPageState, 5000);
        }
    }
})();
