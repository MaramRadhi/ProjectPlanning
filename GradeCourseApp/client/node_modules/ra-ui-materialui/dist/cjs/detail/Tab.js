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
exports.Tab = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var ra_core_1 = require("ra-core");
var clsx_1 = __importDefault(require("clsx"));
var Labeled_1 = require("../Labeled");
/**
 * Tab element for the TabbedShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 * - path: The string used for custom urls
 *
 * It is also available as TabbedShowLayout.Tab.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import FavoriteIcon from '@mui/icons-material/Favorite';
 *     import PersonPinIcon from '@mui/icons-material/PersonPin';
 *     import { Show, TabbedShowLayout, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <TabbedShowLayout.Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </TabbedShowLayout.Tab>
 *                 <TabbedShowLayout.Tab label="Metadata" icon={<PersonIcon />} path="metadata">
 *                     <TextField source="category" />
 *                </TabbedShowLayout.Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
var Tab = function (_a) {
    var children = _a.children, contentClassName = _a.contentClassName, context = _a.context, count = _a.count, className = _a.className, divider = _a.divider, icon = _a.icon, label = _a.label, record = _a.record, _b = _a.spacing, spacing = _b === void 0 ? 1 : _b, _c = _a.syncWithLocation, syncWithLocation = _c === void 0 ? true : _c, value = _a.value, rest = __rest(_a, ["children", "contentClassName", "context", "count", "className", "divider", "icon", "label", "record", "spacing", "syncWithLocation", "value"]);
    var translate = (0, ra_core_1.useTranslate)();
    var location = (0, react_router_dom_1.useLocation)();
    var propsForLink = {
        component: react_router_dom_1.Link,
        to: __assign(__assign({}, location), { pathname: value }),
    };
    var renderHeader = function () {
        var tabLabel = typeof label === 'string' ? translate(label, { _: label }) : label;
        if (count !== undefined) {
            tabLabel = (React.createElement("span", null,
                tabLabel,
                " (",
                count,
                ")"));
        }
        return (React.createElement(material_1.Tab, __assign({ key: "tab-header-".concat(value), label: tabLabel, value: value, icon: icon, className: (0, clsx_1.default)('show-tab', className) }, (syncWithLocation ? propsForLink : {}), rest)));
    };
    var renderContent = function () { return (React.createElement(material_1.Stack, { className: contentClassName, spacing: spacing, divider: divider }, React.Children.map(children, function (field) {
        return field && (0, react_1.isValidElement)(field) ? (React.createElement(Labeled_1.Labeled, { key: field.props.source, className: (0, clsx_1.default)('ra-field', field.props.source &&
                "ra-field-".concat(field.props.source), field.props.className) }, field)) : null;
    }))); };
    return context === 'header' ? renderHeader() : renderContent();
};
exports.Tab = Tab;
exports.Tab.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    contentClassName: prop_types_1.default.string,
    context: prop_types_1.default.oneOf(['header', 'content']),
    count: prop_types_1.default.node,
    icon: prop_types_1.default.element,
    label: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.element])
        .isRequired,
    path: prop_types_1.default.string,
    spacing: prop_types_1.default.any,
    value: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.number]),
};
//# sourceMappingURL=Tab.js.map