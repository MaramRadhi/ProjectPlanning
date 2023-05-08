import { FunctionComponent, ReactElement } from 'react';
import { MenuItemProps } from '@mui/material/MenuItem';
/**
 * Logout button component, to be passed to the Admin component
 *
 * Used for the Logout Menu item in the sidebar
 */
export declare const Logout: FunctionComponent<LogoutProps & MenuItemProps<'li'>>;
export declare const LogoutClasses: {
    icon: string;
};
export interface LogoutProps {
    className?: string;
    redirectTo?: string;
    icon?: ReactElement;
}
//# sourceMappingURL=Logout.d.ts.map