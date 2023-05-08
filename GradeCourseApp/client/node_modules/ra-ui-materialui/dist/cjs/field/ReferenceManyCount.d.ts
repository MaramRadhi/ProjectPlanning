/// <reference types="react" />
import { SortPayload } from 'ra-core';
import { TypographyProps } from '@mui/material';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * Fetch and render the number of records related to the current one
 *
 * Relies on dataProvider.getManyReference() returning a total property
 *
 * @example // Display the number of comments for the current post
 * <ReferenceManyCount reference="comments" target="post_id">
 *
 * @example // Display the number of published comments for the current post
 * <ReferenceManyCount reference="comments" target="post_id" filter={{ is_published: true }}>
 *
 * @example // Display the number of comments for the current post, with a custom Typography variant
 * <ReferenceManyCount reference="comments" target="post_id" variant="h1">
 */
export declare const ReferenceManyCount: (props: ReferenceManyCountProps) => JSX.Element;
export interface ReferenceManyCountProps extends PublicFieldProps, InjectedFieldProps, Omit<TypographyProps, 'textAlign'> {
    reference: string;
    target: string;
    sort?: SortPayload;
    filter?: any;
    label?: string;
    link?: boolean;
    resource?: string;
    source?: string;
    timeout?: number;
}
//# sourceMappingURL=ReferenceManyCount.d.ts.map