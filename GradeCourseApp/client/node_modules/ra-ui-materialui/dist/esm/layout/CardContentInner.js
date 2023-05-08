import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import CardContent from '@mui/material/CardContent';
/**
 * Overrides MUI CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
export var CardContentInner = function (props) {
    var className = props.className, children = props.children;
    return React.createElement(Root, { className: className }, children);
};
CardContentInner.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object,
    children: PropTypes.node,
};
var PREFIX = 'RaCardContentInner';
export var CardContentInnerClasses = {
    root: "".concat(PREFIX, "-root"),
};
var Root = styled(CardContent, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        paddingTop: 0,
        paddingBottom: 0,
        '&:first-of-type': {
            paddingTop: 16,
        },
        '&:last-child': (_b = {
                paddingBottom: 16
            },
            _b[theme.breakpoints.only('xs')] = {
                paddingBottom: 70,
            },
            _b),
    });
});
//# sourceMappingURL=CardContentInner.js.map