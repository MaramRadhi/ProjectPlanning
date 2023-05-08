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
import * as React from 'react';
import { useState, useEffect } from 'react';
import inflection from 'inflection';
import { ListBase, getElementsFromRecords, InferredElement, useListContext, useResourceContext, useResourceDefinition, } from 'ra-core';
import { ListView } from './ListView';
import { listFieldTypes } from './listFieldTypes';
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
export var ListGuesser = function (props) {
    var debounce = props.debounce, disableAuthentication = props.disableAuthentication, disableSyncWithLocation = props.disableSyncWithLocation, exporter = props.exporter, filter = props.filter, filterDefaultValues = props.filterDefaultValues, perPage = props.perPage, queryOptions = props.queryOptions, resource = props.resource, sort = props.sort, rest = __rest(props, ["debounce", "disableAuthentication", "disableSyncWithLocation", "exporter", "filter", "filterDefaultValues", "perPage", "queryOptions", "resource", "sort"]);
    return (React.createElement(ListBase, { debounce: debounce, disableAuthentication: disableAuthentication, disableSyncWithLocation: disableSyncWithLocation, exporter: exporter, filter: filter, filterDefaultValues: filterDefaultValues, perPage: perPage, queryOptions: { keepPreviousData: false }, resource: resource, sort: sort },
        React.createElement(ListViewGuesser, __assign({}, rest))));
};
var ListViewGuesser = function (props) {
    var data = useListContext(props).data;
    var resource = useResourceContext();
    var _a = useResourceDefinition(props), hasEdit = _a.hasEdit, hasShow = _a.hasShow;
    var _b = useState(null), child = _b[0], setChild = _b[1];
    useEffect(function () {
        setChild(null);
    }, [resource]);
    useEffect(function () {
        if (data && data.length > 0 && !child) {
            var inferredElements = getElementsFromRecords(data, listFieldTypes);
            var inferredChild = new InferredElement(listFieldTypes.table, { hasEdit: hasEdit, hasShow: hasShow }, inferredElements);
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
            console.log("Guessed List:\n\nimport { ".concat(components.join(', '), " } from 'react-admin';\n\nexport const ").concat(inflection.capitalize(inflection.singularize(resource)), "List = () => (\n    <List>\n").concat(inferredChild.getRepresentation(), "\n    </List>\n);"));
        }
    }, [data, child, resource, hasEdit, hasShow]);
    return React.createElement(ListView, __assign({}, props), child);
};
ListViewGuesser.propTypes = ListView.propTypes;
//# sourceMappingURL=ListGuesser.js.map