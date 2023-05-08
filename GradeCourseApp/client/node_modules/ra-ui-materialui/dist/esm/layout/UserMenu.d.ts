import { ReactNode } from 'react';
import PropTypes from 'prop-types';
/**
 * The UserMenu component renders a Mui Button that shows a Menu.
 * It accepts children that must be Mui MenuItem components.
 *
 * @example
 * import { Logout, UserMenu, useUserMenu } from 'react-admin';
 * import MenuItem from '@mui/material/MenuItem';
 * import ListItemIcon from '@mui/material/ListItemIcon';
 * import ListItemText from '@mui/material/ListItemText';
 * import SettingsIcon from '@mui/icons-material/Settings';

 * const ConfigurationMenu = React.forwardRef((props, ref) => {
 *     const { onClose } = useUserMenu();
 *     return (
 *         <MenuItem
 *             ref={ref}
 *             {...props}
 *             to="/configuration"
 *             onClick={onClose}
 *         >
 *             <ListItemIcon>
 *                 <SettingsIcon />
 *             </ListItemIcon>
 *             <ListItemText>Configuration</ListItemText>
 *         </MenuItem>
 *     );
 * });
 *
 * export const MyUserMenu = () => (
 *     <UserMenu>
 *         <ConfigurationMenu />
 *         <Logout />
 *     </UserMenu>
 * );
 * @param props
 * @param {ReactNode} props.children React node/s to be rendered as children of the UserMenu. Must be Mui MenuItem components
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.label The label of the UserMenu button. Accepts translation keys
 * @param {Element} props.icon The icon of the UserMenu button.
 *
 */
export declare const UserMenu: {
    (props: UserMenuProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export interface UserMenuProps {
    children?: ReactNode;
    className?: string;
    label?: string;
    icon?: ReactNode;
}
export declare const UserMenuClasses: {
    userButton: string;
    avatar: string;
};
//# sourceMappingURL=UserMenu.d.ts.map