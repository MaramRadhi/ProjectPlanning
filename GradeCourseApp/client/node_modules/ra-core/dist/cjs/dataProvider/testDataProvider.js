"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDataProvider = void 0;
/**
 * A dataProvider meant to be used in tests only. You can override any of its methods by passing a partial dataProvider.
 */
var testDataProvider = function (overrides) {
    return __assign({ getList: function () { return Promise.resolve({ data: [], total: 0 }); }, getOne: function () { return Promise.resolve({ data: undefined }); }, getMany: function () { return Promise.resolve({ data: [] }); }, getManyReference: function () { return Promise.resolve({ data: [], total: 0 }); }, create: function () { return Promise.resolve({ data: undefined }); }, update: function () { return Promise.resolve({ data: undefined }); }, updateMany: function () { return Promise.resolve({ data: [] }); }, delete: function () { return Promise.resolve({ data: undefined }); }, deleteMany: function () { return Promise.resolve({ data: [] }); } }, overrides);
};
exports.testDataProvider = testDataProvider;
//# sourceMappingURL=testDataProvider.js.map