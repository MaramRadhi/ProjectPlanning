import { RaRecord, SortPayload } from '../../types';
import { ListControllerResult } from '../list';
export interface UseReferenceArrayFieldControllerParams {
    filter?: any;
    page?: number;
    perPage?: number;
    record?: RaRecord;
    reference: string;
    resource: string;
    sort?: SortPayload;
    source: string;
}
/**
 * Hook that fetches records from another resource specified
 * by an array of *ids* in current record.
 *
 * @example
 *
 * const { data, error, isFetching, isLoading } = useReferenceArrayFieldController({
 *      record: { referenceIds: ['id1', 'id2']};
 *      reference: 'reference';
 *      resource: 'resource';
 *      source: 'referenceIds';
 * });
 *
 * @param {Object} props
 * @param {Object} props.record The current resource record
 * @param {string} props.reference The linked resource name
 * @param {string} props.resource The current resource name
 * @param {string} props.source The key of the linked resource identifier
 *
 * @param {Props} props
 *
 * @returns {ListControllerResult} The reference props
 */
export declare const useReferenceArrayFieldController: (props: UseReferenceArrayFieldControllerParams) => ListControllerResult;
//# sourceMappingURL=useReferenceArrayFieldController.d.ts.map