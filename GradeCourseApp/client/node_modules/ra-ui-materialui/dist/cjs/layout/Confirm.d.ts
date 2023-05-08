import * as React from 'react';
import { MouseEventHandler } from 'react';
import PropTypes, { ReactComponentLike } from 'prop-types';
import { DialogProps } from '@mui/material/Dialog';
/**
 * Confirmation dialog
 *
 * @example
 * <Confirm
 *     isOpen={true}
 *     title="Delete Item"
 *     content="Are you sure you want to delete this item?"
 *     confirm="Yes"
 *     confirmColor="primary"
 *     ConfirmIcon=ActionCheck
 *     CancelIcon=AlertError
 *     cancel="Cancel"
 *     onConfirm={() => { // do something }}
 *     onClose={() => { // do something }}
 * />
 */
export declare const Confirm: {
    (props: ConfirmProps): JSX.Element;
    propTypes: {
        cancel: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        confirm: PropTypes.Requireable<string>;
        confirmColor: PropTypes.Requireable<string>;
        ConfirmIcon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        CancelIcon: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        content: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
        isOpen: PropTypes.Requireable<boolean>;
        loading: PropTypes.Requireable<boolean>;
        onClose: PropTypes.Validator<(...args: any[]) => any>;
        onConfirm: PropTypes.Validator<(...args: any[]) => any>;
        title: PropTypes.Validator<string>;
        sx: PropTypes.Requireable<any>;
    };
};
export interface ConfirmProps extends Omit<DialogProps, 'open' | 'onClose'> {
    cancel?: string;
    className?: string;
    confirm?: string;
    confirmColor?: string;
    ConfirmIcon?: ReactComponentLike;
    CancelIcon?: ReactComponentLike;
    content: React.ReactNode;
    isOpen?: boolean;
    loading?: boolean;
    onClose: MouseEventHandler;
    onConfirm: MouseEventHandler;
    title: string;
    translateOptions?: object;
}
export declare const ConfirmClasses: {
    confirmPrimary: string;
    confirmWarning: string;
};
//# sourceMappingURL=Confirm.d.ts.map