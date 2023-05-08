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
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
export var TopToolbar = function (props) { return React.createElement(StyledToolbar, __assign({}, props)); };
TopToolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
export default TopToolbar;
var PREFIX = 'RaTopToolbar';
var StyledToolbar = styled(Toolbar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: theme.spacing(1),
            whiteSpace: 'nowrap',
            flex: '0 1 auto',
            minHeight: theme.spacing(8)
        },
        _b[theme.breakpoints.up('md')] = {
            padding: theme.spacing(0.5),
            paddingTop: theme.spacing(1),
        },
        _b[theme.breakpoints.down('md')] = {
            flex: '0 1 100%',
            padding: theme.spacing(0.5),
            paddingBottom: theme.spacing(1),
        },
        _b[theme.breakpoints.down('sm')] = {
            backgroundColor: theme.palette.background.paper,
        },
        _b);
});
//# sourceMappingURL=TopToolbar.js.map