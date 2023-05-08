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
exports.TextInput = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var ResettableTextField_1 = require("./ResettableTextField");
var InputHelperText_1 = require("./InputHelperText");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
var TextInput = function (props) {
    var className = props.className, defaultValue = props.defaultValue, label = props.label, format = props.format, helperText = props.helperText, onBlur = props.onBlur, onChange = props.onChange, parse = props.parse, resource = props.resource, source = props.source, validate = props.validate, rest = __rest(props, ["className", "defaultValue", "label", "format", "helperText", "onBlur", "onChange", "parse", "resource", "source", "validate"]);
    var _a = (0, ra_core_1.useInput)(__assign({ defaultValue: defaultValue, format: format, parse: parse, resource: resource, source: source, type: 'text', validate: validate, onBlur: onBlur, onChange: onChange }, rest)), field = _a.field, _b = _a.fieldState, error = _b.error, invalid = _b.invalid, isTouched = _b.isTouched, isSubmitted = _a.formState.isSubmitted, id = _a.id, isRequired = _a.isRequired;
    return (React.createElement(ResettableTextField_1.ResettableTextField, __assign({ id: id }, field, { className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), label: label !== '' && label !== false ? (React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })) : null, error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }) }, (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest))));
};
exports.TextInput = TextInput;
exports.TextInput.propTypes = {
    className: prop_types_1.default.string,
    label: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.element,
    ]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
};
exports.TextInput.defaultProps = {
    options: {},
};
//# sourceMappingURL=TextInput.js.map