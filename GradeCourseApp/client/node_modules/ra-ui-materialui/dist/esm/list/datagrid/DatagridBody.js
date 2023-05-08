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
import * as React from 'react';
import { cloneElement, memo } from 'react';
import PropTypes from 'prop-types';
import { TableBody } from '@mui/material';
import clsx from 'clsx';
import { DatagridClasses } from './useDatagridStyles';
import DatagridRow, { PureDatagridRow } from './DatagridRow';
var DatagridBody = React.forwardRef(function (_a, ref) {
    var children = _a.children, className = _a.className, data = _a.data, expand = _a.expand, hasBulkActions = _a.hasBulkActions, hover = _a.hover, onToggleItem = _a.onToggleItem, resource = _a.resource, row = _a.row, rowClick = _a.rowClick, rowStyle = _a.rowStyle, selectedIds = _a.selectedIds, isRowSelectable = _a.isRowSelectable, rest = __rest(_a, ["children", "className", "data", "expand", "hasBulkActions", "hover", "onToggleItem", "resource", "row", "rowClick", "rowStyle", "selectedIds", "isRowSelectable"]);
    return (React.createElement(TableBody, __assign({ ref: ref, className: clsx('datagrid-body', className, DatagridClasses.tbody) }, rest), data.map(function (record, rowIndex) {
        var _a;
        var _b, _c;
        return cloneElement(row, {
            className: clsx(DatagridClasses.row, (_a = {},
                _a[DatagridClasses.rowEven] = rowIndex % 2 === 0,
                _a[DatagridClasses.rowOdd] = rowIndex % 2 !== 0,
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
    className: PropTypes.string,
    children: PropTypes.node,
    // @ts-ignore
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    // @ts-ignore
    expand: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
    hasBulkActions: PropTypes.bool.isRequired,
    hover: PropTypes.bool,
    onToggleItem: PropTypes.func,
    resource: PropTypes.string,
    row: PropTypes.element,
    rowClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    rowStyle: PropTypes.func,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    styles: PropTypes.object,
    isRowSelectable: PropTypes.func,
};
DatagridBody.defaultProps = {
    data: [],
    hasBulkActions: false,
    row: React.createElement(DatagridRow, null),
};
// trick MUI Table into thinking this is one of the child type it supports
// @ts-ignore
DatagridBody.muiName = 'TableBody';
export var PureDatagridBody = memo(DatagridBody);
// trick MUI Table into thinking this is one of the child type it supports
// @ts-ignore
PureDatagridBody.muiName = 'TableBody';
// @ts-ignore
PureDatagridBody.defaultProps = {
    row: React.createElement(PureDatagridRow, null),
};
export default DatagridBody;
//# sourceMappingURL=DatagridBody.js.map