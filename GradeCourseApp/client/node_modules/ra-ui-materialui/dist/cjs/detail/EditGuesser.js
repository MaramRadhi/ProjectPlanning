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
exports.EditGuesser = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var inflection_1 = __importDefault(require("inflection"));
var ra_core_1 = require("ra-core");
var EditView_1 = require("./EditView");
var editFieldTypes_1 = require("./editFieldTypes");
var EditGuesser = function (props) {
    var resource = props.resource, id = props.id, mutationMode = props.mutationMode, mutationOptions = props.mutationOptions, queryOptions = props.queryOptions, redirect = props.redirect, transform = props.transform, disableAuthentication = props.disableAuthentication, rest = __rest(props, ["resource", "id", "mutationMode", "mutationOptions", "queryOptions", "redirect", "transform", "disableAuthentication"]);
    return (React.createElement(ra_core_1.EditBase, { resource: resource, id: id, mutationMode: mutationMode, mutationOptions: mutationOptions, queryOptions: queryOptions, redirect: redirect, transform: transform, disableAuthentication: disableAuthentication },
        React.createElement(EditViewGuesser, __assign({}, rest))));
};
exports.EditGuesser = EditGuesser;
var EditViewGuesser = function (props) {
    var resource = (0, ra_core_1.useResourceContext)(props);
    var record = (0, ra_core_1.useEditContext)().record;
    var _a = (0, react_1.useState)(null), child = _a[0], setChild = _a[1];
    (0, react_1.useEffect)(function () {
        setChild(null);
    }, [resource]);
    (0, react_1.useEffect)(function () {
        if (record && !child) {
            var inferredElements = (0, ra_core_1.getElementsFromRecords)([record], editFieldTypes_1.editFieldTypes);
            var inferredChild = new ra_core_1.InferredElement(editFieldTypes_1.editFieldTypes.form, null, inferredElements);
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
            console.log("Guessed Edit:\n\nimport { ".concat(components.join(', '), " } from 'react-admin';\n\nexport const ").concat(inflection_1.default.capitalize(inflection_1.default.singularize(resource)), "Edit = () => (\n    <Edit>\n").concat(representation, "\n    </Edit>\n);"));
        }
    }, [record, child, resource]);
    return React.createElement(EditView_1.EditView, __assign({}, props), child);
};
EditViewGuesser.propTypes = EditView_1.EditView.propTypes;
//# sourceMappingURL=EditGuesser.js.map