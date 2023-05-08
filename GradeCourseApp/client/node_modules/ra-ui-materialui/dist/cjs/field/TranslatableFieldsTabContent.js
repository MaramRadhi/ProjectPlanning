"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslatableFieldsTabContent = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var ra_core_1 = require("ra-core");
var Labeled_1 = require("../Labeled");
/**
 * Default container for a group of translatable fields inside a TranslatableFields components.
 * @see TranslatableFields
 */
var TranslatableFieldsTabContent = function (props) {
    var children = props.children, _a = props.groupKey, groupKey = _a === void 0 ? '' : _a, locale = props.locale, record = props.record, resource = props.resource, className = props.className, other = __rest(props, ["children", "groupKey", "locale", "record", "resource", "className"]);
    var _b = (0, ra_core_1.useTranslatableContext)(), selectedLocale = _b.selectedLocale, getLabel = _b.getLabel, getSource = _b.getSource;
    return (React.createElement(Root, __assign({ role: "tabpanel", hidden: selectedLocale !== locale, id: "translatable-content-".concat(groupKey).concat(locale), "aria-labelledby": "translatable-header-".concat(groupKey).concat(locale), className: className }, other), react_1.Children.map(children, function (field) {
        return field && (0, react_1.isValidElement)(field) ? (React.createElement("div", { key: field.props.source }, field.props.addLabel ? (React.createElement(Labeled_1.Labeled, { resource: resource, label: field.props.label, source: field.props.source }, (0, react_1.cloneElement)(field, __assign(__assign({}, field.props), { label: getLabel(field.props.source), record: record, source: getSource(field.props.source, locale) })))) : typeof field === 'string' ? (field) : ((0, react_1.cloneElement)(field, __assign(__assign({}, field.props), { label: getLabel(field.props.source), record: record, source: getSource(field.props.source, locale) }))))) : null;
    })));
};
exports.TranslatableFieldsTabContent = TranslatableFieldsTabContent;
var PREFIX = 'RaTranslatableFieldsTabContent';
var Root = (0, styles_1.styled)('div', {
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