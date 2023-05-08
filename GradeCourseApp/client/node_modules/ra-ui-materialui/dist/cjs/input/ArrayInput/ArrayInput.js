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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
exports.ArrayInputClasses = exports.getArrayInputError = exports.ArrayInput = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var react_hook_form_1 = require("react-hook-form");
var material_1 = require("@mui/material");
var layout_1 = require("../../layout");
var InputHelperText_1 = require("../InputHelperText");
var sanitizeInputRestProps_1 = require("../sanitizeInputRestProps");
var Labeled_1 = require("../../Labeled");
var ArrayInputContext_1 = require("./ArrayInputContext");
/**
 * To edit arrays of data embedded inside a record, <ArrayInput> creates a list of sub-forms.
 *
 *  @example
 *
 *      import { ArrayInput, SimpleFormIterator, DateInput, TextInput } from 'react-admin';
 *
 *      <ArrayInput source="backlinks">
 *          <SimpleFormIterator>
 *              <DateInput source="date" />
 *              <TextInput source="url" />
 *          </SimpleFormIterator>
 *      </ArrayInput>
 *
 * <ArrayInput> allows the edition of embedded arrays, like the backlinks field
 * in the following post record:
 *
 * {
 *   id: 123
 *   backlinks: [
 *         {
 *             date: '2012-08-10T00:00:00.000Z',
 *             url: 'http://example.com/foo/bar.html',
 *         },
 *         {
 *             date: '2012-08-14T00:00:00.000Z',
 *             url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 *         }
 *    ]
 * }
 *
 * <ArrayInput> expects a single child, which must be a *form iterator* component.
 * A form iterator is a component accepting a fields object as passed by
 * react-hook-form-arrays's useFieldArray() hook, and defining a layout for
 * an array of fields. For instance, the <SimpleFormIterator> component
 * displays an array of fields in an unordered list (<ul>), one sub-form by
 * list item (<li>). It also provides controls for adding and removing
 * a sub-record (a backlink in this example).
 *
 * @see {@link https://react-hook-form.com/api/usefieldarray}
 */
var ArrayInput = function (props) {
    var _a, _b;
    var className = props.className, defaultValue = props.defaultValue, label = props.label, isFetching = props.isFetching, isLoading = props.isLoading, children = props.children, helperText = props.helperText, record = props.record, resourceFromProps = props.resource, source = props.source, validate = props.validate, variant = props.variant, disabled = props.disabled, _c = props.margin, margin = _c === void 0 ? 'dense' : _c, rest = __rest(props, ["className", "defaultValue", "label", "isFetching", "isLoading", "children", "helperText", "record", "resource", "source", "validate", "variant", "disabled", "margin"]);
    var formGroupName = (0, ra_core_1.useFormGroupContext)();
    var formGroups = (0, ra_core_1.useFormGroups)();
    var sanitizedValidate = Array.isArray(validate)
        ? (0, ra_core_1.composeSyncValidators)(validate)
        : validate;
    var getValidationErrorMessage = (0, ra_core_1.useGetValidationErrorMessage)();
    var _d = (0, react_hook_form_1.useFormContext)(), getFieldState = _d.getFieldState, formState = _d.formState, getValues = _d.getValues, register = _d.register, unregister = _d.unregister;
    var fieldProps = (0, react_hook_form_1.useFieldArray)({
        name: source,
        rules: {
            validate: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!sanitizedValidate)
                                return [2 /*return*/, true];
                            return [4 /*yield*/, sanitizedValidate(value, getValues(), props)];
                        case 1:
                            error = _a.sent();
                            if (!error)
                                return [2 /*return*/, true];
                            return [2 /*return*/, getValidationErrorMessage(error)];
                    }
                });
            }); },
        },
    });
    var isSubmitted = formState.isSubmitted;
    // We need to register the array itself as a field to enable validation at its level
    (0, react_1.useEffect)(function () {
        register(source);
        formGroups.registerField(source, formGroupName);
        return function () {
            unregister(source, { keepValue: true });
            formGroups.unregisterField(source, formGroupName);
        };
    }, [register, unregister, source, formGroups, formGroupName]);
    (0, ra_core_1.useApplyInputDefaultValues)(props);
    var _e = getFieldState(source, formState), isDirty = _e.isDirty, error = _e.error;
    if (isLoading) {
        return (React.createElement(Labeled_1.Labeled, { label: label, className: className },
            React.createElement(layout_1.LinearProgress, null)));
    }
    return (React.createElement(Root, __assign({ fullWidth: true, margin: margin, className: (0, clsx_1.default)('ra-input', "ra-input-".concat(source), exports.ArrayInputClasses.root, className), error: (isDirty || isSubmitted) && !!error }, (0, sanitizeInputRestProps_1.sanitizeInputRestProps)(rest)),
        React.createElement(material_1.InputLabel, { htmlFor: source, className: exports.ArrayInputClasses.label, shrink: true, error: (isDirty || isSubmitted) && !!error },
            React.createElement(ra_core_1.FieldTitle, { label: label, source: source, resource: resourceFromProps, isRequired: (0, ra_core_1.isRequired)(validate) })),
        React.createElement(ArrayInputContext_1.ArrayInputContext.Provider, { value: fieldProps }, (0, react_1.cloneElement)(react_1.Children.only(children), __assign(__assign({}, fieldProps), { record: record, resource: resourceFromProps, source: source, variant: variant, margin: margin, disabled: disabled }))),
        !!((isDirty || isSubmitted) && !!error) || helperText ? (React.createElement(material_1.FormHelperText, { error: (isDirty || isSubmitted) && !!error },
            React.createElement(InputHelperText_1.InputHelperText, { touched: isDirty || isSubmitted, 
                // root property is applicable to built-in validation only,
                // Resolvers are yet to support useFieldArray root level validation.
                // Reference: https://react-hook-form.com/api/usefieldarray
                error: (_b = (_a = error === null || error === void 0 ? void 0 : error.root) === null || _a === void 0 ? void 0 : _a.message) !== null && _b !== void 0 ? _b : error === null || error === void 0 ? void 0 : error.message, helperText: helperText }))) : null));
};
exports.ArrayInput = ArrayInput;
exports.ArrayInput.defaultProps = {
    options: {},
};
var getArrayInputError = function (error) {
    if (Array.isArray(error)) {
        return undefined;
    }
    return error;
};
exports.getArrayInputError = getArrayInputError;
var PREFIX = 'RaArrayInput';
exports.ArrayInputClasses = {
    root: "".concat(PREFIX, "-root"),
    label: "".concat(PREFIX, "-label"),
};
var Root = (0, material_1.styled)(material_1.FormControl, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            marginTop: 0
        },
        _b["& .".concat(exports.ArrayInputClasses.label)] = {
            position: 'relative',
            top: theme.spacing(0.5),
            left: theme.spacing(-1.5),
        },
        _b["& .".concat(exports.ArrayInputClasses.root)] = {
            // nested ArrayInput
            paddingLeft: theme.spacing(2),
        },
        _b);
});
//# sourceMappingURL=ArrayInput.js.map