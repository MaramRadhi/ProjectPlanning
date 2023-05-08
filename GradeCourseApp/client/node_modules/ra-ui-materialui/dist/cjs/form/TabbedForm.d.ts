import * as React from 'react';
import { ReactElement, ReactNode, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { FormProps, MutationMode, RaRecord } from 'ra-core';
import { TabbedFormViewProps } from './TabbedFormView';
/**
 * Form layout where inputs are divided by tab, one input per line.
 *
 * Pass <TabbedForm.Tab> components as children.
 *
 * @example
 *
 * import * as React from "react";
 * import {
 *     Edit,
 *     TabbedForm,
 *     Datagrid,
 *     TextField,
 *     DateField,
 *     TextInput,
 *     ReferenceManyField,
 *     NumberInput,
 *     DateInput,
 *     BooleanInput,
 *     EditButton
 * } from 'react-admin';
 *
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <TabbedForm>
 *             <TabbedForm.Tab label="summary">
 *                 <TextInput disabled label="Id" source="id" />
 *                 <TextInput source="title" validate={required()} />
 *                 <TextInput multiline source="teaser" validate={required()} />
 *             </TabbedForm.Tab>
 *             <TabbedForm.Tab label="body">
 *                 <RichTextInput source="body" validate={required()} label={false} />
 *             </TabbedForm.Tab>
 *             <TabbedForm.Tab label="Miscellaneous">
 *                 <TextInput label="Password (if protected post)" source="password" type="password" />
 *                 <DateInput label="Publication date" source="published_at" />
 *                 <NumberInput source="average_note" validate={[ number(), minValue(0) ]} />
 *                 <BooleanInput label="Allow comments?" source="commentable" defaultValue />
 *                 <TextInput disabled label="Nb views" source="views" />
 *             </TabbedForm.Tab>
 *             <TabbedForm.Tab label="comments">
 *                 <ReferenceManyField reference="comments" target="post_id" label={false}>
 *                     <Datagrid>
 *                         <TextField source="body" />
 *                         <DateField source="created_at" />
 *                         <EditButton />
 *                     </Datagrid>
 *                 </ReferenceManyField>
 *             </TabbedForm.Tab>
 *         </TabbedForm>
 *     </Edit>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by Create or Edit)
 * @prop {ReactElement[]} FormTab elements
 * @prop {Object} defaultValues
 * @prop {Function} validate
 * @prop {ReactElement} toolbar The element displayed at the bottom of the form, containing the SaveButton
 *
 * @param {Props} props
 */
export declare const TabbedForm: {
    (props: TabbedFormProps): JSX.Element;
    Tab: {
        (props: import("./FormTab").FormTabProps): JSX.Element;
        propTypes: {
            className: PropTypes.Requireable<string>;
            contentClassName: PropTypes.Requireable<string>;
            children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            count: PropTypes.Requireable<PropTypes.ReactNodeLike>;
            intent: PropTypes.Requireable<string>;
            hidden: PropTypes.Requireable<boolean>;
            icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
            label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike>>>;
            path: PropTypes.Requireable<string>;
            resource: PropTypes.Requireable<string>;
            value: PropTypes.Requireable<NonNullable<string | number>>;
        };
        displayName: string;
    };
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        defaultValues: PropTypes.Requireable<object>;
        formRootPathname: PropTypes.Requireable<string>;
        mutationMode: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        saving: PropTypes.Requireable<boolean>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export interface TabbedFormProps extends Omit<FormProps, 'render'>, Omit<HtmlHTMLAttributes<HTMLFormElement>, 'defaultValue' | 'onSubmit' | 'children'>, Partial<TabbedFormViewProps> {
    children: ReactNode;
    className?: string;
    defaultValues?: any;
    formRootPathname?: string;
    mutationMode?: MutationMode;
    record?: RaRecord;
    resource?: string;
    syncWithLocation?: boolean;
    tabs?: ReactElement;
    toolbar?: ReactElement | false;
    warnWhenUnsavedChanges?: boolean;
}
export declare const findTabsWithErrors: (children: any, errors: any) => React.ReactChild | React.ReactFragment | React.ReactPortal;
//# sourceMappingURL=TabbedForm.d.ts.map