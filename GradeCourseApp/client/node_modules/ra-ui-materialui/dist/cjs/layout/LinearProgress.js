"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinearProgress = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
/**
 * Progress bar formatted to replace an input or a field in a form layout
 *
 * Avoids visual jumps when replaced by value or form input
 *
 * @see ReferenceField
 * @see ReferenceInput
 *
 * @typedef {Object} Props the props you can use
 * @prop {Object} classes CSS class names
 * @prop {string} className CSS class applied to the LinearProgress component
 * @prop {integer} timeout Milliseconds to wait before showing the progress bar. One second by default
 *
 * @param {Props} props
 */
var LinearProgress = function (_a) {
    var _b = _a.timeout, timeout = _b === void 0 ? 1000 : _b, props = __rest(_a, ["timeout"]);
    var className = props.className, rest = __rest(props, ["className"]);
    var oneSecondHasPassed = (0, ra_core_1.useTimeout)(timeout);
    return oneSecondHasPassed ? (React.createElement(StyledProgress, __assign({ className: className }, rest))) : null;
};
exports.LinearProgress = LinearProgress;
exports.LinearProgress.propTypes = {
    className: prop_types_1.default.string,
    timeout: prop_types_1.default.number,
};
// What? TypeScript loses the displayName if we don't set it explicitly
exports.LinearProgress.displayName = 'LinearProgress';
var PREFIX = 'RaLinearProgress';
var StyledProgress = (0, styles_1.styled)(LinearProgress_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        margin: "".concat(theme.spacing(1), " 0"),
        width: theme.spacing(20),
    });
});
//# sourceMappingURL=LinearProgress.js.map