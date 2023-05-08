import { FilterPayload, RaRecord, SortPayload } from '../../types';
import { ChoicesContextValue } from '../../form';
import { UseQueryOptions } from 'react-query';
declare const defaultReferenceSource: (resource: string, source: string) => string;
/**
 * A hook for choosing a reference record. Useful for foreign keys.
 *
 * This hook fetches the possible values in the reference resource
 * (using `dataProvider.getList()`), it returns the possible choices
 * as the `choices` attribute.
 *
 * @example
 * const {
 *      choices, // the available reference resource
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 * });
 *
 * The hook also allow to filter results. It returns a `setFilters`
 * function. It uses the value to create a filter for the query.
 * You can also add a permanentFilter to further filter the result:
 *
 * @example
 * const {
 *      choices, // the available reference resource
 *      setFilter,
 * } = useReferenceInputController({
 *      input, // the input props
 *      resource: 'comments',
 *      reference: 'posts',
 *      source: 'post_id',
 *      permanentFilter: {
 *          author: 'john'
 *      },
 * });
 */
export declare const useReferenceInputController: <RecordType extends RaRecord = any>(props: UseReferenceInputControllerParams) => ChoicesContextValue<RecordType>;
export interface UseReferenceInputControllerParams<RecordType extends RaRecord = any> {
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
    record?: RaRecord;
    reference: string;
    referenceSource?: typeof defaultReferenceSource;
    resource?: string;
    sort?: SortPayload;
    source: string;
    enableGetChoices?: (filters: any) => boolean;
}
export {};
//# sourceMappingURL=useReferenceInputController.d.ts.map