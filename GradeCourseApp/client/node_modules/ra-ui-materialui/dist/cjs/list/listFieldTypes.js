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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listFieldTypes = void 0;
var React = __importStar(require("react"));
var datagrid_1 = require("./datagrid");
var SingleFieldList_1 = require("./SingleFieldList");
var field_1 = require("../field");
exports.listFieldTypes = {
    table: {
        component: function (props) {
            var hasEdit = props.hasEdit, hasShow = props.hasShow, rest = __rest(props, ["hasEdit", "hasShow"]);
            return (React.createElement(datagrid_1.Datagrid, __assign({ rowClick: !hasEdit && hasShow ? 'show' : 'edit' }, rest)));
        },
        representation: function (props, children) { return "        <Datagrid rowClick=\"".concat(!props.hasEdit && props.hasShow ? 'show' : 'edit', "\">\n").concat(children.map(function (child) { return "            ".concat(child.getRepresentation()); }).join('\n'), "\n        </Datagrid>"); },
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: function (_a) {
            var children = _a.children, props = __rest(_a, ["children"]);
            return (React.createElement(field_1.ArrayField, __assign({}, props),
                React.createElement(SingleFieldList_1.SingleFieldList, null,
                    React.createElement(field_1.ChipField, { source: children.length > 0 && children[0].props.source }))));
        },
        representation: function (props, children) {
            return "<ArrayField source=\"".concat(props.source, "\"><SingleFieldList><ChipField source=\"").concat(children.length > 0 && children[0].getProps().source, "\" /></SingleFieldList></ArrayField>");
        },
    },
    boolean: {
        component: field_1.BooleanField,
        representation: function (props) { return "<BooleanField source=\"".concat(props.source, "\" />"); },
    },
    date: {
        component: field_1.DateField,
        representation: function (props) { return "<DateField source=\"".concat(props.source, "\" />"); },
    },
    email: {
        component: field_1.EmailField,
        representation: function (props) { return "<EmailField source=\"".concat(props.source, "\" />"); },
    },
    id: {
        component: field_1.TextField,
        representation: function (props) { return "<TextField source=\"".concat(props.source, "\" />"); },
    },
    number: {
        component: field_1.NumberField,
        representation: function (props) { return "<NumberField source=\"".concat(props.source, "\" />"); },
    },
    reference: {
        component: field_1.ReferenceField,
        representation: function (props) {
            return "<ReferenceField source=\"".concat(props.source, "\" reference=\"").concat(props.reference, "\" />");
        },
    },
    referenceChild: {
        component: function () { return React.createElement(field_1.TextField, { source: "id" }); },
        representation: function () { return "<TextField source=\"id\" />"; },
    },
    referenceArray: {
        component: field_1.ReferenceArrayField,
        representation: function (props) {
            return "<ReferenceArrayField source=\"".concat(props.source, "\" reference=\"").concat(props.reference, "\" />");
        },
    },
    referenceArrayChild: {
        component: function () { return (React.createElement(SingleFieldList_1.SingleFieldList, null,
            React.createElement(field_1.ChipField, { source: "id" }))); },
        representation: function () {
            return "<SingleFieldList><ChipField source=\"id\" /></SingleFieldList>";
        },
    },
    richText: undefined,
    string: {
        component: field_1.TextField,
        representation: function (props) { return "<TextField source=\"".concat(props.source, "\" />"); },
    },
    url: {
        component: field_1.UrlField,
        representation: function (props) { return "<UrlField source=\"".concat(props.source, "\" />"); },
    },
};
//# sourceMappingURL=listFieldTypes.js.map