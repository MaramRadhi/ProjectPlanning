import * as React from 'react';
export declare const listFieldTypes: {
    table: {
        component: (props: any) => JSX.Element;
        representation: (props: any, children: any) => string;
    };
    array: {
        component: ({ children, ...props }: {
            [x: string]: any;
            children: any;
        }) => JSX.Element;
        representation: (props: any, children: any) => string;
    };
    boolean: {
        component: React.FunctionComponent<import("../field").BooleanFieldProps>;
        representation: (props: any) => string;
    };
    date: {
        component: React.FC<import("../field").DateFieldProps>;
        representation: (props: any) => string;
    };
    email: {
        component: React.FC<import("../field").EmailFieldProps>;
        representation: (props: any) => string;
    };
    id: {
        component: React.FC<import("../field").TextFieldProps>;
        representation: (props: any) => string;
    };
    number: {
        component: React.FC<import("../field").NumberFieldProps>;
        representation: (props: any) => string;
    };
    reference: {
        component: React.FC<import("../field").ReferenceFieldProps<any>>;
        representation: (props: any) => string;
    };
    referenceChild: {
        component: () => JSX.Element;
        representation: () => string;
    };
    referenceArray: {
        component: React.FC<import("../field").ReferenceArrayFieldProps>;
        representation: (props: any) => string;
    };
    referenceArrayChild: {
        component: () => JSX.Element;
        representation: () => string;
    };
    richText: any;
    string: {
        component: React.FC<import("../field").TextFieldProps>;
        representation: (props: any) => string;
    };
    url: {
        component: React.FC<import("../field").UrlFieldProps>;
        representation: (props: any) => string;
    };
};
//# sourceMappingURL=listFieldTypes.d.ts.map