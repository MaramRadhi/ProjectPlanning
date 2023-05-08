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
 * Form input to edit a Date string value in the "YYYY-MM-DD" format (e.g. '2021-06-23').
 *
 * Renders a date picker (the exact UI depends on the browser).
 *
 * @example
 * import { Edit, SimpleForm, DateInput } from 'react-admin';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <DateInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * // If the initial value is a Date object, DateInput converts it to a string
 * // but you must pass a custom parse method to convert the form value
 * // (which is always a date string) back to a Date object.
 * <DateInput source="published_at" parse={val => new Date(val)} />
 */
export var DateInput = function (_a) {
    var className = _a.className, defaultValue = _a.defaultValue, _b = _a.format, format = _b === void 0 ? getStringFromDate : _b, label = _a.label, name = _a.name, source = _a.source, resource = _a.resource, helperText = _a.helperText, margin = _a.margin, onBlur = _a.onBlur, onChange = _a.onChange, parse = _a.parse, validate = _a.validate, variant = _a.variant, rest = __rest(_a, ["className", "defaultValue", "format", "label", "name", "source", "resource", "helperText", "margin", "onBlur", "onChange", "parse", "validate", "variant"]);
    var _c = useInput(__assign({ defaultValue: defaultValue, name: name, format: format, parse: parse, onBlur: onBlur, onChange: onChange, resource: resource, source: source, validate: validate }, rest)), field = _c.field, fieldState = _c.fieldState, formState = _c.formState, id = _c.id, isRequired = _c.isRequired;
    var error = fieldState.error, invalid = fieldState.invalid, isTouched = fieldState.isTouched;
    var isSubmitted = formState.isSubmitted;
    return (React.createElement(TextField, __assign({ id: id }, field, { className: clsx('ra-input', "ra-input-".concat(source), className), type: "date", size: "small", variant: variant, margin: margin, error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }), label: React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), InputLabelProps: defaultInputLabelProps }, sanitizeInputRestProps(rest))));
};
DateInput.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.element,
    ]),
    resource: PropTypes.string,
    source: PropTypes.string,
};
/**
 * Convert Date object to String
 *
 * @param {Date} value value to convert
 * @returns {String} A standardized date (yyyy-MM-dd), to be passed to an <input type="date" />
 */
var convertDateToString = function (value) {
    if (!(value instanceof Date) || isNaN(value.getDate()))
        return '';
    var pad = '00';
    var yyyy = value.getFullYear().toString();
    var MM = (value.getMonth() + 1).toString();
    var dd = value.getDate().toString();
    return "".concat(yyyy, "-").concat((pad + MM).slice(-2), "-").concat((pad + dd).slice(-2));
};
var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
var defaultInputLabelProps = { shrink: true };
var getStringFromDate = function (value) {
    // null, undefined and empty string values should not go through dateFormatter
    // otherwise, it returns undefined and will make the input an uncontrolled one.
    if (value == null || value === '') {
        return '';
    }
    if (value instanceof Date) {
        return convertDateToString(value);
    }
    // valid dates should not be converted
    if (dateRegex.test(value)) {
        return value;
    }
    return convertDateToString(new Date(value));
};
//# sourceMappingURL=DateInput.js.map