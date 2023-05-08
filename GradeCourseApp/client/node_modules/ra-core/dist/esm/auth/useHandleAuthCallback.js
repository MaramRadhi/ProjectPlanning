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
import { useQuery } from 'react-query';
import { useLocation } from 'react-router';
import { useRedirect } from '../routing';
import useAuthProvider from './useAuthProvider';
import useLogout from './useLogout';
/**
 * This hook calls the `authProvider.handleCallback()` method on mount. This is meant to be used in a route called
 * by an external authentication service (e.g. Auth0) after the user has logged in.
 * By default, it redirects to application home page upon success, or to the `redirectTo` location returned by `authProvider. handleCallback`.
 *
 * @returns An object containing { isLoading, data, error, refetch }.
 */
export var useHandleAuthCallback = function (options) {
    var authProvider = useAuthProvider();
    var redirect = useRedirect();
    var logout = useLogout();
    var location = useLocation();
    var locationState = location.state;
    var nextPathName = locationState && locationState.nextPathname;
    var nextSearch = locationState && locationState.nextSearch;
    var defaultRedirectUrl = nextPathName ? nextPathName + nextSearch : '/';
    return useQuery(['auth', 'handleCallback'], function () { return authProvider.handleCallback(); }, __assign({ retry: false, onSuccess: function (data) {
            var _a;
            // AuthProviders relying on a third party services redirect back to the app can't
            // use the location state to store the path on which the user was before the login.
            // So we support a fallback on the localStorage.
            var previousLocation = localStorage.getItem(PreviousLocationStorageKey);
            var redirectTo = (_a = data === null || data === void 0 ? void 0 : data.redirectTo) !== null && _a !== void 0 ? _a : previousLocation;
            if (redirectTo === false) {
                return;
            }
            redirect(redirectTo !== null && redirectTo !== void 0 ? redirectTo : defaultRedirectUrl);
        }, onError: function (err) {
            var _a = (err !== null && err !== void 0 ? err : {}), _b = _a.redirectTo, redirectTo = _b === void 0 ? false : _b, _c = _a.logoutOnFailure, logoutOnFailure = _c === void 0 ? true : _c;
            if (logoutOnFailure) {
                logout({}, redirectTo);
            }
            if (redirectTo === false) {
                return;
            }
            redirect(redirectTo);
        } }, options));
};
/**
 * Key used to store the previous location in localStorage.
 * Used by the useHandleAuthCallback hook to redirect the user to their previous location after a successful login.
 */
export var PreviousLocationStorageKey = '@react-admin/nextPathname';
//# sourceMappingURL=useHandleAuthCallback.js.map