import { ComponentType, ErrorInfo, HtmlHTMLAttributes } from 'react';
import { FallbackProps } from 'react-error-boundary';
import PropTypes from 'prop-types';
import { TitleComponent } from 'ra-core';
export declare const Error: {
    (props: InternalErrorProps & {
        errorComponent?: ComponentType<ErrorProps>;
    }): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        error: PropTypes.Validator<object>;
        errorInfo: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
    };
};
interface InternalErrorProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'>, FallbackProps, ErrorProps {
    className?: string;
}
export interface ErrorProps extends Pick<FallbackProps, 'error'> {
    errorInfo?: ErrorInfo;
    title?: TitleComponent;
}
export declare const ErrorClasses: {
    container: string;
    title: string;
    icon: string;
    panel: string;
    panelSumary: string;
    panelDetails: string;
    toolbar: string;
    advice: string;
};
export {};
//# sourceMappingURL=Error.d.ts.map