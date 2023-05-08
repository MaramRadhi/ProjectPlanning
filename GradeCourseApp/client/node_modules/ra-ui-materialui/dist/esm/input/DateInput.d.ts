/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { CommonInputProps } from './CommonInputProps';
/**
 * Form input to edit a Date string value in the "YYYY-MM-DD" format (e.g. '2021-06-23').
 *
 * Renders a date picker (the exact UI depends on the browser).
 *
 * @example
 * import { Edit, SimpleForm, DateInput } from 'react-admin';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <DateInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example
 * // If the initial value is a Date object, DateInput converts it to a string
 * // but you must pass a custom parse method to convert the form value
 * // (which is always a date string) back to a Date object.
 * <DateInput source="published_at" parse={val => new Date(val)} />
 */
export declare const DateInput: {
    ({ className, defaultValue, format, label, name, source, resource, helperText, margin, onBlur, onChange, parse, validate, variant, ...rest }: DateInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
};
export declare type DateInputProps = CommonInputProps & Omit<TextFieldProps, 'helperText' | 'label'>;
//# sourceMappingURL=DateInput.d.ts.map