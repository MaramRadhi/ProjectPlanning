import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import getFormInitialValues from './getFormInitialValues';
/**
 * Restore the record values which should override any default values specified on the form.
 */
export var useInitializeFormWithRecord = function (defaultValues, record) {
    var reset = useFormContext().reset;
    useEffect(function () {
        if (!record) {
            return;
        }
        var initialValues = getFormInitialValues(defaultValues, record);
        reset(initialValues);
    }, [reset, JSON.stringify(record, defaultValues)]); // eslint-disable-line react-hooks/exhaustive-deps
};
//# sourceMappingURL=useInitializeFormWithRecord.js.map