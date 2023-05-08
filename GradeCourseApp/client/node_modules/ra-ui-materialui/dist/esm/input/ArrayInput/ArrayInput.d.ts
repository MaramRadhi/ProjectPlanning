import { ReactElement } from 'react';
import { RaRecord } from 'ra-core';
import { FormControlProps } from '@mui/material';
import { CommonInputProps } from '../CommonInputProps';
/**
 * To edit arrays of data embedded inside a record, <ArrayInput> creates a list of sub-forms.
 *
 *  @example
 *
 *      import { ArrayInput, SimpleFormIterator, DateInput, TextInput } from 'react-admin';
 *
 *      <ArrayInput source="backlinks">
 *          <SimpleFormIterator>
 *              <DateInput source="date" />
 *              <TextInput source="url" />
 *          </SimpleFormIterator>
 *      </ArrayInput>
 *
 * <ArrayInput> allows the edition of embedded arrays, like the backlinks field
 * in the following post record:
 *
 * {
 *   id: 123
 *   backlinks: [
 *         {
 *             date: '2012-08-10T00:00:00.000Z',
 *             url: 'http://example.com/foo/bar.html',
 *         },
 *         {
 *             date: '2012-08-14T00:00:00.000Z',
 *             url: 'https://blog.johndoe.com/2012/08/12/foobar.html',
 *         }
 *    ]
 * }
 *
 * <ArrayInput> expects a single child, which must be a *form iterator* component.
 * A form iterator is a component accepting a fields object as passed by
 * react-hook-form-arrays's useFieldArray() hook, and defining a layout for
 * an array of fields. For instance, the <SimpleFormIterator> component
 * displays an array of fields in an unordered list (<ul>), one sub-form by
 * list item (<li>). It also provides controls for adding and removing
 * a sub-record (a backlink in this example).
 *
 * @see {@link https://react-hook-form.com/api/usefieldarray}
 */
export declare const ArrayInput: {
    (props: ArrayInputProps): JSX.Element;
    defaultProps: {
        options: {};
    };
};
export declare const getArrayInputError: (error: any) => any;
export interface ArrayInputProps extends CommonInputProps, Omit<FormControlProps, 'defaultValue' | 'onBlur' | 'onChange'> {
    className?: string;
    children: ReactElement;
    disabled?: boolean;
    isFetching?: boolean;
    isLoading?: boolean;
    record?: Partial<RaRecord>;
}
export declare const ArrayInputClasses: {
    root: string;
    label: string;
};
//# sourceMappingURL=ArrayInput.d.ts.map