import { __extends } from './_virtual/_tslib.js';

/**
 * @author Arkadip Bhattacharya <in2arkadipb13@gmail.com>
 * @fileoverview Error file
 * @copyright Arkadip Bhattacharya 2023
 */
/**
 * @class
 * @name AuthKitError
 * @extends Error
 *
 * General Auth kit error class
 */
var AuthKitError = /** @class */ (function (_super) {
    __extends(AuthKitError, _super);
    /**
       * @constructor
       * @param message - Error message
       */
    function AuthKitError(message) {
        return _super.call(this, message) || this;
    }
    return AuthKitError;
}(Error));

export { AuthKitError };
//# sourceMappingURL=errors.js.map
