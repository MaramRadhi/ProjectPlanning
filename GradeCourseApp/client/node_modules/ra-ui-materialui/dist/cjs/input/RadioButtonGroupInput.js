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
exports.RadioButtonGroupInputClasses = exports.RadioButtonGroupInput = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var material_1 = require("@mui/material");
var get_1 = __importDefault(require("lodash/get"));
var ra_core_1 = require("ra-core");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
var InputHelperText_1 = require("./InputHelperText");
var RadioButtonGroupInputItem_1 = require("./RadioButtonGroupInputItem");
var Labeled_1 = require("../Labeled");
var layout_1 = require("../layout");
/**
 * An Input component for a radio button group, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <RadioButtonGroupInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <RadioButtonGroupInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
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
 *     return (<span>{record.first_name} {record.last_name}</span>)
 * };
 * <RadioButtonGroupInput source="recipients" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <RadioButtonGroupInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the MUI <RadioButtonGroup> component
 */
var RadioButtonGroupInput = function (props) {
    var choicesProp = props.choices, className = props.className, format = props.format, helperText = props.helperText, isFetchingProp = props.isFetching, isLoadingProp = props.isLoading, label = props.label, _a = props.margin, margin = _a === void 0 ? 'dense' : _a, onBlur = props.onBlur, onChange = props.onChange, options = props.options, optionText = props.optionText, optionValue = props.optionValue, parse = props.parse, resourceProp = props.resource, row = props.row, sourceProp = props.source, translateChoice = props.translateChoice, validate = props.validate, rest = __rest(props, ["choices", "className", "format", "helperText", "isFetching", "isLoading", "label", "margin", "onBlur", "onChange", "options", "optionText", "optionValue", "parse", "resource", "row", "source", "translateChoice", "validate"]);
    var _b = (0, ra_core_1.useChoicesContext)({
        choices: choicesProp,
        isFetching: isFetchingProp,
        isLoading: isLoadingProp,
        resource: resourceProp,
        source: sourceProp,
    }), allChoices = _b.allChoices, isLoading = _b.isLoading, fetchError = _b.error, resource = _b.resource, source = _b.source;
    if (source === undefined) {
        throw new Error("If you're not wrapping the RadioButtonGroupInput inside a ReferenceArrayInput, you must provide the source prop");
    }
    if (!isLoading && !fetchError && allChoices === undefined) {
        throw new Error("If you're not wrapping the RadioButtonGroupInput inside a ReferenceArrayInput, you must provide the choices prop");
    }
    var _c = (0, ra_core_1.useInput)(__assign({ format: format, onBlur: onBlur, onChange: onChange, parse: parse, resource: resource, source: source, validate: validate }, rest)), id = _c.id, isRequired = _c.isRequired, fieldState = _c.fieldState, field = _c.field, formState = _c.formState;
    var error = fieldState.error, invalid = fieldState.invalid, isTouched = fieldState.isTouched;
    var isSubmitted = formState.isSubmitted;
    if (isLoading) {
        return (React.createElement(Labeled_1.Labeled, { htmlFor: id, label: label, source: source, resource: resource, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), isRequired: isRequired },
            React.createElement(layout_1.LinearProgress, null)));
    }
    return (React.createElement(StyledFormControl, __assign({ component: "fieldset", className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), margin: margin, error: fetchError || ((isTouched || isSubmitted) && invalid) }, sanitizeRestProps(rest)),
        React.createElement(material_1.FormLabel, { component: "legend", className: exports.RadioButtonGroupInputClasses.label },
            React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
        React.createElement(material_1.RadioGroup, __assign({ id: id, row: row }, field, options, sanitizeRestProps(rest)), allChoices === null || allChoices === void 0 ? void 0 : allChoices.map(function (choice) { return (React.createElement(RadioButtonGroupInputItem_1.RadioButtonGroupInputItem, { key: (0, get_1.default)(choice, optionValue), choice: choice, optionText: optionText, optionValue: optionValue, source: source, translateChoice: translateChoice })); })),
        React.createElement(material_1.FormHelperText, null,
            React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted || fetchError, error: (error === null || error === void 0 ? void 0 : error.message) || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.message), helperText: helperText }))));
};
exports.RadioButtonGroupInput = RadioButtonGroupInput;
exports.RadioButtonGroupInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.any),
    label: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.element,
    ]),
    options: prop_types_1.default.object,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]),
    optionValue: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
exports.RadioButtonGroupInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    row: true,
    translateChoice: true,
};
var sanitizeRestProps = function (_a) {
    var afterSubmit = _a.afterSubmit, allowNull = _a.allowNull, beforeSubmit = _a.beforeSubmit, choices = _a.choices, className = _a.className, crudGetMatching = _a.crudGetMatching, crudGetOne = _a.crudGetOne, data = _a.data, filter = _a.filter, filterToQuery = _a.filterToQuery, formatOnBlur = _a.formatOnBlur, isEqual = _a.isEqual, limitChoicesToValue = _a.limitChoicesToValue, multiple = _a.multiple, name = _a.name, pagination = _a.pagination, perPage = _a.perPage, ref = _a.ref, reference = _a.reference, refetch = _a.refetch, render = _a.render, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, sort = _a.sort, subscription = _a.subscription, type = _a.type, validateFields = _a.validateFields, validation = _a.validation, value = _a.value, rest = __rest(_a, ["afterSubmit", "allowNull", "beforeSubmit", "choices", "className", "crudGetMatching", "crudGetOne", "data", "filter", "filterToQuery", "formatOnBlur", "isEqual", "limitChoicesToValue", "multiple", "name", "pagination", "perPage", "ref", "reference", "refetch", "render", "setFilter", "setPagination", "setSort", "sort", "subscription", "type", "validateFields", "validation", "value"]);
    return (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest);
};
var PREFIX = 'RaRadioButtonGroupInput';
exports.RadioButtonGroupInputClasses = {
    label: "".concat(PREFIX, "-label"),
};
var StyledFormControl = (0, styles_1.styled)(material_1.FormControl, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.RadioButtonGroupInputClasses.label)] = {
            transform: 'translate(0, 5px) scale(0.75)',
            transformOrigin: "top ".concat(theme.direction === 'ltr' ? 'left' : 'right'),
        },
        _b);
});
//# sourceMappingURL=RadioButtonGroupInput.js.map