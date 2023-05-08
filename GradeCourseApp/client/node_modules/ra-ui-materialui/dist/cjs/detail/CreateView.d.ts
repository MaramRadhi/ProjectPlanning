import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { RaRecord, CreateControllerProps } from 'ra-core';
import { CreateProps } from '../types';
export declare const CreateView: {
    (props: CreateViewProps): JSX.Element;
    propTypes: {
        actions: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        defaultTitle: PropTypes.Requireable<any>;
        hasList: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        mutationOptions: PropTypes.Requireable<object>;
        record: PropTypes.Requireable<object>;
        redirect: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        resource: PropTypes.Requireable<string>;
        save: PropTypes.Requireable<(...args: any[]) => any>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
interface CreateViewProps<RecordType extends RaRecord = any> extends CreateProps<RecordType>, Omit<CreateControllerProps<RecordType>, 'resource'> {
    children: ReactNode;
}
export declare const CreateClasses: {
    main: string;
    noActions: string;
    card: string;
};
export {};
//# sourceMappingURL=CreateView.d.ts.map