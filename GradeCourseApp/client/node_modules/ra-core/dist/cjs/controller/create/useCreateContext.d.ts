import { RaRecord } from '../../types';
import { CreateControllerResult } from './useCreateController';
/**
 * Hook to read the create controller props from the CreateContext.
 *
 * Mostly used within a <CreateContext.Provider> (e.g. as a descendent of <Create>).
 *
 * But you can also use it without a <CreateContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} CreateControllerProps
 *
 * @returns {CreateControllerResult} create controller props
 *
 * @see useCreateController for how it is filled
 *
 */
export declare const useCreateContext: <RecordType extends RaRecord = RaRecord>(props?: Partial<CreateControllerResult<RecordType>>) => CreateControllerResult<RecordType>;
//# sourceMappingURL=useCreateContext.d.ts.map