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
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ErrorIcon from '@mui/icons-material/Error';
import { useReference, ResourceContextProvider, RecordContextProvider, useRecordContext, useCreatePath, useGetRecordRepresentation, useResourceDefinition, useTranslate, } from 'ra-core';
import { LinearProgress } from '../layout';
import { Link } from '../Link';
import { fieldPropTypes } from './types';
/**
 * Fetch reference record, and render its representation, or delegate rendering to child component.
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example // using recordRepresentation
 * <ReferenceField label="User" source="userId" reference="users" />
 *
 * @example // using a Field component to represent the record
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @example // By default, includes a link to the <Edit> page of the related record
 * // (`/users/:userId` in the previous example).
 * // Set the `link` prop to "show" to link to the <Show> page instead.
 * <ReferenceField label="User" source="userId" reference="users" link="show" />
 *
 * @example // You can also prevent `<ReferenceField>` from adding link to children
 * // by setting `link` to false.
 * <ReferenceField label="User" source="userId" reference="users" link={false} />
 *
 * @example // Alternatively, you can also pass a custom function to `link`.
 * // It must take reference and record as arguments and return a string
 * <ReferenceField label="User" source="userId" reference="users" link={(record, reference) => "/path/to/${reference}/${record}"} />
 *
 * @default
 * In previous versions of React-Admin, the prop `linkType` was used. It is now deprecated and replaced with `link`. However
 * backward-compatibility is still kept
 */
export var ReferenceField = function (props) {
    var source = props.source, emptyText = props.emptyText, rest = __rest(props, ["source", "emptyText"]);
    var record = useRecordContext(props);
    var id = get(record, source);
    var translate = useTranslate();
    return id == null ? (emptyText ? (React.createElement(Typography, { component: "span", variant: "body2" }, emptyText && translate(emptyText, { _: emptyText }))) : null) : (React.createElement(NonEmptyReferenceField, __assign({}, rest, { emptyText: emptyText, record: record, id: id })));
};
ReferenceField.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    cellClassName: PropTypes.string,
    headerClassName: PropTypes.string,
    label: fieldPropTypes.label,
    record: PropTypes.any,
    reference: PropTypes.string.isRequired,
    resource: PropTypes.string,
    sortBy: PropTypes.string,
    sortByOrder: fieldPropTypes.sortByOrder,
    source: PropTypes.string.isRequired,
    translateChoice: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    // @ts-ignore
    link: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]).isRequired,
};
ReferenceField.defaultProps = {
    link: 'edit',
};
/**
 * This intermediate component is made necessary by the useReference hook,
 * which cannot be called conditionally when get(record, source) is empty.
 */
export var NonEmptyReferenceField = function (_a) {
    var children = _a.children, id = _a.id, record = _a.record, reference = _a.reference, link = _a.link, props = __rest(_a, ["children", "id", "record", "reference", "link"]);
    var createPath = useCreatePath();
    var resourceDefinition = useResourceDefinition({ resource: reference });
    var resourceLinkPath = link === false ||
        (link === 'edit' && !resourceDefinition.hasEdit) ||
        (link === 'show' && !resourceDefinition.hasShow)
        ? false
        : createPath({
            resource: reference,
            id: id,
            type: typeof link === 'function'
                ? link(record, reference)
                : link,
        });
    return (React.createElement(ResourceContextProvider, { value: reference },
        React.createElement(PureReferenceFieldView, __assign({ reference: reference }, props, useReference({
            reference: reference,
            id: id,
        }), { resourceLinkPath: resourceLinkPath }), children)));
};
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
export var ReferenceFieldView = function (props) {
    var children = props.children, className = props.className, emptyText = props.emptyText, error = props.error, isLoading = props.isLoading, reference = props.reference, referenceRecord = props.referenceRecord, resourceLinkPath = props.resourceLinkPath, sx = props.sx;
    var getRecordRepresentation = useGetRecordRepresentation(reference);
    var translate = useTranslate();
    if (error) {
        return (
        /* eslint-disable jsx-a11y/role-supports-aria-props */
        React.createElement(ErrorIcon, { "aria-errormessage": error.message ? error.message : error, role: "presentation", color: "error", fontSize: "small" })
        /* eslint-enable */
        );
    }
    if (isLoading) {
        return React.createElement(LinearProgress, null);
    }
    if (!referenceRecord) {
        return emptyText ? (React.createElement(React.Fragment, null, emptyText && translate(emptyText, { _: emptyText }))) : null;
    }
    var child = children || (React.createElement(Typography, { component: "span", variant: "body2" }, getRecordRepresentation(referenceRecord)));
    return resourceLinkPath ? (React.createElement(Root, { className: className, sx: sx },
        React.createElement(RecordContextProvider, { value: referenceRecord },
            React.createElement(Link, { to: resourceLinkPath, className: ReferenceFieldClasses.link, onClick: stopPropagation }, child)))) : (React.createElement(RecordContextProvider, { value: referenceRecord }, child));
};
ReferenceFieldView.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    record: PropTypes.any,
    reference: PropTypes.string,
    referenceRecord: PropTypes.any,
    resource: PropTypes.string,
    resourceLinkPath: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([false]),
    ]),
    source: PropTypes.string,
    translateChoice: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};
var PureReferenceFieldView = memo(ReferenceFieldView);
var PREFIX = 'RaReferenceField';
export var ReferenceFieldClasses = {
    link: "".concat(PREFIX, "-link"),
};
var Root = styled('span', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(ReferenceFieldClasses.link)] = {
            '& > *': {
                color: theme.palette.primary.main,
            },
        },
        _b);
});
//# sourceMappingURL=ReferenceField.js.map