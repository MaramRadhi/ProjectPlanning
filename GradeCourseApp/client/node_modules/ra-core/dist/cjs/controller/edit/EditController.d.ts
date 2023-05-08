/// <reference types="react" />
import { EditControllerProps, EditControllerResult } from './useEditController';
/**
 * Render prop version of the useEditController hook
 *
 * @see useEditController
 * @example
 *
 * const EditView = () => <div>...</div>
 * const MyEdit = props => (
 *     <EditController {...props}>
 *         {controllerProps => <EditView {...controllerProps} {...props} />}
 *     </EditController>
 * );
 */
export declare const EditController: ({ children, ...props }: {
    children: (params: EditControllerResult) => JSX.Element;
} & EditControllerProps<any, unknown>) => JSX.Element;
//# sourceMappingURL=EditController.d.ts.map