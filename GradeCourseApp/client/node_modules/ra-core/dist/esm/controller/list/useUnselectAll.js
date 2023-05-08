import { useCallback } from 'react';
import { useRecordSelection } from './useRecordSelection';
/**
 * Hook to unselect all row of a datagrid
 *
 * @example
 *
 * const unselectAll = useUnselectAll('posts');
 * unselectAll();
 */
export var useUnselectAll = function (resource) {
    var _a = useRecordSelection(resource), clearSelection = _a[1].clearSelection;
    return useCallback(function () {
        clearSelection();
    }, [clearSelection]);
};
//# sourceMappingURL=useUnselectAll.js.map