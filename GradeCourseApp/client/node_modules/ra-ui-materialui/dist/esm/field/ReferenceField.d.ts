import { FC, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import { UseReferenceResult, LinkToType, RaRecord, Identifier } from 'ra-core';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Fetch reference record, and render its representation, or delegate rendering to child component.
 *
 * The reference prop should be the name of one of the <Resource> components
 * added as <Admin> child.
 *
 * @example // using recordRepresentation
 * <ReferenceField label="User" source="userId" reference="users" />
 *
 * @example // using a Field component to represent the record
 * <ReferenceField label="User" source="userId" reference="users">
 *     <TextField source="name" />
 * </ReferenceField>
 *
 * @example // By default, includes a link to the <Edit> page of the related record
 * // (`/users/:userId` in the previous example).
 * // Set the `link` prop to "show" to link to the <Show> page instead.
 * <ReferenceField label="User" source="userId" reference="users" link="show" />
 *
 * @example // You can also prevent `<ReferenceField>` from adding link to children
 * // by setting `link` to false.
 * <ReferenceField label="User" source="userId" reference="users" link={false} />
 *
 * @example // Alternatively, you can also pass a custom function to `link`.
 * // It must take reference and record as arguments and return a string
 * <ReferenceField label="User" source="userId" reference="users" link={(record, reference) => "/path/to/${reference}/${record}"} />
 *
 * @default
 * In previous versions of React-Admin, the prop `linkType` was used. It is now deprecated and replaced with `link`. However
 * backward-compatibility is still kept
 */
export declare const ReferenceField: FC<ReferenceFieldProps>;
export interface ReferenceFieldProps<RecordType extends RaRecord = any> extends PublicFieldProps, InjectedFieldProps<RecordType> {
    children?: ReactNode;
    reference: string;
    resource?: string;
    source: string;
    translateChoice?: Function | boolean;
    link?: LinkToType;
    sx?: SxProps;
}
/**
 * This intermediate component is made necessary by the useReference hook,
 * which cannot be called conditionally when get(record, source) is empty.
 */
export declare const NonEmptyReferenceField: FC<Omit<ReferenceFieldProps, 'source'> & {
    id: Identifier;
}>;
export declare const ReferenceFieldView: FC<ReferenceFieldViewProps>;
export interface ReferenceFieldViewProps extends PublicFieldProps, InjectedFieldProps, UseReferenceResult {
    reference: string;
    resource?: string;
    translateChoice?: Function | boolean;
    resourceLinkPath?: string | false;
    children?: ReactNode;
    sx?: SxProps;
}
export declare const ReferenceFieldClasses: {
    link: string;
};
//# sourceMappingURL=ReferenceField.d.ts.map