import { ReactElement, ReactNode } from 'react';
import { RaRecord } from 'ra-core';
/**
 * Default container for a group of translatable fields inside a TranslatableFields components.
 * @see TranslatableFields
 */
export declare const TranslatableFieldsTabContent: (props: TranslatableFieldsTabContentProps) => ReactElement;
export declare type TranslatableFieldsTabContentProps = {
    children: ReactNode;
    className?: string;
    formGroupKeyPrefix?: string;
    groupKey: string;
    locale: string;
    record: RaRecord;
    resource: string;
};
//# sourceMappingURL=TranslatableFieldsTabContent.d.ts.map