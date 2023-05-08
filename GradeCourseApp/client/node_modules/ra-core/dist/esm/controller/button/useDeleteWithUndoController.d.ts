import { ReactEventHandler } from 'react';
import { UseMutationOptions } from 'react-query';
import { RedirectionSideEffect } from '../../routing';
import { RaRecord, DeleteParams } from '../../types';
/**
 * Prepare callback for a Delete button with undo support
 *
 * @example
 *
 * import React from 'react';
 * import ActionDelete from '@mui/icons-material/Delete';
 * import { Button, useDeleteWithUndoController } from 'react-admin';
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const { isLoading, handleDelete } = useDeleteWithUndoController({
 *         resource,
 *         record,
 *         redirect,
 *         onClick,
 *     });
 *
 *     return (
 *         <Button
 *             onClick={handleDelete}
 *             disabled={isLoading}
 *             label="ra.action.delete"
 *             {...rest}
 *         >
 *             <ActionDelete />
 *         </Button>
 *     );
 * };
 */
declare const useDeleteWithUndoController: <RecordType extends RaRecord = any>(props: UseDeleteWithUndoControllerParams<RecordType, unknown>) => UseDeleteWithUndoControllerReturn;
export interface UseDeleteWithUndoControllerParams<RecordType extends RaRecord = any, MutationOptionsError = unknown> {
    record?: RecordType;
    redirect?: RedirectionSideEffect;
    resource?: string;
    onClick?: ReactEventHandler<any>;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteParams<RecordType>>;
}
export interface UseDeleteWithUndoControllerReturn {
    isLoading: boolean;
    handleDelete: ReactEventHandler<any>;
}
export default useDeleteWithUndoController;
//# sourceMappingURL=useDeleteWithUndoController.d.ts.map