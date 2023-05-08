/// <reference types="react" />
import PropTypes from 'prop-types';
import { SnackbarProps } from '@mui/material';
/**
 * Provides a way to show a notification.
 * @see useNotify
 *
 * @example <caption>Basic usage</caption>
 * <Notification />
 *
 * @param props The component props
 * @param {string} props.type The notification type. Defaults to 'info'.
 * @param {number} props.autoHideDuration Duration in milliseconds to wait until hiding a given notification. Defaults to 4000.
 * @param {boolean} props.multiLine Set it to `true` if the notification message should be shown in more than one line.
 */
export declare const Notification: {
    (props: NotificationProps): JSX.Element;
    propTypes: {
        type: PropTypes.Requireable<string>;
        autoHideDuration: PropTypes.Requireable<number>;
        multiLine: PropTypes.Requireable<boolean>;
    };
};
export declare const NotificationClasses: {
    success: string;
    error: string;
    warning: string;
    undo: string;
    multiLine: string;
};
export interface NotificationProps extends Omit<SnackbarProps, 'open'> {
    type?: string;
    autoHideDuration?: number;
    multiLine?: boolean;
}
//# sourceMappingURL=Notification.d.ts.map