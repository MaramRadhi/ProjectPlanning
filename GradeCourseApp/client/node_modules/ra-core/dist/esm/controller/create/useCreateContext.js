import { useContext, useMemo } from 'react';
import defaults from 'lodash/defaults';
import { CreateContext } from './CreateContext';
/**
 * Hook to read the create controller props from the CreateContext.
 *
 * Mostly used within a <CreateContext.Provider> (e.g. as a descendent of <Create>).
 *
 * But you can also use it without a <CreateContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} CreateControllerProps
 *
 * @returns {CreateControllerResult} create controller props
 *
 * @see useCreateController for how it is filled
 *
 */
export var useCreateContext = function (props) {
    var context = useContext(
    // Can't find a way to specify the RecordType when CreateContext is declared
    // @ts-ignore
    CreateContext);
    // Props take precedence over the context
    return useMemo(function () {
        return defaults({}, props != null ? extractCreateContextProps(props) : {}, context);
    }, [context, props]);
};
/**
 * Extract only the create controller props
 *
 * @param {Object} props props passed to the useCreateContext hook
 *
 * @returns {CreateControllerResult} create controller props
 */
var extractCreateContextProps = function (_a) {
    var record = _a.record, defaultTitle = _a.defaultTitle, isFetching = _a.isFetching, isLoading = _a.isLoading, redirect = _a.redirect, resource = _a.resource, save = _a.save, saving = _a.saving;
    return ({
        record: record,
        defaultTitle: defaultTitle,
        isFetching: isFetching,
        isLoading: isLoading,
        redirect: redirect,
        resource: resource,
        save: save,
        saving: saving,
    });
};
//# sourceMappingURL=useCreateContext.js.map