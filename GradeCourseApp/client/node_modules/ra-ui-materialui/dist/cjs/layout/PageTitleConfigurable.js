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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageTitleConfigurable = exports.PageTitleEditor = void 0;
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var preferences_1 = require("../preferences");
var PageTitle_1 = require("./PageTitle");
var PageTitleEditor = function () {
    var field = (0, ra_core_1.usePreferenceInput)();
    return (React.createElement("form", null,
        React.createElement(material_1.TextField, __assign({ label: "title", variant: "filled", size: "small", fullWidth: true, sx: { mb: 1 } }, field))));
};
exports.PageTitleEditor = PageTitleEditor;
var PageTitleConfigurable = function (_a) {
    var preferenceKey = _a.preferenceKey, props = __rest(_a, ["preferenceKey"]);
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    return (React.createElement(preferences_1.Configurable, { editor: React.createElement(exports.PageTitleEditor, null), preferenceKey: preferenceKey || "".concat(pathname, ".title"), sx: {
            '&.RaConfigurable-editMode': {
                margin: '2px',
            },
        } },
        React.createElement(PageTitle_1.PageTitle, __assign({}, props))));
};
exports.PageTitleConfigurable = PageTitleConfigurable;
//# sourceMappingURL=PageTitleConfigurable.js.map