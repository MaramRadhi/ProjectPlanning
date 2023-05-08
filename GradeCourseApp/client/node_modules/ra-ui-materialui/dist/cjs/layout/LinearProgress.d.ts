/// <reference types="react" />
import { LinearProgressProps as ProgressProps } from '@mui/material/LinearProgress';
import PropTypes from 'prop-types';
/**
 * Progress bar formatted to replace an input or a field in a form layout
 *
 * Avoids visual jumps when replaced by value or form input
 *
 * @see ReferenceField
 * @see ReferenceInput
 *
 * @typedef {Object} Props the props you can use
 * @prop {Object} classes CSS class names
 * @prop {string} className CSS class applied to the LinearProgress component
 * @prop {integer} timeout Milliseconds to wait before showing the progress bar. One second by default
 *
 * @param {Props} props
 */
export declare const LinearProgress: {
    ({ timeout, ...props }: LinearProgressProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        timeout: PropTypes.Requireable<number>;
    };
    displayName: string;
};
export interface LinearProgressProps extends ProgressProps {
    timeout?: number;
}
//# sourceMappingURL=LinearProgress.d.ts.map