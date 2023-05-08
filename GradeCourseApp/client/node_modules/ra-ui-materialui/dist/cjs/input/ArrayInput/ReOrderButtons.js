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
exports.ReOrderButtons = void 0;
var React = __importStar(require("react"));
var button_1 = require("../../button");
var ArrowCircleUp_1 = __importDefault(require("@mui/icons-material/ArrowCircleUp"));
var ArrowCircleDown_1 = __importDefault(require("@mui/icons-material/ArrowCircleDown"));
var useSimpleFormIteratorItem_1 = require("./useSimpleFormIteratorItem");
var ReOrderButtons = function (_a) {
    var className = _a.className;
    var _b = (0, useSimpleFormIteratorItem_1.useSimpleFormIteratorItem)(), index = _b.index, total = _b.total, reOrder = _b.reOrder;
    return (React.createElement("span", { className: className },
        React.createElement(button_1.IconButtonWithTooltip, { label: "ra.action.move_up", size: "small", onClick: function () { return reOrder(index - 1); }, disabled: index <= 0, color: "primary" },
            React.createElement(ArrowCircleUp_1.default, { fontSize: "small" })),
        React.createElement(button_1.IconButtonWithTooltip, { label: "ra.action.move_down", size: "small", onClick: function () { return reOrder(index + 1); }, disabled: total == null || index >= total - 1, color: "primary" },
            React.createElement(ArrowCircleDown_1.default, { fontSize: "small" }))));
};
exports.ReOrderButtons = ReOrderButtons;
//# sourceMappingURL=ReOrderButtons.js.map