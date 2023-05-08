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
exports.RadioButtonGroupInputItem = void 0;
var React = __importStar(require("react"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var ra_core_1 = require("ra-core");
var RadioButtonGroupInputItem = function (_a) {
    var choice = _a.choice, optionText = _a.optionText, optionValue = _a.optionValue, source = _a.source, translateChoice = _a.translateChoice;
    var _b = (0, ra_core_1.useChoices)({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _b.getChoiceText, getChoiceValue = _b.getChoiceValue;
    var label = getChoiceText(choice);
    var value = getChoiceValue(choice);
    var nodeId = "".concat(source, "_").concat(value);
    return (React.createElement(FormControlLabel_1.default, { label: label, htmlFor: nodeId, value: value, control: React.createElement(Radio_1.default, { id: nodeId, color: "primary" }) }));
};
exports.RadioButtonGroupInputItem = RadioButtonGroupInputItem;
exports.default = exports.RadioButtonGroupInputItem;
//# sourceMappingURL=RadioButtonGroupInputItem.js.map