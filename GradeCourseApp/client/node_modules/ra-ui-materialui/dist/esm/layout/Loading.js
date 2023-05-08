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
import CircularProgress from '@mui/material/CircularProgress';
import { useTranslate } from 'ra-core';
export var Loading = function (props) {
    var className = props.className, _a = props.loadingPrimary, loadingPrimary = _a === void 0 ? 'ra.page.loading' : _a, _b = props.loadingSecondary, loadingSecondary = _b === void 0 ? 'ra.message.loading' : _b, rest = __rest(props, ["className", "loadingPrimary", "loadingSecondary"]);
    var translate = useTranslate();
    return (React.createElement(Root, __assign({ className: className }, rest),
        React.createElement("div", { className: LoadingClasses.message },
            React.createElement(CircularProgress, { className: LoadingClasses.icon, color: "primary" }),
            React.createElement("h1", null, translate(loadingPrimary)),
            React.createElement("div", null, translate(loadingSecondary)))));
};
Loading.propTypes = {
    className: PropTypes.string,
    loadingPrimary: PropTypes.string,
    loadingSecondary: PropTypes.string,
};
Loading.defaultProps = {
    loadingPrimary: 'ra.page.loading',
    loadingSecondary: 'ra.message.loading',
};
var PREFIX = 'RaLoading';
export var LoadingClasses = {
    root: "".concat(PREFIX, "-root"),
    icon: "".concat(PREFIX, "-icon"),
    message: "".concat(PREFIX, "-message"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        _b[theme.breakpoints.up('md')] = {
            height: '100%',
        },
        _b[theme.breakpoints.down('xl')] = {
            height: '100vh',
            marginTop: '-3em',
        },
        _b["& .".concat(LoadingClasses.icon)] = {
            width: '9em',
            height: '9em',
        },
        _b["& .".concat(LoadingClasses.message)] = {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em',
        },
        _b);
});
//# sourceMappingURL=Loading.js.map