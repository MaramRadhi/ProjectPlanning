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
import PropTypes from 'prop-types';
import ActionDelete from '@mui/icons-material/Delete';
import { alpha } from '@mui/material/styles';
import { useDeleteMany, useRefresh, useNotify, useResourceContext, useListContext, } from 'ra-core';
import { Button } from './Button';
export var BulkDeleteWithUndoButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'ra.action.delete' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, _c = props.mutationOptions, mutationOptions = _c === void 0 ? {} : _c, rest = __rest(props, ["label", "icon", "onClick", "mutationOptions"]);
    var mutationMeta = mutationOptions.meta, otherMutationOptions = __rest(mutationOptions, ["meta"]);
    var _d = useListContext(props), selectedIds = _d.selectedIds, onUnselectItems = _d.onUnselectItems;
    var notify = useNotify();
    var resource = useResourceContext(props);
    var refresh = useRefresh();
    var _e = useDeleteMany(), deleteMany = _e[0], isLoading = _e[1].isLoading;
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
var defaultIcon = React.createElement(ActionDelete, null);
var sanitizeRestProps = function (_a) {
    var classes = _a.classes, filterValues = _a.filterValues, label = _a.label, selectedIds = _a.selectedIds, rest = __rest(_a, ["classes", "filterValues", "label", "selectedIds"]);
    return rest;
};
var PREFIX = 'RaBulkDeleteWithUndoButton';
var StyledButton = styled(Button, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.error.main,
        '&:hover': {
            backgroundColor: alpha(theme.palette.error.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    });
});
BulkDeleteWithUndoButton.propTypes = {
    label: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    icon: PropTypes.element,
};
//# sourceMappingURL=BulkDeleteWithUndoButton.js.map