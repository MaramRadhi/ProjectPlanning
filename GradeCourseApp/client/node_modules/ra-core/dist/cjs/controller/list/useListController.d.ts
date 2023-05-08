import { UseQueryOptions } from 'react-query';
import { UseGetListHookValue } from '../../dataProvider';
import { FilterPayload, SortPayload, RaRecord, Exporter } from '../../types';
/**
 * Prepare data for the List view
 *
 * @param {Object} props The props passed to the List component.
 *
 * @return {Object} controllerProps Fetched and computed data for the List view
 *
 * @example
 *
 * import { useListController } from 'react-admin';
 * import ListView from './ListView';
 *
 * const MyList = props => {
 *     const controllerProps = useListController(props);
 *     return <ListView {...controllerProps} {...props} />;
 * }
 */
export declare const useListController: <RecordType extends RaRecord = any>(props?: ListControllerProps<RecordType>) => ListControllerResult<RecordType>;
export interface ListControllerProps<RecordType extends RaRecord = any> {
    debounce?: number;
    disableAuthentication?: boolean;
    /**
     * Whether to disable the synchronization of the list parameters with the current location (URL search parameters)
     */
    disableSyncWithLocation?: boolean;
    exporter?: Exporter | false;
    filter?: FilterPayload;
    filterDefaultValues?: object;
    perPage?: number;
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
    resource?: string;
    sort?: SortPayload;
    storeKey?: string;
}
export interface ListControllerResult<RecordType extends RaRecord = any> {
    sort: SortPayload;
    data: RecordType[];
    defaultTitle?: string;
    displayedFilters: any;
    error?: any;
    exporter?: Exporter | false;
    filter?: FilterPayload;
    filterValues: any;
    hideFilter: (filterName: string) => void;
    isFetching: boolean;
    isLoading: boolean;
    onSelect: (ids: RecordType['id'][]) => void;
    onToggleItem: (id: RecordType['id']) => void;
    onUnselectItems: () => void;
    page: number;
    perPage: number;
    refetch: (() => void) | UseGetListHookValue<RecordType>['refetch'];
    resource: string;
    selectedIds: RecordType['id'][];
    setFilters: (filters: any, displayedFilters: any, debounce?: boolean) => void;
    setPage: (page: number) => void;
    setPerPage: (page: number) => void;
    setSort: (sort: SortPayload) => void;
    showFilter: (filterName: string, defaultValue: any) => void;
    total: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
export declare const injectedProps: string[];
/**
 * Select the props injected by the useListController hook
 * to be passed to the List children need
 * This is an implementation of pick()
 */
export declare const getListControllerProps: (props: any) => {};
/**
 * Select the props not injected by the useListController hook
 * to be used inside the List children to sanitize props injected by List
 * This is an implementation of omit()
 */
export declare const sanitizeListRestProps: (props: any) => {};
//# sourceMappingURL=useListController.d.ts.map