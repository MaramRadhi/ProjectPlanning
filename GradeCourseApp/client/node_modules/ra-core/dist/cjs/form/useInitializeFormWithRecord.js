"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInitializeFormWithRecord = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var getFormInitialValues_1 = __importDefault(require("./getFormInitialValues"));
/**
 * Restore the record values which should override any default values specified on the form.
 */
var useInitializeFormWithRecord = function (defaultValues, record) {
    var reset = (0, react_hook_form_1.useFormContext)().reset;
    (0, react_1.useEffect)(function () {
        if (!record) {
            return;
        }
        var initialValues = (0, getFormInitialValues_1.default)(defaultValues, record);
        reset(initialValues);
    }, [reset, JSON.stringify(record, defaultValues)]); // eslint-disable-line react-hooks/exhaustive-deps
};
exports.useInitializeFormWithRecord = useInitializeFormWithRecord;
//# sourceMappingURL=useInitializeFormWithRecord.js.map