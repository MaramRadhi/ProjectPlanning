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
import AddIcon from '@mui/icons-material/AddCircleOutline';
import { useSimpleFormIterator } from './useSimpleFormIterator';
import { IconButtonWithTooltip } from '../../button';
export var AddItemButton = function (props) {
    var add = useSimpleFormIterator().add;
    return (React.createElement(IconButtonWithTooltip, __assign({ label: "ra.action.add", size: "small", onClick: function () { return add(); }, color: "primary" }, props),
        React.createElement(AddIcon, { fontSize: "small" })));
};
//# sourceMappingURL=AddItemButton.js.map