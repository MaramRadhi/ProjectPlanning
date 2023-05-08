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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeListRestProps = exports.getListControllerProps = exports.injectedProps = exports.useListController = void 0;
var react_1 = require("react");
var auth_1 = require("../../auth");
var i18n_1 = require("../../i18n");
var notification_1 = require("../../notification");
var dataProvider_1 = require("../../dataProvider");
var queryReducer_1 = require("./queryReducer");
var export_1 = require("../../export");
var core_1 = require("../../core");
var useRecordSelection_1 = require("./useRecordSelection");
var useListParams_1 = require("./useListParams");
/**
 * Prepare data for the List view
 *
 * @param {Object} props The props passed to the List component.
 *
 * @return {Object} controllerProps Fetched and computed data for the List view
 *
 * @example
 *
 * import { useListController } from 'react-admin';
 * import ListView from './ListView';
 *
 * const MyList = props => {
 *     const controllerProps = useListController(props);
 *     return <ListView {...controllerProps} {...props} />;
 * }
 */
var useListController = function (props) {
    if (props === void 0) { props = {}; }
    var _a = props.debounce, debounce = _a === void 0 ? 500 : _a, disableAuthentication = props.disableAuthentication, disableSyncWithLocation = props.disableSyncWithLocation, _b = props.exporter, exporter = _b === void 0 ? export_1.defaultExporter : _b, filter = props.filter, filterDefaultValues = props.filterDefaultValues, _c = props.perPage, perPage = _c === void 0 ? 10 : _c, _d = props.queryOptions, queryOptions = _d === void 0 ? {} : _d, _e = props.sort, sort = _e === void 0 ? defaultSort : _e, storeKey = props.storeKey;
    (0, auth_1.useAuthenticated)({ enabled: !disableAuthentication });
    var resource = (0, core_1.useResourceContext)(props);
    var meta = queryOptions.meta, otherQueryOptions = __rest(queryOptions, ["meta"]);
    if (!resource) {
        throw new Error("<List> was called outside of a ResourceContext and without a resource prop. You must set the resource prop.");
    }
    if (filter && (0, react_1.isValidElement)(filter)) {
        throw new Error('<List> received a React element as `filter` props. If you intended to set the list filter elements, use the `filters` (with an s) prop instead. The `filter` prop is internal and should not be set by the developer.');
    }
    var translate = (0, i18n_1.useTranslate)();
    var notify = (0, notification_1.useNotify)();
    var _f = (0, useListParams_1.useListParams)({
        debounce: debounce,
        disableSyncWithLocation: disableSyncWithLocation,
        filterDefaultValues: filterDefaultValues,
        perPage: perPage,
        resource: resource,
        sort: sort,
        storeKey: storeKey,
    }), query = _f[0], queryModifiers = _f[1];
    var _g = (0, useRecordSelection_1.useRecordSelection)(resource), selectedIds = _g[0], selectionModifiers = _g[1];
    var _h = (0, dataProvider_1.useGetList)(resource, {
        pagination: {
            page: query.page,
            perPage: query.perPage,
        },
        sort: { field: query.sort, order: query.order },
        filter: __assign(__assign({}, query.filter), filter),
        meta: meta,
    }, __assign({ keepPreviousData: true, retry: false, onError: function (error) {
            return notify((error === null || error === void 0 ? void 0 : error.message) || 'ra.notification.http_error', {
                type: 'error',
                messageArgs: {
                    _: error === null || error === void 0 ? void 0 : error.message,
                },
            });
        } }, otherQueryOptions)), data = _h.data, pageInfo = _h.pageInfo, total = _h.total, error = _h.error, isLoading = _h.isLoading, isFetching = _h.isFetching, refetch = _h.refetch;
    // change page if there is no data
    (0, react_1.useEffect)(function () {
        if (query.page <= 0 ||
            (!isFetching &&
                query.page > 1 &&
                (data == null || (data === null || data === void 0 ? void 0 : data.length) === 0))) {
            // Query for a page that doesn't exist, set page to 1
            queryModifiers.setPage(1);
            return;
        }
        if (total == null) {
            return;
        }
        var totalPages = Math.ceil(total / query.perPage) || 1;
        if (!isFetching && query.page > totalPages) {
            // Query for a page out of bounds, set page to the last existing page
            // It occurs when deleting the last element of the last page
            queryModifiers.setPage(totalPages);
        }
    }, [isFetching, query.page, query.perPage, data, queryModifiers, total]);
    var currentSort = (0, react_1.useMemo)(function () { return ({
        field: query.sort,
        order: query.order,
    }); }, [query.sort, query.order]);
    var getResourceLabel = (0, core_1.useGetResourceLabel)();
    var defaultTitle = translate('ra.page.list', {
        name: getResourceLabel(resource, 2),
    });
    return {
        sort: currentSort,
        data: data,
        defaultTitle: defaultTitle,
        displayedFilters: query.displayedFilters,
        error: error,
        exporter: exporter,
        filter: filter,
        filterValues: query.filterValues,
        hideFilter: queryModifiers.hideFilter,
        isFetching: isFetching,
        isLoading: isLoading,
        onSelect: selectionModifiers.select,
        onToggleItem: selectionModifiers.toggle,
        onUnselectItems: selectionModifiers.clearSelection,
        page: query.page,
        perPage: query.perPage,
        refetch: refetch,
        resource: resource,
        selectedIds: selectedIds,
        setFilters: queryModifiers.setFilters,
        setPage: queryModifiers.setPage,
        setPerPage: queryModifiers.setPerPage,
        setSort: queryModifiers.setSort,
        showFilter: queryModifiers.showFilter,
        total: total,
        hasNextPage: pageInfo
            ? pageInfo.hasNextPage
            : total != null
                ? query.page * query.perPage < total
                : undefined,
        hasPreviousPage: pageInfo ? pageInfo.hasPreviousPage : query.page > 1,
    };
};
exports.useListController = useListController;
var defaultSort = {
    field: 'id',
    order: queryReducer_1.SORT_ASC,
};
exports.injectedProps = [
    'sort',
    'data',
    'defaultTitle',
    'displayedFilters',
    'error',
    'exporter',
    'filterValues',
    'hideFilter',
    'isFetching',
    'isLoading',
    'onSelect',
    'onToggleItem',
    'onUnselectItems',
    'page',
    'perPage',
    'refetch',
    'refresh',
    'resource',
    'selectedIds',
    'setFilters',
    'setPage',
    'setPerPage',
    'setSort',
    'showFilter',
    'total',
    'totalPages',
];
/**
 * Select the props injected by the useListController hook
 * to be passed to the List children need
 * This is an implementation of pick()
 */
var getListControllerProps = function (props) {
    return exports.injectedProps.reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = props[key], _a)));
    }, {});
};
exports.getListControllerProps = getListControllerProps;
/**
 * Select the props not injected by the useListController hook
 * to be used inside the List children to sanitize props injected by List
 * This is an implementation of omit()
 */
var sanitizeListRestProps = function (props) {
    return Object.keys(props)
        .filter(function (propName) { return !exports.injectedProps.includes(propName); })
        .reduce(function (acc, key) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[key] = props[key], _a)));
    }, {});
};
exports.sanitizeListRestProps = sanitizeListRestProps;
//# sourceMappingURL=useListController.js.map