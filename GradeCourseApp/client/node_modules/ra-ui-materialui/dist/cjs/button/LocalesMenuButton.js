"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalesMenuButtonClasses = exports.LocalesMenuButton = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var Translate_1 = __importDefault(require("@mui/icons-material/Translate"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
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
var LocalesMenuButton = function (props) {
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var languages = (0, ra_core_1.useLocales)({ locales: props.languages });
    var _b = (0, ra_core_1.useLocaleState)(), locale = _b[0], setLocale = _b[1];
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
        React.createElement(material_1.Button, { color: "inherit", "aria-controls": "simple-menu", "aria-label": "", "aria-haspopup": "true", onClick: handleLanguageClick, startIcon: React.createElement(Translate_1.default, null), endIcon: React.createElement(ExpandMore_1.default, { fontSize: "small" }) }, getNameForLocale(locale)),
        React.createElement(material_1.Menu, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, languages.map(function (language) { return (React.createElement(material_1.MenuItem, { key: language.locale, onClick: changeLocale(language.locale), selected: language.locale === locale }, language.name)); }))));
};
exports.LocalesMenuButton = LocalesMenuButton;
var PREFIX = 'RaLocalesMenuButton';
exports.LocalesMenuButtonClasses = {};
var Root = (0, material_1.styled)(material_1.Box, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})({});
//# sourceMappingURL=LocalesMenuButton.js.map