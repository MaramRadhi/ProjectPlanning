/// <reference types="react" />
import PropTypes from 'prop-types';
import { ListProps } from '@mui/material';
export declare const SimpleListLoading: {
    (props: Props & ListProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        hasLeftAvatarOrIcon: PropTypes.Requireable<boolean>;
        hasRightAvatarOrIcon: PropTypes.Requireable<boolean>;
        hasSecondaryText: PropTypes.Requireable<boolean>;
        hasTertiaryText: PropTypes.Requireable<boolean>;
        nbFakeLines: PropTypes.Requireable<number>;
    };
};
export declare const SimpleListLoadingClasses: {
    primary: string;
    tertiary: string;
};
interface Props {
    className?: string;
    hasLeftAvatarOrIcon?: boolean;
    hasRightAvatarOrIcon?: boolean;
    hasSecondaryText?: boolean;
    hasTertiaryText?: boolean;
    nbFakeLines?: number;
}
export {};
//# sourceMappingURL=SimpleListLoading.d.ts.map