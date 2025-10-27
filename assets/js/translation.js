// Globale Funktionen, die von allen Seiten aufgerufen werden können
window.translationModule = {};

document.addEventListener('DOMContentLoaded', () => {
    // Initialisierung beim ersten Laden
    initTranslation();
});

// Diese Funktion kann nach dem dynamischen Laden von Header und Footer aufgerufen werden
window.initTranslation = function() {
    const languageSwitcherFooter = document.getElementById('language-switcher-footer');
    let currentLanguage = localStorage.getItem('language') || 'en'; // Setting English as default

    // Platzhalter für Übersetzungen – in einer echten Anwendung kämen diese aus JSON-Dateien oder einer API
    const translations = {
        en: {
            "home": "Home",
            "portfolio": "Portfolio",
            "academy": "Academy",
            "team": "Team",
            "sustainability": "Sustainability",
            "contact": "Contact",
            "imprint": "Imprint",
            "data-privacy": "Data Privacy",
            "news": "News",
            // Navigationslinks im Header
            "nav_home": "Home",
            "nav_portfolio": "Portfolio",
            "nav_academy": "Academy",
            "nav_team": "Team",
            "nav_sustainability": "Sustainability",
            "nav_career": "Career",
            // Footer Links
            "footer_contact": "Contact",
            "footer_imprint": "Imprint",
            "footer_data_privacy": "Data Privacy",
            "footer_career": "Career",
            "footer_headquarters": "Headquarters",
            "footer_country": "Germany",
            "footer_language": "Language",
            "footer_rights": "All rights reserved.",
            "footer_phone": "Phone:",
            "footer_email": "Email:",
            // Beispielhafter Text auf der Homepage
            "homepage_headline": "Welcome to our Page!",
            "homepage_intro": "Discover our innovative solutions and dedicated team.",
            // Career Page
            "career_title": "Career",
            "career_subtitle": "Shape the Future with Us",
            "career_intro": "Join our dynamic team and be part of a company that values innovation, sustainability, and professional growth. Discover exciting career opportunities across our portfolio companies.",
            "career_no_positions": "Currently, there are no open positions available. Please check back regularly for updates.",
            "career_contact": "For general inquiries about career opportunities, please contact us at:",
            // Weitere Schlüssel nach Bedarf hinzufügen
        },
        de: {
            "home": "Startseite",
            "portfolio": "Portfolio",
            "academy": "Akademie",
            "team": "Team",
            "sustainability": "Nachhaltigkeit",
            "contact": "Kontakt",
            "imprint": "Impressum",
            "data-privacy": "Datenschutz",
            "news": "Aktuelles",
            // Navigationslinks im Header
            "nav_home": "Startseite",
            "nav_portfolio": "Portfolio",
            "nav_academy": "Akademie",
            "nav_team": "Team",
            "nav_sustainability": "Nachhaltigkeit",
            "nav_career": "Karriere",
            // Footer Links
            "footer_contact": "Kontakt",
            "footer_imprint": "Impressum",
            "footer_data_privacy": "Datenschutz",
            "footer_career": "Karriere",
            "footer_headquarters": "Hauptsitz",
            "footer_country": "Deutschland",
            "footer_language": "Sprache",
            "footer_rights": "Alle Rechte vorbehalten.",
            "footer_phone": "Telefon:",
            "footer_email": "E-Mail:",
            // Beispielhafter Text auf der Homepage
            "homepage_headline": "Willkommen auf unserer Seite!",
            "homepage_intro": "Entdecken Sie unsere innovativen Lösungen und unser engagiertes Team.",
            // Career Page
            "career_title": "Karriere",
            "career_subtitle": "Gestalten Sie die Zukunft mit uns",
            "career_intro": "Werden Sie Teil unseres dynamischen Teams und arbeiten Sie in einem Unternehmen, das Innovation, Nachhaltigkeit und berufliche Entwicklung schätzt. Entdecken Sie spannende Karrieremöglichkeiten in unseren Portfoliounternehmen.",
            "career_no_positions": "Derzeit sind keine offenen Stellen verfügbar. Schauen Sie regelmäßig für Updates vorbei.",
            "career_contact": "Für allgemeine Anfragen zu Karrieremöglichkeiten kontaktieren Sie uns unter:",
            // Weitere Schlüssel nach Bedarf hinzufügen
        }
    };

    function setLanguage(lang) {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        applyTranslations();
        updateSwitcherButtons(lang);
    }

    function applyTranslations() {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                // Für <input type="submit"> oder <button>, den value ändern, falls vorhanden
                if ((element.tagName === 'INPUT' && element.type === 'submit') || element.tagName === 'BUTTON') {
                    if(element.hasAttribute('value')) {
                         element.value = translations[currentLanguage][key];
                    } else {
                         element.textContent = translations[currentLanguage][key];
                    }
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            } else {
                console.warn(`Übersetzungsschlüssel "${key}" nicht gefunden für Sprache "${currentLanguage}".`);
            }
        });
    }

    function updateSwitcherButtons(activeLang) {
        if (languageSwitcherFooter) {
            const buttons = languageSwitcherFooter.querySelectorAll('button[data-lang]');
            buttons.forEach(button => {
                if (button.getAttribute('data-lang') === activeLang) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });
        }
    }

    function createLanguageButtons() {
        if (languageSwitcherFooter) {
            // Find existing buttons instead of recreating them
            const buttons = languageSwitcherFooter.querySelectorAll('.lang-btn');
            
            if (buttons && buttons.length > 0) {
                // Add click event listeners to existing buttons
                buttons.forEach(button => {
                    const lang = button.getAttribute('data-lang');
                    button.addEventListener('click', (e) => {
                        e.preventDefault();
                        setLanguage(lang);
                    });
                    
                    // Set initial active state
                    if (lang === currentLanguage) {
                        button.classList.add('active');
                    } else {
                        button.classList.remove('active');
                    }
                });
            } else {
                // Create buttons only if they don't exist
                languageSwitcherFooter.innerHTML = ''; 
                
                const enButton = document.createElement('button');
                enButton.setAttribute('data-lang', 'en');
                enButton.setAttribute('type', 'button');
                enButton.textContent = 'EN';
                enButton.classList.add('lang-btn');
                if (currentLanguage === 'en') {
                    enButton.classList.add('active');
                }
                enButton.addEventListener('click', (e) => {
                    e.preventDefault();
                    setLanguage('en');
                });
                languageSwitcherFooter.appendChild(enButton);

                const deButton = document.createElement('button');
                deButton.setAttribute('data-lang', 'de');
                deButton.setAttribute('type', 'button');
                deButton.textContent = 'DE';
                deButton.classList.add('lang-btn');
                if (currentLanguage === 'de') {
                    deButton.classList.add('active');
                }
                deButton.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    setLanguage('de');
                });
                languageSwitcherFooter.appendChild(deButton);
            }
        } else {
            console.error('Sprachumschalter-Container #language-switcher-footer nicht gefunden.');
        }
    }

    // Initialisierung
    createLanguageButtons();
    setLanguage(currentLanguage); // Gespeicherte oder Standardsprache beim Laden anwenden
    
    // Globale Funktionen für den Zugriff von anderen Scripts
    window.translationModule.setLanguage = setLanguage;
    window.translationModule.applyTranslations = applyTranslations;
    window.translationModule.createLanguageButtons = createLanguageButtons;
    window.translationModule.updateSwitcherButtons = updateSwitcherButtons;
};