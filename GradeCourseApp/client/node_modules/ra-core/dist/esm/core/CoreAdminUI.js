import * as React from 'react';
import { useEffect, isValidElement, createElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CoreAdminRoutes } from './CoreAdminRoutes';
import { Ready } from '../util';
var DefaultLayout = function (_a) {
    var children = _a.children;
    return React.createElement(React.Fragment, null, children);
};
export var CoreAdminUI = function (props) {
    var _a = props.catchAll, catchAll = _a === void 0 ? Noop : _a, children = props.children, dashboard = props.dashboard, _b = props.disableTelemetry, disableTelemetry = _b === void 0 ? false : _b, _c = props.layout, layout = _c === void 0 ? DefaultLayout : _c, _d = props.loading, loading = _d === void 0 ? Noop : _d, _e = props.loginPage, LoginPage = _e === void 0 ? false : _e, _f = props.authCallbackPage, LoginCallbackPage = _f === void 0 ? false : _f, menu = props.menu, // deprecated, use a custom layout instead
    _g = props.ready, // deprecated, use a custom layout instead
    ready = _g === void 0 ? Ready : _g, _h = props.title, title = _h === void 0 ? 'React Admin' : _h, _j = props.requireAuth, requireAuth = _j === void 0 ? false : _j;
    useEffect(function () {
        if (disableTelemetry ||
            process.env.NODE_ENV !== 'production' ||
            typeof window === 'undefined' ||
            typeof window.location === 'undefined' ||
            typeof Image === 'undefined') {
            return;
        }
        var img = new Image();
        img.src = "https://react-admin-telemetry.marmelab.com/react-admin-telemetry?domain=".concat(window.location.hostname);
    }, [disableTelemetry]);
    return (React.createElement(Routes, null,
        LoginPage !== false && LoginPage !== true ? (React.createElement(Route, { path: "/login", element: createOrGetElement(LoginPage) })) : null,
        LoginCallbackPage !== false && LoginCallbackPage !== true ? (React.createElement(Route, { path: "/auth-callback", element: createOrGetElement(LoginCallbackPage) })) : null,
        React.createElement(Route, { path: "/*", element: React.createElement(CoreAdminRoutes, { catchAll: catchAll, dashboard: dashboard, layout: layout, loading: loading, menu: menu, requireAuth: requireAuth, ready: ready, title: title }, children) })));
};
var createOrGetElement = function (el) { return (isValidElement(el) ? el : createElement(el)); };
var Noop = function () { return null; };
//# sourceMappingURL=CoreAdminUI.js.map