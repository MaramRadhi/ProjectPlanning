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
import * as React from 'react';
import { FormProvider, } from 'react-hook-form';
import { FormGroupsProvider } from './FormGroupsProvider';
import { useRecordContext, OptionalRecordContextProvider } from '../controller';
import { useResourceContext } from '../core';
import { LabelPrefixContextProvider } from '../util';
import { useAugmentedForm } from './useAugmentedForm';
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
export var Form = function (props) {
    var children = props.children, id = props.id, className = props.className, _a = props.noValidate, noValidate = _a === void 0 ? false : _a;
    var record = useRecordContext(props);
    var resource = useResourceContext(props);
    var _b = useAugmentedForm(props), form = _b.form, formHandleSubmit = _b.formHandleSubmit;
    return (React.createElement(OptionalRecordContextProvider, { value: record },
        React.createElement(LabelPrefixContextProvider, { prefix: "resources.".concat(resource, ".fields") },
            React.createElement(FormProvider, __assign({}, form),
                React.createElement(FormGroupsProvider, null,
                    React.createElement("form", { onSubmit: formHandleSubmit, noValidate: noValidate, id: id, className: className }, children))))));
};
//# sourceMappingURL=Form.js.map