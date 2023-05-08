import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { StackProps, TabProps as MuiTabProps } from '@mui/material';
export declare const FormTab: {
    (props: FormTabProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        count: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        intent: PropTypes.Requireable<string>;
        hidden: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike>>>;
        path: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number>>;
    };
    displayName: string;
};
export interface FormTabProps extends Omit<StackProps, 'color'>, Omit<MuiTabProps, 'children' | 'classes' | 'ref'> {
    className?: string;
    children?: ReactNode;
    contentClassName?: string;
    count?: ReactNode;
    hidden?: boolean;
    icon?: ReactElement;
    intent?: 'header' | 'content';
    label: string | ReactElement;
    path?: string;
    resource?: string;
    syncWithLocation?: boolean;
    value?: string | number;
}
//# sourceMappingURL=FormTab.d.ts.map