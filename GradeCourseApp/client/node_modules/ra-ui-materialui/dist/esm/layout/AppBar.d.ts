import * as React from 'react';
import { FC } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material';
/**
 * The AppBar component renders a custom MuiAppBar.
 *
 * @param {Object} props
 * @param {ReactNode} props.children React node/s to be rendered as children of the AppBar
 * @param {string} props.className CSS class applied to the MuiAppBar component
 * @param {string} props.color The color of the AppBar
 * @param {Element | boolean} props.userMenu A custom user menu component for the AppBar. <UserMenu/> component by default. Pass false to disable.
 *
 * @example // add a custom button to the AppBar
 *
 * const MyAppBar = () => (
 *   <AppBar>
 *     <TitlePortal />
 *     <MyCustomButton />
 *   </AppBar>
 * );
 *
 * @example // without a user menu
 *
 * const MyAppBar = () => <AppBar userMenu={false} />;
 */
export declare const AppBar: FC<AppBarProps>;
export interface AppBarProps extends Omit<MuiAppBarProps, 'title'> {
    alwaysOn?: boolean;
    container?: React.ElementType<any>;
    /**
     * @deprecated injected by Layout but not used by this AppBar
     */
    open?: boolean;
    /**
     * @deprecated injected by Layout but not used by this AppBar
     */
    title?: string | JSX.Element;
    toolbar?: JSX.Element;
    userMenu?: JSX.Element | boolean;
}
export declare const AppBarClasses: {
    appBar: string;
    toolbar: string;
    menuButton: string;
    menuButtonIconClosed: string;
    menuButtonIconOpen: string;
    title: string;
};
//# sourceMappingURL=AppBar.d.ts.map