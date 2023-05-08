import { RaRecord } from '../../types';
import { ShowControllerResult } from './useShowController';
/**
 * Hook to read the show controller props from the ShowContext.
 *
 * Mostly used within a <ShowContext.Provider> (e.g. as a descendent of <Show>).
 *
 * But you can also use it without a <ShowContext.Provider>. In this case, it is up to you
 * to pass all the necessary props.
 *
 * The given props will take precedence over context values.
 *
 * @typedef {Object} ShowControllerResult
 *
 * @returns {ShowControllerResult} create controller props
 *
 * @see useShowController for how it is filled
 *
 */
export declare const useShowContext: <RecordType extends RaRecord = any>(props?: Partial<ShowControllerResult<RecordType>>) => ShowControllerResult<RecordType>;
//# sourceMappingURL=useShowContext.d.ts.map