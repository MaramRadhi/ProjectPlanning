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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageInput = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var FileInput_1 = require("./FileInput");
var ImageInput = function (props) { return (React.createElement(StyledFileInput, __assign({ labelMultiple: "ra.input.image.upload_several", labelSingle: "ra.input.image.upload_single" }, props))); };
exports.ImageInput = ImageInput;
var PREFIX = 'RaImageInput';
var StyledFileInput = (0, styles_1.styled)(FileInput_1.FileInput, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            width: '100%'
        },
        _b["& .".concat(FileInput_1.FileInputClasses.dropZone)] = {
            background: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius,
            fontFamily: theme.typography.fontFamily,
            cursor: 'pointer',
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.getContrastText(theme.palette.background.default),
        },
        _b["& .".concat(FileInput_1.FileInputClasses.removeButton)] = {
            display: 'inline-block',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: theme.spacing(1),
                right: theme.spacing(1),
                minWidth: theme.spacing(2),
                opacity: 0,
            },
            '&:hover button': {
                opacity: 1,
            },
        },
        _b);
});
//# sourceMappingURL=ImageInput.js.map