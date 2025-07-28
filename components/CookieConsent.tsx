'use client';

import { useEffect } from 'react';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';

// Extend Window interface for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Consent Mode Service Constants
const SERVICE_AD_STORAGE = 'ad_storage';
const SERVICE_AD_USER_DATA = 'ad_user_data';
const SERVICE_AD_PERSONALIZATION = 'ad_personalization';
const SERVICE_ANALYTICS_STORAGE = 'analytics_storage';
const SERVICE_FUNCTIONALITY_STORAGE = 'functionality_storage';
const SERVICE_PERSONALIZATION_STORAGE = 'personalization_storage';
const SERVICE_SECURITY_STORAGE = 'security_storage';

// Category Constants
const CAT_NECESSARY = 'necessary';
const CAT_ANALYTICS = 'analytics';
const CAT_MARKETING = 'marketing';
const CAT_FUNCTIONALITY = 'functionality';
const CAT_SECURITY = 'security';

export default function CookieConsentComponent() {
  useEffect(() => {
    // Initialize GTM and consent mode if GTM is configured
    if (process.env.NEXT_PUBLIC_GTM) {
      // Define dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: any[]) => {
        window.dataLayer.push(args);
      };

      // Set default consent to 'denied' (before GTM loads)
      gtag('consent', 'default', {
        [SERVICE_AD_STORAGE]: 'denied',
        [SERVICE_AD_USER_DATA]: 'denied',
        [SERVICE_AD_PERSONALIZATION]: 'denied',
        [SERVICE_ANALYTICS_STORAGE]: 'denied',
        [SERVICE_FUNCTIONALITY_STORAGE]: 'denied',
        [SERVICE_PERSONALIZATION_STORAGE]: 'denied',
        [SERVICE_SECURITY_STORAGE]: 'denied',
      });

      // Load GTM
      const gtmScript = document.createElement('script');
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-${process.env.NEXT_PUBLIC_GTM}');
      `;
      document.head.appendChild(gtmScript);

      // GTM noscript iframe
      const noscript = document.createElement('noscript');
      noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${process.env.NEXT_PUBLIC_GTM}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
      document.body.insertBefore(noscript, document.body.firstChild);

      // Make gtag globally available
      window.gtag = gtag;
    }

    // Function to update gtag consent based on user choices
    const updateGtagConsent = () => {
      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          [SERVICE_ANALYTICS_STORAGE]: CookieConsent.acceptedService(SERVICE_ANALYTICS_STORAGE, CAT_ANALYTICS) ? 'granted' : 'denied',
          [SERVICE_AD_STORAGE]: CookieConsent.acceptedService(SERVICE_AD_STORAGE, CAT_MARKETING) ? 'granted' : 'denied',
          [SERVICE_AD_USER_DATA]: CookieConsent.acceptedService(SERVICE_AD_USER_DATA, CAT_MARKETING) ? 'granted' : 'denied',
          [SERVICE_AD_PERSONALIZATION]: CookieConsent.acceptedService(SERVICE_AD_PERSONALIZATION, CAT_MARKETING) ? 'granted' : 'denied',
          [SERVICE_FUNCTIONALITY_STORAGE]: CookieConsent.acceptedService(SERVICE_FUNCTIONALITY_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
          [SERVICE_PERSONALIZATION_STORAGE]: CookieConsent.acceptedService(SERVICE_PERSONALIZATION_STORAGE, CAT_FUNCTIONALITY) ? 'granted' : 'denied',
          [SERVICE_SECURITY_STORAGE]: CookieConsent.acceptedService(SERVICE_SECURITY_STORAGE, CAT_SECURITY) ? 'granted' : 'denied',
        });
      }
    };

    CookieConsent.run({
      categories: {
        [CAT_NECESSARY]: {
          enabled: true,
          readOnly: true,
          services: {
            [SERVICE_SECURITY_STORAGE]: {
              label: 'Ermöglicht die Speicherung von Sicherheitsdaten wie Authentifizierung und Betrugsschutz.'
            }
          }
        },
        [CAT_ANALYTICS]: {
          autoClear: {
            cookies: [
              {
                name: /^_ga/,
              },
              {
                name: '_gid',
              },
              {
                name: /^_gat/,
              }
            ]
          },
          services: {
            [SERVICE_ANALYTICS_STORAGE]: {
              label: 'Ermöglicht die Speicherung von Analytics-Daten wie Besuchsdauer und Seitenaufrufe.'
            }
          }
        },
        [CAT_MARKETING]: {
          services: {
            [SERVICE_AD_STORAGE]: {
              label: 'Ermöglicht die Speicherung von werbebezogenen Daten.'
            },
            [SERVICE_AD_USER_DATA]: {
              label: 'Ermöglicht das Senden von Nutzerdaten für Werbezwecke an Google.'
            },
            [SERVICE_AD_PERSONALIZATION]: {
              label: 'Ermöglicht personalisierte Werbung.'
            }
          }
        },
        [CAT_FUNCTIONALITY]: {
          services: {
            [SERVICE_FUNCTIONALITY_STORAGE]: {
              label: 'Ermöglicht die Speicherung von Funktionsdaten wie Spracheinstellungen.'
            },
            [SERVICE_PERSONALIZATION_STORAGE]: {
              label: 'Ermöglicht die Speicherung von Personalisierungsdaten wie Video-Empfehlungen.'
            }
          }
        }
      },

      onFirstConsent: () => {
        updateGtagConsent();
      },

      onConsent: ({ cookie }) => {
        console.log('Consent gegeben:', cookie);
        updateGtagConsent();
      },

      onChange: ({ changedCategories }) => {
        console.log('Consent geändert:', changedCategories);
        updateGtagConsent();
      },

      language: {
        default: 'de',
        translations: {
          de: {
            consentModal: {
              title: 'Wir verwenden Cookies',
              description: 'Diese Website verwendet notwendige Cookies für den ordnungsgemäßen Betrieb und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Ihrer Zustimmung gesetzt.',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              showPreferencesBtn: 'Einstellungen verwalten',
              footer: `
                <a href="/datenschutz" target="_blank">Datenschutzerklärung</a>
                <a href="/impressum" target="_blank">Impressum</a>
              `,
            },
            preferencesModal: {
              title: 'Cookie-Einstellungen verwalten',
              acceptAllBtn: 'Alle akzeptieren',
              acceptNecessaryBtn: 'Nur notwendige',
              savePreferencesBtn: 'Auswahl speichern',
              closeIconLabel: 'Modal schließen',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Cookie-Nutzung',
                  description: 'Wir verwenden Cookies, um die Grundfunktionen der Website zu gewährleisten und Ihre Online-Erfahrung zu verbessern.'
                },
                {
                  title: 'Unbedingt notwendige Cookies',
                  description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich.',
                  linkedCategory: CAT_NECESSARY,
                },
                {
                  title: 'Analyse-Cookies',
                  description: 'Für Analytics verwendete Cookies helfen dabei, Daten zu sammeln, die es Services ermöglichen zu verstehen, wie Benutzer mit einem bestimmten Service interagieren.',
                  linkedCategory: CAT_ANALYTICS,
                  cookieTable: {
                    headers: {
                      name: 'Name',
                      domain: 'Service',
                      description: 'Beschreibung',
                      expiration: 'Ablauf'
                    },
                    body: [
                      {
                        name: '_ga',
                        domain: 'Google Analytics',
                        description: 'Cookie gesetzt von <a href="https://business.safety.google/adscookies/">Google Analytics</a>',
                        expiration: 'Läuft nach 12 Tagen ab'
                      },
                      {
                        name: '_gid',
                        domain: 'Google Analytics',
                        description: 'Cookie gesetzt von <a href="https://business.safety.google/adscookies/">Google Analytics</a>',
                        expiration: 'Session'
                      }
                    ]
                  }
                },
                {
                  title: 'Marketing-Cookies',
                  description: 'Google verwendet Cookies für Werbung, einschließlich der Bereitstellung und Darstellung von Anzeigen, der Personalisierung von Anzeigen und der Messung der Effektivität von Anzeigen.',
                  linkedCategory: CAT_MARKETING,
                },
                {
                  title: 'Funktionalität',
                  description: 'Für die Funktionalität verwendete Cookies ermöglichen es Benutzern, mit einem Service oder einer Website zu interagieren, um auf Funktionen zuzugreifen, die für diesen Service grundlegend sind.',
                  linkedCategory: CAT_FUNCTIONALITY,
                },
                {
                  title: 'Weitere Informationen',
                  description: 'Bei Fragen zu unseren Cookie-Richtlinien kontaktieren Sie uns bitte über unser <a href="/kontakt">Kontaktformular</a>.'
                }
              ]
            }
          }
        }
      },

      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: 'box',
          equalWeightButtons: true,
          flipButtons: false
        }
      }
    });
  }, []);

  return null;
} 