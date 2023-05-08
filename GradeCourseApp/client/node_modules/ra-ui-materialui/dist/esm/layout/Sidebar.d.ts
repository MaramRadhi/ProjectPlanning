import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { DrawerProps } from '@mui/material';
export declare const Sidebar: {
    (props: SidebarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<NonNullable<PropTypes.ReactNodeLike>>;
    };
};
export interface SidebarProps extends DrawerProps {
    children: ReactElement;
    closedSize?: number;
    size?: number;
}
export declare const SidebarClasses: {
    docked: string;
    paper: string;
    paperAnchorLeft: string;
    paperAnchorRight: string;
    paperAnchorTop: string;
    paperAnchorBottom: string;
    paperAnchorDockedLeft: string;
    paperAnchorDockedTop: string;
    paperAnchorDockedRight: string;
    paperAnchorDockedBottom: string;
    modal: string;
    fixed: string;
    appBarCollapsed: string;
};
export declare const DRAWER_WIDTH = 240;
export declare const CLOSED_DRAWER_WIDTH = 55;
//# sourceMappingURL=Sidebar.d.ts.map