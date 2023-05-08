import { ReactElement, ElementType } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps as MuiButtonProps, PropTypes as MuiPropTypes } from '@mui/material';
import { Path } from 'react-router';
/**
 * A generic Button with side icon. Only the icon is displayed on small screens.
 *
 * The component translates the label. Pass the icon as child.
 * The icon displays on the left side of the button by default. Set alignIcon prop to 'right' to inverse.
 *
 * @example
 *
 * <Button label="Edit" color="secondary" onClick={doEdit}>
 *   <ContentCreate />
 * </Button>
 *
 */
export declare const Button: {
    (props: ButtonProps): JSX.Element;
    propTypes: {
        alignIcon: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        color: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        size: PropTypes.Requireable<string>;
    };
};
interface Props {
    alignIcon?: 'left' | 'right';
    children?: ReactElement;
    className?: string;
    color?: MuiPropTypes.Color;
    component?: ElementType;
    to?: string | LocationDescriptor;
    disabled?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: string;
}
export declare type ButtonProps = Props & MuiButtonProps;
export declare type LocationDescriptor = Partial<Path> & {
    redirect?: boolean;
    state?: any;
    replace?: boolean;
};
export {};
//# sourceMappingURL=Button.d.ts.map