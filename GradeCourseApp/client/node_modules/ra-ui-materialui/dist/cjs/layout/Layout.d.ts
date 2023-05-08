import { ErrorInfo, ReactNode, ComponentType, HtmlHTMLAttributes } from 'react';
import { SxProps } from '@mui/material/styles';
import { CoreLayoutProps } from 'ra-core';
import { AppBarProps } from './AppBar';
import { MenuProps } from './Menu';
import { ErrorProps } from './Error';
export declare const Layout: (props: LayoutProps) => JSX.Element;
export interface LayoutProps extends CoreLayoutProps, Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
    appBar?: ComponentType<AppBarProps>;
    className?: string;
    error?: ComponentType<ErrorProps>;
    menu?: ComponentType<MenuProps>;
    sidebar?: ComponentType<{
        children: ReactNode;
    }>;
    sx?: SxProps;
}
export interface LayoutState {
    hasError: boolean;
    error?: Error;
    errorInfo?: ErrorInfo;
}
export declare const LayoutClasses: {
    appFrame: string;
    contentWithSidebar: string;
    content: string;
};
//# sourceMappingURL=Layout.d.ts.map