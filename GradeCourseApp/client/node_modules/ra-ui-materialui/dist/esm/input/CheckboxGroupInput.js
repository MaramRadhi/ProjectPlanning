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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import * as React from 'react';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormHelperText from '@mui/material/FormHelperText';
import { FieldTitle, useInput, useChoicesContext } from 'ra-core';
import { sanitizeInputRestProps } from './sanitizeInputRestProps';
import { CheckboxGroupInputItem } from './CheckboxGroupInputItem';
import { InputHelperText } from './InputHelperText';
import { Labeled } from '../Labeled';
import { LinearProgress } from '../layout';
/**
 * An Input component for a checkbox group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * The expected input must be an array of identifiers (e.g. [12, 31]) which correspond to
 * the 'optionValue' of 'choices' attribute objects.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *     { id: 12, name: 'Ray Hakt' },
 *     { id: 31, name: 'Ann Gullar' },
 *     { id: 42, name: 'Sean Phonee' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi' },
 *    { _id: 456, full_name: 'Jane Austen' },
 * ];
 * <CheckboxGroupInput source="recipients" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that can access
 * the related choice through the `useRecordContext` hook. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = () => {
 *     const record = useRecordContext();
 *     return <span>{record.first_name} {record.last_name}</span>;
 * };
 *
 * <CheckboxGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.category.programming' },
 *    { id: 'lifestyle', name: 'myroot.category.lifestyle' },
 *    { id: 'photography', name: 'myroot.category.photography' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceArrayInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <CheckboxGroupInput source="tags" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the MUI <Checkbox> components
 */
export var CheckboxGroupInput = function (props) {
    var choicesProp = props.choices, className = props.className, classesOverride = props.classes, format = props.format, helperText = props.helperText, label = props.label, labelPlacement = props.labelPlacement, isLoadingProp = props.isLoading, isFetchingProp = props.isFetching, _a = props.margin, margin = _a === void 0 ? 'dense' : _a, onBlur = props.onBlur, onChange = props.onChange, options = props.options, _b = props.optionText, optionText = _b === void 0 ? 'name' : _b, _c = props.optionValue, optionValue = _c === void 0 ? 'id' : _c, parse = props.parse, resourceProp = props.resource, _d = props.row, row = _d === void 0 ? true : _d, sourceProp = props.source, _e = props.translateChoice, translateChoice = _e === void 0 ? true : _e, validate = props.validate, rest = __rest(props, ["choices", "className", "classes", "format", "helperText", "label", "labelPlacement", "isLoading", "isFetching", "margin", "onBlur", "onChange", "options", "optionText", "optionValue", "parse", "resource", "row", "source", "translateChoice", "validate"]);
    var _f = useChoicesContext({
        choices: choicesProp,
        isFetching: isFetchingProp,
        isLoading: isLoadingProp,
        resource: resourceProp,
        source: sourceProp,
    }), allChoices = _f.allChoices, isLoading = _f.isLoading, fetchError = _f.error, resource = _f.resource, source = _f.source;
    if (source === undefined) {
        throw new Error("If you're not wrapping the CheckboxGroupInput inside a ReferenceArrayInput, you must provide the source prop");
    }
    if (!isLoading && !fetchError && allChoices === undefined) {
        throw new Error("If you're not wrapping the CheckboxGroupInput inside a ReferenceArrayInput, you must provide the choices prop");
    }
    var _g = useInput(__assign({ format: format, parse: parse, resource: resource, source: source, validate: validate, onChange: onChange, onBlur: onBlur }, rest)), _h = _g.field, formOnChange = _h.onChange, formOnBlur = _h.onBlur, value = _h.value, _j = _g.fieldState, error = _j.error, invalid = _j.invalid, isTouched = _j.isTouched, isSubmitted = _g.formState.isSubmitted, id = _g.id, isRequired = _g.isRequired;
    var handleCheck = useCallback(function (event, isChecked) {
        var newValue;
        if (allChoices.every(function (item) { return typeof get(item, optionValue) === 'number'; })) {
            try {
                // try to convert string value to number, e.g. '123'
                newValue = JSON.parse(event.target.value);
            }
            catch (e) {
                // impossible to convert value, e.g. 'abc'
                newValue = event.target.value;
            }
        }
        else {
            newValue = event.target.value;
        }
        if (isChecked) {
            formOnChange(__spreadArray(__spreadArray([], (value || []), true), [newValue], false));
        }
        else {
            formOnChange(value.filter(function (v) { return v != newValue; })); // eslint-disable-line eqeqeq
        }
        formOnBlur(); // Ensure field is flagged as touched
    }, [allChoices, formOnChange, formOnBlur, optionValue, value]);
    if (isLoading && (!allChoices || allChoices.length === 0)) {
        return (React.createElement(Labeled, __assign({ id: id, label: label, source: source, resource: resource, className: clsx('ra-input', "ra-input-".concat(source), className), isRequired: isRequired }, rest),
            React.createElement(LinearProgress, null)));
    }
    return (React.createElement(StyledFormControl, __assign({ component: "fieldset", margin: margin, error: fetchError || ((isTouched || isSubmitted) && invalid), className: clsx('ra-input', "ra-input-".concat(source), className) }, sanitizeRestProps(rest)),
        React.createElement(FormLabel, { component: "legend", className: CheckboxGroupInputClasses.label },
            React.createElement(FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
        React.createElement(FormGroup, { row: row }, allChoices === null || allChoices === void 0 ? void 0 : allChoices.map(function (choice) { return (React.createElement(CheckboxGroupInputItem, __assign({ key: get(choice, optionValue), choice: choice, id: id, onChange: handleCheck, options: options, optionText: optionText, optionValue: optionValue, translateChoice: translateChoice, value: value, labelPlacement: labelPlacement }, sanitizeRestProps(rest)))); })),
        React.createElement(FormHelperText, { error: fetchError || ((isTouched || isSubmitted) && !!error), className: CheckboxGroupInputClasses.helperText },
            React.createElement(InputHelperText, { touched: isTouched || isSubmitted || fetchError, error: (error === null || error === void 0 ? void 0 : error.message) || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.message), helperText: helperText }))));
};
var sanitizeRestProps = function (_a) {
    var refetch = _a.refetch, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, loaded = _a.loaded, touched = _a.touched, rest = __rest(_a, ["refetch", "setFilter", "setPagination", "setSort", "loaded", "touched"]);
    return sanitizeInputRestProps(rest);
};
CheckboxGroupInput.propTypes = {
    choices: PropTypes.arrayOf(PropTypes.any),
    className: PropTypes.string,
    source: PropTypes.string,
    optionText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.element,
    ]),
    optionValue: PropTypes.string,
    row: PropTypes.bool,
    resource: PropTypes.string,
    translateChoice: PropTypes.bool,
};
var PREFIX = 'RaCheckboxGroupInput';
export var CheckboxGroupInputClasses = {
    label: "".concat(PREFIX, "-label"),
    helperText: "".concat(PREFIX, "-helperText"),
};
var StyledFormControl = styled(FormControl, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(CheckboxGroupInputClasses.label)] = {
            transform: 'translate(0, 4px) scale(0.75)',
            transformOrigin: "top ".concat(theme.direction === 'ltr' ? 'left' : 'right'),
        },
        _b["& .".concat(CheckboxGroupInputClasses.helperText)] = {
            marginLeft: 0,
            marginRight: 0,
        },
        _b);
});
//# sourceMappingURL=CheckboxGroupInput.js.map