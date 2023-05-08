import { FunctionComponent } from 'react';
import { SvgIconComponent } from '@mui/icons-material';
import { TypographyProps } from '@mui/material';
import { PublicFieldProps, InjectedFieldProps } from './types';
export declare const BooleanField: FunctionComponent<BooleanFieldProps>;
export interface BooleanFieldProps extends PublicFieldProps, InjectedFieldProps, Omit<TypographyProps, 'textAlign'> {
    valueLabelTrue?: string;
    valueLabelFalse?: string;
    TrueIcon?: SvgIconComponent | null;
    FalseIcon?: SvgIconComponent | null;
    looseValue?: boolean;
}
//# sourceMappingURL=BooleanField.d.ts.map