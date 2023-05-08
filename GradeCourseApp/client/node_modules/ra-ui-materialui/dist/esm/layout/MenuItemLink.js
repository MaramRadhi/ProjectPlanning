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
import React, { forwardRef, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link, useMatch } from 'react-router-dom';
import { MenuItem, ListItemIcon, Tooltip, useMediaQuery, } from '@mui/material';
import { useSidebarState } from './useSidebarState';
import { useTranslate, useBasename } from 'ra-core';
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
export var MenuItemLink = forwardRef(function (props, ref) {
    var className = props.className, primaryText = props.primaryText, leftIcon = props.leftIcon, onClick = props.onClick, sidebarIsOpen = props.sidebarIsOpen, tooltipProps = props.tooltipProps, rest = __rest(props, ["className", "primaryText", "leftIcon", "onClick", "sidebarIsOpen", "tooltipProps"]);
    var isSmall = useMediaQuery(function (theme) { return theme.breakpoints.down('md'); });
    var translate = useTranslate();
    var basename = useBasename();
    var _a = useSidebarState(), open = _a[0], setOpen = _a[1];
    var handleMenuTap = useCallback(function (e) {
        if (isSmall) {
            setOpen(false);
        }
        onClick && onClick(e);
    }, [setOpen, isSmall, onClick]);
    var to = (typeof props.to === 'string' ? props.to : props.to.pathname) || '';
    var match = useMatch({ path: to, end: to === "".concat(basename, "/") });
    var renderMenuItem = function () {
        var _a;
        return (React.createElement(StyledMenuItem, __assign({ className: clsx(className, (_a = {},
                _a[MenuItemLinkClasses.active] = !!match,
                _a)), 
            // @ts-ignore
            component: LinkRef, ref: ref, tabIndex: 0 }, rest, { onClick: handleMenuTap }),
            leftIcon && (React.createElement(ListItemIcon, { className: MenuItemLinkClasses.icon }, leftIcon)),
            typeof primaryText === 'string'
                ? translate(primaryText, { _: primaryText })
                : primaryText));
    };
    return open ? (renderMenuItem()) : (React.createElement(Tooltip, __assign({ title: typeof primaryText === 'string'
            ? translate(primaryText, { _: primaryText })
            : primaryText, placement: "right" }, tooltipProps), renderMenuItem()));
});
MenuItemLink.propTypes = {
    className: PropTypes.string,
    leftIcon: PropTypes.element,
    onClick: PropTypes.func,
    primaryText: PropTypes.node,
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    sidebarIsOpen: PropTypes.bool,
};
var PREFIX = 'RaMenuItemLink';
export var MenuItemLinkClasses = {
    active: "".concat(PREFIX, "-active"),
    icon: "".concat(PREFIX, "-icon"),
};
var StyledMenuItem = styled(MenuItem, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            color: theme.palette.text.secondary
        },
        _b["&.".concat(MenuItemLinkClasses.active)] = {
            color: theme.palette.text.primary,
        },
        _b["& .".concat(MenuItemLinkClasses.icon)] = { minWidth: theme.spacing(5) },
        _b);
});
var LinkRef = forwardRef(function (props, ref) { return (React.createElement(Link, __assign({ ref: ref }, props))); });
//# sourceMappingURL=MenuItemLink.js.map