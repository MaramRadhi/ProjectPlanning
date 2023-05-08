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
import { memo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import { Tooltip, Typography } from '@mui/material';
import { useTranslate, useRecordContext } from 'ra-core';
import { fieldPropTypes } from './types';
import { sanitizeFieldRestProps } from './sanitizeFieldRestProps';
export var BooleanField = memo(function (props) {
    var className = props.className, emptyText = props.emptyText, source = props.source, valueLabelTrue = props.valueLabelTrue, valueLabelFalse = props.valueLabelFalse, _a = props.TrueIcon, TrueIcon = _a === void 0 ? DoneIcon : _a, _b = props.FalseIcon, FalseIcon = _b === void 0 ? ClearIcon : _b, _c = props.looseValue, looseValue = _c === void 0 ? false : _c, rest = __rest(props, ["className", "emptyText", "source", "valueLabelTrue", "valueLabelFalse", "TrueIcon", "FalseIcon", "looseValue"]);
    var record = useRecordContext(props);
    var translate = useTranslate();
    var value = get(record, source);
    var isTruthyValue = value === true || (looseValue && value);
    var ariaLabel = value ? valueLabelTrue : valueLabelFalse;
    if (!ariaLabel) {
        ariaLabel = isTruthyValue ? 'ra.boolean.true' : 'ra.boolean.false';
    }
    if (looseValue || value === false || value === true) {
        return (React.createElement(StyledTypography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)),
            React.createElement(Tooltip, { title: translate(ariaLabel, { _: ariaLabel }) }, isTruthyValue ? (TrueIcon ? (React.createElement(TrueIcon, { "data-testid": "true", fontSize: "small" })) : (React.createElement(React.Fragment, null))) : FalseIcon ? (React.createElement(FalseIcon, { "data-testid": "false", fontSize: "small" })) : (React.createElement(React.Fragment, null)))));
    }
    return (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText && translate(emptyText, { _: emptyText })));
});
BooleanField.propTypes = __assign(__assign(__assign({}, Typography.propTypes), fieldPropTypes), { valueLabelFalse: PropTypes.string, valueLabelTrue: PropTypes.string, TrueIcon: PropTypes.elementType, FalseIcon: PropTypes.elementType, looseValue: PropTypes.bool });
BooleanField.displayName = 'BooleanField';
var PREFIX = 'RaBooleanField';
var StyledTypography = styled(Typography, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})({
    display: 'inline-flex',
    verticalAlign: 'middle',
    lineHeight: 0,
});
//# sourceMappingURL=BooleanField.js.map