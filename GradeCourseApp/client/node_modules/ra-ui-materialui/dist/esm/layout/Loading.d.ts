/// <reference types="react" />
import { SxProps } from '@mui/material';
import PropTypes from 'prop-types';
export declare const Loading: {
    (props: LoadingProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        loadingPrimary: PropTypes.Requireable<string>;
        loadingSecondary: PropTypes.Requireable<string>;
    };
    defaultProps: {
        loadingPrimary: string;
        loadingSecondary: string;
    };
};
export interface LoadingProps {
    className?: string;
    loadingPrimary?: string;
    loadingSecondary?: string;
    sx?: SxProps;
}
export declare const LoadingClasses: {
    root: string;
    icon: string;
    message: string;
};
//# sourceMappingURL=Loading.d.ts.map