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
exports.CardContentInnerClasses = exports.CardContentInner = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
/**
 * Overrides MUI CardContent to allow inner content
 *
 * When using several CardContent inside the same Card, the top and bottom
 * padding double the spacing between each CardContent, leading to too much
 * wasted space. Use this component as a CardContent alternative.
 */
var CardContentInner = function (props) {
    var className = props.className, children = props.children;
    return React.createElement(Root, { className: className }, children);
};
exports.CardContentInner = CardContentInner;
exports.CardContentInner.propTypes = {
    className: prop_types_1.default.string,
    classes: prop_types_1.default.object,
    children: prop_types_1.default.node,
};
var PREFIX = 'RaCardContentInner';
exports.CardContentInnerClasses = {
    root: "".concat(PREFIX, "-root"),
};
var Root = (0, styles_1.styled)(CardContent_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        paddingTop: 0,
        paddingBottom: 0,
        '&:first-of-type': {
            paddingTop: 16,
        },
        '&:last-child': (_b = {
                paddingBottom: 16
            },
            _b[theme.breakpoints.only('xs')] = {
                paddingBottom: 70,
            },
            _b),
    });
});
//# sourceMappingURL=CardContentInner.js.map