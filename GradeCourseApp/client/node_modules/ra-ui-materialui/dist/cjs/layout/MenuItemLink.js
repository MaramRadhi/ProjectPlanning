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
exports.MenuItemLinkClasses = exports.MenuItemLink = void 0;
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var react_router_dom_1 = require("react-router-dom");
var material_1 = require("@mui/material");
var useSidebarState_1 = require("./useSidebarState");
var ra_core_1 = require("ra-core");
/**
 * Displays a menu item with a label and an icon - or only the icon with a tooltip when the sidebar is minimized.
 * It also handles the automatic closing of the menu on tap on mobile.
 *
 * @typedef {Object} Props the props you can use
 * @prop {string|Location} to The menu item's target. It is passed to a React Router NavLink component.
 * @prop {string|ReactNode} primaryText The menu content, displayed when the menu isn't minimized. |
 * @prop {ReactNode} leftIcon The menu icon
 *
 * Additional props are passed down to the underling MUI <MenuItem> component
 * @see https://material-ui.com/api/menu-item/#menuitem-api
 *
 * @example // You can create a custom menu component using the <DashboardMenuItem> and <MenuItemLink> components:
 *
 * // in src/Menu.js
 * import * as React from 'react';
 * import { DashboardMenuItem, MenuItemLink } from 'react-admin';
 * import BookIcon from '@mui/icons-material/Book';
 * import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
 * import PeopleIcon from '@mui/icons-material/People';
 * import LabelIcon from '@mui/icons-material/Label';
 *
 * export const Menu = () => (
 *     <div>
 *         <DashboardMenuItem />
 *         <MenuItemLink to="/posts" primaryText="Posts" leftIcon={<BookIcon />}/>
 *         <MenuItemLink to="/comments" primaryText="Comments" leftIcon={<ChatBubbleIcon />}/>
 *         <MenuItemLink to="/users" primaryText="Users" leftIcon={<PeopleIcon />}/>
 *         <MenuItemLink to="/custom-route" primaryText="Miscellaneous" leftIcon={<LabelIcon />}/>
 *     </div>
 * );
 *
 * // to use this custom menu component, pass it to a custom Layout:
 * // in src/Layout.js
 * import { Layout } from 'react-admin';
 * import { Menu } from './Menu';
 *
 * export const Layout = (props) => <Layout {...props} menu={Menu} />;
 *
 * // then, use this layout in the <Admin layout> prop:
 * // in src/App.js
 * import { Layout }  from './Layout';
 *
 * const App = () => (
 *     <Admin layout={Layout} dataProvider={simpleRestProvider('http://path.to.my.api')}>
 *         // ...
 *     </Admin>
 * );
 */
exports.MenuItemLink = (0, react_1.forwardRef)(function (props, ref) {
    var className = props.className, primaryText = props.primaryText, leftIcon = props.leftIcon, onClick = props.onClick, sidebarIsOpen = props.sidebarIsOpen, tooltipProps = props.tooltipProps, rest = __rest(props, ["className", "primaryText", "leftIcon", "onClick", "sidebarIsOpen", "tooltipProps"]);
    var isSmall = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('md'); });
    var translate = (0, ra_core_1.useTranslate)();
    var basename = (0, ra_core_1.useBasename)();
    var _a = (0, useSidebarState_1.useSidebarState)(), open = _a[0], setOpen = _a[1];
    var handleMenuTap = (0, react_1.useCallback)(function (e) {
        if (isSmall) {
            setOpen(false);
        }
        onClick && onClick(e);
    }, [setOpen, isSmall, onClick]);
    var to = (typeof props.to === 'string' ? props.to : props.to.pathname) || '';
    var match = (0, react_router_dom_1.useMatch)({ path: to, end: to === "".concat(basename, "/") });
    var renderMenuItem = function () {
        var _a;
        return (react_1.default.createElement(StyledMenuItem, __assign({ className: (0, clsx_1.default)(className, (_a = {},
                _a[exports.MenuItemLinkClasses.active] = !!match,
                _a)), 
            // @ts-ignore
            component: LinkRef, ref: ref, tabIndex: 0 }, rest, { onClick: handleMenuTap }),
            leftIcon && (react_1.default.createElement(material_1.ListItemIcon, { className: exports.MenuItemLinkClasses.icon }, leftIcon)),
            typeof primaryText === 'string'
                ? translate(primaryText, { _: primaryText })
                : primaryText));
    };
    return open ? (renderMenuItem()) : (react_1.default.createElement(material_1.Tooltip, __assign({ title: typeof primaryText === 'string'
            ? translate(primaryText, { _: primaryText })
            : primaryText, placement: "right" }, tooltipProps), renderMenuItem()));
});
exports.MenuItemLink.propTypes = {
    className: prop_types_1.default.string,
    leftIcon: prop_types_1.default.element,
    onClick: prop_types_1.default.func,
    primaryText: prop_types_1.default.node,
    to: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    sidebarIsOpen: prop_types_1.default.bool,
};
var PREFIX = 'RaMenuItemLink';
exports.MenuItemLinkClasses = {
    active: "".concat(PREFIX, "-active"),
    icon: "".concat(PREFIX, "-icon"),
};
var StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            color: theme.palette.text.secondary
        },
        _b["&.".concat(exports.MenuItemLinkClasses.active)] = {
            color: theme.palette.text.primary,
        },
        _b["& .".concat(exports.MenuItemLinkClasses.icon)] = { minWidth: theme.spacing(5) },
        _b);
});
var LinkRef = (0, react_1.forwardRef)(function (props, ref) { return (react_1.default.createElement(react_router_dom_1.Link, __assign({ ref: ref }, props))); });
//# sourceMappingURL=MenuItemLink.js.map