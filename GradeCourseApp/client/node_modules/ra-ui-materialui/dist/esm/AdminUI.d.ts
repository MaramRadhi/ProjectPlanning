import { ComponentType } from 'react';
import { CoreAdminUIProps } from 'ra-core';
export declare const AdminUI: {
    ({ notification, ...props }: AdminUIProps): JSX.Element;
    defaultProps: {
        layout: (props: import("./layout").LayoutProps) => JSX.Element;
        catchAll: {
            (props: any): JSX.Element;
            propTypes: {
                className: import("prop-types").Requireable<string>;
                title: import("prop-types").Requireable<string>;
                location: import("prop-types").Requireable<object>;
            };
        };
        loading: {
            ({ loadingPrimary, loadingSecondary, ...props }: {
                [x: string]: any;
                loadingPrimary?: string;
                loadingSecondary?: string;
            }): JSX.Element;
            propTypes: {
                theme: import("prop-types").Requireable<object>;
                className: import("prop-types").Requireable<string>;
                loadingPrimary: import("prop-types").Requireable<string>;
                loadingSecondary: import("prop-types").Requireable<string>;
            };
        };
        loginPage: {
            (props: import("./auth").LoginProps): JSX.Element;
            propTypes: {
                backgroundImage: import("prop-types").Requireable<string>;
                children: import("prop-types").Requireable<import("prop-types").ReactNodeLike>;
                className: import("prop-types").Requireable<string>;
            };
            defaultProps: {
                children: JSX.Element;
            };
        };
        authCallbackPage: () => JSX.Element;
        notification: {
            (props: import("./layout").NotificationProps): JSX.Element;
            propTypes: {
                type: import("prop-types").Requireable<string>;
                autoHideDuration: import("prop-types").Requireable<number>;
                multiLine: import("prop-types").Requireable<boolean>;
            };
        };
    };
};
export interface AdminUIProps extends CoreAdminUIProps {
    notification?: ComponentType;
}
//# sourceMappingURL=AdminUI.d.ts.map