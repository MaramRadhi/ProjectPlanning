"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatagridHeader = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var DatagridHeaderCell_1 = __importDefault(require("./DatagridHeaderCell"));
var useDatagridStyles_1 = require("./useDatagridStyles");
var ExpandAllButton_1 = __importDefault(require("./ExpandAllButton"));
var useDatagridContext_1 = require("./useDatagridContext");
/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
var DatagridHeader = function (props) {
    var children = props.children, className = props.className, _a = props.hasExpand, hasExpand = _a === void 0 ? false : _a, _b = props.hasBulkActions, hasBulkActions = _b === void 0 ? false : _b, isRowSelectable = props.isRowSelectable;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var translate = (0, ra_core_1.useTranslate)();
    var _c = (0, ra_core_1.useListContext)(props), sort = _c.sort, data = _c.data, onSelect = _c.onSelect, selectedIds = _c.selectedIds, setSort = _c.setSort;
    var expandSingle = (0, useDatagridContext_1.useDatagridContext)().expandSingle;
    var updateSortCallback = (0, react_1.useCallback)(function (event) {
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
    var handleSelectAll = (0, react_1.useCallback)(function (event) {
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
    return (React.createElement(material_1.TableHead, { className: (0, clsx_1.default)(className, useDatagridStyles_1.DatagridClasses.thead) },
        React.createElement(material_1.TableRow, { className: (0, clsx_1.default)(useDatagridStyles_1.DatagridClasses.row, useDatagridStyles_1.DatagridClasses.headerRow) },
            hasExpand && (React.createElement(material_1.TableCell, { padding: "none", className: (0, clsx_1.default)(useDatagridStyles_1.DatagridClasses.headerCell, useDatagridStyles_1.DatagridClasses.expandHeader) }, !expandSingle ? (React.createElement(ExpandAllButton_1.default, { resource: resource, ids: data.map(function (record) { return record.id; }) })) : null)),
            hasBulkActions && selectedIds && (React.createElement(material_1.TableCell, { padding: "checkbox", className: useDatagridStyles_1.DatagridClasses.headerCell },
                React.createElement(material_1.Checkbox, { "aria-label": translate('ra.action.select_all', {
                        _: 'Select all',
                    }), className: "select-all", color: "primary", checked: selectedIds.length > 0 &&
                        selectableIds.length > 0 &&
                        selectableIds.every(function (id) {
                            return selectedIds.includes(id);
                        }), onChange: handleSelectAll }))),
            react_1.Children.map(children, function (field, index) {
                return (0, react_1.isValidElement)(field) ? (React.createElement(DatagridHeaderCell_1.default, { className: (0, clsx_1.default)(useDatagridStyles_1.DatagridClasses.headerCell, "column-".concat(field.props.source)), sort: sort, field: field, isSorting: sort.field ===
                        (field.props.sortBy ||
                            field.props.source), key: field.props.source || index, resource: resource, updateSort: updateSort })) : null;
            }))));
};
exports.DatagridHeader = DatagridHeader;
exports.DatagridHeader.propTypes = {
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    sort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.arrayOf(prop_types_1.default.any),
    hasExpand: prop_types_1.default.bool,
    hasBulkActions: prop_types_1.default.bool,
    isRowSelectable: prop_types_1.default.func,
    isRowExpandable: prop_types_1.default.func,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.arrayOf(prop_types_1.default.any),
    setSort: prop_types_1.default.func,
};
exports.DatagridHeader.displayName = 'DatagridHeader';
//# sourceMappingURL=DatagridHeader.js.map