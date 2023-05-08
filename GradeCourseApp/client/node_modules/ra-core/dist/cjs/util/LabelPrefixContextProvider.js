"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LabelPrefixContextProvider = void 0;
var React = __importStar(require("react"));
var LabelPrefixContext_1 = require("./LabelPrefixContext");
var useLabelPrefix_1 = require("./useLabelPrefix");
var LabelPrefixContextProvider = function (_a) {
    var prefix = _a.prefix, _b = _a.concatenate, concatenate = _b === void 0 ? true : _b, children = _a.children;
    var oldPrefix = (0, useLabelPrefix_1.useLabelPrefix)();
    var newPrefix = oldPrefix && concatenate ? "".concat(oldPrefix, ".").concat(prefix) : prefix;
    return (React.createElement(LabelPrefixContext_1.LabelPrefixContext.Provider, { value: newPrefix }, children));
};
exports.LabelPrefixContextProvider = LabelPrefixContextProvider;
//# sourceMappingURL=LabelPrefixContextProvider.js.map