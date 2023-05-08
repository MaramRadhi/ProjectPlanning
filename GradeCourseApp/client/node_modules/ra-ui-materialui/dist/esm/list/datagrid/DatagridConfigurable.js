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
import { useResourceContext, usePreference, useStore, useTranslate, } from 'ra-core';
import { Configurable } from '../../preferences';
import { Datagrid } from './Datagrid';
import { DatagridEditor } from './DatagridEditor';
/**
 * A Datagrid that users can customize in configuration mode
 *
 * @example
 * import {
 *     List,
 *     DatagridConfigurable,
 *     TextField,
 * } from 'react-admin';
 *
 * export const PostList = () => (
 *     <List>
 *         <DatagridConfigurable>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <TextField source="author" />
 *             <TextField source="year" />
 *         </DatagridConfigurable>
 *     </List>
 * );
 */
export var DatagridConfigurable = function (_a) {
    var preferenceKey = _a.preferenceKey, omit = _a.omit, props = __rest(_a, ["preferenceKey", "omit"]);
    if (props.optimized) {
        throw new Error('DatagridConfigurable does not support the optimized prop');
    }
    var translate = useTranslate();
    var resource = useResourceContext(props);
    var finalPreferenceKey = preferenceKey || "".concat(resource, ".datagrid");
    var _b = useStore("preferences.".concat(finalPreferenceKey, ".availableColumns"), []), availableColumns = _b[0], setAvailableColumns = _b[1];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    var _c = useStore("preferences.".concat(finalPreferenceKey, ".omit"), omit), _ = _c[0], setOmit = _c[1];
    React.useEffect(function () {
        // first render, or the preference have been cleared
        var columns = React.Children.map(props.children, function (child, index) {
            return React.isValidElement(child)
                ? {
                    index: String(index),
                    source: child.props.source,
                    label: child.props.source || child.props.label
                        ? child.props.label
                        : translate('ra.configurable.Datagrid.unlabeled', {
                            column: index,
                            _: "Unlabeled column #%{column}",
                        }),
                }
                : null;
        }).filter(function (column) { return column != null; });
        if (columns.length !== availableColumns.length) {
            setAvailableColumns(columns);
            setOmit(omit);
        }
    }, [availableColumns]); // eslint-disable-line react-hooks/exhaustive-deps
    return (React.createElement(Configurable, { editor: React.createElement(DatagridEditor, null), preferenceKey: finalPreferenceKey, sx: { display: 'block', minHeight: 2 } },
        React.createElement(DatagridWithPreferences, __assign({}, props))));
};
DatagridConfigurable.propTypes = Datagrid.propTypes;
/**
 * This Datagrid filters its children depending on preferences
 */
var DatagridWithPreferences = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    var availableColumns = usePreference('availableColumns', [])[0];
    var omit = usePreference('omit', [])[0];
    var columns = usePreference('columns', availableColumns
        .filter(function (column) { return !(omit === null || omit === void 0 ? void 0 : omit.includes(column.source)); })
        .map(function (column) { return column.index; }))[0];
    var childrenArray = React.Children.toArray(children);
    return (React.createElement(Datagrid, __assign({}, props), columns === undefined
        ? children
        : columns.map(function (index) { return childrenArray[index]; })));
};
//# sourceMappingURL=DatagridConfigurable.js.map