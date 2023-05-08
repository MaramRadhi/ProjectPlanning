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
import { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Tab as MuiTab } from '@mui/material';
import clsx from 'clsx';
import { useTranslate, useFormGroup } from 'ra-core';
import { useFormState } from 'react-hook-form';
import { TabbedFormClasses } from './TabbedFormView';
export var FormTabHeader = function (_a) {
    var _b;
    var count = _a.count, label = _a.label, value = _a.value, icon = _a.icon, className = _a.className, onChange = _a.onChange, syncWithLocation = _a.syncWithLocation, rest = __rest(_a, ["count", "label", "value", "icon", "className", "onChange", "syncWithLocation"]);
    var translate = useTranslate();
    var location = useLocation();
    var isSubmitted = useFormState().isSubmitted;
    var formGroup = useFormGroup(value.toString());
    var propsForLink = {
        component: Link,
        to: __assign(__assign({}, location), { pathname: value }),
    };
    var tabLabel = isValidElement(label)
        ? label
        : translate(label, { _: label });
    if (count !== undefined) {
        tabLabel = (React.createElement("span", null,
            tabLabel,
            " (",
            count,
            ")"));
    }
    return (React.createElement(MuiTab, __assign({ label: tabLabel, value: value, icon: icon, className: clsx('form-tab', className, (_b = {},
            _b[TabbedFormClasses.errorTabButton] = !formGroup.isValid && (formGroup.isTouched || isSubmitted),
            _b.error = !formGroup.isValid && (formGroup.isTouched || isSubmitted),
            _b)) }, (syncWithLocation ? propsForLink : {}), { id: "tabheader-".concat(value), "aria-controls": "tabpanel-".concat(value), onChange: onChange }, rest)));
};
FormTabHeader.propTypes = {
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    count: PropTypes.node,
    children: PropTypes.node,
    intent: PropTypes.oneOf(['header', 'content']),
    hidden: PropTypes.bool,
    icon: PropTypes.element,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    margin: PropTypes.oneOf(['none', 'dense', 'normal']),
    path: PropTypes.string,
    // @ts-ignore
    record: PropTypes.object,
    resource: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};
//# sourceMappingURL=FormTabHeader.js.map