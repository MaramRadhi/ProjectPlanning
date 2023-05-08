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
import React from 'react';
import { useReferenceManyFieldController, useRecordContext, useTimeout, useCreatePath, } from 'ra-core';
import { Typography, CircularProgress } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { sanitizeFieldRestProps } from './sanitizeFieldRestProps';
import { Link } from '../Link';
/**
 * Fetch and render the number of records related to the current one
 *
 * Relies on dataProvider.getManyReference() returning a total property
 *
 * @example // Display the number of comments for the current post
 * <ReferenceManyCount reference="comments" target="post_id">
 *
 * @example // Display the number of published comments for the current post
 * <ReferenceManyCount reference="comments" target="post_id" filter={{ is_published: true }}>
 *
 * @example // Display the number of comments for the current post, with a custom Typography variant
 * <ReferenceManyCount reference="comments" target="post_id" variant="h1">
 */
export var ReferenceManyCount = function (props) {
    var _a;
    var reference = props.reference, target = props.target, filter = props.filter, sort = props.sort, link = props.link, resource = props.resource, _b = props.source, source = _b === void 0 ? 'id' : _b, _c = props.timeout, timeout = _c === void 0 ? 1000 : _c, rest = __rest(props, ["reference", "target", "filter", "sort", "link", "resource", "source", "timeout"]);
    var record = useRecordContext(props);
    var oneSecondHasPassed = useTimeout(timeout);
    var createPath = useCreatePath();
    var _d = useReferenceManyFieldController({
        filter: filter,
        sort: sort,
        page: 1,
        perPage: 1,
        record: record,
        reference: reference,
        // @ts-ignore remove when #8491 is released
        resource: resource,
        source: source,
        target: target,
    }), isLoading = _d.isLoading, error = _d.error, total = _d.total;
    var body = isLoading ? (oneSecondHasPassed ? (React.createElement(CircularProgress, { size: 14 })) : ('')) : error ? (React.createElement(ErrorIcon, { color: "error", fontSize: "small", titleAccess: "error" })) : (total);
    return link ? (React.createElement(Link, __assign({ to: {
            pathname: createPath({ resource: reference, type: 'list' }),
            search: "filter=".concat(JSON.stringify(__assign(__assign({}, (filter || {})), (_a = {}, _a[target] = record[source], _a)))),
        }, variant: "body2", onClick: function (e) { return e.stopPropagation(); } }, sanitizeFieldRestProps(rest)), body)) : (React.createElement(Typography, __assign({ component: "span", variant: "body2" }, sanitizeFieldRestProps(rest)), body));
};
//# sourceMappingURL=ReferenceManyCount.js.map