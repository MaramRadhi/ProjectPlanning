import { RaRecord, GetOneParams } from '../types';
import { UseQueryOptions, UseQueryResult } from 'react-query';
/**
 * Call the dataProvider.getOne() method and return the resolved value
 * as well as the loading state.
 *
 * The return value updates according to the request state:
 *
 * - start: { isLoading: true, isFetching: true, refetch }
 * - success: { data: [data from response], isLoading: false, refetch }
 * - error: { error: [error from response], isLoading: false, refetch }
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param resource The resource name, e.g. 'posts'
 * @param {Params} params The getOne parameters { id, meta }, e.g. { id: 123 }
 * @param {Options} options Options object to pass to the react-query queryClient.
 *
 * @typedef Params
 * @prop id a resource identifier, e.g. 123
 *
 * @typedef Options
 * @prop enabled Flag to conditionally run the query. If it's false, the query will not run
 * @prop onSuccess Side effect function to be executed upon success, e.g. { onSuccess: { refresh: true } }
 * @prop onError Side effect function to be executed upon failure, e.g. { onError: error => notify(error.message) }
 *
 * @returns The current request state. Destructure as { data, error, isLoading, refetch }.
 *
 * @example
 *
 * import { useGetOne, useRecordContext } from 'react-admin';
 *
 * const UserProfile = () => {
 *     const record = useRecordContext();
 *     const { data, isLoading, error } = useGetOne('users', { id: record.id });
 *     if (isLoading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return <div>User {data.username}</div>;
 * };
 */
export declare const useGetOne: <RecordType extends RaRecord = any>(resource: string, { id, meta }: GetOneParams<RecordType>, options?: UseQueryOptions<RecordType, unknown, RecordType, import("react-query").QueryKey>) => UseGetOneHookValue<RecordType>;
export declare type UseGetOneHookValue<RecordType extends RaRecord = any> = UseQueryResult<RecordType>;
//# sourceMappingURL=useGetOne.d.ts.map