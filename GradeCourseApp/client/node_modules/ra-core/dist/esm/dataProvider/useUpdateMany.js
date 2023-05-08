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
 * Get a callback to call the dataProvider.updateMany() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The updateMany parameters { ids, data, meta }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 * May include a mutation mode (optimistic/pessimistic/undoable), e.g. { mutationMode: 'undoable' }
 *
 * @typedef Params
 * @prop params.ids The resource identifiers, e.g. [123, 456]
 * @prop params.data The updates to merge into the record, e.g. { views: 10 }
 * @prop params.meta Optional meta parameters
 *
 * @returns The current mutation state. Destructure as [updateMany, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [updateMany, { isLoading: false, isIdle: true }]
 * - start:   [updateMany, { isLoading: true }]
 * - success: [updateMany, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [updateMany, { error: [error from response], isLoading: false, isError: true }]
 *
 * The updateMany() function must be called with a resource and a parameter object: updateMany(resource, { ids, data, previousData }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the updateMany callback
 *
 * import { useUpdateMany, useListContext } from 'react-admin';
 *
 * const BulkResetViewsButton = () => {
 *     const { selectedIds } = useListContext();
 *     const [updateMany, { isLoading, error }] = useUpdateMany();
 *     const handleClick = () => {
 *         updateMany('posts', { ids: selectedIds, data: { views: 0 } });
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Reset views</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useUpdateMany, useListContext } from 'react-admin';
 *
 * const BulkResetViewsButton = () => {
 *     const { selectedIds } = useListContext();
 *     const [updateMany, { isLoading, error }] = useUpdateMany('posts', { ids: selectedIds, data: { views: 0 } });
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={() => updateMany()}>Reset views</button>;
 * };
 */
export var useUpdateMany = function (resource, params, options) {
    if (params === void 0) { params = {}; }
    if (options === void 0) { options = {}; }
    var dataProvider = useDataProvider();
    var queryClient = useQueryClient();
    var ids = params.ids, data = params.data, meta = params.meta;
    var _a = options.mutationMode, mutationMode = _a === void 0 ? 'pessimistic' : _a, reactMutationOptions = __rest(options, ["mutationMode"]);
    var mode = useRef(mutationMode);
    var paramsRef = useRef(params);
    var snapshot = useRef([]);
    var updateCache = function (_a) {
        var resource = _a.resource, ids = _a.ids, data = _a.data, meta = _a.meta;
        return __awaiter(void 0, void 0, void 0, function () {
            var updatedAt, updateColl;
            return __generator(this, function (_b) {
                updatedAt = mode.current === 'undoable' ? Date.now() + 1000 * 5 : Date.now();
                updateColl = function (old) {
                    if (!old)
                        return;
                    var newCollection = __spreadArray([], old, true);
                    ids.forEach(function (id) {
                        // eslint-disable-next-line eqeqeq
                        var index = old.findIndex(function (record) { return record.id == id; });
                        if (index === -1) {
                            return;
                        }
                        newCollection = __spreadArray(__spreadArray(__spreadArray([], newCollection.slice(0, index), true), [
                            __assign(__assign({}, newCollection[index]), data)
                        ], false), newCollection.slice(index + 1), true);
                    });
                    return newCollection;
                };
                ids.forEach(function (id) {
                    return queryClient.setQueryData([resource, 'getOne', { id: String(id), meta: meta }], function (record) { return (__assign(__assign({}, record), data)); }, { updatedAt: updatedAt });
                });
                queryClient.setQueriesData([resource, 'getList'], function (res) {
                    return res && res.data ? __assign(__assign({}, res), { data: updateColl(res.data) }) : res;
                }, { updatedAt: updatedAt });
                queryClient.setQueriesData([resource, 'getMany'], function (coll) {
                    return coll && coll.length > 0 ? updateColl(coll) : coll;
                }, { updatedAt: updatedAt });
                queryClient.setQueriesData([resource, 'getManyReference'], function (res) {
                    return res && res.data
                        ? { data: updateColl(res.data), total: res.total }
                        : res;
                }, { updatedAt: updatedAt });
                return [2 /*return*/];
            });
        });
    };
    var mutation = useMutation(function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.resource, callTimeResource = _c === void 0 ? resource : _c, _d = _b.ids, callTimeIds = _d === void 0 ? paramsRef.current.ids : _d, _e = _b.data, callTimeData = _e === void 0 ? paramsRef.current.data : _e, _f = _b.meta, callTimeMeta = _f === void 0 ? paramsRef.current.meta : _f;
        return dataProvider
            .updateMany(callTimeResource, {
            ids: callTimeIds,
            data: callTimeData,
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
                var _a = variables.resource, callTimeResource = _a === void 0 ? resource : _a, _b = variables.ids, callTimeIds = _b === void 0 ? ids : _b, _c = variables.data, callTimeData = _c === void 0 ? data : _c, _d = variables.meta, callTimeMeta = _d === void 0 ? meta : _d;
                updateCache({
                    resource: callTimeResource,
                    ids: callTimeIds,
                    data: callTimeData,
                    meta: callTimeMeta,
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
    var updateMany = function (callTimeResource, callTimeParams, updateOptions) {
        if (callTimeResource === void 0) { callTimeResource = resource; }
        if (callTimeParams === void 0) { callTimeParams = {}; }
        if (updateOptions === void 0) { updateOptions = {}; }
        return __awaiter(void 0, void 0, void 0, function () {
            var mutationMode, returnPromise, onSuccess, onSettled, onError, _a, callTimeIds, _b, callTimeData, _c, callTimeMeta, queryKeys;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        mutationMode = updateOptions.mutationMode, returnPromise = updateOptions.returnPromise, onSuccess = updateOptions.onSuccess, onSettled = updateOptions.onSettled, onError = updateOptions.onError;
                        // store the hook time params *at the moment of the call*
                        // because they may change afterwards, which would break the undoable mode
                        // as the previousData would be overwritten by the optimistic update
                        paramsRef.current = params;
                        if (mutationMode) {
                            mode.current = mutationMode;
                        }
                        if (returnPromise && mode.current !== 'pessimistic') {
                            console.warn('The returnPromise parameter can only be used if the mutationMode is set to pessimistic');
                        }
                        if (mode.current === 'pessimistic') {
                            if (returnPromise) {
                                return [2 /*return*/, mutation.mutateAsync(__assign({ resource: callTimeResource }, callTimeParams), { onSuccess: onSuccess, onSettled: onSettled, onError: onError })];
                            }
                            return [2 /*return*/, mutation.mutate(__assign({ resource: callTimeResource }, callTimeParams), { onSuccess: onSuccess, onSettled: onSettled, onError: onError })];
                        }
                        _a = callTimeParams.ids, callTimeIds = _a === void 0 ? ids : _a, _b = callTimeParams.data, callTimeData = _b === void 0 ? data : _b, _c = callTimeParams.meta, callTimeMeta = _c === void 0 ? meta : _c;
                        queryKeys = [
                            [callTimeResource, 'getOne'],
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
                         *   [['posts', 'getOne', { id: '1' }], { id: 1, title: 'Hello' }],
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
                        _d.sent();
                        // Optimistically update to the new data
                        return [4 /*yield*/, updateCache({
                                resource: callTimeResource,
                                ids: callTimeIds,
                                data: callTimeData,
                                meta: callTimeMeta,
                            })];
                    case 2:
                        // Optimistically update to the new data
                        _d.sent();
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
    return [useEvent(updateMany), mutation];
};
//# sourceMappingURL=useUpdateMany.js.map