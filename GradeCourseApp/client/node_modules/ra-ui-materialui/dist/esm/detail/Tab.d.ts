import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { TabProps as MuiTabProps } from '@mui/material';
import { ResponsiveStyleValue } from '@mui/system';
import { RaRecord } from 'ra-core';
/**
 * Tab element for the TabbedShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 * - path: The string used for custom urls
 *
 * It is also available as TabbedShowLayout.Tab.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import FavoriteIcon from '@mui/icons-material/Favorite';
 *     import PersonPinIcon from '@mui/icons-material/PersonPin';
 *     import { Show, TabbedShowLayout, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <TabbedShowLayout.Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </TabbedShowLayout.Tab>
 *                 <TabbedShowLayout.Tab label="Metadata" icon={<PersonIcon />} path="metadata">
 *                     <TextField source="category" />
 *                </TabbedShowLayout.Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
export declare const Tab: {
    ({ children, contentClassName, context, count, className, divider, icon, label, record, spacing, syncWithLocation, value, ...rest }: TabProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        contentClassName: PropTypes.Requireable<string>;
        context: PropTypes.Requireable<string>;
        count: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Validator<NonNullable<NonNullable<string | PropTypes.ReactElementLike>>>;
        path: PropTypes.Requireable<string>;
        spacing: PropTypes.Requireable<any>;
        value: PropTypes.Requireable<NonNullable<string | number>>;
    };
};
export interface TabProps extends Omit<MuiTabProps, 'children'> {
    children: ReactNode;
    contentClassName?: string;
    context?: 'header' | 'content';
    count?: ReactNode;
    className?: string;
    divider?: ReactNode;
    icon?: ReactElement;
    label: string | ReactElement;
    path?: string;
    record?: RaRecord;
    spacing?: ResponsiveStyleValue<number | string>;
    syncWithLocation?: boolean;
    value?: string | number;
}
//# sourceMappingURL=Tab.d.ts.map