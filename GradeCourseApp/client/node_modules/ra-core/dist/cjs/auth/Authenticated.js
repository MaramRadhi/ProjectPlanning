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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authenticated = void 0;
var React = __importStar(require("react"));
var useAuthState_1 = __importDefault(require("./useAuthState"));
/**
 * Restrict access to children to authenticated users.
 * Redirects anonymous users to the login page.
 *
 * Use it to decorate your custom page components to require
 * authentication.
 *
 * By default this component is optimistic: it does not block
 * rendering children when checking authentication, but this mode
 * can be turned off by setting `requireAuth` to true.
 *
 * You can set additional `authParams` at will if your authProvider
 * requires it.
 *
 * @see useAuthState
 *
 * @example
 *     import { Admin, CustomRoutes, Authenticated } from 'react-admin';
 *
 *     const customRoutes = [
 *         <Route
 *             path="/foo"
 *             element={
 *                 <Authenticated authParams={{ foo: 'bar' }}>
 *                     <Foo />
 *                 </Authenticated>
 *             }
 *         />
 *     ];
 *     const App = () => (
 *         <Admin>
 *             <CustomRoutes>{customRoutes}</CustomRoutes>
 *         </Admin>
 *     );
 */
var Authenticated = function (props) {
    var authParams = props.authParams, children = props.children, _a = props.requireAuth, requireAuth = _a === void 0 ? false : _a;
    // this hook will log out if the authProvider doesn't validate that the user is authenticated
    var _b = (0, useAuthState_1.default)(authParams, true), isLoading = _b.isLoading, authenticated = _b.authenticated;
    // in pessimistic mode don't render the children until authenticated
    if ((requireAuth && isLoading) || !authenticated) {
        return null;
    }
    // render the children in optimistic rendering or after authenticated
    return React.createElement(React.Fragment, null, children);
};
exports.Authenticated = Authenticated;
//# sourceMappingURL=Authenticated.js.map