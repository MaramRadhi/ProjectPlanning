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
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useTheme } from '@mui/material/styles';
import CircularProgress from '@mui/material/CircularProgress';
import { useLoading } from 'ra-core';
import { RefreshIconButton } from '../button';
export var LoadingIndicator = function (props) {
    var className = props.className, sx = props.sx, rest = __rest(props, ["className", "sx"]);
    var loading = useLoading();
    var theme = useTheme();
    return (React.createElement(Root, { className: className, sx: sx }, loading ? (React.createElement(CircularProgress, __assign({ className: clsx('app-loader', LoadingIndicatorClasses.loader), color: "inherit", size: theme.spacing(2), thickness: 6 }, rest))) : (React.createElement(RefreshIconButton, { className: LoadingIndicatorClasses.loadedIcon }))));
};
LoadingIndicator.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    width: PropTypes.string,
};
var PREFIX = 'RaLoadingIndicator';
export var LoadingIndicatorClasses = {
    loader: "".concat(PREFIX, "-loader"),
    loadedIcon: "".concat(PREFIX, "-loadedIcon"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(LoadingIndicatorClasses.loader)] = {
            marginLeft: theme.spacing(1.5),
            marginRight: theme.spacing(1.5),
        },
        _b["& .".concat(LoadingIndicatorClasses.loadedIcon)] = {},
        _b);
});
//# sourceMappingURL=LoadingIndicator.js.map