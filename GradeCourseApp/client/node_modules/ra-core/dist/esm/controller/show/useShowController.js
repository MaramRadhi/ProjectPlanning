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
import { useParams } from 'react-router-dom';
import { useAuthenticated } from '../../auth';
import { useGetOne, useRefresh } from '../../dataProvider';
import { useTranslate } from '../../i18n';
import { useRedirect } from '../../routing';
import { useNotify } from '../../notification';
import { useResourceContext, useGetResourceLabel, useGetRecordRepresentation, } from '../../core';
/**
 * Prepare data for the Show view.
 *
 * useShowController does a few things:
 * - it grabs the id from the URL and the resource name from the ResourceContext,
 * - it fetches the record via useGetOne,
 * - it prepares the page title.
 *
 * @param {Object} props The props passed to the Show component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Show view
 *
 * @example
 *
 * import { useShowController } from 'react-admin';
 * import ShowView from './ShowView';
 *
 * const MyShow = () => {
 *     const controllerProps = useShowController();
 *     return <ShowView {...controllerProps} />;
 * };
 *
 * @example // useShowController can also take its parameters from props
 *
 * import { useShowController } from 'react-admin';
 * import ShowView from './ShowView';
 *
 * const MyShow = () => {
 *     const controllerProps = useShowController({ resource: 'posts', id: 1234 });
 *     return <ShowView {...controllerProps} />;
 * };
 */
export var useShowController = function (props) {
    if (props === void 0) { props = {}; }
    var disableAuthentication = props.disableAuthentication, propsId = props.id, _a = props.queryOptions, queryOptions = _a === void 0 ? {} : _a;
    useAuthenticated({ enabled: !disableAuthentication });
    var resource = useResourceContext(props);
    var getRecordRepresentation = useGetRecordRepresentation(resource);
    var translate = useTranslate();
    var notify = useNotify();
    var redirect = useRedirect();
    var refresh = useRefresh();
    var routeId = useParams().id;
    var id = propsId != null ? propsId : decodeURIComponent(routeId);
    var meta = queryOptions.meta, otherQueryOptions = __rest(queryOptions, ["meta"]);
    var _b = useGetOne(resource, { id: id, meta: meta }, __assign({ onError: function () {
            notify('ra.notification.item_doesnt_exist', {
                type: 'error',
            });
            redirect('list', resource);
            refresh();
        }, retry: false }, otherQueryOptions)), record = _b.data, error = _b.error, isLoading = _b.isLoading, isFetching = _b.isFetching, refetch = _b.refetch;
    // eslint-disable-next-line eqeqeq
    if (record && record.id && record.id != id) {
        throw new Error("useShowController: Fetched record's id attribute (".concat(record.id, ") must match the requested 'id' (").concat(id, ")"));
    }
    var getResourceLabel = useGetResourceLabel();
    var recordRepresentation = getRecordRepresentation(record);
    var defaultTitle = translate('ra.page.show', {
        name: getResourceLabel(resource, 1),
        id: id,
        record: record,
        recordRepresentation: typeof recordRepresentation === 'string'
            ? recordRepresentation
            : '',
    });
    return {
        defaultTitle: defaultTitle,
        error: error,
        isLoading: isLoading,
        isFetching: isFetching,
        record: record,
        refetch: refetch,
        resource: resource,
    };
};
//# sourceMappingURL=useShowController.js.map