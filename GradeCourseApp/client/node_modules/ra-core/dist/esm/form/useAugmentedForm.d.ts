import { BaseSyntheticEvent } from 'react';
import { FieldValues, SubmitHandler, UseFormProps } from 'react-hook-form';
import { RaRecord } from '../types';
import { ValidateForm } from './getSimpleValidationResolver';
/**
 * Wrapper around react-hook-form's useForm
 *
 * This hook adds the following features to react-hook-form's useForm:
 *
 * - form initialization based on RecordContext
 * - validation based on a validate function
 * - sanitization of empty values
 * - notification on invalid form
 * - stop form submission event propagation
 */
export declare const useAugmentedForm: (props: UseAugmentedFormProps) => {
    form: import("react-hook-form").UseFormReturn<any, any>;
    handleSubmit: (values: any, event: any) => Promise<void>;
    formHandleSubmit: (event: BaseSyntheticEvent) => void;
};
export declare type UseAugmentedFormProps = UseFormOwnProps & Omit<UseFormProps, 'onSubmit'> & {
    validate?: ValidateForm;
};
export interface UseFormOwnProps {
    defaultValues?: any;
    formRootPathname?: string;
    record?: Partial<RaRecord>;
    onSubmit?: SubmitHandler<FieldValues>;
    warnWhenUnsavedChanges?: boolean;
    sanitizeEmptyValues?: boolean;
}
//# sourceMappingURL=useAugmentedForm.d.ts.map