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
import { Fab, useMediaQuery } from '@mui/material';
import ContentAdd from '@mui/icons-material/Add';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { useTranslate, useResourceContext, useCreatePath } from 'ra-core';
import isEqual from 'lodash/isEqual';
import { Button } from './Button';
/**
 * Opens the Create view of a given resource
 *
 * Renders as a regular button on desktop, and a Floating Action Button
 * on mobile.
 *
 * @example // basic usage
 * import { CreateButton } from 'react-admin';
 *
 * const CommentCreateButton = () => (
 *     <CreateButton label="Create comment" />
 * );
 */
var CreateButton = function (props) {
    var className = props.className, _a = props.icon, icon = _a === void 0 ? defaultIcon : _a, _b = props.label, label = _b === void 0 ? 'ra.action.create' : _b, resourceProp = props.resource, _c = props.scrollToTop, scrollToTop = _c === void 0 ? true : _c, variant = props.variant, rest = __rest(props, ["className", "icon", "label", "resource", "scrollToTop", "variant"]);
    var resource = useResourceContext(props);
    var createPath = useCreatePath();
    var translate = useTranslate();
    var isSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('md');
    });
    return isSmall ? (React.createElement(StyledFab, __assign({ component: Link, to: createPath({ resource: resource, type: 'create' }), state: scrollStates[String(scrollToTop)], color: "primary", className: clsx(CreateButtonClasses.floating, className), "aria-label": label && translate(label) }, rest), icon)) : (React.createElement(StyledButton, __assign({ component: Link, to: createPath({ resource: resource, type: 'create' }), state: scrollStates[String(scrollToTop)], className: clsx(CreateButtonClasses.root, className), label: label, variant: variant }, rest), icon));
};
// avoids using useMemo to get a constant value for the link state
var scrollStates = {
    true: { _scrollToTop: true },
    false: {},
};
var defaultIcon = React.createElement(ContentAdd, null);
CreateButton.propTypes = {
    resource: PropTypes.string,
    className: PropTypes.string,
    icon: PropTypes.element,
    label: PropTypes.string,
};
var PREFIX = 'RaCreateButton';
export var CreateButtonClasses = {
    root: "".concat(PREFIX, "-root"),
    floating: "".concat(PREFIX, "-floating"),
};
var StyledFab = styled(Fab, {
    name: PREFIX,
    overridesResolver: function (_props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["&.".concat(CreateButtonClasses.floating)] = {
            color: theme.palette.getContrastText(theme.palette.primary.main),
            margin: 0,
            top: 'auto',
            right: 20,
            bottom: 60,
            left: 'auto',
            position: 'fixed',
            zIndex: 1000,
        },
        _b);
});
var StyledButton = styled(Button, {
    name: PREFIX,
    overridesResolver: function (_props, styles) { return styles.root; },
})({});
export default memo(CreateButton, function (prevProps, nextProps) {
    return (prevProps.resource === nextProps.resource &&
        prevProps.label === nextProps.label &&
        prevProps.translate === nextProps.translate &&
        prevProps.disabled === nextProps.disabled &&
        isEqual(prevProps.to, nextProps.to));
});
//# sourceMappingURL=CreateButton.js.map