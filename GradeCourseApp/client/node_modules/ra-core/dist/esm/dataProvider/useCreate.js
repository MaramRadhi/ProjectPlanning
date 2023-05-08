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
import { useRef } from 'react';
import { useMutation, useQueryClient, } from 'react-query';
import { useDataProvider } from './useDataProvider';
import { useEvent } from '../util';
/**
 * Get a callback to call the dataProvider.create() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The create parameters { data }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 *
 * @typedef Params
 * @prop params.data The record to create, e.g. { title: 'hello, world' }
 *
 * @returns The current mutation state. Destructure as [create, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [create, { isLoading: false, isIdle: true }]
 * - start:   [create, { isLoading: true }]
 * - success: [create, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [create, { error: [error from response], isLoading: false, isError: true }]
 *
 * The create() function must be called with a resource and a parameter object: create(resource, { data, meta }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the create callback
 *
 * import { useCreate, useRecordContext } from 'react-admin';
 *
 * const LikeButton = () => {
 *     const record = useRecordContext();
 *     const like = { postId: record.id };
 *     const [create, { isLoading, error }] = useCreate();
 *     const handleClick = () => {
 *         create('likes', { data: like })
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Like</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useCreate, useRecordContext } from 'react-admin';
 *
 * const LikeButton = () => {
 *     const record = useRecordContext();
 *     const like = { postId: record.id };
 *     const [create, { isLoading, error }] = useCreate('likes', { data: like });
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={() => create()}>Like</button>;
 * };
 *
 * @example // TypeScript
 * const [create, { data }] = useCreate<Product>('products', { data: product });
 *                    \-- data is Product
 */
export var useCreate = function (resource, params, options) {
    if (params === void 0) { params = {}; }
    if (options === void 0) { options = {}; }
    var dataProvider = useDataProvider();
    var queryClient = useQueryClient();
    var paramsRef = useRef(params);
    var mutation = useMutation(function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.resource, callTimeResource = _c === void 0 ? resource : _c, _d = _b.data, callTimeData = _d === void 0 ? paramsRef.current.data : _d, _e = _b.meta, callTimeMeta = _e === void 0 ? paramsRef.current.meta : _e;
        return dataProvider
            .create(callTimeResource, {
            data: callTimeData,
            meta: callTimeMeta,
        })
            .then(function (_a) {
            var data = _a.data;
            return data;
        });
    }, __assign(__assign({}, options), { onSuccess: function (data, variables, context) {
            if (variables === void 0) { variables = {}; }
            var _a = variables.resource, callTimeResource = _a === void 0 ? resource : _a;
            queryClient.setQueryData([callTimeResource, 'getOne', { id: String(data.id) }], data);
            if (options.onSuccess) {
                options.onSuccess(data, variables, context);
            }
            // call-time success callback is executed by react-query
        } }));
    var create = function (callTimeResource, callTimeParams, createOptions) {
        if (callTimeResource === void 0) { callTimeResource = resource; }
        if (callTimeParams === void 0) { callTimeParams = {}; }
        if (createOptions === void 0) { createOptions = {}; }
        var _a = createOptions.returnPromise, returnPromise = _a === void 0 ? options.returnPromise : _a, reactCreateOptions = __rest(createOptions, ["returnPromise"]);
        if (returnPromise) {
            return mutation.mutateAsync(__assign({ resource: callTimeResource }, callTimeParams), createOptions);
        }
        mutation.mutate(__assign({ resource: callTimeResource }, callTimeParams), reactCreateOptions);
    };
    return [useEvent(create), mutation];
};
//# sourceMappingURL=useCreate.js.map