var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import CloseIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButtonWithTooltip } from '../../button';
import { useSimpleFormIteratorItem } from './useSimpleFormIteratorItem';
export var RemoveItemButton = function (props) {
    var remove = useSimpleFormIteratorItem().remove;
    return (React.createElement(IconButtonWithTooltip, __assign({ label: "ra.action.remove", size: "small", onClick: function () { return remove(); }, color: "warning" }, props),
        React.createElement(CloseIcon, { fontSize: "small" })));
};
//# sourceMappingURL=RemoveItemButton.js.map