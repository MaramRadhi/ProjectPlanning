import { FC } from 'react';
import { ReactElement } from 'react';
import { ToolbarProps } from '@mui/material';
import { Exporter } from 'ra-core';
export declare const ListToolbar: FC<ListToolbarProps>;
export interface ListToolbarProps extends Omit<ToolbarProps, 'classes' | 'onSelect'> {
    actions?: ReactElement | false;
    exporter?: Exporter | false;
    filters?: ReactElement | ReactElement[];
    hasCreate?: boolean;
}
//# sourceMappingURL=ListToolbar.d.ts.map