/**
 * @deprecated use useCreatePath instead
 */
export var linkToRecord = function (resource, id, linkType) {
    if (linkType === void 0) { linkType = 'edit'; }
    var link = "".concat(resource, "/").concat(encodeURIComponent(id));
    if (linkType === 'show') {
        return "".concat(link, "/show");
    }
    return link;
};
//# sourceMappingURL=linkToRecord.js.map