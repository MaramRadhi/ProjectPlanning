/// <reference types="react" />
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
/**
 * Action Toolbar for the Show view
 *
 * Internal component. If you want to add or remove actions for a Show view,
 * write your own ShowActions Component. Then, in the <Show> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, ShowButton, Show } from 'react-admin';
 *
 *     const PostShowActions = () => (
 *         <TopToolbar>
 *             <ShowButton />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostShow = (props) => (
 *         <Show actions={<PostShowActions />} {...props}>
 *             ...
 *         </Show>
 *     );
 */
export declare const ShowActions: {
    (props: ShowActionsProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
    };
};
export interface ShowActionsProps {
    className?: string;
    record?: RaRecord;
}
//# sourceMappingURL=ShowActions.d.ts.map