"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnselectAll = void 0;
var react_1 = require("react");
var useRecordSelection_1 = require("./useRecordSelection");
/**
 * Hook to unselect all row of a datagrid
 *
 * @example
 *
 * const unselectAll = useUnselectAll('posts');
 * unselectAll();
 */
var useUnselectAll = function (resource) {
    var _a = (0, useRecordSelection_1.useRecordSelection)(resource), clearSelection = _a[1].clearSelection;
    return (0, react_1.useCallback)(function () {
        clearSelection();
    }, [clearSelection]);
};
exports.useUnselectAll = useUnselectAll;
//# sourceMappingURL=useUnselectAll.js.map