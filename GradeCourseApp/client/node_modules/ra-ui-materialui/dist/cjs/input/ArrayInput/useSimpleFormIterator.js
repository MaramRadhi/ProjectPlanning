"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSimpleFormIterator = void 0;
var react_1 = require("react");
var SimpleFormIteratorContext_1 = require("./SimpleFormIteratorContext");
/**
 * A hook that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
 * Useful to create custom array input iterators.
 * @see {SimpleFormIterator}
 * @see {ArrayInput}
 */
var useSimpleFormIterator = function () {
    return (0, react_1.useContext)(SimpleFormIteratorContext_1.SimpleFormIteratorContext);
};
exports.useSimpleFormIterator = useSimpleFormIterator;
//# sourceMappingURL=useSimpleFormIterator.js.map