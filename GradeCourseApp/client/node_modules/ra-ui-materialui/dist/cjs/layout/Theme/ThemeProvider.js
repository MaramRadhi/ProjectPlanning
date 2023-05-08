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
exports.ThemeProvider = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var useTheme_1 = require("./useTheme");
/**
 * This sets the MUI theme based on the store.
 *
 * @param props
 * @param props.children The children of the component.
 * @param props.theme The initial theme.
 */
var ThemeProvider = function (_a) {
    var children = _a.children, themeOverride = _a.theme;
    var theme = (0, useTheme_1.useTheme)(themeOverride)[0];
    var themeValue = (0, react_1.useMemo)(function () {
        try {
            return (0, styles_1.createTheme)(theme);
        }
        catch (e) {
            console.warn('Failed to reuse custom theme from store', e);
            return (0, styles_1.createTheme)();
        }
    }, [theme]);
    return React.createElement(styles_1.ThemeProvider, { theme: themeValue }, children);
};
exports.ThemeProvider = ThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map