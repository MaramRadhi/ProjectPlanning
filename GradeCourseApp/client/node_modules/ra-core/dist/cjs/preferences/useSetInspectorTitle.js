"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSetInspectorTitle = void 0;
var react_1 = require("react");
var usePreferencesEditor_1 = require("./usePreferencesEditor");
/**
 * Set inspector title on mount
 *
 * @example
 * useSetInspectorTitle('Datagrid');
 */
var useSetInspectorTitle = function (title, options) {
    var setTitle = (0, usePreferencesEditor_1.usePreferencesEditor)().setTitle;
    (0, react_1.useEffect)(function () {
        setTitle(title, options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, JSON.stringify(options), setTitle]);
};
exports.useSetInspectorTitle = useSetInspectorTitle;
//# sourceMappingURL=useSetInspectorTitle.js.map