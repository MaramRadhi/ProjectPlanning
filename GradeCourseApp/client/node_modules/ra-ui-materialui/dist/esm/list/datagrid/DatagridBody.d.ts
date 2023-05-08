import * as React from 'react';
import { FC, ReactElement } from 'react';
import { TableBodyProps } from '@mui/material';
import { Identifier, RaRecord } from 'ra-core';
import { RowClickFunction } from './DatagridRow';
declare const DatagridBody: FC<DatagridBodyProps>;
export interface DatagridBodyProps extends Omit<TableBodyProps, 'classes'> {
    className?: string;
    data?: any[];
    expand?: ReactElement | FC<{
        id: Identifier;
        record: RaRecord;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    hover?: boolean;
    onToggleItem?: (id: Identifier, event: React.TouchEvent | React.MouseEvent) => void;
    record?: RaRecord;
    resource?: string;
    row?: ReactElement;
    rowClick?: string | RowClickFunction | false;
    rowStyle?: (record: RaRecord, index: number) => any;
    selectedIds?: Identifier[];
    isRowSelectable?: (record: RaRecord) => boolean;
}
export declare const PureDatagridBody: React.NamedExoticComponent<DatagridBodyProps>;
export default DatagridBody;
//# sourceMappingURL=DatagridBody.d.ts.map