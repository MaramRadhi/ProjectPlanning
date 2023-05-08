import * as React from 'react';
import { ResourceDefinition } from '../types';
export declare type ResourceDefinitions = {
    [name: string]: ResourceDefinition;
};
export declare type ResourceDefinitionContextValue = {
    definitions: ResourceDefinitions;
    register: (config: ResourceDefinition) => void;
    unregister: (config: ResourceDefinition) => void;
};
export declare const ResourceDefinitionContext: React.Context<ResourceDefinitionContextValue>;
/**
 * Context to store the current resource Definition.
 *
 * Use the useResourceDefinition() hook to read the context.
 *
 * @example
 *
 * import { useResourceDefinition, useTranslate } from 'ra-core';
 *
 * const PostMenuItem = () => {
 *     const { name, icon } = useResourceDefinition({ resource: 'posts' });
 *
 *     return (
 *          <MenuItem>
 *              <ListItemIcon>{icon}</ListItemIcon>
 *              {name}
 *          </MenuItem>
 *     );
 * };
 */
export declare const ResourceDefinitionContextProvider: ({ definitions: defaultDefinitions, children, }: {
    definitions?: ResourceDefinitions;
    children: React.ReactNode;
}) => JSX.Element;
//# sourceMappingURL=ResourceDefinitionContext.d.ts.map