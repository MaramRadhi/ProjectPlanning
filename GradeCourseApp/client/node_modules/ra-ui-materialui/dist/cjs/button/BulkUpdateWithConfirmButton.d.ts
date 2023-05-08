import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { MutationMode } from 'ra-core';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
export declare const BulkUpdateWithConfirmButton: {
    (props: BulkUpdateWithConfirmButtonProps): JSX.Element;
    propTypes: {
        confirmTitle: PropTypes.Requireable<string>;
        confirmContent: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        data: PropTypes.Validator<any>;
        mutationMode: PropTypes.Requireable<string>;
    };
};
export interface BulkUpdateWithConfirmButtonProps extends BulkActionProps, ButtonProps {
    confirmContent?: React.ReactNode;
    confirmTitle?: string;
    icon?: ReactElement;
    data: any;
    onSuccess?: () => void;
    onError?: (error: any) => void;
    mutationMode?: MutationMode;
}
//# sourceMappingURL=BulkUpdateWithConfirmButton.d.ts.map