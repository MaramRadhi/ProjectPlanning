import * as React from 'react';
import AuthContext from '../AuthContext.js';
import { AuthKitError } from '../errors.js';
import { isAuthenticated } from '../utils/utils.js';

/**
 * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 * @fileoverview Authentication header <hook>
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
 *
 */
function useAuthHeader() {
    var c = React.useContext(AuthContext);
    if (c === null) {
        throw new AuthKitError('Auth Provider is missing. ' +
            'Please add the AuthProvider before Router');
    }
    return function () {
        if (c.authState.auth && isAuthenticated(c.authState)) {
            return "".concat(c.authState.auth.type, " ").concat(c.authState.auth.token);
        }
        else {
            return "";
        }
    };
}

export { useAuthHeader as default };
//# sourceMappingURL=useAuthHeader.js.map
