import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useNotificationContext } from '../notification';
import { useBasename } from '../routing';
import useAuthProvider, { defaultAuthParams } from './useAuthProvider';
import { removeDoubleSlashes } from '../routing/useCreatePath';
/**
 * Get a callback for calling the authProvider.login() method
 * and redirect to the previous authenticated page (or the home page) on success.
 *
 * @see useAuthProvider
 *
 * @returns {Function} login callback
 *
 * @example
 *
 * import { useLogin } from 'react-admin';
 *
 * const LoginButton = () => {
 *     const [loading, setLoading] = useState(false);
 *     const login = useLogin();
 *     const handleClick = {
 *         setLoading(true);
 *         login({ username: 'john', password: 'p@ssw0rd' }, '/posts')
 *             .then(() => setLoading(false));
 *     }
 *     return <button onClick={handleClick}>Login</button>;
 * }
 */
var useLogin = function () {
    var authProvider = useAuthProvider();
    var location = useLocation();
    var locationState = location.state;
    var navigate = useNavigate();
    var basename = useBasename();
    var resetNotifications = useNotificationContext().resetNotifications;
    var nextPathName = locationState && locationState.nextPathname;
    var nextSearch = locationState && locationState.nextSearch;
    var afterLoginUrl = removeDoubleSlashes("".concat(basename, "/").concat(defaultAuthParams.afterLoginUrl));
    var login = useCallback(function (params, pathName) {
        if (params === void 0) { params = {}; }
        return authProvider.login(params).then(function (ret) {
            resetNotifications();
            if (ret && ret.hasOwnProperty('redirectTo')) {
                if (ret) {
                    navigate(ret.redirectTo);
                }
            }
            else {
                var redirectUrl = pathName
                    ? pathName
                    : nextPathName + nextSearch || afterLoginUrl;
                navigate(redirectUrl);
            }
            return ret;
        });
    }, [
        authProvider,
        navigate,
        nextPathName,
        nextSearch,
        resetNotifications,
        afterLoginUrl,
    ]);
    var loginWithoutProvider = useCallback(function (_, __) {
        resetNotifications();
        navigate(afterLoginUrl);
        return Promise.resolve();
    }, [navigate, resetNotifications, afterLoginUrl]);
    return authProvider ? login : loginWithoutProvider;
};
export default useLogin;
//# sourceMappingURL=useLogin.js.map