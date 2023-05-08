/**
 * Get a preference value from the store
 *
 * Relies on the store, using a key namespaced with the preference key from the PreferenceKeyContext
 * @example
 *
 * // when used inside a PreferenceKeyContext of value 'my-app'
 * const [theme, setTheme] = usePreference('theme', 'light');
 * // this is equivalent to
 * const [theme, setTheme] = useStore('my-app.theme', 'light');
 */
export declare const usePreference: <T = any>(key?: string, defaultValue?: T) => import("../store/useStore").useStoreResult<T>;
//# sourceMappingURL=usePreference.d.ts.map