import * as React from 'react';
import { useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme, } from '@mui/material/styles';
import { useTheme } from './useTheme';
/**
 * This sets the MUI theme based on the store.
 *
 * @param props
 * @param props.children The children of the component.
 * @param props.theme The initial theme.
 */
export var ThemeProvider = function (_a) {
    var children = _a.children, themeOverride = _a.theme;
    var theme = useTheme(themeOverride)[0];
    var themeValue = useMemo(function () {
        try {
            return createTheme(theme);
        }
        catch (e) {
            console.warn('Failed to reuse custom theme from store', e);
            return createTheme();
        }
    }, [theme]);
    return React.createElement(MuiThemeProvider, { theme: themeValue }, children);
};
//# sourceMappingURL=ThemeProvider.js.map