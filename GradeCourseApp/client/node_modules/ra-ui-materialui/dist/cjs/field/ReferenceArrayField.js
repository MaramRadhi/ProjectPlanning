"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceArrayFieldClasses = exports.ReferenceArrayFieldView = exports.ReferenceArrayField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
var styles_1 = require("@mui/material/styles");
var types_1 = require("./types");
var layout_1 = require("../layout");
var SingleFieldList_1 = require("../list/SingleFieldList");
var ChipField_1 = require("./ChipField");
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
var ReferenceArrayField = function (props) {
    var filter = props.filter, _a = props.page, page = _a === void 0 ? 1 : _a, perPage = props.perPage, reference = props.reference, resource = props.resource, sort = props.sort, source = props.source;
    var record = (0, ra_core_1.useRecordContext)(props);
    var controllerProps = (0, ra_core_1.useReferenceArrayFieldController)({
        filter: filter,
        page: page,
        perPage: perPage,
        record: record,
        reference: reference,
        resource: resource,
        sort: sort,
        source: source,
    });
    return (React.createElement(ra_core_1.ResourceContextProvider, { value: reference },
        React.createElement(ra_core_1.ListContextProvider, { value: controllerProps },
            React.createElement(PureReferenceArrayFieldView, __assign({}, props)))));
};
exports.ReferenceArrayField = ReferenceArrayField;
exports.ReferenceArrayField.propTypes = __assign(__assign({}, types_1.fieldPropTypes), { className: prop_types_1.default.string, children: prop_types_1.default.node, label: types_1.fieldPropTypes.label, record: prop_types_1.default.any, reference: prop_types_1.default.string.isRequired, resource: prop_types_1.default.string, sortBy: prop_types_1.default.string, sortByOrder: types_1.fieldPropTypes.sortByOrder, source: prop_types_1.default.string.isRequired });
var ReferenceArrayFieldView = function (props) {
    var children = props.children, pagination = props.pagination, reference = props.reference, className = props.className, sx = props.sx;
    var _a = (0, ra_core_1.useListContext)(props), isLoading = _a.isLoading, total = _a.total;
    var recordRepresentation = (0, ra_core_1.useResourceDefinition)({
        resource: reference,
    }).recordRepresentation;
    var child = children ? (children) : (React.createElement(SingleFieldList_1.SingleFieldList, null,
        React.createElement(ChipField_1.ChipField, { source: typeof recordRepresentation === 'string'
                ? recordRepresentation
                : 'id', size: "small" })));
    return (React.createElement(Root, { className: className, sx: sx }, isLoading ? (React.createElement(layout_1.LinearProgress, { className: exports.ReferenceArrayFieldClasses.progress })) : (React.createElement("span", null,
        child,
        pagination && total !== undefined ? pagination : null))));
};
exports.ReferenceArrayFieldView = ReferenceArrayFieldView;
exports.ReferenceArrayFieldView.propTypes = {
    className: prop_types_1.default.string,
    children: prop_types_1.default.node,
    reference: prop_types_1.default.string.isRequired,
};
var PREFIX = 'RaReferenceArrayField';
exports.ReferenceArrayFieldClasses = {
    progress: "".concat(PREFIX, "-progress"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.ReferenceArrayFieldClasses.progress)] = {
            marginTop: theme.spacing(2),
        },
        _b);
});
var PureReferenceArrayFieldView = (0, react_1.memo)(exports.ReferenceArrayFieldView);
//# sourceMappingURL=ReferenceArrayField.js.map