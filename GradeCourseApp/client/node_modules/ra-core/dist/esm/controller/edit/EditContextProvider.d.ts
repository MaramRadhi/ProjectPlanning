import { ReactNode } from 'react';
import { EditControllerResult } from './useEditController';
/**
 * Create an Edit Context.
 *
 * @example
 *
 * const MyEdit = (props) => {
 *     const controllerProps = useEditController(props);
 *     return (
 *         <EditContextProvider value={controllerProps}>
 *             <MyEditView>
 *         </EditContextProvider>
 *     );
 * };
 *
 * const MyEditView = () => {
 *     const record = useRecordContext();
 *     // or, to rerender only when the save operation change but not data
 *     const { saving } = useEditContext();
 * }
 *
 * @see EditContext
 * @see RecordContext
 */
export declare const EditContextProvider: ({ children, value, }: {
    children: ReactNode;
    value: EditControllerResult;
}) => JSX.Element;
//# sourceMappingURL=EditContextProvider.d.ts.map