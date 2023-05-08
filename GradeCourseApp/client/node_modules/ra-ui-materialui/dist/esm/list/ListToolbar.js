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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import { memo } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Toolbar } from '@mui/material';
import { FilterForm } from './filter';
import { FilterContext } from './FilterContext';
export var ListToolbar = memo(function (props) {
    var filters = props.filters, actions = props.actions, className = props.className, rest = __rest(props, ["filters", "actions", "className"]);
    return Array.isArray(filters) ? (React.createElement(FilterContext.Provider, { value: filters },
        React.createElement(Root, { className: className },
            React.createElement(FilterForm, null),
            React.createElement("span", null),
            actions &&
                React.cloneElement(actions, __assign(__assign({}, rest), actions.props))))) : (React.createElement(Root, { className: className },
        filters &&
            React.cloneElement(filters, __assign(__assign({}, rest), { context: 'form' })),
        React.createElement("span", null),
        actions &&
            React.cloneElement(actions, __assign(__assign(__assign({}, rest), { filters: filters }), actions.props))));
});
ListToolbar.propTypes = {
    filters: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    // @ts-ignore
    actions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    // @ts-ignore
    exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
var PREFIX = 'RaListToolbar';
var Root = styled(Toolbar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            padding: '0 !important',
            minHeight: theme.spacing(8)
        },
        _b[theme.breakpoints.down('sm')] = {
            backgroundColor: theme.palette.background.paper,
        },
        _b[theme.breakpoints.down('md')] = {
            margin: 0,
            flexWrap: 'wrap',
        },
        _b);
});
//# sourceMappingURL=ListToolbar.js.map