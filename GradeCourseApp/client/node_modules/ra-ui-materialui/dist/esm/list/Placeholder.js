import * as React from 'react';
import { styled } from '@mui/material/styles';
export var Placeholder = function (props) { return (React.createElement(Root, { className: props.className }, "\u00A0")); };
var PREFIX = 'RaPlaceholder';
var Root = styled('span', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: theme.palette.grey[300],
        display: 'flex',
    });
});
//# sourceMappingURL=Placeholder.js.map