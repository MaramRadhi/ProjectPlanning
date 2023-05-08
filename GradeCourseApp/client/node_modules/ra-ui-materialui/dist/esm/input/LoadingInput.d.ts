import * as React from 'react';
import { SxProps } from '@mui/material/styles';
/**
 * An input placeholder with a loading indicator
 *
 * Avoids visual jumps when replaced by a form input
 */
export declare const LoadingInput: ({ fullWidth, label, helperText, margin, size, sx, timeout, variant, }: LoadingInputProps) => JSX.Element;
export interface LoadingInputProps {
    fullWidth?: boolean;
    helperText?: React.ReactNode;
    margin?: 'normal' | 'none' | 'dense';
    label?: string | React.ReactElement | false;
    sx?: SxProps;
    size?: 'medium' | 'small';
    timeout?: number;
    variant?: 'standard' | 'filled' | 'outlined';
}
//# sourceMappingURL=LoadingInput.d.ts.map