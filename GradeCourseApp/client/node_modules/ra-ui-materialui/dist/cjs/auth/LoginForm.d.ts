/// <reference types="react" />
import PropTypes from 'prop-types';
export declare const LoginForm: {
    (props: LoginFormProps): JSX.Element;
    propTypes: {
        redirectTo: PropTypes.Requireable<string>;
    };
};
export declare const LoginFormClasses: {
    content: string;
    button: string;
    icon: string;
};
export interface LoginFormProps {
    redirectTo?: string;
    className?: string;
}
//# sourceMappingURL=LoginForm.d.ts.map