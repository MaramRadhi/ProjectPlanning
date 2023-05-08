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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuClasses = exports.Menu = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var Sidebar_1 = require("./Sidebar");
var useSidebarState_1 = require("./useSidebarState");
var DashboardMenuItem_1 = require("./DashboardMenuItem");
var MenuItemLink_1 = require("./MenuItemLink");
var ResourceMenuItem_1 = require("./ResourceMenuItem");
/**
 * Renders a menu with one menu item per resource by default. You can also set menu items by hand.
 *
 * @example
 * import * as React from 'react';
 * import { Menu } from 'react-admin';
 *
 * import BookIcon from '@mui/icons-material/Book';
 * import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
 * import PeopleIcon from '@mui/icons-material/People';
 * import LabelIcon from '@mui/icons-material/Label';
 *
 * export const MyMenu = () => (
 *     <Menu>
 *         <Menu.DashboardItem />
 *         <Menu.Item to="/posts" primaryText="Posts" leftIcon={<BookIcon />}/>
 *         <Menu.Item to="/comments" primaryText="Comments" leftIcon={<ChatBubbleIcon />}/>
 *         <Menu.Item to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
 *         <Menu.Item to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />}/>
 *     </Menu>
 * );
 */
var Menu = function (props) {
    var _a;
    var resources = (0, ra_core_1.useResourceDefinitions)();
    var hasDashboard = props.hasDashboard, _b = props.children, children = _b === void 0 ? __spreadArray([
        hasDashboard ? (React.createElement(DashboardMenuItem_1.DashboardMenuItem, { key: "default-dashboard-menu-item" })) : null
    ], Object.keys(resources)
        .filter(function (name) { return resources[name].hasList; })
        .map(function (name) { return React.createElement(ResourceMenuItem_1.ResourceMenuItem, { key: name, name: name }); }), true) : _b, className = props.className, rest = __rest(props, ["hasDashboard", "children", "className"]);
    var open = (0, useSidebarState_1.useSidebarState)()[0];
    return (React.createElement(Root, __assign({ className: (0, clsx_1.default)((_a = {},
            _a[exports.MenuClasses.open] = open,
            _a[exports.MenuClasses.closed] = !open,
            _a), className) }, rest), children));
};
exports.Menu = Menu;
exports.Menu.propTypes = {
    className: prop_types_1.default.string,
    dense: prop_types_1.default.bool,
    hasDashboard: prop_types_1.default.bool,
};
// re-export MenuItem commponents for convenience
exports.Menu.Item = MenuItemLink_1.MenuItemLink;
exports.Menu.DashboardItem = DashboardMenuItem_1.DashboardMenuItem;
exports.Menu.ResourceItem = ResourceMenuItem_1.ResourceMenuItem;
var PREFIX = 'RaMenu';
exports.MenuClasses = {
    open: "".concat(PREFIX, "-open"),
    closed: "".concat(PREFIX, "-closed"),
};
var Root = (0, styles_1.styled)(material_1.MenuList, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginTop: '0.5em',
            marginBottom: '1em'
        },
        _b[theme.breakpoints.only('xs')] = {
            marginTop: 0,
        },
        _b.transition = theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        _b["&.".concat(exports.MenuClasses.open)] = {
            width: (0, get_1.default)(theme, 'sidebar.width', Sidebar_1.DRAWER_WIDTH),
        },
        _b["&.".concat(exports.MenuClasses.closed)] = {
            width: (0, get_1.default)(theme, 'sidebar.closedWidth', Sidebar_1.CLOSED_DRAWER_WIDTH),
        },
        _b);
});
//# sourceMappingURL=Menu.js.map