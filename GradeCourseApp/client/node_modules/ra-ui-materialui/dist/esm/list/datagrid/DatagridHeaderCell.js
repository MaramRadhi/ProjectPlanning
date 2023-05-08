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
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { TableCell, TableSortLabel, Tooltip } from '@mui/material';
import { FieldTitle, useTranslate, useResourceContext, } from 'ra-core';
export var DatagridHeaderCell = function (props) {
    var className = props.className, field = props.field, sort = props.sort, updateSort = props.updateSort, isSorting = props.isSorting, rest = __rest(props, ["className", "field", "sort", "updateSort", "isSorting"]);
    var resource = useResourceContext(props);
    var translate = useTranslate();
    return (React.createElement(StyledTableCell, __assign({ className: clsx(className, field.props.headerClassName), align: field.props.textAlign, variant: "head" }, rest), updateSort &&
        field.props.sortable !== false &&
        (field.props.sortBy || field.props.source) ? (React.createElement(Tooltip, { title: translate('ra.action.sort'), placement: field.props.textAlign === 'right'
            ? 'bottom-end'
            : 'bottom-start', enterDelay: 300 },
        React.createElement(TableSortLabel, { active: sort.field ===
                (field.props.sortBy || field.props.source), direction: sort.order === 'ASC' ? 'asc' : 'desc', "data-field": field.props.sortBy || field.props.source, "data-order": field.props.sortByOrder || 'ASC', onClick: updateSort, classes: DatagridHeaderCellClasses },
            React.createElement(FieldTitle, { label: field.props.label, source: field.props.source, resource: resource })))) : (React.createElement(FieldTitle, { label: field.props.label, source: field.props.source, resource: resource }))));
};
DatagridHeaderCell.propTypes = {
    className: PropTypes.string,
    field: PropTypes.element,
    sort: PropTypes.shape({
        field: PropTypes.string,
        order: PropTypes.string,
    }).isRequired,
    isSorting: PropTypes.bool,
    resource: PropTypes.string,
    updateSort: PropTypes.func,
};
export default memo(DatagridHeaderCell, function (props, nextProps) {
    return props.updateSort === nextProps.updateSort &&
        props.sort.field === nextProps.sort.field &&
        props.sort.order === nextProps.sort.order &&
        props.isSorting === nextProps.isSorting &&
        props.resource === nextProps.resource;
});
var PREFIX = 'RaDatagridHeaderCell';
export var DatagridHeaderCellClasses = {
    icon: "".concat(PREFIX, "-icon"),
};
// Remove the sort icons when not active
var StyledTableCell = styled(TableCell, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .MuiTableSortLabel-icon"] = {
            display: 'none',
        },
        _b["& .Mui-active .MuiTableSortLabel-icon"] = {
            display: 'inline',
        },
        _b);
});
//# sourceMappingURL=DatagridHeaderCell.js.map