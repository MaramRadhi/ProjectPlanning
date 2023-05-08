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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReferenceArrayFieldController = void 0;
var get_1 = __importDefault(require("lodash/get"));
var react_1 = require("react");
var dataProvider_1 = require("../../dataProvider");
var list_1 = require("../list");
var notification_1 = require("../../notification");
var emptyArray = [];
var defaultFilter = {};
var defaultSort = { field: null, order: null };
/**
 * Hook that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * @example
 *
 * const { data, error, isFetching, isLoading } = useReferenceArrayFieldController({
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @returns {ListControllerResult} The reference props
 */
var useReferenceArrayFieldController = function (props) {
    var _a = props.filter, filter = _a === void 0 ? defaultFilter : _a, _b = props.page, page = _b === void 0 ? 1 : _b, _c = props.perPage, perPage = _c === void 0 ? 1000 : _c, record = props.record, reference = props.reference, _d = props.sort, sort = _d === void 0 ? defaultSort : _d, source = props.source;
    var notify = (0, notification_1.useNotify)();
    var value = (0, get_1.default)(record, source);
    var ids = (0, react_1.useMemo)(function () {
        if (Array.isArray(value))
            return value;
        console.warn("Value of field '".concat(source, "' is not an array."), value);
        return emptyArray;
    }, [value, source]);
    var _e = (0, dataProvider_1.useGetManyAggregate)(reference, { ids: ids }, {
        onError: function (error) {
            return notify(typeof error === 'string'
                ? error
                : error.message || 'ra.notification.http_error', {
                type: 'error',
                messageArgs: {
                    _: typeof error === 'string'
                        ? error
                        : error && error.message
                            ? error.message
                            : undefined,
                },
            });
        },
    }), data = _e.data, error = _e.error, isLoading = _e.isLoading, isFetching = _e.isFetching, refetch = _e.refetch;
    var listProps = (0, list_1.useList)({
        data: data,
        error: error,
        filter: filter,
        isFetching: isFetching,
        isLoading: isLoading,
        page: page,
        perPage: perPage,
        sort: sort,
    });
    return __assign(__assign({}, listProps), { defaultTitle: null, refetch: refetch, resource: reference });
};
exports.useReferenceArrayFieldController = useReferenceArrayFieldController;
//# sourceMappingURL=useReferenceArrayFieldController.js.map