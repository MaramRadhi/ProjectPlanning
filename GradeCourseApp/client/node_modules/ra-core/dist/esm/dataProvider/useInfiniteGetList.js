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
import { useInfiniteQuery, useQueryClient, } from 'react-query';
import { useDataProvider } from './useDataProvider';
/**
 * Call the dataProvider.getList() method and return the resolved result
 * as well as the loading state. The return from useInfiniteGetList is equivalent to the return from react-hook form useInfiniteQuery.
 *
 * @see https://react-query-v3.tanstack.com/reference/useInfiniteQuery
 *
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Params} params The getList parameters { pagination, sort, filter, meta }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { fetchNextPage(); } }
 *
 * @typedef Params
 * @prop params.pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @prop params.sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @prop params.filter The request filters, e.g. { title: 'hello, world' }
 * @prop params.meta Optional meta parameters
 *
 * @returns The current request state. Destructure as { data, total, error, isLoading, isSuccess, hasNextPage, fetchNextPage }.
 *
 * @example
 *
 * import { useInfinteGetList } from 'react-admin';
 *
 * const LatestNews = () => {
 *     const { data, total, isLoading, error, hasNextPage, fetchNextPage } = useInfiniteGetList(
 *         'posts',
 *         { pagination: { page: 1, perPage: 10 }, sort: { field: 'published_at', order: 'DESC' } }
 *     );
 *     if (isLoading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return (
 *        <>
 *            <ul>
 *                {data?.pages.map(page => {
 *                    return page.data.map(post => (
 *                        <li key={post.id}>{post.title}</li>
 *                    ));
 *                })}
 *            </ul>
 *            <div>
 *                <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
 *                    Fetch next page
 *                </button>
 *            </div>
 *        </>
 *    );
 * };
 */
export var useInfiniteGetList = function (resource, params, options) {
    var _a, _b;
    if (params === void 0) { params = {}; }
    var _c = params.pagination, pagination = _c === void 0 ? { page: 1, perPage: 25 } : _c, _d = params.sort, sort = _d === void 0 ? { field: 'id', order: 'DESC' } : _d, _e = params.filter, filter = _e === void 0 ? {} : _e, meta = params.meta;
    var dataProvider = useDataProvider();
    var queryClient = useQueryClient();
    var result = useInfiniteQuery([resource, 'getList', { pagination: pagination, sort: sort, filter: filter, meta: meta }], function (_a) {
        var _b = _a.pageParam, pageParam = _b === void 0 ? pagination.page : _b;
        return dataProvider
            .getList(resource, {
            pagination: {
                page: pageParam,
                perPage: pagination.perPage,
            },
            sort: sort,
            filter: filter,
            meta: meta,
        })
            .then(function (_a) {
            var data = _a.data, pageInfo = _a.pageInfo, total = _a.total;
            return ({
                data: data,
                total: total,
                pageParam: pageParam,
                pageInfo: pageInfo,
            });
        });
    }, __assign(__assign({ onSuccess: function (data) {
            // optimistically populate the getOne cache
            data.pages.forEach(function (page) {
                page.data.forEach(function (record) {
                    queryClient.setQueryData([
                        resource,
                        'getOne',
                        { id: String(record.id), meta: meta },
                    ], function (oldRecord) { return oldRecord !== null && oldRecord !== void 0 ? oldRecord : record; });
                });
            });
        } }, options), { getNextPageParam: function (lastLoadedPage) {
            if (lastLoadedPage.pageInfo) {
                return lastLoadedPage.pageInfo.hasNextPage
                    ? lastLoadedPage.pageParam + 1
                    : undefined;
            }
            var totalPages = Math.ceil((lastLoadedPage.total || 0) / pagination.perPage);
            return lastLoadedPage.pageParam < totalPages
                ? Number(lastLoadedPage.pageParam) + 1
                : undefined;
        }, getPreviousPageParam: function (lastLoadedPage) {
            if (lastLoadedPage.pageInfo) {
                return lastLoadedPage.pageInfo.hasPreviousPage
                    ? lastLoadedPage.pageParam - 1
                    : undefined;
            }
            return lastLoadedPage.pageParam === 1
                ? undefined
                : lastLoadedPage.pageParam - 1;
        } }));
    return (result.data
        ? __assign(__assign({}, result), { data: result.data, total: ((_b = (_a = result.data) === null || _a === void 0 ? void 0 : _a.pages[0]) === null || _b === void 0 ? void 0 : _b.total) || 0 }) : result);
};
//# sourceMappingURL=useInfiniteGetList.js.map