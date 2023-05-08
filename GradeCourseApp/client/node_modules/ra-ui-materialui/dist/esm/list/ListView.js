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
import { styled } from '@mui/material/styles';
import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import clsx from 'clsx';
import { ComponentPropType, useListContext } from 'ra-core';
import { Title, TitlePropType } from '../layout/Title';
import { ListToolbar } from './ListToolbar';
import { Pagination as DefaultPagination } from './pagination';
import { ListActions as DefaultActions } from './ListActions';
import { Empty } from './Empty';
import { Error } from '../layout';
var defaultActions = React.createElement(DefaultActions, null);
var defaultPagination = React.createElement(DefaultPagination, null);
var defaultEmpty = React.createElement(Empty, null);
var DefaultComponent = Card;
export var ListView = function (props) {
    var _a = props.actions, actions = _a === void 0 ? defaultActions : _a, aside = props.aside, filters = props.filters, bulkActionButtons = props.bulkActionButtons, emptyWhileLoading = props.emptyWhileLoading, hasCreate = props.hasCreate, _b = props.pagination, pagination = _b === void 0 ? defaultPagination : _b, children = props.children, className = props.className, _c = props.component, Content = _c === void 0 ? DefaultComponent : _c, title = props.title, _d = props.empty, empty = _d === void 0 ? defaultEmpty : _d, rest = __rest(props, ["actions", "aside", "filters", "bulkActionButtons", "emptyWhileLoading", "hasCreate", "pagination", "children", "className", "component", "title", "empty"]);
    var _e = useListContext(props), defaultTitle = _e.defaultTitle, data = _e.data, error = _e.error, total = _e.total, isLoading = _e.isLoading, filterValues = _e.filterValues, resource = _e.resource;
    if (!children || (!data && isLoading && emptyWhileLoading)) {
        return null;
    }
    var renderList = function () { return (React.createElement("div", { className: ListClasses.main },
        (filters || actions) && (React.createElement(ListToolbar, { filters: filters, actions: actions, hasCreate: hasCreate })),
        React.createElement(Content, { className: ListClasses.content }, bulkActionButtons &&
            children &&
            React.isValidElement(children)
            ? // FIXME remove in 5.0
                cloneElement(children, {
                    bulkActionButtons: bulkActionButtons,
                })
            : children),
        error ? (React.createElement(Error, { error: error, resetErrorBoundary: null })) : (pagination !== false && pagination))); };
    var renderEmpty = function () {
        return empty !== false && cloneElement(empty, { hasCreate: hasCreate });
    };
    var shouldRenderEmptyPage = !isLoading &&
        total === 0 &&
        !Object.keys(filterValues).length &&
        empty !== false;
    return (React.createElement(Root, __assign({ className: clsx('list-page', className) }, rest),
        React.createElement(Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".list.title") }),
        shouldRenderEmptyPage ? renderEmpty() : renderList(),
        aside));
};
ListView.propTypes = {
    // @ts-ignore-line
    actions: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
    aside: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    component: ComponentPropType,
    // @ts-ignore-line
    sort: PropTypes.shape({
        field: PropTypes.string.isRequired,
        order: PropTypes.string.isRequired,
    }),
    data: PropTypes.any,
    defaultTitle: PropTypes.string,
    displayedFilters: PropTypes.object,
    emptyWhileLoading: PropTypes.bool,
    // @ts-ignore-line
    exporter: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    filterDefaultValues: PropTypes.object,
    filters: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    filterValues: PropTypes.object,
    hasCreate: PropTypes.bool,
    hideFilter: PropTypes.func,
    ids: PropTypes.array,
    loading: PropTypes.bool,
    onSelect: PropTypes.func,
    onToggleItem: PropTypes.func,
    onUnselectItems: PropTypes.func,
    page: PropTypes.number,
    // @ts-ignore-line
    pagination: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    perPage: PropTypes.number,
    refresh: PropTypes.func,
    resource: PropTypes.string,
    selectedIds: PropTypes.array,
    setFilters: PropTypes.func,
    setPage: PropTypes.func,
    setPerPage: PropTypes.func,
    setSort: PropTypes.func,
    showFilter: PropTypes.func,
    title: TitlePropType,
    total: PropTypes.number,
};
var PREFIX = 'RaList';
export var ListClasses = {
    main: "".concat(PREFIX, "-main"),
    content: "".concat(PREFIX, "-content"),
    actions: "".concat(PREFIX, "-actions"),
    noResults: "".concat(PREFIX, "-noResults"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {
            display: 'flex'
        },
        _b["& .".concat(ListClasses.main)] = {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
        },
        _b["& .".concat(ListClasses.content)] = (_c = {
                position: 'relative'
            },
            _c[theme.breakpoints.down('sm')] = {
                boxShadow: 'none',
            },
            _c.overflow = 'inherit',
            _c),
        _b["& .".concat(ListClasses.actions)] = {
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
        },
        _b["& .".concat(ListClasses.noResults)] = { padding: 20 },
        _b);
});
//# sourceMappingURL=ListView.js.map