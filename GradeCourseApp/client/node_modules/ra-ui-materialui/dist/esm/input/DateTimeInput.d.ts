/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { CommonInputProps } from './CommonInputProps';
/**
 * Input component for entering a date and a time with timezone, using the browser locale
 */
export declare const DateTimeInput: {
    ({ className, defaultValue, format, label, helperText, margin, onBlur, onChange, source, resource, parse, validate, variant, ...rest }: DateTimeInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
};
export declare type DateTimeInputProps = CommonInputProps & Omit<TextFieldProps, 'helperText' | 'label'>;
//# sourceMappingURL=DateTimeInput.d.ts.map