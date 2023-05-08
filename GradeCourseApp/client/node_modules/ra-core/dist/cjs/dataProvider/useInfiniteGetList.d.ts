import { UseInfiniteQueryOptions, UseInfiniteQueryResult } from 'react-query';
import { RaRecord, GetListParams, GetInfiniteListResult } from '../types';
/**
 * Call the dataProvider.getList() method and return the resolved result
 * as well as the loading state. The return from useInfiniteGetList is equivalent to the return from react-hook form useInfiniteQuery.
 *
 * @see https://react-query-v3.tanstack.com/reference/useInfiniteQuery
 *
 *
 * This hook will return the cached result when called a second time
 * with the same parameters, until the response arrives.
 *
 * @param {string} resource The resource name, e.g. 'posts'
 * @param {Params} params The getList parameters { pagination, sort, filter, meta }
 * @param {Object} options Options object to pass to the queryClient.
 * May include side effects to be executed upon success or failure, e.g. { onSuccess: () => { fetchNextPage(); } }
 *
 * @typedef Params
 * @prop params.pagination The request pagination { page, perPage }, e.g. { page: 1, perPage: 10 }
 * @prop params.sort The request sort { field, order }, e.g. { field: 'id', order: 'DESC' }
 * @prop params.filter The request filters, e.g. { title: 'hello, world' }
 * @prop params.meta Optional meta parameters
 *
 * @returns The current request state. Destructure as { data, total, error, isLoading, isSuccess, hasNextPage, fetchNextPage }.
 *
 * @example
 *
 * import { useInfinteGetList } from 'react-admin';
 *
 * const LatestNews = () => {
 *     const { data, total, isLoading, error, hasNextPage, fetchNextPage } = useInfiniteGetList(
 *         'posts',
 *         { pagination: { page: 1, perPage: 10 }, sort: { field: 'published_at', order: 'DESC' } }
 *     );
 *     if (isLoading) { return <Loading />; }
 *     if (error) { return <p>ERROR</p>; }
 *     return (
 *        <>
 *            <ul>
 *                {data?.pages.map(page => {
 *                    return page.data.map(post => (
 *                        <li key={post.id}>{post.title}</li>
 *                    ));
 *                })}
 *            </ul>
 *            <div>
 *                <button disabled={!hasNextPage} onClick={() => fetchNextPage()}>
 *                    Fetch next page
 *                </button>
 *            </div>
 *        </>
 *    );
 * };
 */
export declare const useInfiniteGetList: <RecordType extends RaRecord = any>(resource: string, params?: Partial<GetListParams>, options?: UseInfiniteQueryOptions<GetInfiniteListResult<RecordType>, Error, GetInfiniteListResult<RecordType>, GetInfiniteListResult<RecordType>, import("react-query").QueryKey>) => UseInfiniteGetListHookValue<RecordType>;
export declare type UseInfiniteGetListHookValue<RecordType extends RaRecord = any> = UseInfiniteQueryResult<GetInfiniteListResult<RecordType>, Error> & {
    total?: number;
    pageParam?: number;
};
//# sourceMappingURL=useInfiniteGetList.d.ts.map