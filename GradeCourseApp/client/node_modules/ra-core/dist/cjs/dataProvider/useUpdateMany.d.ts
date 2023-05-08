import { UseMutationOptions, UseMutationResult, MutateOptions } from 'react-query';
import { RaRecord, UpdateManyParams, MutationMode } from '../types';
/**
 * Get a callback to call the dataProvider.updateMany() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The updateMany parameters { ids, data, meta }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 * May include a mutation mode (optimistic/pessimistic/undoable), e.g. { mutationMode: 'undoable' }
 *
 * @typedef Params
 * @prop params.ids The resource identifiers, e.g. [123, 456]
 * @prop params.data The updates to merge into the record, e.g. { views: 10 }
 * @prop params.meta Optional meta parameters
 *
 * @returns The current mutation state. Destructure as [updateMany, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [updateMany, { isLoading: false, isIdle: true }]
 * - start:   [updateMany, { isLoading: true }]
 * - success: [updateMany, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [updateMany, { error: [error from response], isLoading: false, isError: true }]
 *
 * The updateMany() function must be called with a resource and a parameter object: updateMany(resource, { ids, data, previousData }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the updateMany callback
 *
 * import { useUpdateMany, useListContext } from 'react-admin';
 *
 * const BulkResetViewsButton = () => {
 *     const { selectedIds } = useListContext();
 *     const [updateMany, { isLoading, error }] = useUpdateMany();
 *     const handleClick = () => {
 *         updateMany('posts', { ids: selectedIds, data: { views: 0 } });
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Reset views</button>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useUpdateMany, useListContext } from 'react-admin';
 *
 * const BulkResetViewsButton = () => {
 *     const { selectedIds } = useListContext();
 *     const [updateMany, { isLoading, error }] = useUpdateMany('posts', { ids: selectedIds, data: { views: 0 } });
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={() => updateMany()}>Reset views</button>;
 * };
 */
export declare const useUpdateMany: <RecordType extends RaRecord = any, MutationError = unknown>(resource?: string, params?: Partial<UpdateManyParams<Partial<RecordType>>>, options?: UseUpdateManyOptions<RecordType, MutationError>) => UseUpdateManyResult<RecordType, boolean, MutationError>;
export interface UseUpdateManyMutateParams<RecordType extends RaRecord = any> {
    resource?: string;
    ids?: Array<RecordType['id']>;
    data?: Partial<RecordType>;
    previousData?: any;
    meta?: any;
}
export declare type UseUpdateManyOptions<RecordType extends RaRecord = any, MutationError = unknown> = UseMutationOptions<Array<RecordType['id']>, MutationError, Partial<UseUpdateManyMutateParams<RecordType>>> & {
    mutationMode?: MutationMode;
};
export declare type UseUpdateManyResult<RecordType extends RaRecord = any, TReturnPromise extends boolean = boolean, MutationError = unknown> = [
    (resource?: string, params?: Partial<UpdateManyParams<RecordType>>, options?: MutateOptions<Array<RecordType['id']>, MutationError, Partial<UseUpdateManyMutateParams<RecordType>>, unknown> & {
        mutationMode?: MutationMode;
        returnPromise?: TReturnPromise;
    }) => Promise<TReturnPromise extends true ? Array<RecordType['id']> : void>,
    UseMutationResult<Array<RecordType['id']>, MutationError, Partial<UpdateManyParams<Partial<RecordType>> & {
        resource?: string;
    }>, unknown>
];
//# sourceMappingURL=useUpdateMany.d.ts.map