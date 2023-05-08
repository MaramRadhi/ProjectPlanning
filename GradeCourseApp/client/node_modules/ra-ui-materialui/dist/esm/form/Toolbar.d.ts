import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ToolbarProps as MuiToolbarProps } from '@mui/material';
/**
 * The Toolbar displayed at the bottom of forms.
 *
 * @example Always enable the <SaveButton />
 *
 * import * as React from 'react';
 * import {
 *     Create,
 *     DateInput,
 *     TextInput,
 *     SimpleForm,
 *     Toolbar,
 *     SaveButton,
 *     required,
 * } from 'react-admin';
 *
 * const now = new Date();
 * const defaultSort = { field: 'title', order: 'ASC' };
 *
 * const MyToolbar = props => (
 *     <Toolbar {...props} >
 *         <SaveButton alwaysEnable />
 *     </Toolbar>
 * );
 *
 * const CommentCreate = () => (
 *     <Create>
 *         <SimpleForm redirect={false} toolbar={<MyToolbar />}>
 *             <TextInput
 *                 source="author.name"
 *                 fullWidth
 *             />
 *             <DateInput source="created_at" defaultValue={now} />
 *             <TextInput source="body" fullWidth={true} multiline={true} />
 *         </SimpleForm>
 *     </Create>
 * );
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <SimpleForm>)
 * @prop {ReactElement[]} children Customize the buttons you want to display in the <Toolbar>.
 *
 */
export declare const Toolbar: {
    (props: ToolbarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
    };
};
export interface ToolbarProps extends Omit<MuiToolbarProps, 'classes'> {
    children?: ReactNode;
    className?: string;
    resource?: string;
}
export declare const ToolbarClasses: {
    desktopToolbar: string;
    mobileToolbar: string;
    defaultToolbar: string;
};
//# sourceMappingURL=Toolbar.d.ts.map