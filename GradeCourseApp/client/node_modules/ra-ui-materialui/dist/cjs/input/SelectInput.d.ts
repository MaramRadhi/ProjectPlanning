import { ReactElement, ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { TextFieldProps } from '@mui/material';
import { ChoicesProps, RaRecord } from 'ra-core';
import { CommonInputProps } from './CommonInputProps';
import { SupportCreateSuggestionOptions } from './useSupportCreateSuggestion';
/**
 * An Input component for a select box, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'M', name: 'Male' },
 *    { id: 'F', name: 'Female' },
 * ];
 * <SelectInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that can access
 * the related choice through the `useRecordContext` hook. You can use Field components there.
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const FullNameField = () => {
 *     const record = useRecordContext();
 *     return <span>{record.first_name} {record.last_name}</span>;
 * }
 * <SelectInput source="author" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'M', name: 'myroot.gender.male' },
 *    { id: 'F', name: 'myroot.gender.female' },
 * ];
 *
 * However, in some cases (e.g. inside a `<ReferenceInput>`), you may not want
 * the choice to be translated. In that case, set the `translateChoice` prop to false.
 * @example
 * <SelectInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the MUI <Select> component
 *
 * You can disable some choices by providing a `disableValue` field which name is `disabled` by default
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', disabled: true },
 * ];
 *
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 *    { id: 976, first_name: 'William', last_name: 'Rinkerd', not_available: true },
 * ];
 * <SelectInput source="gender" choices={choices} disableValue="not_available" />
 *
 */
export declare const SelectInput: {
    (props: SelectInputProps): JSX.Element;
    propTypes: {
        emptyText: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
        emptyValue: PropTypes.Requireable<any>;
        choices: PropTypes.Requireable<object[]>;
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        options: PropTypes.Requireable<object>;
        optionText: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>>;
        optionValue: PropTypes.Requireable<string>;
        disableValue: PropTypes.Requireable<string>;
        resettable: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        translateChoice: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        emptyText: string;
        emptyValue: string;
        options: {};
        translateChoice: boolean;
        disableValue: string;
    };
};
export declare type SelectInputProps = Omit<CommonInputProps, 'source'> & ChoicesProps & Omit<SupportCreateSuggestionOptions, 'handleChange'> & Omit<TextFieldProps, 'label' | 'helperText' | 'classes' | 'onChange'> & {
    disableValue?: string;
    emptyText?: string | ReactElement;
    emptyValue?: any;
    resettable?: boolean;
    source?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement> | RaRecord) => void;
};
//# sourceMappingURL=SelectInput.d.ts.map