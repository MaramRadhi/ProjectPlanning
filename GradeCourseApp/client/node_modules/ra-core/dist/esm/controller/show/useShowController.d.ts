import { UseQueryOptions } from 'react-query';
import { RaRecord } from '../../types';
import { UseGetOneHookValue } from '../../dataProvider';
/**
 * Prepare data for the Show view.
 *
 * useShowController does a few things:
 * - it grabs the id from the URL and the resource name from the ResourceContext,
 * - it fetches the record via useGetOne,
 * - it prepares the page title.
 *
 * @param {Object} props The props passed to the Show component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Show view
 *
 * @example
 *
 * import { useShowController } from 'react-admin';
 * import ShowView from './ShowView';
 *
 * const MyShow = () => {
 *     const controllerProps = useShowController();
 *     return <ShowView {...controllerProps} />;
 * };
 *
 * @example // useShowController can also take its parameters from props
 *
 * import { useShowController } from 'react-admin';
 * import ShowView from './ShowView';
 *
 * const MyShow = () => {
 *     const controllerProps = useShowController({ resource: 'posts', id: 1234 });
 *     return <ShowView {...controllerProps} />;
 * };
 */
export declare const useShowController: <RecordType extends RaRecord = any>(props?: ShowControllerProps<RecordType>) => ShowControllerResult<RecordType>;
export interface ShowControllerProps<RecordType extends RaRecord = any> {
    disableAuthentication?: boolean;
    id?: RecordType['id'];
    queryOptions?: UseQueryOptions<RecordType> & {
        meta?: any;
    };
    resource?: string;
}
export interface ShowControllerResult<RecordType extends RaRecord = any> {
    defaultTitle: string;
    data?: RecordType;
    error?: any;
    isFetching: boolean;
    isLoading: boolean;
    resource: string;
    record?: RecordType;
    refetch: UseGetOneHookValue<RecordType>['refetch'];
}
//# sourceMappingURL=useShowController.d.ts.map