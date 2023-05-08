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
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import ActionUpdate from '@mui/icons-material/Update';
import inflection from 'inflection';
import { alpha, styled } from '@mui/material/styles';
import { useListContext, useTranslate, useUpdateMany, useRefresh, useNotify, useUnselectAll, useResourceContext, } from 'ra-core';
import { Confirm } from '../layout';
import { Button } from './Button';
export var BulkUpdateWithConfirmButton = function (props) {
    var notify = useNotify();
    var refresh = useRefresh();
    var translate = useTranslate();
    var resource = useResourceContext(props);
    var unselectAll = useUnselectAll(resource);
    var _a = useState(false), isOpen = _a[0], setOpen = _a[1];
    var selectedIds = useListContext(props).selectedIds;
    var _b = props.confirmTitle, confirmTitle = _b === void 0 ? 'ra.message.bulk_update_title' : _b, _c = props.confirmContent, confirmContent = _c === void 0 ? 'ra.message.bulk_update_content' : _c, data = props.data, _d = props.icon, icon = _d === void 0 ? defaultIcon : _d, _e = props.label, label = _e === void 0 ? 'ra.action.update' : _e, _f = props.mutationMode, mutationMode = _f === void 0 ? 'pessimistic' : _f, onClick = props.onClick, _g = props.onSuccess, onSuccess = _g === void 0 ? function () {
        refresh();
        notify('ra.notification.updated', {
            type: 'info',
            messageArgs: { smart_count: selectedIds.length },
            undoable: mutationMode === 'undoable',
        });
        unselectAll();
        setOpen(false);
    } : _g, _h = props.onError, onError = _h === void 0 ? function (error) {
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
    } : _h, rest = __rest(props, ["confirmTitle", "confirmContent", "data", "icon", "label", "mutationMode", "onClick", "onSuccess", "onError"]);
    var _j = useUpdateMany(resource, { ids: selectedIds, data: data }, {
        onSuccess: onSuccess,
        onError: onError,
        mutationMode: mutationMode,
    }), updateMany = _j[0], isLoading = _j[1].isLoading;
    var handleClick = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function () {
        setOpen(false);
    };
    var handleUpdate = function (e) {
        updateMany();
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
            }, onConfirm: handleUpdate, onClose: handleDialogClose })));
};
var sanitizeRestProps = function (_a) {
    var filterValues = _a.filterValues, label = _a.label, onSuccess = _a.onSuccess, onError = _a.onError, rest = __rest(_a, ["filterValues", "label", "onSuccess", "onError"]);
    return rest;
};
BulkUpdateWithConfirmButton.propTypes = {
    confirmTitle: PropTypes.string,
    confirmContent: PropTypes.string,
    label: PropTypes.string,
    resource: PropTypes.string,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    icon: PropTypes.element,
    data: PropTypes.any.isRequired,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
};
var PREFIX = 'RaBulkUpdateWithConfirmButton';
var StyledButton = styled(Button, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: alpha(theme.palette.primary.main, 0.12),
            // Reset on mouse devices
            '@media (hover: none)': {
                backgroundColor: 'transparent',
            },
        },
    });
});
var defaultIcon = React.createElement(ActionUpdate, null);
//# sourceMappingURL=BulkUpdateWithConfirmButton.js.map