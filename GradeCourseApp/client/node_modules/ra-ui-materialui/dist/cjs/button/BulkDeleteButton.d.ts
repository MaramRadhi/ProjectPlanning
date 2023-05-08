/// <reference types="react" />
import PropTypes from 'prop-types';
import { BulkDeleteWithConfirmButtonProps } from './BulkDeleteWithConfirmButton';
import { BulkDeleteWithUndoButtonProps } from './BulkDeleteWithUndoButton';
import { MutationMode } from 'ra-core';
/**
 * Deletes the selected rows.
 *
 * To be used inside the <List bulkActionButtons> prop (where it's enabled by default).
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkDeleteButton, BulkExportButton } from 'react-admin';
 *
 * const PostBulkActionButtons = () => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkDeleteButton />
 *     </Fragment>
 * );
 *
 * export const PostList = () => (
 *     <List bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
export declare const BulkDeleteButton: {
    ({ mutationMode, ...props }: BulkDeleteButtonProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        mutationMode: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    mutationMode?: MutationMode;
}
export declare type BulkDeleteButtonProps = Props & (BulkDeleteWithUndoButtonProps | BulkDeleteWithConfirmButtonProps);
export {};
//# sourceMappingURL=BulkDeleteButton.d.ts.map