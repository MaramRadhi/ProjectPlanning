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
exports.NumberInput = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var ra_core_1 = require("ra-core");
var InputHelperText_1 = require("./InputHelperText");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 */
var NumberInput = function (_a) {
    var className = _a.className, _b = _a.defaultValue, defaultValue = _b === void 0 ? null : _b, _c = _a.format, format = _c === void 0 ? convertNumberToString : _c, helperText = _a.helperText, label = _a.label, margin = _a.margin, onChange = _a.onChange, onBlur = _a.onBlur, onFocus = _a.onFocus, parse = _a.parse, resource = _a.resource, source = _a.source, step = _a.step, min = _a.min, max = _a.max, validate = _a.validate, variant = _a.variant, overrideInputProps = _a.inputProps, rest = __rest(_a, ["className", "defaultValue", "format", "helperText", "label", "margin", "onChange", "onBlur", "onFocus", "parse", "resource", "source", "step", "min", "max", "validate", "variant", "inputProps"]);
    var _d = (0, ra_core_1.useInput)(__assign({ defaultValue: defaultValue, onBlur: onBlur, resource: resource, source: source, validate: validate }, rest)), field = _d.field, _e = _d.fieldState, error = _e.error, invalid = _e.invalid, isTouched = _e.isTouched, isSubmitted = _d.formState.isSubmitted, id = _d.id, isRequired = _d.isRequired;
    var onBlurFromField = field.onBlur;
    var inputProps = __assign(__assign({}, overrideInputProps), { step: step, min: min, max: max });
    // This is a controlled input that renders directly the string typed by the user.
    // This string is converted to a number on change, and stored in the form state,
    // but that number is not not displayed.
    // This is to allow transitory values like '1.0' that will lead to '1.02'
    // text typed by the user and displayed in the input, unparsed
    var _f = React.useState(format(field.value)), value = _f[0], setValue = _f[1];
    var hasFocus = React.useRef(false);
    // update the input text when the record changes
    React.useEffect(function () {
        if (!hasFocus.current) {
            var stringValue_1 = format(field.value);
            setValue(function (value) { return (value !== stringValue_1 ? stringValue_1 : value); });
        }
    }, [field.value, format]); // eslint-disable-line react-hooks/exhaustive-deps
    // update the input text when the user types in the input
    var handleChange = function (event) {
        if (onChange) {
            onChange(event);
        }
        if (typeof event.target === 'undefined' ||
            typeof event.target.value === 'undefined') {
            return;
        }
        var target = event.target;
        setValue(target.value);
        var newValue = target.valueAsNumber !== undefined &&
            target.valueAsNumber !== null &&
            !isNaN(target.valueAsNumber)
            ? parse
                ? parse(target.valueAsNumber)
                : target.valueAsNumber
            : parse
                ? parse(target.value)
                : convertStringToNumber(target.value);
        field.onChange(newValue);
    };
    var handleFocus = function (event) {
        if (onFocus) {
            onFocus(event);
        }
        hasFocus.current = true;
    };
    var handleBlur = function () {
        if (onBlurFromField) {
            onBlurFromField();
        }
        hasFocus.current = false;
        var stringValue = format(field.value);
        setValue(function (value) { return (value !== stringValue ? stringValue : value); });
    };
    return (React.createElement(TextField_1.default, __assign({ id: id }, field, { 
        // use the locally controlled state instead of the react-hook-form field state
        value: value, onChange: handleChange, onFocus: handleFocus, onBlur: handleBlur, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), type: "number", size: "small", variant: variant, error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }), label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), margin: margin, inputProps: inputProps }, (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest))));
};
exports.NumberInput = NumberInput;
exports.NumberInput.propTypes = {
    label: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.element,
    ]),
    options: prop_types_1.default.object,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    step: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
exports.NumberInput.defaultProps = {
    options: {},
    step: 'any',
    textAlign: 'right',
};
var convertStringToNumber = function (value) {
    if (value == null || value === '') {
        return null;
    }
    var float = parseFloat(value);
    return isNaN(float) ? 0 : float;
};
var convertNumberToString = function (value) {
    return value == null || isNaN(value) ? '' : value.toString();
};
//# sourceMappingURL=NumberInput.js.map