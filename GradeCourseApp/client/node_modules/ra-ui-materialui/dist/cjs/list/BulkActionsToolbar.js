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
exports.BulkActionsToolbarClasses = exports.BulkActionsToolbar = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var styles_1 = require("@mui/material/styles");
var clsx_1 = __importDefault(require("clsx"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_2 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Close_1 = __importDefault(require("@mui/icons-material/Close"));
var ra_core_1 = require("ra-core");
var TopToolbar_1 = __importDefault(require("../layout/TopToolbar"));
var BulkActionsToolbar = function (props) {
    var _a;
    var _b = props.label, label = _b === void 0 ? 'ra.action.bulk_actions' : _b, children = props.children, className = props.className, rest = __rest(props, ["label", "children", "className"]);
    var _c = (0, ra_core_1.useListContext)(props), filterValues = _c.filterValues, resource = _c.resource, _d = _c.selectedIds, selectedIds = _d === void 0 ? [] : _d, onUnselectItems = _c.onUnselectItems;
    var translate = (0, ra_core_1.useTranslate)();
    var handleUnselectAllClick = (0, react_1.useCallback)(function () {
        onUnselectItems();
    }, [onUnselectItems]);
    return (React.createElement(Root, { className: className },
        React.createElement(Toolbar_1.default, __assign({ "data-test": "bulk-actions-toolbar", className: (0, clsx_1.default)(exports.BulkActionsToolbarClasses.toolbar, (_a = {},
                _a[exports.BulkActionsToolbarClasses.collapsed] = selectedIds.length === 0,
                _a)) }, (0, ra_core_1.sanitizeListRestProps)(rest)),
            React.createElement("div", { className: exports.BulkActionsToolbarClasses.title },
                React.createElement(IconButton_1.default, { className: exports.BulkActionsToolbarClasses.icon, "aria-label": translate('ra.action.unselect'), title: translate('ra.action.unselect'), onClick: handleUnselectAllClick, size: "small" },
                    React.createElement(Close_1.default, { fontSize: "small" })),
                React.createElement(Typography_1.default, { color: "inherit", variant: "subtitle1" }, translate(label, {
                    _: label,
                    smart_count: selectedIds.length,
                }))),
            React.createElement(TopToolbar_1.default, { className: exports.BulkActionsToolbarClasses.topToolbar }, react_1.Children.map(children, function (child) {
                return (0, react_1.isValidElement)(child)
                    ? (0, react_1.cloneElement)(child, {
                        filterValues: filterValues,
                        resource: resource,
                        selectedIds: selectedIds,
                    })
                    : null;
            })))));
};
exports.BulkActionsToolbar = BulkActionsToolbar;
exports.BulkActionsToolbar.propTypes = {
    children: prop_types_1.default.node,
    label: prop_types_1.default.string,
};
var PREFIX = 'RaBulkActionsToolbar';
exports.BulkActionsToolbarClasses = {
    toolbar: "".concat(PREFIX, "-toolbar"),
    topToolbar: "".concat(PREFIX, "-topToolbar"),
    buttons: "".concat(PREFIX, "-buttons"),
    collapsed: "".concat(PREFIX, "-collapsed"),
    title: "".concat(PREFIX, "-title"),
    icon: "".concat(PREFIX, "-icon"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: 'relative'
        },
        _b["& .".concat(exports.BulkActionsToolbarClasses.toolbar)] = {
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 3,
            color: theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            justifyContent: 'space-between',
            backgroundColor: theme.palette.mode === 'light'
                ? (0, styles_2.lighten)(theme.palette.primary.light, 0.8)
                : theme.palette.primary.dark,
            minHeight: theme.spacing(6),
            height: theme.spacing(6),
            transform: "translateY(-".concat(theme.spacing(6), ")"),
            transition: "".concat(theme.transitions.create('height'), ", ").concat(theme.transitions.create('min-height'), ", ").concat(theme.transitions.create('transform')),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderTopRightRadius: theme.shape.borderRadius,
        },
        _b["& .".concat(exports.BulkActionsToolbarClasses.topToolbar)] = {
            paddingBottom: theme.spacing(1),
            minHeight: 'auto',
        },
        _b["& .".concat(exports.BulkActionsToolbarClasses.buttons)] = {},
        _b["& .".concat(exports.BulkActionsToolbarClasses.collapsed)] = {
            minHeight: 0,
            height: 0,
            transform: "translateY(0)",
            overflowY: 'hidden',
        },
        _b["& .".concat(exports.BulkActionsToolbarClasses.title)] = {
            display: 'flex',
            flex: '0 0 auto',
        },
        _b["& .".concat(exports.BulkActionsToolbarClasses.icon)] = {
            marginLeft: '-0.5em',
            marginRight: '0.5em',
        },
        _b);
});
//# sourceMappingURL=BulkActionsToolbar.js.map