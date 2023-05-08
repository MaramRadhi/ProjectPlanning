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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditController = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var auth_1 = require("../../auth");
var routing_1 = require("../../routing");
var notification_1 = require("../../notification");
var dataProvider_1 = require("../../dataProvider");
var i18n_1 = require("../../i18n");
var core_1 = require("../../core");
var saveContext_1 = require("../saveContext");
/**
 * Prepare data for the Edit view.
 *
 * useEditController does a few things:
 * - it grabs the id from the URL and the resource name from the ResourceContext,
 * - it fetches the record via useGetOne,
 * - it prepares the page title.
 *
 * @param {Object} props The props passed to the Edit component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Edit view
 *
 * @example
 *
 * import { useEditController } from 'react-admin';
 * import EditView from './EditView';
 *
 * const MyEdit = () => {
 *     const controllerProps = useEditController({ resource: 'posts', id: 123 });
 *     return <EditView {...controllerProps} {...props} />;
 * }
 */
var useEditController = function (props) {
    if (props === void 0) { props = {}; }
    var disableAuthentication = props.disableAuthentication, propsId = props.id, _a = props.mutationMode, mutationMode = _a === void 0 ? 'undoable' : _a, _b = props.mutationOptions, mutationOptions = _b === void 0 ? {} : _b, _c = props.queryOptions, queryOptions = _c === void 0 ? {} : _c, _d = props.redirect, redirectTo = _d === void 0 ? DefaultRedirect : _d, transform = props.transform;
    (0, auth_1.useAuthenticated)({ enabled: !disableAuthentication });
    var resource = (0, core_1.useResourceContext)(props);
    var getRecordRepresentation = (0, core_1.useGetRecordRepresentation)(resource);
    var translate = (0, i18n_1.useTranslate)();
    var notify = (0, notification_1.useNotify)();
    var redirect = (0, routing_1.useRedirect)();
    var refresh = (0, dataProvider_1.useRefresh)();
    var routeId = (0, react_router_dom_1.useParams)().id;
    var id = propsId != null ? propsId : decodeURIComponent(routeId);
    var queryMeta = queryOptions.meta, otherQueryOptions = __rest(queryOptions, ["meta"]);
    var onSuccess = mutationOptions.onSuccess, onError = mutationOptions.onError, mutationMeta = mutationOptions.meta, otherMutationOptions = __rest(mutationOptions, ["onSuccess", "onError", "meta"]);
    var _e = (0, saveContext_1.useMutationMiddlewares)(), registerMutationMiddleware = _e.registerMutationMiddleware, getMutateWithMiddlewares = _e.getMutateWithMiddlewares, unregisterMutationMiddleware = _e.unregisterMutationMiddleware;
    var _f = (0, dataProvider_1.useGetOne)(resource, { id: id, meta: queryMeta }, __assign({ onError: function () {
            notify('ra.notification.item_doesnt_exist', {
                type: 'error',
            });
            redirect('list', resource);
            refresh();
        }, refetchOnReconnect: false, refetchOnWindowFocus: false, retry: false }, otherQueryOptions)), record = _f.data, error = _f.error, isLoading = _f.isLoading, isFetching = _f.isFetching, refetch = _f.refetch;
    // eslint-disable-next-line eqeqeq
    if (record && record.id && record.id != id) {
        throw new Error("useEditController: Fetched record's id attribute (".concat(record.id, ") must match the requested 'id' (").concat(id, ")"));
    }
    var getResourceLabel = (0, core_1.useGetResourceLabel)();
    var recordRepresentation = getRecordRepresentation(record);
    var defaultTitle = translate('ra.page.edit', {
        name: getResourceLabel(resource, 1),
        id: id,
        record: record,
        recordRepresentation: typeof recordRepresentation === 'string'
            ? recordRepresentation
            : '',
    });
    var recordCached = { id: id, previousData: record };
    var _g = (0, dataProvider_1.useUpdate)(resource, recordCached, __assign(__assign({}, otherMutationOptions), { mutationMode: mutationMode, returnPromise: mutationMode === 'pessimistic' })), update = _g[0], saving = _g[1].isLoading;
    var save = (0, react_1.useCallback)(function (data, _a) {
        var _b = _a === void 0 ? {} : _a, onSuccessFromSave = _b.onSuccess, onErrorFromSave = _b.onError, transformFromSave = _b.transform;
        return Promise.resolve(transformFromSave
            ? transformFromSave(data, {
                previousData: recordCached.previousData,
            })
            : transform
                ? transform(data, {
                    previousData: recordCached.previousData,
                })
                : data).then(function (data) { return __awaiter(void 0, void 0, void 0, function () {
            var mutate, error_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mutate = getMutateWithMiddlewares(update);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, mutate(resource, { id: id, data: data, meta: mutationMeta }, {
                                onSuccess: function (data, variables, context) { return __awaiter(void 0, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        if (onSuccessFromSave) {
                                            return [2 /*return*/, onSuccessFromSave(data, variables, context)];
                                        }
                                        if (onSuccess) {
                                            return [2 /*return*/, onSuccess(data, variables, context)];
                                        }
                                        notify('ra.notification.updated', {
                                            type: 'info',
                                            messageArgs: { smart_count: 1 },
                                            undoable: mutationMode === 'undoable',
                                        });
                                        redirect(redirectTo, resource, data.id, data);
                                        return [2 /*return*/];
                                    });
                                }); },
                                onError: onErrorFromSave
                                    ? onErrorFromSave
                                    : onError
                                        ? onError
                                        : function (error) {
                                            notify(typeof error === 'string'
                                                ? error
                                                : error.message ||
                                                    'ra.notification.http_error', {
                                                type: 'error',
                                                messageArgs: {
                                                    _: typeof error === 'string'
                                                        ? error
                                                        : error &&
                                                            error.message
                                                            ? error.message
                                                            : undefined,
                                                },
                                            });
                                        },
                            })];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        if (((_a = error_1.body) === null || _a === void 0 ? void 0 : _a.errors) != null) {
                            return [2 /*return*/, error_1.body.errors];
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    }, [
        id,
        getMutateWithMiddlewares,
        mutationMeta,
        mutationMode,
        notify,
        onError,
        onSuccess,
        redirect,
        redirectTo,
        resource,
        transform,
        update,
        recordCached.previousData,
    ]);
    return {
        defaultTitle: defaultTitle,
        error: error,
        isFetching: isFetching,
        isLoading: isLoading,
        mutationMode: mutationMode,
        record: record,
        redirect: redirectTo,
        refetch: refetch,
        registerMutationMiddleware: registerMutationMiddleware,
        resource: resource,
        save: save,
        saving: saving,
        unregisterMutationMiddleware: unregisterMutationMiddleware,
    };
};
exports.useEditController = useEditController;
var DefaultRedirect = 'list';
//# sourceMappingURL=useEditController.js.map