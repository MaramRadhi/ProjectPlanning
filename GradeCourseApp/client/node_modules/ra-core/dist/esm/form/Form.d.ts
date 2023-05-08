import { ReactNode } from 'react';
import { FieldValues, UseFormProps, SubmitHandler } from 'react-hook-form';
import { RaRecord } from '../types';
import { ValidateForm } from './getSimpleValidationResolver';
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
export declare const Form: (props: FormProps) => JSX.Element;
export declare type FormProps = FormOwnProps & Omit<UseFormProps, 'onSubmit'> & {
    validate?: ValidateForm;
    noValidate?: boolean;
};
export interface FormOwnProps {
    children: ReactNode;
    className?: string;
    defaultValues?: any;
    formRootPathname?: string;
    id?: string;
    record?: Partial<RaRecord>;
    resource?: string;
    onSubmit?: SubmitHandler<FieldValues>;
    warnWhenUnsavedChanges?: boolean;
    sanitizeEmptyValues?: boolean;
}
//# sourceMappingURL=Form.d.ts.map