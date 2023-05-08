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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopToolbar = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var TopToolbar = function (props) { return React.createElement(StyledToolbar, __assign({}, props)); };
exports.TopToolbar = TopToolbar;
exports.TopToolbar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
};
exports.default = exports.TopToolbar;
var PREFIX = 'RaTopToolbar';
var StyledToolbar = (0, styles_1.styled)(Toolbar_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: theme.spacing(1),
            whiteSpace: 'nowrap',
            flex: '0 1 auto',
            minHeight: theme.spacing(8)
        },
        _b[theme.breakpoints.up('md')] = {
            padding: theme.spacing(0.5),
            paddingTop: theme.spacing(1),
        },
        _b[theme.breakpoints.down('md')] = {
            flex: '0 1 100%',
            padding: theme.spacing(0.5),
            paddingBottom: theme.spacing(1),
        },
        _b[theme.breakpoints.down('sm')] = {
            backgroundColor: theme.palette.background.paper,
        },
        _b);
});
//# sourceMappingURL=TopToolbar.js.map