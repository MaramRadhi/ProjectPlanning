import * as React from 'react';
import PropTypes from 'prop-types';
import { TableCellProps } from '@mui/material/TableCell';
import { SortPayload } from 'ra-core';
export declare const DatagridHeaderCell: {
    (props: DatagridHeaderCellProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<PropTypes.ReactElementLike>;
        sort: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>>;
        isSorting: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
        updateSort: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export interface DatagridHeaderCellProps extends Omit<TableCellProps, 'classes'> {
    className?: string;
    field?: JSX.Element;
    isSorting?: boolean;
    resource: string;
    sort: SortPayload;
    updateSort?: (event: any) => void;
}
declare const _default: React.MemoExoticComponent<{
    (props: DatagridHeaderCellProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<PropTypes.ReactElementLike>;
        sort: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>>;
        isSorting: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
        updateSort: PropTypes.Requireable<(...args: any[]) => any>;
    };
}>;
export default _default;
export declare const DatagridHeaderCellClasses: {
    icon: string;
};
//# sourceMappingURL=DatagridHeaderCell.d.ts.map