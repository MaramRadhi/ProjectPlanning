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
import { useEffect, useState } from 'react';
import inflection from 'inflection';
import { EditBase, InferredElement, useResourceContext, useEditContext, getElementsFromRecords, } from 'ra-core';
import { EditView } from './EditView';
import { editFieldTypes } from './editFieldTypes';
export var EditGuesser = function (props) {
    var resource = props.resource, id = props.id, mutationMode = props.mutationMode, mutationOptions = props.mutationOptions, queryOptions = props.queryOptions, redirect = props.redirect, transform = props.transform, disableAuthentication = props.disableAuthentication, rest = __rest(props, ["resource", "id", "mutationMode", "mutationOptions", "queryOptions", "redirect", "transform", "disableAuthentication"]);
    return (React.createElement(EditBase, { resource: resource, id: id, mutationMode: mutationMode, mutationOptions: mutationOptions, queryOptions: queryOptions, redirect: redirect, transform: transform, disableAuthentication: disableAuthentication },
        React.createElement(EditViewGuesser, __assign({}, rest))));
};
var EditViewGuesser = function (props) {
    var resource = useResourceContext(props);
    var record = useEditContext().record;
    var _a = useState(null), child = _a[0], setChild = _a[1];
    useEffect(function () {
        setChild(null);
    }, [resource]);
    useEffect(function () {
        if (record && !child) {
            var inferredElements = getElementsFromRecords([record], editFieldTypes);
            var inferredChild = new InferredElement(editFieldTypes.form, null, inferredElements);
            setChild(inferredChild.getElement());
            if (process.env.NODE_ENV === 'production')
                return;
            var representation = inferredChild.getRepresentation();
            var components = ['Edit']
                .concat(Array.from(new Set(Array.from(representation.matchAll(/<([^/\s>]+)/g))
                .map(function (match) { return match[1]; })
                .filter(function (component) { return component !== 'span'; }))))
                .sort();
            // eslint-disable-next-line no-console
            console.log("Guessed Edit:\n\nimport { ".concat(components.join(', '), " } from 'react-admin';\n\nexport const ").concat(inflection.capitalize(inflection.singularize(resource)), "Edit = () => (\n    <Edit>\n").concat(representation, "\n    </Edit>\n);"));
        }
    }, [record, child, resource]);
    return React.createElement(EditView, __assign({}, props), child);
};
EditViewGuesser.propTypes = EditView.propTypes;
//# sourceMappingURL=EditGuesser.js.map