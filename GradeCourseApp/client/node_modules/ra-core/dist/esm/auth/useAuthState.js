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
import { useMemo } from 'react';
import { useQuery } from 'react-query';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import useLogout from './useLogout';
import { removeDoubleSlashes, useBasename } from '../routing';
import { useNotify } from '../notification';
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
    var authProvider = useAuthProvider();
    var logout = useLogout();
    var basename = useBasename();
    var notify = useNotify();
    var result = useQuery(['auth', 'checkAuth', params], function () {
        // The authProvider is optional in react-admin
        return authProvider === null || authProvider === void 0 ? void 0 : authProvider.checkAuth(params).then(function () { return true; });
    }, __assign({ onError: function (error) {
            var loginUrl = removeDoubleSlashes("".concat(basename, "/").concat(defaultAuthParams.loginUrl));
            if (logoutOnFailure) {
                logout({}, error && error.redirectTo != null
                    ? error.redirectTo
                    : loginUrl);
                var shouldSkipNotify = error && error.message === false;
                !shouldSkipNotify &&
                    notify(getErrorMessage(error, 'ra.auth.auth_check_error'), { type: 'error' });
            }
        }, retry: false }, queryOptions));
    return useMemo(function () {
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
export default useAuthState;
var getErrorMessage = function (error, defaultMessage) {
    return typeof error === 'string'
        ? error
        : typeof error === 'undefined' || !error.message
            ? defaultMessage
            : error.message;
};
//# sourceMappingURL=useAuthState.js.map