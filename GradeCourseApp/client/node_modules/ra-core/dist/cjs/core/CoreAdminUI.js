"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreAdminUI = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var CoreAdminRoutes_1 = require("./CoreAdminRoutes");
var util_1 = require("../util");
var DefaultLayout = function (_a) {
    var children = _a.children;
    return React.createElement(React.Fragment, null, children);
};
var CoreAdminUI = function (props) {
    var _a = props.catchAll, catchAll = _a === void 0 ? Noop : _a, children = props.children, dashboard = props.dashboard, _b = props.disableTelemetry, disableTelemetry = _b === void 0 ? false : _b, _c = props.layout, layout = _c === void 0 ? DefaultLayout : _c, _d = props.loading, loading = _d === void 0 ? Noop : _d, _e = props.loginPage, LoginPage = _e === void 0 ? false : _e, _f = props.authCallbackPage, LoginCallbackPage = _f === void 0 ? false : _f, menu = props.menu, // deprecated, use a custom layout instead
    _g = props.ready, // deprecated, use a custom layout instead
    ready = _g === void 0 ? util_1.Ready : _g, _h = props.title, title = _h === void 0 ? 'React Admin' : _h, _j = props.requireAuth, requireAuth = _j === void 0 ? false : _j;
    (0, react_1.useEffect)(function () {
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
    return (React.createElement(react_router_dom_1.Routes, null,
        LoginPage !== false && LoginPage !== true ? (React.createElement(react_router_dom_1.Route, { path: "/login", element: createOrGetElement(LoginPage) })) : null,
        LoginCallbackPage !== false && LoginCallbackPage !== true ? (React.createElement(react_router_dom_1.Route, { path: "/auth-callback", element: createOrGetElement(LoginCallbackPage) })) : null,
        React.createElement(react_router_dom_1.Route, { path: "/*", element: React.createElement(CoreAdminRoutes_1.CoreAdminRoutes, { catchAll: catchAll, dashboard: dashboard, layout: layout, loading: loading, menu: menu, requireAuth: requireAuth, ready: ready, title: title }, children) })));
};
exports.CoreAdminUI = CoreAdminUI;
var createOrGetElement = function (el) { return ((0, react_1.isValidElement)(el) ? el : (0, react_1.createElement)(el)); };
var Noop = function () { return null; };
//# sourceMappingURL=CoreAdminUI.js.map