/// <reference types="react" />
import PropTypes from 'prop-types';
/**
 * Action Toolbar for the Create view
 *
 * Internal component. If you want to add or remove actions for a Create view,
 * write your own CreateActions Component. Then, in the <Create> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, Create, ListButton } from 'react-admin';
 *
 *     const PostCreateActions = () => (
 *         <TopToolbar>
 *             <ListButton />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostCreate = (props) => (
 *         <Create actions={<PostCreateActions />} {...props}>
 *             ...
 *         </Create>
 *     );
 */
export declare const CreateActions: {
    ({ className, ...rest }: CreateActionsProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        hasCreate: PropTypes.Requireable<boolean>;
        hasEdit: PropTypes.Requireable<boolean>;
        hasShow: PropTypes.Requireable<boolean>;
        hasList: PropTypes.Requireable<boolean>;
        resource: PropTypes.Requireable<string>;
    };
};
export interface CreateActionsProps {
    className?: string;
    hasCreate?: boolean;
    hasEdit?: boolean;
    hasList?: boolean;
    hasShow?: boolean;
    resource?: string;
}
//# sourceMappingURL=CreateActions.d.ts.map