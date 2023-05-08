import { ReactEventHandler, SyntheticEvent } from 'react';
import { UseMutationOptions } from 'react-query';
import { RedirectionSideEffect } from '../../routing';
import { RaRecord, MutationMode, DeleteParams } from '../../types';
/**
 * Prepare a set of callbacks for a delete button guarded by confirmation dialog
 *
 * @example
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const {
 *         open,
 *         isLoading,
 *         handleDialogOpen,
 *         handleDialogClose,
 *         handleDelete,
 *     } = useDeleteWithConfirmController({
 *         resource,
 *         record,
 *         redirect,
 *         onClick,
 *     });
 *
 *     return (
 *         <Fragment>
 *             <Button
 *                 onClick={handleDialogOpen}
 *                 label="ra.action.delete"
 *                 {...rest}
 *             >
 *                 {icon}
 *             </Button>
 *             <Confirm
 *                 isOpen={open}
 *                 loading={isLoading}
 *                 title="ra.message.delete_title"
 *                 content="ra.message.delete_content"
 *                 translateOptions={{
 *                     name: resource,
 *                     id: record.id,
 *                 }}
 *                 onConfirm={handleDelete}
 *                 onClose={handleDialogClose}
 *             />
 *         </Fragment>
 *     );
 * };
 */
declare const useDeleteWithConfirmController: <RecordType extends RaRecord = any>(props: UseDeleteWithConfirmControllerParams<RecordType, unknown>) => UseDeleteWithConfirmControllerReturn;
export interface UseDeleteWithConfirmControllerParams<RecordType extends RaRecord = any, MutationOptionsError = unknown> {
    mutationMode?: MutationMode;
    record?: RecordType;
    redirect?: RedirectionSideEffect;
    resource?: string;
    onClick?: ReactEventHandler<any>;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteParams<RecordType>>;
}
export interface UseDeleteWithConfirmControllerReturn {
    open: boolean;
    isLoading: boolean;
    handleDialogOpen: (e: SyntheticEvent) => void;
    handleDialogClose: (e: SyntheticEvent) => void;
    handleDelete: ReactEventHandler<any>;
}
export default useDeleteWithConfirmController;
//# sourceMappingURL=useDeleteWithConfirmController.d.ts.map