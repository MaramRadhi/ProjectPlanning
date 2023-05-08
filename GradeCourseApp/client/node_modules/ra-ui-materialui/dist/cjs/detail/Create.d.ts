import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
import { CreateProps } from '../types';
/**
 * Page component for the Create view
 *
 * The `<Create>` component renders the page title and actions.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes the `record` as prop.
 *
 * The <Create> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - mutationOptions
 * - title
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Create, SimpleForm, TextInput } from 'react-admin';
 *
 * export const PostCreate = (props) => (
 *     <Create {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostCreate } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" create={PostCreate} />
 *     </Admin>
 * );
 * export default App;
 */
export declare const Create: {
    <RecordType extends RaRecord = any>(props: CreateProps<RecordType, unknown> & {
        children: ReactNode;
    }): ReactElement;
    propTypes: {
        actions: PropTypes.Requireable<NonNullable<boolean | PropTypes.ReactElementLike>>;
        aside: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        disableAuthentication: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        redirect: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        resource: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        record: PropTypes.Requireable<object>;
        mutationOptions: PropTypes.Requireable<object>;
        transform: PropTypes.Requireable<(...args: any[]) => any>;
        sx: PropTypes.Requireable<any>;
    };
};
//# sourceMappingURL=Create.d.ts.map