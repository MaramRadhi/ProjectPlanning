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
exports.DeleteWithConfirmButton = void 0;
var react_1 = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var styles_2 = require("@mui/material/styles");
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var clsx_1 = __importDefault(require("clsx"));
var inflection_1 = __importDefault(require("inflection"));
var ra_core_1 = require("ra-core");
var layout_1 = require("../layout");
var Button_1 = require("./Button");
var DeleteWithConfirmButton = function (props) {
    var className = props.className, _a = props.confirmTitle, confirmTitle = _a === void 0 ? 'ra.message.delete_title' : _a, _b = props.confirmContent, confirmContent = _b === void 0 ? 'ra.message.delete_content' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, _d = props.label, label = _d === void 0 ? 'ra.action.delete' : _d, _e = props.mutationMode, mutationMode = _e === void 0 ? 'pessimistic' : _e, onClick = props.onClick, _f = props.redirect, redirect = _f === void 0 ? 'list' : _f, _g = props.translateOptions, translateOptions = _g === void 0 ? {} : _g, mutationOptions = props.mutationOptions, rest = __rest(props, ["className", "confirmTitle", "confirmContent", "icon", "label", "mutationMode", "onClick", "redirect", "translateOptions", "mutationOptions"]);
    var translate = (0, ra_core_1.useTranslate)();
    var record = (0, ra_core_1.useRecordContext)(props);
    var resource = (0, ra_core_1.useResourceContext)(props);
    var _h = (0, ra_core_1.useDeleteWithConfirmController)({
        record: record,
        redirect: redirect,
        mutationMode: mutationMode,
        onClick: onClick,
        mutationOptions: mutationOptions,
        resource: resource,
    }), open = _h.open, isLoading = _h.isLoading, handleDialogOpen = _h.handleDialogOpen, handleDialogClose = _h.handleDialogClose, handleDelete = _h.handleDelete;
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(StyledButton, __assign({ onClick: handleDialogOpen, label: label, className: (0, clsx_1.default)('ra-delete-button', className), key: "button" }, rest), icon),
        react_1.default.createElement(layout_1.Confirm, { isOpen: open, loading: isLoading, title: confirmTitle, content: confirmContent, translateOptions: __assign({ name: translate("resources.".concat(resource, ".forcedCaseName"), {
                    smart_count: 1,
                    _: inflection_1.default.humanize(translate("resources.".concat(resource, ".name"), {
                        smart_count: 1,
                        _: inflection_1.default.singularize(resource),
                    }), true),
                }), id: record.id }, translateOptions), onConfirm: handleDelete, onClose: handleDialogClose })));
};
exports.DeleteWithConfirmButton = DeleteWithConfirmButton;
var defaultIcon = react_1.default.createElement(Delete_1.default, null);
exports.DeleteWithConfirmButton.propTypes = {
    className: prop_types_1.default.string,
    confirmTitle: prop_types_1.default.string,
    confirmContent: prop_types_1.default.string,
    label: prop_types_1.default.string,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: prop_types_1.default.any,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    icon: prop_types_1.default.element,
    translateOptions: prop_types_1.default.object,
};
var PREFIX = 'RaDeleteWithConfirmButton';
var StyledButton = (0, styles_1.styled)(Button_1.Button, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: (0, styles_2.alpha)(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    });
});
//# sourceMappingURL=DeleteWithConfirmButton.js.map