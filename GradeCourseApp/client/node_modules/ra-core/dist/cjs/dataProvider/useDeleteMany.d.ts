import { UseMutationOptions, UseMutationResult, MutateOptions } from 'react-query';
import { RaRecord, DeleteManyParams, MutationMode } from '../types';
/**
 * Get a callback to call the dataProvider.delete() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The delete parameters { ids }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 * May include a mutation mode (optimistic/pessimistic/undoable), e.g. { mutationMode: 'undoable' }
 *
 * @typedef Params
 * @prop params.ids The resource identifiers, e.g. [123, 456]
 *
 * @returns The current mutation state. Destructure as [deleteMany, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [deleteMany, { isLoading: false, isIdle: true }]
 * - start:   [deleteMany, { isLoading: true }]
 * - success: [deleteMany, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [deleteMany, { error: [error from response], isLoading: false, isError: true }]
 *
 * The deleteMany() function must be called with a resource and a parameter object: deleteMany(resource, { ids, meta }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the deleteMany callback
 *
 * import { useDeleteMany } from 'react-admin';
 *
 * const BulkDeletePostsButton = ({ selectedIds }) => {
 *     const [deleteMany, { isLoading, error }] = useDeleteMany();
 *     const handleClick = () => {
 *         deleteMany('posts', { ids: selectedIds })
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Delete selected posts</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useDeleteMany } from 'react-admin';
 *
 * const BulkDeletePostsButton = ({ selectedIds }) => {
 *     const [deleteMany, { isLoading, error }] = useDeleteMany('posts', { ids: selectedIds });
 *     const handleClick = () => {
 *         deleteMany()
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Delete selected posts</button>;
 * };
 *
 * @example // TypeScript
 * const [deleteMany, { data }] = useDeleteMany<Product>('products', { ids });
 *                        \-- data is Product
 */
export declare const useDeleteMany: <RecordType extends RaRecord = any, MutationError = unknown>(resource?: string, params?: Partial<DeleteManyParams<RecordType>>, options?: UseDeleteManyOptions<RecordType, MutationError>) => UseDeleteManyResult<RecordType, MutationError>;
export interface UseDeleteManyMutateParams<RecordType extends RaRecord = any> {
    resource?: string;
    ids?: RecordType['id'][];
    meta?: any;
}
export declare type UseDeleteManyOptions<RecordType extends RaRecord = any, MutationError = unknown> = UseMutationOptions<RecordType['id'][], MutationError, Partial<UseDeleteManyMutateParams<RecordType>>> & {
    mutationMode?: MutationMode;
};
export declare type UseDeleteManyResult<RecordType extends RaRecord = any, MutationError = unknown> = [
    (resource?: string, params?: Partial<DeleteManyParams<RecordType>>, options?: MutateOptions<RecordType['id'][], MutationError, Partial<UseDeleteManyMutateParams<RecordType>>, unknown> & {
        mutationMode?: MutationMode;
    }) => Promise<void>,
    UseMutationResult<RecordType['id'][], MutationError, Partial<DeleteManyParams<RecordType> & {
        resource?: string;
    }>, unknown>
];
//# sourceMappingURL=useDeleteMany.d.ts.map