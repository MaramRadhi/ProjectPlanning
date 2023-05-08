"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStore = void 0;
var react_1 = require("react");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var util_1 = require("../util");
var useStoreContext_1 = require("./useStoreContext");
/**
 * Read and write a value from the Store
 *
 * useState-like hook using the global Store for persistence.
 * Each time a store value is changed, all components using this value will be re-rendered.
 *
 * @param {string} key Name of the store key. Separate with dots to namespace, e.g. 'posts.list.columns'.
 * @param {any} defaultValue Default value
 *
 * @return {Object} A value and a setter for the value, in an array - just like for useState()
 *
 * @example
 * import { useStore } from 'react-admin';
 *
 * const PostList = () => {
 *     const [density] = useStore('posts.list.density', 'small');
 *
 *     return (
 *         <List>
 *             <Datagrid size={density}>
 *                 ...
 *             </Datagrid>
 *         </List>
 *     );
 * }
 *
 * // Clicking on this button will trigger a rerender of the PostList!
 * const ChangeDensity: FC<any> = () => {
 *     const [density, setDensity] = useStore('posts.list.density', 'small');
 *
 *     const changeDensity = (): void => {
 *         setDensity(density === 'small' ? 'medium' : 'small');
 *     };
 *
 *     return (
 *         <Button onClick={changeDensity}>
 *             {`Change density (current ${density})`}
 *         </Button>
 *     );
 * };
 */
var useStore = function (key, defaultValue) {
    var _a = (0, useStoreContext_1.useStoreContext)(), getItem = _a.getItem, setItem = _a.setItem, subscribe = _a.subscribe;
    var _b = (0, react_1.useState)(function () { return getItem(key, defaultValue); }), value = _b[0], setValue = _b[1];
    // subscribe to changes on this key, and change the state when they happen
    (0, react_1.useEffect)(function () {
        var storedValue = getItem(key, defaultValue);
        if (!(0, isEqual_1.default)(value, storedValue)) {
            setValue(storedValue);
        }
        var unsubscribe = subscribe(key, function (newValue) {
            setValue(typeof newValue === 'undefined' ? defaultValue : newValue);
        });
        return function () { return unsubscribe(); };
    }, [key, subscribe, defaultValue, getItem, value]);
    var set = (0, util_1.useEvent)(function (valueParam, runtimeDefaultValue) {
        var newValue = typeof valueParam === 'function' ? valueParam(value) : valueParam;
        // we only set the value in the Store;
        // the value in the local state will be updated
        // by the useEffect during the next render
        setItem(key, typeof newValue === 'undefined'
            ? typeof runtimeDefaultValue === 'undefined'
                ? defaultValue
                : runtimeDefaultValue
            : newValue);
    });
    return [value, set];
};
exports.useStore = useStore;
//# sourceMappingURL=useStore.js.map