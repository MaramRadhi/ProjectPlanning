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
exports.ListNoResults = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var ra_core_1 = require("ra-core");
exports.ListNoResults = (0, react_1.memo)(function () {
    var translate = (0, ra_core_1.useTranslate)();
    var resource = (0, ra_core_1.useResourceContext)();
    return (React.createElement(CardContent_1.default, null,
        React.createElement(Typography_1.default, { variant: "body2" }, translate('ra.navigation.no_results', { resource: resource }))));
});
//# sourceMappingURL=ListNoResults.js.map