import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { MutationMode, RaRecord, DeleteManyParams } from 'ra-core';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
import { UseMutationOptions } from 'react-query';
export declare const BulkDeleteWithConfirmButton: {
    (props: BulkDeleteWithConfirmButtonProps): JSX.Element;
    propTypes: {
        confirmTitle: PropTypes.Requireable<string>;
        confirmContent: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        mutationMode: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
    };
};
export interface BulkDeleteWithConfirmButtonProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> extends BulkActionProps, ButtonProps {
    confirmContent?: React.ReactNode;
    confirmTitle?: string;
    icon?: ReactElement;
    mutationMode: MutationMode;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteManyParams<RecordType>> & {
        meta?: any;
    };
}
//# sourceMappingURL=BulkDeleteWithConfirmButton.d.ts.map