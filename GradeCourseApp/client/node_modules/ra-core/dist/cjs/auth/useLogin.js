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
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var notification_1 = require("../notification");
var routing_1 = require("../routing");
var useAuthProvider_1 = __importStar(require("./useAuthProvider"));
var useCreatePath_1 = require("../routing/useCreatePath");
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
    var authProvider = (0, useAuthProvider_1.default)();
    var location = (0, react_router_dom_1.useLocation)();
    var locationState = location.state;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var basename = (0, routing_1.useBasename)();
    var resetNotifications = (0, notification_1.useNotificationContext)().resetNotifications;
    var nextPathName = locationState && locationState.nextPathname;
    var nextSearch = locationState && locationState.nextSearch;
    var afterLoginUrl = (0, useCreatePath_1.removeDoubleSlashes)("".concat(basename, "/").concat(useAuthProvider_1.defaultAuthParams.afterLoginUrl));
    var login = (0, react_1.useCallback)(function (params, pathName) {
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
    var loginWithoutProvider = (0, react_1.useCallback)(function (_, __) {
        resetNotifications();
        navigate(afterLoginUrl);
        return Promise.resolve();
    }, [navigate, resetNotifications, afterLoginUrl]);
    return authProvider ? login : loginWithoutProvider;
};
exports.default = useLogin;
//# sourceMappingURL=useLogin.js.map