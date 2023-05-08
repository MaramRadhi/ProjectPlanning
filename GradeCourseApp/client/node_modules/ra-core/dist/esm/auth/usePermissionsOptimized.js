import usePermissions from './usePermissions';
var emptyParams = {};
/**
 * @deprecated use usePermissions instead
 *
 * @see usePermissions
 */
var usePermissionsOptimized = function (params) {
    if (params === void 0) { params = emptyParams; }
    return usePermissions(params);
};
export default usePermissionsOptimized;
//# sourceMappingURL=usePermissionsOptimized.js.map