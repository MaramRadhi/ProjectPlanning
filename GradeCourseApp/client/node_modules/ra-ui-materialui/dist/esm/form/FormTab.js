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
import PropTypes from 'prop-types';
import { FormGroupContextProvider } from 'ra-core';
import { Stack } from '@mui/material';
import { FormTabHeader } from './FormTabHeader';
export var FormTab = function (props) {
    var children = props.children, className = props.className, contentClassName = props.contentClassName, count = props.count, hidden = props.hidden, icon = props.icon, intent = props.intent, label = props.label, onChange = props.onChange, path = props.path, resource = props.resource, syncWithLocation = props.syncWithLocation, value = props.value, rest = __rest(props, ["children", "className", "contentClassName", "count", "hidden", "icon", "intent", "label", "onChange", "path", "resource", "syncWithLocation", "value"]);
    var renderHeader = function () { return (React.createElement(FormTabHeader, __assign({ label: label, count: count, value: value, icon: icon, className: className, syncWithLocation: syncWithLocation, onChange: onChange }, sanitizeRestProps(rest)))); };
    var renderContent = function () { return (React.createElement(FormGroupContextProvider, { name: value.toString() },
        React.createElement(Stack, __assign({ alignItems: "flex-start", style: hidden ? hiddenStyle : null, className: contentClassName, id: "tabpanel-".concat(value), "aria-labelledby": "tabheader-".concat(value), "aria-hidden": hidden || undefined }, rest), children))); };
    return intent === 'header' ? renderHeader() : renderContent();
};
FormTab.propTypes = {
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    children: PropTypes.node,
    count: PropTypes.node,
    intent: PropTypes.oneOf(['header', 'content']),
    hidden: PropTypes.bool,
    icon: PropTypes.element,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    path: PropTypes.string,
    // @ts-ignore
    resource: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FormTab.displayName = 'FormTab';
var hiddenStyle = { display: 'none' };
var sanitizeRestProps = function (_a) {
    var classes = _a.classes, ref = _a.ref, margin = _a.margin, rest = __rest(_a, ["classes", "ref", "margin"]);
    return rest;
};
//# sourceMappingURL=FormTab.js.map