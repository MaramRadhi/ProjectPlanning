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
exports.BulkDeleteWithUndoButton = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
var styles_2 = require("@mui/material/styles");
var ra_core_1 = require("ra-core");
var Button_1 = require("./Button");
var BulkDeleteWithUndoButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'ra.action.delete' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, _c = props.mutationOptions, mutationOptions = _c === void 0 ? {} : _c, rest = __rest(props, ["label", "icon", "onClick", "mutationOptions"]);
    var mutationMeta = mutationOptions.meta, otherMutationOptions = __rest(mutationOptions, ["meta"]);
    var _d = (0, ra_core_1.useListContext)(props), selectedIds = _d.selectedIds, onUnselectItems = _d.onUnselectItems;
    var notify = (0, ra_core_1.useNotify)();
    var resource = (0, ra_core_1.useResourceContext)(props);
    var refresh = (0, ra_core_1.useRefresh)();
    var _e = (0, ra_core_1.useDeleteMany)(), deleteMany = _e[0], isLoading = _e[1].isLoading;
    var handleClick = function (e) {
        deleteMany(resource, { ids: selectedIds, meta: mutationMeta }, __assign({ onSuccess: function () {
                notify('ra.notification.deleted', {
                    type: 'info',
                    messageArgs: { smart_count: selectedIds.length },
                    undoable: true,
                });
                onUnselectItems();
            }, onError: function (error) {
                notify(typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error', {
                    type: 'error',
                    messageArgs: {
                        _: typeof error === 'string'
                            ? error
                            : error && error.message
                                ? error.message
                                : undefined,
                    },
                });
                refresh();
            }, mutationMode: 'undoable' }, otherMutationOptions));
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(StyledButton, __assign({ onClick: handleClick, label: label, disabled: isLoading }, sanitizeRestProps(rest)), icon));
};
exports.BulkDeleteWithUndoButton = BulkDeleteWithUndoButton;
var defaultIcon = React.createElement(Delete_1.default, null);
var sanitizeRestProps = function (_a) {
    var classes = _a.classes, filterValues = _a.filterValues, label = _a.label, selectedIds = _a.selectedIds, rest = __rest(_a, ["classes", "filterValues", "label", "selectedIds"]);
    return rest;
};
var PREFIX = 'RaBulkDeleteWithUndoButton';
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
exports.BulkDeleteWithUndoButton.propTypes = {
    label: prop_types_1.default.string,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    icon: prop_types_1.default.element,
};
//# sourceMappingURL=BulkDeleteWithUndoButton.js.map