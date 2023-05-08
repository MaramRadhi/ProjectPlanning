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
exports.editFieldTypes = void 0;
var React = __importStar(require("react"));
var form_1 = require("../form");
var input_1 = require("../input");
exports.editFieldTypes = {
    form: {
        component: form_1.SimpleForm,
        representation: function (_, children) { return "        <SimpleForm>\n".concat(children.map(function (child) { return "            ".concat(child.getRepresentation()); }).join('\n'), "\n        </SimpleForm>"); },
    },
    array: {
        // eslint-disable-next-line react/display-name
        component: function (_a) {
            var children = _a.children, props = __rest(_a, ["children"]);
            return (React.createElement(input_1.ArrayInput, __assign({}, props),
                React.createElement(input_1.SimpleFormIterator, null, children)));
        },
        representation: function (props, children) {
            return "<ArrayInput source=\"".concat(props.source, "\"><SimpleFormIterator>").concat(children
                .map(function (child) { return child.getRepresentation(); })
                .join('\n'), "</SimpleFormIterator></ArrayInput>");
        },
    },
    boolean: {
        component: input_1.BooleanInput,
        representation: function (props) {
            return "<BooleanInput source=\"".concat(props.source, "\" />");
        },
    },
    date: {
        component: input_1.DateInput,
        representation: function (props) {
            return "<DateInput source=\"".concat(props.source, "\" />");
        },
    },
    email: {
        component: input_1.TextInput,
        representation: function (props) {
            return "<TextInput source=\"".concat(props.source, "\" />");
        },
    },
    id: {
        component: input_1.TextInput,
        representation: function (props) {
            return "<TextInput source=\"".concat(props.source, "\" />");
        },
    },
    number: {
        component: input_1.NumberInput,
        representation: function (props) {
            return "<NumberInput source=\"".concat(props.source, "\" />");
        },
    },
    reference: {
        component: input_1.ReferenceInput,
        representation: function (props, children) {
            return "<ReferenceInput source=\"".concat(props.source, "\" reference=\"").concat(props.reference, "\" />");
        },
    },
    referenceArray: {
        component: input_1.ReferenceArrayInput,
        representation: function (props) {
            return "<ReferenceArrayInput source=\"".concat(props.source, "\" reference=\"").concat(props.reference, "\"><TextInput source=\"id\" /></ReferenceArrayInput>");
        },
    },
    referenceArrayChild: {
        component: function (props) { return React.createElement(input_1.SelectInput, __assign({ optionText: "id" }, props)); },
        representation: function () { return "<SelectInput optionText=\"id\" />"; },
    },
    richText: {
        component: input_1.TextInput,
        representation: function (props) {
            return "<TextInput source=\"".concat(props.source, "\" />");
        },
    },
    string: {
        component: input_1.TextInput,
        representation: function (props) {
            return "<TextInput source=\"".concat(props.source, "\" />");
        },
    },
    url: {
        component: input_1.TextInput,
        representation: function (props) {
            return "<TextInput source=\"".concat(props.source, "\" />");
        },
    },
};
//# sourceMappingURL=editFieldTypes.js.map