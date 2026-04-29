import { default as i18n } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ptTranslations } from './dictionary/pt';
import { enTranslations } from './dictionary/en';

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: 'pt',
  resources: {
    pt: ptTranslations,
    en: enTranslations,
  },
  lng: localStorage.getItem('lang') || 'pt',
});

export { i18n };
export const t = i18n.t.bind(i18n);