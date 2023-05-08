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
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ActionDelete from '@mui/icons-material/Delete';
import inflection from 'inflection';
import { alpha, styled } from '@mui/material/styles';
import { useDeleteMany, useListContext, useNotify, useRefresh, useResourceContext, useTranslate, useSafeSetState, } from 'ra-core';
import { Confirm } from '../layout';
import { Button } from './Button';
export var BulkDeleteWithConfirmButton = function (props) {
    var _a = props.confirmTitle, confirmTitle = _a === void 0 ? 'ra.message.bulk_delete_title' : _a, _b = props.confirmContent, confirmContent = _b === void 0 ? 'ra.message.bulk_delete_content' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, _d = props.label, label = _d === void 0 ? 'ra.action.delete' : _d, _e = props.mutationMode, mutationMode = _e === void 0 ? 'pessimistic' : _e, _f = props.mutationOptions, mutationOptions = _f === void 0 ? {} : _f, onClick = props.onClick, rest = __rest(props, ["confirmTitle", "confirmContent", "icon", "label", "mutationMode", "mutationOptions", "onClick"]);
    var mutationMeta = mutationOptions.meta, otherMutationOptions = __rest(mutationOptions, ["meta"]);
    var _g = useListContext(props), selectedIds = _g.selectedIds, onUnselectItems = _g.onUnselectItems;
    var _h = useSafeSetState(false), isOpen = _h[0], setOpen = _h[1];
    var notify = useNotify();
    var resource = useResourceContext(props);
    var refresh = useRefresh();
    var translate = useTranslate();
    var _j = useDeleteMany(resource, { ids: selectedIds, meta: mutationMeta }, __assign({ onSuccess: function () {
            refresh();
            notify('ra.notification.deleted', {
                type: 'info',
                messageArgs: { smart_count: selectedIds.length },
                undoable: mutationMode === 'undoable',
            });
            onUnselectItems();
            setOpen(false);
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
            setOpen(false);
        }, mutationMode: mutationMode }, otherMutationOptions)), deleteMany = _j[0], isLoading = _j[1].isLoading;
    var handleClick = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function () {
        setOpen(false);
    };
    var handleDelete = function (e) {
        deleteMany();
        if (typeof onClick === 'function') {
            onClick(e);
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement(StyledButton, __assign({ onClick: handleClick, label: label }, sanitizeRestProps(rest)), icon),
        React.createElement(Confirm, { isOpen: isOpen, loading: isLoading, title: confirmTitle, content: confirmContent, translateOptions: {
                smart_count: selectedIds.length,
                name: translate("resources.".concat(resource, ".forcedCaseName"), {
                    smart_count: selectedIds.length,
                    _: inflection.humanize(translate("resources.".concat(resource, ".name"), {
                        smart_count: selectedIds.length,
                        _: inflection.inflect(resource, selectedIds.length),
                    }), true),
                }),
            }, onConfirm: handleDelete, onClose: handleDialogClose })));
};
var sanitizeRestProps = function (_a) {
    var classes = _a.classes, filterValues = _a.filterValues, label = _a.label, selectedIds = _a.selectedIds, rest = __rest(_a, ["classes", "filterValues", "label", "selectedIds"]);
    return rest;
};
var PREFIX = 'RaBulkDeleteWithConfirmButton';
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
var defaultIcon = React.createElement(ActionDelete, null);
BulkDeleteWithConfirmButton.propTypes = {
    confirmTitle: PropTypes.string,
    confirmContent: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    resource: PropTypes.string,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
};
//# sourceMappingURL=BulkDeleteWithConfirmButton.js.map