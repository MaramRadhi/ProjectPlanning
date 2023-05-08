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
import * as React from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import { ListContextProvider, useListContext, useReferenceArrayFieldController, ResourceContextProvider, useRecordContext, useResourceDefinition, } from 'ra-core';
import { styled } from '@mui/material/styles';
import { fieldPropTypes } from './types';
import { LinearProgress } from '../layout';
import { SingleFieldList } from '../list/SingleFieldList';
import { ChipField } from './ChipField';
/**
 * A container component that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the products of the current order as datagrid
 * // order = {
 * //   id: 123,
 * //   product_ids: [456, 457, 458],
 * // }
 * <ReferenceArrayField label="Products" reference="products" source="product_ids">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="description" />
 *         <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceArrayField>
 *
 * @example Display all the categories of the current product as a list of chips
 * // product = {
 * //   id: 456,
 * //   category_ids: [11, 22, 33],
 * // }
 * <ReferenceArrayField label="Categories" reference="categories" source="category_ids">
 *     <SingleFieldList>
 *         <ChipField source="name" />
 *     </SingleFieldList>
 * </ReferenceArrayField>
 *
 * By default, restricts the displayed values to 1000. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayField perPage={10} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * By default, the field displays the results in the order in which they are referenced
 * (i.e. in the order of the list of ids). You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayField sort={{ field: 'name', order: 'ASC' }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 *
 * Also, you can filter the results to display only a subset of values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayField filter={{ is_published: true }} reference="categories" source="category_ids">
 *    ...
 * </ReferenceArrayField>
 */
export var ReferenceArrayField = function (props) {
    var filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, perPage = props.perPage, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source;
    var record = useRecordContext(props);
    var controllerProps = useReferenceArrayFieldController({
        filter: filter,
        page: page,
        perPage: perPage,
        record: record,
        reference: reference,
        resource: resource,
        sort: sort,
        source: source,
    });
    return (React.createElement(ResourceContextProvider, { value: reference },
        React.createElement(ListContextProvider, { value: controllerProps },
            React.createElement(PureReferenceArrayFieldView, __assign({}, props)))));
};
ReferenceArrayField.propTypes = __assign(__assign({}, fieldPropTypes), { className: PropTypes.string, children: PropTypes.node, label: fieldPropTypes.label, record: PropTypes.any, reference: PropTypes.string.isRequired, resource: PropTypes.string, sortBy: PropTypes.string, sortByOrder: fieldPropTypes.sortByOrder, source: PropTypes.string.isRequired });
export var ReferenceArrayFieldView = function (props) {
    var children = props.children, pagination = props.pagination, reference = props.reference, className = props.className, sx = props.sx;
    var _a = useListContext(props), isLoading = _a.isLoading, total = _a.total;
    var recordRepresentation = useResourceDefinition({
        resource: reference,
    }).recordRepresentation;
    var child = children ? (children) : (React.createElement(SingleFieldList, null,
        React.createElement(ChipField, { source: typeof recordRepresentation === 'string'
                ? recordRepresentation
                : 'id', size: "small" })));
    return (React.createElement(Root, { className: className, sx: sx }, isLoading ? (React.createElement(LinearProgress, { className: ReferenceArrayFieldClasses.progress })) : (React.createElement("span", null,
        child,
        pagination && total !== undefined ? pagination : null))));
};
ReferenceArrayFieldView.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    reference: PropTypes.string.isRequired,
};
var PREFIX = 'RaReferenceArrayField';
export var ReferenceArrayFieldClasses = {
    progress: "".concat(PREFIX, "-progress"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(ReferenceArrayFieldClasses.progress)] = {
            marginTop: theme.spacing(2),
        },
        _b);
});
var PureReferenceArrayFieldView = memo(ReferenceArrayFieldView);
//# sourceMappingURL=ReferenceArrayField.js.map