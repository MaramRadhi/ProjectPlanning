/// <reference types="react" />
import { TabProps } from '@mui/material/Tab';
/**
 * Single tab that selects a locale in a TranslatableInputs component.
 * @see TranslatableInputs
 */
export declare const TranslatableInputsTab: (props: TranslatableInputsTabProps & TabProps) => JSX.Element;
export interface TranslatableInputsTabProps {
    groupKey?: string;
    locale: string;
}
export declare const TranslatableInputsTabClasses: {
    root: string;
    error: string;
};
//# sourceMappingURL=TranslatableInputsTab.d.ts.map