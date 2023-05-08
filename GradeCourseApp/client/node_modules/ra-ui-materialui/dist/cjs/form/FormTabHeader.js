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
exports.FormTabHeader = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var react_hook_form_1 = require("react-hook-form");
var TabbedFormView_1 = require("./TabbedFormView");
var FormTabHeader = function (_a) {
    var _b;
    var count = _a.count, label = _a.label, value = _a.value, icon = _a.icon, className = _a.className, onChange = _a.onChange, syncWithLocation = _a.syncWithLocation, rest = __rest(_a, ["count", "label", "value", "icon", "className", "onChange", "syncWithLocation"]);
    var translate = (0, ra_core_1.useTranslate)();
    var location = (0, react_router_dom_1.useLocation)();
    var isSubmitted = (0, react_hook_form_1.useFormState)().isSubmitted;
    var formGroup = (0, ra_core_1.useFormGroup)(value.toString());
    var propsForLink = {
        component: react_router_dom_1.Link,
        to: __assign(__assign({}, location), { pathname: value }),
    };
    var tabLabel = (0, react_1.isValidElement)(label)
        ? label
        : translate(label, { _: label });
    if (count !== undefined) {
        tabLabel = (React.createElement("span", null,
            tabLabel,
            " (",
            count,
            ")"));
    }
    return (React.createElement(material_1.Tab, __assign({ label: tabLabel, value: value, icon: icon, className: (0, clsx_1.default)('form-tab', className, (_b = {},
            _b[TabbedFormView_1.TabbedFormClasses.errorTabButton] = !formGroup.isValid && (formGroup.isTouched || isSubmitted),
            _b.error = !formGroup.isValid && (formGroup.isTouched || isSubmitted),
            _b)) }, (syncWithLocation ? propsForLink : {}), { id: "tabheader-".concat(value), "aria-controls": "tabpanel-".concat(value), onChange: onChange }, rest)));
};
exports.FormTabHeader = FormTabHeader;
exports.FormTabHeader.propTypes = {
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    count: prop_types_1.default.node,
    children: prop_types_1.default.node,
    intent: prop_types_1.default.oneOf(['header', 'content']),
    hidden: prop_types_1.default.bool,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element])
        .isRequired,
    margin: prop_types_1.default.oneOf(['none', 'dense', 'normal']),
    path: prop_types_1.default.string,
    // @ts-ignore
    record: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
    variant: prop_types_1.default.oneOf(['standard', 'outlined', 'filled']),
};
//# sourceMappingURL=FormTabHeader.js.map