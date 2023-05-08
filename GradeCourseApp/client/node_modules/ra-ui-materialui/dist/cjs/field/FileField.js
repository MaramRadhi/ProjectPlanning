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
exports.FileField = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var get_1 = __importDefault(require("lodash/get"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var ra_core_1 = require("ra-core");
var sanitizeFieldRestProps_1 = require("./sanitizeFieldRestProps");
var types_1 = require("./types");
var material_1 = require("@mui/material");
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from 'react-admin';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
var FileField = function (props) {
    var className = props.className, emptyText = props.emptyText, source = props.source, title = props.title, src = props.src, target = props.target, download = props.download, ping = props.ping, rel = props.rel, rest = __rest(props, ["className", "emptyText", "source", "title", "src", "target", "download", "ping", "rel"]);
    var record = (0, ra_core_1.useRecordContext)(props);
    var sourceValue = (0, get_1.default)(record, source);
    var translate = (0, ra_core_1.useTranslate)();
    if (!sourceValue) {
        return emptyText ? (React.createElement(Typography_1.default, __assign({ component: "span", variant: "body2", className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)), emptyText && translate(emptyText, { _: emptyText }))) : (React.createElement(Root, __assign({ className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest))));
    }
    if (Array.isArray(sourceValue)) {
        return (React.createElement(StyledList, __assign({ className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)), sourceValue.map(function (file, index) {
            var fileTitleValue = (0, get_1.default)(file, title) || title;
            var srcValue = (0, get_1.default)(file, src) || title;
            return (React.createElement("li", { key: index },
                React.createElement(material_1.Link, { href: srcValue, title: fileTitleValue, target: target, download: download, ping: ping, rel: rel, variant: "body2" }, fileTitleValue)));
        })));
    }
    var titleValue = (0, get_1.default)(record, title) || title;
    return (React.createElement(Root, __assign({ className: className }, (0, sanitizeFieldRestProps_1.sanitizeFieldRestProps)(rest)),
        React.createElement(material_1.Link, { href: sourceValue, title: titleValue, target: target, download: download, ping: ping, rel: rel, variant: "body2" }, titleValue)));
};
exports.FileField = FileField;
exports.FileField.propTypes = __assign(__assign({}, types_1.fieldPropTypes), { src: prop_types_1.default.string, title: prop_types_1.default.string, target: prop_types_1.default.string, download: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.string]), ping: prop_types_1.default.string, rel: prop_types_1.default.string });
var PREFIX = 'RaFileField';
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})({
    display: 'inline-block',
});
var StyledList = (0, styles_1.styled)('ul')({
    display: 'inline-block',
});
//# sourceMappingURL=FileField.js.map