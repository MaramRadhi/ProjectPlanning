import { ComponentType, ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { SxProps } from '@mui/material';
export declare const TabbedFormView: {
    (props: TabbedFormViewProps): ReactElement;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        location: PropTypes.Requireable<object>;
        match: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        tabs: PropTypes.Requireable<PropTypes.ReactElementLike>;
        toolbar: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        validate: PropTypes.Requireable<(...args: any[]) => any>;
        value: PropTypes.Requireable<number>;
    };
};
export interface TabbedFormViewProps {
    children?: ReactNode;
    className?: string;
    component?: ComponentType<any>;
    resource?: string;
    formRootPathname?: string;
    syncWithLocation?: boolean;
    tabs?: ReactElement;
    toolbar?: ReactElement | false;
    sx?: SxProps;
}
export declare const TabbedFormClasses: {
    errorTabButton: string;
};
//# sourceMappingURL=TabbedFormView.d.ts.map