import * as React from 'react';
import { AuthProviderProps } from './types';
/**
 * AuthProvider - The Authentication Context Provider
 *
 * @param children
 * @param authStorageName
 * @param cookieDomain
 * @param cookieSecure
 *
 * @return Functional Component
 */
declare const AuthProvider: React.FunctionComponent<AuthProviderProps>;
export default AuthProvider;
