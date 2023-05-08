import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TranslatableContextProvider, useTranslatable, } from 'ra-core';
import { TranslatableInputsTabs } from './TranslatableInputsTabs';
import { TranslatableInputsTabContent } from './TranslatableInputsTabContent';
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
export var TranslatableInputs = function (props) {
    var className = props.className, defaultLocale = props.defaultLocale, locales = props.locales, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, _b = props.selector, selector = _b === void 0 ? React.createElement(TranslatableInputsTabs, { groupKey: groupKey }) : _b, children = props.children, variant = props.variant, margin = props.margin;
    var context = useTranslatable({ defaultLocale: defaultLocale, locales: locales });
    return (React.createElement(Root, { className: className },
        React.createElement(TranslatableContextProvider, { value: context },
            selector,
            locales.map(function (locale) { return (React.createElement(TranslatableInputsTabContent, { key: locale, locale: locale, groupKey: groupKey, variant: variant, margin: margin }, children)); }))));
};
var PREFIX = 'RaTranslatableInputs';
var Root = styled('div', {
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