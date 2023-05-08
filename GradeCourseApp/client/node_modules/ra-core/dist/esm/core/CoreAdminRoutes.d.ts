import { ComponentType } from 'react';
import { AdminChildren, CatchAllComponent, LayoutComponent, LoadingComponent, CoreLayoutProps } from '../types';
export declare const CoreAdminRoutes: {
    (props: CoreAdminRoutesProps): JSX.Element;
    defaultProps: {
        customRoutes: any[];
    };
};
export interface CoreAdminRoutesProps extends CoreLayoutProps {
    layout: LayoutComponent;
    catchAll: CatchAllComponent;
    children?: AdminChildren;
    loading: LoadingComponent;
    requireAuth?: boolean;
    ready?: ComponentType;
}
//# sourceMappingURL=CoreAdminRoutes.d.ts.map