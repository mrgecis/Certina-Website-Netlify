// Cookie Banner JavaScript
class CookieBanner {
    constructor() {
        this.cookieName = 'certina-cookies-accepted';
        this.init();
    }

    init() {
        // Create banner if not already exists and cookies not accepted
        if (!this.getCookie(this.cookieName)) {
            this.createBanner();
            this.showBanner();
        }
    }

    createBanner() {
        // Check if banner already exists
        if (document.getElementById('cookie-banner')) {
            return;
        }

        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.className = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-banner-content">
                <div class="cookie-banner-text">
                    <h3>🍪 Cookie-Einstellungen</h3>
                    <p>Wir verwenden Cookies, um Ihnen die beste Erfahrung auf unserer Website zu bieten. Durch die Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.</p>
                </div>
                <div class="cookie-banner-buttons">
                    <button class="cookie-btn cookie-btn-settings" onclick="cookieBanner.showSettings()">
                        <i class="fas fa-cog"></i> Einstellungen
                    </button>
                    <button class="cookie-btn cookie-btn-decline" onclick="cookieBanner.declineCookies()">
                        <i class="fas fa-times"></i> Ablehnen
                    </button>
                    <button class="cookie-btn cookie-btn-accept" onclick="cookieBanner.acceptCookies()">
                        <i class="fas fa-check"></i> Akzeptieren
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);
    }

    showBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            // Small delay to ensure CSS is loaded
            setTimeout(() => {
                banner.classList.add('show');
            }, 100);
        }
    }

    hideBanner() {
        const banner = document.getElementById('cookie-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.3s ease-out';
            setTimeout(() => {
                banner.classList.add('hidden');
                banner.remove();
            }, 300);
        }
    }

    acceptCookies() {
        this.setCookie(this.cookieName, 'true', 365);
        this.hideBanner();
        
        // Optional: Enable analytics or other cookie-dependent features
        this.enableCookieFeatures();
        
        console.log('Cookies accepted by user');
    }

    declineCookies() {
        this.setCookie(this.cookieName, 'false', 365);
        this.hideBanner();
        
        // Redirect to Google
        setTimeout(() => {
            window.location.href = 'https://www.google.com';
        }, 500);
        
        console.log('Cookies declined by user, redirecting to Google');
    }

    showSettings() {
        // Create a simple settings modal
        const modal = document.createElement('div');
        modal.id = 'cookie-settings-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10001;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: fadeIn 0.3s ease-out;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                padding: 30px;
                border-radius: 12px;
                max-width: 500px;
                margin: 20px;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
                position: relative;
            ">
                <button onclick="cookieBanner.closeSettings()" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #666;
                ">×</button>
                
                <h3 style="margin-bottom: 20px; color: #2E3A4A; font-family: 'Montserrat', sans-serif;">Cookie-Einstellungen</h3>
                
                <div style="margin-bottom: 20px; color: #626E7F; line-height: 1.6;">
                    <h4 style="color: #3D4A5D; margin-bottom: 10px;">Notwendige Cookies</h4>
                    <p style="font-size: 14px; margin-bottom: 15px;">Diese Cookies sind für die Grundfunktionen der Website erforderlich.</p>
                    
                    <h4 style="color: #3D4A5D; margin-bottom: 10px;">Analyse-Cookies</h4>
                    <p style="font-size: 14px; margin-bottom: 15px;">Helfen uns zu verstehen, wie Besucher mit der Website interagieren.</p>
                    
                    <h4 style="color: #3D4A5D; margin-bottom: 10px;">Marketing-Cookies</h4>
                    <p style="font-size: 14px;">Werden verwendet, um Besuchern relevante Anzeigen und Marketingkampagnen bereitzustellen.</p>
                </div>
                
                <div style="display: flex; gap: 10px; justify-content: flex-end;">
                    <button onclick="cookieBanner.declineCookies()" class="cookie-btn cookie-btn-decline">Alle ablehnen</button>
                    <button onclick="cookieBanner.acceptCookies()" class="cookie-btn cookie-btn-accept">Alle akzeptieren</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add fadeIn animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }

    closeSettings() {
        const modal = document.getElementById('cookie-settings-modal');
        if (modal) {
            modal.remove();
        }
    }

    enableCookieFeatures() {
        // Here you can enable Google Analytics, Facebook Pixel, etc.
        // Example:
        // if (typeof gtag !== 'undefined') {
        //     gtag('consent', 'update', {
        //         'analytics_storage': 'granted'
        //     });
        // }
    }

    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
    }

    getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}

// Initialize cookie banner when DOM is loaded
let cookieBanner;

document.addEventListener('DOMContentLoaded', function() {
    cookieBanner = new CookieBanner();
});

// Fallback for when DOMContentLoaded has already fired
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        if (!cookieBanner) {
            cookieBanner = new CookieBanner();
        }
    });
} else {
    cookieBanner = new CookieBanner();
}

// Add slideDown animation for hiding
const additionalStyle = document.createElement('style');
additionalStyle.textContent = `
    @keyframes slideDown {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(additionalStyle);

// Test-Funktion zum Löschen aller Cookies
function clearAllCookies() {
    console.log('Clearing all cookies');
    document.cookie.split(';').forEach(function(c) { 
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/'); 
    });
    location.reload();
}

// Cookie-Banner manuell anzeigen
function showCookieBannerNow() {
    clearAllCookies();
}

console.log('Debug functions loaded: clearAllCookies(), showCookieBannerNow()');

