import { ReactNode } from 'react';
import { ThemeOptions } from '@mui/material';
/**
 * This sets the MUI theme based on the store.
 *
 * @param props
 * @param props.children The children of the component.
 * @param props.theme The initial theme.
 */
export declare const ThemeProvider: ({ children, theme: themeOverride, }: ThemeProviderProps) => JSX.Element;
export interface ThemeProviderProps {
    children: ReactNode;
    theme: ThemeOptions;
}
//# sourceMappingURL=ThemeProvider.d.ts.map