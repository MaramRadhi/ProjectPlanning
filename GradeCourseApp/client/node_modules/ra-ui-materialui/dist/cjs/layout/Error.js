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
exports.ErrorClasses = exports.Error = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var Report_1 = __importDefault(require("@mui/icons-material/Report"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var History_1 = __importDefault(require("@mui/icons-material/History"));
var ra_core_1 = require("ra-core");
var Title_1 = require("./Title");
var useResetErrorBoundaryOnLocationChange_1 = require("./useResetErrorBoundaryOnLocationChange");
var Error = function (props) {
    var error = props.error, ErrorComponent = props.errorComponent, errorInfo = props.errorInfo, resetErrorBoundary = props.resetErrorBoundary, className = props.className, title = props.title, rest = __rest(props, ["error", "errorComponent", "errorInfo", "resetErrorBoundary", "className", "title"]);
    var translate = (0, ra_core_1.useTranslate)();
    (0, useResetErrorBoundaryOnLocationChange_1.useResetErrorBoundaryOnLocationChange)(resetErrorBoundary);
    if (ErrorComponent) {
        return (React.createElement(ErrorComponent, { error: error, errorInfo: errorInfo, title: title }));
    }
    return (React.createElement(react_1.Fragment, null,
        title && React.createElement(Title_1.Title, { title: title }),
        React.createElement(Root, __assign({ className: className }, rest),
            React.createElement("h1", { className: exports.ErrorClasses.title, role: "alert" },
                React.createElement(Report_1.default, { className: exports.ErrorClasses.icon }),
                translate('ra.page.error')),
            React.createElement("div", null, translate('ra.message.error')),
            process.env.NODE_ENV !== 'production' && (React.createElement(React.Fragment, null,
                React.createElement(material_1.Accordion, { className: exports.ErrorClasses.panel },
                    React.createElement(material_1.AccordionSummary, { expandIcon: React.createElement(ExpandMore_1.default, null), className: exports.ErrorClasses.panelSumary }, translate(error.message, {
                        _: error.message,
                    })),
                    React.createElement(material_1.AccordionDetails, { className: exports.ErrorClasses.panelDetails },
                        React.createElement("p", null, translate(error.message, {
                            _: error.message,
                        })),
                        React.createElement("p", null, errorInfo === null || errorInfo === void 0 ? void 0 : errorInfo.componentStack))),
                React.createElement("div", { className: exports.ErrorClasses.advice },
                    React.createElement(material_1.Typography, { align: "center" }, "Need help with this error? Try the following:"),
                    React.createElement(material_1.Typography, { component: "div" },
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                "Check the",
                                ' ',
                                React.createElement("a", { href: "https://marmelab.com/react-admin/Readme.html" }, "react-admin documentation")),
                            React.createElement("li", null,
                                "Search on",
                                ' ',
                                React.createElement("a", { href: "https://stackoverflow.com/questions/tagged/react-admin" }, "StackOverflow"),
                                ' ',
                                "for community answers"),
                            React.createElement("li", null,
                                "Get help from the core team via",
                                ' ',
                                React.createElement("a", { href: "https://marmelab.com/ra-enterprise/#fromsww" }, "react-admin Enterprise Edition"))))))),
            React.createElement("div", { className: exports.ErrorClasses.toolbar },
                React.createElement(material_1.Button, { variant: "contained", startIcon: React.createElement(History_1.default, null), onClick: goBack }, translate('ra.action.back'))))));
};
exports.Error = Error;
exports.Error.propTypes = {
    className: prop_types_1.default.string,
    error: prop_types_1.default.object.isRequired,
    errorInfo: prop_types_1.default.object,
    title: Title_1.TitlePropType,
};
var PREFIX = 'RaError';
exports.ErrorClasses = {
    container: "".concat(PREFIX, "-container"),
    title: "".concat(PREFIX, "-title"),
    icon: "".concat(PREFIX, "-icon"),
    panel: "".concat(PREFIX, "-panel"),
    panelSumary: "".concat(PREFIX, "-panelSumary"),
    panelDetails: "".concat(PREFIX, "-panelDetails"),
    toolbar: "".concat(PREFIX, "-toolbar"),
    advice: "".concat(PREFIX, "-advice"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        _b[theme.breakpoints.down('md')] = {
            padding: '1em',
        },
        _b.fontFamily = 'Roboto, sans-serif',
        _b.opacity = 0.5,
        _b["& .".concat(exports.ErrorClasses.title)] = {
            display: 'flex',
            alignItems: 'center',
        },
        _b["& .".concat(exports.ErrorClasses.icon)] = {
            width: '2em',
            height: '2em',
            marginRight: '0.5em',
        },
        _b["& .".concat(exports.ErrorClasses.panel)] = {
            marginTop: '1em',
            maxWidth: '60em',
        },
        _b["& .".concat(exports.ErrorClasses.panelSumary)] = {
            userSelect: 'all',
        },
        _b["& .".concat(exports.ErrorClasses.panelDetails)] = {
            whiteSpace: 'pre-wrap',
        },
        _b["& .".concat(exports.ErrorClasses.toolbar)] = {
            marginTop: '2em',
        },
        _b["& .".concat(exports.ErrorClasses.advice)] = {
            marginTop: '2em',
        },
        _b);
});
function goBack() {
    window.history.go(-1);
}
//# sourceMappingURL=Error.js.map