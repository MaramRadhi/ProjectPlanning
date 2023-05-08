"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipNavigationButton = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("@mui/material/styles");
var Button_1 = require("./Button");
var SkipNavigationButton = function () {
    return (react_1.default.createElement(StyledButton, { onClick: skipToContent, className: 'skip-nav-button', label: "ra.navigation.skip_nav", variant: "contained" }));
};
exports.SkipNavigationButton = SkipNavigationButton;
var PREFIX = 'RaSkipNavigationButton';
var StyledButton = (0, styles_1.styled)(Button_1.Button, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        position: 'fixed',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.default,
        color: theme.palette.getContrastText(theme.palette.background.default),
        transition: theme.transitions.create(['top', 'opacity'], {
            easing: theme.transitions.easing.easeIn,
            duration: theme.transitions.duration.leavingScreen,
        }),
        left: theme.spacing(2),
        top: theme.spacing(-10),
        zIndex: 5000,
        '&:hover': {
            opacity: 0.8,
            backgroundColor: theme.palette.background.default,
        },
        '&:focus': {
            top: theme.spacing(2),
            transition: theme.transitions.create(['top', 'opacity'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    });
});
var skipToContent = function () {
    if (typeof document === 'undefined')
        return;
    var element = document.getElementById('main-content');
    if (!element) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('No element with id "main-content" was found. Ensure the element that contains your main content has an id of "main-content".');
        }
        return;
    }
    element.setAttribute('tabIndex', '-1');
    element.focus();
    element.blur();
    element.removeAttribute('tabIndex');
};
//# sourceMappingURL=SkipNavigationButton.js.map