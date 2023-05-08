"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithRecord = void 0;
var useRecordContext_1 = require("./useRecordContext");
/**
 * Render prop version of useRecordContext
 *
 * @example
 * const BookShow = () => (
 *    <Show>
 *       <SimpleShowLayout>
 *          <WithRecord render={record => <span>{record.title}</span>} />
 *      </SimpleShowLayout>
 *   </Show>
 * );
 */
var WithRecord = function (_a) {
    var render = _a.render;
    var record = (0, useRecordContext_1.useRecordContext)();
    return record ? render(record) : null;
};
exports.WithRecord = WithRecord;
//# sourceMappingURL=WithRecord.js.map