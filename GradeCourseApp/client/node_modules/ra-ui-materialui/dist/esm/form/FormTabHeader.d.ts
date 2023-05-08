import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TabProps as MuiTabProps } from '@mui/material';
export declare const FormTabHeader: {
    ({ count, label, value, icon, className, onChange, syncWithLocation, ...rest }: FormTabHeaderProps): ReactElement;
    propTypes: {
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        count: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        intent: PropTypes.Requireable<string>;
        hidden: PropTypes.Requireable<boolean>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike>>>;
        margin: PropTypes.Requireable<string>;
        path: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        value: PropTypes.Requireable<NonNullable<string | number>>;
        variant: PropTypes.Requireable<string>;
    };
};
interface FormTabHeaderProps extends Omit<MuiTabProps, 'children'> {
    className?: string;
    count?: ReactNode;
    hidden?: boolean;
    icon?: ReactElement;
    intent?: 'header' | 'content';
    label: string | ReactElement;
    margin?: 'none' | 'normal' | 'dense';
    onChange?: (event: any) => void;
    path?: string;
    resource?: string;
    syncWithLocation?: boolean;
    value?: string | number;
    variant?: 'standard' | 'outlined' | 'filled';
}
export {};
//# sourceMappingURL=FormTabHeader.d.ts.map