"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = __importDefault(require("lodash/get"));
exports.default = (function (value, path) {
    if (typeof value === 'object') {
        return (0, get_1.default)(value, path);
    }
    return value;
});
//# sourceMappingURL=getValue.js.map