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
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { useRecordContext, useTranslate } from 'ra-core';
import { sanitizeFieldRestProps } from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
export var ImageField = function (props) {
    var className = props.className, emptyText = props.emptyText, source = props.source, src = props.src, title = props.title, rest = __rest(props, ["className", "emptyText", "source", "src", "title"]);
    var record = useRecordContext(props);
    var sourceValue = get(record, source);
    var translate = useTranslate();
    if (!sourceValue) {
        return emptyText ? (React.createElement(Typography, __assign({ component: "span", variant: "body2", className: className }, sanitizeFieldRestProps(rest)), emptyText && translate(emptyText, { _: emptyText }))) : (React.createElement("div", __assign({ className: className }, sanitizeFieldRestProps(rest))));
    }
    if (Array.isArray(sourceValue)) {
        return (React.createElement(Root, __assign({ className: className }, sanitizeFieldRestProps(rest)),
            React.createElement("ul", { className: ImageFieldClasses.list }, sourceValue.map(function (file, index) {
                var fileTitleValue = get(file, title) || title;
                var srcValue = get(file, src) || title;
                return (React.createElement("li", { key: index },
                    React.createElement("img", { alt: fileTitleValue, title: fileTitleValue, src: srcValue, className: ImageFieldClasses.image })));
            }))));
    }
    var titleValue = get(record, title) || title;
    return (React.createElement(Root, __assign({ className: className }, sanitizeFieldRestProps(rest)),
        React.createElement("img", { title: titleValue, alt: titleValue, src: sourceValue, className: ImageFieldClasses.image })));
};
// What? TypeScript loses the displayName if we don't set it explicitly
ImageField.displayName = 'ImageField';
ImageField.propTypes = __assign(__assign({}, fieldPropTypes), { src: PropTypes.string, title: PropTypes.string });
var PREFIX = 'RaImageField';
export var ImageFieldClasses = {
    list: "".concat(PREFIX, "-list"),
    image: "".concat(PREFIX, "-image"),
};
var Root = styled(Box, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["& .".concat(ImageFieldClasses.list)] = {
        display: 'flex',
        listStyleType: 'none',
    },
    _a["& .".concat(ImageFieldClasses.image)] = {
        margin: '0.25rem',
        width: 200,
        height: 100,
        objectFit: 'contain',
    },
    _a));
//# sourceMappingURL=ImageField.js.map