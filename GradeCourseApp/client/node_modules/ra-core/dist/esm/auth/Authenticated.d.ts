import { ReactNode } from 'react';
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
export declare const Authenticated: (props: AuthenticatedProps) => JSX.Element;
export interface AuthenticatedProps {
    children: ReactNode;
    authParams?: object;
    requireAuth?: boolean;
}
//# sourceMappingURL=Authenticated.d.ts.map