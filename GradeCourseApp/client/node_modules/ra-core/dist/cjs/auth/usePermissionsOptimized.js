"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var usePermissions_1 = __importDefault(require("./usePermissions"));
var emptyParams = {};
/**
 * @deprecated use usePermissions instead
 *
 * @see usePermissions
 */
var usePermissionsOptimized = function (params) {
    if (params === void 0) { params = emptyParams; }
    return (0, usePermissions_1.default)(params);
};
exports.default = usePermissionsOptimized;
//# sourceMappingURL=usePermissionsOptimized.js.map