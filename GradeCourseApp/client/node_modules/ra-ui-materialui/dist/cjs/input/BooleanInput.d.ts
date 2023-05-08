/// <reference types="react" />
import PropTypes from 'prop-types';
import { FormGroupProps } from '@mui/material/FormGroup';
import { SwitchProps } from '@mui/material/Switch';
import { CommonInputProps } from './CommonInputProps';
export declare const BooleanInput: {
    (props: BooleanInputProps): JSX.Element;
    propTypes: {
        options: PropTypes.Requireable<PropTypes.InferProps<any>>;
        disabled: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        options: {};
    };
};
export declare type BooleanInputProps = CommonInputProps & SwitchProps & Omit<FormGroupProps, 'defaultValue' | 'onChange' | 'onBlur' | 'onFocus'> & {
    options: SwitchProps;
};
//# sourceMappingURL=BooleanInput.d.ts.map