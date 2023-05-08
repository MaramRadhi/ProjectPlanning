import { __assign } from '../_virtual/_tslib.js';
import * as React from 'react';
import { AuthContextConsumer } from '../AuthContext.js';
import { AuthKitError } from '../errors.js';
import { isAuthenticated } from '../utils/utils.js';

/**
 * @function
 * @name withAuthUser
 * @description Inject Authenticated User's state inside the Component's Prop
 * @param Component
 */
function withAuthUser(Component) {
    return function (props) {
        return (React.createElement(AuthContextConsumer, null, function (context) {
            if (context === null) {
                throw new AuthKitError('Auth Provider is missing. ' +
                    'Please add the AuthProvider before Router');
            }
            if (context.authState.auth && isAuthenticated(context.authState)) {
                return (React.createElement(Component, __assign({}, props, { authState: context.authState.userState })));
            }
            else {
                return (React.createElement(Component, __assign({}, props, { authState: null })));
            }
        }));
    };
}

export { withAuthUser as default };
//# sourceMappingURL=withAuthUser.js.map
