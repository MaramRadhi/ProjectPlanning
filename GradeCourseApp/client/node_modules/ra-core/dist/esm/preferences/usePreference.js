import { useStore } from '../store/useStore';
import { usePreferenceKey } from './PreferenceKeyContext';
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
export var usePreference = function (key, defaultValue) {
    var preferenceKey = usePreferenceKey();
    return useStore(preferenceKey && key ? "".concat(preferenceKey, ".").concat(key) : preferenceKey !== null && preferenceKey !== void 0 ? preferenceKey : key, defaultValue);
};
//# sourceMappingURL=usePreference.js.map