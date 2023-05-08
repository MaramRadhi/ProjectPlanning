import { ResourceDefinitions } from './ResourceDefinitionContext';
/**
 * Get the definition of the all resources
 *
 * @example
 *
 * const definitions = useResourceDefinitions();
 * console.log(definitions.posts);
 * // {
 * //   name: 'posts',
 * //   hasList: true,
 * //   hasEdit: true,
 * //   hasShow: true,
 * //   hasCreate: true,
 * //   options: {},
 * //   icon: PostIcon,
 * //   recordRepresentation: 'title',
 * // }
 */
export declare const useResourceDefinitions: () => ResourceDefinitions;
//# sourceMappingURL=useResourceDefinitions.d.ts.map