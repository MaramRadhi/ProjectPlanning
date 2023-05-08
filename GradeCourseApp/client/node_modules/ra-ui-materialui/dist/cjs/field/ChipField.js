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
exports.ChipField = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var Chip_1 = __importDefault(require("@mui/material/Chip"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var sanitizeFieldRestProps_1 = require("./sanitizeFieldRestProps");
var types_1 = require("./types");
exports.ChipField = (0, react_1.memo)(function (props) {
    var className = props.className, source = props.source, emptyText = props.emptyText, rest = __rest(props, ["className", "source", "emptyText"]);
    var record = (0, ra_core_1.useRecordContext)(props);
    var value = (0, get_1.default)(record, source);
    var translate = (0, ra_core_1.useTranslate)();
    if (value == null && emptyText) {
        return (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)), emptyText && translate(emptyText, { _: emptyText })));
    }
    return (React.createElement(StyledChip, __assign({ className: (0, clsx_1.default)(ChipFieldClasses.chip, className), label: value }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest))));
});
exports.ChipField.propTypes = __assign(__assign({}, exports.ChipField.propTypes), types_1.fieldPropTypes);
exports.ChipField.displayName = 'ChipField';
var PREFIX = 'RaChipField';
var ChipFieldClasses = {
    chip: "".concat(PREFIX, "-chip"),
};
var StyledChip = (0, styles_1.styled)(Chip_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["&.".concat(ChipFieldClasses.chip)] = { margin: 4, cursor: 'inherit' },
    _a));
//# sourceMappingURL=ChipField.js.map