import { UseMutationOptions, UseMutationResult, MutateOptions } from 'react-query';
import { RaRecord, DeleteParams, MutationMode } from '../types';
/**
 * Get a callback to call the dataProvider.delete() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The delete parameters { id, previousData }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 * May include a mutation mode (optimistic/pessimistic/undoable), e.g. { mutationMode: 'undoable' }
 *
 * @typedef Params
 * @prop params.id The resource identifier, e.g. 123
 * @prop params.previousData The record before the update is applied
 *
 * @returns The current mutation state. Destructure as [deleteOne, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [deleteOne, { isLoading: false, isIdle: true }]
 * - start:   [deleteOne, { isLoading: true }]
 * - success: [deleteOne, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [deleteOne, { error: [error from response], isLoading: false, isError: true }]
 *
 * The deleteOne() function must be called with a resource and a parameter object: deleteOne(resource, { id, previousData, meta }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the deleteOne callback
 *
 * import { useDelete, useRecordContext } from 'react-admin';
 *
 * const DeleteButton = () => {
 *     const record = useRecordContext();
 *     const [deleteOne, { isLoading, error }] = useDelete();
 *     const handleClick = () => {
 *         deleteOne('likes', { id: record.id, previousData: record })
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Delete</div>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useDelete, useRecordContext } from 'react-admin';
 *
 * const DeleteButton = () => {
 *     const record = useRecordContext();
 *     const [deleteOne, { isLoading, error }] = useDelete('likes', { id: record.id, previousData: record });
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={() => deleteOne()}>Delete</button>;
 * };
 *
 * @example // TypeScript
 * const [delete, { data }] = useDelete<Product>('products', { id, previousData: product });
 *                    \-- data is Product
 */
export declare const useDelete: <RecordType extends RaRecord = any, MutationError = unknown>(resource?: string, params?: Partial<DeleteParams<RecordType>>, options?: UseDeleteOptions<RecordType, MutationError>) => UseDeleteResult<RecordType, MutationError>;
export interface UseDeleteMutateParams<RecordType extends RaRecord = any> {
    resource?: string;
    id?: RecordType['id'];
    data?: Partial<RecordType>;
    previousData?: any;
    meta?: any;
}
export declare type UseDeleteOptions<RecordType extends RaRecord = any, MutationError = unknown> = UseMutationOptions<RecordType, MutationError, Partial<UseDeleteMutateParams<RecordType>>> & {
    mutationMode?: MutationMode;
};
export declare type UseDeleteResult<RecordType extends RaRecord = any, MutationError = unknown> = [
    (resource?: string, params?: Partial<DeleteParams<RecordType>>, options?: MutateOptions<RecordType, MutationError, Partial<UseDeleteMutateParams<RecordType>>, unknown> & {
        mutationMode?: MutationMode;
    }) => Promise<void>,
    UseMutationResult<RecordType, MutationError, Partial<DeleteParams<RecordType> & {
        resource?: string;
    }>, unknown>
];
//# sourceMappingURL=useDelete.d.ts.map