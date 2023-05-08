import { useEffect } from 'react';
import { useSaveContext } from './useSaveContext';
/**
 * Internal hook that registers a middleware for the save function in the current SaveContext.
 * @param callback The middleware function.
 */
export var useRegisterMutationMiddleware = function (callback) {
    var _a = useSaveContext(), registerMutationMiddleware = _a.registerMutationMiddleware, unregisterMutationMiddleware = _a.unregisterMutationMiddleware;
    useEffect(function () {
        registerMutationMiddleware(callback);
        return function () {
            unregisterMutationMiddleware(callback);
        };
    }, [callback, registerMutationMiddleware, unregisterMutationMiddleware]);
};
//# sourceMappingURL=useRegisterMutationMiddleware.js.map