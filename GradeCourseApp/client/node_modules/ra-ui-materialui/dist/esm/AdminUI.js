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
import { createElement } from 'react';
import { CoreAdminUI } from 'ra-core';
import { ScopedCssBaseline } from '@mui/material';
import { Layout as DefaultLayout, LoadingPage, NotFound, Notification, } from './layout';
import { Login, AuthCallback } from './auth';
export var AdminUI = function (_a) {
    var notification = _a.notification, props = __rest(_a, ["notification"]);
    return (React.createElement(ScopedCssBaseline, { enableColorScheme: true },
        React.createElement(CoreAdminUI, __assign({}, props)),
        createElement(notification)));
};
AdminUI.defaultProps = {
    layout: DefaultLayout,
    catchAll: NotFound,
    loading: LoadingPage,
    loginPage: Login,
    authCallbackPage: AuthCallback,
    notification: Notification,
};
//# sourceMappingURL=AdminUI.js.map