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
exports.LogoutClasses = exports.Logout = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var PowerSettingsNew_1 = __importDefault(require("@mui/icons-material/PowerSettingsNew"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
exports.Logout = React.forwardRef(function Logout(props, ref) {
    var className = props.className, redirectTo = props.redirectTo, icon = props.icon, rest = __rest(props, ["className", "redirectTo", "icon"]);
    var authenticated = (0, ra_core_1.useAuthState)().authenticated;
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var translate = (0, ra_core_1.useTranslate)();
    var logout = (0, ra_core_1.useLogout)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var handleClick = (0, react_1.useCallback)(function () { return logout(null, redirectTo, false); }, [
        redirectTo,
        logout,
    ]);
    if (!authenticated)
        return null;
    return (React.createElement(StyledMenuItem, __assign({ className: (0, clsx_1.default)('logout', className), onClick: handleClick, ref: ref, 
        // @ts-ignore
        component: isXSmall ? 'span' : 'li' }, rest),
        React.createElement(material_1.ListItemIcon, { className: exports.LogoutClasses.icon }, icon ? icon : React.createElement(PowerSettingsNew_1.default, { fontSize: "small" })),
        React.createElement(material_1.ListItemText, null, translate('ra.auth.logout', { _: 'Logout' }))));
});
exports.Logout.propTypes = {
    className: prop_types_1.default.string,
    redirectTo: prop_types_1.default.string,
    icon: prop_types_1.default.element,
};
var PREFIX = 'RaLogout';
exports.LogoutClasses = {
    icon: "".concat(PREFIX, "-icon"),
};
var StyledMenuItem = (0, styles_1.styled)(material_1.MenuItem, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.LogoutClasses.icon)] = {},
        _b);
});
//# sourceMappingURL=Logout.js.map