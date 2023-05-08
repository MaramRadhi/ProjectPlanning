import { __assign } from '../_virtual/_tslib.js';
import * as React from 'react';
import { AuthContextConsumer } from '../AuthContext.js';
import { doSignIn } from '../utils/reducers.js';
import { AuthKitError } from '../errors.js';

/**
 * @public
 * @function
 * @name withSignIn
 * @description Inject sign in functionality inside the Component's Prop
 * @param Component
 */
function withSignIn(Component) {
    return function (props) {
        return (React.createElement(AuthContextConsumer, null, function (c) {
            if (c === null) {
                throw new AuthKitError('Auth Provider is missing. ' +
                    'Please add the AuthProvider before Router');
            }
            var signIn = function (signInConfig) {
                var token = signInConfig.token, tokenType = signInConfig.tokenType, authState = signInConfig.authState, expiresIn = signInConfig.expiresIn, refreshToken = signInConfig.refreshToken, refreshTokenExpireIn = signInConfig.refreshTokenExpireIn;
                var expTime = new Date(new Date().getTime() + expiresIn * 60 * 1000);
                if (c.authState.isUsingRefreshToken) {
                    // Using the power of refresh token
                    if (!!refreshToken && !!refreshTokenExpireIn) {
                        // refresh token params are provided
                        // sign in with refresh token
                        var refreshTokenExpireAt = new Date(new Date().getTime() +
                            refreshTokenExpireIn * 60 * 1000);
                        c.dispatch(doSignIn({
                            auth: {
                                token: token,
                                type: tokenType,
                                expiresAt: expTime,
                            },
                            userState: authState ? authState : null,
                            refresh: {
                                token: refreshToken,
                                expiresAt: refreshTokenExpireAt,
                            },
                        }));
                        return true;
                    }
                    else {
                        // refresh token params are not provided
                        // throw an error
                        throw new AuthKitError('Make sure you given "refreshToken"' +
                            ' and "refreshTokenExpireIn" parameter');
                    }
                }
                else {
                    // Not using refresh token
                    if (!!refreshToken && !!refreshTokenExpireIn) {
                        // params are not expected but provided
                        // throw an error
                        throw new AuthKitError('The app doesn\'t implement ' +
                            '\'refreshToken\' feature.\n So you have to' +
                            ' implement refresh token feature' +
                            ' from \'AuthProvider\' before using it.');
                    }
                    else {
                        // sign in without the refresh token
                        c.dispatch(doSignIn({
                            auth: {
                                token: token,
                                type: tokenType,
                                expiresAt: expTime,
                            },
                            userState: authState ? authState : null,
                            refresh: null,
                        }));
                        return true;
                    }
                }
            };
            return React.createElement(Component, __assign({}, props, { signIn: signIn }));
        }));
    };
}

export { withSignIn as default };
//# sourceMappingURL=withSignIn.js.map
