import set from 'lodash/set';
import unset from 'lodash/unset';
import get from 'lodash/get';
/**
 * Store using memory
 *
 * @example
 *
 * import { memoryStore } from 'react-admin';
 *
 * const App = () => (
 *    <Admin store={memoryStore()}>
 *       ...
 *   </Admin>
 * );
 */
export var memoryStore = function (storage) {
    if (storage === void 0) { storage = {}; }
    var subscriptions = {};
    var publish = function (key, value) {
        Object.keys(subscriptions).forEach(function (id) {
            if (!subscriptions[id])
                return; // may happen if a component unmounts after a first subscriber was notified
            if (subscriptions[id].key === key) {
                subscriptions[id].callback(value);
            }
        });
    };
    return {
        setup: function () { },
        teardown: function () {
            Object.keys(storage).forEach(function (key) { return delete storage[key]; });
        },
        getItem: function (key, defaultValue) {
            return get(storage, key, defaultValue);
        },
        setItem: function (key, value) {
            set(storage, key, value);
            publish(key, value);
        },
        removeItem: function (key) {
            unset(storage, key);
            publish(key, undefined);
        },
        removeItems: function (keyPrefix) {
            var flatStorage = flatten(storage);
            Object.keys(flatStorage).forEach(function (key) {
                if (!key.startsWith(keyPrefix)) {
                    return;
                }
                unset(storage, key);
                publish(key, undefined);
            });
        },
        reset: function () {
            var flatStorage = flatten(storage);
            Object.keys(flatStorage).forEach(function (key) {
                unset(storage, key);
                publish(key, undefined);
            });
        },
        subscribe: function (key, callback) {
            var id = Math.random().toString();
            subscriptions[id] = {
                key: key,
                callback: callback,
            };
            return function () {
                delete subscriptions[id];
            };
        },
    };
};
// taken from https://stackoverflow.com/a/19101235/1333479
var flatten = function (data) {
    var result = {};
    function doFlatten(current, prop) {
        if (Object(current) !== current) {
            // scalar value
            result[prop] = current;
        }
        else if (Array.isArray(current)) {
            // array
            result[prop] = current;
        }
        else {
            // object
            var isEmpty = true;
            for (var p in current) {
                isEmpty = false;
                doFlatten(current[p], prop ? prop + '.' + p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    doFlatten(data, '');
    return result;
};
//# sourceMappingURL=memoryStore.js.map