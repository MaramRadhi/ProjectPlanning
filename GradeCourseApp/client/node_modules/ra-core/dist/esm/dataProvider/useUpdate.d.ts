import { UseMutationOptions, UseMutationResult, MutateOptions } from 'react-query';
import { RaRecord, UpdateParams, MutationMode } from '../types';
/**
 * Get a callback to call the dataProvider.update() method, the result and the loading state.
 *
 * @param {string} resource
 * @param {Params} params The update parameters { id, data, previousData, meta }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { refresh(); } }
 * May include a mutation mode (optimistic/pessimistic/undoable), e.g. { mutationMode: 'undoable' }
 *
 * @typedef Params
 * @prop params.id The resource identifier, e.g. 123
 * @prop params.data The updates to merge into the record, e.g. { views: 10 }
 * @prop params.previousData The record before the update is applied
 * @prop params.meta Optional meta data
 *
 * @returns The current mutation state. Destructure as [update, { data, error, isLoading }].
 *
 * The return value updates according to the request state:
 *
 * - initial: [update, { isLoading: false, isIdle: true }]
 * - start:   [update, { isLoading: true }]
 * - success: [update, { data: [data from response], isLoading: false, isSuccess: true }]
 * - error:   [update, { error: [error from response], isLoading: false, isError: true }]
 *
 * The update() function must be called with a resource and a parameter object: update(resource, { id, data, previousData }, options)
 *
 * This hook uses react-query useMutation under the hood.
 * This means the state object contains mutate, isIdle, reset and other react-query methods.
 *
 * @see https://react-query-v3.tanstack.com/reference/useMutation
 *
 * @example // set params when calling the update callback
 *
 * import { useUpdate, useRecordContext } from 'react-admin';
 *
 * const IncreaseLikeButton = () => {
 *     const record = useRecordContext();
 *     const diff = { likes: record.likes + 1 };
 *     const [update, { isLoading, error }] = useUpdate();
 *     const handleClick = () => {
 *         update('likes', { id: record.id, data: diff, previousData: record })
 *     }
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={handleClick}>Like</div>;
 * };
 *
 * @example // set params when calling the hook
 *
 * import { useUpdate, useRecordContext } from 'react-admin';
 *
 * const IncreaseLikeButton = () => {
 *     const record = useRecordContext();
 *     const diff = { likes: record.likes + 1 };
 *     const [update, { isLoading, error }] = useUpdate('likes', { id: record.id, data: diff, previousData: record });
 *     if (error) { return <p>ERROR</p>; }
 *     return <button disabled={isLoading} onClick={() => update()}>Like</button>;
 * };
 *
 * @example // TypeScript
 * const [update, { data }] = useUpdate<Product>('products', { id, data: diff, previousData: product });
 *                    \-- data is Product
 */
export declare const useUpdate: <RecordType extends RaRecord = any, MutationError = unknown>(resource?: string, params?: Partial<UpdateParams<RecordType>>, options?: UseUpdateOptions<RecordType, MutationError>) => UseUpdateResult<RecordType, boolean, MutationError>;
export interface UseUpdateMutateParams<RecordType extends RaRecord = any> {
    resource?: string;
    id?: RecordType['id'];
    data?: Partial<RecordType>;
    previousData?: any;
    meta?: any;
}
export declare type UseUpdateOptions<RecordType extends RaRecord = any, MutationError = unknown> = UseMutationOptions<RecordType, MutationError, Partial<UseUpdateMutateParams<RecordType>>> & {
    mutationMode?: MutationMode;
    returnPromise?: boolean;
};
export declare type UseUpdateResult<RecordType extends RaRecord = any, TReturnPromise extends boolean = boolean, MutationError = unknown> = [
    (resource?: string, params?: Partial<UpdateParams<RecordType>>, options?: MutateOptions<RecordType, MutationError, Partial<UseUpdateMutateParams<RecordType>>, unknown> & {
        mutationMode?: MutationMode;
        returnPromise?: TReturnPromise;
    }) => Promise<TReturnPromise extends true ? RecordType : void>,
    UseMutationResult<RecordType, MutationError, Partial<UpdateParams<RecordType> & {
        resource?: string;
    }>, unknown>
];
//# sourceMappingURL=useUpdate.d.ts.map