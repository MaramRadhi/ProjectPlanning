import { UseQueryOptions } from 'react-query';
import { AuthProvider } from '../types';
/**
 * This hook calls the `authProvider.handleCallback()` method on mount. This is meant to be used in a route called
 * by an external authentication service (e.g. Auth0) after the user has logged in.
 * By default, it redirects to application home page upon success, or to the `redirectTo` location returned by `authProvider. handleCallback`.
 *
 * @returns An object containing { isLoading, data, error, refetch }.
 */
export declare const useHandleAuthCallback: (options?: UseQueryOptions<ReturnType<AuthProvider['handleCallback']>>) => import("react-query").UseQueryResult<Promise<any>, unknown>;
/**
 * Key used to store the previous location in localStorage.
 * Used by the useHandleAuthCallback hook to redirect the user to their previous location after a successful login.
 */
export declare const PreviousLocationStorageKey = "@react-admin/nextPathname";
//# sourceMappingURL=useHandleAuthCallback.d.ts.map