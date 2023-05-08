"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useUnselect = void 0;
var react_1 = require("react");
var useRecordSelection_1 = require("./useRecordSelection");
/**
 * Hook to Unselect the rows of a datagrid
 *
 * @example
 *
 * const unselect = useUnselect('posts');
 * unselect([123, 456]);
 */
var useUnselect = function (resource) {
    var _a = (0, useRecordSelection_1.useRecordSelection)(resource), unselect = _a[1].unselect;
    return (0, react_1.useCallback)(function (ids) {
        unselect(ids);
    }, [unselect]);
};
exports.useUnselect = useUnselect;
//# sourceMappingURL=useUnselect.js.map