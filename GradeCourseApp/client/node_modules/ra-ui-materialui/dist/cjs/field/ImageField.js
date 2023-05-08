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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageFieldClasses = exports.ImageField = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var ra_core_1 = require("ra-core");
var sanitizeFieldRestProps_1 = require("./sanitizeFieldRestProps");
var types_1 = require("./types");
var ImageField = function (props) {
    var className = props.className, emptyText = props.emptyText, source = props.source, src = props.src, title = props.title, rest = __rest(props, ["className", "emptyText", "source", "src", "title"]);
    var record = (0, ra_core_1.useRecordContext)(props);
    var sourceValue = (0, get_1.default)(record, source);
    var translate = (0, ra_core_1.useTranslate)();
    if (!sourceValue) {
        return emptyText ? (React.createElement(material_1.Typography, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)), emptyText && translate(emptyText, { _: emptyText }))) : (React.createElement("div", __assign({ className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest))));
    }
    if (Array.isArray(sourceValue)) {
        return (React.createElement(Root, __assign({ className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)),
            React.createElement("ul", { className: exports.ImageFieldClasses.list }, sourceValue.map(function (file, index) {
                var fileTitleValue = (0, get_1.default)(file, title) || title;
                var srcValue = (0, get_1.default)(file, src) || title;
                return (React.createElement("li", { key: index },
                    React.createElement("img", { alt: fileTitleValue, title: fileTitleValue, src: srcValue, className: exports.ImageFieldClasses.image })));
            }))));
    }
    var titleValue = (0, get_1.default)(record, title) || title;
    return (React.createElement(Root, __assign({ className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)),
        React.createElement("img", { title: titleValue, alt: titleValue, src: sourceValue, className: exports.ImageFieldClasses.image })));
};
exports.ImageField = ImageField;
// What? TypeScript loses the displayName if we don't set it explicitly
exports.ImageField.displayName = 'ImageField';
exports.ImageField.propTypes = __assign(__assign({}, types_1.fieldPropTypes), { src: prop_types_1.default.string, title: prop_types_1.default.string });
var PREFIX = 'RaImageField';
exports.ImageFieldClasses = {
    list: "".concat(PREFIX, "-list"),
    image: "".concat(PREFIX, "-image"),
};
var Root = (0, styles_1.styled)(material_1.Box, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["& .".concat(exports.ImageFieldClasses.list)] = {
        display: 'flex',
        listStyleType: 'none',
    },
    _a["& .".concat(exports.ImageFieldClasses.image)] = {
        margin: '0.25rem',
        width: 200,
        height: 100,
        objectFit: 'contain',
    },
    _a));
//# sourceMappingURL=ImageField.js.map