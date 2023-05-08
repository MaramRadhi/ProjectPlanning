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
import { useInput, FieldTitle } from 'ra-core';
import { ResettableTextField, } from './ResettableTextField';
import { InputHelperText } from './InputHelperText';
import { sanitizeInputRestProps } from './sanitizeInputRestProps';
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
export var TextInput = function (props) {
    var className = props.className, defaultValue = props.defaultValue, label = props.label, format = props.format, helperText = props.helperText, onBlur = props.onBlur, onChange = props.onChange, parse = props.parse, resource = props.resource, source = props.source, validate = props.validate, rest = __rest(props, ["className", "defaultValue", "label", "format", "helperText", "onBlur", "onChange", "parse", "resource", "source", "validate"]);
    var _a = useInput(__assign({ defaultValue: defaultValue, format: format, parse: parse, resource: resource, source: source, type: 'text', validate: validate, onBlur: onBlur, onChange: onChange }, rest)), field = _a.field, _b = _a.fieldState, error = _b.error, invalid = _b.invalid, isTouched = _b.isTouched, isSubmitted = _a.formState.isSubmitted, id = _a.id, isRequired = _a.isRequired;
    return (React.createElement(ResettableTextField, __assign({ id: id }, field, { className: clsx('ra-input', "ra-input-".concat(source), className), label: label !== '' && label !== false ? (React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })) : null, error: (isTouched || isSubmitted) && invalid, helperText: React.createElement(InputHelperText, { touched: isTouched || isSubmitted, error: error === null || error === void 0 ? void 0 : error.message, helperText: helperText }) }, sanitizeInputRestProps(rest))));
};
TextInput.propTypes = {
    className: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.element,
    ]),
    options: PropTypes.object,
    resource: PropTypes.string,
    source: PropTypes.string,
};
TextInput.defaultProps = {
    options: {},
};
//# sourceMappingURL=TextInput.js.map