import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
export declare const Title: {
    (props: TitleProps): React.ReactPortal;
    propTypes: {
        defaultTitle: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        title: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
    };
};
export declare const TitlePropType: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike>>;
export interface TitleProps {
    className?: string;
    defaultTitle?: string;
    record?: Partial<RaRecord>;
    title?: string | ReactElement;
    preferenceKey?: string;
}
//# sourceMappingURL=Title.d.ts.map