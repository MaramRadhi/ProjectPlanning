import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { EditControllerProps } from 'ra-core';
import { EditProps } from '../types';
export declare const EditView: {
    (props: EditViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        component: (props: any, propName: any, componentName: any) => Error;
        defaultTitle: PropTypes.Requireable<any>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        mutationMode: PropTypes.Requireable<string>;
        mutationOptions: PropTypes.Requireable<object>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        resource: PropTypes.Requireable<string>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
interface EditViewProps extends EditProps, Omit<EditControllerProps, 'resource'> {
    children: ReactNode;
}
export declare const EditClasses: {
    main: string;
    noActions: string;
    card: string;
};
export {};
//# sourceMappingURL=EditView.d.ts.map