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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var React = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var FormGroupsProvider_1 = require("./FormGroupsProvider");
var controller_1 = require("../controller");
var core_1 = require("../core");
var util_1 = require("../util");
var useAugmentedForm_1 = require("./useAugmentedForm");
/**
 * Creates a form element, initialized with the current record, calling the saveContext on submit
 *
 * Wrapper around react-hook-form's useForm, FormContextProvider, and <form>.
 * Also sets up a FormGroupContext, and handles submission validation.
 *
 * @example
 *
 * const MyForm = ({ record, defaultValues, validate }) => (
 *    <Form record={record} defaultValues={defaultValues} validate={validate}>
 *        <Stack>
 *            <TextInput source="title" />
 *            <SaveButton />
 *        </Stack>
 *    </Form>
 * );
 *
 * @typedef {Object} Props the props you can use
 * @prop {Object} defaultValues
 * @prop {Function} validate
 * @prop {Function} save
 *
 * @see useForm
 * @see FormGroupContext
 *
 * @link https://react-hook-form.com/api/useformcontext
 */
var Form = function (props) {
    var children = props.children, id = props.id, className = props.className, _a = props.noValidate, noValidate = _a === void 0 ? false : _a;
    var record = (0, controller_1.useRecordContext)(props);
    var resource = (0, core_1.useResourceContext)(props);
    var _b = (0, useAugmentedForm_1.useAugmentedForm)(props), form = _b.form, formHandleSubmit = _b.formHandleSubmit;
    return (React.createElement(controller_1.OptionalRecordContextProvider, { value: record },
        React.createElement(util_1.LabelPrefixContextProvider, { prefix: "resources.".concat(resource, ".fields") },
            React.createElement(react_hook_form_1.FormProvider, __assign({}, form),
                React.createElement(FormGroupsProvider_1.FormGroupsProvider, null,
                    React.createElement("form", { onSubmit: formHandleSubmit, noValidate: noValidate, id: id, className: className }, children))))));
};
exports.Form = Form;
//# sourceMappingURL=Form.js.map