import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { RaRecord, DeleteManyParams } from 'ra-core';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
import { UseMutationOptions } from 'react-query';
export declare const BulkDeleteWithUndoButton: {
    (props: BulkDeleteWithUndoButtonProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export interface BulkDeleteWithUndoButtonProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> extends BulkActionProps, ButtonProps {
    icon?: ReactElement;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteManyParams<RecordType>> & {
        meta?: any;
    };
}
//# sourceMappingURL=BulkDeleteWithUndoButton.d.ts.map