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
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { FieldTitle, useInput } from 'ra-core';
import { sanitizeInputRestProps } from './sanitizeInputRestProps';
import { InputHelperText } from './InputHelperText';
import { InputPropTypes } from './InputPropTypes';
export var BooleanInput = function (props) {
    var className = props.className, _a = props.row, row = _a === void 0 ? false : _a, _b = props.defaultValue, defaultValue = _b === void 0 ? false : _b, format = props.format, label = props.label, fullWidth = props.fullWidth, helperText = props.helperText, onBlur = props.onBlur, onChange = props.onChange, onFocus = props.onFocus, disabled = props.disabled, parse = props.parse, resource = props.resource, source = props.source, validate = props.validate, options = props.options, sx = props.sx, rest = __rest(props, ["className", "row", "defaultValue", "format", "label", "fullWidth", "helperText", "onBlur", "onChange", "onFocus", "disabled", "parse", "resource", "source", "validate", "options", "sx"]);
    var _c = useInput(__assign({ defaultValue: defaultValue, format: format, parse: parse, resource: resource, source: source, onBlur: onBlur, onChange: onChange, type: 'checkbox', validate: validate }, rest)), id = _c.id, field = _c.field, isRequired = _c.isRequired, _d = _c.fieldState, error = _d.error, invalid = _d.invalid, isTouched = _d.isTouched, isSubmitted = _c.formState.isSubmitted;
    var handleChange = useCallback(function (event) {
        field.onChange(event);
        // Ensure field is considered as touched
        field.onBlur();
    }, [field]);
    return (React.createElement(FormGroup, { className: clsx('ra-input', "ra-input-".concat(source), className), row: row, sx: sx },
        React.createElement(FormControlLabel, { control: React.createElement(Switch, __assign({ id: id, name: field.name, color: "primary", onChange: handleChange, onFocus: onFocus, checked: field.value }, sanitizeInputRestProps(rest), options, { disabled: disabled })), label: React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) }),
        React.createElement(FormHelperText, { error: (isTouched || isSubmitted) && invalid },
            React.createElement(InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }))));
};
BooleanInput.propTypes = __assign(__assign({}, InputPropTypes), { 
    // @ts-ignore
    options: PropTypes.shape(Switch.propTypes), disabled: PropTypes.bool });
BooleanInput.defaultProps = {
    options: {},
};
//# sourceMappingURL=BooleanInput.js.map