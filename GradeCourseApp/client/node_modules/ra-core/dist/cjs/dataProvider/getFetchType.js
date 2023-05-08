"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dataFetchActions_1 = require("./dataFetchActions");
/**
 * Get a fetch type for a data provider verb.
 *
 * The fetch type is used in reducers.
 *
 * @example getFetchType('getMany'); // 'GET_MANY'
 */
exports.default = (function (actionType) {
    switch (actionType) {
        case 'getList':
            return dataFetchActions_1.GET_LIST;
        case 'getOne':
            return dataFetchActions_1.GET_ONE;
        case 'getMany':
            return dataFetchActions_1.GET_MANY;
        case 'getManyReference':
            return dataFetchActions_1.GET_MANY_REFERENCE;
        case 'create':
            return dataFetchActions_1.CREATE;
        case 'update':
            return dataFetchActions_1.UPDATE;
        case 'updateMany':
            return dataFetchActions_1.UPDATE_MANY;
        case 'delete':
            return dataFetchActions_1.DELETE;
        case 'deleteMany':
            return dataFetchActions_1.DELETE_MANY;
        default:
            return actionType;
    }
});
//# sourceMappingURL=getFetchType.js.map