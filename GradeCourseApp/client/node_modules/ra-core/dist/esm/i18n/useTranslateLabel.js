import { useCallback } from 'react';
import { useTranslate } from './useTranslate';
import { useLabelPrefix, getFieldLabelTranslationArgs } from '../util';
import { useResourceContext } from '../core';
export var useTranslateLabel = function () {
    var translate = useTranslate();
    var prefix = useLabelPrefix();
    var resourceFromContext = useResourceContext();
    return useCallback(function (_a) {
        var source = _a.source, label = _a.label, resource = _a.resource;
        if (label === false || label === '') {
            return null;
        }
        if (label && typeof label !== 'string') {
            return label;
        }
        return translate.apply(void 0, getFieldLabelTranslationArgs({
            label: label,
            prefix: prefix,
            resource: resource,
            resourceFromContext: resourceFromContext,
            source: source,
        }));
    }, [prefix, resourceFromContext, translate]);
};
//# sourceMappingURL=useTranslateLabel.js.map