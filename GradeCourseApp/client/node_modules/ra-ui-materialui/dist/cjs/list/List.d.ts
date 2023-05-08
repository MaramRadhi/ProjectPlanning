import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ListControllerProps, RaRecord } from 'ra-core';
import { ListViewProps } from './ListView';
/**
 * List page component
 *
 * The <List> component renders the list layout (title, buttons, filters, pagination),
 * and fetches the list of records from the REST API.
 *
 * It then delegates the rendering of the list of records to its child component.
 * Usually, it's a <Datagrid>, responsible for displaying a table with one row for each post.
 *
 * The <List> component accepts the following props:
 *
 * - actions
 * - aside: Side Component
 * - children: List Layout
 * - component
 * - disableAuthentication
 * - disableSyncWithLocation
 * - empty: Empty Page Component
 * - emptyWhileLoading
 * - exporter
 * - filters: Filter Inputs
 * - filter: Permanent Filter
 * - filterDefaultValues
 * - pagination: Pagination Component
 * - perPage: Pagination Size
 * - queryOptions
 * - sort: Default Sort Field & Order
 * - title
 * - sx: CSS API
 *
 * @example
 * const postFilters = [
 *     <TextInput label="Search" source="q" alwaysOn />,
 *     <TextInput label="Title" source="title" />
 * ];
 * export const PostList = () => (
 *     <List
 *         title="List of posts"
 *         sort={{ field: 'published_at' }}
 *         filter={{ is_published: true }}
 *         filters={postFilters}
 *     >
 *         <Datagrid>
 *             <TextField source="id" />
 *             <TextField source="title" />
 *             <EditButton />
 *         </Datagrid>
 *     </List>
 * );
 */
export declare const List: {
    <RecordType extends RaRecord = any>({ debounce, disableAuthentication, disableSyncWithLocation, exporter, filter, filterDefaultValues, perPage, queryOptions, resource, sort, storeKey, ...rest }: ListProps<RecordType>): ReactElement;
    propTypes: {
        actions: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        className: PropTypes.Requireable<string>;
        emptyWhileLoading: PropTypes.Requireable<boolean>;
        filter: PropTypes.Requireable<object>;
        filterDefaultValues: PropTypes.Requireable<object>;
        filters: PropTypes.Requireable<NonNullable<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>>;
        pagination: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        perPage: PropTypes.Validator<number>;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>;
        sx: PropTypes.Requireable<any>;
        title: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
        disableSyncWithLocation: PropTypes.Requireable<boolean>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
    };
    defaultProps: {
        filter: {};
        perPage: number;
    };
};
export interface ListProps<RecordType extends RaRecord = any> extends ListControllerProps<RecordType>, ListViewProps {
}
//# sourceMappingURL=List.d.ts.map