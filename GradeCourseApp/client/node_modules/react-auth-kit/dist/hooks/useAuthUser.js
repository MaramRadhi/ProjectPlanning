import * as React from 'react';
import AuthContext from '../AuthContext.js';
import { AuthKitError } from '../errors.js';
import { isAuthenticated } from '../utils/utils.js';

/**
 * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 * @fileoverview Authentication User <hook>
 * @copyright Arkadip Bhattacharya 2020
 *
 * Copyright 2020 Arkadip Bhattacharya
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Auth State Hook
 *
 * @returns - Auth State Function
 */
function useAuthUser() {
    var context = React.useContext(AuthContext);
    if (context === null) {
        throw new AuthKitError('Auth Provider is missing. ' +
            'Please add the AuthProvider before Router');
    }
    return function () {
        if (isAuthenticated(context.authState)) {
            return context.authState.userState;
        }
        else {
            // TODO: Need to signout and redirect to login
            return null;
        }
    };
}

export { useAuthUser as default };
//# sourceMappingURL=useAuthUser.js.map
