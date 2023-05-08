import { useContext, useMemo } from 'react';
import defaults from 'lodash/defaults';
import { EditContext } from './EditContext';
/**
 * Hook to read the edit controller props from the CreateContext.
 *
 * Mostly used within a <EditContext.Provider> (e.g. as a descendent of <Edit>).
 *
 * But you can also use it without a <EditContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} EditControllerProps
 *
 * @returns {EditControllerResult} edit controller props
 *
 * @see useEditController for how it is filled
 *
 */
export var useEditContext = function (props) {
    // Can't find a way to specify the RecordType when EditContext is declared
    // @ts-ignore
    var context = useContext(EditContext);
    // Props take precedence over the context
    return useMemo(function () {
        return defaults({}, props != null ? extractEditContextProps(props) : {}, context);
    }, [context, props]);
};
/**
 * Extract only the edit controller props
 *
 * @param {Object} props props passed to the useEditContext hook
 *
 * @returns {EditControllerResult} edit controller props
 */
var extractEditContextProps = function (_a) {
    var data = _a.data, record = _a.record, defaultTitle = _a.defaultTitle, isFetching = _a.isFetching, isLoading = _a.isLoading, mutationMode = _a.mutationMode, redirect = _a.redirect, resource = _a.resource, save = _a.save, saving = _a.saving;
    return ({
        // Necessary for actions (EditActions) which expect a data prop containing the record
        // @deprecated - to be removed in 4.0d
        data: record || data,
        record: record || data,
        defaultTitle: defaultTitle,
        isFetching: isFetching,
        isLoading: isLoading,
        mutationMode: mutationMode,
        redirect: redirect,
        resource: resource,
        save: save,
        saving: saving,
    });
};
//# sourceMappingURL=useEditContext.js.map