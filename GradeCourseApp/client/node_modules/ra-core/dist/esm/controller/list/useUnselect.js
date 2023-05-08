import { useCallback } from 'react';
import { useRecordSelection } from './useRecordSelection';
/**
 * Hook to Unselect the rows of a datagrid
 *
 * @example
 *
 * const unselect = useUnselect('posts');
 * unselect([123, 456]);
 */
export var useUnselect = function (resource) {
    var _a = useRecordSelection(resource), unselect = _a[1].unselect;
    return useCallback(function (ids) {
        unselect(ids);
    }, [unselect]);
};
//# sourceMappingURL=useUnselect.js.map