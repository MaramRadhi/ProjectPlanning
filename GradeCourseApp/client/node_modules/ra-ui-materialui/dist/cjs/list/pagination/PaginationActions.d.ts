import { FC } from 'react';
import { PaginationProps } from '@mui/material';
export declare const PaginationActions: FC<PaginationActionsProps>;
export interface PaginationActionsProps extends PaginationProps {
    page: number;
    rowsPerPage: number;
    count: number;
    onPageChange: (event: MouseEvent, page: number) => void;
}
//# sourceMappingURL=PaginationActions.d.ts.map