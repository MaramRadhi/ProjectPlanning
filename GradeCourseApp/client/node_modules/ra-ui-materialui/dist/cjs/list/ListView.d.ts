import { ReactElement, ReactNode, ElementType } from 'react';
import PropTypes from 'prop-types';
import { SxProps } from '@mui/system';
import { RaRecord } from 'ra-core';
export declare const ListView: {
    <RecordType extends RaRecord = any>(props: ListViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        component: (props: any, propName: any, componentName: any) => Error;
        sort: PropTypes.Requireable<PropTypes.InferProps<{
            field: PropTypes.Validator<string>;
            order: PropTypes.Validator<string>;
        }>>;
        data: PropTypes.Requireable<any>;
        defaultTitle: PropTypes.Requireable<string>;
        displayedFilters: PropTypes.Requireable<object>;
        emptyWhileLoading: PropTypes.Requireable<boolean>;
        exporter: PropTypes.Requireable<NonNullable<boolean | ((...args: any[]) => any)>>;
        filterDefaultValues: PropTypes.Requireable<object>;
        filters: PropTypes.Requireable<NonNullable<PropTypes.ReactElementLike | PropTypes.ReactElementLike[]>>;
        filterValues: PropTypes.Requireable<object>;
        hasCreate: PropTypes.Requireable<boolean>;
        hideFilter: PropTypes.Requireable<(...args: any[]) => any>;
        ids: PropTypes.Requireable<any[]>;
        loading: PropTypes.Requireable<boolean>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onToggleItem: PropTypes.Requireable<(...args: any[]) => any>;
        onUnselectItems: PropTypes.Requireable<(...args: any[]) => any>;
        page: PropTypes.Requireable<number>;
        pagination: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        perPage: PropTypes.Requireable<number>;
        refresh: PropTypes.Requireable<(...args: any[]) => any>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        setFilters: PropTypes.Requireable<(...args: any[]) => any>;
        setPage: PropTypes.Requireable<(...args: any[]) => any>;
        setPerPage: PropTypes.Requireable<(...args: any[]) => any>;
        setSort: PropTypes.Requireable<(...args: any[]) => any>;
        showFilter: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
        total: PropTypes.Requireable<number>;
    };
};
export interface ListViewProps {
    actions?: ReactElement | false;
    aside?: ReactElement;
    /**
     * @deprecated pass the bulkActionButtons prop to the List child (Datagrid or SimpleList) instead
     */
    bulkActionButtons?: ReactElement | false;
    className?: string;
    children: ReactNode;
    component?: ElementType;
    empty?: ReactElement | false;
    emptyWhileLoading?: boolean;
    filters?: ReactElement | ReactElement[];
    hasCreate?: boolean;
    pagination?: ReactElement | false;
    title?: string | ReactElement;
    sx?: SxProps;
}
export declare const ListClasses: {
    main: string;
    content: string;
    actions: string;
    noResults: string;
};
//# sourceMappingURL=ListView.d.ts.map