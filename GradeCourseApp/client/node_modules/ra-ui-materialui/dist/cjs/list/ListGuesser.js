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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGuesser = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var inflection_1 = __importDefault(require("inflection"));
var ra_core_1 = require("ra-core");
var ListView_1 = require("./ListView");
var listFieldTypes_1 = require("./listFieldTypes");
/**
 * List component rendering a <Datagrid> based on the result of the
 * dataProvider.getList() call.
 *
 * The result (choice and type of columns) isn't configurable, but the
 * <ListGuesser> outputs the <Datagrid> it has guessed to the console so that
 * developers can start from there.
 *
 * To be used as the list prop of a <Resource>.
 *
 * @example
 *
 * import { Admin, Resource, ListGuesser } from 'react-admin';
 *
 * const App = () => (
 *     <Admin dataProvider={myDataProvider}>
 *         <Resource name="posts" list={ListGuesser} />
 *     </Admin>
 * );
 */
var ListGuesser = function (props) {
    var debounce = props.debounce, disableAuthentication = props.disableAuthentication, disableSyncWithLocation = props.disableSyncWithLocation, exporter = props.exporter, filter = props.filter, filterDefaultValues = props.filterDefaultValues, perPage = props.perPage, queryOptions = props.queryOptions, resource = props.resource, sort = props.sort, rest = __rest(props, ["debounce", "disableAuthentication", "disableSyncWithLocation", "exporter", "filter", "filterDefaultValues", "perPage", "queryOptions", "resource", "sort"]);
    return (React.createElement(ra_core_1.ListBase, { debounce: debounce, disableAuthentication: disableAuthentication, disableSyncWithLocation: disableSyncWithLocation, exporter: exporter, filter: filter, filterDefaultValues: filterDefaultValues, perPage: perPage, queryOptions: { keepPreviousData: false }, resource: resource, sort: sort },
        React.createElement(ListViewGuesser, __assign({}, rest))));
};
exports.ListGuesser = ListGuesser;
var ListViewGuesser = function (props) {
    var data = (0, ra_core_1.useListContext)(props).data;
    var resource = (0, ra_core_1.useResourceContext)();
    var _a = (0, ra_core_1.useResourceDefinition)(props), hasEdit = _a.hasEdit, hasShow = _a.hasShow;
    var _b = (0, react_1.useState)(null), child = _b[0], setChild = _b[1];
    (0, react_1.useEffect)(function () {
        setChild(null);
    }, [resource]);
    (0, react_1.useEffect)(function () {
        if (data && data.length > 0 && !child) {
            var inferredElements = (0, ra_core_1.getElementsFromRecords)(data, listFieldTypes_1.listFieldTypes);
            var inferredChild = new ra_core_1.InferredElement(listFieldTypes_1.listFieldTypes.table, { hasEdit: hasEdit, hasShow: hasShow }, inferredElements);
            setChild(inferredChild.getElement());
            if (process.env.NODE_ENV === 'production')
                return;
            var representation = inferredChild.getRepresentation();
            var components = ['List']
                .concat(Array.from(new Set(Array.from(representation.matchAll(/<([^/\s>]+)/g))
                .map(function (match) { return match[1]; })
                .filter(function (component) { return component !== 'span'; }))))
                .sort();
            // eslint-disable-next-line no-console
            console.log("Guessed List:\n\nimport { ".concat(components.join(', '), " } from 'react-admin';\n\nexport const ").concat(inflection_1.default.capitalize(inflection_1.default.singularize(resource)), "List = () => (\n    <List>\n").concat(inferredChild.getRepresentation(), "\n    </List>\n);"));
        }
    }, [data, child, resource, hasEdit, hasShow]);
    return React.createElement(ListView_1.ListView, __assign({}, props), child);
};
ListViewGuesser.propTypes = ListView_1.ListView.propTypes;
//# sourceMappingURL=ListGuesser.js.map