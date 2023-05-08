import { ComponentType } from 'react';
import { TitleComponent, LoginComponent, LayoutComponent, AdminChildren, CatchAllComponent, DashboardComponent, LoadingComponent } from '../types';
export declare type ChildrenFunction = () => ComponentType[];
export interface CoreAdminUIProps {
    catchAll?: CatchAllComponent;
    children?: AdminChildren;
    dashboard?: DashboardComponent;
    disableTelemetry?: boolean;
    layout?: LayoutComponent;
    loading?: LoadingComponent;
    authCallbackPage?: ComponentType | boolean;
    loginPage?: LoginComponent | boolean;
    /**
     * @deprecated use a custom layout instead
     */
    menu?: ComponentType;
    requireAuth?: boolean;
    ready?: ComponentType;
    title?: TitleComponent;
}
export declare const CoreAdminUI: (props: CoreAdminUIProps) => JSX.Element;
//# sourceMappingURL=CoreAdminUI.d.ts.map