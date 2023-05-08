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
import { useLocation } from 'react-router-dom';
import { usePreferenceInput } from 'ra-core';
import { TextField } from '@mui/material';
import { Configurable } from '../preferences';
import { PageTitle } from './PageTitle';
export var PageTitleEditor = function () {
    var field = usePreferenceInput();
    return (React.createElement("form", null,
        React.createElement(TextField, __assign({ label: "title", variant: "filled", size: "small", fullWidth: true, sx: { mb: 1 } }, field))));
};
export var PageTitleConfigurable = function (_a) {
    var preferenceKey = _a.preferenceKey, props = __rest(_a, ["preferenceKey"]);
    var pathname = useLocation().pathname;
    return (React.createElement(Configurable, { editor: React.createElement(PageTitleEditor, null), preferenceKey: preferenceKey || "".concat(pathname, ".title"), sx: {
            '&.RaConfigurable-editMode': {
                margin: '2px',
            },
        } },
        React.createElement(PageTitle, __assign({}, props))));
};
//# sourceMappingURL=PageTitleConfigurable.js.map