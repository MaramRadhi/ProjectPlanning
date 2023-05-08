import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
interface Props {
    resource?: string;
    icon?: ReactElement;
    scrollToTop?: boolean;
}
export declare type CreateButtonProps = Props & ButtonProps;
export declare const CreateButtonClasses: {
    root: string;
    floating: string;
};
declare const _default: React.MemoExoticComponent<{
    (props: CreateButtonProps): JSX.Element;
    propTypes: {
        resource: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
    };
}>;
export default _default;
//# sourceMappingURL=CreateButton.d.ts.map