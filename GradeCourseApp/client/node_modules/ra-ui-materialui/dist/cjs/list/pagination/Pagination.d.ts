import { FC, ReactElement } from 'react';
import { TablePaginationBaseProps } from '@mui/material';
import { ListPaginationContextValue } from 'ra-core';
export declare const Pagination: FC<PaginationProps>;
export interface PaginationProps extends TablePaginationBaseProps, Partial<ListPaginationContextValue> {
    rowsPerPageOptions?: number[];
    actions?: FC;
    limit?: ReactElement;
}
//# sourceMappingURL=Pagination.d.ts.map