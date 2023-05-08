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
import { Children, cloneElement, isValidElement, useCallback, } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { lighten } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslate, sanitizeListRestProps, useListContext, } from 'ra-core';
import TopToolbar from '../layout/TopToolbar';
export var BulkActionsToolbar = function (props) {
    var _a;
    var _b = props.label, label = _b === void 0 ? 'ra.action.bulk_actions' : _b, children = props.children, className = props.className, rest = __rest(props, ["label", "children", "className"]);
    var _c = useListContext(props), filterValues = _c.filterValues, resource = _c.resource, _d = _c.selectedIds, selectedIds = _d === void 0 ? [] : _d, onUnselectItems = _c.onUnselectItems;
    var translate = useTranslate();
    var handleUnselectAllClick = useCallback(function () {
        onUnselectItems();
    }, [onUnselectItems]);
    return (React.createElement(Root, { className: className },
        React.createElement(Toolbar, __assign({ "data-test": "bulk-actions-toolbar", className: clsx(BulkActionsToolbarClasses.toolbar, (_a = {},
                _a[BulkActionsToolbarClasses.collapsed] = selectedIds.length === 0,
                _a)) }, sanitizeListRestProps(rest)),
            React.createElement("div", { className: BulkActionsToolbarClasses.title },
                React.createElement(IconButton, { className: BulkActionsToolbarClasses.icon, "aria-label": translate('ra.action.unselect'), title: translate('ra.action.unselect'), onClick: handleUnselectAllClick, size: "small" },
                    React.createElement(CloseIcon, { fontSize: "small" })),
                React.createElement(Typography, { color: "inherit", variant: "subtitle1" }, translate(label, {
                    _: label,
                    smart_count: selectedIds.length,
                }))),
            React.createElement(TopToolbar, { className: BulkActionsToolbarClasses.topToolbar }, Children.map(children, function (child) {
                return isValidElement(child)
                    ? cloneElement(child, {
                        filterValues: filterValues,
                        resource: resource,
                        selectedIds: selectedIds,
                    })
                    : null;
            })))));
};
BulkActionsToolbar.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
};
var PREFIX = 'RaBulkActionsToolbar';
export var BulkActionsToolbarClasses = {
    toolbar: "".concat(PREFIX, "-toolbar"),
    topToolbar: "".concat(PREFIX, "-topToolbar"),
    buttons: "".concat(PREFIX, "-buttons"),
    collapsed: "".concat(PREFIX, "-collapsed"),
    title: "".concat(PREFIX, "-title"),
    icon: "".concat(PREFIX, "-icon"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            position: 'relative'
        },
        _b["& .".concat(BulkActionsToolbarClasses.toolbar)] = {
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 3,
            color: theme.palette.mode === 'light'
                ? theme.palette.primary.main
                : theme.palette.text.primary,
            justifyContent: 'space-between',
            backgroundColor: theme.palette.mode === 'light'
                ? lighten(theme.palette.primary.light, 0.8)
                : theme.palette.primary.dark,
            minHeight: theme.spacing(6),
            height: theme.spacing(6),
            transform: "translateY(-".concat(theme.spacing(6), ")"),
            transition: "".concat(theme.transitions.create('height'), ", ").concat(theme.transitions.create('min-height'), ", ").concat(theme.transitions.create('transform')),
            borderTopLeftRadius: theme.shape.borderRadius,
            borderTopRightRadius: theme.shape.borderRadius,
        },
        _b["& .".concat(BulkActionsToolbarClasses.topToolbar)] = {
            paddingBottom: theme.spacing(1),
            minHeight: 'auto',
        },
        _b["& .".concat(BulkActionsToolbarClasses.buttons)] = {},
        _b["& .".concat(BulkActionsToolbarClasses.collapsed)] = {
            minHeight: 0,
            height: 0,
            transform: "translateY(0)",
            overflowY: 'hidden',
        },
        _b["& .".concat(BulkActionsToolbarClasses.title)] = {
            display: 'flex',
            flex: '0 0 auto',
        },
        _b["& .".concat(BulkActionsToolbarClasses.icon)] = {
            marginLeft: '-0.5em',
            marginRight: '0.5em',
        },
        _b);
});
//# sourceMappingURL=BulkActionsToolbar.js.map