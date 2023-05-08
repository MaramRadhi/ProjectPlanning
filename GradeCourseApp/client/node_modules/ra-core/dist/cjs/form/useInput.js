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
exports.useInput = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var get_1 = __importDefault(require("lodash/get"));
var controller_1 = require("../controller");
var validate_1 = require("./validate");
var isRequired_1 = __importDefault(require("./isRequired"));
var useFormGroupContext_1 = require("./useFormGroupContext");
var useGetValidationErrorMessage_1 = require("./useGetValidationErrorMessage");
var useFormGroups_1 = require("./useFormGroups");
var useApplyInputDefaultValues_1 = require("./useApplyInputDefaultValues");
// replace null or undefined values by empty string to avoid controlled/uncontrolled input warning
var defaultFormat = function (value) { return (value == null ? '' : value); };
// parse empty string into null as it's more suitable for a majority of backends
var defaultParse = function (value) { return (value === '' ? null : value); };
var useInput = function (props) {
    var defaultValue = props.defaultValue, _a = props.format, format = _a === void 0 ? defaultFormat : _a, id = props.id, isRequiredOption = props.isRequired, name = props.name, onBlur = props.onBlur, onChange = props.onChange, _b = props.parse, parse = _b === void 0 ? defaultParse : _b, source = props.source, validate = props.validate, options = __rest(props, ["defaultValue", "format", "id", "isRequired", "name", "onBlur", "onChange", "parse", "source", "validate"]);
    var finalName = name || source;
    var formGroupName = (0, useFormGroupContext_1.useFormGroupContext)();
    var formGroups = (0, useFormGroups_1.useFormGroups)();
    var record = (0, controller_1.useRecordContext)();
    var getValidationErrorMessage = (0, useGetValidationErrorMessage_1.useGetValidationErrorMessage)();
    var formContext = (0, react_hook_form_1.useFormContext)();
    (0, react_1.useEffect)(function () {
        if (!formGroups || formGroupName == null) {
            return;
        }
        formGroups.registerField(source, formGroupName);
        return function () {
            formGroups.unregisterField(source, formGroupName);
        };
    }, [formGroups, formGroupName, source]);
    var sanitizedValidate = Array.isArray(validate)
        ? (0, validate_1.composeValidators)(validate)
        : validate;
    // Fetch the defaultValue from the record if available or apply the provided defaultValue.
    // This ensures dynamically added inputs have their value set correctly (ArrayInput for example).
    // We don't do this for the form level defaultValues so that it works as it should in react-hook-form
    // (i.e. field level defaultValue override form level defaultValues for this field).
    var _c = (0, react_hook_form_1.useController)(__assign({ name: finalName, defaultValue: (0, get_1.default)(record, source, defaultValue), rules: {
            validate: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var error;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!sanitizedValidate)
                                return [2 /*return*/, true];
                            return [4 /*yield*/, sanitizedValidate(value, formContext.getValues(), props)];
                        case 1:
                            error = _a.sent();
                            if (!error)
                                return [2 /*return*/, true];
                            return [2 /*return*/, getValidationErrorMessage(error)];
                    }
                });
            }); },
        } }, options)), controllerField = _c.field, fieldState = _c.fieldState, formState = _c.formState;
    // Because our forms may receive an asynchronously loaded record for instance,
    // they may reset their default values which would override the input default value.
    // This hook ensures that the input default value is applied when a new record is loaded but has
    // no value for the input.
    (0, useApplyInputDefaultValues_1.useApplyInputDefaultValues)(props);
    var field = __assign(__assign({}, controllerField), { value: format ? format(controllerField.value) : controllerField.value, onBlur: function () {
            var event = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                event[_i] = arguments[_i];
            }
            if (onBlur) {
                onBlur.apply(void 0, event);
            }
            controllerField.onBlur();
        }, onChange: function () {
            var _a, _b, _c, _d, _e;
            var event = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                event[_i] = arguments[_i];
            }
            if (onChange) {
                onChange.apply(void 0, event);
            }
            var eventOrValue = (props.type === 'checkbox' &&
                ((_b = (_a = event[0]) === null || _a === void 0 ? void 0 : _a.target) === null || _b === void 0 ? void 0 : _b.value) === 'on'
                ? event[0].target.checked
                : (_e = (_d = (_c = event[0]) === null || _c === void 0 ? void 0 : _c.target) === null || _d === void 0 ? void 0 : _d.value) !== null && _e !== void 0 ? _e : event[0]);
            controllerField.onChange(parse ? parse(eventOrValue) : eventOrValue);
        } });
    return {
        id: id || source,
        field: field,
        fieldState: fieldState,
        formState: formState,
        isRequired: isRequiredOption || (0, isRequired_1.default)(validate),
    };
};
exports.useInput = useInput;
//# sourceMappingURL=useInput.js.map