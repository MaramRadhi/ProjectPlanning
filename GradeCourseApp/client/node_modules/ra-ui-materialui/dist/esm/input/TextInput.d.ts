/// <reference types="react" />
import PropTypes from 'prop-types';
import { CommonInputProps } from './CommonInputProps';
import { ResettableTextFieldProps } from './ResettableTextField';
/**
 * An Input component for a string
 *
 * @example
 * <TextInput source="first_name" />
 *
 * You can customize the `type` props (which defaults to "text").
 * Note that, due to a React bug, you should use `<NumberField>` instead of using type="number".
 * @example
 * <TextInput source="email" type="email" />
 * <NumberInput source="nb_views" />
 *
 * The object passed as `options` props is passed to the <ResettableTextField> component
 */
export declare const TextInput: {
    (props: TextInputProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        options: {};
    };
};
export declare type TextInputProps = CommonInputProps & Omit<ResettableTextFieldProps, 'label' | 'helperText'>;
//# sourceMappingURL=TextInput.d.ts.map