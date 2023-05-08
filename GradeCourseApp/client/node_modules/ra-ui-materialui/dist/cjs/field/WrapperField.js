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
exports.WrapperField = void 0;
var React = __importStar(require("react"));
var types_1 = require("./types");
/**
 * A field rendering its children.
 *
 * Designed as a wrapper for several fields, to support props read by
 * the parent element (e.g. `<SimpleShowLayout>`, `<Datagrid`).
 *
 * @example
 * import { WrapperField, TextField } from 'react-admin';
 *
 * const PostShow = () => (
 *    <Show>
 *        <SimpleShowLayout>
 *            <WrapperField label="author" sortBy="last_name">
 *               <TextField source="first_name" />
 *               <TextField source="last_name" />
 *            </WrapperField>
 *       </SimpleShowLayout>
 *   </Show>
 * );
 */
var WrapperField = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null, children));
};
exports.WrapperField = WrapperField;
exports.WrapperField.displayName = 'WrapperField';
exports.WrapperField.propTypes = types_1.fieldPropTypes;
//# sourceMappingURL=WrapperField.js.map