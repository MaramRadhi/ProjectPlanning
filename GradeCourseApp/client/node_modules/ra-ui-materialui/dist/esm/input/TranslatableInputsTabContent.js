var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Children, cloneElement, isValidElement, } from 'react';
import { FormGroupContextProvider, useTranslatableContext, } from 'ra-core';
/**
 * Default container for a group of translatable inputs inside a TranslatableInputs component.
 * @see TranslatableInputs
 */
export var TranslatableInputsTabContent = function (props) {
    var children = props.children, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, locale = props.locale, margin = props.margin, variant = props.variant, other = __rest(props, ["children", "groupKey", "locale", "margin", "variant"]);
    var _b = useTranslatableContext(), selectedLocale = _b.selectedLocale, getLabel = _b.getLabel, getSource = _b.getSource;
    return (React.createElement(FormGroupContextProvider, { name: "".concat(groupKey).concat(locale) },
        React.createElement(Root, __assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: "translatable-content-".concat(groupKey).concat(locale), "aria-labelledby": "translatable-header-".concat(groupKey).concat(locale), className: TranslatableInputsTabContentClasses.root }, other), Children.map(children, function (child) {
            return isValidElement(child)
                ? cloneElement(child, __assign(__assign({}, child.props), { label: getLabel(child.props.source, child.props.label), source: getSource(child.props.source, locale) }))
                : null;
        }))));
};
var PREFIX = 'RaTranslatableInputsTabContent';
export var TranslatableInputsTabContentClasses = {
    root: "".concat(PREFIX, "-root"),
};
var Root = styled('div', { name: PREFIX })(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(TranslatableInputsTabContentClasses.root)] = {
            flexGrow: 1,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            borderRadius: 0,
            borderBottomLeftRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            border: "1px solid ".concat(theme.palette.divider),
            borderTop: 0,
        },
        _b);
});
//# sourceMappingURL=TranslatableInputsTabContent.js.map