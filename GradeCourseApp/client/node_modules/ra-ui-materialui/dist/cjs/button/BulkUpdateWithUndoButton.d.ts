import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
import { BulkActionProps } from '../types';
export declare const BulkUpdateWithUndoButton: {
    (props: BulkUpdateWithUndoButtonProps): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        selectedIds: PropTypes.Requireable<any[]>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        data: PropTypes.Validator<any>;
    };
};
export interface BulkUpdateWithUndoButtonProps extends BulkActionProps, ButtonProps {
    icon?: ReactElement;
    data: any;
    onSuccess?: () => void;
    onError?: (error: any) => void;
}
//# sourceMappingURL=BulkUpdateWithUndoButton.d.ts.map