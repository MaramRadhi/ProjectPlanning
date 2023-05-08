"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoryStore = void 0;
var set_1 = __importDefault(require("lodash/set"));
var unset_1 = __importDefault(require("lodash/unset"));
var get_1 = __importDefault(require("lodash/get"));
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
var memoryStore = function (storage) {
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
            return (0, get_1.default)(storage, key, defaultValue);
        },
        setItem: function (key, value) {
            (0, set_1.default)(storage, key, value);
            publish(key, value);
        },
        removeItem: function (key) {
            (0, unset_1.default)(storage, key);
            publish(key, undefined);
        },
        removeItems: function (keyPrefix) {
            var flatStorage = flatten(storage);
            Object.keys(flatStorage).forEach(function (key) {
                if (!key.startsWith(keyPrefix)) {
                    return;
                }
                (0, unset_1.default)(storage, key);
                publish(key, undefined);
            });
        },
        reset: function () {
            var flatStorage = flatten(storage);
            Object.keys(flatStorage).forEach(function (key) {
                (0, unset_1.default)(storage, key);
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
exports.memoryStore = memoryStore;
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