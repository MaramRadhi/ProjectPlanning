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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetRecordRepresentation = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var useResourceDefinition_1 = require("./useResourceDefinition");
/**
 * Get default string representation of a record
 *
 * @example // No customization
 * const getRecordRepresentation = useGetRecordRepresentation('posts');
 * getRecordRepresentation({ id: 1, title: 'Hello' }); // => "#1"
 *
 * @example // With <Resource name="posts" recordRepresentation="title" />
 * const getRecordRepresentation = useGetRecordRepresentation('posts');
 * getRecordRepresentation({ id: 1, title: 'Hello' }); // => "Hello"
 */
var useGetRecordRepresentation = function (resource) {
    var recordRepresentation = (0, useResourceDefinition_1.useResourceDefinition)({ resource: resource }).recordRepresentation;
    return (0, react_1.useCallback)(function (record) {
        if (!record)
            return '';
        if (typeof recordRepresentation === 'function') {
            return recordRepresentation(record);
        }
        if (typeof recordRepresentation === 'string') {
            return (0, get_1.default)(record, recordRepresentation);
        }
        if (React.isValidElement(recordRepresentation)) {
            return recordRepresentation;
        }
        return "#".concat(record.id);
    }, [recordRepresentation]);
};
exports.useGetRecordRepresentation = useGetRecordRepresentation;
//# sourceMappingURL=useGetRecordRepresentation.js.map