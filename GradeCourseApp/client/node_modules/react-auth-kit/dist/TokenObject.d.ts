import { AuthKitStateInterface, AuthStateUserObject } from './types';
/**
 * @class TokenObject
 *
 * Stores and retrieve Token
 */
declare class TokenObject {
    private readonly authStorageName;
    private readonly stateStorageName;
    private readonly authTimeStorageName;
    private readonly cookieDomain?;
    private readonly cookieSecure?;
    private readonly authStorageTypeName;
    private readonly authStorageType;
    private readonly refreshTokenName;
    private readonly refreshTokenTimeName;
    private readonly isUsingRefreshToken;
    /**
     * TokenObject - Stores, retrieve and process tokens
     *
     * @param authStorageName - Name of the Token,
     * which will store the Authorization Token
     *
     * @param authStorageType - Type of the auth Storage, `
     * cookie` or `localstorage`
     *
     * @param refreshTokenName - Name of the refresh Token,
     * if `undefined`, then no refreshToken feature is using
     *
     * @param cookieDomain - domain name for the Cookies,
     * only applicable when `authStorageType` is `cookie`
     *
     * @param cookieSecure - cookies are secure or not,
     * only applicable when `authStorageType` is `cookie`
     *
     * @constructor
     */
    constructor(authStorageName: string, authStorageType: 'cookie' | 'localstorage', refreshTokenName: string | null, cookieDomain?: string, cookieSecure?: boolean);
    /**
     * Get the Initial Tokens and states
     * Called externally in `AuthProvider`
     * when the Application is bootstrapping or refreshed
     *
     * If the `authStorageType` is `cookie`,
     * get information from `initialCookieToken()` function
     *
     * If the `authTokenType` is `localStorage`
     * get information from `initialLSToken()` function
     *
     * @returns AuthKitStateInterface
     */
    initialToken(): AuthKitStateInterface;
    /**
     * Get the Initial Token from Cookies
     * Called internally by `initialToken` method
     *
     * If the `authStorageType` is `cookie`
     * then this function is called
     * And returns the Tokens and states Stored in all 4 cookies
     *
     * @returns AuthKitStateInterface
     */
    initialCookieToken_(): AuthKitStateInterface;
    /**
     * Get the Initial Token from LocalStorage
     * Called internally by `initialToken` method
     *
     * If the `authStorageType` is `localstorage`
     * then this function is called
     * And returns the Tokens and states Stored in all 4 cookies
     *
     * @returns AuthKitStateInterface
     */
    initialLSToken_(): AuthKitStateInterface;
    /**
     * Check if the Initial token is valid or not,
     * Called Internally by `initialCookieToken_()` and `initialLSToken_()`
     *
     * If the tokens are valid,
     * then it response TokenObject with auth Information
     * Else it response TokenObject with all null
     *
     * @param authToken
     * @param authTokenType
     * @param authTokenTime
     * @param stateCookie
     * @param refreshToken
     * @param refreshTokenTime
     *
     * @returns AuthKitStateInterface
     *
     */
    checkTokenExist(authToken: string | null | undefined, authTokenType: string | null | undefined, authTokenTime: string | null | undefined, stateCookie: string | null | undefined, refreshToken: string | null | undefined, refreshTokenTime: string | null | undefined): AuthKitStateInterface;
    /**
     * Sync Auth Tokens on time of login and logout
     *
     * Set the New Cookies or new Localstorage on login
     * Or Remove the old Cookies or old Localstorage on logout
     *
     * @param authState
     */
    syncTokens(authState: AuthKitStateInterface): void;
    /**
     * Set Cookies or localstorage on login
     *
     * @param authToken
     * @param authTokenType
     * @param refreshToken
     * @param refreshTokenExpiresAt
     * @param expiresAt
     * @param authState
     */
    setToken(authToken: string, authTokenType: string, refreshToken: string | null, refreshTokenExpiresAt: Date | null, expiresAt: Date, authState: AuthStateUserObject | null): void;
    /**
     *
     * Set Cookie on time of Login
     *
     * @param authToken
     * @param authTokenType
     * @param refreshToken
     * @param expiresAt
     * @param refreshTokenExpiresAt
     * @param authState
     */
    setCookieToken_(authToken: string, authTokenType: string, refreshToken: string | null, expiresAt: Date, refreshTokenExpiresAt: Date | null, authState: AuthStateUserObject | null): void;
    /**
     * Set LocalStorage at the time of Login
     *
     * @param authToken
     * @param authTokenType
     * @param refreshToken
     * @param expiresAt
     * @param refreshTokenExpiresAt
     * @param authState
     */
    setLSToken_(authToken: string, authTokenType: string, refreshToken: string | null, expiresAt: Date, refreshTokenExpiresAt: Date | null, authState: AuthStateUserObject | null): void;
    /**
     * Remove Tokens on time of Logout
     */
    removeToken(): void;
    /**
     * Remove Token from Cookies
     */
    removeCookieToken_(): void;
    /**
     * Remove Token from LocalStorage
     */
    removeLSToken_(): void;
}
export default TokenObject;
