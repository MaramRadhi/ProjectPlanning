import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { InputProps, UseReferenceArrayInputParams } from 'ra-core';
/**
 * An Input component for fields containing a list of references to another resource.
 * Useful for 'hasMany' relationship.
 *
 * @example
 * The post object has many tags, so the post resource looks like:
 * {
 *    id: 1234,
 *    tag_ids: [ "1", "23", "4" ]
 * }
 *
 * ReferenceArrayInput component fetches the current resources (using
 * `dataProvider.getMany()`) as well as possible resources (using
 * `dataProvider.getList()`) in the reference endpoint. It then
 * delegates rendering to its child component, to which it makes the possible
 * choices available through the ChoicesContext.
 *
 * Use it with a selector component as child, like `<SelectArrayInput>`
 * or <CheckboxGroupInput>.
 *
 * @example
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <ReferenceArrayInput source="tag_ids" reference="tags">
 *                 <SelectArrayInput optionText="name" />
 *             </ReferenceArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * By default, restricts the possible values to 25. You can extend this limit
 * by setting the `perPage` prop.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      perPage={100}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * By default, orders the possible values by id desc. You can change this order
 * by setting the `sort` prop (an object with `field` and `order` properties).
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      sort={{ field: 'name', order: 'ASC' }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * Also, you can filter the query used to populate the possible values. Use the
 * `filter` prop for that.
 *
 * @example
 * <ReferenceArrayInput
 *      source="tag_ids"
 *      reference="tags"
 *      filter={{ is_public: true }}>
 *     <SelectArrayInput optionText="name" />
 * </ReferenceArrayInput>
 *
 * The enclosed component may filter results. ReferenceArrayInput create a ChoicesContext which provides
 * a `setFilters` function. You can call this function to filter the results.
 */
export declare const ReferenceArrayInput: {
    (props: ReferenceArrayInputProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        filter: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        page: PropTypes.Requireable<number>;
        perPage: PropTypes.Requireable<number>;
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
export interface ReferenceArrayInputProps extends InputProps, UseReferenceArrayInputParams {
    children?: ReactElement;
    label?: string;
    [key: string]: any;
}
//# sourceMappingURL=ReferenceArrayInput.d.ts.map