import { Location } from 'history';
import { UseMutationOptions } from 'react-query';
import { UseCreateMutateParams } from '../../dataProvider';
import { RedirectionSideEffect } from '../../routing';
import { SaveContextValue } from '../saveContext';
import { RaRecord, TransformData } from '../../types';
/**
 * Prepare data for the Create view
 *
 * @param {Object} props The props passed to the Create component.
 *
 * @return {Object} controllerProps Fetched data and callbacks for the Create view
 *
 * @example
 *
 * import { useCreateController } from 'react-admin';
 * import CreateView from './CreateView';
 *
 * const MyCreate = props => {
 *     const controllerProps = useCreateController(props);
 *     return <CreateView {...controllerProps} {...props} />;
 * }
 */
export declare const useCreateController: <RecordType extends RaRecord = RaRecord, MutationOptionsError = unknown>(props?: CreateControllerProps<RecordType, MutationOptionsError>) => CreateControllerResult<RecordType>;
export interface CreateControllerProps<RecordType extends RaRecord = RaRecord, MutationOptionsError = unknown> {
    disableAuthentication?: boolean;
    hasEdit?: boolean;
    hasShow?: boolean;
    record?: Partial<RecordType>;
    redirect?: RedirectionSideEffect;
    resource?: string;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, UseCreateMutateParams<RecordType>> & {
        meta?: any;
    };
    transform?: TransformData;
}
export interface CreateControllerResult<RecordType extends RaRecord = RaRecord> extends SaveContextValue {
    data?: RecordType;
    defaultTitle: string;
    isFetching: boolean;
    isLoading: boolean;
    record?: Partial<RecordType>;
    redirect: RedirectionSideEffect;
    resource: string;
}
/**
 * Get the initial record from the location, whether it comes from the location
 * state or is serialized in the url search part.
 */
export declare const getRecordFromLocation: ({ state, search }: Location) => any;
//# sourceMappingURL=useCreateController.d.ts.map