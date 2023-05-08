import { useCallback, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import { useResetStore } from '../store';
import { useBasename } from '../routing';
import { removeDoubleSlashes } from '../routing/useCreatePath';
/**
 * Get a callback for calling the authProvider.logout() method,
 * redirect to the login page, and clear the store.
 *
 * @see useAuthProvider
 *
 * @returns {Function} logout callback
 *
 * @example
 *
 * import { useLogout } from 'react-admin';
 *
 * const LogoutButton = () => {
 *     const logout = useLogout();
 *     const handleClick = () => logout();
 *     return <button onClick={handleClick}>Logout</button>;
 * }
 */
var useLogout = function () {
    var authProvider = useAuthProvider();
    var queryClient = useQueryClient();
    var resetStore = useResetStore();
    var navigate = useNavigate();
    // useNavigate forces rerenders on every navigation, even if we don't use the result
    // see https://github.com/remix-run/react-router/issues/7634
    // so we use a ref to bail out of rerenders when we don't need to
    var navigateRef = useRef(navigate);
    var location = useLocation();
    var locationRef = useRef(location);
    var basename = useBasename();
    var loginUrl = removeDoubleSlashes("".concat(basename, "/").concat(defaultAuthParams.loginUrl));
    /*
     * We need the current location to pass in the router state
     * so that the login hook knows where to redirect to as next route after login.
     *
     * But if we used the location from useLocation as a dependency of the logout
     * function, it would be rebuilt each time the user changes location.
     * Consequently, that would force a rerender of all components using this hook
     * upon navigation (CoreAdminRouter for example).
     *
     * To avoid that, we store the location in a ref.
     */
    useEffect(function () {
        locationRef.current = location;
        navigateRef.current = navigate;
    }, [location, navigate]);
    var logout = useCallback(function (params, redirectTo, redirectToCurrentLocationAfterLogin) {
        if (params === void 0) { params = {}; }
        if (redirectTo === void 0) { redirectTo = loginUrl; }
        if (redirectToCurrentLocationAfterLogin === void 0) { redirectToCurrentLocationAfterLogin = true; }
        return authProvider.logout(params).then(function (redirectToFromProvider) {
            if (redirectToFromProvider === false || redirectTo === false) {
                resetStore();
                queryClient.clear();
                // do not redirect
                return;
            }
            var finalRedirectTo = redirectToFromProvider || redirectTo;
            if (finalRedirectTo === null || finalRedirectTo === void 0 ? void 0 : finalRedirectTo.startsWith('http')) {
                // absolute link (e.g. https://my.oidc.server/login)
                resetStore();
                queryClient.clear();
                window.location.href = finalRedirectTo;
                return finalRedirectTo;
            }
            // redirectTo is an internal location that may contain a query string, e.g. '/login?foo=bar'
            // we must split it to pass a structured location to navigate()
            var redirectToParts = finalRedirectTo.split('?');
            var newLocation = {
                pathname: redirectToParts[0],
            };
            var newLocationOptions = {};
            if (redirectToCurrentLocationAfterLogin &&
                locationRef.current &&
                locationRef.current.pathname) {
                newLocationOptions = {
                    state: {
                        nextPathname: locationRef.current.pathname,
                        nextSearch: locationRef.current.search,
                    },
                };
            }
            if (redirectToParts[1]) {
                newLocation.search = redirectToParts[1];
            }
            navigateRef.current(newLocation, newLocationOptions);
            resetStore();
            queryClient.clear();
            return redirectToFromProvider;
        });
    }, [authProvider, resetStore, loginUrl, queryClient]);
    var logoutWithoutProvider = useCallback(function (_) {
        navigate({
            pathname: loginUrl,
        }, {
            state: {
                nextPathname: location && location.pathname,
            },
        });
        resetStore();
        queryClient.clear();
        return Promise.resolve();
    }, [resetStore, location, navigate, loginUrl, queryClient]);
    return authProvider ? logout : logoutWithoutProvider;
};
export default useLogout;
//# sourceMappingURL=useLogout.js.map