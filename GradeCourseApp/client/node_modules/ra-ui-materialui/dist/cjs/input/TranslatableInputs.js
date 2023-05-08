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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableInputs = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var ra_core_1 = require("ra-core");
var TranslatableInputsTabs_1 = require("./TranslatableInputsTabs");
var TranslatableInputsTabContent_1 = require("./TranslatableInputsTabContent");
/**
 * Provides a way to edit multiple languages for any input passed as children.
 * It expects the translatable values to have the following structure:
 * {
 *     name: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     },
 *     description: {
 *         en: 'The english value',
 *         fr: 'The french value',
 *         tlh: 'The klingon value',
 *     }
 * }
 *
 * @example <caption>Basic usage</caption>
 * <TranslatableInputs locales={['en', 'fr']}>
 *     <TextInput source="title" />
 *     <RichTextInput source="description" />
 * </Translatable>
 *
 * @example <caption>With a custom language selector</caption>
 * <TranslatableInputs
 *     selector={<MyLanguageSelector />}
 *     locales={['en', 'fr']}
 * >
 *     <TextInput source="title" />
 * </Translatable>
 *
 * const MyLanguageSelector = () => {
 *     const {
 *         locales,
 *         selectedLocale,
 *         selectLocale,
 *     } = useTranslatableContext();
 *
 *     return (
 *         <select onChange={event => selectLocale(event.target.value)}>
 *             {locales.map((locale) => (
 *                 <option selected={locale === selectedLocale}>
 *                     {locale}
 *                 </option>
 *             ))}
 *        </select>
 *     );
 * }
 *
 * @param props The component props
 * @param {string} props.defaultLocale The locale selected by default. Default to 'en'.
 * @param {string[]} props.locales An array of the possible locales. For example: `['en', 'fr'].
 * @param {ReactElement} props.selector The element responsible for selecting a locale. Defaults to MUI tabs.
 */
var TranslatableInputs = function (props) {
    var className = props.className, defaultLocale = props.defaultLocale, locales = props.locales, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, _b = props.selector, selector = _b === void 0 ? React.createElement(TranslatableInputsTabs_1.TranslatableInputsTabs, { groupKey: groupKey }) : _b, children = props.children, variant = props.variant, margin = props.margin;
    var context = (0, ra_core_1.useTranslatable)({ defaultLocale: defaultLocale, locales: locales });
    return (React.createElement(Root, { className: className },
        React.createElement(ra_core_1.TranslatableContextProvider, { value: context },
            selector,
            locales.map(function (locale) { return (React.createElement(TranslatableInputsTabContent_1.TranslatableInputsTabContent, { key: locale, locale: locale, groupKey: groupKey, variant: variant, margin: margin }, children)); }))));
};
exports.TranslatableInputs = TranslatableInputs;
var PREFIX = 'RaTranslatableInputs';
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        flexGrow: 1,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
    });
});
//# sourceMappingURL=TranslatableInputs.js.map