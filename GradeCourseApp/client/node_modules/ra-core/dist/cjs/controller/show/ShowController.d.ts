/// <reference types="react" />
import { ShowControllerProps, ShowControllerResult } from './useShowController';
/**
 * Render prop version of the useShowController hook
 *
 * @see useShowController
 * @example
 *
 * const ShowView = () => <div>...</div>
 * const MyShow = () => (
 *     <ShowController>
 *         {controllerProps => <ShowView {...controllerProps} {...props} />}
 *     </ShowController>
 * );
 */
export declare const ShowController: ({ children, ...props }: {
    children: (params: ShowControllerResult) => JSX.Element;
} & ShowControllerProps<any>) => JSX.Element;
//# sourceMappingURL=ShowController.d.ts.map