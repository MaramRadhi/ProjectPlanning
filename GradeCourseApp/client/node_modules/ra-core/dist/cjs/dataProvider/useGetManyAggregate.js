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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetManyAggregate = void 0;
var react_1 = require("react");
var react_query_1 = require("react-query");
var union_1 = __importDefault(require("lodash/union"));
var useDataProvider_1 = require("./useDataProvider");
/**
 * Call the dataProvider.getMany() method and return the resolved result
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { isLoading: true, isFetching: true, refetch }
 * - success: { data: [data from response], isLoading: false, isFetching: false, refetch }
 * - error: { error: [error from response], isLoading: false, isFetching: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * This hook aggregates and deduplicates calls to the same resource, so for instance, if an app calls:
 *
 * useGetManyAggregate('tags', [1, 2, 3]);
 * useGetManyAggregate('tags', [3, 4]);
 *
 * during the same tick, the hook will only call the dataProvider once with the following parameters:
 *
 * dataProvider.getMany('tags', [1, 2, 3, 4])
 *
 * @param resource The resource name, e.g. 'posts'
 * @param {Params} params The getMany parameters { ids, meta }
 * @param {Object} options Options object to pass to the dataProvider.
 * @param {boolean} options.enabled Flag to conditionally run the query. If it's false, the query will not run
 * @param {Function} options.onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @param {Function} options.onError Side effect function to be executed upon failure, e.g. { onError: error => notify(error.message) }
 *
 * @typedef Params
 * @prop params.ids The ids to get, e.g. [123, 456, 789]
 * @prop params.meta Optional meta parameters

 * @returns The current request state. Destructure as { data, error, isLoading, isFetching, refetch }.
 *
 * @example
 *
 * import { useGetManyAggregate, useRecordContext } from 'react-admin';
 *
 * const PostTags = () => {
 *     const record = useRecordContext();
 *     const { data, isLoading, error } = useGetManyAggregate('tags', { ids: record.tagIds });
 *     if (isLoading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return (
 *          <ul>
 *              {data.map(tag => (
 *                  <li key={tag.id}>{tag.name}</li>
 *              ))}
 *          </ul>
 *      );
 * };
 */
var useGetManyAggregate = function (resource, params, options) {
    if (options === void 0) { options = {}; }
    var dataProvider = (0, useDataProvider_1.useDataProvider)();
    var queryClient = (0, react_query_1.useQueryClient)();
    var queryCache = queryClient.getQueryCache();
    var ids = params.ids, meta = params.meta;
    var placeholderData = (0, react_1.useMemo)(function () {
        var records = (Array.isArray(ids) ? ids : [ids]).map(function (id) {
            var _a, _b;
            var queryHash = (0, react_query_1.hashQueryKey)([
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
    }, [ids, queryCache, resource, meta]);
    return (0, react_query_1.useQuery)([
        resource,
        'getMany',
        {
            ids: (Array.isArray(ids) ? ids : [ids]).map(function (id) { return String(id); }),
            meta: meta,
        },
    ], function () {
        return new Promise(function (resolve, reject) {
            if (!ids || ids.length === 0) {
                // no need to call the dataProvider
                return resolve([]);
            }
            // debounced / batched fetch
            return callGetManyQueries({
                resource: resource,
                ids: ids,
                meta: meta,
                resolve: resolve,
                reject: reject,
                dataProvider: dataProvider,
                queryClient: queryClient,
            });
        });
    }, __assign({ placeholderData: placeholderData, onSuccess: function (data) {
            // optimistically populate the getOne cache
            (data !== null && data !== void 0 ? data : []).forEach(function (record) {
                queryClient.setQueryData([resource, 'getOne', { id: String(record.id), meta: meta }], function (oldRecord) { return oldRecord !== null && oldRecord !== void 0 ? oldRecord : record; });
            });
        }, retry: false }, options));
};
exports.useGetManyAggregate = useGetManyAggregate;
/**
 * Batch all calls to a function into one single call with the arguments of all the calls.
 *
 * @example
 * let sum = 0;
 * const add = (args) => { sum = args.reduce((arg, total) => total + arg, 0); };
 * const addBatched = batch(add);
 * addBatched(2);
 * addBatched(8);
 * // add will be called once with arguments [2, 8]
 * // and sum will be equal to 10
 */
var batch = function (fn) {
    var capturedArgs = [];
    var timeout = null;
    return function (arg) {
        capturedArgs.push(arg);
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            fn(__spreadArray([], capturedArgs, true));
            capturedArgs = [];
        }, 0);
    };
};
/**
 * Group and execute all calls to the dataProvider.getMany() method for the current tick
 *
 * Thanks to batch(), this function executes at most once per tick,
 * whatever the number of calls to useGetManyAggregate().
 */
var callGetManyQueries = batch(function (calls) {
    var dataProvider = calls[0].dataProvider;
    var queryClient = calls[0].queryClient;
    /**
     * Aggregate calls by resource
     *
     * callsByResource will look like:
     * {
     *     posts: [{ resource, ids, resolve, reject, dataProvider, queryClient }, ...],
     *     tags: [{ resource, ids, resolve, reject, dataProvider, queryClient }, ...],
     * }
     */
    var callsByResource = calls.reduce(function (acc, callArgs) {
        if (!acc[callArgs.resource]) {
            acc[callArgs.resource] = [];
        }
        acc[callArgs.resource].push(callArgs);
        return acc;
    }, {});
    /**
     * For each resource, aggregate ids and call dataProvider.getMany() once
     */
    Object.keys(callsByResource).forEach(function (resource) {
        var callsForResource = callsByResource[resource];
        /**
         * Extract ids from queries, aggregate and deduplicate them
         *
         * @example from [[1, 2], [2, null, 3], [4, null]] to [1, 2, 3, 4]
         */
        var aggregatedIds = callsForResource
            .reduce(function (acc, _a) {
            var ids = _a.ids;
            return (0, union_1.default)(acc, ids);
        }, []) // concat + unique
            .filter(function (v) { return v != null && v !== ''; }); // remove null values
        var uniqueMeta = callsForResource.reduce(function (acc, _a) {
            var meta = _a.meta;
            return meta || acc;
        }, undefined);
        if (aggregatedIds.length === 0) {
            // no need to call the data provider if all the ids are null
            callsForResource.forEach(function (_a) {
                var resolve = _a.resolve;
                resolve([]);
            });
            return;
        }
        var callThatHasAllAggregatedIds = callsForResource.find(function (_a) {
            var ids = _a.ids;
            return JSON.stringify(ids) === JSON.stringify(aggregatedIds);
        });
        if (callThatHasAllAggregatedIds) {
            // There is only one call (no aggregation), or one of the calls has the same ids as the sum of all calls.
            // Either way, we can't trigger a new fetchQuery with the same signature, as it's already pending.
            // Therefore, we reply with the dataProvider
            var dataProvider_1 = callThatHasAllAggregatedIds.dataProvider, resource_1 = callThatHasAllAggregatedIds.resource, ids = callThatHasAllAggregatedIds.ids, meta = callThatHasAllAggregatedIds.meta;
            dataProvider_1
                .getMany(resource_1, { ids: ids, meta: meta })
                .then(function (_a) {
                var data = _a.data;
                return data;
            })
                .then(function (data) {
                // We must then resolve all the pending calls with the data they requested
                callsForResource.forEach(function (_a) {
                    var ids = _a.ids, resolve = _a.resolve;
                    resolve(data.filter(function (record) {
                        return ids
                            .map(function (id) { return String(id); })
                            .includes(String(record.id));
                    }));
                });
            }, function (error) {
                // All pending calls must also receive the error
                callsForResource.forEach(function (_a) {
                    var reject = _a.reject;
                    reject(error);
                });
            });
            return;
        }
        /**
         * Call dataProvider.getMany() with the aggregatedIds,
         * and resolve each of the promises using the results
         */
        queryClient
            .fetchQuery([
            resource,
            'getMany',
            {
                ids: aggregatedIds.map(function (id) { return String(id); }),
                meta: uniqueMeta,
            },
        ], function () {
            return dataProvider
                .getMany(resource, {
                ids: aggregatedIds,
                meta: uniqueMeta,
            })
                .then(function (_a) {
                var data = _a.data;
                return data;
            });
        })
            .then(function (data) {
            callsForResource.forEach(function (_a) {
                var ids = _a.ids, resolve = _a.resolve;
                resolve(data.filter(function (record) {
                    return ids
                        .map(function (id) { return String(id); })
                        .includes(String(record.id));
                }));
            });
        })
            .catch(function (error) {
            return callsForResource.forEach(function (_a) {
                var reject = _a.reject;
                return reject(error);
            });
        });
    });
});
//# sourceMappingURL=useGetManyAggregate.js.map