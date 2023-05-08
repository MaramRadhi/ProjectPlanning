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
exports.InspectorRoot = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var ra_core_1 = require("ra-core");
var InspectorRoot = function () {
    var translate = (0, ra_core_1.useTranslate)();
    (0, ra_core_1.useSetInspectorTitle)('ra.configurable.inspector.title', {
        _: 'Inspector',
    });
    return (React.createElement(material_1.Typography, null, translate('ra.configurable.inspector.content', {
        _: 'Hover the application UI elements to configure them',
    })));
};
exports.InspectorRoot = InspectorRoot;
//# sourceMappingURL=InspectorRoot.js.map