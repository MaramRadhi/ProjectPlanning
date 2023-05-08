import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { IconButtonProps } from '@mui/material/IconButton';
export declare const RefreshIconButton: {
    (props: RefreshIconButtonProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
interface Props {
    className?: string;
    icon?: ReactElement;
    label?: string;
    onClick?: (e: MouseEvent) => void;
}
export declare type RefreshIconButtonProps = Props & IconButtonProps;
export {};
//# sourceMappingURL=RefreshIconButton.d.ts.map