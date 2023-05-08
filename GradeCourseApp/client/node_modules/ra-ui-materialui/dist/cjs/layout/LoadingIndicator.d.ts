/// <reference types="react" />
import PropTypes from 'prop-types';
import { SxProps } from '@mui/system';
export declare const LoadingIndicator: {
    (props: LoadingIndicatorProps): JSX.Element;
    propTypes: {
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        width: PropTypes.Requireable<string>;
    };
};
interface LoadingIndicatorProps {
    className?: string;
    sx?: SxProps;
}
export declare const LoadingIndicatorClasses: {
    loader: string;
    loadedIcon: string;
};
export {};
//# sourceMappingURL=LoadingIndicator.d.ts.map