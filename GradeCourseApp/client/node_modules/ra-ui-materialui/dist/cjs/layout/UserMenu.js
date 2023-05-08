"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMenuClasses = exports.UserMenu = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var AccountCircle_1 = __importDefault(require("@mui/icons-material/AccountCircle"));
var UserMenuContextProvider_1 = require("./UserMenuContextProvider");
var Logout_1 = require("../auth/Logout");
/**
 * The UserMenu component renders a Mui Button that shows a Menu.
 * It accepts children that must be Mui MenuItem components.
 *
 * @example
 * import { Logout, UserMenu, useUserMenu } from 'react-admin';
 * import MenuItem from '@mui/material/MenuItem';
 * import ListItemIcon from '@mui/material/ListItemIcon';
 * import ListItemText from '@mui/material/ListItemText';
 * import SettingsIcon from '@mui/icons-material/Settings';

 * const ConfigurationMenu = React.forwardRef((props, ref) => {
 *     const { onClose } = useUserMenu();
 *     return (
 *         <MenuItem
 *             ref={ref}
 *             {...props}
 *             to="/configuration"
 *             onClick={onClose}
 *         >
 *             <ListItemIcon>
 *                 <SettingsIcon />
 *             </ListItemIcon>
 *             <ListItemText>Configuration</ListItemText>
 *         </MenuItem>
 *     );
 * });
 *
 * export const MyUserMenu = () => (
 *     <UserMenu>
 *         <ConfigurationMenu />
 *         <Logout />
 *     </UserMenu>
 * );
 * @param props
 * @param {ReactNode} props.children React node/s to be rendered as children of the UserMenu. Must be Mui MenuItem components
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.label The label of the UserMenu button. Accepts translation keys
 * @param {Element} props.icon The icon of the UserMenu button.
 *
 */
var UserMenu = function (props) {
    var _a = (0, react_1.useState)(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var translate = (0, ra_core_1.useTranslate)();
    var _b = (0, ra_core_1.useGetIdentity)(), isLoading = _b.isLoading, identity = _b.identity;
    var authProvider = (0, ra_core_1.useAuthProvider)();
    var isLargeEnough = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.up('sm');
    });
    var _c = props.children, children = _c === void 0 ? !!authProvider ? React.createElement(Logout_1.Logout, null) : null : _c, className = props.className, _d = props.label, label = _d === void 0 ? 'ra.auth.user_menu' : _d, _e = props.icon, icon = _e === void 0 ? defaultIcon : _e;
    var handleMenu = function (event) { return setAnchorEl(event.currentTarget); };
    var handleClose = (0, react_1.useCallback)(function () { return setAnchorEl(null); }, []);
    var context = (0, react_1.useMemo)(function () { return ({ onClose: handleClose }); }, [handleClose]);
    if (!children)
        return null;
    var open = Boolean(anchorEl);
    return (React.createElement(Root, { className: className },
        isLargeEnough && !isLoading && (identity === null || identity === void 0 ? void 0 : identity.fullName) ? (React.createElement(material_1.Button, { "aria-label": label && translate(label, { _: label }), className: exports.UserMenuClasses.userButton, color: "inherit", startIcon: identity.avatar ? (React.createElement(material_1.Avatar, { className: exports.UserMenuClasses.avatar, src: identity.avatar, alt: identity.fullName })) : (icon), onClick: handleMenu }, identity.fullName)) : (React.createElement(material_1.Tooltip, { title: label && translate(label, { _: 'Profile' }) },
            React.createElement(material_1.IconButton, { "aria-label": label && translate(label, { _: 'Profile' }), "aria-owns": open ? 'menu-appbar' : null, "aria-haspopup": true, color: "inherit", onClick: handleMenu }, !isLoading && (identity === null || identity === void 0 ? void 0 : identity.avatar) ? (React.createElement(material_1.Avatar, { className: exports.UserMenuClasses.avatar, src: identity.avatar, alt: identity.fullName })) : (icon)))),
        React.createElement(UserMenuContextProvider_1.UserMenuContextProvider, { value: context },
            React.createElement(material_1.Menu, { id: "menu-appbar", disableScrollLock: true, anchorEl: anchorEl, anchorOrigin: AnchorOrigin, transformOrigin: TransformOrigin, open: open, onClose: handleClose }, children))));
};
exports.UserMenu = UserMenu;
exports.UserMenu.propTypes = {
    children: prop_types_1.default.node,
    classes: prop_types_1.default.object,
    label: prop_types_1.default.string,
    icon: prop_types_1.default.node,
};
var PREFIX = 'RaUserMenu';
exports.UserMenuClasses = {
    userButton: "".concat(PREFIX, "-userButton"),
    avatar: "".concat(PREFIX, "-avatar"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.UserMenuClasses.userButton)] = {
            textTransform: 'none',
            marginInlineStart: theme.spacing(0.5),
        },
        _b["& .".concat(exports.UserMenuClasses.avatar)] = {
            width: theme.spacing(4),
            height: theme.spacing(4),
        },
        _b);
});
var defaultIcon = React.createElement(AccountCircle_1.default, null);
var AnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'right',
};
var TransformOrigin = {
    vertical: 'top',
    horizontal: 'right',
};
//# sourceMappingURL=UserMenu.js.map