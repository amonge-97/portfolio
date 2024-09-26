import { ui, defaultLang, languages } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function getLanguageToSwitch(Astro: Object) {
    const lang = getLangFromUrl(Astro.url);
    return Object.keys(languages).find((key) => key !== lang); 
}

export function useTranslations(Astro: Object) {
    const lang = getLangFromUrl(Astro.url);
    return function t(key: keyof typeof ui[typeof defaultLang]) {
      return ui[lang][key] || ui[defaultLang][key];
    }
}
