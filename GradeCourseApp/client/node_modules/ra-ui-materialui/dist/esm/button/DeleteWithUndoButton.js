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
import { alpha } from '@mui/material/styles';
import ActionDelete from '@mui/icons-material/Delete';
import clsx from 'clsx';
import { useDeleteWithUndoController, useRecordContext, useResourceContext, } from 'ra-core';
import { Button } from './Button';
export var DeleteWithUndoButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'ra.action.delete' : _a, className = props.className, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b, onClick = props.onClick, _c = props.redirect, redirect = _c === void 0 ? 'list' : _c, mutationOptions = props.mutationOptions, rest = __rest(props, ["label", "className", "icon", "onClick", "redirect", "mutationOptions"]);
    var record = useRecordContext(props);
    var resource = useResourceContext(props);
    var _d = useDeleteWithUndoController({
        record: record,
        resource: resource,
        redirect: redirect,
        onClick: onClick,
        mutationOptions: mutationOptions,
    }), isLoading = _d.isLoading, handleDelete = _d.handleDelete;
    return (React.createElement(StyledButton, __assign({ onClick: handleDelete, disabled: isLoading, label: label, className: clsx('ra-delete-button', className), key: "button" }, rest), icon));
};
var defaultIcon = React.createElement(ActionDelete, null);
DeleteWithUndoButton.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    record: PropTypes.any,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    icon: PropTypes.element,
};
var PREFIX = 'RaDeleteWithUndoButton';
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
//# sourceMappingURL=DeleteWithUndoButton.js.map