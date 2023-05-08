import { ReactElement } from 'react';
import { RaRecord } from 'ra-core';
import PropTypes from 'prop-types';
import { TableCellProps } from '@mui/material/TableCell';
declare type TextAlign = TableCellProps['align'];
declare type SortOrder = 'ASC' | 'DESC';
export interface FieldProps<RecordType extends RaRecord = any> extends PublicFieldProps, InjectedFieldProps<RecordType> {
}
export interface PublicFieldProps {
    sortBy?: string;
    sortByOrder?: SortOrder;
    source?: string;
    label?: string | ReactElement | boolean;
    sortable?: boolean;
    className?: string;
    cellClassName?: string;
    headerClassName?: string;
    formClassName?: string;
    textAlign?: TextAlign;
    emptyText?: string;
    fullWidth?: boolean;
}
export interface InjectedFieldProps<RecordType = any> {
    record?: RecordType;
    resource?: string;
}
export declare const fieldPropTypes: {
    sortBy: PropTypes.Requireable<string>;
    sortByOrder: PropTypes.Requireable<SortOrder>;
    source: PropTypes.Requireable<string>;
    label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
    sortable: PropTypes.Requireable<boolean>;
    className: PropTypes.Requireable<string>;
    cellClassName: PropTypes.Requireable<string>;
    headerClassName: PropTypes.Requireable<string>;
    textAlign: PropTypes.Requireable<"inherit" | "left" | "right" | "center" | "justify">;
    emptyText: PropTypes.Requireable<string>;
};
export {};
//# sourceMappingURL=types.d.ts.map