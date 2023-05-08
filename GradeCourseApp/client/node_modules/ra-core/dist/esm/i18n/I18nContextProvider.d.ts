import { ReactNode } from 'react';
import { I18nProvider } from '../types';
/**
 * Store the i18nProvider in a context, and rerender children when the locale changes
 */
export declare const I18nContextProvider: ({ value, children, }: I18nContextProviderProps) => JSX.Element;
export interface I18nContextProviderProps {
    value: I18nProvider;
    children: ReactNode;
}
//# sourceMappingURL=I18nContextProvider.d.ts.map