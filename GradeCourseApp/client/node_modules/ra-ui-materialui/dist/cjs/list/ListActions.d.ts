import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Identifier, SortPayload, Exporter } from 'ra-core';
import { ToolbarProps } from '@mui/material';
/**
 * Action Toolbar for the List view
 *
 * Internal component. If you want to add or remove actions for a List view,
 * write your own ListActions Component. Then, in the <List> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import { cloneElement } from 'react';
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, List, CreateButton, ExportButton } from 'react-admin';
 *
 *     const PostListActions = ({ filters }) => (
 *         <TopToolbar>
 *             { cloneElement(filters, { context: 'button' }) }
 *             <CreateButton/>
 *             <ExportButton/>
 *             // Add your custom actions here //
 *             <Button onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostList = (props) => (
 *         <List actions={<PostListActions />} {...props}>
 *             ...
 *         </List>
 *     );
 */
export declare const ListActions: {
    (props: ListActionsProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        sort: PropTypes.Requireable<any>;
        displayedFilters: PropTypes.Requireable<object>;
        exporter: PropTypes.Requireable<NonNullable<boolean | ((...args: any[]) => any)>>;
        filters: PropTypes.Requireable<PropTypes.ReactElementLike>;
        filterValues: PropTypes.Requireable<object>;
        hasCreate: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
        onUnselectItems: PropTypes.Validator<(...args: any[]) => any>;
        selectedIds: PropTypes.Requireable<any[]>;
        showFilter: PropTypes.Requireable<(...args: any[]) => any>;
        total: PropTypes.Requireable<number>;
    };
    defaultProps: {
        selectedIds: any[];
        onUnselectItems: () => any;
    };
};
export interface ListActionsProps extends ToolbarProps {
    sort?: SortPayload;
    className?: string;
    resource?: string;
    filters?: ReactElement<any>;
    displayedFilters?: any;
    exporter?: Exporter | boolean;
    filterValues?: any;
    permanentFilter?: any;
    hasCreate?: boolean;
    selectedIds?: Identifier[];
    onUnselectItems?: () => void;
    showFilter?: (filterName: string, defaultValue: any) => void;
    total?: number;
}
//# sourceMappingURL=ListActions.d.ts.map