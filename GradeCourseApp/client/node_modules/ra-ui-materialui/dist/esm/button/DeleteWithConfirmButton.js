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
import React, { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import ActionDelete from '@mui/icons-material/Delete';
import clsx from 'clsx';
import inflection from 'inflection';
import { useDeleteWithConfirmController, useRecordContext, useResourceContext, useTranslate, } from 'ra-core';
import { Confirm } from '../layout';
import { Button } from './Button';
export var DeleteWithConfirmButton = function (props) {
    var className = props.className, _a = props.confirmTitle, confirmTitle = _a === void 0 ? 'ra.message.delete_title' : _a, _b = props.confirmContent, confirmContent = _b === void 0 ? 'ra.message.delete_content' : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, _d = props.label, label = _d === void 0 ? 'ra.action.delete' : _d, _e = props.mutationMode, mutationMode = _e === void 0 ? 'pessimistic' : _e, onClick = props.onClick, _f = props.redirect, redirect = _f === void 0 ? 'list' : _f, _g = props.translateOptions, translateOptions = _g === void 0 ? {} : _g, mutationOptions = props.mutationOptions, rest = __rest(props, ["className", "confirmTitle", "confirmContent", "icon", "label", "mutationMode", "onClick", "redirect", "translateOptions", "mutationOptions"]);
    var translate = useTranslate();
    var record = useRecordContext(props);
    var resource = useResourceContext(props);
    var _h = useDeleteWithConfirmController({
        record: record,
        redirect: redirect,
        mutationMode: mutationMode,
        onClick: onClick,
        mutationOptions: mutationOptions,
        resource: resource,
    }), open = _h.open, isLoading = _h.isLoading, handleDialogOpen = _h.handleDialogOpen, handleDialogClose = _h.handleDialogClose, handleDelete = _h.handleDelete;
    return (React.createElement(Fragment, null,
        React.createElement(StyledButton, __assign({ onClick: handleDialogOpen, label: label, className: clsx('ra-delete-button', className), key: "button" }, rest), icon),
        React.createElement(Confirm, { isOpen: open, loading: isLoading, title: confirmTitle, content: confirmContent, translateOptions: __assign({ name: translate("resources.".concat(resource, ".forcedCaseName"), {
                    smart_count: 1,
                    _: inflection.humanize(translate("resources.".concat(resource, ".name"), {
                        smart_count: 1,
                        _: inflection.singularize(resource),
                    }), true),
                }), id: record.id }, translateOptions), onConfirm: handleDelete, onClose: handleDialogClose })));
};
var defaultIcon = React.createElement(ActionDelete, null);
DeleteWithConfirmButton.propTypes = {
    className: PropTypes.string,
    confirmTitle: PropTypes.string,
    confirmContent: PropTypes.string,
    label: PropTypes.string,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    record: PropTypes.any,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    icon: PropTypes.element,
    translateOptions: PropTypes.object,
};
var PREFIX = 'RaDeleteWithConfirmButton';
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
//# sourceMappingURL=DeleteWithConfirmButton.js.map