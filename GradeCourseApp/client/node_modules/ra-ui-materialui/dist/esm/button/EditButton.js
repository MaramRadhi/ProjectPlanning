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
import clsx from 'clsx';
import { styled } from '@mui/material/styles';
import ContentCreate from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';
import { useResourceContext, useRecordContext, useCreatePath, } from 'ra-core';
import { Button } from './Button';
/**
 * Opens the Edit view for the current record.
 *
 * Reads the record and resource from the context.
 *
 * @example // basic usage
 * import { EditButton } from 'react-admin';
 *
 * const CommentEditButton = () => (
 *     <EditButton label="Edit comment" />
 * );
 */
export var EditButton = function (props) {
    var _a = props.icon, icon = _a === void 0 ? defaultIcon : _a, _b = props.label, label = _b === void 0 ? 'ra.action.edit' : _b, _c = props.scrollToTop, scrollToTop = _c === void 0 ? true : _c, className = props.className, rest = __rest(props, ["icon", "label", "scrollToTop", "className"]);
    var resource = useResourceContext(props);
    var record = useRecordContext(props);
    var createPath = useCreatePath();
    if (!record)
        return null;
    return (React.createElement(StyledButton, __assign({ component: Link, to: createPath({ type: 'edit', resource: resource, id: record.id }), state: scrollStates[String(scrollToTop)], label: label, onClick: stopPropagation, className: clsx(EditButtonClasses.root, className) }, rest), icon));
};
// avoids using useMemo to get a constant value for the link state
var scrollStates = {
    true: { _scrollToTop: true },
    false: {},
};
var defaultIcon = React.createElement(ContentCreate, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
EditButton.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    record: PropTypes.any,
    scrollToTop: PropTypes.bool,
};
var PREFIX = 'RaEditButton';
export var EditButtonClasses = {
    root: "".concat(PREFIX, "-root"),
};
var StyledButton = styled(Button, {
    name: PREFIX,
    overridesResolver: function (_props, styles) { return styles.root; },
})({});
//# sourceMappingURL=EditButton.js.map