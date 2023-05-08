import { ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import { SelectProps } from '@mui/material';
import { ChoicesProps, RaRecord } from 'ra-core';
import { FormControlProps } from '@mui/material/FormControl';
import { CommonInputProps } from './CommonInputProps';
import { SupportCreateSuggestionOptions } from './useSupportCreateSuggestion';
/**
 * An Input component for a select box allowing multiple selections, using an array of objects for the options
 *
 * Pass possible options as an array of objects in the 'choices' attribute.
 *
 * By default, the options are built from:
 *  - the 'id' property as the option value,
 *  - the 'name' property as the option text
 * @example
 * const choices = [
 *    { id: 'programming', name: 'Programming' },
 *    { id: 'lifestyle', name: 'Lifestyle' },
 *    { id: 'photography', name: 'Photography' },
 * ];
 * <SelectArrayInput source="tags" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <SelectArrayInput source="authors" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <SelectArrayInput source="authors" choices={choices} optionText={optionRenderer} />
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
 *     return (<span>{record.first_name} {record.last_name}</span>)
 * };
 * <SelectArrayInput source="authors" choices={choices} optionText={<FullNameField />}/>
 *
 * The choices are translated by default, so you can use translation identifiers as choices:
 * @example
 * const choices = [
 *    { id: 'programming', name: 'myroot.tags.programming' },
 *    { id: 'lifestyle', name: 'myroot.tags.lifestyle' },
 *    { id: 'photography', name: 'myroot.tags.photography' },
 * ];
 */
export declare const SelectArrayInput: {
    (props: SelectArrayInputProps): JSX.Element;
    propTypes: {
        choices: PropTypes.Requireable<object[]>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        options: PropTypes.Requireable<object>;
        optionText: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>>>;
        optionValue: PropTypes.Validator<string>;
        disableValue: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        translateChoice: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        options: {};
        optionText: string;
        optionValue: string;
        disableValue: string;
        translateChoice: boolean;
    };
};
export declare type SelectArrayInputProps = ChoicesProps & Omit<SupportCreateSuggestionOptions, 'handleChange'> & Omit<CommonInputProps, 'source'> & Omit<FormControlProps, 'defaultValue' | 'onBlur' | 'onChange'> & {
    options?: SelectProps;
    disableValue?: string;
    source?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement> | RaRecord) => void;
};
export declare const SelectArrayInputClasses: {
    chips: string;
    chip: string;
};
//# sourceMappingURL=SelectArrayInput.d.ts.map