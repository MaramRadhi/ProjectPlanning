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
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Children, memo } from 'react';
import PropTypes from 'prop-types';
import { AppBar as MuiAppBar, Toolbar, useMediaQuery, } from '@mui/material';
import { ComponentPropType, useLocales } from 'ra-core';
import { SidebarToggleButton } from './SidebarToggleButton';
import { LoadingIndicator } from './LoadingIndicator';
import { UserMenu } from './UserMenu';
import { HideOnScroll } from './HideOnScroll';
import { TitlePortal } from './TitlePortal';
import { LocalesMenuButton } from '../button';
/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be rendered as children of the AppBar
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example // add a custom button to the AppBar
 *
 * const MyAppBar = () => (
 *   <AppBar>
 *     <TitlePortal />
 *     <MyCustomButton />
 *   </AppBar>
 * );
 *
 * @example // without a user menu
 *
 * const MyAppBar = () => <AppBar userMenu={false} />;
 */
export var AppBar = memo(function (props) {
    var alwaysOn = props.alwaysOn, children = props.children, className = props.className, _a = props.color, color = _a === void 0 ? 'secondary' : _a, open = props.open, title = props.title, _b = props.toolbar, toolbar = _b === void 0 ? defaultToolbarElement : _b, _c = props.userMenu, userMenu = _c === void 0 ? DefaultUserMenu : _c, _d = props.container, Container = _d === void 0 ? alwaysOn ? 'div' : HideOnScroll : _d, rest = __rest(props, ["alwaysOn", "children", "className", "color", "open", "title", "toolbar", "userMenu", "container"]);
    var isXSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('sm');
    });
    return (React.createElement(Container, { className: className },
        React.createElement(StyledAppBar, __assign({ className: AppBarClasses.appBar, color: color }, rest),
            React.createElement(Toolbar, { disableGutters: true, variant: isXSmall ? 'regular' : 'dense', className: AppBarClasses.toolbar },
                React.createElement(SidebarToggleButton, { className: AppBarClasses.menuButton }),
                Children.count(children) === 0 ? (React.createElement(TitlePortal, { className: AppBarClasses.title })) : (children),
                toolbar,
                typeof userMenu === 'boolean' ? (userMenu === true ? (React.createElement(UserMenu, null)) : null) : (userMenu)))));
});
var DefaultToolbar = function () {
    var locales = useLocales();
    return (React.createElement(React.Fragment, null,
        locales && locales.length > 1 ? React.createElement(LocalesMenuButton, null) : null,
        React.createElement(LoadingIndicator, null)));
};
var defaultToolbarElement = React.createElement(DefaultToolbar, null);
AppBar.propTypes = {
    alwaysOn: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'default',
        'inherit',
        'primary',
        'secondary',
        'transparent',
    ]),
    container: ComponentPropType,
    /**
     * @deprecated
     */
    open: PropTypes.bool,
    toolbar: PropTypes.element,
    userMenu: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
};
var DefaultUserMenu = React.createElement(UserMenu, null);
var PREFIX = 'RaAppBar';
export var AppBarClasses = {
    appBar: "".concat(PREFIX, "-appBar"),
    toolbar: "".concat(PREFIX, "-toolbar"),
    menuButton: "".concat(PREFIX, "-menuButton"),
    menuButtonIconClosed: "".concat(PREFIX, "-menuButtonIconClosed"),
    menuButtonIconOpen: "".concat(PREFIX, "-menuButtonIconOpen"),
    title: "".concat(PREFIX, "-title"),
};
var StyledAppBar = styled(MuiAppBar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(AppBarClasses.toolbar)] = (_c = {
                padding: "0 ".concat(theme.spacing(1))
            },
            _c[theme.breakpoints.down('md')] = {
                minHeight: theme.spacing(6),
            },
            _c),
        _b["& .".concat(AppBarClasses.menuButton)] = {
            marginRight: '0.2em',
        },
        _b["& .".concat(AppBarClasses.title)] = {},
        _b);
});
//# sourceMappingURL=AppBar.js.map