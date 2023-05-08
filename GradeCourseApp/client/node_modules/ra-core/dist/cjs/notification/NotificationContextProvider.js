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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationContextProvider = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var NotificationContext_1 = require("./NotificationContext");
var AddNotificationContext_1 = require("./AddNotificationContext");
var NotificationContextProvider = function (_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)([]), notifications = _b[0], setNotifications = _b[1];
    var addNotification = (0, react_1.useCallback)(function (notification) {
        setNotifications(function (notifications) { return __spreadArray(__spreadArray([], notifications, true), [notification], false); });
    }, []);
    var takeNotification = (0, react_1.useCallback)(function () {
        var notification = notifications[0], rest = notifications.slice(1);
        setNotifications(rest);
        return notification;
    }, [notifications]);
    var resetNotifications = (0, react_1.useCallback)(function () {
        setNotifications([]);
    }, []);
    var contextValue = (0, react_1.useMemo)(function () { return ({
        notifications: notifications,
        addNotification: addNotification,
        takeNotification: takeNotification,
        resetNotifications: resetNotifications,
    }); }, [notifications] // eslint-disable-line react-hooks/exhaustive-deps
    );
    // we separate the addNotification context to avoid rerendering all components
    // that depend on useNotify when a notification is dispatched
    return (React.createElement(NotificationContext_1.NotificationContext.Provider, { value: contextValue },
        React.createElement(AddNotificationContext_1.AddNotificationContext.Provider, { value: addNotification }, children)));
};
exports.NotificationContextProvider = NotificationContextProvider;
//# sourceMappingURL=NotificationContextProvider.js.map