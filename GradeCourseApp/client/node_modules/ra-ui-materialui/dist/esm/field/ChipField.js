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
var _a;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import get from 'lodash/get';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { useRecordContext, useTranslate } from 'ra-core';
import { sanitizeFieldRestProps } from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
export var ChipField = memo(function (props) {
    var className = props.className, source = props.source, emptyText = props.emptyText, rest = __rest(props, ["className", "source", "emptyText"]);
    var record = useRecordContext(props);
    var value = get(record, source);
    var translate = useTranslate();
    if (value == null && emptyText) {
        return (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText && translate(emptyText, { _: emptyText })));
    }
    return (React.createElement(StyledChip, __assign({ className: clsx(ChipFieldClasses.chip, className), label: value }, sanitizeFieldRestProps(rest))));
});
ChipField.propTypes = __assign(__assign({}, ChipField.propTypes), fieldPropTypes);
ChipField.displayName = 'ChipField';
var PREFIX = 'RaChipField';
var ChipFieldClasses = {
    chip: "".concat(PREFIX, "-chip"),
};
var StyledChip = styled(Chip, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["&.".concat(ChipFieldClasses.chip)] = { margin: 4, cursor: 'inherit' },
    _a));
//# sourceMappingURL=ChipField.js.map