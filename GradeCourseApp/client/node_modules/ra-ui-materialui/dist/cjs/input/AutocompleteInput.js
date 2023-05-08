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
exports.AutocompleteInputClasses = exports.AutocompleteInput = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var debounce_1 = __importDefault(require("lodash/debounce"));
var get_1 = __importDefault(require("lodash/get"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var clsx_1 = __importDefault(require("clsx"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var ra_core_1 = require("ra-core");
var useSupportCreateSuggestion_1 = require("./useSupportCreateSuggestion");
var InputHelperText_1 = require("./InputHelperText");
var sanitizeInputRestProps_1 = require("./sanitizeInputRestProps");
var defaultFilterOptions = (0, material_1.createFilterOptions)();
/**
 * An Input component for an autocomplete field, using an array of objects for the options
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
 * <AutocompleteInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that can access
 * the related choice through the `useRecordContext` hook. You can use Field components there.
 * Note that you must also specify the `matchSuggestion` and `inputText` props
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const matchSuggestion = (filterValue, choice) => choice.first_name.match(filterValue) || choice.last_name.match(filterValue)
 * const inputText = (record) => `${record.fullName} (${record.language})`;
 *
 * const FullNameField = () => {
 *     const record = useRecordContext();
 *     return <span>{record.first_name} {record.last_name}</span>;
 * }
 * <AutocompleteInput source="author" choices={choices} optionText={<FullNameField />} matchSuggestion={matchSuggestion} inputText={inputText} />
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
 * <AutocompleteInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the MUI <TextField> component
 *
 * @example
 * <AutocompleteInput source="author_id" options={{ color: 'secondary', InputLabelProps: { shrink: true } }} />
 */
var AutocompleteInput = function (props) {
    var choicesProp = props.choices, className = props.className, _a = props.clearOnBlur, clearOnBlur = _a === void 0 ? true : _a, _b = props.clearText, clearText = _b === void 0 ? 'ra.action.clear_input_value' : _b, _c = props.closeText, closeText = _c === void 0 ? 'ra.action.close' : _c, create = props.create, createLabel = props.createLabel, createItemLabel = props.createItemLabel, createValue = props.createValue, _d = props.debounce, debounceDelay = _d === void 0 ? 250 : _d, defaultValue = props.defaultValue, emptyText = props.emptyText, _e = props.emptyValue, emptyValue = _e === void 0 ? '' : _e, fieldOverride = props.field, format = props.format, helperText = props.helperText, idOverride = props.id, inputText = props.inputText, isFetchingProp = props.isFetching, isLoadingProp = props.isLoading, isRequiredOverride = props.isRequired, label = props.label, limitChoicesToValue = props.limitChoicesToValue, matchSuggestion = props.matchSuggestion, margin = props.margin, fieldStateOverride = props.fieldState, _f = props.filterToQuery, filterToQuery = _f === void 0 ? DefaultFilterToQuery : _f, formStateOverride = props.formState, _g = props.multiple, multiple = _g === void 0 ? false : _g, noOptionsText = props.noOptionsText, onBlur = props.onBlur, onChange = props.onChange, onCreate = props.onCreate, _h = props.openText, openText = _h === void 0 ? 'ra.action.open' : _h, optionText = props.optionText, optionValue = props.optionValue, parse = props.parse, resourceProp = props.resource, shouldRenderSuggestions = props.shouldRenderSuggestions, setFilter = props.setFilter, size = props.size, sourceProp = props.source, _j = props.suggestionLimit, suggestionLimit = _j === void 0 ? Infinity : _j, TextFieldProps = props.TextFieldProps, translateChoice = props.translateChoice, validate = props.validate, variant = props.variant, rest = __rest(props, ["choices", "className", "clearOnBlur", "clearText", "closeText", "create", "createLabel", "createItemLabel", "createValue", "debounce", "defaultValue", "emptyText", "emptyValue", "field", "format", "helperText", "id", "inputText", "isFetching", "isLoading", "isRequired", "label", "limitChoicesToValue", "matchSuggestion", "margin", "fieldState", "filterToQuery", "formState", "multiple", "noOptionsText", "onBlur", "onChange", "onCreate", "openText", "optionText", "optionValue", "parse", "resource", "shouldRenderSuggestions", "setFilter", "size", "source", "suggestionLimit", "TextFieldProps", "translateChoice", "validate", "variant"]);
    var _k = (0, ra_core_1.useChoicesContext)({
        choices: choicesProp,
        isFetching: isFetchingProp,
        isLoading: isLoadingProp,
        resource: resourceProp,
        source: sourceProp,
    }), allChoices = _k.allChoices, isLoading = _k.isLoading, fetchError = _k.error, resource = _k.resource, source = _k.source, setFilters = _k.setFilters, isFromReference = _k.isFromReference;
    var translate = (0, ra_core_1.useTranslate)();
    var _l = (0, ra_core_1.useInput)(__assign({ defaultValue: defaultValue, id: idOverride, field: fieldOverride, fieldState: fieldStateOverride, formState: formStateOverride, isRequired: isRequiredOverride, onBlur: onBlur, onChange: onChange, parse: parse, format: format, resource: resource, source: source, validate: validate }, rest)), id = _l.id, field = _l.field, isRequired = _l.isRequired, _m = _l.fieldState, error = _m.error, invalid = _m.invalid, isTouched = _m.isTouched, isSubmitted = _l.formState.isSubmitted;
    var finalChoices = (0, react_1.useMemo)(function () {
        var _a;
        // eslint-disable-next-line eqeqeq
        return emptyText == undefined || isRequired || multiple
            ? allChoices
            : [
                (_a = {},
                    _a[optionValue || 'id'] = emptyValue,
                    _a[typeof optionText === 'string'
                        ? optionText
                        : 'name'] = translate(emptyText, {
                        _: emptyText,
                    }),
                    _a),
            ].concat(allChoices);
    }, [
        allChoices,
        emptyValue,
        emptyText,
        isRequired,
        multiple,
        optionText,
        optionValue,
        translate,
    ]);
    var selectedChoice = useSelectedChoice(field.value, {
        choices: finalChoices,
        // @ts-ignore
        multiple: multiple,
        optionValue: optionValue,
    });
    (0, react_1.useEffect)(function () {
        // eslint-disable-next-line eqeqeq
        if (emptyValue == null) {
            throw new Error("emptyValue being set to null or undefined is not supported. Use parse to turn the empty string into null.");
        }
    }, [emptyValue]);
    (0, react_1.useEffect)(function () {
        // eslint-disable-next-line eqeqeq
        if ((0, react_1.isValidElement)(optionText) && emptyText != undefined) {
            throw new Error("optionText of type React element is not supported when setting emptyText");
        }
        // eslint-disable-next-line eqeqeq
        if ((0, react_1.isValidElement)(optionText) && inputText == undefined) {
            throw new Error("\nIf you provided a React element for the optionText prop, you must also provide the inputText prop (used for the text input)");
        }
        // eslint-disable-next-line eqeqeq
        if ((0, react_1.isValidElement)(optionText) && matchSuggestion == undefined) {
            throw new Error("\nIf you provided a React element for the optionText prop, you must also provide the matchSuggestion prop (used to match the user input with a choice)");
        }
    }, [optionText, inputText, matchSuggestion, emptyText]);
    (0, react_1.useEffect)(function () {
        (0, ra_core_1.warning)(
        /* eslint-disable eqeqeq */
        shouldRenderSuggestions != undefined && noOptionsText == undefined, "When providing a shouldRenderSuggestions function, we recommend you also provide the noOptionsText prop and set it to a text explaining users why no options are displayed. It supports translation keys.");
        /* eslint-enable eqeqeq */
    }, [shouldRenderSuggestions, noOptionsText]);
    var getRecordRepresentation = (0, ra_core_1.useGetRecordRepresentation)(resource);
    var _o = (0, ra_core_1.useSuggestions)({
        choices: finalChoices,
        limitChoicesToValue: limitChoicesToValue,
        matchSuggestion: matchSuggestion,
        optionText: optionText !== null && optionText !== void 0 ? optionText : (isFromReference ? getRecordRepresentation : undefined),
        optionValue: optionValue,
        selectedItem: selectedChoice,
        suggestionLimit: suggestionLimit,
        translateChoice: translateChoice,
    }), getChoiceText = _o.getChoiceText, getChoiceValue = _o.getChoiceValue, getSuggestions = _o.getSuggestions;
    var _p = (0, react_1.useState)(''), filterValue = _p[0], setFilterValue = _p[1];
    var handleChange = function (newValue) {
        var _a, _b;
        if (multiple) {
            if (Array.isArray(newValue)) {
                field.onChange(newValue.map(getChoiceValue));
            }
            else {
                field.onChange(__spreadArray(__spreadArray([], ((_a = field.value) !== null && _a !== void 0 ? _a : []), true), [
                    getChoiceValue(newValue),
                ], false));
            }
        }
        else {
            field.onChange((_b = getChoiceValue(newValue)) !== null && _b !== void 0 ? _b : emptyValue);
        }
    };
    // eslint-disable-next-line
    var debouncedSetFilter = (0, react_1.useCallback)((0, debounce_1.default)(function (filter) {
        if (setFilter) {
            return setFilter(filter);
        }
        if (choicesProp) {
            return;
        }
        setFilters(filterToQuery(filter), undefined, true);
    }, debounceDelay), [debounceDelay, setFilters, setFilter]);
    // We must reset the filter every time the value changes to ensure we
    // display at least some choices even if the input has a value.
    // Otherwise, it would only display the currently selected one and the user
    // would have to first clear the input before seeing any other choices
    var currentValue = (0, react_1.useRef)(field.value);
    (0, react_1.useEffect)(function () {
        if (!(0, isEqual_1.default)(currentValue.current, field.value)) {
            currentValue.current = field.value;
            debouncedSetFilter('');
        }
    }, [field.value]); // eslint-disable-line
    var _q = (0, useSupportCreateSuggestion_1.useSupportCreateSuggestion)({
        create: create,
        createLabel: createLabel,
        createItemLabel: createItemLabel,
        createValue: createValue,
        handleChange: handleChange,
        filter: filterValue,
        onCreate: onCreate,
        optionText: optionText,
    }), getCreateItem = _q.getCreateItem, handleChangeWithCreateSupport = _q.handleChange, createElement = _q.createElement, createId = _q.createId;
    var getOptionLabel = (0, react_1.useCallback)(function (option, isListItem) {
        if (isListItem === void 0) { isListItem = false; }
        // eslint-disable-next-line eqeqeq
        if (option == undefined) {
            return '';
        }
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
            return option;
        }
        if ((option === null || option === void 0 ? void 0 : option.id) === createId) {
            return (0, get_1.default)(option, typeof optionText === 'string' ? optionText : 'name');
        }
        if (!isListItem && option[optionValue || 'id'] === emptyValue) {
            return (0, get_1.default)(option, typeof optionText === 'string' ? optionText : 'name');
        }
        if (!isListItem && inputText !== undefined) {
            return inputText(option);
        }
        return getChoiceText(option);
    }, [
        getChoiceText,
        inputText,
        createId,
        optionText,
        optionValue,
        emptyValue,
    ]);
    var finalOnBlur = (0, react_1.useCallback)(function () {
        if (clearOnBlur && !multiple) {
            var optionLabel = getOptionLabel(selectedChoice);
            if (!(0, isEqual_1.default)(optionLabel, filterValue)) {
                setFilterValue(optionLabel);
                debouncedSetFilter('');
            }
        }
        field.onBlur();
    }, [
        clearOnBlur,
        field,
        getOptionLabel,
        selectedChoice,
        filterValue,
        debouncedSetFilter,
        multiple,
    ]);
    (0, react_1.useEffect)(function () {
        if (!multiple) {
            var optionLabel = getOptionLabel(selectedChoice);
            if (typeof optionLabel === 'string') {
                setFilterValue(optionLabel);
            }
            else {
                throw new Error('When optionText returns a React element, you must also provide the inputText prop');
            }
        }
    }, [getOptionLabel, multiple, selectedChoice]);
    var handleInputChange = function (event, newInputValue, reason) {
        if ((event === null || event === void 0 ? void 0 : event.type) === 'change' ||
            !doesQueryMatchSelection(newInputValue)) {
            setFilterValue(newInputValue);
            debouncedSetFilter(newInputValue);
        }
    };
    var doesQueryMatchSelection = (0, react_1.useCallback)(function (filter) {
        var selectedItemTexts;
        if (multiple) {
            selectedItemTexts = selectedChoice.map(function (item) {
                return getOptionLabel(item);
            });
        }
        else {
            selectedItemTexts = [getOptionLabel(selectedChoice)];
        }
        return selectedItemTexts.includes(filter);
    }, [getOptionLabel, multiple, selectedChoice]);
    var doesQueryMatchSuggestion = (0, react_1.useCallback)(function (filter) {
        var hasOption = !!finalChoices
            ? finalChoices.some(function (choice) { return getOptionLabel(choice) === filter; })
            : false;
        return doesQueryMatchSelection(filter) || hasOption;
    }, [finalChoices, getOptionLabel, doesQueryMatchSelection]);
    var filterOptions = function (options, params) {
        var filteredOptions = isFromReference || // When used inside a reference, AutocompleteInput shouldn't do the filtering as it's done by the reference input
            matchSuggestion || // When using element as optionText (and matchSuggestion), options are filtered by getSuggestions, so they shouldn't be filtered here
            limitChoicesToValue // When limiting choices to values (why? it's legacy!), options are also filtered by getSuggestions, so they shouldn't be filtered here
            ? options
            : defaultFilterOptions(options, params); // Otherwise, we let MUI's Autocomplete do the filtering
        // add create option if necessary
        var inputValue = params.inputValue;
        if ((onCreate || create) &&
            inputValue !== '' &&
            !doesQueryMatchSuggestion(filterValue)) {
            filteredOptions = filteredOptions.concat(getCreateItem(inputValue));
        }
        return filteredOptions;
    };
    var handleAutocompleteChange = function (event, newValue, reason) {
        handleChangeWithCreateSupport(newValue != null ? newValue : emptyValue);
    };
    var oneSecondHasPassed = (0, ra_core_1.useTimeout)(1000, filterValue);
    var suggestions = (0, react_1.useMemo)(function () {
        if (matchSuggestion || limitChoicesToValue) {
            return getSuggestions(filterValue);
        }
        return (finalChoices === null || finalChoices === void 0 ? void 0 : finalChoices.slice(0, suggestionLimit)) || [];
    }, [
        finalChoices,
        filterValue,
        getSuggestions,
        limitChoicesToValue,
        matchSuggestion,
        suggestionLimit,
    ]);
    var isOptionEqualToValue = function (option, value) {
        return String(getChoiceValue(option)) === String(getChoiceValue(value));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(StyledAutocomplete, __assign({ blurOnSelect: true, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), className), clearText: translate(clearText, { _: clearText }), closeText: translate(closeText, { _: closeText }), openOnFocus: true, openText: translate(openText, { _: openText }), id: id, isOptionEqualToValue: isOptionEqualToValue, filterSelectedOptions: true, renderInput: function (params) { return (React.createElement(material_1.TextField, __assign({ name: field.name, label: React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resourceProp, isRequired: isRequired }), error: !!fetchError ||
                    ((isTouched || isSubmitted) && invalid), helperText: React.createElement(InputHelperText_1.InputHelperText, { touched: isTouched || isSubmitted || fetchError, error: (error === null || error === void 0 ? void 0 : error.message) || (fetchError === null || fetchError === void 0 ? void 0 : fetchError.message), helperText: helperText }), margin: margin, variant: variant, className: exports.AutocompleteInputClasses.textField }, TextFieldProps, params, { size: size }))); }, multiple: multiple, renderTags: function (value, getTagProps) {
                return value.map(function (option, index) { return (React.createElement(material_1.Chip, __assign({ label: (0, react_1.isValidElement)(optionText)
                        ? inputText(option)
                        : getChoiceText(option), sx: {
                        '.MuiSvgIcon-root': {
                            // FIXME: Workaround to allow choices deletion
                            // Maybe related to storybook and mui using different versions of emotion
                            zIndex: 100,
                        },
                    }, size: "small" }, getTagProps({ index: index })))); });
            }, noOptionsText: typeof noOptionsText === 'string'
                ? translate(noOptionsText, { _: noOptionsText })
                : noOptionsText, selectOnFocus: true, clearOnBlur: clearOnBlur }, (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest), { freeSolo: !!create || !!onCreate, handleHomeEndKeys: !!create || !!onCreate, filterOptions: filterOptions, options: shouldRenderSuggestions == undefined || // eslint-disable-line eqeqeq
                shouldRenderSuggestions(filterValue)
                ? suggestions
                : [], getOptionLabel: getOptionLabel, inputValue: filterValue, loading: isLoading &&
                (!finalChoices || finalChoices.length === 0) &&
                oneSecondHasPassed, value: selectedChoice, onChange: handleAutocompleteChange, onBlur: finalOnBlur, onInputChange: handleInputChange, renderOption: function (props, record) {
                props.key = getChoiceValue(record);
                var optionLabel = getOptionLabel(record, true);
                return (React.createElement("li", __assign({}, props), optionLabel === '' ? ' ' : optionLabel));
            } })),
        createElement));
};
exports.AutocompleteInput = AutocompleteInput;
var PREFIX = 'RaAutocompleteInput';
exports.AutocompleteInputClasses = {
    textField: "".concat(PREFIX, "-textField"),
};
var StyledAutocomplete = (0, styles_1.styled)(material_1.Autocomplete, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.AutocompleteInputClasses.textField)] = {
            minWidth: theme.spacing(20),
        },
        _b);
});
/**
 * Returns the selected choice (or choices if multiple) by matching the input value with the choices.
 */
var useSelectedChoice = function (value, _a) {
    var choices = _a.choices, multiple = _a.multiple, optionValue = _a.optionValue;
    var selectedChoiceRef = (0, react_1.useRef)(getSelectedItems(choices, value, optionValue, multiple));
    var _b = (0, react_1.useState)(function () { return getSelectedItems(choices, value, optionValue, multiple); }), selectedChoice = _b[0], setSelectedChoice = _b[1];
    // As the selected choices are objects, we want to ensure we pass the same
    // reference to the Autocomplete as it would reset its filter value otherwise.
    (0, react_1.useEffect)(function () {
        var newSelectedItems = getSelectedItems(choices, value, optionValue, multiple);
        if (!areSelectedItemsEqual(selectedChoiceRef.current, newSelectedItems, optionValue, multiple)) {
            selectedChoiceRef.current = newSelectedItems;
            setSelectedChoice(newSelectedItems);
        }
    }, [choices, value, multiple, optionValue]);
    return selectedChoice || null;
};
var getSelectedItems = function (choices, value, optionValue, multiple) {
    if (choices === void 0) { choices = []; }
    if (optionValue === void 0) { optionValue = 'id'; }
    if (multiple) {
        return (Array.isArray(value !== null && value !== void 0 ? value : []) ? value : [value])
            .map(function (item) {
            return choices.find(function (choice) { return String(item) === String((0, get_1.default)(choice, optionValue)); });
        })
            .filter(function (item) { return !!item; });
    }
    return (choices.find(function (choice) { return String((0, get_1.default)(choice, optionValue)) === String(value); }) || '');
};
var areSelectedItemsEqual = function (selectedChoice, newSelectedChoice, optionValue, multiple) {
    var _a, _b;
    if (optionValue === void 0) { optionValue = 'id'; }
    if (multiple) {
        var selectedChoiceArray = (_a = selectedChoice) !== null && _a !== void 0 ? _a : [];
        var newSelectedChoiceArray_1 = (_b = newSelectedChoice) !== null && _b !== void 0 ? _b : [];
        if (selectedChoiceArray.length !== newSelectedChoiceArray_1.length) {
            return false;
        }
        var equalityArray = selectedChoiceArray.map(function (choice) {
            return newSelectedChoiceArray_1.some(function (newChoice) {
                return (0, get_1.default)(newChoice, optionValue) === (0, get_1.default)(choice, optionValue);
            });
        });
        return !equalityArray.some(function (item) { return item === false; });
    }
    return ((0, get_1.default)(selectedChoice, optionValue) === (0, get_1.default)(newSelectedChoice, optionValue));
};
var DefaultFilterToQuery = function (searchText) { return ({ q: searchText }); };
//# sourceMappingURL=AutocompleteInput.js.map