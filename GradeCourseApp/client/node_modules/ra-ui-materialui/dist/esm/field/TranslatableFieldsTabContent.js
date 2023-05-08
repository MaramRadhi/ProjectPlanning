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
import { useTranslatableContext } from 'ra-core';
import { Labeled } from '../Labeled';
/**
 * Default container for a group of translatable fields inside a TranslatableFields components.
 * @see TranslatableFields
 */
export var TranslatableFieldsTabContent = function (props) {
    var children = props.children, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, locale = props.locale, record = props.record, resource = props.resource, className = props.className, other = __rest(props, ["children", "groupKey", "locale", "record", "resource", "className"]);
    var _b = useTranslatableContext(), selectedLocale = _b.selectedLocale, getLabel = _b.getLabel, getSource = _b.getSource;
    return (React.createElement(Root, __assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: "translatable-content-".concat(groupKey).concat(locale), "aria-labelledby": "translatable-header-".concat(groupKey).concat(locale), className: className }, other), Children.map(children, function (field) {
        return field && isValidElement(field) ? (React.createElement("div", { key: field.props.source }, field.props.addLabel ? (React.createElement(Labeled, { resource: resource, label: field.props.label, source: field.props.source }, cloneElement(field, __assign(__assign({}, field.props), { label: getLabel(field.props.source), record: record, source: getSource(field.props.source, locale) })))) : typeof field === 'string' ? (field) : (cloneElement(field, __assign(__assign({}, field.props), { label: getLabel(field.props.source), record: record, source: getSource(field.props.source, locale) }))))) : null;
    })));
};
var PREFIX = 'RaTranslatableFieldsTabContent';
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        flexGrow: 1,
        padding: theme.spacing(2),
        borderRadius: 0,
        borderBottomLeftRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
        border: "1px solid ".concat(theme.palette.divider),
        borderTop: 0,
    });
});
//# sourceMappingURL=TranslatableFieldsTabContent.js.map