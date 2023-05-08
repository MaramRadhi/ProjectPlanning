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
exports.PureDatagridBody = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var useDatagridStyles_1 = require("./useDatagridStyles");
var DatagridRow_1 = __importStar(require("./DatagridRow"));
var DatagridBody = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, data = _a.data, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, onToggleItem = _a.onToggleItem, resource = _a.resource, row = _a.row, rowClick = _a.rowClick, rowStyle = _a.rowStyle, selectedIds = _a.selectedIds, isRowSelectable = _a.isRowSelectable, rest = __rest(_a, ["children", "className", "data", "expand", "hasBulkActions", "hover", "onToggleItem", "resource", "row", "rowClick", "rowStyle", "selectedIds", "isRowSelectable"]);
    return (React.createElement(material_1.TableBody, __assign({ ref: ref, className: (0, clsx_1.default)('datagrid-body', className, useDatagridStyles_1.DatagridClasses.tbody) }, rest), data.map(function (record, rowIndex) {
        var _a;
        var _b, _c;
        return (0, react_1.cloneElement)(row, {
            className: (0, clsx_1.default)(useDatagridStyles_1.DatagridClasses.row, (_a = {},
                _a[useDatagridStyles_1.DatagridClasses.rowEven] = rowIndex % 2 === 0,
                _a[useDatagridStyles_1.DatagridClasses.rowOdd] = rowIndex % 2 !== 0,
                _a)),
            expand: expand,
            hasBulkActions: hasBulkActions && !!selectedIds,
            hover: hover,
            id: (_b = record.id) !== null && _b !== void 0 ? _b : "row".concat(rowIndex),
            key: (_c = record.id) !== null && _c !== void 0 ? _c : "row".concat(rowIndex),
            onToggleItem: onToggleItem,
            record: record,
            resource: resource,
            rowClick: rowClick,
            selectable: !isRowSelectable || isRowSelectable(record),
            selected: selectedIds === null || selectedIds === void 0 ? void 0 : selectedIds.includes(record.id),
            style: rowStyle ? rowStyle(record, rowIndex) : null,
        }, children);
    })));
});
DatagridBody.propTypes = {
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    // @ts-ignore
    data: prop_types_1.default.arrayOf(prop_types_1.default.object).isRequired,
    // @ts-ignore
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool.isRequired,
    hover: prop_types_1.default.bool,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    row: prop_types_1.default.element,
    rowClick: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.func]),
    rowStyle: prop_types_1.default.func,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    styles: prop_types_1.default.object,
    isRowSelectable: prop_types_1.default.func,
};
DatagridBody.defaultProps = {
    data: [],
    hasBulkActions: false,
    row: React.createElement(DatagridRow_1.default, null),
};
// trick MUI Table into thinking this is one of the child type it supports
// @ts-ignore
DatagridBody.muiName = 'TableBody';
exports.PureDatagridBody = (0, react_1.memo)(DatagridBody);
// trick MUI Table into thinking this is one of the child type it supports
// @ts-ignore
exports.PureDatagridBody.muiName = 'TableBody';
// @ts-ignore
exports.PureDatagridBody.defaultProps = {
    row: React.createElement(DatagridRow_1.PureDatagridRow, null),
};
exports.default = DatagridBody;
//# sourceMappingURL=DatagridBody.js.map