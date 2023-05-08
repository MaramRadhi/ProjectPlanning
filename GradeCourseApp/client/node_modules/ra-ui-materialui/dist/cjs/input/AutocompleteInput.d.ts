import { ReactNode } from 'react';
import { AutocompleteProps, TextFieldProps } from '@mui/material';
import { ChoicesProps, RaRecord, UseSuggestionsOptions } from 'ra-core';
import { SupportCreateSuggestionOptions } from './useSupportCreateSuggestion';
import { CommonInputProps } from './CommonInputProps';
/**
 * An Input component for an autocomplete field, using an array of objects for the options
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
 * <AutocompleteInput source="gender" choices={choices} />
 *
 * You can also customize the properties to use for the option name and value,
 * thanks to the 'optionText' and 'optionValue' attributes.
 * @example
 * const choices = [
 *    { _id: 123, full_name: 'Leo Tolstoi', sex: 'M' },
 *    { _id: 456, full_name: 'Jane Austen', sex: 'F' },
 * ];
 * <AutocompleteInput source="author_id" choices={choices} optionText="full_name" optionValue="_id" />
 *
 * `optionText` also accepts a function, so you can shape the option text at will:
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const optionRenderer = choice => `${choice.first_name} ${choice.last_name}`;
 * <AutocompleteInput source="author_id" choices={choices} optionText={optionRenderer} />
 *
 * `optionText` also accepts a React Element, that can access
 * the related choice through the `useRecordContext` hook. You can use Field components there.
 * Note that you must also specify the `matchSuggestion` and `inputText` props
 * @example
 * const choices = [
 *    { id: 123, first_name: 'Leo', last_name: 'Tolstoi' },
 *    { id: 456, first_name: 'Jane', last_name: 'Austen' },
 * ];
 * const matchSuggestion = (filterValue, choice) => choice.first_name.match(filterValue) || choice.last_name.match(filterValue)
 * const inputText = (record) => `${record.fullName} (${record.language})`;
 *
 * const FullNameField = () => {
 *     const record = useRecordContext();
 *     return <span>{record.first_name} {record.last_name}</span>;
 * }
 * <AutocompleteInput source="author" choices={choices} optionText={<FullNameField />} matchSuggestion={matchSuggestion} inputText={inputText} />
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
 * <AutocompleteInput source="gender" choices={choices} translateChoice={false}/>
 *
 * The object passed as `options` props is passed to the MUI <TextField> component
 *
 * @example
 * <AutocompleteInput source="author_id" options={{ color: 'secondary', InputLabelProps: { shrink: true } }} />
 */
export declare const AutocompleteInput: <OptionType extends RaRecord = RaRecord, Multiple extends boolean = false, DisableClearable extends boolean = false, SupportCreate extends boolean = false>(props: AutocompleteInputProps<OptionType, Multiple, DisableClearable, SupportCreate>) => JSX.Element;
export declare const AutocompleteInputClasses: {
    textField: string;
};
export interface AutocompleteInputProps<OptionType extends any = RaRecord, Multiple extends boolean | undefined = false, DisableClearable extends boolean | undefined = false, SupportCreate extends boolean | undefined = false> extends Omit<CommonInputProps, 'source'>, ChoicesProps, UseSuggestionsOptions, Omit<SupportCreateSuggestionOptions, 'handleChange' | 'optionText'>, Omit<AutocompleteProps<OptionType, Multiple, DisableClearable, SupportCreate>, 'onChange' | 'options' | 'renderInput'> {
    children?: ReactNode;
    debounce?: number;
    emptyText?: string;
    emptyValue?: any;
    filterToQuery?: (searchText: string) => any;
    inputText?: (option: any) => string;
    setFilter?: (value: string) => void;
    shouldRenderSuggestions?: any;
    source?: string;
    TextFieldProps?: TextFieldProps;
}
//# sourceMappingURL=AutocompleteInput.d.ts.map