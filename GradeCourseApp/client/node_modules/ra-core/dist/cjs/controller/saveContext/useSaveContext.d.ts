import { SaveContextValue } from './SaveContext';
/**
 * Get the save() function and its status
 *
 * Used in forms.
 *
 * @example
 *
 * const {
 *     save,
 *     saving
 * } = useSaveContext();
 */
export declare const useSaveContext: <PropsType extends SaveContextValue<any, (...args: any[]) => any> = SaveContextValue<any, (...args: any[]) => any>>(props?: PropsType) => SaveContextValue;
//# sourceMappingURL=useSaveContext.d.ts.map