import React from 'react';
import PropTypes from 'prop-types';
import { useReferenceManyFieldController, ListContextProvider, ResourceContextProvider, useRecordContext, } from 'ra-core';
import { fieldPropTypes } from './types';
/**
 * Render related records to the current one.
 *
 * You must define the fields to be passed to the iterator component as children.
 *
 * @example Display all the comments of the current post as a datagrid
 * <ReferenceManyField reference="comments" target="post_id">
 *     <Datagrid>
 *         <TextField source="id" />
 *         <TextField source="body" />
 *         <DateField source="created_at" />
 *         <EditButton />
 *     </Datagrid>
 * </ReferenceManyField>
 *
 * @example Display all the books by the current author, only the title
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, restricts the displayed values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceManyField perPage={10} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceManyField sort={{ field: 'created_at', order: 'DESC' }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceManyField filter={{ is_published: true }} reference="comments" target="post_id">
 *    ...
 * </ReferenceManyField>
 */
export var ReferenceManyField = function (props) {
    var children = props.children, filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, _b = props.pagination, pagination = _b === void 0 ? null : _b, perPage = props.perPage, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source, target = props.target;
    var record = useRecordContext(props);
    var controllerProps = useReferenceManyFieldController({
        filter: filter,
        page: page,
        perPage: perPage,
        record: record,
        reference: reference,
        resource: resource,
        sort: sort,
        source: source,
        target: target,
    });
    return (React.createElement(ResourceContextProvider, { value: reference },
        React.createElement(ListContextProvider, { value: controllerProps },
            children,
            pagination)));
};
ReferenceManyField.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    filter: PropTypes.object,
    label: fieldPropTypes.label,
    perPage: PropTypes.number,
    record: PropTypes.any,
    reference: PropTypes.string.isRequired,
    resource: PropTypes.string,
    sortBy: PropTypes.string,
    sortByOrder: fieldPropTypes.sortByOrder,
    source: PropTypes.string.isRequired,
    sort: PropTypes.exact({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    target: PropTypes.string.isRequired,
};
ReferenceManyField.defaultProps = {
    filter: {},
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
    source: 'id',
};
// FIXME kept for backwards compatibility, unused, to be removed in v5
export var ReferenceManyFieldView = function (props) {
    var children = props.children, pagination = props.pagination;
    if (process.env.NODE_ENV !== 'production') {
        console.error('<ReferenceManyFieldView> is deprecated, use <ReferenceManyField> directly');
    }
    return (React.createElement(React.Fragment, null,
        children,
        pagination && props.total !== undefined ? pagination : null));
};
ReferenceManyFieldView.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    sort: PropTypes.exact({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    data: PropTypes.any,
    isLoading: PropTypes.bool,
    pagination: PropTypes.element,
    reference: PropTypes.string,
    setSort: PropTypes.func,
};
//# sourceMappingURL=ReferenceManyField.js.map