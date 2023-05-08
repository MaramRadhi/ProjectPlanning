import { HtmlHTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { SxProps } from '@mui/material';
/**
 * A standalone login page, to serve as authentication gate to the admin
 *
 * Expects the user to enter a login and a password, which will be checked
 * by the `authProvider.login()` method. Redirects to the root page (/)
 * upon success, otherwise displays an authentication error message.
 *
 * Copy and adapt this component to implement your own login logic
 * (e.g. to authenticate via email or facebook or anything else).
 *
 * @example
 *     import MyLoginPage from './MyLoginPage';
 *     const App = () => (
 *         <Admin loginPage={MyLoginPage} authProvider={authProvider}>
 *             ...
 *        </Admin>
 *     );
 */
export declare const Login: {
    (props: LoginProps): JSX.Element;
    propTypes: {
        backgroundImage: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
    };
    defaultProps: {
        children: JSX.Element;
    };
};
export interface LoginProps extends HtmlHTMLAttributes<HTMLDivElement> {
    backgroundImage?: string;
    children?: ReactNode;
    className?: string;
    sx?: SxProps;
}
export declare const LoginClasses: {
    card: string;
    avatar: string;
    icon: string;
};
//# sourceMappingURL=Login.d.ts.map