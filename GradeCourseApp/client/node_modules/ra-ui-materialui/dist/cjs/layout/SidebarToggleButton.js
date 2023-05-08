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
exports.SidebarToggleButtonClasses = exports.SidebarToggleButton = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var Menu_1 = __importDefault(require("@mui/icons-material/Menu"));
var ra_core_1 = require("ra-core");
var useSidebarState_1 = require("./useSidebarState");
/**
 * A button that toggles the sidebar. Used by default in the <AppBar>.
 * @param props The component props
 * @param {String} props.className An optional class name to apply to the button
 */
var SidebarToggleButton = function (props) {
    var translate = (0, ra_core_1.useTranslate)();
    var className = props.className;
    var _a = (0, useSidebarState_1.useSidebarState)(), open = _a[0], setOpen = _a[1];
    return (React.createElement(material_1.Tooltip, { className: className, title: translate(open ? 'ra.action.close_menu' : 'ra.action.open_menu', { _: 'Open/Close menu' }), enterDelay: 500 },
        React.createElement(StyledIconButton, { color: "inherit", onClick: function () { return setOpen(!open); } },
            React.createElement(Menu_1.default, { classes: {
                    root: open
                        ? exports.SidebarToggleButtonClasses.menuButtonIconOpen
                        : exports.SidebarToggleButtonClasses.menuButtonIconClosed,
                } }))));
};
exports.SidebarToggleButton = SidebarToggleButton;
var PREFIX = 'RaSidebarToggleButton';
exports.SidebarToggleButtonClasses = {
    menuButtonIconClosed: "".concat(PREFIX, "-menuButtonIconClosed"),
    menuButtonIconOpen: "".concat(PREFIX, "-menuButtonIconOpen"),
};
var StyledIconButton = (0, styles_1.styled)(material_1.IconButton, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.SidebarToggleButtonClasses.menuButtonIconClosed)] = {
            transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            transform: 'rotate(0deg)',
        },
        _b["& .".concat(exports.SidebarToggleButtonClasses.menuButtonIconOpen)] = {
            transition: theme.transitions.create(['transform'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            transform: 'rotate(180deg)',
        },
        _b);
});
//# sourceMappingURL=SidebarToggleButton.js.map