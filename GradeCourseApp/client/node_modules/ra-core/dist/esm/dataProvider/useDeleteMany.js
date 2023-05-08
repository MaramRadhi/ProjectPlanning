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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useRef } from 'react';
import { useMutation, useQueryClient, } from 'react-query';
import { useDataProvider } from './useDataProvider';
import undoableEventEmitter from './undoableEventEmitter';
import { useEvent } from '../util';
/**
 * Get a callback to call the dataProvider.delete() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The delete parameters { ids }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 * May include a mutation mode (optimistic/pessimistic/undoable), e.g. { mutationMode: 'undoable' }
 *
 * @typedef Params
 * @prop params.ids The resource identifiers, e.g. [123, 456]
 *
 * @returns The current mutation state. Destructure as [deleteMany, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [deleteMany, { isLoading: false, isIdle: true }]
 * - start:   [deleteMany, { isLoading: true }]
 * - success: [deleteMany, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [deleteMany, { error: [error from response], isLoading: false, isError: true }]
 *
 * The deleteMany() function must be called with a resource and a parameter object: deleteMany(resource, { ids, meta }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the deleteMany callback
 *
 * import { useDeleteMany } from 'react-admin';
 *
 * const BulkDeletePostsButton = ({ selectedIds }) => {
 *     const [deleteMany, { isLoading, error }] = useDeleteMany();
 *     const handleClick = () => {
 *         deleteMany('posts', { ids: selectedIds })
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Delete selected posts</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useDeleteMany } from 'react-admin';
 *
 * const BulkDeletePostsButton = ({ selectedIds }) => {
 *     const [deleteMany, { isLoading, error }] = useDeleteMany('posts', { ids: selectedIds });
 *     const handleClick = () => {
 *         deleteMany()
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Delete selected posts</button>;
 * };
 *
 * @example // TypeScript
 * const [deleteMany, { data }] = useDeleteMany<Product>('products', { ids });
 *                        \-- data is Product
 */
export var useDeleteMany = function (resource, params, options) {
    if (params === void 0) { params = {}; }
    if (options === void 0) { options = {}; }
    var dataProvider = useDataProvider();
    var queryClient = useQueryClient();
    var ids = params.ids;
    var _a = options.mutationMode, mutationMode = _a === void 0 ? 'pessimistic' : _a, reactMutationOptions = __rest(options, ["mutationMode"]);
    var mode = useRef(mutationMode);
    var paramsRef = useRef({});
    var snapshot = useRef([]);
    var updateCache = function (_a) {
        var resource = _a.resource, ids = _a.ids;
        // hack: only way to tell react-query not to fetch this query for the next 5 seconds
        // because setQueryData doesn't accept a stale time option
        var now = Date.now();
        var updatedAt = mode.current === 'undoable' ? now + 5 * 1000 : now;
        var updateColl = function (old) {
            if (!old)
                return;
            var newCollection = __spreadArray([], old, true);
            ids.forEach(function (id) {
                var index = newCollection.findIndex(
                // eslint-disable-next-line eqeqeq
                function (record) { return record.id == id; });
                if (index === -1) {
                    return;
                }
                newCollection = __spreadArray(__spreadArray([], newCollection.slice(0, index), true), newCollection.slice(index + 1), true);
            });
            return newCollection;
        };
        queryClient.setQueriesData([resource, 'getList'], function (res) {
            if (!res || !res.data)
                return res;
            var newCollection = updateColl(res.data);
            var recordWasFound = newCollection.length < res.data.length;
            return recordWasFound
                ? {
                    data: newCollection,
                    total: res.total
                        ? res.total -
                            (res.data.length - newCollection.length)
                        : undefined,
                    pageInfo: res.pageInfo,
                }
                : res;
        }, { updatedAt: updatedAt });
        queryClient.setQueriesData([resource, 'getMany'], function (coll) {
            return coll && coll.length > 0 ? updateColl(coll) : coll;
        }, { updatedAt: updatedAt });
        queryClient.setQueriesData([resource, 'getManyReference'], function (res) {
            if (!res || !res.data)
                return res;
            var newCollection = updateColl(res.data);
            var recordWasFound = newCollection.length < res.data.length;
            return recordWasFound
                ? {
                    data: newCollection,
                    total: res.total -
                        (res.data.length - newCollection.length),
                }
                : res;
        }, { updatedAt: updatedAt });
    };
    var mutation = useMutation(function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.resource, callTimeResource = _c === void 0 ? resource : _c, _d = _b.ids, callTimeIds = _d === void 0 ? paramsRef.current.ids : _d, _e = _b.meta, callTimeMeta = _e === void 0 ? paramsRef.current.meta : _e;
        return dataProvider
            .deleteMany(callTimeResource, {
            ids: callTimeIds,
            meta: callTimeMeta,
        })
            .then(function (_a) {
            var data = _a.data;
            return data;
        });
    }, __assign(__assign({}, reactMutationOptions), { onMutate: function (variables) { return __awaiter(void 0, void 0, void 0, function () {
            var userContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reactMutationOptions.onMutate) return [3 /*break*/, 2];
                        return [4 /*yield*/, reactMutationOptions.onMutate(variables)];
                    case 1:
                        userContext = (_a.sent()) || {};
                        return [2 /*return*/, __assign({ snapshot: snapshot.current }, userContext)];
                    case 2: 
                    // Return a context object with the snapshot value
                    return [2 /*return*/, { snapshot: snapshot.current }];
                }
            });
        }); }, onError: function (error, variables, context) {
            if (variables === void 0) { variables = {}; }
            if (mode.current === 'optimistic' ||
                mode.current === 'undoable') {
                // If the mutation fails, use the context returned from onMutate to rollback
                context.snapshot.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    queryClient.setQueryData(key, value);
                });
            }
            if (reactMutationOptions.onError) {
                return reactMutationOptions.onError(error, variables, context);
            }
            // call-time error callback is executed by react-query
        }, onSuccess: function (data, variables, context) {
            if (variables === void 0) { variables = {}; }
            if (mode.current === 'pessimistic') {
                // update the getOne and getList query cache with the new result
                var _a = variables.resource, callTimeResource = _a === void 0 ? resource : _a, _b = variables.ids, callTimeIds = _b === void 0 ? ids : _b;
                updateCache({
                    resource: callTimeResource,
                    ids: callTimeIds,
                });
                if (reactMutationOptions.onSuccess) {
                    reactMutationOptions.onSuccess(data, variables, context);
                }
                // call-time success callback is executed by react-query
            }
        }, onSettled: function (data, error, variables, context) {
            if (variables === void 0) { variables = {}; }
            if (mode.current === 'optimistic' ||
                mode.current === 'undoable') {
                // Always refetch after error or success:
                context.snapshot.forEach(function (_a) {
                    var key = _a[0];
                    queryClient.invalidateQueries(key);
                });
            }
            if (reactMutationOptions.onSettled) {
                return reactMutationOptions.onSettled(data, error, variables, context);
            }
        } }));
    var mutate = function (callTimeResource, callTimeParams, updateOptions) {
        if (callTimeResource === void 0) { callTimeResource = resource; }
        if (callTimeParams === void 0) { callTimeParams = {}; }
        if (updateOptions === void 0) { updateOptions = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var mutationMode, onSuccess, onSettled, onError, _a, callTimeIds, queryKeys;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mutationMode = updateOptions.mutationMode, onSuccess = updateOptions.onSuccess, onSettled = updateOptions.onSettled, onError = updateOptions.onError;
                        // store the hook time params *at the moment of the call*
                        // because they may change afterwards, which would break the undoable mode
                        // as the previousData would be overwritten by the optimistic update
                        paramsRef.current = params;
                        if (mutationMode) {
                            mode.current = mutationMode;
                        }
                        if (mode.current === 'pessimistic') {
                            return [2 /*return*/, mutation.mutate(__assign({ resource: callTimeResource }, callTimeParams), { onSuccess: onSuccess, onSettled: onSettled, onError: onError })];
                        }
                        _a = callTimeParams.ids, callTimeIds = _a === void 0 ? ids : _a;
                        queryKeys = [
                            [callTimeResource, 'getList'],
                            [callTimeResource, 'getMany'],
                            [callTimeResource, 'getManyReference'],
                        ];
                        /**
                         * Snapshot the previous values via queryClient.getQueriesData()
                         *
                         * The snapshotData ref will contain an array of tuples [query key, associated data]
                         *
                         * @example
                         * [
                         *   [['posts', 'getList'], { data: [{ id: 1, title: 'Hello' }], total: 1 }],
                         *   [['posts', 'getMany'], [{ id: 1, title: 'Hello' }]],
                         * ]
                         *
                         * @see https://react-query-v3.tanstack.com/reference/QueryClient#queryclientgetqueriesdata
                         */
                        snapshot.current = queryKeys.reduce(function (prev, curr) { return prev.concat(queryClient.getQueriesData(curr)); }, []);
                        // Cancel any outgoing re-fetches (so they don't overwrite our optimistic update)
                        return [4 /*yield*/, Promise.all(snapshot.current.map(function (_a) {
                                var key = _a[0];
                                return queryClient.cancelQueries(key);
                            }))];
                    case 1:
                        // Cancel any outgoing re-fetches (so they don't overwrite our optimistic update)
                        _b.sent();
                        // Optimistically update to the new value
                        updateCache({
                            resource: callTimeResource,
                            ids: callTimeIds,
                        });
                        // run the success callbacks during the next tick
                        if (onSuccess) {
                            setTimeout(function () {
                                return onSuccess(callTimeIds, __assign({ resource: callTimeResource }, callTimeParams), { snapshot: snapshot.current });
                            }, 0);
                        }
                        if (reactMutationOptions.onSuccess) {
                            setTimeout(function () {
                                return reactMutationOptions.onSuccess(callTimeIds, __assign({ resource: callTimeResource }, callTimeParams), { snapshot: snapshot.current });
                            }, 0);
                        }
                        if (mode.current === 'optimistic') {
                            // call the mutate method without success side effects
                            return [2 /*return*/, mutation.mutate(__assign({ resource: callTimeResource }, callTimeParams), { onSettled: onSettled, onError: onError })];
                        }
                        else {
                            // undoable mutation: register the mutation for later
                            undoableEventEmitter.once('end', function (_a) {
                                var isUndo = _a.isUndo;
                                if (isUndo) {
                                    // rollback
                                    snapshot.current.forEach(function (_a) {
                                        var key = _a[0], value = _a[1];
                                        queryClient.setQueryData(key, value);
                                    });
                                }
                                else {
                                    // call the mutate method without success side effects
                                    mutation.mutate(__assign({ resource: callTimeResource }, callTimeParams), { onSettled: onSettled, onError: onError });
                                }
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return [useEvent(mutate), mutation];
};
//# sourceMappingURL=useDeleteMany.js.map