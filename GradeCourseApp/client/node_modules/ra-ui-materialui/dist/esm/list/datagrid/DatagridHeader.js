import * as React from 'react';
import { Children, isValidElement, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useListContext, useResourceContext, useTranslate, } from 'ra-core';
import { Checkbox, TableCell, TableHead, TableRow } from '@mui/material';
import clsx from 'clsx';
import DatagridHeaderCell from './DatagridHeaderCell';
import { DatagridClasses } from './useDatagridStyles';
import ExpandAllButton from './ExpandAllButton';
import { useDatagridContext } from './useDatagridContext';
/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
export var DatagridHeader = function (props) {
    var children = props.children, className = props.className, _a = props.hasExpand, hasExpand = _a === void 0 ? false : _a, _b = props.hasBulkActions, hasBulkActions = _b === void 0 ? false : _b, isRowSelectable = props.isRowSelectable;
    var resource = useResourceContext(props);
    var translate = useTranslate();
    var _c = useListContext(props), sort = _c.sort, data = _c.data, onSelect = _c.onSelect, selectedIds = _c.selectedIds, setSort = _c.setSort;
    var expandSingle = useDatagridContext().expandSingle;
    var updateSortCallback = useCallback(function (event) {
        event.stopPropagation();
        var newField = event.currentTarget.dataset.field;
        var newOrder = sort.field === newField
            ? sort.order === 'ASC'
                ? 'DESC'
                : 'ASC'
            : event.currentTarget.dataset.order;
        setSort({ field: newField, order: newOrder });
    }, [sort.field, sort.order, setSort]);
    var updateSort = setSort ? updateSortCallback : null;
    var handleSelectAll = useCallback(function (event) {
        return onSelect(event.target.checked
            ? selectedIds.concat(data
                .filter(function (record) { return !selectedIds.includes(record.id); })
                .filter(function (record) {
                return isRowSelectable
                    ? isRowSelectable(record)
                    : true;
            })
                .map(function (record) { return record.id; }))
            : []);
    }, [data, onSelect, isRowSelectable, selectedIds]);
    var selectableIds = Array.isArray(data)
        ? isRowSelectable
            ? data
                .filter(function (record) { return isRowSelectable(record); })
                .map(function (record) { return record.id; })
            : data.map(function (record) { return record.id; })
        : [];
    return (React.createElement(TableHead, { className: clsx(className, DatagridClasses.thead) },
        React.createElement(TableRow, { className: clsx(DatagridClasses.row, DatagridClasses.headerRow) },
            hasExpand && (React.createElement(TableCell, { padding: "none", className: clsx(DatagridClasses.headerCell, DatagridClasses.expandHeader) }, !expandSingle ? (React.createElement(ExpandAllButton, { resource: resource, ids: data.map(function (record) { return record.id; }) })) : null)),
            hasBulkActions && selectedIds && (React.createElement(TableCell, { padding: "checkbox", className: DatagridClasses.headerCell },
                React.createElement(Checkbox, { "aria-label": translate('ra.action.select_all', {
                        _: 'Select all',
                    }), className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
                        selectableIds.length > 0 &&
                        selectableIds.every(function (id) {
                            return selectedIds.includes(id);
                        }), onChange: handleSelectAll }))),
            Children.map(children, function (field, index) {
                return isValidElement(field) ? (React.createElement(DatagridHeaderCell, { className: clsx(DatagridClasses.headerCell, "column-".concat(field.props.source)), sort: sort, field: field, isSorting: sort.field ===
                        (field.props.sortBy ||
                            field.props.source), key: field.props.source || index, resource: resource, updateSort: updateSort })) : null;
            }))));
};
DatagridHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    sort: PropTypes.exact({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    data: PropTypes.arrayOf(PropTypes.any),
    hasExpand: PropTypes.bool,
    hasBulkActions: PropTypes.bool,
    isRowSelectable: PropTypes.func,
    isRowExpandable: PropTypes.func,
    onSelect: PropTypes.func,
    onToggleItem: PropTypes.func,
    resource: PropTypes.string,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    setSort: PropTypes.func,
};
DatagridHeader.displayName = 'DatagridHeader';
//# sourceMappingURL=DatagridHeader.js.map