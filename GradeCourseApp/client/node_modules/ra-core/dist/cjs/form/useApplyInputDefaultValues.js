"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApplyInputDefaultValues = void 0;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var get_1 = __importDefault(require("lodash/get"));
var controller_1 = require("../controller");
/*
 * This hook updates the input default value whenever the record changes
 * It applies either the record value if it has one or the defaultValue if it was specified
 */
var useApplyInputDefaultValues = function (props) {
    var defaultValue = props.defaultValue, source = props.source;
    var record = (0, controller_1.useRecordContext)(props);
    var _a = (0, react_hook_form_1.useFormContext)(), getValues = _a.getValues, resetField = _a.resetField, getFieldState = _a.getFieldState, formState = _a.formState;
    var recordValue = (0, get_1.default)(record, source);
    var formValue = (0, get_1.default)(getValues(), source);
    var isDirty = getFieldState(source, formState).isDirty;
    (0, react_1.useEffect)(function () {
        if (defaultValue == null)
            return;
        if (formValue == null && recordValue == null && !isDirty) {
            // special case for ArrayInput: since we use get(record, source),
            // if source is like foo.23.bar, this effect will run.
            // but we only want to set the default value for the subfield bar
            // if the record actually has a value for foo.23
            var pathContainsIndex = source
                .split('.')
                .some(function (pathPart) { return numericRegex.test(pathPart); });
            if (pathContainsIndex) {
                var parentPath = source.split('.').slice(0, -1).join('.');
                var parentValue = (0, get_1.default)(getValues(), parentPath);
                if (parentValue == null) {
                    // the parent is undefined, so we don't want to set the default value
                    return;
                }
            }
            resetField(source, { defaultValue: defaultValue });
        }
    });
};
exports.useApplyInputDefaultValues = useApplyInputDefaultValues;
var numericRegex = /^\d+$/;
//# sourceMappingURL=useApplyInputDefaultValues.js.map