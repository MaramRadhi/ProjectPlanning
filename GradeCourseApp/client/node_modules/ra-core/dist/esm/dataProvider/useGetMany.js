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
import { useQuery, useQueryClient, hashQueryKey, } from 'react-query';
import { useDataProvider } from './useDataProvider';
/**
 * Call the dataProvider.getMany() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { isLoading: true, refetch }
 * - success: { data: [data from store], isLoading: false, refetch }
 * - error: { error: [error from response], isLoading: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Params} params The getMany parameters { ids, meta }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 *
 * @typedef Params
 * @prop params.ids The ids to get, e.g. [123, 456, 789]
 * @prop params.meta Optional meta parameters
 *
 * @returns The current request state. Destructure as { data, error, isLoading, refetch }.
 *
 * @example
 *
 * import { useGetMany } from 'react-admin';
 *
 * const PostTags = ({ post }) => {
 *     const { data, isLoading, error } = useGetMany(
 *         'tags',
 *         { ids: post.tags },
 *     );
 *     if (isLoading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <ul>{data.map(tag =>
 *         <li key={tag.id}>{tag.name}</li>
 *     )}</ul>;
 * };
 */
export var useGetMany = function (resource, params, options) {
    if (params === void 0) { params = {}; }
    var ids = params.ids, meta = params.meta;
    var dataProvider = useDataProvider();
    var queryClient = useQueryClient();
    var queryCache = queryClient.getQueryCache();
    return useQuery([
        resource,
        'getMany',
        {
            ids: !ids || ids.length === 0 ? [] : ids.map(function (id) { return String(id); }),
            meta: meta,
        },
    ], function () {
        if (!ids || ids.length === 0) {
            // no need to call the dataProvider
            return Promise.resolve([]);
        }
        return dataProvider
            .getMany(resource, { ids: ids, meta: meta })
            .then(function (_a) {
            var data = _a.data;
            return data;
        });
    }, __assign({ placeholderData: function () {
            var records = !ids || ids.length === 0
                ? []
                : ids.map(function (id) {
                    var _a, _b;
                    var queryHash = hashQueryKey([
                        resource,
                        'getOne',
                        { id: String(id), meta: meta },
                    ]);
                    return (_b = (_a = queryCache.get(queryHash)) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.data;
                });
            if (records.some(function (record) { return record === undefined; })) {
                return undefined;
            }
            else {
                return records;
            }
        }, onSuccess: function (data) {
            // optimistically populate the getOne cache
            data.forEach(function (record) {
                queryClient.setQueryData([resource, 'getOne', { id: String(record.id), meta: meta }], function (oldRecord) { return oldRecord !== null && oldRecord !== void 0 ? oldRecord : record; });
            });
        }, retry: false }, options));
};
//# sourceMappingURL=useGetMany.js.map