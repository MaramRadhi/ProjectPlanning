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
import { LinearProgress, styled } from '@mui/material';
import { cloneElement, Children, } from 'react';
import PropTypes from 'prop-types';
import { sanitizeListRestProps, useListContext, useResourceContext, RecordContextProvider, ComponentPropType, useCreatePath, } from 'ra-core';
import { Link } from '../Link';
/**
 * Iterator component to be used to display a list of entities, using a single field
 *
 * @example Display all the books by the current author
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, it includes a link to the <Edit> page of the related record
 * (`/books/:id` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType="show">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * You can also prevent `<SingleFieldList>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType={false}>
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 */
export var SingleFieldList = function (props) {
    var className = props.className, children = props.children, _a = props.linkType, linkType = _a === void 0 ? 'edit' : _a, _b = props.component, Component = _b === void 0 ? Root : _b, rest = __rest(props, ["className", "children", "linkType", "component"]);
    var _c = useListContext(props), data = _c.data, isLoading = _c.isLoading;
    var resource = useResourceContext(props);
    var createPath = useCreatePath();
    if (isLoading === true) {
        return React.createElement(LinearProgress, null);
    }
    return (React.createElement(Component, __assign({ className: className }, sanitizeListRestProps(rest)), data.map(function (record, rowIndex) {
        var _a, _b;
        var resourceLinkPath = !linkType
            ? false
            : createPath({
                resource: resource,
                type: linkType,
                id: record.id,
            });
        if (resourceLinkPath) {
            return (React.createElement(RecordContextProvider, { value: record, key: (_a = record.id) !== null && _a !== void 0 ? _a : "row".concat(rowIndex) },
                React.createElement(Link, { className: SingleFieldListClasses.link, to: resourceLinkPath, onClick: stopPropagation }, cloneElement(Children.only(children), {
                    record: record,
                    resource: resource,
                    // Workaround to force ChipField to be clickable
                    onClick: handleClick,
                }))));
        }
        return (React.createElement(RecordContextProvider, { value: record, key: (_b = record.id) !== null && _b !== void 0 ? _b : "row".concat(rowIndex) }, children));
    })));
};
SingleFieldList.propTypes = {
    children: PropTypes.element.isRequired,
    classes: PropTypes.object,
    className: PropTypes.string,
    component: ComponentPropType,
    data: PropTypes.any,
    ids: PropTypes.array,
    // @ts-ignore
    linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    resource: PropTypes.string,
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object,
            PropTypes.bool,
        ])),
        PropTypes.func,
        PropTypes.object,
    ]),
};
var PREFIX = 'RaSingleFieldList';
export var SingleFieldListClasses = {
    link: "".concat(PREFIX, "-link"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: theme.spacing(-1),
            marginBottom: theme.spacing(-1)
        },
        _b["& .".concat(SingleFieldListClasses.link)] = {
            textDecoration: 'none',
        },
        _b);
});
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
// Our handleClick does nothing as we wrap the children inside a Link but it is
// required by ChipField, which uses a Chip from MUI.
// The MUI Chip requires an onClick handler to behave like a clickable element.
var handleClick = function () { };
//# sourceMappingURL=SingleFieldList.js.map