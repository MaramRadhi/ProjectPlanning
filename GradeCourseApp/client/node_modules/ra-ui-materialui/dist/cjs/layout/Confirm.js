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
exports.ConfirmClasses = exports.Confirm = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogContentText_1 = __importDefault(require("@mui/material/DialogContentText"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var styles_2 = require("@mui/material/styles");
var CheckCircle_1 = __importDefault(require("@mui/icons-material/CheckCircle"));
var ErrorOutline_1 = __importDefault(require("@mui/icons-material/ErrorOutline"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
var Confirm = function (props) {
    var _a;
    var className = props.className, _b = props.isOpen, isOpen = _b === void 0 ? false : _b, loading = props.loading, title = props.title, content = props.content, _c = props.cancel, cancel = _c === void 0 ? 'ra.action.cancel' : _c, _d = props.confirm, confirm = _d === void 0 ? 'ra.action.confirm' : _d, _e = props.confirmColor, confirmColor = _e === void 0 ? 'primary' : _e, _f = props.ConfirmIcon, ConfirmIcon = _f === void 0 ? CheckCircle_1.default : _f, _g = props.CancelIcon, CancelIcon = _g === void 0 ? ErrorOutline_1.default : _g, onClose = props.onClose, onConfirm = props.onConfirm, _h = props.translateOptions, translateOptions = _h === void 0 ? {} : _h, rest = __rest(props, ["className", "isOpen", "loading", "title", "content", "cancel", "confirm", "confirmColor", "ConfirmIcon", "CancelIcon", "onClose", "onConfirm", "translateOptions"]);
    var translate = (0, ra_core_1.useTranslate)();
    var handleConfirm = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        onConfirm(e);
    }, [onConfirm]);
    var handleClick = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
    }, []);
    return (React.createElement(StyledDialog, __assign({ className: className, open: isOpen, onClose: onClose, onClick: handleClick, "aria-labelledby": "alert-dialog-title" }, rest),
        React.createElement(DialogTitle_1.default, { id: "alert-dialog-title" }, translate(title, __assign({ _: title }, translateOptions))),
        React.createElement(DialogContent_1.default, null, typeof content === 'string' ? (React.createElement(DialogContentText_1.default, null, translate(content, __assign({ _: content }, translateOptions)))) : (content)),
        React.createElement(DialogActions_1.default, null,
            React.createElement(Button_1.default, { disabled: loading, onClick: onClose, startIcon: React.createElement(CancelIcon, null) }, translate(cancel, { _: cancel })),
            React.createElement(Button_1.default, { disabled: loading, onClick: handleConfirm, className: (0, clsx_1.default)('ra-confirm', (_a = {},
                    _a[exports.ConfirmClasses.confirmWarning] = confirmColor === 'warning',
                    _a[exports.ConfirmClasses.confirmPrimary] = confirmColor === 'primary',
                    _a)), autoFocus: true, startIcon: React.createElement(ConfirmIcon, null) }, translate(confirm, { _: confirm })))));
};
exports.Confirm = Confirm;
exports.Confirm.propTypes = {
    cancel: prop_types_1.default.string,
    className: prop_types_1.default.string,
    confirm: prop_types_1.default.string,
    confirmColor: prop_types_1.default.string,
    ConfirmIcon: prop_types_1.default.elementType,
    CancelIcon: prop_types_1.default.elementType,
    content: prop_types_1.default.node.isRequired,
    isOpen: prop_types_1.default.bool,
    loading: prop_types_1.default.bool,
    onClose: prop_types_1.default.func.isRequired,
    onConfirm: prop_types_1.default.func.isRequired,
    title: prop_types_1.default.string.isRequired,
    sx: prop_types_1.default.any,
};
var PREFIX = 'RaConfirm';
exports.ConfirmClasses = {
    confirmPrimary: "".concat(PREFIX, "-confirmPrimary"),
    confirmWarning: "".concat(PREFIX, "-confirmWarning"),
};
var StyledDialog = (0, styles_1.styled)(Dialog_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.ConfirmClasses.confirmPrimary)] = {
            color: theme.palette.primary.main,
        },
        _b["& .".concat(exports.ConfirmClasses.confirmWarning)] = {
            color: theme.palette.error.main,
            '&:hover': {
                backgroundColor: (0, styles_2.alpha)(theme.palette.error.main, 0.12),
                // Reset on mouse devices
                '@media (hover: none)': {
                    backgroundColor: 'transparent',
                },
            },
        },
        _b);
});
//# sourceMappingURL=Confirm.js.map