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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectColumnsButton = void 0;
var React = __importStar(require("react"));
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var ViewWeek_1 = __importDefault(require("@mui/icons-material/ViewWeek"));
var preferences_1 = require("../../preferences");
var styles_1 = require("@mui/material/styles");
/**
 * Renders a button that lets users show / hide columns in a configurable datagrid
 *
 * @example
 * import { SelectColumnsButton, DatagridConfigurable } from 'react-admin';
 *
 * const PostListActions = () => (
 *   <TopToolbar>
        <SelectColumnsButton />
        <FilterButton />
 *   </TopToolbar>
 * );
 *
 * const PostList = () => (
 *   <List actions={<PostListActions />}>
 *     <DatagridConfigurable>
 *       <TextField source="title" />
 *       <TextField source="author" />
         ...
 *     </DatagridConfigurable>
 *   </List>
 * );
 */
var SelectColumnsButton = function (props) {
    var preferenceKey = props.preferenceKey;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var finalPreferenceKey = preferenceKey || "".concat(resource, ".datagrid");
    var _a = React.useState(null), anchorEl = _a[0], setAnchorEl = _a[1];
    var _b = (0, ra_core_1.useStore)("preferences.".concat(finalPreferenceKey, ".availableColumns"), []), availableColumns = _b[0], setAvailableColumns = _b[1];
    var omit = (0, ra_core_1.useStore)("preferences.".concat(finalPreferenceKey, ".omit"), [])[0];
    var _c = (0, ra_core_1.useStore)("preferences.".concat(finalPreferenceKey, ".columns"), availableColumns
        .filter(function (column) { return !(omit === null || omit === void 0 ? void 0 : omit.includes(column.source)); })
        .map(function (column) { return column.index; })), columns = _c[0], setColumns = _c[1];
    var translate = (0, ra_core_1.useTranslate)();
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var title = translate('ra.action.select_columns', { _: 'Columns' });
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleToggle = function (event) {
        if (event.target.checked) {
            // add the column at the right position
            setColumns(availableColumns
                .filter(function (column) {
                return column.index === event.target.name ||
                    columns.includes(column.index);
            })
                .map(function (column) { return column.index; }));
        }
        else {
            setColumns(columns.filter(function (index) { return index !== event.target.name; }));
        }
    };
    var handleMove = function (index1, index2) {
        var index1Pos = availableColumns.findIndex(
        // eslint-disable-next-line eqeqeq
        function (field) { return field.index == index1; });
        var index2Pos = availableColumns.findIndex(
        // eslint-disable-next-line eqeqeq
        function (field) { return field.index == index2; });
        if (index1Pos === -1 || index2Pos === -1) {
            return;
        }
        var newAvailableColumns;
        if (index1Pos > index2Pos) {
            newAvailableColumns = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], availableColumns.slice(0, index2Pos), true), [
                availableColumns[index1Pos]
            ], false), availableColumns.slice(index2Pos, index1Pos), true), availableColumns.slice(index1Pos + 1), true);
        }
        else {
            newAvailableColumns = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], availableColumns.slice(0, index1Pos), true), availableColumns.slice(index1Pos + 1, index2Pos + 1), true), [
                availableColumns[index1Pos]
            ], false), availableColumns.slice(index2Pos + 1), true);
        }
        setAvailableColumns(newAvailableColumns);
        setColumns(function (columns) {
            return newAvailableColumns
                .filter(function (column) { return columns.includes(column.index); })
                .map(function (column) { return column.index; });
        });
    };
    return (React.createElement(React.Fragment, null,
        isXSmall ? (React.createElement(material_1.Tooltip, { title: title },
            React.createElement(material_1.IconButton, __assign({ "aria-label": title, color: "primary", onClick: handleClick, size: "large" }, sanitizeRestProps(props)),
                React.createElement(ViewWeek_1.default, null)))) : (React.createElement(StyledButton, __assign({ size: "small", onClick: handleClick, startIcon: React.createElement(ViewWeek_1.default, null) }, sanitizeRestProps(props)), title)),
        React.createElement(material_1.Popover, { open: Boolean(anchorEl), anchorEl: anchorEl, onClose: handleClose, anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
            }, transformOrigin: {
                vertical: 'top',
                horizontal: 'center',
            } },
            React.createElement(material_1.Box, { p: 1 }, availableColumns.map(function (column) { return (React.createElement(preferences_1.FieldToggle, { key: column.index, source: column.source, label: column.label, index: column.index, selected: columns.includes(column.index), onToggle: handleToggle, onMove: handleMove })); })))));
};
exports.SelectColumnsButton = SelectColumnsButton;
var StyledButton = (0, styles_1.styled)(material_1.Button, {
    name: 'RaSelectColumnsButton',
    overridesResolver: function (props, styles) { return styles.root; },
})({
    '&.MuiButton-sizeSmall': {
        // fix for icon misalignment on small buttons, see https://github.com/mui/material-ui/pull/30240
        lineHeight: 1.5,
    },
});
var sanitizeRestProps = function (_a) {
    var _b = _a.resource, resource = _b === void 0 ? null : _b, _c = _a.preferenceKey, preferenceKey = _c === void 0 ? null : _c, rest = __rest(_a, ["resource", "preferenceKey"]);
    return rest;
};
//# sourceMappingURL=SelectColumnsButton.js.map