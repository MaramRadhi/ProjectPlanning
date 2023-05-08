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
exports.ArrayField = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var ra_core_1 = require("ra-core");
var types_1 = require("./types");
/**
 * Display a collection
 *
 * Ideal for embedded arrays of objects, e.g.
 * {
 *   id: 123
 *   tags: [
 *     { name: 'foo' },
 *     { name: 'bar' }
 *   ]
 * }
 *
 * The child must be an iterator component
 * (like <Datagrid> or <SingleFieldList>).
 *
 * @example Display all the backlinks of the current post as a <Datagrid>
 * // post = {
 * //   id: 123
 * //   backlinks: [
 * //       {
 * //           uuid: '34fdf393-f449-4b04-a423-38ad02ae159e',
 * //           date: '2012-08-10T00:00:00.000Z',
 * //           url: 'http://example.com/foo/bar.html',
 * //       },
 * //       {
 * //           uuid: 'd907743a-253d-4ec1-8329-404d4c5e6cf1',
 * //           date: '2012-08-14T00:00:00.000Z',
 * //           url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 * //       }
 * //    ]
 * // }
 *     <ArrayField source="backlinks">
 *         <Datagrid>
 *             <DateField source="date" />
 *             <UrlField source="url" />
 *         </Datagrid>
 *     </ArrayField>
 *
 * @example Display all the tags of the current post as <Chip> components
 * // post = {
 * //   id: 123
 * //   tags: [
 * //     { name: 'foo' },
 * //     { name: 'bar' }
 * //   ]
 * // }
 *     <ArrayField source="tags">
 *         <SingleFieldList>
 *             <ChipField source="name" />
 *         </SingleFieldList>
 *     </ArrayField>
 *
 * If you need to render a collection in a custom way, it's often simpler
 * to write your own component:
 *
 * @example
 *   const TagsField = () => {
 *       const record = useRecordContext();
 *       return (
 *           <ul>
 *               {record.tags.map(item => (
 *                   <li key={item.name}>{item.name}</li>
 *               ))}
 *           </ul>
 *       );
 *   };
 */
exports.ArrayField = (0, react_1.memo)(function (props) {
    var children = props.children, resource = props.resource, source = props.source;
    var record = (0, ra_core_1.useRecordContext)(props);
    var data = (0, get_1.default)(record, source, emptyArray) || emptyArray;
    return (React.createElement(ra_core_1.ListContextProvider, { value: {
            data: data,
            selectedIds: [],
            sort: { field: null, order: null },
            displayedFilters: null,
            filterValues: null,
            hasNextPage: null,
            hasPreviousPage: null,
            hideFilter: null,
            isFetching: false,
            isLoading: false,
            onSelect: null,
            onToggleItem: null,
            onUnselectItems: null,
            page: null,
            perPage: null,
            refetch: null,
            resource: resource,
            setFilters: null,
            setPage: null,
            setPerPage: null,
            setSort: null,
            showFilter: null,
            total: data.length,
        } }, children));
});
exports.ArrayField.propTypes = __assign({}, types_1.fieldPropTypes);
exports.ArrayField.displayName = 'ArrayField';
var emptyArray = [];
//# sourceMappingURL=ArrayField.js.map