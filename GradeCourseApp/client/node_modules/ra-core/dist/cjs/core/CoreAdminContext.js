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
exports.CoreAdminContext = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_query_1 = require("react-query");
var routing_1 = require("../routing");
var auth_1 = require("../auth");
var dataProvider_1 = require("../dataProvider");
var store_1 = require("../store");
var PreferencesEditorContextProvider_1 = require("../preferences/PreferencesEditorContextProvider");
var i18n_1 = require("../i18n");
var ResourceDefinitionContext_1 = require("./ResourceDefinitionContext");
var notification_1 = require("../notification");
var CoreAdminContext = function (props) {
    var authProvider = props.authProvider, basename = props.basename, dataProvider = props.dataProvider, i18nProvider = props.i18nProvider, store = props.store, children = props.children, history = props.history, queryClient = props.queryClient;
    if (!dataProvider) {
        throw new Error("Missing dataProvider prop.\nReact-admin requires a valid dataProvider function to work.");
    }
    var finalQueryClient = (0, react_1.useMemo)(function () { return queryClient || new react_query_1.QueryClient(); }, [
        queryClient,
    ]);
    var finalAuthProvider = (0, react_1.useMemo)(function () {
        return authProvider instanceof Function
            ? (0, auth_1.convertLegacyAuthProvider)(authProvider)
            : authProvider;
    }, [authProvider]);
    var finalDataProvider = (0, react_1.useMemo)(function () {
        return dataProvider instanceof Function
            ? (0, dataProvider_1.convertLegacyDataProvider)(dataProvider)
            : dataProvider;
    }, [dataProvider]);
    return (React.createElement(auth_1.AuthContext.Provider, { value: finalAuthProvider },
        React.createElement(dataProvider_1.DataProviderContext.Provider, { value: finalDataProvider },
            React.createElement(store_1.StoreContextProvider, { value: store },
                React.createElement(PreferencesEditorContextProvider_1.PreferencesEditorContextProvider, null,
                    React.createElement(react_query_1.QueryClientProvider, { client: finalQueryClient },
                        React.createElement(routing_1.AdminRouter, { history: history, basename: basename },
                            React.createElement(i18n_1.I18nContextProvider, { value: i18nProvider },
                                React.createElement(notification_1.NotificationContextProvider, null,
                                    React.createElement(ResourceDefinitionContext_1.ResourceDefinitionContextProvider, null, children))))))))));
};
exports.CoreAdminContext = CoreAdminContext;
exports.CoreAdminContext.defaultProps = {
    dataProvider: dataProvider_1.defaultDataProvider,
    store: (0, store_1.memoryStore)(),
};
//# sourceMappingURL=CoreAdminContext.js.map