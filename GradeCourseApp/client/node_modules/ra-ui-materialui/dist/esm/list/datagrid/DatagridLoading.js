import * as React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { Table, TableCell, TableHead, TableRow, TableBody, IconButton, Checkbox, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import clsx from 'clsx';
import { useTimeout } from 'ra-core';
import { DatagridClasses } from './useDatagridStyles';
import { Placeholder } from '../Placeholder';
var times = function (nbChildren, fn) {
    return Array.from({ length: nbChildren }, function (_, key) { return fn(key); });
};
var DatagridLoading = function (_a) {
    var className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, nbChildren = _a.nbChildren, _b = _a.nbFakeLines, nbFakeLines = _b === void 0 ? 5 : _b, size = _a.size;
    var oneSecondHasPassed = useTimeout(1000);
    return oneSecondHasPassed ? (React.createElement("div", { className: DatagridClasses.root },
        React.createElement(Table, { className: clsx(DatagridClasses.table, className), size: size },
            React.createElement(TableHead, null,
                React.createElement(TableRow, { className: DatagridClasses.row },
                    expand && (React.createElement(TableCell, { padding: "none", className: DatagridClasses.expandHeader })),
                    hasBulkActions && (React.createElement(TableCell, { padding: "checkbox", className: DatagridClasses.expandIconCell },
                        React.createElement(Checkbox, { className: "select-all", color: "primary", checked: false }))),
                    times(nbChildren, function (key) { return (React.createElement(TableCell, { variant: "head", className: DatagridClasses.headerCell, key: key },
                        React.createElement(Placeholder, null))); }))),
            React.createElement(TableBody, null, times(nbFakeLines, function (key1) { return (React.createElement(TableRow, { key: key1, style: { opacity: 1 / (key1 + 1) } },
                expand && (React.createElement(TableCell, { padding: "none", className: DatagridClasses.expandIconCell },
                    React.createElement(IconButton, { className: DatagridClasses.expandIcon, component: "div", "aria-hidden": "true", size: "large" },
                        React.createElement(ExpandMoreIcon, null)))),
                hasBulkActions && (React.createElement(TableCell, { padding: "checkbox", className: DatagridClasses.expandIconCell },
                    React.createElement(Checkbox, { className: "select-all", color: "primary", checked: false }))),
                times(nbChildren, function (key2) { return (React.createElement(TableCell, { className: DatagridClasses.rowCell, key: key2 },
                    React.createElement(Placeholder, null))); }))); }))))) : null;
};
DatagridLoading.propTypes = {
    className: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
    hasBulkActions: PropTypes.bool,
    nbChildren: PropTypes.number,
    nbFakeLines: PropTypes.number,
    size: PropTypes.oneOf(['small', 'medium']),
};
export default memo(DatagridLoading);
//# sourceMappingURL=DatagridLoading.js.map