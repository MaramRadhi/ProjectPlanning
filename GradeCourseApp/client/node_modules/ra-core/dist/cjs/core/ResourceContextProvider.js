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
exports.ResourceContextProvider = void 0;
var React = __importStar(require("react"));
var ResourceContext_1 = require("./ResourceContext");
/**
 * Create a Resource Context with the resource name
 *
 * Some react-admin components rely on the resource name to be available in the context.
 * This component provides it.
 *
 * If the value is empty, the context is not provided.
 *
 * @param {string} value the resource name
 * @example
 *
 * import { ResourceContextProvider } from 'react-admin';
 *
 * const MyComponent = () => (
 *    <ResourceContextProvider value="posts">
 *       <MyResourceSpecificComponent />
 *   </ResourceContextProvider>
 * );
 */
var ResourceContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return value ? (React.createElement(ResourceContext_1.ResourceContext.Provider, { value: value }, children)) : (children);
};
exports.ResourceContextProvider = ResourceContextProvider;
//# sourceMappingURL=ResourceContextProvider.js.map