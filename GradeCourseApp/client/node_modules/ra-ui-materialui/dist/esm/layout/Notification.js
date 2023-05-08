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
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Snackbar } from '@mui/material';
import clsx from 'clsx';
import { useNotificationContext, undoableEventEmitter, useTranslate, } from 'ra-core';
var defaultAnchorOrigin = {
    vertical: 'bottom',
    horizontal: 'center',
};
/**
 * Provides a way to show a notification.
 * @see useNotify
 *
 * @example <caption>Basic usage</caption>
 * <Notification />
 *
 * @param props The component props
 * @param {string} props.type The notification type. Defaults to 'info'.
 * @param {number} props.autoHideDuration Duration in milliseconds to wait until hiding a given notification. Defaults to 4000.
 * @param {boolean} props.multiLine Set it to `true` if the notification message should be shown in more than one line.
 */
export var Notification = function (props) {
    var _a;
    var className = props.className, _b = props.type, type = _b === void 0 ? 'info' : _b, _c = props.autoHideDuration, autoHideDuration = _c === void 0 ? 4000 : _c, _d = props.multiLine, multiLine = _d === void 0 ? false : _d, _e = props.anchorOrigin, anchorOrigin = _e === void 0 ? defaultAnchorOrigin : _e, rest = __rest(props, ["className", "type", "autoHideDuration", "multiLine", "anchorOrigin"]);
    var _f = useNotificationContext(), notifications = _f.notifications, takeNotification = _f.takeNotification;
    var _g = useState(false), open = _g[0], setOpen = _g[1];
    var _h = React.useState(undefined), messageInfo = _h[0], setMessageInfo = _h[1];
    var translate = useTranslate();
    useEffect(function () {
        if (notifications.length && !messageInfo) {
            // Set a new snack when we don't have an active one
            setMessageInfo(takeNotification());
            setOpen(true);
        }
        else if (notifications.length && messageInfo && open) {
            // Close an active snack when a new one is added
            setOpen(false);
        }
    }, [notifications, messageInfo, open, takeNotification]);
    var handleRequestClose = useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleExited = useCallback(function () {
        if (messageInfo && messageInfo.notificationOptions.undoable) {
            undoableEventEmitter.emit('end', { isUndo: false });
        }
        setMessageInfo(undefined);
    }, [messageInfo]);
    var handleUndo = useCallback(function () {
        undoableEventEmitter.emit('end', { isUndo: true });
        setOpen(false);
    }, []);
    if (!messageInfo)
        return null;
    var message = messageInfo.message, typeFromMessage = messageInfo.type, _j = messageInfo.notificationOptions, autoHideDurationFromMessage = _j.autoHideDuration, messageArgs = _j.messageArgs, multilineFromMessage = _j.multiLine, undoable = _j.undoable, options = __rest(_j, ["autoHideDuration", "messageArgs", "multiLine", "undoable"]);
    return (React.createElement(StyledSnackbar, __assign({ className: className, open: open, message: message &&
            typeof message === 'string' &&
            translate(message, messageArgs), autoHideDuration: autoHideDurationFromMessage || autoHideDuration, disableWindowBlurListener: undoable, TransitionProps: { onExited: handleExited }, onClose: handleRequestClose, ContentProps: {
            className: clsx(NotificationClasses[typeFromMessage || type], (_a = {},
                _a[NotificationClasses.multiLine] = multilineFromMessage || multiLine,
                _a)),
        }, action: undoable ? (React.createElement(Button, { color: "primary", className: NotificationClasses.undo, size: "small", onClick: handleUndo },
            React.createElement(React.Fragment, null, translate('ra.action.undo')))) : null, anchorOrigin: anchorOrigin }, rest, options), message && typeof message !== 'string' ? message : null));
};
Notification.propTypes = {
    type: PropTypes.string,
    autoHideDuration: PropTypes.number,
    multiLine: PropTypes.bool,
};
var PREFIX = 'RaNotification';
export var NotificationClasses = {
    success: "".concat(PREFIX, "-success"),
    error: "".concat(PREFIX, "-error"),
    warning: "".concat(PREFIX, "-warning"),
    undo: "".concat(PREFIX, "-undo"),
    multiLine: "".concat(PREFIX, "-multiLine"),
};
var StyledSnackbar = styled(Snackbar, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme, type = _a.type;
    return (_b = {},
        _b["& .".concat(NotificationClasses.success)] = {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
        },
        _b["& .".concat(NotificationClasses.error)] = {
            backgroundColor: theme.palette.error.main,
            color: theme.palette.error.contrastText,
        },
        _b["& .".concat(NotificationClasses.warning)] = {
            backgroundColor: theme.palette.warning.main,
            color: theme.palette.warning.contrastText,
        },
        _b["& .".concat(NotificationClasses.undo)] = {
            color: type === 'success'
                ? theme.palette.success.contrastText
                : theme.palette.primary.light,
        },
        _b["& .".concat(NotificationClasses.multiLine)] = {
            whiteSpace: 'pre-wrap',
        },
        _b);
});
//# sourceMappingURL=Notification.js.map