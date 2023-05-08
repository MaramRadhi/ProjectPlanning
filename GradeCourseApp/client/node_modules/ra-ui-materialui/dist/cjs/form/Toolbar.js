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
exports.ToolbarClasses = exports.Toolbar = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var button_1 = require("../button");
/**
 * The Toolbar displayed at the bottom of forms.
 *
 * @example Always enable the <SaveButton />
 *
 * import * as React from 'react';
 * import {
 *     Create,
 *     DateInput,
 *     TextInput,
 *     SimpleForm,
 *     Toolbar,
 *     SaveButton,
 *     required,
 * } from 'react-admin';
 *
 * const now = new Date();
 * const defaultSort = { field: 'title', order: 'ASC' };
 *
 * const MyToolbar = props => (
 *     <Toolbar {...props} >
 *         <SaveButton alwaysEnable />
 *     </Toolbar>
 * );
 *
 * const CommentCreate = () => (
 *     <Create>
 *         <SimpleForm redirect={false} toolbar={<MyToolbar />}>
 *             <TextInput
 *                 source="author.name"
 *                 fullWidth
 *             />
 *             <DateInput source="created_at" defaultValue={now} />
 *             <TextInput source="body" fullWidth={true} multiline={true} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <SimpleForm>)
 * @prop {ReactElement[]} children Customize the buttons you want to display in the <Toolbar>.
 *
 */
var Toolbar = function (props) {
    var _a;
    var children = props.children, className = props.className, resource = props.resource, rest = __rest(props, ["children", "className", "resource"]);
    var isXs = (0, material_1.useMediaQuery)(function (theme) { return theme.breakpoints.down('sm'); });
    return (React.createElement(StyledToolbar, __assign({ className: (0, clsx_1.default)((_a = {},
            _a[exports.ToolbarClasses.mobileToolbar] = isXs,
            _a[exports.ToolbarClasses.desktopToolbar] = !isXs,
            _a), className), role: "toolbar" }, rest), react_1.Children.count(children) === 0 ? (React.createElement("div", { className: exports.ToolbarClasses.defaultToolbar },
        React.createElement(button_1.SaveButton, null),
        React.createElement(button_1.DeleteButton, { resource: resource }))) : (children)));
};
exports.Toolbar = Toolbar;
exports.Toolbar.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    resource: prop_types_1.default.string,
};
var PREFIX = 'RaToolbar';
exports.ToolbarClasses = {
    desktopToolbar: "".concat(PREFIX, "-desktopToolbar"),
    mobileToolbar: "".concat(PREFIX, "-mobileToolbar"),
    defaultToolbar: "".concat(PREFIX, "-defaultToolbar"),
};
var StyledToolbar = (0, styles_1.styled)(material_1.Toolbar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            backgroundColor: theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900]
        },
        _b["&.".concat(exports.ToolbarClasses.desktopToolbar)] = {},
        _b["&.".concat(exports.ToolbarClasses.mobileToolbar)] = {
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '16px',
            width: '100%',
            boxSizing: 'border-box',
            flexShrink: 0,
            zIndex: 2,
        },
        _b["& .".concat(exports.ToolbarClasses.defaultToolbar)] = {
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
        },
        _b);
});
//# sourceMappingURL=Toolbar.js.map