/// <reference types="react" />
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material/TextField';
import { CommonInputProps } from './CommonInputProps';
export declare const NullableBooleanInput: {
    (props: NullableBooleanInputProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        nullLabel: PropTypes.Requireable<string>;
        falseLabel: PropTypes.Requireable<string>;
        trueLabel: PropTypes.Requireable<string>;
    };
};
export declare const NullableBooleanInputClasses: {
    input: string;
};
export declare type NullableBooleanInputProps = CommonInputProps & Omit<TextFieldProps, 'label' | 'helperText'> & {
    nullLabel?: string;
    falseLabel?: string;
    trueLabel?: string;
};
//# sourceMappingURL=NullableBooleanInput.d.ts.map