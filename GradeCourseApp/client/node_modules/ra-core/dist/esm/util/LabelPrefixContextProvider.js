import * as React from 'react';
import { LabelPrefixContext } from './LabelPrefixContext';
import { useLabelPrefix } from './useLabelPrefix';
export var LabelPrefixContextProvider = function (_a) {
    var prefix = _a.prefix, _b = _a.concatenate, concatenate = _b === void 0 ? true : _b, children = _a.children;
    var oldPrefix = useLabelPrefix();
    var newPrefix = oldPrefix && concatenate ? "".concat(oldPrefix, ".").concat(prefix) : prefix;
    return (React.createElement(LabelPrefixContext.Provider, { value: newPrefix }, children));
};
//# sourceMappingURL=LabelPrefixContextProvider.js.map