import { RaRecord, SortPayload } from '../../types';
import { ListControllerResult } from '../list';
export interface UseReferenceManyFieldControllerParams {
    filter?: any;
    page?: number;
    perPage?: number;
    record?: RaRecord;
    reference: string;
    resource?: string;
    sort?: SortPayload;
    source?: string;
    target: string;
}
/**
 * Fetch reference records, and return them when available
 *
 * Uses dataProvider.getManyReference() internally.
 *
 * @example // fetch the comments related to the current post
 * const { isLoading, data } = useReferenceManyFieldController({
 *     reference: 'comments',
 *     target: 'post_id',
 *     record: { id: 123, title: 'hello, world' },
 *     resource: 'posts',
 * });
 *
 * @param {Object} props
 * @param {string} props.reference The linked resource name. Required.
 * @param {string} props.target The target resource key. Required.
 * @param {Object} props.filter The filter applied on the recorded records list
 * @param {number} props.page the page number
 * @param {number} props.perPage the number of item per page
 * @param {Object} props.record The current resource record
 * @param {string} props.resource The current resource name
 * @param {Object} props.sort the sort to apply to the referenced records
 * @param {string} props.source The key of the linked resource identifier
 *
 * @returns {ListControllerResult} The reference many props
 */
export declare const useReferenceManyFieldController: (props: UseReferenceManyFieldControllerParams) => ListControllerResult;
//# sourceMappingURL=useReferenceManyFieldController.d.ts.map