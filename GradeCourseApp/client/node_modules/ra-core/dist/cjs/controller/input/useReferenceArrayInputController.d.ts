import { FilterPayload, RaRecord, SortPayload } from '../../types';
import { ChoicesContextValue } from '../../form';
import { UseQueryOptions } from 'react-query';
/**
 * Prepare data for the ReferenceArrayInput components
 *
 * @example
 *
 * const { allChoices, availableChoices, selectedChoices, error, isFetching, isLoading } = useReferenceArrayInputController({
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
 * @return {Object} controllerProps Fetched data and callbacks for the ReferenceArrayInput components
 */
export declare const useReferenceArrayInputController: <RecordType extends RaRecord = any>(props: UseReferenceArrayInputParams<RecordType>) => ChoicesContextValue<RecordType>;
export interface UseReferenceArrayInputParams<RecordType extends RaRecord = any> {
    debounce?: number;
    filter?: FilterPayload;
    queryOptions?: UseQueryOptions<{
        data: RecordType[];
        total?: number;
        pageInfo?: {
            hasNextPage?: boolean;
            hasPreviousPage?: boolean;
        };
    }> & {
        meta?: any;
    };
    page?: number;
    perPage?: number;
    record?: RecordType;
    reference: string;
    resource?: string;
    sort?: SortPayload;
    source: string;
    enableGetChoices?: (filters: any) => boolean;
}
//# sourceMappingURL=useReferenceArrayInputController.d.ts.map