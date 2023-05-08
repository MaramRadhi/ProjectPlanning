import * as React from 'react';
import { memo } from 'react';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslate, useExpandAll } from 'ra-core';
import { DatagridClasses } from './useDatagridStyles';
import clsx from 'clsx';
var ExpandAllButton = function (_a) {
    var _b;
    var resource = _a.resource, ids = _a.ids;
    var translate = useTranslate();
    var _c = useExpandAll(resource, ids), expanded = _c[0], toggleExpanded = _c[1];
    return (React.createElement(IconButton, { className: clsx(DatagridClasses.expandIcon, (_b = {},
            _b[DatagridClasses.expanded] = expanded,
            _b)), "aria-label": translate(expanded ? 'ra.action.close' : 'ra.action.expand'), "aria-expanded": expanded, tabIndex: -1, "aria-hidden": "true", onClick: toggleExpanded, size: "small" },
        React.createElement(ExpandMoreIcon, { fontSize: "inherit" })));
};
export default memo(ExpandAllButton);
//# sourceMappingURL=ExpandAllButton.js.map