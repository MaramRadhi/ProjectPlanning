import React from 'react';
import { Tooltip, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTranslate } from 'ra-core';
import { useTheme } from '../layout';
/**
 * Button toggling the theme (light or dark).
 *
 * @example
 * import { AppBar, TitlePortal, ToggleThemeButton } from 'react-admin';
 *
 * const MyAppBar = () => (
 *     <AppBar>
 *         <TitlePortal />
 *         <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
 *     </AppBar>
 * );
 *
 * const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;
 */
export var ToggleThemeButton = function (props) {
    var translate = useTranslate();
    var darkTheme = props.darkTheme, lightTheme = props.lightTheme;
    var _a = useTheme(), theme = _a[0], setTheme = _a[1];
    var handleTogglePaletteType = function () {
        setTheme((theme === null || theme === void 0 ? void 0 : theme.palette.mode) === 'dark' ? lightTheme : darkTheme);
    };
    var toggleThemeTitle = translate('ra.action.toggle_theme', {
        _: 'Toggle Theme',
    });
    return (React.createElement(Tooltip, { title: toggleThemeTitle, enterDelay: 300 },
        React.createElement(IconButton, { color: "inherit", onClick: handleTogglePaletteType, "aria-label": toggleThemeTitle }, (theme === null || theme === void 0 ? void 0 : theme.palette.mode) === 'dark' ? (React.createElement(Brightness7Icon, null)) : (React.createElement(Brightness4Icon, null)))));
};
//# sourceMappingURL=ToggleThemeButton.js.map