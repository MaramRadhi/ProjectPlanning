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
exports.SelectArrayInputClasses = exports.SelectArrayInput = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var material_1 = require("@mui/material");
var ra_core_1 = require("ra-core");
var InputHelperText_1 = require("./InputHelperText");
var layout_1 = require("../layout");
var Labeled_1 = require("../Labeled");
var useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
/**
 * An Input component for a select box allowing multiple selections, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'programming', name: 'Programming' },
 *    { id: 'lifestyle', name: 'Lifestyle' },
 *    { id: 'photography', name: 'Photography' },
 * ];
 * <SelectArrayInput source="tags" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectArrayInput source="authors" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectArrayInput source="authors" choices={choices} optionText={optionRenderer} />
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
 * <SelectArrayInput source="authors" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.tags.programming' },
 *    { id: 'lifestyle', name: 'myroot.tags.lifestyle' },
 *    { id: 'photography', name: 'myroot.tags.photography' },
 * ];
 */
var SelectArrayInput = function (props) {
    var _a;
    var choicesProp = props.choices, className = props.className, create = props.create, createLabel = props.createLabel, createValue = props.createValue, disableValue = props.disableValue, format = props.format, helperText = props.helperText, label = props.label, isFetchingProp = props.isFetching, isLoadingProp = props.isLoading, margin = props.margin, onBlur = props.onBlur, onChange = props.onChange, onCreate = props.onCreate, options = props.options, optionText = props.optionText, optionValue = props.optionValue, parse = props.parse, resourceProp = props.resource, _b = props.size, size = _b === void 0 ? 'small' : _b, sourceProp = props.source, translateChoice = props.translateChoice, validate = props.validate, variant = props.variant, rest = __rest(props, ["choices", "className", "create", "createLabel", "createValue", "disableValue", "format", "helperText", "label", "isFetching", "isLoading", "margin", "onBlur", "onChange", "onCreate", "options", "optionText", "optionValue", "parse", "resource", "size", "source", "translateChoice", "validate", "variant"]);
    var inputLabel = (0, react_1.useRef)(null);
    var _c = (0, ra_core_1.useChoicesContext)({
        choices: choicesProp,
        isLoading: isLoadingProp,
        isFetching: isFetchingProp,
        resource: resourceProp,
        source: sourceProp,
    }), allChoices = _c.allChoices, isLoading = _c.isLoading, fetchError = _c.error, source = _c.source, resource = _c.resource;
    var _d = (0, ra_core_1.useChoices)({
        optionText: optionText,
        optionValue: optionValue,
        disableValue: disableValue,
        translateChoice: translateChoice,
    }), getChoiceText = _d.getChoiceText, getChoiceValue = _d.getChoiceValue, getDisableValue = _d.getDisableValue;
    var _e = (0, ra_core_1.useInput)(__assign({ format: format, onBlur: onBlur, onChange: onChange, parse: parse, resource: resource, source: source, validate: validate }, rest)), field = _e.field, isRequired = _e.isRequired, _f = _e.fieldState, error = _f.error, invalid = _f.invalid, isTouched = _f.isTouched, isSubmitted = _e.formState.isSubmitted;
    var handleChange = (0, react_1.useCallback)(function (eventOrChoice) {
        // We might receive an event from the mui component
        // In this case, it will be the choice id
        if (eventOrChoice === null || eventOrChoice === void 0 ? void 0 : eventOrChoice.target) {
            // when used with different IDs types, unselection leads to double selection with both types
            // instead of the value being removed from the array
            // e.g. we receive eventOrChoice.target.value = [1, '2', 2] instead of [1] after removing 2
            // this snippet removes a value if it is present twice
            eventOrChoice.target.value = eventOrChoice.target.value.reduce(function (acc, value) {
                // eslint-disable-next-line eqeqeq
                var index = acc.findIndex(function (v) { return v == value; });
                return index < 0
                    ? __spreadArray(__spreadArray([], acc, true), [value], false) : __spreadArray(__spreadArray([], acc.slice(0, index), true), acc.slice(index + 1), true);
            }, []);
            field.onChange(eventOrChoice);
        }
        else {
            // Or we might receive a choice directly, for instance a newly created one
            field.onChange(__spreadArray(__spreadArray([], (field.value || []), true), [
                getChoiceValue(eventOrChoice),
            ], false));
        }
    }, [field, getChoiceValue]);
    var _g = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create: create,
        createLabel: createLabel,
        createValue: createValue,
        handleChange: handleChange,
        onCreate: onCreate,
        optionText: optionText,
    }), getCreateItem = _g.getCreateItem, handleChangeWithCreateSupport = _g.handleChange, createElement = _g.createElement;
    var createItem = create || onCreate ? getCreateItem() : null;
    var finalChoices = create || onCreate
        ? __spreadArray(__spreadArray([], (allChoices || []), true), [createItem], false) : allChoices || [];
    var renderMenuItemOption = (0, react_1.useCallback)(function (choice) {
        return !!createItem &&
            (choice === null || choice === void 0 ? void 0 : choice.id) === createItem.id &&
            typeof optionText === 'function'
            ? createItem.name
            : getChoiceText(choice);
    }, [createItem, getChoiceText, optionText]);
    var renderMenuItem = (0, react_1.useCallback)(function (choice) {
        return choice ? (React.createElement(material_1.MenuItem, { key: getChoiceValue(choice), value: getChoiceValue(choice), disabled: getDisableValue(choice) }, renderMenuItemOption(!!createItem && (choice === null || choice === void 0 ? void 0 : choice.id) === createItem.id
            ? createItem
            : choice))) : null;
    }, [getChoiceValue, getDisableValue, renderMenuItemOption, createItem]);
    if (isLoading) {
        return (React.createElement(Labeled_1.Labeled, { label: label, source: source, resource: resource, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), isRequired: isRequired },
            React.createElement(layout_1.LinearProgress, null)));
    }
    // Here wen ensure we always have an array and this array does not contain the default value (empty string)
    var finalValue = Array.isArray((_a = field.value) !== null && _a !== void 0 ? _a : [])
        ? field.value
        : field.value
            ? [field.value]
            : [];
    var outlinedInputProps = variant === 'outlined'
        ? {
            input: (React.createElement(material_1.OutlinedInput, { id: "select-multiple-chip", label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }) })),
        }
        : {};
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledFormControl, __assign({ margin: margin, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), error: fetchError || ((isTouched || isSubmitted) && invalid), variant: variant }, sanitizeRestProps(rest)),
            React.createElement(material_1.InputLabel, { ref: inputLabel, id: "".concat(label, "-outlined-label") },
                React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired })),
            React.createElement(material_1.Select, __assign({ autoWidth: true, labelId: "".concat(label, "-outlined-label"), label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resource, isRequired: isRequired }), multiple: true, error: !!fetchError || ((isTouched || isSubmitted) && invalid), renderValue: function (selected) { return (React.createElement("div", { className: exports.SelectArrayInputClasses.chips }, (Array.isArray(selected) ? selected : [])
                    .map(function (item) {
                    return (allChoices || []).find(
                    // eslint-disable-next-line eqeqeq
                    function (choice) { return getChoiceValue(choice) == item; });
                })
                    .filter(function (item) { return !!item; })
                    .map(function (item) { return (React.createElement(material_1.Chip, { key: getChoiceValue(item), label: renderMenuItemOption(item), className: exports.SelectArrayInputClasses.chip, size: "small" })); }))); }, "data-testid": "selectArray", size: size }, field, options, { onChange: handleChangeWithCreateSupport, value: finalValue }, outlinedInputProps), finalChoices.map(renderMenuItem)),
            React.createElement(material_1.FormHelperText, { error: fetchError || (isTouched && !!error) },
                React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted || fetchError, error: (error === null || error === void 0 ? void 0 : error.message) || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.message), helperText: helperText }))),
        createElement));
};
exports.SelectArrayInput = SelectArrayInput;
exports.SelectArrayInput.propTypes = {
    choices: prop_types_1.default.arrayOf(prop_types_1.default.object),
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
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
    ]).isRequired,
    optionValue: prop_types_1.default.string.isRequired,
    disableValue: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    source: prop_types_1.default.string,
    translateChoice: prop_types_1.default.bool,
};
exports.SelectArrayInput.defaultProps = {
    options: {},
    optionText: 'name',
    optionValue: 'id',
    disableValue: 'disabled',
    translateChoice: true,
};
var sanitizeRestProps = function (_a) {
    var alwaysOn = _a.alwaysOn, choices = _a.choices, classNamInputWithOptionsPropse = _a.classNamInputWithOptionsPropse, componenInputWithOptionsPropst = _a.componenInputWithOptionsPropst, crudGetMInputWithOptionsPropsatching = _a.crudGetMInputWithOptionsPropsatching, crudGetOInputWithOptionsPropsne = _a.crudGetOInputWithOptionsPropsne, defaultValue = _a.defaultValue, disableValue = _a.disableValue, emptyText = _a.emptyText, enableGetChoices = _a.enableGetChoices, filter = _a.filter, filterToQuery = _a.filterToQuery, formClassName = _a.formClassName, initializeForm = _a.initializeForm, initialValue = _a.initialValue, input = _a.input, isRequired = _a.isRequired, label = _a.label, limitChoicesToValue = _a.limitChoicesToValue, loaded = _a.loaded, locale = _a.locale, meta = _a.meta, onChange = _a.onChange, options = _a.options, optionValue = _a.optionValue, optionText = _a.optionText, perPage = _a.perPage, record = _a.record, reference = _a.reference, resource = _a.resource, setFilter = _a.setFilter, setPagination = _a.setPagination, setSort = _a.setSort, sort = _a.sort, source = _a.source, textAlign = _a.textAlign, translate = _a.translate, translateChoice = _a.translateChoice, validation = _a.validation, rest = __rest(_a, ["alwaysOn", "choices", "classNamInputWithOptionsPropse", "componenInputWithOptionsPropst", "crudGetMInputWithOptionsPropsatching", "crudGetOInputWithOptionsPropsne", "defaultValue", "disableValue", "emptyText", "enableGetChoices", "filter", "filterToQuery", "formClassName", "initializeForm", "initialValue", "input", "isRequired", "label", "limitChoicesToValue", "loaded", "locale", "meta", "onChange", "options", "optionValue", "optionText", "perPage", "record", "reference", "resource", "setFilter", "setPagination", "setSort", "sort", "source", "textAlign", "translate", "translateChoice", "validation"]);
    return rest;
};
var PREFIX = 'RaSelectArrayInput';
exports.SelectArrayInputClasses = {
    chips: "".concat(PREFIX, "-chips"),
    chip: "".concat(PREFIX, "-chip"),
};
var StyledFormControl = (0, styles_1.styled)(material_1.FormControl, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            minWidth: theme.spacing(20)
        },
        _b["& .".concat(exports.SelectArrayInputClasses.chips)] = {
            display: 'flex',
            flexWrap: 'wrap',
        },
        _b["& .".concat(exports.SelectArrayInputClasses.chip)] = {
            marginTop: theme.spacing(0.5),
            marginRight: theme.spacing(0.5),
        },
        _b);
});
//# sourceMappingURL=SelectArrayInput.js.map