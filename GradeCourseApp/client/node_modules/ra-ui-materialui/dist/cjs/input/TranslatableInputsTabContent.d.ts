import { ReactElement, ReactNode } from 'react';
import { RaRecord } from 'ra-core';
/**
 * Default container for a group of translatable inputs inside a TranslatableInputs component.
 * @see TranslatableInputs
 */
export declare const TranslatableInputsTabContent: (props: TranslatableInputsTabContentProps) => ReactElement;
export declare type TranslatableInputsTabContentProps<RecordType extends RaRecord | Omit<RaRecord, 'id'> = any> = {
    children: ReactNode;
    groupKey?: string;
    locale: string;
    record?: RecordType;
    resource?: string;
    margin?: 'none' | 'normal' | 'dense';
    variant?: 'standard' | 'outlined' | 'filled';
};
export declare const TranslatableInputsTabContentClasses: {
    root: string;
};
//# sourceMappingURL=TranslatableInputsTabContent.d.ts.map