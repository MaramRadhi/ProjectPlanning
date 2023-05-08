"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTranslateLabel = void 0;
var react_1 = require("react");
var useTranslate_1 = require("./useTranslate");
var util_1 = require("../util");
var core_1 = require("../core");
var useTranslateLabel = function () {
    var translate = (0, useTranslate_1.useTranslate)();
    var prefix = (0, util_1.useLabelPrefix)();
    var resourceFromContext = (0, core_1.useResourceContext)();
    return (0, react_1.useCallback)(function (_a) {
        var source = _a.source, label = _a.label, resource = _a.resource;
        if (label === false || label === '') {
            return null;
        }
        if (label && typeof label !== 'string') {
            return label;
        }
        return translate.apply(void 0, (0, util_1.getFieldLabelTranslationArgs)({
            label: label,
            prefix: prefix,
            resource: resource,
            resourceFromContext: resourceFromContext,
            source: source,
        }));
    }, [prefix, resourceFromContext, translate]);
};
exports.useTranslateLabel = useTranslateLabel;
//# sourceMappingURL=useTranslateLabel.js.map