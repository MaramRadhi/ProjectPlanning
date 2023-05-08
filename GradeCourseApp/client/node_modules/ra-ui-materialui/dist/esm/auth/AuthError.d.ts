/// <reference types="react" />
import { SxProps } from '@mui/material';
import PropTypes from 'prop-types';
export declare const AuthError: {
    (props: AuthErrorProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        message: PropTypes.Requireable<string>;
    };
};
export interface AuthErrorProps {
    className?: string;
    title?: string;
    message?: string;
    sx?: SxProps;
}
export declare const AuthErrorClasses: {
    root: string;
    message: string;
};
//# sourceMappingURL=AuthError.d.ts.map