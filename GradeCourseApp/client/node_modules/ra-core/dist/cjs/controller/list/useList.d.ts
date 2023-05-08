import { FilterPayload, RaRecord, SortPayload } from '../../types';
import { ListControllerResult } from './useListController';
/**
 * Handle filtering, sorting and pagination on local data.
 *
 * Returns the data and callbacks expected by <ListContext>.
 *
 * @example
 * const data = [
 *     { id: 1, name: 'Arnold' },
 *     { id: 2, name: 'Sylvester' },
 *     { id: 3, name: 'Jean-Claude' },
 * ]
 *
 * const MyComponent = () => {
 *     const listContext = useList({ data });
 *     return (
 *         <ListContextProvider value={listContext}>
 *             <Datagrid>
 *                 <TextField source="id" />
 *                 <TextField source="name" />
 *             </Datagrid>
 *         </ListContextProvider>
 *     );
 * };
 *
 * @param {UseListOptions} props
 * @param {RaRecord[]} props.data An array of records
 * @param {Boolean} props.isFetching: Optional. A boolean indicating whether the data is being loaded
 * @param {Boolean} props.isLoading: Optional. A boolean indicating whether the data has been loaded at least once
 * @param {Error | String} props.error: Optional. The error if any occurred while loading the data
 * @param {Object} props.filter: Optional. An object containing the filters applied on the data
 * @param {Number} props.page: Optional. The initial page index
 * @param {Number} props.perPage: Optional. The initial page size
 * @param {SortPayload} props.sort: Optional. The initial sort (field and order)
 * @param {filterCallback} prop.filterCallback Optional. A function that allows you to make a custom filter
 */
export declare const useList: <RecordType extends RaRecord = any>(props: UseListOptions<RecordType>) => UseListValue<RecordType>;
export interface UseListOptions<RecordType extends RaRecord = any> {
    data?: RecordType[];
    error?: any;
    filter?: FilterPayload;
    isFetching?: boolean;
    isLoading?: boolean;
    page?: number;
    perPage?: number;
    sort?: SortPayload;
    resource?: string;
    filterCallback?: (record: RecordType) => boolean;
}
export declare type UseListValue<RecordType extends RaRecord = any> = ListControllerResult<RecordType>;
//# sourceMappingURL=useList.d.ts.map