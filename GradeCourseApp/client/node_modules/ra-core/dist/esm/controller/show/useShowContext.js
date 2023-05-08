import { useContext, useMemo } from 'react';
import defaults from 'lodash/defaults';
import { ShowContext } from './ShowContext';
/**
 * Hook to read the show controller props from the ShowContext.
 *
 * Mostly used within a <ShowContext.Provider> (e.g. as a descendent of <Show>).
 *
 * But you can also use it without a <ShowContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} ShowControllerResult
 *
 * @returns {ShowControllerResult} create controller props
 *
 * @see useShowController for how it is filled
 *
 */
export var useShowContext = function (props) {
    // Can't find a way to specify the RecordType when ShowContext is declared
    // @ts-ignore
    var context = useContext(ShowContext);
    // Props take precedence over the context
    return useMemo(function () {
        return defaults({}, props != null ? extractShowContextProps(props) : {}, context);
    }, [context, props]);
};
/**
 * Extract only the show controller props
 *
 * @param {Object} props props passed to the useShowContext hook
 *
 * @returns {ShowControllerResult} show controller props
 */
var extractShowContextProps = function (_a) {
    var record = _a.record, data = _a.data, defaultTitle = _a.defaultTitle, isFetching = _a.isFetching, isLoading = _a.isLoading, resource = _a.resource;
    return ({
        // Necessary for actions (EditActions) which expect a data prop containing the record
        // @deprecated - to be removed in 4.0d
        record: record || data,
        data: record || data,
        defaultTitle: defaultTitle,
        isFetching: isFetching,
        isLoading: isLoading,
        resource: resource,
    });
};
//# sourceMappingURL=useShowContext.js.map