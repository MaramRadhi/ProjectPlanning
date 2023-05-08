import { ReactElement } from 'react';
import { AdminChildren, ResourceDefinition, ResourceProps } from '../types';
import { CustomRoutesProps } from './CustomRoutes';
/**
 * This hook inspects the CoreAdminRouter children and returns them separated in three groups:
 * - Custom routes without layout
 * - Custom routes with layout
 * - Resources
 *
 * It also returns a status:
 * - loading: still loading children from a function child
 * - empty: no resources were provided among children
 * - ready: admin is ready to be rendered
 *
 * @example
 * const {
 *    customRoutesWithLayout,
 *    customRoutesWithoutLayout,
 *    resources,
 *    status,
 * } = useConfigureAdminRouterFromChildren(children);
 */
export declare const useConfigureAdminRouterFromChildren: (children: AdminChildren) => RoutesAndResources & {
    status: AdminRouterStatus;
};
declare type RoutesAndResources = {
    customRoutesWithLayout: ReactElement<CustomRoutesProps>[];
    customRoutesWithoutLayout: ReactElement<CustomRoutesProps>[];
    resources: (ReactElement<ResourceProps> & ResourceWithRegisterFunction)[];
};
declare type ResourceWithRegisterFunction = {
    registerResource: (props: ResourceProps, permissions: any) => ResourceDefinition;
};
declare type AdminRouterStatus = 'loading' | 'empty' | 'ready';
export {};
//# sourceMappingURL=useConfigureAdminRouterFromChildren.d.ts.map