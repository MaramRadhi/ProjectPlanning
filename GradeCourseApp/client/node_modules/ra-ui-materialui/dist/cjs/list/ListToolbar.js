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
exports.ListToolbar = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var filter_1 = require("./filter");
var FilterContext_1 = require("./FilterContext");
exports.ListToolbar = (0, react_1.memo)(function (props) {
    var filters = props.filters, actions = props.actions, className = props.className, rest = __rest(props, ["filters", "actions", "className"]);
    return Array.isArray(filters) ? (React.createElement(FilterContext_1.FilterContext.Provider, { value: filters },
        React.createElement(Root, { className: className },
            React.createElement(filter_1.FilterForm, null),
            React.createElement("span", null),
            actions &&
                React.cloneElement(actions, __assign(__assign({}, rest), actions.props))))) : (React.createElement(Root, { className: className },
        filters &&
            React.cloneElement(filters, __assign(__assign({}, rest), { context: 'form' })),
        React.createElement("span", null),
        actions &&
            React.cloneElement(actions, __assign(__assign(__assign({}, rest), { filters: filters }), actions.props))));
});
exports.ListToolbar.propTypes = {
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    // @ts-ignore
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    // @ts-ignore
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
};
var PREFIX = 'RaListToolbar';
var Root = (0, styles_1.styled)(material_1.Toolbar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: 'relative',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            width: '100%',
            padding: '0 !important',
            minHeight: theme.spacing(8)
        },
        _b[theme.breakpoints.down('sm')] = {
            backgroundColor: theme.palette.background.paper,
        },
        _b[theme.breakpoints.down('md')] = {
            margin: 0,
            flexWrap: 'wrap',
        },
        _b);
});
//# sourceMappingURL=ListToolbar.js.map