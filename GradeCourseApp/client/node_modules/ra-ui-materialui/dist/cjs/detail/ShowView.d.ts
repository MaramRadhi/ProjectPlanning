/// <reference types="react" />
import PropTypes from 'prop-types';
import { ShowProps } from '../types';
export declare const ShowView: {
    (props: ShowViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        emptyWhileLoading: PropTypes.Requireable<boolean>;
        title: PropTypes.Requireable<any>;
    };
};
export declare type ShowViewProps = ShowProps;
export declare const ShowClasses: {
    main: string;
    noActions: string;
    card: string;
};
//# sourceMappingURL=ShowView.d.ts.map