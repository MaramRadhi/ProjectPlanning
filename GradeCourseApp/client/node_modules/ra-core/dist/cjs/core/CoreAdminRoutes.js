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
exports.CoreAdminRoutes = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("../auth");
var util_1 = require("../util");
var routing_1 = require("../routing");
var useConfigureAdminRouterFromChildren_1 = require("./useConfigureAdminRouterFromChildren");
var CoreAdminRoutes = function (props) {
    var oneSecondHasPassed = (0, util_1.useTimeout)(1000);
    (0, routing_1.useScrollToTop)();
    var createPath = (0, routing_1.useCreatePath)();
    var _a = (0, useConfigureAdminRouterFromChildren_1.useConfigureAdminRouterFromChildren)(props.children), customRoutesWithLayout = _a.customRoutesWithLayout, customRoutesWithoutLayout = _a.customRoutesWithoutLayout, status = _a.status, resources = _a.resources;
    var Layout = props.layout, CatchAll = props.catchAll, dashboard = props.dashboard, LoadingPage = props.loading, menu = props.menu, requireAuth = props.requireAuth, Ready = props.ready, title = props.title;
    var _b = (0, react_1.useState)(!requireAuth), canRender = _b[0], setCanRender = _b[1];
    var checkAuth = (0, auth_1.useCheckAuth)();
    (0, react_1.useEffect)(function () {
        if (requireAuth) {
            checkAuth()
                .then(function () {
                setCanRender(true);
            })
                .catch(function () { });
        }
    }, [checkAuth, requireAuth]);
    if (status === 'empty') {
        return React.createElement(Ready, null);
    }
    if (status === 'loading' || !canRender) {
        return (React.createElement(react_router_dom_1.Routes, null,
            customRoutesWithoutLayout,
            oneSecondHasPassed ? (React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(LoadingPage, null) })) : (React.createElement(react_router_dom_1.Route, { path: "*", element: null }))));
    }
    return (React.createElement(react_router_dom_1.Routes, null,
        customRoutesWithoutLayout,
        React.createElement(react_router_dom_1.Route, { path: "/*", element: React.createElement("div", null,
                React.createElement(Layout, { dashboard: dashboard, menu: menu, title: title },
                    React.createElement(react_router_dom_1.Routes, null,
                        customRoutesWithLayout,
                        react_1.Children.map(resources, function (resource) { return (React.createElement(react_router_dom_1.Route, { key: resource.props.name, path: "".concat(resource.props.name, "/*"), element: resource })); }),
                        React.createElement(react_router_dom_1.Route, { path: "/", element: dashboard ? (React.createElement(auth_1.WithPermissions, { authParams: defaultAuthParams, component: dashboard })) : resources.length > 0 ? (React.createElement(react_router_dom_1.Navigate, { to: createPath({
                                    resource: resources[0].props.name,
                                    type: 'list',
                                }) })) : null }),
                        React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(CatchAll, { title: title }) })))) })));
};
exports.CoreAdminRoutes = CoreAdminRoutes;
exports.CoreAdminRoutes.defaultProps = {
    customRoutes: [],
};
var defaultAuthParams = { params: { route: 'dashboard' } };
//# sourceMappingURL=CoreAdminRoutes.js.map