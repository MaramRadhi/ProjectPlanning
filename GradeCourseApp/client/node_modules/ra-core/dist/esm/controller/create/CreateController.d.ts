/// <reference types="react" />
import { CreateControllerProps, CreateControllerResult } from './useCreateController';
/**
 * Render prop version of the useCreateController hook
 *
 * @see useCreateController
 * @example
 *
 * const CreateView = () => <div>...</div>
 * const MyCreate = props => (
 *     <CreateController {...props}>
 *         {controllerProps => <CreateView {...controllerProps} {...props} />}
 *     </CreateController>
 * );
 */
export declare const CreateController: ({ children, ...props }: {
    children: (params: CreateControllerResult) => JSX.Element;
} & CreateControllerProps<import("../..").RaRecord, unknown>) => JSX.Element;
//# sourceMappingURL=CreateController.d.ts.map