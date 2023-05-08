/// <reference types="react" />
import PropTypes from 'prop-types';
import { MenuItemLinkProps } from './MenuItemLink';
import { To } from 'history';
export declare const DashboardMenuItem: {
    (props: DashboardMenuItemProps): JSX.Element;
    propTypes: {
        leftIcon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        locale: PropTypes.Requireable<string>;
        onClick: PropTypes.Requireable<(...args: any[]) => any>;
        dense: PropTypes.Requireable<boolean>;
        sidebarIsOpen: PropTypes.Requireable<boolean>;
    };
};
export interface DashboardMenuItemProps extends Omit<MenuItemLinkProps, 'to'> {
    to?: To;
    /**
     * @deprecated
     */
    sidebarIsOpen?: boolean;
}
//# sourceMappingURL=DashboardMenuItem.d.ts.map