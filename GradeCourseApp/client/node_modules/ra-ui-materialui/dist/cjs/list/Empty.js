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
exports.EmptyClasses = exports.Empty = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var Inbox_1 = __importDefault(require("@mui/icons-material/Inbox"));
var ra_core_1 = require("ra-core");
var button_1 = require("../button");
var Empty = function (props) {
    var className = props.className;
    var hasCreate = (0, ra_core_1.useResourceDefinition)(props).hasCreate;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var translate = (0, ra_core_1.useTranslate)();
    var getResourceLabel = (0, ra_core_1.useGetResourceLabel)();
    var resourceName = translate("resources.".concat(resource, ".forcedCaseName"), {
        smart_count: 0,
        _: getResourceLabel(resource, 0),
    });
    var emptyMessage = translate('ra.page.empty', { name: resourceName });
    var inviteMessage = translate('ra.page.invite');
    return (React.createElement(Root, { className: className },
        React.createElement("div", { className: exports.EmptyClasses.message },
            React.createElement(Inbox_1.default, { className: exports.EmptyClasses.icon }),
            React.createElement(material_1.Typography, { variant: "h4", paragraph: true }, translate("resources.".concat(resource, ".empty"), {
                _: emptyMessage,
            })),
            hasCreate && (React.createElement(material_1.Typography, { variant: "body1" }, translate("resources.".concat(resource, ".invite"), {
                _: inviteMessage,
            })))),
        hasCreate && (React.createElement("div", { className: exports.EmptyClasses.toolbar },
            React.createElement(button_1.CreateButton, { variant: "contained" })))));
};
exports.Empty = Empty;
var PREFIX = 'RaEmpty';
exports.EmptyClasses = {
    message: "".concat(PREFIX, "-message"),
    icon: "".concat(PREFIX, "-icon"),
    toolbar: "".concat(PREFIX, "-toolbar"),
};
var Root = (0, styles_1.styled)('span', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            flex: 1
        },
        _b["& .".concat(exports.EmptyClasses.message)] = {
            textAlign: 'center',
            opacity: theme.palette.mode === 'light' ? 0.5 : 0.8,
            margin: '0 1em',
            color: theme.palette.mode === 'light'
                ? 'inherit'
                : theme.palette.text.primary,
        },
        _b["& .".concat(exports.EmptyClasses.icon)] = {
            width: '9em',
            height: '9em',
        },
        _b["& .".concat(exports.EmptyClasses.toolbar)] = {
            textAlign: 'center',
            marginTop: '2em',
        },
        _b);
});
//# sourceMappingURL=Empty.js.map