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
import { Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { FieldTitle } from 'ra-core';
/**
 * Wrap a field or an input with a label if necessary.
 *
 * The label is displayed if:
 * - the field or input has a label prop that is not false, or
 * - the field or input has a source prop
 *
 * @example
 * <Labeled>
 *     <FooComponent source="title" />
 * </Labeled>
 */
export var Labeled = function (_a) {
    var _b;
    var _c, _d;
    var children = _a.children, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.color, color = _f === void 0 ? 'textSecondary' : _f, _g = _a.component, component = _g === void 0 ? 'span' : _g, fullWidth = _a.fullWidth, isRequired = _a.isRequired, label = _a.label, resource = _a.resource, source = _a.source, rest = __rest(_a, ["children", "className", "color", "component", "fullWidth", "isRequired", "label", "resource", "source"]);
    return (React.createElement(Root
    // @ts-ignore https://github.com/mui/material-ui/issues/29875
    , __assign({ 
        // @ts-ignore https://github.com/mui/material-ui/issues/29875
        component: component, className: clsx(className, (_b = {},
            _b[LabeledClasses.fullWidth] = fullWidth,
            _b)) }, rest),
        label !== false &&
            children.props.label !== false &&
            typeof children.type !== 'string' &&
            // @ts-ignore
            ((_c = children.type) === null || _c === void 0 ? void 0 : _c.displayName) !== 'Labeled' &&
            // @ts-ignore
            ((_d = children.type) === null || _d === void 0 ? void 0 : _d.displayName) !== 'Labeled' ? (React.createElement(Typography, { color: color, className: LabeledClasses.label },
            React.createElement(FieldTitle, { label: label || children.props.label, source: source || children.props.source, resource: resource, isRequired: isRequired }))) : null,
        children));
};
Labeled.displayName = 'Labeled';
var PREFIX = 'RaLabeled';
export var LabeledClasses = {
    label: "".concat(PREFIX, "-label"),
    fullWidth: "".concat(PREFIX, "-fullWidth"),
};
var Root = styled(Stack, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'inline-flex',
            marginBottom: '0.2em'
        },
        _b["&.".concat(LabeledClasses.fullWidth)] = {
            width: '100%',
        },
        _b["& .".concat(LabeledClasses.label)] = {
            fontSize: '0.75em',
            marginBottom: '0.2em',
        },
        _b);
});
//# sourceMappingURL=Labeled.js.map