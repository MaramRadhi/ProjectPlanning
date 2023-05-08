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
import { cloneElement, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { sanitizeListRestProps, useListContext, useResourceContext, useResourceDefinition, } from 'ra-core';
import TopToolbar from '../layout/TopToolbar';
import { CreateButton, ExportButton } from '../button';
import { FilterContext } from './FilterContext';
import { FilterButton } from './filter';
/**
 * Action Toolbar for the List view
 *
 * Internal component. If you want to add or remove actions for a List view,
 * write your own ListActions Component. Then, in the <List> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import { cloneElement } from 'react';
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, List, CreateButton, ExportButton } from 'react-admin';
 *
 *     const PostListActions = ({ filters }) => (
 *         <TopToolbar>
 *             { cloneElement(filters, { context: 'button' }) }
 *             <CreateButton/>
 *             <ExportButton/>
 *             // Add your custom actions here //
 *             <Button onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostList = (props) => (
 *         <List actions={<PostListActions />} {...props}>
 *             ...
 *         </List>
 *     );
 */
export var ListActions = function (props) {
    var className = props.className, filtersProp = props.filters, _ = props.hasCreate, rest = __rest(props, ["className", "filters", "hasCreate"]);
    var _a = useListContext(props), sort = _a.sort, displayedFilters = _a.displayedFilters, filterValues = _a.filterValues, exporter = _a.exporter, showFilter = _a.showFilter, total = _a.total;
    var resource = useResourceContext(props);
    var hasCreate = useResourceDefinition(props).hasCreate;
    var filters = useContext(FilterContext) || filtersProp;
    return useMemo(function () { return (React.createElement(TopToolbar, __assign({ className: className }, sanitizeListRestProps(rest)),
        filtersProp
            ? cloneElement(filtersProp, {
                resource: resource,
                showFilter: showFilter,
                displayedFilters: displayedFilters,
                filterValues: filterValues,
                context: 'button',
            })
            : filters && React.createElement(FilterButton, null),
        hasCreate && React.createElement(CreateButton, null),
        exporter !== false && (React.createElement(ExportButton, { disabled: total === 0, resource: resource, sort: sort, filterValues: filterValues })))); }, 
    /* eslint-disable react-hooks/exhaustive-deps */
    [
        resource,
        displayedFilters,
        filterValues,
        filtersProp,
        showFilter,
        filters,
        total,
        className,
        sort,
        exporter,
        hasCreate,
    ]);
};
ListActions.propTypes = {
    className: PropTypes.string,
    sort: PropTypes.any,
    displayedFilters: PropTypes.object,
    exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    filters: PropTypes.element,
    filterValues: PropTypes.object,
    hasCreate: PropTypes.bool,
    resource: PropTypes.string,
    onUnselectItems: PropTypes.func.isRequired,
    selectedIds: PropTypes.arrayOf(PropTypes.any),
    showFilter: PropTypes.func,
    total: PropTypes.number,
};
ListActions.defaultProps = {
    selectedIds: [],
    onUnselectItems: function () { return null; },
};
//# sourceMappingURL=ListActions.js.map