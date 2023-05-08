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
import { Children, cloneElement, isValidElement, useState, } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Routes, Route, matchPath, useResolvedPath, useLocation, } from 'react-router-dom';
import { CardContent, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useResourceContext } from 'ra-core';
import { Toolbar } from './Toolbar';
import { TabbedFormTabs, getTabbedFormTabFullPath } from './TabbedFormTabs';
export var TabbedFormView = function (props) {
    var children = props.children, className = props.className, _a = props.component, Component = _a === void 0 ? DefaultComponent : _a, formRootPathname = props.formRootPathname, _b = props.syncWithLocation, syncWithLocation = _b === void 0 ? true : _b, _c = props.tabs, tabs = _c === void 0 ? DefaultTabs : _c, _d = props.toolbar, toolbar = _d === void 0 ? DefaultToolbar : _d, rest = __rest(props, ["children", "className", "component", "formRootPathname", "syncWithLocation", "tabs", "toolbar"]);
    var location = useLocation();
    var resolvedPath = useResolvedPath('');
    var resource = useResourceContext(props);
    var _e = useState(0), tabValue = _e[0], setTabValue = _e[1];
    var handleTabChange = function (event, value) {
        if (!syncWithLocation) {
            setTabValue(value);
        }
    };
    var renderTabHeaders = function () {
        return cloneElement(tabs, {
            onChange: handleTabChange,
            syncWithLocation: syncWithLocation,
            url: formRootPathname,
            value: tabValue,
        }, children);
    };
    return (React.createElement(Root, __assign({ className: clsx('tabbed-form', className) }, sanitizeRestProps(rest)),
        syncWithLocation ? (React.createElement(Routes, null,
            React.createElement(Route, { path: "/*", element: renderTabHeaders() }))) : (renderTabHeaders()),
        React.createElement(Divider, null),
        React.createElement(Component, null, Children.map(children, function (tab, index) {
            if (!tab) {
                return null;
            }
            var tabPath = getTabbedFormTabFullPath(tab, index);
            var hidden = syncWithLocation
                ? !matchPath("".concat(resolvedPath.pathname, "/").concat(tabPath), location.pathname)
                : tabValue !== index;
            return isValidElement(tab)
                ? React.cloneElement(tab, {
                    intent: 'content',
                    resource: resource,
                    hidden: hidden,
                    value: syncWithLocation ? tabPath : index,
                })
                : null;
        })),
        toolbar !== false ? toolbar : null));
};
TabbedFormView.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    location: PropTypes.object,
    match: PropTypes.object,
    // @ts-ignore
    resource: PropTypes.string,
    tabs: PropTypes.element,
    toolbar: PropTypes.oneOfType([PropTypes.element, PropTypes.oneOf([false])]),
    validate: PropTypes.func,
    value: PropTypes.number,
};
var DefaultTabs = React.createElement(TabbedFormTabs, null);
var DefaultComponent = function (_a) {
    var children = _a.children;
    return (React.createElement(CardContent, null, children));
};
var DefaultToolbar = React.createElement(Toolbar, null);
var PREFIX = 'RaTabbedForm';
export var TabbedFormClasses = {
    errorTabButton: "".concat(PREFIX, "-errorTabButton"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .MuiTab-root.".concat(TabbedFormClasses.errorTabButton)] = {
            color: theme.palette.error.main,
        },
        _b);
});
var sanitizeRestProps = function (_a) {
    var record = _a.record, resource = _a.resource, rest = __rest(_a, ["record", "resource"]);
    return rest;
};
//# sourceMappingURL=TabbedFormView.js.map