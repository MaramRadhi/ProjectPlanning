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
import { memo } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Typography from '@mui/material/Typography';
import { useRecordContext } from 'ra-core';
import purify from 'dompurify';
import { sanitizeFieldRestProps } from './sanitizeFieldRestProps';
import { fieldPropTypes } from './types';
/**
 * Render an HTML string as rich text
 *
 * Note: This component leverages the `dangerouslySetInnerHTML` attribute,
 * but uses the DomPurify library to sanitize the HTML before rendering it.
 *
 * It means it is safe from Cross-Site Scripting (XSS) attacks - but it's still
 * a good practice to sanitize the value server-side.
 *
 * @example
 * <RichTextField source="description" />
 *
 * @example // remove all tags and output text only
 * <RichTextField source="description" stripTags />
 */
export var RichTextField = memo(function (props) {
    var className = props.className, emptyText = props.emptyText, source = props.source, _a = props.stripTags, stripTags = _a === void 0 ? false : _a, rest = __rest(props, ["className", "emptyText", "source", "stripTags"]);
    var record = useRecordContext(props);
    var value = get(record, source);
    return (React.createElement(Typography, __assign({ className: className, variant: "body2", component: "span" }, sanitizeFieldRestProps(rest)), value == null && emptyText ? (emptyText) : stripTags ? (removeTags(value)) : (React.createElement("span", { dangerouslySetInnerHTML: {
            __html: purify.sanitize(value),
        } }))));
});
RichTextField.propTypes = __assign(__assign(__assign({}, Typography.propTypes), fieldPropTypes), { stripTags: PropTypes.bool });
RichTextField.displayName = 'RichTextField';
export var removeTags = function (input) {
    return input ? input.replace(/<[^>]+>/gm, '') : '';
};
//# sourceMappingURL=RichTextField.js.map