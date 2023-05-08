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
import PropTypes from 'prop-types';
import clsx from 'clsx';
import TextField from '@mui/material/TextField';
import { useInput, FieldTitle } from 'ra-core';
import { sanitizeInputRestProps } from './sanitizeInputRestProps';
import { InputHelperText } from './InputHelperText';
/**
 * Converts a datetime string without timezone to a date object
 * with timezone, using the browser timezone.
 *
 * @param {string} value Date string, formatted as yyyy-MM-ddThh:mm
 * @return {Date}
 */
var parseDateTime = function (value) {
    return value ? new Date(value) : value === '' ? null : value;
};
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
export var DateTimeInput = function (_a) {
    var className = _a.className, defaultValue = _a.defaultValue, _b = _a.format, format = _b === void 0 ? formatDateTime : _b, label = _a.label, helperText = _a.helperText, margin = _a.margin, onBlur = _a.onBlur, onChange = _a.onChange, source = _a.source, resource = _a.resource, _c = _a.parse, parse = _c === void 0 ? parseDateTime : _c, validate = _a.validate, variant = _a.variant, rest = __rest(_a, ["className", "defaultValue", "format", "label", "helperText", "margin", "onBlur", "onChange", "source", "resource", "parse", "validate", "variant"]);
    var _d = useInput(__assign({ defaultValue: defaultValue, format: format, parse: parse, onBlur: onBlur, onChange: onChange, resource: resource, source: source, validate: validate }, rest)), field = _d.field, fieldState = _d.fieldState, formState = _d.formState, id = _d.id, isRequired = _d.isRequired;
    var error = fieldState.error, invalid = fieldState.invalid, isTouched = fieldState.isTouched;
    var isSubmitted = formState.isSubmitted;
    return (React.createElement(TextField, __assign({ id: id }, field, { className: clsx('ra-input', "ra-input-".concat(source), className), type: "datetime-local", size: "small", variant: variant, margin: margin, error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }), label: React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: defaultInputLabelProps }, sanitizeInputRestProps(rest))));
};
DateTimeInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.element,
    ]),
    resource: PropTypes.string,
    source: PropTypes.string,
};
var leftPad = function (nb) {
    if (nb === void 0) { nb = 2; }
    return function (value) { return ('0'.repeat(nb) + value).slice(-nb); };
};
var leftPad4 = leftPad(4);
var leftPad2 = leftPad(2);
/**
 * @param {Date} value value to convert
 * @returns {String} A standardized datetime (yyyy-MM-ddThh:mm), to be passed to an <input type="datetime-local" />
 */
var convertDateToString = function (value) {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    var yyyy = leftPad4(value.getFullYear());
    var MM = leftPad2(value.getMonth() + 1);
    var dd = leftPad2(value.getDate());
    var hh = leftPad2(value.getHours());
    var mm = leftPad2(value.getMinutes());
    return "".concat(yyyy, "-").concat(MM, "-").concat(dd, "T").concat(hh, ":").concat(mm);
};
// yyyy-MM-ddThh:mm
var dateTimeRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/;
var defaultInputLabelProps = { shrink: true };
/**
 * Converts a date from the dataProvider, with timezone, to a date string
 * without timezone for use in an <input type="datetime-local" />.
 *
 * @param {Date | String} value date string or object
 */
var formatDateTime = function (value) {
    // null, undefined and empty string values should not go through convertDateToString
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (dateTimeRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
//# sourceMappingURL=DateTimeInput.js.map