/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { CommonInputProps } from './CommonInputProps';
/**
 * Form input to edit a time string value in the "HH:mm" format (e.g. '17:45'),
 * using the browser locale for the timezone.
 *
 * Renders a time picker or a text input depending on the browser.
 *
 * This component works with Date objects to handle the timezone using the browser locale.
 * You can still pass string values as long as those can be converted to a JavaScript Date object.
 *
 * @example
 * import { Edit, SimpleForm, TimeInput } from 'react-admin';
 *
 * const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TimeInput source="published_at" />
 *         </SimpleForm>
 *     </Edit>
 * );
 */
export declare const TimeInput: {
    ({ className, defaultValue, format, label, helperText, margin, onBlur, onChange, source, resource, parse, validate, variant, ...rest }: TimeInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<NonNullable<string | boolean>>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
};
export declare type TimeInputProps = CommonInputProps & Omit<TextFieldProps, 'helperText' | 'label'>;
//# sourceMappingURL=TimeInput.d.ts.map