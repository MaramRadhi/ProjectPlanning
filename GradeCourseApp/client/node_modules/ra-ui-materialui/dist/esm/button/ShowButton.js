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
import ImageEye from '@mui/icons-material/RemoveRedEye';
import { Link } from 'react-router-dom';
import { useResourceContext, useRecordContext, useCreatePath, } from 'ra-core';
import isEqual from 'lodash/isEqual';
import { Button } from './Button';
/**
 * Opens the Show view of a given record
 *
 * @example // basic usage
 * import { ShowButton, useRecordContext } from 'react-admin';
 *
 * const CommentShowButton = () => {
 *     const record = useRecordContext();
 *     return (
 *         <ShowButton label="Show comment" record={record} />
 *     );
 * };
 */
var ShowButton = function (props) {
    var _a = props.icon, icon = _a === void 0 ? defaultIcon : _a, _b = props.label, label = _b === void 0 ? 'ra.action.show' : _b, recordProp = props.record, resourceProp = props.resource, _c = props.scrollToTop, scrollToTop = _c === void 0 ? true : _c, rest = __rest(props, ["icon", "label", "record", "resource", "scrollToTop"]);
    var resource = useResourceContext(props);
    var record = useRecordContext(props);
    var createPath = useCreatePath();
    if (!record)
        return null;
    return (React.createElement(Button, __assign({ component: Link, to: createPath({ type: 'show', resource: resource, id: record.id }), state: scrollStates[String(scrollToTop)], label: label, onClick: stopPropagation }, rest), icon));
};
// avoids using useMemo to get a constant value for the link state
var scrollStates = {
    true: { _scrollToTop: true },
    false: {},
};
var defaultIcon = React.createElement(ImageEye, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
ShowButton.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string,
    record: PropTypes.any,
    scrollToTop: PropTypes.bool,
};
var PureShowButton = memo(ShowButton, function (prevProps, nextProps) {
    return prevProps.resource === nextProps.resource &&
        (prevProps.record && nextProps.record
            ? prevProps.record.id === nextProps.record.id
            : prevProps.record == nextProps.record) && // eslint-disable-line eqeqeq
        prevProps.label === nextProps.label &&
        prevProps.disabled === nextProps.disabled &&
        isEqual(prevProps.to, nextProps.to);
});
export default PureShowButton;
//# sourceMappingURL=ShowButton.js.map