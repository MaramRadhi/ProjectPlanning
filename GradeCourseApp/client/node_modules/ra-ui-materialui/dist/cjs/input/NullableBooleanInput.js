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
exports.NullableBooleanInputClasses = exports.NullableBooleanInput = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
var InputHelperText_1 = require("./InputHelperText");
var NullableBooleanInput = function (props) {
    var className = props.className, _a = props.format, format = _a === void 0 ? getStringFromBoolean : _a, helperText = props.helperText, label = props.label, margin = props.margin, onBlur = props.onBlur, onChange = props.onChange, _b = props.parse, parse = _b === void 0 ? getBooleanFromString : _b, resource = props.resource, source = props.source, validate = props.validate, variant = props.variant, _c = props.nullLabel, nullLabel = _c === void 0 ? 'ra.boolean.null' : _c, _d = props.falseLabel, falseLabel = _d === void 0 ? 'ra.boolean.false' : _d, _e = props.trueLabel, trueLabel = _e === void 0 ? 'ra.boolean.true' : _e, rest = __rest(props, ["className", "format", "helperText", "label", "margin", "onBlur", "onChange", "parse", "resource", "source", "validate", "variant", "nullLabel", "falseLabel", "trueLabel"]);
    var translate = (0, ra_core_1.useTranslate)();
    var _f = (0, ra_core_1.useInput)(__assign({ format: format, parse: parse, onBlur: onBlur, onChange: onChange, resource: resource, source: source, validate: validate }, rest)), field = _f.field, _g = _f.fieldState, error = _g.error, invalid = _g.invalid, isTouched = _g.isTouched, isSubmitted = _f.formState.isSubmitted, id = _f.id, isRequired = _f.isRequired;
    return (React.createElement(StyledTextField, __assign({ id: id, size: "small" }, field, { className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), exports.NullableBooleanInputClasses.input, className), select: true, margin: margin, label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }), variant: variant }, (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest)),
        React.createElement(MenuItem_1.default, { value: "" }, translate(nullLabel)),
        React.createElement(MenuItem_1.default, { value: "false" }, translate(falseLabel)),
        React.createElement(MenuItem_1.default, { value: "true" }, translate(trueLabel))));
};
exports.NullableBooleanInput = NullableBooleanInput;
exports.NullableBooleanInput.propTypes = {
    label: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.element,
    ]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    nullLabel: prop_types_1.default.string,
    falseLabel: prop_types_1.default.string,
    trueLabel: prop_types_1.default.string,
};
var PREFIX = 'RaNullableBooleanInput';
exports.NullableBooleanInputClasses = {
    input: "".concat(PREFIX, "-input"),
};
var StyledTextField = (0, styles_1.styled)(TextField_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme, fullWidth = _a.fullWidth;
    return (_b = {},
        _b["&.".concat(exports.NullableBooleanInputClasses.input)] = {
            width: fullWidth ? '100%' : theme.spacing(16),
        },
        _b);
});
var getBooleanFromString = function (value) {
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    return null;
};
var getStringFromBoolean = function (value) {
    if (value === true)
        return 'true';
    if (value === false)
        return 'false';
    return '';
};
//# sourceMappingURL=NullableBooleanInput.js.map