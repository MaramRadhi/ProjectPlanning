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
import { ListBase } from 'ra-core';
import { TitlePropType } from '../layout/Title';
import { ListView } from './ListView';
/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 *
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * The <List> component accepts the following props:
 *
 * - actions
 * - aside: Side Component
 * - children: List Layout
 * - component
 * - disableAuthentication
 * - disableSyncWithLocation
 * - empty: Empty Page Component
 * - emptyWhileLoading
 * - exporter
 * - filters: Filter Inputs
 * - filter: Permanent Filter
 * - filterDefaultValues
 * - pagination: Pagination Component
 * - perPage: Pagination Size
 * - queryOptions
 * - sort: Default Sort Field & Order
 * - title
 * - sx: CSS API
 *
 * @example
 * const postFilters = [
 *     <TextInput label="Search" source="q" alwaysOn />,
 *     <TextInput label="Title" source="title" />
 * ];
 * export const PostList = () => (
 *     <List
 *         title="List of posts"
 *         sort={{ field: 'published_at' }}
 *         filter={{ is_published: true }}
 *         filters={postFilters}
 *     >
 *         <Datagrid>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 */
export var List = function (_a) {
    var debounce = _a.debounce, disableAuthentication = _a.disableAuthentication, disableSyncWithLocation = _a.disableSyncWithLocation, exporter = _a.exporter, filter = _a.filter, filterDefaultValues = _a.filterDefaultValues, perPage = _a.perPage, queryOptions = _a.queryOptions, resource = _a.resource, sort = _a.sort, storeKey = _a.storeKey, rest = __rest(_a, ["debounce", "disableAuthentication", "disableSyncWithLocation", "exporter", "filter", "filterDefaultValues", "perPage", "queryOptions", "resource", "sort", "storeKey"]);
    return (React.createElement(ListBase, { debounce: debounce, disableAuthentication: disableAuthentication, disableSyncWithLocation: disableSyncWithLocation, exporter: exporter, filter: filter, filterDefaultValues: filterDefaultValues, perPage: perPage, queryOptions: queryOptions, resource: resource, sort: sort, storeKey: storeKey },
        React.createElement(ListView, __assign({}, rest))));
};
List.propTypes = {
    // the props you can change
    // @ts-ignore-line
    actions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    aside: PropTypes.element,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    emptyWhileLoading: PropTypes.bool,
    filter: PropTypes.object,
    filterDefaultValues: PropTypes.object,
    filters: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    // @ts-ignore-line
    pagination: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    perPage: PropTypes.number.isRequired,
    //@ts-ignore-line
    sort: PropTypes.shape({
        field: PropTypes.string,
        order: PropTypes.string,
    }),
    sx: PropTypes.any,
    title: TitlePropType,
    // the props managed by react-admin
    disableSyncWithLocation: PropTypes.bool,
    hasCreate: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasList: PropTypes.bool,
    hasShow: PropTypes.bool,
    resource: PropTypes.string,
};
List.defaultProps = {
    filter: {},
    perPage: 10,
};
//# sourceMappingURL=List.js.map