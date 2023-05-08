import * as React from 'react';
import { useMemo } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { AdminRouter } from '../routing';
import { AuthContext, convertLegacyAuthProvider } from '../auth';
import { DataProviderContext, convertLegacyDataProvider, defaultDataProvider, } from '../dataProvider';
import { StoreContextProvider, memoryStore } from '../store';
import { PreferencesEditorContextProvider } from '../preferences/PreferencesEditorContextProvider';
import { I18nContextProvider } from '../i18n';
import { ResourceDefinitionContextProvider } from './ResourceDefinitionContext';
import { NotificationContextProvider } from '../notification';
export var CoreAdminContext = function (props) {
    var authProvider = props.authProvider, basename = props.basename, dataProvider = props.dataProvider, i18nProvider = props.i18nProvider, store = props.store, children = props.children, history = props.history, queryClient = props.queryClient;
    if (!dataProvider) {
        throw new Error("Missing dataProvider prop.\nReact-admin requires a valid dataProvider function to work.");
    }
    var finalQueryClient = useMemo(function () { return queryClient || new QueryClient(); }, [
        queryClient,
    ]);
    var finalAuthProvider = useMemo(function () {
        return authProvider instanceof Function
            ? convertLegacyAuthProvider(authProvider)
            : authProvider;
    }, [authProvider]);
    var finalDataProvider = useMemo(function () {
        return dataProvider instanceof Function
            ? convertLegacyDataProvider(dataProvider)
            : dataProvider;
    }, [dataProvider]);
    return (React.createElement(AuthContext.Provider, { value: finalAuthProvider },
        React.createElement(DataProviderContext.Provider, { value: finalDataProvider },
            React.createElement(StoreContextProvider, { value: store },
                React.createElement(PreferencesEditorContextProvider, null,
                    React.createElement(QueryClientProvider, { client: finalQueryClient },
                        React.createElement(AdminRouter, { history: history, basename: basename },
                            React.createElement(I18nContextProvider, { value: i18nProvider },
                                React.createElement(NotificationContextProvider, null,
                                    React.createElement(ResourceDefinitionContextProvider, null, children))))))))));
};
CoreAdminContext.defaultProps = {
    dataProvider: defaultDataProvider,
    store: memoryStore(),
};
//# sourceMappingURL=CoreAdminContext.js.map