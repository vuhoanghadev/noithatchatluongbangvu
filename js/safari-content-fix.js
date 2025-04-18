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
        
        // Função para forçar o reflow/repaint no Safari
        function forceSafariRepaint() {
            // Selecionar os elementos principais que precisam ser visíveis
            const elementsToFix = [
                document.querySelector('.product-container'),
                document.querySelector('.product-gallery'),
                document.querySelector('.product-info'),
                document.querySelector('.related-products'),
                document.querySelector('.customers-also-liked')
            ];
            
            // Aplicar correções para cada elemento encontrado
            elementsToFix.forEach(element => {
                if (element) {
                    // Adicionar classe para identificar elementos corrigidos
                    element.classList.add('safari-visibility-fix');
                    
                    // Forçar reflow/repaint
                    element.style.opacity = '0.99';
                    
                    // Garantir que o elemento seja visível
                    element.style.visibility = 'visible';
                    element.style.display = element.style.display || 'block';
                    
                    // Forçar o Safari a renderizar o elemento
                    void element.offsetHeight;
                    
                    // Restaurar a opacidade normal após um pequeno atraso
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transition = 'opacity 0.3s ease';
                    }, 50);
                }
            });
            
            // Forçar um reflow/repaint geral na página
            document.body.style.transform = 'translateZ(0)';
            document.body.style.backfaceVisibility = 'hidden';
            document.body.style.webkitBackfaceVisibility = 'hidden';
            
            // Forçar o Safari a renderizar a página inteira
            void document.body.offsetHeight;
        }
        
        // Aplicar correção imediatamente quando o DOM estiver pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', forceSafariRepaint);
        } else {
            forceSafariRepaint();
        }
        
        // Aplicar novamente após o carregamento completo da página
        window.addEventListener('load', forceSafariRepaint);
        
        // Aplicar novamente após um pequeno atraso para garantir
        setTimeout(forceSafariRepaint, 100);
        setTimeout(forceSafariRepaint, 500);
        
        // Adicionar estilos específicos para Safari
        const safariFixStyles = document.createElement('style');
        safariFixStyles.textContent = `
            /* Correções de visibilidade para Safari */
            .safari-visibility-fix {
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                will-change: transform, opacity;
                visibility: visible !important;
                opacity: 1 !important;
            }
            
            /* Garantir que o conteúdo principal seja visível */
            .product-container,
            .product-gallery,
            .product-info,
            .related-products,
            .customers-also-liked {
                visibility: visible !important;
                opacity: 1 !important;
                transform: translateZ(0);
                -webkit-transform: translateZ(0);
            }
            
            /* Desativar animações problemáticas no Safari */
            @media not all and (min-resolution:.001dpcm) {
                @supports (-webkit-appearance:none) {
                    .product-card {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                        -webkit-transform: translateY(0) !important;
                    }
                    
                    .fade-in {
                        opacity: 1 !important;
                        transform: translateY(0) !important;
                        -webkit-transform: translateY(0) !important;
                    }
                }
            }
        `;
        document.head.appendChild(safariFixStyles);
    }
})();
