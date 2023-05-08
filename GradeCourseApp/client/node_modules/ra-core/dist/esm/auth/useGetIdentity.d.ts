import { UseQueryOptions, QueryObserverResult } from 'react-query';
import { UserIdentity } from '../types';
/**
 * Return the current user identity by calling authProvider.getIdentity() on mount
 *
 * The return value updates according to the call state:
 *
 * - mount: { isLoading: true }
 * - success: { data: Identity, refetch: () => {}, isLoading: false }
 * - error: { error: Error, isLoading: false }
 *
 * The implementation is left to the authProvider.
 *
 * @returns The current user identity. Destructure as { isLoading, data, error, refetch }.
 *
 * @example
 * import { useGetIdentity, useGetOne } from 'react-admin';
 *
 * const PostDetail = ({ id }) => {
 *     const { data: post, isLoading: postLoading } = useGetOne('posts', { id });
 *     const { data: identity, isLoading: identityLoading } = useGetIdentity();
 *     if (postLoading || identityLoading) return <>Loading...</>;
 *     if (!post.lockedBy || post.lockedBy === identity.id) {
 *         // post isn't locked, or is locked by me
 *         return <PostEdit post={post} />
 *     } else {
 *         // post is locked by someone else and cannot be edited
 *         return <PostShow post={post} />
 *     }
 * }
 */
export declare const useGetIdentity: (queryParams?: UseQueryOptions<UserIdentity, Error>) => UseGetIdentityResult;
export declare type UseGetIdentityResult = {
    isLoading: true;
    data?: undefined;
    identity?: undefined;
    error?: undefined;
    refetch?: undefined;
} | {
    isLoading: false;
    data?: undefined;
    identity?: undefined;
    error: Error;
    refetch?: undefined;
} | {
    isLoading: false;
    data: UserIdentity;
    /**
     * @deprecated Use data instead
     */
    identity: UserIdentity;
    error?: undefined;
    refetch: () => Promise<QueryObserverResult<UserIdentity, Error>>;
};
export default useGetIdentity;
//# sourceMappingURL=useGetIdentity.d.ts.map