import { SaveContextValue } from './SaveContext';
/**
 * This hook extracts the `save`, `saving` and mutationMode properties from either the `CreateContext` or `EditContext`. This ensures the `SaveContext` doesn't rerender when those two contexts have other properties changes.
 */
export declare const usePickSaveContext: <ContextType extends SaveContextValue<any, (...args: any[]) => any> = SaveContextValue<any, (...args: any[]) => any>>(context: ContextType) => SaveContextValue;
//# sourceMappingURL=usePickSaveContext.d.ts.map