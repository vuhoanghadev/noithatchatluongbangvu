/**
 * Safari Content Visibility Fix
 * 
 * Este script corrige um problema específico no Safari onde o conteúdo da página
 * product-details.html não é exibido até que o usuário role a página.
 */
(function() {
    // Detectar Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
        console.log('Safari detectado, aplicando correções para visibilidade de conteúdo...');
        
        // Adicionar classe ao body para estilos específicos do Safari
        document.documentElement.classList.add('safari-browser');
        
        // Desativar animações problemáticas no Safari
        const disableProblemAnimations = function() {
            // Adicionar estilos inline para sobrescrever animações
            const style = document.createElement('style');
            style.textContent = `
                /* Desativar animações problemáticas no Safari */
                .product-card {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    -webkit-transform: translateY(0) !important;
                    animation: none !important;
                    -webkit-animation: none !important;
                    transition: box-shadow 0.3s ease !important;
                    -webkit-transition: box-shadow 0.3s ease !important;
                }
                
                .product-card.fade-in {
                    opacity: 1 !important;
                    transform: translateY(0) !important;
                    -webkit-transform: translateY(0) !important;
                    animation: none !important;
                    -webkit-animation: none !important;
                }
                
                /* Garantir que o conteúdo principal seja visível */
                .product-container,
                .product-gallery,
                .product-info,
                .related-products,
                .customers-also-liked,
                .product-grid {
                    opacity: 1 !important;
                    visibility: visible !important;
                    transform: none !important;
                    -webkit-transform: none !important;
                    animation: none !important;
                    -webkit-animation: none !important;
                }
                
                /* Corrigir problema de visibilidade no Safari */
                .product-details-section {
                    opacity: 1 !important;
                    visibility: visible !important;
                }
                
                /* Melhorar desempenho de renderização */
                .main-image-container,
                .thumbnails,
                .product-card,
                .product-grid {
                    transform: translateZ(0);
                    -webkit-transform: translateZ(0);
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                    will-change: transform;
                }
            `;
            document.head.appendChild(style);
        };
        
        // Forçar reflow/repaint para garantir que o conteúdo seja exibido
        const forceRepaint = function() {
            // Elementos principais que precisam ser visíveis
            const criticalElements = [
                '.product-container',
                '.product-gallery',
                '.product-info',
                '.related-products',
                '.customers-also-liked',
                '.product-grid'
            ];
            
            // Aplicar correções para cada elemento
            criticalElements.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    if (el) {
                        // Forçar reflow/repaint
                        el.style.display = 'none';
                        void el.offsetHeight; // Trigger reflow
                        el.style.display = '';
                        
                        // Garantir visibilidade
                        el.style.opacity = '1';
                        el.style.visibility = 'visible';
                    }
                });
            });
            
            // Forçar reflow geral
            document.body.style.zoom = '0.99999';
            void document.body.offsetHeight;
            document.body.style.zoom = '1';
        };
        
        // Corrigir problema de fade-in nos cards de produto
        const fixProductCards = function() {
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.classList.add('fade-in');
            });
        };
        
        // Aplicar todas as correções
        const applyAllFixes = function() {
            disableProblemAnimations();
            forceRepaint();
            fixProductCards();
            
            // Adicionar classe para efeito sutil após carregamento
            setTimeout(() => {
                const mainImageContainer = document.querySelector('.main-image-container');
                if (mainImageContainer) {
                    mainImageContainer.classList.add('safari-subtle-pulse');
                }
            }, 500);
        };
        
        // Aplicar correções em diferentes momentos para garantir que funcionem
        
        // 1. Imediatamente
        applyAllFixes();
        
        // 2. Quando o DOM estiver pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', applyAllFixes);
        }
        
        // 3. Após o carregamento completo da página
        window.addEventListener('load', applyAllFixes);
        
        // 4. Com pequenos atrasos para garantir que as correções sejam aplicadas
        setTimeout(applyAllFixes, 0);
        setTimeout(applyAllFixes, 100);
        setTimeout(applyAllFixes, 500);
        
        // 5. Após o scroll (caso o usuário role a página)
        window.addEventListener('scroll', function safariScrollFix() {
            applyAllFixes();
            // Remover este listener após a primeira execução
            window.removeEventListener('scroll', safariScrollFix);
        }, { passive: true });
    }
})();
