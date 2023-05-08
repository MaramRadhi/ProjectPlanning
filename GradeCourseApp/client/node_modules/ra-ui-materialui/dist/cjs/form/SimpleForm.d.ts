import * as React from 'react';
import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { FormProps } from 'ra-core';
import { SxProps, StackProps } from '@mui/material';
/**
 * Form with a one column layout, one input per line.
 *
 * Pass input components as children.
 *
 * @example
 *
 * import * as React from "react";
 * import { Create, Edit, SimpleForm, TextInput, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
 * import RichTextInput from 'ra-input-rich-text';
 *
 * export const PostCreate = (props) => (
 *     <Create {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *             <TextInput source="teaser" options={{ multiline: true }} />
 *             <RichTextInput source="body" />
 *             <DateInput label="Publication date" source="published_at" defaultValue={new Date()} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {ReactElement[]} children Input elements
 * @prop {Object} defaultValues
 * @prop {Function} validate
 * @prop {ReactElement} toolbar The element displayed at the bottom of the form, containing the SaveButton
 *
 * @param {Props} props
 */
export declare const SimpleForm: {
    (props: SimpleFormProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        defaultValues: PropTypes.Requireable<object>;
        record: PropTypes.Requireable<object>;
        toolbar: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export interface SimpleFormProps extends Omit<FormProps, 'render'>, Omit<StackProps, 'onSubmit'> {
    children: ReactNode;
    className?: string;
    component?: React.ComponentType<any>;
    defaultValues?: any;
    toolbar?: ReactElement | false;
    sx?: SxProps;
}
//# sourceMappingURL=SimpleForm.d.ts.map