/**
 * Get the current locale
 *
 * @example
 *
 * import { useLocale } from 'react-admin';
 *
 * const availableLanguages = {
 *     en: 'English',
 *     fr: 'Français',
 * }
 * const CurrentLanguage = () => {
 *     const locale = useLocale();
 *     return <span>{availableLanguages[locale]}</span>;
 * }
 *
 * @deprecated use useLocaleState instead
 */
export declare const useLocale: () => string;
//# sourceMappingURL=useLocale.d.ts.map