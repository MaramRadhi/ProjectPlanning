import * as React from 'react';
import { ResourceProps } from '../types';
export declare const Resource: {
    (props: ResourceProps): JSX.Element;
    raName: string;
    registerResource({ create, edit, icon, list, name, options, show, recordRepresentation, hasCreate, hasEdit, hasShow, }: ResourceProps): {
        name: string;
        options: import("../types").ResourceOptions;
        hasList: boolean;
        hasCreate: boolean;
        hasEdit: boolean;
        hasShow: boolean;
        icon: React.ComponentType<any>;
        recordRepresentation: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | import("../types").RecordToStringFunction;
    };
};
//# sourceMappingURL=Resource.d.ts.map