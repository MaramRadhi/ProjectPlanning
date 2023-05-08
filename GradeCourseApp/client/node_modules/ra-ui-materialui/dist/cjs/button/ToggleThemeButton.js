"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleThemeButton = void 0;
var react_1 = __importDefault(require("react"));
var material_1 = require("@mui/material");
var Brightness4_1 = __importDefault(require("@mui/icons-material/Brightness4"));
var Brightness7_1 = __importDefault(require("@mui/icons-material/Brightness7"));
var ra_core_1 = require("ra-core");
var layout_1 = require("../layout");
/**
 * Button toggling the theme (light or dark).
 *
 * @example
 * import { AppBar, TitlePortal, ToggleThemeButton } from 'react-admin';
 *
 * const MyAppBar = () => (
 *     <AppBar>
 *         <TitlePortal />
 *         <ToggleThemeButton lightTheme={lightTheme} darkTheme={darkTheme} />
 *     </AppBar>
 * );
 *
 * const MyLayout = props => <Layout {...props} appBar={MyAppBar} />;
 */
var ToggleThemeButton = function (props) {
    var translate = (0, ra_core_1.useTranslate)();
    var darkTheme = props.darkTheme, lightTheme = props.lightTheme;
    var _a = (0, layout_1.useTheme)(), theme = _a[0], setTheme = _a[1];
    var handleTogglePaletteType = function () {
        setTheme((theme === null || theme === void 0 ? void 0 : theme.palette.mode) === 'dark' ? lightTheme : darkTheme);
    };
    var toggleThemeTitle = translate('ra.action.toggle_theme', {
        _: 'Toggle Theme',
    });
    return (react_1.default.createElement(material_1.Tooltip, { title: toggleThemeTitle, enterDelay: 300 },
        react_1.default.createElement(material_1.IconButton, { color: "inherit", onClick: handleTogglePaletteType, "aria-label": toggleThemeTitle }, (theme === null || theme === void 0 ? void 0 : theme.palette.mode) === 'dark' ? (react_1.default.createElement(Brightness7_1.default, null)) : (react_1.default.createElement(Brightness4_1.default, null)))));
};
exports.ToggleThemeButton = ToggleThemeButton;
//# sourceMappingURL=ToggleThemeButton.js.map