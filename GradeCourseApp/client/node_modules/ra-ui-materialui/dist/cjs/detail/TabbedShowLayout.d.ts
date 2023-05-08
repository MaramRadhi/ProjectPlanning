import { ReactElement, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveStyleValue, SxProps } from '@mui/system';
import { RaRecord } from 'ra-core';
/**
 * Layout for a Show view showing fields grouped in tabs and laid out in a single column.
 *
 * It pulls the record from the RecordContext. It renders a set of `<Tabs>`,
 * each of which contains a list of record fields in a single-column layout
 * (via MUI's `<Stack>` component).
 * `<TabbedShowLayout>` delegates the actual rendering of fields to its children,
 * which should be `<TabbedShowLayout.Tab>` components.
 * `<TabbedShowLayout.Tab>` wraps each field inside a `<Labeled>` component to add a label.
 *
 * @example
 * // in src/posts.js
 * import * as React from "react";
 * import { Show, TabbedShowLayout, TextField } from 'react-admin';
 *
 * export const PostShow = () => (
 *     <Show>
 *         <TabbedShowLayout>
 *             <TabbedShowLayout.Tab label="Content">
 *                 <TextField source="title" />
 *                 <TextField source="subtitle" />
 *            </TabbedShowLayout.Tab>
 *             <TabbedShowLayout.Tab label="Metadata">
 *                 <TextField source="category" />
 *            </TabbedShowLayout.Tab>
 *         </TabbedShowLayout>
 *     </Show>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostShow } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" show={PostShow} />
 *     </Admin>
 * );
 *
 * @param {TabbedShowLayoutProps} props
 * @param {string} props.className A className to apply to the page content.
 * @param {ElementType} props.component The component to use as root component (div by default).
 * @param {ReactNode} props.divider An optional divider between each field, passed to `<Stack>`.
 * @param {number} props.spacing The spacing to use between each field, passed to `<Stack>`. Defaults to 1.
 * @param {Object} props.sx Custom style object.
 * @param {boolean} props.syncWithLocation Whether to update the URL when the tab changes. Defaults to true.
 * @param {ElementType} props.tabs A custom component for rendering tabs.
 */
export declare const TabbedShowLayout: {
    (props: TabbedShowLayoutProps): JSX.Element;
    Tab: {
        ({ children, contentClassName, context, count, className, divider, icon, label, record, spacing, syncWithLocation, value, ...rest }: import("./Tab").TabProps): JSX.Element;
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
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<object>;
        spacing: PropTypes.Requireable<any>;
        sx: PropTypes.Requireable<any>;
        syncWithLocation: PropTypes.Requireable<boolean>;
        tabs: PropTypes.Requireable<PropTypes.ReactElementLike>;
        value: PropTypes.Requireable<number>;
    };
};
export interface TabbedShowLayoutProps {
    children: ReactNode;
    className?: string;
    divider?: ReactNode;
    record?: RaRecord;
    rootPath?: string;
    spacing?: ResponsiveStyleValue<number | string>;
    sx?: SxProps;
    syncWithLocation?: boolean;
    tabs?: ReactElement;
    value?: any;
}
export declare const TabbedShowLayoutClasses: {
    content: string;
};
//# sourceMappingURL=TabbedShowLayout.d.ts.map