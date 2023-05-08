import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
export declare const CloneButton: {
    (props: CloneButtonProps): JSX.Element;
    propTypes: {
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
    };
};
interface Props {
    record?: any;
    icon?: ReactElement;
    scrollToTop?: boolean;
}
export declare type CloneButtonProps = Props & ButtonProps;
declare const _default: React.MemoExoticComponent<{
    (props: CloneButtonProps): JSX.Element;
    propTypes: {
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
    };
}>;
export default _default;
//# sourceMappingURL=CloneButton.d.ts.map