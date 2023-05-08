/// <reference types="react" />
import { IconButtonProps } from '@mui/material';
/**
 * An IconButton with a tooltip which ensures the tooltip is closed on click to avoid ghost tooltips
 * when the button position changes.
 */
export declare const IconButtonWithTooltip: ({ label, onClick, ...props }: IconButtonWithTooltipProps) => JSX.Element;
export interface IconButtonWithTooltipProps extends IconButtonProps {
    label: string;
}
//# sourceMappingURL=IconButtonWithTooltip.d.ts.map