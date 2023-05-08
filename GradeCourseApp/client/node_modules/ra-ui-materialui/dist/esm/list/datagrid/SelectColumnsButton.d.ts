import * as React from 'react';
/**
 * Renders a button that lets users show / hide columns in a configurable datagrid
 *
 * @example
 * import { SelectColumnsButton, DatagridConfigurable } from 'react-admin';
 *
 * const PostListActions = () => (
 *   <TopToolbar>
        <SelectColumnsButton />
        <FilterButton />
 *   </TopToolbar>
 * );
 *
 * const PostList = () => (
 *   <List actions={<PostListActions />}>
 *     <DatagridConfigurable>
 *       <TextField source="title" />
 *       <TextField source="author" />
         ...
 *     </DatagridConfigurable>
 *   </List>
 * );
 */
export declare const SelectColumnsButton: (props: SelectColumnsButtonProps) => JSX.Element;
export interface SelectColumnsButtonProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    resource?: string;
    preferenceKey?: string;
}
//# sourceMappingURL=SelectColumnsButton.d.ts.map