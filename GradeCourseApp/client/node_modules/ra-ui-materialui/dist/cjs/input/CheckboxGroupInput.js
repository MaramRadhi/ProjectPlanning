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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroupInputClasses = exports.CheckboxGroupInput = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var clsx_1 = __importDefault(require("clsx"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var FormLabel_1 = __importDefault(require("@mui/material/FormLabel"));
var FormControl_1 = __importDefault(require("@mui/material/FormControl"));
var FormGroup_1 = __importDefault(require("@mui/material/FormGroup"));
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var ra_core_1 = require("ra-core");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
var CheckboxGroupInputItem_1 = require("./CheckboxGroupInputItem");
var InputHelperText_1 = require("./InputHelperText");
var Labeled_1 = require("../Labeled");
var layout_1 = require("../layout");
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
var CheckboxGroupInput = function (props) {
    var choicesProp = props.choices, className = props.className, classesOverride = props.classes, format = props.format, helperText = props.helperText, label = props.label, labelPlacement = props.labelPlacement, isLoadingProp = props.isLoading, isFetchingProp = props.isFetching, _a = props.margin, margin = _a === void 0 ? 'dense' : _a, onBlur = props.onBlur, onChange = props.onChange, options = props.options, _b = props.optionText, optionText = _b === void 0 ? 'name' : _b, _c = props.optionValue, optionValue = _c === void 0 ? 'id' : _c, parse = props.parse, resourceProp = props.resource, _d = props.row, row = _d === void 0 ? true : _d, sourceProp = props.source, _e = props.translateChoice, translateChoice = _e === void 0 ? true : _e, validate = props.validate, rest = __rest(props, ["choices", "className", "classes", "format", "helperText", "label", "labelPlacement", "isLoading", "isFetching", "margin", "onBlur", "onChange", "options", "optionText", "optionValue", "parse", "resource", "row", "source", "translateChoice", "validate"]);
    var _f = (0, ra_core_1.useChoicesContext)({
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
    var _g = (0, ra_core_1.useInput)(__assign({ format: format, parse: parse, resource: resource, source: source, validate: validate, onChange: onChange, onBlur: onBlur }, rest)), _h = _g.field, formOnChange = _h.onChange, formOnBlur = _h.onBlur, value = _h.value, _j = _g.fieldState, error = _j.error, invalid = _j.invalid, isTouched = _j.isTouched, isSubmitted = _g.formState.isSubmitted, id = _g.id, isRequired = _g.isRequired;
    var handleCheck = (0, react_1.useCallback)(function (event, isChecked) {
        var newValue;
        if (allChoices.every(function (item) { return typeof (0, get_1.default)(item, optionValue) === 'number'; })) {
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
        return (React.createElement(Labeled_1.Labeled, __assign({ id: id, label: label, source: source, resource: resource, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), isRequired: isRequired }, rest),
            React.createElement(layout_1.LinearProgress, null)));
    }
    return (React.createElement(StyledFormControl, __assign({ component: "fieldset", margin: margin, error: fetchError || ((isTouched || isSubmitted) && invalid), className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className) }, sanitizeRestProps(rest)),
        React.createElement(FormLabel_1.default, { component: "legend", className: exports.CheckboxGroupInputClasses.label },
            React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
        React.createElement(FormGroup_1.default, { row: row }, allChoices === null || allChoices === void 0 ? void 0 : allChoices.map(function (choice) { return (React.createElement(CheckboxGroupInputItem_1.CheckboxGroupInputItem, __assign({ key: (0, get_1.default)(choice, optionValue), choice: choice, id: id, onChange: handleCheck, options: options, optionText: optionText, optionValue: optionValue, translateChoice: translateChoice, value: value, labelPlacement: labelPlacement }, sanitizeRestProps(rest)))); })),
        React.createElement(FormHelperText_1.default, { error: fetchError || ((isTouched || isSubmitted) && !!error), className: exports.CheckboxGroupInputClasses.helperText },
            React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted || fetchError, error: (error === null || error === void 0 ? void 0 : error.message) || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.message), helperText: helperText }))));
};
exports.CheckboxGroupInput = CheckboxGroupInput;
var sanitizeRestProps = function (_a) {
    var refetch = _a.refetch, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, loaded = _a.loaded, touched = _a.touched, rest = __rest(_a, ["refetch", "setFilter", "setPagination", "setSort", "loaded", "touched"]);
    return (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest);
};
exports.CheckboxGroupInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.any),
    className: prop_types_1.default.string,
    source: prop_types_1.default.string,
    optionText: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.func,
        prop_types_1.default.element,
    ]),
    optionValue: prop_types_1.default.string,
    row: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
var PREFIX = 'RaCheckboxGroupInput';
exports.CheckboxGroupInputClasses = {
    label: "".concat(PREFIX, "-label"),
    helperText: "".concat(PREFIX, "-helperText"),
};
var StyledFormControl = (0, styles_1.styled)(FormControl_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.CheckboxGroupInputClasses.label)] = {
            transform: 'translate(0, 4px) scale(0.75)',
            transformOrigin: "top ".concat(theme.direction === 'ltr' ? 'left' : 'right'),
        },
        _b["& .".concat(exports.CheckboxGroupInputClasses.helperText)] = {
            marginLeft: 0,
            marginRight: 0,
        },
        _b);
});
//# sourceMappingURL=CheckboxGroupInput.js.map