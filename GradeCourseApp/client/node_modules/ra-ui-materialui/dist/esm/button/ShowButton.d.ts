import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
import { ButtonProps } from './Button';
interface Props<RecordType extends RaRecord = any> {
    icon?: ReactElement;
    label?: string;
    record?: RecordType;
    resource?: string;
    scrollToTop?: boolean;
}
export declare type ShowButtonProps<RecordType extends RaRecord = any> = Props<RecordType> & ButtonProps;
declare const PureShowButton: React.MemoExoticComponent<{
    <RecordType extends RaRecord = any>(props: ShowButtonProps<RecordType>): JSX.Element;
    propTypes: {
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        scrollToTop: PropTypes.Requireable<boolean>;
    };
}>;
export default PureShowButton;
//# sourceMappingURL=ShowButton.d.ts.map