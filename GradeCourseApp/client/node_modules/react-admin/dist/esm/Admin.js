import * as React from 'react';
import { localStorageStore } from 'ra-core';
import { AdminUI, AdminContext } from 'ra-ui-materialui';
import { defaultI18nProvider } from './defaultI18nProvider';
/**
 * Main admin component, entry point to the application.
 *
 * Initializes the various contexts (auth, data, i18n, router)
 * and defines the main routes.
 *
 * Expects a list of resources as children, or a function returning a list of
 * resources based on the permissions.
 *
 * @example
 *
 * // static list of resources
 *
 * import {
 *     Admin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from 'react-admin';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 *
 * // dynamic list of resources based on permissions
 *
 * import {
 *     Admin,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from 'react-admin';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         {permissions => [
 *             <Resource name="posts" key="posts" list={ListGuesser} />,
 *         ]}
 *     </Admin>
 * );
 *
 * // If you have to build a dynamic list of resources using a side effect,
 * // you can't use <Admin>. But as it delegates to sub components,
 * // it's relatively straightforward to replace it:
 *
 * import * as React from 'react';
import { useEffect, useState } from 'react';
 * import {
 *     AdminContext,
 *     AdminUI,
 *     defaultI18nProvider,
 *     localStorageStore,
 *     Resource,
 *     ListGuesser,
 *     useDataProvider,
 * } from 'react-admin';
 *
 * const store = localStorageStore();
 *
 * const App = () => (
 *     <AdminContext dataProvider={myDataProvider} i18nProvider={defaultI18nProvider} store={store}>
 *         <Resources />
 *     </AdminContext>
 * );
 *
 * const Resources = () => {
 *     const [resources, setResources] = useState([]);
 *     const dataProvider = useDataProvider();
 *     useEffect(() => {
 *         dataProvider.introspect().then(r => setResources(r));
 *     }, []);
 *
 *     return (
 *         <AdminUI>
 *             {resources.map(resource => (
 *                 <Resource name={resource.name} key={resource.key} list={ListGuesser} />
 *             ))}
 *         </AdminUI>
 *     );
 * };
 */
export var Admin = function (props) {
    var authProvider = props.authProvider, basename = props.basename, catchAll = props.catchAll, children = props.children, dashboard = props.dashboard, dataProvider = props.dataProvider, disableTelemetry = props.disableTelemetry, history = props.history, i18nProvider = props.i18nProvider, layout = props.layout, loading = props.loading, loginPage = props.loginPage, authCallbackPage = props.authCallbackPage, menu = props.menu, // deprecated, use a custom layout instead
    notification = props.notification, queryClient = props.queryClient, requireAuth = props.requireAuth, store = props.store, ready = props.ready, theme = props.theme, _a = props.title, title = _a === void 0 ? 'React Admin' : _a;
    if (loginPage === true && process.env.NODE_ENV !== 'production') {
        console.warn('You passed true to the loginPage prop. You must either pass false to disable it or a component class to customize it');
    }
    return (React.createElement(AdminContext, { authProvider: authProvider, basename: basename, dataProvider: dataProvider, i18nProvider: i18nProvider, store: store, history: history, queryClient: queryClient, theme: theme },
        React.createElement(AdminUI, { layout: layout, dashboard: dashboard, disableTelemetry: disableTelemetry, menu: menu, catchAll: catchAll, title: title, loading: loading, loginPage: loginPage, authCallbackPage: authCallbackPage, notification: notification, requireAuth: requireAuth, ready: ready }, children)));
};
Admin.defaultProps = {
    i18nProvider: defaultI18nProvider,
    store: localStorageStore(),
};
export default Admin;
//# sourceMappingURL=Admin.js.map