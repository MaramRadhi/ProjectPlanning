"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslatable = void 0;
var react_1 = require("react");
var core_1 = require("../core");
var useLocaleState_1 = require("./useLocaleState");
var useTranslateLabel_1 = require("./useTranslateLabel");
/**
 * Hook supplying the logic to translate a field value in multiple languages.
 *
 * @param options The hook options
 * @param {string} options.defaultLocale The locale of the default selected locale. Defaults to 'en'.
 * @param {string[]} options.locales An array of the supported locales. Each is an object with a locale and a name property. For example { locale: 'en', name: 'English' }.
 *
 * @returns
 * An object with following properties and methods:
 * - selectedLocale: The locale of the currently selected locale
 * - locales: An array of the supported locales
 * - getLabel: A function which returns the translated label for the given field
 * - getSource: A function which returns the source for the given field
 * - selectLocale: A function which set the selected locale
 */
var useTranslatable = function (options) {
    var localeFromUI = (0, useLocaleState_1.useLocaleState)()[0];
    var _a = options.defaultLocale, defaultLocale = _a === void 0 ? localeFromUI : _a, locales = options.locales;
    var _b = (0, react_1.useState)(defaultLocale), selectedLocale = _b[0], setSelectedLocale = _b[1];
    var resource = (0, core_1.useResourceContext)({});
    var translateLabel = (0, useTranslateLabel_1.useTranslateLabel)();
    var context = (0, react_1.useMemo)(function () { return ({
        getSource: function (source, locale) {
            if (locale === void 0) { locale = selectedLocale; }
            return "".concat(source, ".").concat(locale);
        },
        getLabel: function (source, label) {
            return translateLabel({ source: source, resource: resource, label: label });
        },
        locales: locales,
        selectedLocale: selectedLocale,
        selectLocale: setSelectedLocale,
    }); }, [locales, resource, selectedLocale, translateLabel]);
    return context;
};
exports.useTranslatable = useTranslatable;
//# sourceMappingURL=useTranslatable.js.map