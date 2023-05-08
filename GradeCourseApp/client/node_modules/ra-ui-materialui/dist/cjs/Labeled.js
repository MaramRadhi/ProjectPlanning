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
exports.LabeledClasses = exports.Labeled = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
/**
 * Wrap a field or an input with a label if necessary.
 *
 * The label is displayed if:
 * - the field or input has a label prop that is not false, or
 * - the field or input has a source prop
 *
 * @example
 * <Labeled>
 *     <FooComponent source="title" />
 * </Labeled>
 */
var Labeled = function (_a) {
    var _b;
    var _c, _d;
    var children = _a.children, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.color, color = _f === void 0 ? 'textSecondary' : _f, _g = _a.component, component = _g === void 0 ? 'span' : _g, fullWidth = _a.fullWidth, isRequired = _a.isRequired, label = _a.label, resource = _a.resource, source = _a.source, rest = __rest(_a, ["children", "className", "color", "component", "fullWidth", "isRequired", "label", "resource", "source"]);
    return (React.createElement(Root
    // @ts-ignore https://github.com/mui/material-ui/issues/29875
    , __assign({ 
        // @ts-ignore https://github.com/mui/material-ui/issues/29875
        component: component, className: (0, clsx_1.default)(className, (_b = {},
            _b[exports.LabeledClasses.fullWidth] = fullWidth,
            _b)) }, rest),
        label !== false &&
            children.props.label !== false &&
            typeof children.type !== 'string' &&
            // @ts-ignore
            ((_c = children.type) === null || _c === void 0 ? void 0 : _c.displayName) !== 'Labeled' &&
            // @ts-ignore
            ((_d = children.type) === null || _d === void 0 ? void 0 : _d.displayName) !== 'Labeled' ? (React.createElement(material_1.Typography, { color: color, className: exports.LabeledClasses.label },
            React.createElement(ra_core_1.FieldTitle, { label: label || children.props.label, source: source || children.props.source, resource: resource, isRequired: isRequired }))) : null,
        children));
};
exports.Labeled = Labeled;
exports.Labeled.displayName = 'Labeled';
var PREFIX = 'RaLabeled';
exports.LabeledClasses = {
    label: "".concat(PREFIX, "-label"),
    fullWidth: "".concat(PREFIX, "-fullWidth"),
};
var Root = (0, styles_1.styled)(material_1.Stack, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'inline-flex',
            marginBottom: '0.2em'
        },
        _b["&.".concat(exports.LabeledClasses.fullWidth)] = {
            width: '100%',
        },
        _b["& .".concat(exports.LabeledClasses.label)] = {
            fontSize: '0.75em',
            marginBottom: '0.2em',
        },
        _b);
});
//# sourceMappingURL=Labeled.js.map