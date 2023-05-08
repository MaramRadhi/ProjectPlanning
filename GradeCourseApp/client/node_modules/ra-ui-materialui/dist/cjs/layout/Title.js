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
exports.TitlePropType = exports.Title = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var PageTitleConfigurable_1 = require("./PageTitleConfigurable");
var Title = function (props) {
    var defaultTitle = props.defaultTitle, title = props.title, preferenceKey = props.preferenceKey, rest = __rest(props, ["defaultTitle", "title", "preferenceKey"]);
    var _a = (0, react_1.useState)(function () {
        return typeof document !== 'undefined'
            ? document.getElementById('react-admin-title')
            : null;
    }), container = _a[0], setContainer = _a[1];
    // on first mount, we don't have the container yet, so we wait for it
    (0, react_1.useEffect)(function () {
        setContainer(function (container) {
            if (container)
                return container;
            return typeof document !== 'undefined'
                ? document.getElementById('react-admin-title')
                : null;
        });
    }, []);
    if (!container)
        return null;
    (0, ra_core_1.warning)(!defaultTitle && !title, 'Missing title prop in <Title> element');
    return (0, react_dom_1.createPortal)(React.createElement(PageTitleConfigurable_1.PageTitleConfigurable, __assign({ title: title, defaultTitle: defaultTitle, preferenceKey: preferenceKey }, rest)), container);
};
exports.Title = Title;
exports.TitlePropType = prop_types_1.default.oneOfType([
    prop_types_1.default.string,
    prop_types_1.default.element,
]);
exports.Title.propTypes = {
    defaultTitle: prop_types_1.default.string,
    className: prop_types_1.default.string,
    record: prop_types_1.default.any,
    title: exports.TitlePropType,
};
//# sourceMappingURL=Title.js.map