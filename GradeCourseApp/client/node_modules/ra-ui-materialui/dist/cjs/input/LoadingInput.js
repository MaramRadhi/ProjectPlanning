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
exports.LoadingInput = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var ra_core_1 = require("ra-core");
var ResettableTextField_1 = require("./ResettableTextField");
/**
 * An input placeholder with a loading indicator
 *
 * Avoids visual jumps when replaced by a form input
 */
var LoadingInput = function (_a) {
    var fullWidth = _a.fullWidth, label = _a.label, helperText = _a.helperText, margin = _a.margin, size = _a.size, sx = _a.sx, _b = _a.timeout, timeout = _b === void 0 ? 1000 : _b, variant = _a.variant;
    var oneSecondHasPassed = (0, ra_core_1.useTimeout)(timeout);
    return (React.createElement(StyledResettableTextField, { sx: sx, label: label, helperText: helperText, fullWidth: fullWidth, variant: variant, margin: margin, size: size, disabled: true, onChange: function () { }, InputProps: {
            endAdornment: oneSecondHasPassed ? (React.createElement(material_1.CircularProgress, { color: "inherit", size: 20 })) : (
            // use an adornment of the same size to avoid visual jumps
            React.createElement("span", { style: { width: 20 } }, "\u00A0")),
        } }));
};
exports.LoadingInput = LoadingInput;
var PREFIX = 'RaLoadingInput';
// make it look just like a regular input, even though it's disabled
// because the loading indicator is enough
var StyledResettableTextField = (0, styles_1.styled)(ResettableTextField_1.ResettableTextField, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiInputLabel-root.Mui-disabled': {
            color: theme.palette.text.secondary,
        },
        '& .MuiFilledInput-root.Mui-disabled': {
            background: theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.04)'
                : 'rgba(255, 255, 255, 0.09)',
        },
        '& .MuiFilledInput-root.Mui-disabled:before': {
            borderBottomStyle: 'solid',
        },
    });
});
//# sourceMappingURL=LoadingInput.js.map