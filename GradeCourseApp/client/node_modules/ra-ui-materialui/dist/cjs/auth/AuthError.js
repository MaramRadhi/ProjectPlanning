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
exports.AuthErrorClasses = exports.AuthError = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var Lock_1 = __importDefault(require("@mui/icons-material/Lock"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var button_1 = require("../button");
var AuthError = function (props) {
    var className = props.className, _a = props.title, title = _a === void 0 ? 'ra.page.error' : _a, _b = props.message, message = _b === void 0 ? 'ra.message.auth_error' : _b, rest = __rest(props, ["className", "title", "message"]);
    var translate = (0, ra_core_1.useTranslate)();
    return (React.createElement(Root, __assign({ className: className }, rest),
        React.createElement("div", { className: exports.AuthErrorClasses.message },
            React.createElement("h1", null, translate(title, { _: title })),
            React.createElement("div", null, translate(message, { _: message })),
            React.createElement(button_1.Button, { to: "/login", label: "ra.auth.sign_in" },
                React.createElement(Lock_1.default, null)))));
};
exports.AuthError = AuthError;
exports.AuthError.propTypes = {
    className: prop_types_1.default.string,
    title: prop_types_1.default.string,
    message: prop_types_1.default.string,
};
var PREFIX = 'RaAuthError';
exports.AuthErrorClasses = {
    root: "".concat(PREFIX, "-root"),
    message: "".concat(PREFIX, "-message"),
};
var Root = (0, material_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        _b[theme.breakpoints.up('md')] = {
            height: '100%',
        },
        _b[theme.breakpoints.down('xl')] = {
            height: '100vh',
            marginTop: '-3em',
        },
        _b["& .".concat(exports.AuthErrorClasses.message)] = {
            textAlign: 'center',
            fontFamily: 'Roboto, sans-serif',
            opacity: 0.5,
            margin: '0 1em',
        },
        _b);
});
//# sourceMappingURL=AuthError.js.map