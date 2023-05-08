import * as React from 'react';
import { useState, useEffect, Children } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { WithPermissions, useCheckAuth } from '../auth';
import { useTimeout } from '../util';
import { useScrollToTop, useCreatePath } from '../routing';
import { useConfigureAdminRouterFromChildren } from './useConfigureAdminRouterFromChildren';
export var CoreAdminRoutes = function (props) {
    var oneSecondHasPassed = useTimeout(1000);
    useScrollToTop();
    var createPath = useCreatePath();
    var _a = useConfigureAdminRouterFromChildren(props.children), customRoutesWithLayout = _a.customRoutesWithLayout, customRoutesWithoutLayout = _a.customRoutesWithoutLayout, status = _a.status, resources = _a.resources;
    var Layout = props.layout, CatchAll = props.catchAll, dashboard = props.dashboard, LoadingPage = props.loading, menu = props.menu, requireAuth = props.requireAuth, Ready = props.ready, title = props.title;
    var _b = useState(!requireAuth), canRender = _b[0], setCanRender = _b[1];
    var checkAuth = useCheckAuth();
    useEffect(function () {
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
        return (React.createElement(Routes, null,
            customRoutesWithoutLayout,
            oneSecondHasPassed ? (React.createElement(Route, { path: "*", element: React.createElement(LoadingPage, null) })) : (React.createElement(Route, { path: "*", element: null }))));
    }
    return (React.createElement(Routes, null,
        customRoutesWithoutLayout,
        React.createElement(Route, { path: "/*", element: React.createElement("div", null,
                React.createElement(Layout, { dashboard: dashboard, menu: menu, title: title },
                    React.createElement(Routes, null,
                        customRoutesWithLayout,
                        Children.map(resources, function (resource) { return (React.createElement(Route, { key: resource.props.name, path: "".concat(resource.props.name, "/*"), element: resource })); }),
                        React.createElement(Route, { path: "/", element: dashboard ? (React.createElement(WithPermissions, { authParams: defaultAuthParams, component: dashboard })) : resources.length > 0 ? (React.createElement(Navigate, { to: createPath({
                                    resource: resources[0].props.name,
                                    type: 'list',
                                }) })) : null }),
                        React.createElement(Route, { path: "*", element: React.createElement(CatchAll, { title: title }) })))) })));
};
CoreAdminRoutes.defaultProps = {
    customRoutes: [],
};
var defaultAuthParams = { params: { route: 'dashboard' } };
//# sourceMappingURL=CoreAdminRoutes.js.map