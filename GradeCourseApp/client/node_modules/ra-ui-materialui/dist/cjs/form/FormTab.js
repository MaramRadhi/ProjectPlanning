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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormTab = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var FormTabHeader_1 = require("./FormTabHeader");
var FormTab = function (props) {
    var children = props.children, className = props.className, contentClassName = props.contentClassName, count = props.count, hidden = props.hidden, icon = props.icon, intent = props.intent, label = props.label, onChange = props.onChange, path = props.path, resource = props.resource, syncWithLocation = props.syncWithLocation, value = props.value, rest = __rest(props, ["children", "className", "contentClassName", "count", "hidden", "icon", "intent", "label", "onChange", "path", "resource", "syncWithLocation", "value"]);
    var renderHeader = function () { return (React.createElement(FormTabHeader_1.FormTabHeader, __assign({ label: label, count: count, value: value, icon: icon, className: className, syncWithLocation: syncWithLocation, onChange: onChange }, sanitizeRestProps(rest)))); };
    var renderContent = function () { return (React.createElement(ra_core_1.FormGroupContextProvider, { name: value.toString() },
        React.createElement(material_1.Stack, __assign({ alignItems: "flex-start", style: hidden ? hiddenStyle : null, className: contentClassName, id: "tabpanel-".concat(value), "aria-labelledby": "tabheader-".concat(value), "aria-hidden": hidden || undefined }, rest), children))); };
    return intent === 'header' ? renderHeader() : renderContent();
};
exports.FormTab = FormTab;
exports.FormTab.propTypes = {
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    children: prop_types_1.default.node,
    count: prop_types_1.default.node,
    intent: prop_types_1.default.oneOf(['header', 'content']),
    hidden: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element])
        .isRequired,
    path: prop_types_1.default.string,
    // @ts-ignore
    resource: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
exports.FormTab.displayName = 'FormTab';
var hiddenStyle = { display: 'none' };
var sanitizeRestProps = function (_a) {
    var classes = _a.classes, ref = _a.ref, margin = _a.margin, rest = __rest(_a, ["classes", "ref", "margin"]);
    return rest;
};
//# sourceMappingURL=FormTab.js.map