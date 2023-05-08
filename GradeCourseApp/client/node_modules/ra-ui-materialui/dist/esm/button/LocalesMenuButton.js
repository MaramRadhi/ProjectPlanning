import * as React from 'react';
import { useState } from 'react';
import { useLocaleState, useLocales } from 'ra-core';
import { Box, Button, Menu, MenuItem, styled } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Translate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
export var LocalesMenuButton = function (props) {
    var _a = useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var languages = useLocales({ locales: props.languages });
    var _b = useLocaleState(), locale = _b[0], setLocale = _b[1];
    var getNameForLocale = function (locale) {
        var language = languages.find(function (language) { return language.locale === locale; });
        return language ? language.name : '';
    };
    var changeLocale = function (locale) { return function () {
        setLocale(locale);
        setAnchorEl(null);
    }; };
    var handleLanguageClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    return (React.createElement(Root, { component: "span" },
        React.createElement(Button, { color: "inherit", "aria-controls": "simple-menu", "aria-label": "", "aria-haspopup": "true", onClick: handleLanguageClick, startIcon: React.createElement(LanguageIcon, null), endIcon: React.createElement(ExpandMoreIcon, { fontSize: "small" }) }, getNameForLocale(locale)),
        React.createElement(Menu, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, languages.map(function (language) { return (React.createElement(MenuItem, { key: language.locale, onClick: changeLocale(language.locale), selected: language.locale === locale }, language.name)); }))));
};
var PREFIX = 'RaLocalesMenuButton';
export var LocalesMenuButtonClasses = {};
var Root = styled(Box, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})({});
//# sourceMappingURL=LocalesMenuButton.js.map