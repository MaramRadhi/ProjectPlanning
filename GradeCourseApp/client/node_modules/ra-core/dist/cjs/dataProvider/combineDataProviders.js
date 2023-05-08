"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineDataProviders = void 0;
var defaultDataProvider_1 = require("./defaultDataProvider");
/**
 * Combine multiple data providers into one.
 *
 * @param dataProviderMatcher A function that returns a data provider for a given resource.
 *
 * @example
 * const dataProvider = combineDataProviders(resource => {
 *    switch(resource) {
 *       case 'posts':
 *       case 'comments':
 *          return dataProvider1;
 *       case 'users':
 *          return dataProvider2;
 *       default:
 *         throw new Error('Unknown resource');
 *    }
 * });
 */
var combineDataProviders = function (dataProviderMatcher) {
    return new Proxy(defaultDataProvider_1.defaultDataProvider, {
        get: function (target, name) {
            return function (resource, params) {
                if (typeof name === 'symbol' || name === 'then') {
                    return;
                }
                return dataProviderMatcher(resource)[name](resource, params);
            };
        },
    });
};
exports.combineDataProviders = combineDataProviders;
//# sourceMappingURL=combineDataProviders.js.map