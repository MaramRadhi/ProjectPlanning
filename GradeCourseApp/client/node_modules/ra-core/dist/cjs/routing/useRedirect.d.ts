import { To } from 'react-router-dom';
import { Identifier, RaRecord } from '../types';
declare type RedirectToFunction = (resource?: string, id?: Identifier, data?: Partial<RaRecord>, state?: object) => To;
export declare type RedirectionSideEffect = string | false | RedirectToFunction;
/**
 * Hook for Redirection Side Effect
 *
 * @example
 *
 * const redirect = useRedirect();
 * // redirect to list view
 * redirect('list', 'posts');
 * // redirect to edit view
 * redirect('edit', 'posts', 123);
 * // redirect to edit view with state data
 * redirect('edit', 'comments', 123, {}, { record: { post_id: record.id } });
 * // do not redirect
 * redirect(false);
 * // redirect to the result of a function
 * redirect((resource, id, data) => ...)
 */
export declare const useRedirect: () => (redirectTo: RedirectionSideEffect, resource?: string, id?: Identifier, data?: Partial<RaRecord>, state?: object) => void;
export {};
//# sourceMappingURL=useRedirect.d.ts.map