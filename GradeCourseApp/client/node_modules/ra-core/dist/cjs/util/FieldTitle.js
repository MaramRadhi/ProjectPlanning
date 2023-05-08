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
exports.FieldTitle = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var i18n_1 = require("../i18n");
var FieldTitle = function (props) {
    var source = props.source, label = props.label, resource = props.resource, isRequired = props.isRequired;
    var translateLabel = (0, i18n_1.useTranslateLabel)();
    if (label === true) {
        throw new Error('Label parameter must be a string, a ReactElement or false');
    }
    if (label === false || label === '') {
        return null;
    }
    if (label && typeof label !== 'string') {
        return label;
    }
    return (React.createElement("span", null,
        translateLabel({
            label: label,
            resource: resource,
            source: source,
        }),
        isRequired && React.createElement("span", { "aria-hidden": "true" }, "\u2009*")));
};
exports.FieldTitle = FieldTitle;
// What? TypeScript loses the displayName if we don't set it explicitly
exports.FieldTitle.displayName = 'FieldTitle';
exports.default = (0, react_1.memo)(exports.FieldTitle);
//# sourceMappingURL=FieldTitle.js.map