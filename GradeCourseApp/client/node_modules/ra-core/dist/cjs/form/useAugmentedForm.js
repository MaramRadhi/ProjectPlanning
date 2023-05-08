"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAugmentedForm = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var controller_1 = require("../controller");
var controller_2 = require("../controller");
var getFormInitialValues_1 = __importDefault(require("./getFormInitialValues"));
var getSimpleValidationResolver_1 = require("./getSimpleValidationResolver");
var setSubmissionErrors_1 = require("./setSubmissionErrors");
var useNotifyIsFormInvalid_1 = require("./useNotifyIsFormInvalid");
var useWarnWhenUnsavedChanges_1 = require("./useWarnWhenUnsavedChanges");
var sanitizeEmptyValues_1 = require("./sanitizeEmptyValues");
/**
 * Wrapper around react-hook-form's useForm
 *
 * This hook adds the following features to react-hook-form's useForm:
 *
 * - form initialization based on RecordContext
 * - validation based on a validate function
 * - sanitization of empty values
 * - notification on invalid form
 * - stop form submission event propagation
 */
var useAugmentedForm = function (props) {
    var context = props.context, _a = props.criteriaMode, criteriaMode = _a === void 0 ? 'firstError' : _a, defaultValues = props.defaultValues, delayError = props.delayError, formRootPathname = props.formRootPathname, mode = props.mode, resolver = props.resolver, _b = props.reValidateMode, reValidateMode = _b === void 0 ? 'onChange' : _b, onSubmit = props.onSubmit, sanitizeEmptyValues = props.sanitizeEmptyValues, shouldFocusError = props.shouldFocusError, shouldUnregister = props.shouldUnregister, shouldUseNativeValidation = props.shouldUseNativeValidation, warnWhenUnsavedChanges = props.warnWhenUnsavedChanges, validate = props.validate;
    var record = (0, controller_2.useRecordContext)(props);
    var saveContext = (0, controller_1.useSaveContext)();
    var defaultValuesIncludingRecord = (0, react_1.useMemo)(function () { return (0, getFormInitialValues_1.default)(defaultValues, record); }, 
    // eslint-disable-next-line
    [
        // eslint-disable-next-line
        JSON.stringify({
            defaultValues: typeof defaultValues === 'function'
                ? 'function'
                : defaultValues,
            record: record,
        }),
    ]);
    var finalResolver = resolver
        ? resolver
        : validate
            ? (0, getSimpleValidationResolver_1.getSimpleValidationResolver)(validate)
            : undefined;
    var form = (0, react_hook_form_1.useForm)({
        context: context,
        criteriaMode: criteriaMode,
        defaultValues: defaultValuesIncludingRecord,
        delayError: delayError,
        mode: mode,
        reValidateMode: reValidateMode,
        resolver: finalResolver,
        shouldFocusError: shouldFocusError,
        shouldUnregister: shouldUnregister,
        shouldUseNativeValidation: shouldUseNativeValidation,
    });
    var formRef = (0, react_1.useRef)(form);
    // According to react-hook-form docs: https://react-hook-form.com/api/useform/formstate
    // `formState` must be read before a render in order to enable the state update.
    var _c = form.formState, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSubmitting = _c.isSubmitting, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isDirty = _c.isDirty, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isValid = _c.isValid, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isValidating = _c.isValidating, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    dirtyFields = _c.dirtyFields, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    errors = _c.errors, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    submitCount = _c.submitCount, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    touchedFields = _c.touchedFields, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSubmitted = _c.isSubmitted, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSubmitSuccessful = _c.isSubmitSuccessful;
    // initialize form with record
    /* eslint-disable react-hooks/exhaustive-deps */
    (0, react_1.useEffect)(function () {
        if (!record) {
            return;
        }
        var initialValues = (0, getFormInitialValues_1.default)(defaultValues, record);
        form.reset(initialValues);
    }, [
        JSON.stringify({
            defaultValues: typeof defaultValues === 'function'
                ? 'function'
                : defaultValues,
            record: record,
        }),
    ]);
    /* eslint-enable react-hooks/exhaustive-deps */
    // notify on invalid form
    (0, useNotifyIsFormInvalid_1.useNotifyIsFormInvalid)(form.control);
    // warn when unsaved change
    (0, useWarnWhenUnsavedChanges_1.useWarnWhenUnsavedChanges)(Boolean(warnWhenUnsavedChanges), formRootPathname, form.control);
    // submit callbacks
    var handleSubmit = (0, react_1.useCallback)(function (values, event) { return __awaiter(void 0, void 0, void 0, function () {
        var errors, finalValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    finalValues = sanitizeEmptyValues
                        ? (0, sanitizeEmptyValues_1.sanitizeEmptyValues)(values, record)
                        : values;
                    if (!onSubmit) return [3 /*break*/, 2];
                    return [4 /*yield*/, onSubmit(finalValues, event)];
                case 1:
                    errors = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(onSubmit == null && (saveContext === null || saveContext === void 0 ? void 0 : saveContext.save))) return [3 /*break*/, 4];
                    return [4 /*yield*/, saveContext.save(finalValues, event)];
                case 3:
                    errors = _a.sent();
                    _a.label = 4;
                case 4:
                    if (errors != null) {
                        (0, setSubmissionErrors_1.setSubmissionErrors)(errors, formRef.current.setError);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [onSubmit, saveContext, sanitizeEmptyValues, record]);
    var formHandleSubmit = (0, react_1.useCallback)(function (event) {
        if (!event.defaultPrevented) {
            // Prevent outer forms to receive the event
            event.stopPropagation();
            form.handleSubmit(handleSubmit)(event);
        }
        return;
    }, [form, handleSubmit]);
    return {
        form: form,
        handleSubmit: handleSubmit,
        formHandleSubmit: formHandleSubmit,
    };
};
exports.useAugmentedForm = useAugmentedForm;
//# sourceMappingURL=useAugmentedForm.js.map