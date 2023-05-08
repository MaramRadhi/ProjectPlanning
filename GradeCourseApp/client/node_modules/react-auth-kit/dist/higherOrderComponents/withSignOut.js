import { __assign } from '../_virtual/_tslib.js';
import * as React from 'react';
import { AuthContextConsumer } from '../AuthContext.js';
import { doSignOut } from '../utils/reducers.js';
import { AuthKitError } from '../errors.js';

/**
 * @public
 * @function
 * @name withSignOut
 * @description Inject sign Out functionality inside the Component's Prop
 * @param Component
 */
function withSignOut(Component) {
    return function (props) {
        return (React.createElement(AuthContextConsumer, null, function (c) {
            if (c === null) {
                throw new AuthKitError('Auth Provider is missing. ' +
                    'Please add the AuthProvider before Router');
            }
            var signOut = function () {
                try {
                    if (c) {
                        c.dispatch(doSignOut());
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                catch (e) {
                    return false;
                }
            };
            return React.createElement(Component, __assign({}, props, { signOut: signOut }));
        }));
    };
}

export { withSignOut as default };
//# sourceMappingURL=withSignOut.js.map
