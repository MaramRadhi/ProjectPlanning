import { UseQueryOptions, UseMutationOptions } from 'react-query';
import { RaRecord, MutationMode, TransformData } from '../../types';
import { RedirectionSideEffect } from '../../routing';
import { UseGetOneHookValue, UseUpdateMutateParams } from '../../dataProvider';
import { SaveContextValue } from '../saveContext';
/**
 * Prepare data for the Edit view.
 *
 * useEditController does a few things:
 * - it grabs the id from the URL and the resource name from the ResourceContext,
 * - it fetches the record via useGetOne,
 * - it prepares the page title.
 *
 * @param {Object} props The props passed to the Edit component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Edit view
 *
 * @example
 *
 * import { useEditController } from 'react-admin';
 * import EditView from './EditView';
 *
 * const MyEdit = () => {
 *     const controllerProps = useEditController({ resource: 'posts', id: 123 });
 *     return <EditView {...controllerProps} {...props} />;
 * }
 */
export declare const useEditController: <RecordType extends RaRecord = any, MutationOptionsError = unknown>(props?: EditControllerProps<RecordType, MutationOptionsError>) => EditControllerResult<RecordType>;
export interface EditControllerProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> {
    disableAuthentication?: boolean;
    id?: RecordType['id'];
    mutationMode?: MutationMode;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, UseUpdateMutateParams<RecordType>> & {
        meta?: any;
    };
    queryOptions?: UseQueryOptions<RecordType> & {
        meta?: any;
    };
    redirect?: RedirectionSideEffect;
    resource?: string;
    transform?: TransformData;
    [key: string]: any;
}
export interface EditControllerResult<RecordType extends RaRecord = any> extends SaveContextValue {
    data?: RecordType;
    error?: any;
    defaultTitle: string;
    isFetching: boolean;
    isLoading: boolean;
    record?: RecordType;
    refetch: UseGetOneHookValue<RecordType>['refetch'];
    redirect: RedirectionSideEffect;
    resource: string;
}
//# sourceMappingURL=useEditController.d.ts.map