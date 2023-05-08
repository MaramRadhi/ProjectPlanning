import * as React from 'react';
import PropTypes from 'prop-types';
import { Identifier, RaRecord, SortPayload } from 'ra-core';
/**
 * The default Datagrid Header component.
 *
 * Renders select all checkbox as well as column header buttons used for sorting.
 */
export declare const DatagridHeader: {
    (props: DatagridHeaderProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        sort: PropTypes.Requireable<Required<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>>;
        data: PropTypes.Requireable<any[]>;
        hasExpand: PropTypes.Requireable<boolean>;
        hasBulkActions: PropTypes.Requireable<boolean>;
        isRowSelectable: PropTypes.Requireable<(...args: any[]) => any>;
        isRowExpandable: PropTypes.Requireable<(...args: any[]) => any>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        onToggleItem: PropTypes.Requireable<(...args: any[]) => any>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        setSort: PropTypes.Requireable<(...args: any[]) => any>;
    };
    displayName: string;
};
export interface DatagridHeaderProps<RecordType extends RaRecord = any> {
    children?: React.ReactNode;
    className?: string;
    hasExpand?: boolean;
    hasBulkActions?: boolean;
    isRowSelectable?: (record: RecordType) => boolean;
    isRowExpandable?: (record: RecordType) => boolean;
    size?: 'medium' | 'small';
    sort?: SortPayload;
    data?: RecordType[];
    onSelect?: (ids: Identifier[]) => void;
    onToggleItem?: (id: Identifier) => void;
    resource?: string;
    selectedIds?: Identifier[];
    setSort?: (sort: SortPayload) => void;
}
//# sourceMappingURL=DatagridHeader.d.ts.map