import { __assign } from '../_virtual/_tslib.js';
import { ActionType } from './actions.js';

/**
 * Auth Reducer
 * Used in auth state
 * @param state
 * @param action
 */
function authReducer(state, action) {
    switch (action.type) {
        case ActionType.SignIn:
            return __assign(__assign({}, state), { auth: action.payload.auth, refresh: action.payload.refresh, userState: action.payload.userState, isSignIn: true });
        case ActionType.SignOut:
            return __assign(__assign({}, state), { auth: null, refresh: null, userState: null, isSignIn: false });
        case ActionType.RefreshToken:
            if (state.isSignIn && state.auth && state.refresh) {
                return __assign(__assign({}, state), { auth: {
                        token: action.payload.newAuthToken ?
                            action.payload.newAuthToken : state.auth.token,
                        type: state.auth.type,
                        expiresAt: action.payload.newAuthTokenExpireIn ?
                            new Date(new Date().getTime() +
                                action.payload.newAuthTokenExpireIn * 60 * 1000) :
                            state.auth.expiresAt,
                    }, refresh: {
                        token: action.payload.newRefreshToken ?
                            action.payload.newRefreshToken : state.refresh.token,
                        expiresAt: action.payload.newRefreshTokenExpiresIn ?
                            new Date(new Date().getTime() +
                                action.payload.newRefreshTokenExpiresIn * 60 * 1000) :
                            state.refresh.expiresAt,
                    }, userState: action.payload.newAuthUserState ?
                        action.payload.newAuthUserState : state.userState });
            }
            else {
                return state;
            }
    }
}
// Helper functions
/**
 * used to make sign in
 * @param signInParams
 */
function doSignIn(signInParams) {
    return ({
        type: ActionType.SignIn,
        payload: signInParams,
    });
}
/**
 * used to refresh the Token
 * @param refreshTokenParam
 */
function doRefresh(refreshTokenParam) {
    return ({
        type: ActionType.RefreshToken,
        payload: refreshTokenParam,
    });
}
/**
 * Used to make sign out
 */
function doSignOut() {
    return ({
        type: ActionType.SignOut,
    });
}

export { authReducer, doRefresh, doSignIn, doSignOut };
//# sourceMappingURL=reducers.js.map
