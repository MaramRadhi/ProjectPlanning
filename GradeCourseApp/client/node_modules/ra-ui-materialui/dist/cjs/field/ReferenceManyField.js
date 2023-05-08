"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceManyFieldView = exports.ReferenceManyField = void 0;
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var types_1 = require("./types");
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
var ReferenceManyField = function (props) {
    var children = props.children, filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, _b = props.pagination, pagination = _b === void 0 ? null : _b, perPage = props.perPage, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source, target = props.target;
    var record = (0, ra_core_1.useRecordContext)(props);
    var controllerProps = (0, ra_core_1.useReferenceManyFieldController)({
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
    return (react_1.default.createElement(ra_core_1.ResourceContextProvider, { value: reference },
        react_1.default.createElement(ra_core_1.ListContextProvider, { value: controllerProps },
            children,
            pagination)));
};
exports.ReferenceManyField = ReferenceManyField;
exports.ReferenceManyField.propTypes = {
    children: prop_types_1.default.node.isRequired,
    className: prop_types_1.default.string,
    filter: prop_types_1.default.object,
    label: types_1.fieldPropTypes.label,
    perPage: prop_types_1.default.number,
    record: prop_types_1.default.any,
    reference: prop_types_1.default.string.isRequired,
    resource: prop_types_1.default.string,
    sortBy: prop_types_1.default.string,
    sortByOrder: types_1.fieldPropTypes.sortByOrder,
    source: prop_types_1.default.string.isRequired,
    sort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    target: prop_types_1.default.string.isRequired,
};
exports.ReferenceManyField.defaultProps = {
    filter: {},
    perPage: 25,
    sort: { field: 'id', order: 'DESC' },
    source: 'id',
};
// FIXME kept for backwards compatibility, unused, to be removed in v5
var ReferenceManyFieldView = function (props) {
    var children = props.children, pagination = props.pagination;
    if (process.env.NODE_ENV !== 'production') {
        console.error('<ReferenceManyFieldView> is deprecated, use <ReferenceManyField> directly');
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        children,
        pagination && props.total !== undefined ? pagination : null));
};
exports.ReferenceManyFieldView = ReferenceManyFieldView;
exports.ReferenceManyFieldView.propTypes = {
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    sort: prop_types_1.default.exact({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }),
    data: prop_types_1.default.any,
    isLoading: prop_types_1.default.bool,
    pagination: prop_types_1.default.element,
    reference: prop_types_1.default.string,
    setSort: prop_types_1.default.func,
};
//# sourceMappingURL=ReferenceManyField.js.map