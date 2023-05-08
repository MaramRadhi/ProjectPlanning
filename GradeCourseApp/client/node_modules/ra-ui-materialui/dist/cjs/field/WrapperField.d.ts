import { ReactNode } from 'react';
import { PublicFieldProps, InjectedFieldProps } from './types';
/**
 * A field rendering its children.
 *
 * Designed as a wrapper for several fields, to support props read by
 * the parent element (e.g. `<SimpleShowLayout>`, `<Datagrid`).
 *
 * @example
 * import { WrapperField, TextField } from 'react-admin';
 *
 * const PostShow = () => (
 *    <Show>
 *        <SimpleShowLayout>
 *            <WrapperField label="author" sortBy="last_name">
 *               <TextField source="first_name" />
 *               <TextField source="last_name" />
 *            </WrapperField>
 *       </SimpleShowLayout>
 *   </Show>
 * );
 */
export declare const WrapperField: {
    ({ children }: WrapperFieldProps): JSX.Element;
    displayName: string;
    propTypes: {
        sortBy: import("prop-types").Requireable<string>;
        sortByOrder: import("prop-types").Requireable<"ASC" | "DESC">;
        source: import("prop-types").Requireable<string>;
        label: import("prop-types").Requireable<NonNullable<string | boolean | import("prop-types").ReactElementLike>>;
        sortable: import("prop-types").Requireable<boolean>;
        className: import("prop-types").Requireable<string>;
        cellClassName: import("prop-types").Requireable<string>;
        headerClassName: import("prop-types").Requireable<string>;
        textAlign: import("prop-types").Requireable<"inherit" | "left" | "right" | "center" | "justify">;
        emptyText: import("prop-types").Requireable<string>;
    };
};
export interface WrapperFieldProps extends PublicFieldProps, InjectedFieldProps {
    children: ReactNode;
}
//# sourceMappingURL=WrapperField.d.ts.map