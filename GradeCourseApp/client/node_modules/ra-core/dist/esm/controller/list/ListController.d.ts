/// <reference types="react" />
import { ListControllerProps, ListControllerResult } from './useListController';
/**
 * Render prop version of the useListController hook.
 *
 * @see useListController
 * @example
 *
 * const ListView = () => <div>...</div>;
 * const List = props => (
 *     <ListController {...props}>
 *        {controllerProps => <ListView {...controllerProps} {...props} />}
 *     </ListController>
 * )
 */
export declare const ListController: ({ children, ...props }: {
    children: (params: ListControllerResult) => JSX.Element;
} & ListControllerProps<any>) => JSX.Element;
//# sourceMappingURL=ListController.d.ts.map