/* Scroll to Top Button - Modern Version */
(function() {
    'use strict';
    
    // CSS für den modernen Button einfügen
    const style = document.createElement('style');
    style.textContent = `
        /* Scroll to Top Button - Modern Glass Design */
        .scroll-to-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.75);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid rgba(61, 74, 93, 0.12);
            border-radius: 16px;
            display: none;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 8px 32px rgba(46, 58, 74, 0.08);
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            color: #3D4A5D;
            font-size: 20px;
            font-weight: 500;
            text-decoration: none;
            user-select: none;
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
        }

        .scroll-to-top-btn:hover {
            transform: translateY(-4px) scale(1.05);
            background: rgba(255, 255, 255, 0.95);
            border-color: rgba(71, 84, 106, 0.2);
            box-shadow: 0 12px 40px rgba(52, 64, 84, 0.15), 0 8px 16px rgba(52, 64, 84, 0.1);
            color: #5C6B7F;
        }

        .scroll-to-top-btn.show {
            display: flex;
            animation: slideInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-to-top-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #3D4A5D, #6A7BA2);
            border-radius: 16px;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: -1;
        }

        .scroll-to-top-btn:hover::before {
            opacity: 0.1;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }

        /* Mobile Anpassungen */
        @media (max-width: 768px) {
            .scroll-to-top-btn {
                bottom: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 14px;
                font-size: 18px;
            }
        }

        @media (max-width: 480px) {
            .scroll-to-top-btn {
                bottom: 16px;
                right: 16px;
                width: 46px;
                height: 46px;
                border-radius: 12px;
                font-size: 16px;
            }
        }
    `;
    document.head.appendChild(style);

    // Button HTML erstellen und einfügen
    function createScrollButton() {
        const button = document.createElement('button');
        button.className = 'scroll-to-top-btn';
        button.setAttribute('aria-label', 'Nach oben scrollen');
        button.innerHTML = '↑';
        document.body.appendChild(button);
        return button;
    }

    // Scroll-Funktionalität
    function initScrollToTop() {
        const scrollButton = createScrollButton();
        let isVisible = false;

        // Show/Hide Button beim Scrollen
        function toggleButtonVisibility() {
            const shouldShow = window.pageYOffset > 300;
            
            if (shouldShow && !isVisible) {
                scrollButton.classList.add('show');
                isVisible = true;
            } else if (!shouldShow && isVisible) {
                scrollButton.classList.remove('show');
                isVisible = false;
            }
        }

        // Smooth Scroll nach oben
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Event Listeners
        window.addEventListener('scroll', toggleButtonVisibility, { passive: true });
        scrollButton.addEventListener('click', scrollToTop);
        
        // Touch-Support für mobile Geräte
        scrollButton.addEventListener('touchstart', function(e) {
            e.preventDefault();
            scrollToTop();
        }, { passive: false });

        console.log('✅ Scroll-to-Top Button erfolgreich initialisiert');
    }

    // Initialisierung beim DOM-Load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollToTop);
    } else {
        initScrollToTop();
    }
})();
