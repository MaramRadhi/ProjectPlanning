/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { CommonInputProps } from './CommonInputProps';
/**
 * An Input component for a number
 *
 * @example
 * <NumberInput source="nb_views" />
 *
 * You can customize the `step` props (which defaults to "any")
 * @example
 * <NumberInput source="nb_views" step={1} />
 *
 */
export declare const NumberInput: {
    ({ className, defaultValue, format, helperText, label, margin, onChange, onBlur, onFocus, parse, resource, source, step, min, max, validate, variant, inputProps: overrideInputProps, ...rest }: NumberInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        step: PropTypes.Requireable<NonNullable<string | number>>;
    };
    defaultProps: {
        options: {};
        step: string;
        textAlign: string;
    };
};
export interface NumberInputProps extends CommonInputProps, Omit<TextFieldProps, 'label' | 'helperText' | 'defaultValue' | 'onChange' | 'onBlur' | 'type'> {
    step?: string | number;
    min?: string | number;
    max?: string | number;
}
//# sourceMappingURL=NumberInput.d.ts.map