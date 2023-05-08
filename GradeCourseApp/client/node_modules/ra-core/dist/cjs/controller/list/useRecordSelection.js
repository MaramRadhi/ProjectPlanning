"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useRecordSelection = void 0;
var react_1 = require("react");
var store_1 = require("../../store");
/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
var useRecordSelection = function (resource) {
    var storeKey = "".concat(resource, ".selectedIds");
    var _a = (0, store_1.useStore)(storeKey, defaultSelection), ids = _a[0], setIds = _a[1];
    var reset = (0, store_1.useRemoveFromStore)(storeKey);
    var selectionModifiers = (0, react_1.useMemo)(function () { return ({
        select: function (idsToAdd) {
            if (!idsToAdd)
                return;
            setIds(__spreadArray([], idsToAdd, true));
        },
        unselect: function (idsToRemove) {
            if (!idsToRemove || idsToRemove.length === 0)
                return;
            setIds(function (ids) {
                if (!Array.isArray(ids))
                    return [];
                return ids.filter(function (id) { return !idsToRemove.includes(id); });
            });
        },
        toggle: function (id) {
            if (typeof id === 'undefined')
                return;
            setIds(function (ids) {
                if (!Array.isArray(ids))
                    return __spreadArray([], ids, true);
                var index = ids.indexOf(id);
                return index > -1
                    ? __spreadArray(__spreadArray([], ids.slice(0, index), true), ids.slice(index + 1), true) : __spreadArray(__spreadArray([], ids, true), [id], false);
            });
        },
        clearSelection: function () {
            reset();
        },
    }); }, [setIds, reset]);
    return [ids, selectionModifiers];
};
exports.useRecordSelection = useRecordSelection;
var defaultSelection = [];
//# sourceMappingURL=useRecordSelection.js.map