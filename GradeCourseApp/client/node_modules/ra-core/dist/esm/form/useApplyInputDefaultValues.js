import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import get from 'lodash/get';
import { useRecordContext } from '../controller';
/*
 * This hook updates the input default value whenever the record changes
 * It applies either the record value if it has one or the defaultValue if it was specified
 */
export var useApplyInputDefaultValues = function (props) {
    var defaultValue = props.defaultValue, source = props.source;
    var record = useRecordContext(props);
    var _a = useFormContext(), getValues = _a.getValues, resetField = _a.resetField, getFieldState = _a.getFieldState, formState = _a.formState;
    var recordValue = get(record, source);
    var formValue = get(getValues(), source);
    var isDirty = getFieldState(source, formState).isDirty;
    useEffect(function () {
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
                var parentValue = get(getValues(), parentPath);
                if (parentValue == null) {
                    // the parent is undefined, so we don't want to set the default value
                    return;
                }
            }
            resetField(source, { defaultValue: defaultValue });
        }
    });
};
var numericRegex = /^\d+$/;
//# sourceMappingURL=useApplyInputDefaultValues.js.map