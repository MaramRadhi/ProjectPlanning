/// <reference types="react" />
import PropTypes from 'prop-types';
import { BulkUpdateWithConfirmButtonProps } from './BulkUpdateWithConfirmButton';
import { BulkUpdateWithUndoButtonProps } from './BulkUpdateWithUndoButton';
import { MutationMode } from 'ra-core';
/**
 * Updates the selected rows.
 *
 * To be used inside the <List bulkActionButtons> prop (where it's enabled by default).
 *
 * @example // basic usage
 * import * as React from 'react';
 * import { Fragment } from 'react';
 * import { BulkUpdateButton, BulkExportButton } from 'react-admin';
 *
 * const PostBulkActionButtons = () => (
 *     <Fragment>
 *         <BulkExportButton />
 *         <BulkUpdateButton label="Reset Views" data={{ views: 0 }} />
 *     </Fragment>
 * );
 *
 * export const PostList = () => (
 *     <List bulkActionButtons={<PostBulkActionButtons />}>
 *         ...
 *     </List>
 * );
 */
export declare const BulkUpdateButton: {
    (props: BulkUpdateButtonProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        mutationMode: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
    defaultProps: {
        mutationMode: string;
        data: any[];
    };
};
interface Props {
    mutationMode?: MutationMode;
}
export declare type BulkUpdateButtonProps = Props & (BulkUpdateWithUndoButtonProps | BulkUpdateWithConfirmButtonProps);
export {};
//# sourceMappingURL=BulkUpdateButton.d.ts.map