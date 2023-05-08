import { useEffect } from 'react';
import { usePreferencesEditor } from './usePreferencesEditor';
/**
 * Set inspector title on mount
 *
 * @example
 * useSetInspectorTitle('Datagrid');
 */
export var useSetInspectorTitle = function (title, options) {
    var setTitle = usePreferencesEditor().setTitle;
    useEffect(function () {
        setTitle(title, options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [title, JSON.stringify(options), setTitle]);
};
//# sourceMappingURL=useSetInspectorTitle.js.map