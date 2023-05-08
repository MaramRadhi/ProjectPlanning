import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { InputProps, UseReferenceInputControllerParams } from 'ra-core';
/**
 * An Input component for choosing a reference record. Useful for foreign keys.
 *
 * This component fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), then renders an `<AutocompleteInput>`,
 * to which it passes the possible choices via a `ChoicesContext`.
 *
 * You can pass a child select component to customize the way the reference
 * selector is displayed (e.g. using `<SelectInput>` or `<RadioButtonGroupInput>`
 * instead of `<AutocompleteInput>`).
 *
 * @example // default selector: AutocompleteInput
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * @example // using a SelectInput as selector
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceInput label="Post" source="post_id" reference="posts">
 *                 <SelectInput optionText="title" />
 *             </ReferenceInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceInput source="post_id" reference="posts" perPage={100}/>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      sort={{ field: 'title', order: 'ASC' }}
 * />
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceInput
 *      source="post_id"
 *      reference="posts"
 *      filter={{ is_published: true }}
 * />
 *
 * The enclosed component may filter results. ReferenceInput create a ChoicesContext which provides
 * a `setFilters` function. You can call this function to filter the results.
 */
export declare const ReferenceInput: {
    (props: ReferenceInputProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        filter: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        page: PropTypes.Requireable<number>;
        perPage: PropTypes.Requireable<number>;
        record: PropTypes.Requireable<object>;
        reference: PropTypes.Validator<string>;
        resource: PropTypes.Requireable<string>;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        source: PropTypes.Requireable<string>;
    };
    defaultProps: {
        filter: {};
        page: number;
        perPage: number;
        sort: {
            field: string;
            order: string;
        };
        children: JSX.Element;
    };
};
export interface ReferenceInputProps extends InputProps, UseReferenceInputControllerParams {
    children?: ReactElement;
    label?: string;
    [key: string]: any;
}
//# sourceMappingURL=ReferenceInput.d.ts.map