"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkToRecord = void 0;
/**
 * @deprecated use useCreatePath instead
 */
var linkToRecord = function (resource, id, linkType) {
    if (linkType === void 0) { linkType = 'edit'; }
    var link = "".concat(resource, "/").concat(encodeURIComponent(id));
    if (linkType === 'show') {
        return "".concat(link, "/show");
    }
    return link;
};
exports.linkToRecord = linkToRecord;
//# sourceMappingURL=linkToRecord.js.map