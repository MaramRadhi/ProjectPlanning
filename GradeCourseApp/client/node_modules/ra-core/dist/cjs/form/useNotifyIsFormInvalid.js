"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNotifyIsFormInvalid = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var notification_1 = require("../notification");
/**
 * This hook display an error message on submit in Form and SaveButton.
 *
 * We can't do the form validity check in the form submit handler
 * as the form state may not have been updated yet when onSubmit validation mode is enabled
 * or when the form hasn't been touched at all.
 */
var useNotifyIsFormInvalid = function (control) {
    var _a = (0, react_hook_form_1.useFormState)(control ? { control: control } : undefined), submitCount = _a.submitCount, errors = _a.errors;
    var submitCountRef = (0, react_1.useRef)(submitCount);
    var notify = (0, notification_1.useNotify)();
    (0, react_1.useEffect)(function () {
        // Checking the submit count allows us to only display the notification after users
        // tried to submit
        if (submitCount > submitCountRef.current) {
            submitCountRef.current = submitCount;
            if (Object.keys(errors).length > 0) {
                notify('ra.message.invalid_form', { type: 'error' });
            }
        }
    }, [errors, submitCount, notify]);
};
exports.useNotifyIsFormInvalid = useNotifyIsFormInvalid;
//# sourceMappingURL=useNotifyIsFormInvalid.js.map