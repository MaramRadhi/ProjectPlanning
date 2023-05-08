/// <reference types="react" />
/**
 * Language selector. Changes the locale in the app and persists it in
 * preferences so that the app opens with the right locale in the future.
 *
 * Uses i18nProvider.getLocales() to get the list of available locales.
 *
 * @example
 * import { AppBar, TitlePortal, LocalesMenuButton } from 'react-admin';
 *
 * const MyAppBar = () => (
 *     <AppBar>
 *         <TitlePortal />
 *         <LocalesMenuButton />
 *     </AppBar>
 * );
 */
export declare const LocalesMenuButton: (props: LocalesMenuButtonProps) => JSX.Element;
export declare const LocalesMenuButtonClasses: {};
export interface LocalesMenuButtonProps {
    languages?: {
        locale: string;
        name: string;
    }[];
}
//# sourceMappingURL=LocalesMenuButton.d.ts.map