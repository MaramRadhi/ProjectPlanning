"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_query_1 = require("react-query");
var useAuthProvider_1 = __importStar(require("./useAuthProvider"));
var useLogout_1 = __importDefault(require("./useLogout"));
var routing_1 = require("../routing");
var notification_1 = require("../notification");
var emptyParams = {};
/**
 * Hook for getting the authentication status
 *
 * Calls the authProvider.checkAuth() method asynchronously.
 *
 * The return value updates according to the authProvider request state:
 *
 * - isLoading: true just after mount, while the authProvider is being called. false once the authProvider has answered.
 * - authenticated: true while loading. then true or false depending on the authProvider response.
 *
 * To avoid rendering a component and force waiting for the authProvider response, use the useAuthState() hook
 * instead of the useAuthenticated() hook.
 *
 * You can render different content depending on the authenticated status.
 *
 * @see useAuthenticated()
 *
 * @param {Object} params Any params you want to pass to the authProvider
 *
 * @param {Boolean} logoutOnFailure: Optional. Whether the user should be logged out if the authProvider fails to authenticate them. False by default.
 *
 * @returns The current auth check state. Destructure as { authenticated, error, isLoading }.
 *
 * @example
 * import { useAuthState, Loading } from 'react-admin';
 *
 * const MyPage = () => {
 *     const { isLoading, authenticated } = useAuthState();
 *     if (isLoading) {
 *         return <Loading />;
 *     }
 *     if (authenticated) {
 *        return <AuthenticatedContent />;
 *     }
 *     return <AnonymousContent />;
 * };
 */
var useAuthState = function (params, logoutOnFailure, queryOptions) {
    if (params === void 0) { params = emptyParams; }
    if (logoutOnFailure === void 0) { logoutOnFailure = false; }
    var authProvider = (0, useAuthProvider_1.default)();
    var logout = (0, useLogout_1.default)();
    var basename = (0, routing_1.useBasename)();
    var notify = (0, notification_1.useNotify)();
    var result = (0, react_query_1.useQuery)(['auth', 'checkAuth', params], function () {
        // The authProvider is optional in react-admin
        return authProvider === null || authProvider === void 0 ? void 0 : authProvider.checkAuth(params).then(function () { return true; });
    }, __assign({ onError: function (error) {
            var loginUrl = (0, routing_1.removeDoubleSlashes)("".concat(basename, "/").concat(useAuthProvider_1.defaultAuthParams.loginUrl));
            if (logoutOnFailure) {
                logout({}, error && error.redirectTo != null
                    ? error.redirectTo
                    : loginUrl);
                var shouldSkipNotify = error && error.message === false;
                !shouldSkipNotify &&
                    notify(getErrorMessage(error, 'ra.auth.auth_check_error'), { type: 'error' });
            }
        }, retry: false }, queryOptions));
    return (0, react_1.useMemo)(function () {
        var _a;
        return {
            // If the data is undefined and the query isn't loading anymore, it means the query failed.
            // In that case, we set authenticated to false unless there's no authProvider.
            authenticated: ((_a = result.data) !== null && _a !== void 0 ? _a : result.isLoading) ? true : authProvider == null,
            isLoading: result.isLoading,
            error: result.error,
        };
    }, [authProvider, result]);
};
exports.default = useAuthState;
var getErrorMessage = function (error, defaultMessage) {
    return typeof error === 'string'
        ? error
        : typeof error === 'undefined' || !error.message
            ? defaultMessage
            : error.message;
};
//# sourceMappingURL=useAuthState.js.map