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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.withLifecycleCallbacks = void 0;
/**
 * Extend a dataProvider to execute callbacks before and after read and write calls.
 *
 * @param {DataProvider} dataProvider The dataProvider to wrap
 * @param {ResourceCallbacks[]} handlers An array of ResourceCallbacks
 *
 * @typedef {Object} ResourceCallbacks
 * @property {string} resource The resource name
 * @property {AfterCreate} [afterCreate] A callback executed after create
 * @property {AfterDelete} [afterDelete] A callback executed after delete
 * @property {AfterDeleteMany} [afterDeleteMany] A callback executed after deleteMany
 * @property {AfterGetList} [afterGetList] A callback executed after getList
 * @property {AfterGetMany} [afterGetMany] A callback executed after getMany
 * @property {AfterGetManyReference} [afterGetManyReference] A callback executed after getManyReference
 * @property {AfterGetOne} [afterGetOne] A callback executed after getOne
 * @property {AfterRead} [afterRead] A callback executed after read (getList, getMany, getManyReference, getOne)
 * @property {AfterSave} [afterSave] A callback executed after save (create, update, updateMany)
 * @property {AfterUpdate} [afterUpdate] A callback executed after update
 * @property {AfterUpdateMany} [afterUpdateMany] A callback executed after updateMany
 * @property {BeforeCreate} [beforeCreate] A callback executed before create
 * @property {BeforeDelete} [beforeDelete] A callback executed before delete
 * @property {BeforeDeleteMany} [beforeDeleteMany] A callback executed before deleteMany
 * @property {BeforeGetList} [beforeGetList] A callback executed before getList
 * @property {BeforeGetMany} [beforeGetMany] A callback executed before getMany
 * @property {BeforeGetManyReference} [beforeGetManyReference] A callback executed before getManyReference
 * @property {BeforeGetOne} [beforeGetOne] A callback executed before getOne
 * @property {BeforeSave} [beforeSave] A callback executed before save (create, update, updateMany)
 * @property {BeforeUpdate} [beforeUpdate] A callback executed before update
 * @property {BeforeUpdateMany} [beforeUpdateMany] A callback executed before updateMany
 *
 * Warnings:
 * - As queries issued in the callbacks are not done through react-query,
 *   any change in the data will not be automatically reflected in the UI.
 * - The callbacks are not executed in a transaction. In case of error,
 *   the backend may be left in an inconsistent state.
 * - When calling the API directly using fetch or another client,
 *   the callbacks will not be executed, leaving the backend in a possiblly inconsistent state.
 * - If a callback triggers the query it's listening to, this will lead to a infinite loop.
 *
 * @example
 *
 * const dataProvider = withLifecycleCallbacks(
 *   jsonServerProvider("http://localhost:3000"),
 *   [
 *     {
 *       resource: "posts",
 *       afterRead: async (data, dataProvider) => {
 *         // rename field to the record
 *         data.user_id = data.userId;
 *         return data;
 *       },
 *       // executed after create, update and updateMany
 *       afterSave: async (record, dataProvider) => {
 *         // update the author's nb_posts
 *         const { total } = await dataProvider.getList("users", {
 *           filter: { id: record.user_id },
 *           pagination: { page: 1, perPage: 1 },
 *         });
 *         await dataProvider.update("users", {
 *           id: user.id,
 *           data: { nb_posts: total },
 *           previousData: user,
 *         });
 *         return record;
 *       },
 *       beforeDelete: async (params, dataProvider) => {
 *         // delete all comments linked to the post
 *         const { data: comments } = await dataProvider.getManyReference(
 *           "comments",
 *           {
 *             target: "post_id",
 *             id: params.id,
 *           }
 *         );
 *         if (comments.length > 0) {
 *           await dataProvider.deleteMany("comments", {
 *             ids: comments.map((comment) => comment.id),
 *           });
 *         }
 *         // update the author's nb_posts
 *         const { data: post } = await dataProvider.getOne("posts", {
 *           id: params.id,
 *         });
 *         const { total } = await dataProvider.getList("users", {
 *           filter: { id: post.user_id },
 *           pagination: { page: 1, perPage: 1 },
 *         });
 *         await dataProvider.update("users", {
 *           id: user.id,
 *           data: { nb_posts: total - 1 },
 *           previousData: user,
 *         });
 *         return params;
 *       },
 *     },
 *   ]
 * );
 */
var withLifecycleCallbacks = function (dataProvider, handlers) {
    return __assign(__assign({}, dataProvider), { getList: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeGetListHandlers, _i, beforeGetListHandlers_1, handler, result, afterGetListHandlers, _a, afterGetListHandlers_1, handler, afterReadHandlers, _loop_1, _b, afterReadHandlers_1, handler;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            newParams = params;
                            beforeGetListHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeGetList; });
                            _i = 0, beforeGetListHandlers_1 = beforeGetListHandlers;
                            _c.label = 1;
                        case 1:
                            if (!(_i < beforeGetListHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeGetListHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeGetList(newParams, dataProvider)];
                        case 2:
                            newParams = _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, dataProvider.getList(resource, newParams)];
                        case 5:
                            result = _c.sent();
                            afterGetListHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterGetList; });
                            _a = 0, afterGetListHandlers_1 = afterGetListHandlers;
                            _c.label = 6;
                        case 6:
                            if (!(_a < afterGetListHandlers_1.length)) return [3 /*break*/, 9];
                            handler = afterGetListHandlers_1[_a];
                            return [4 /*yield*/, handler.afterGetList(result, dataProvider)];
                        case 7:
                            result = _c.sent();
                            _c.label = 8;
                        case 8:
                            _a++;
                            return [3 /*break*/, 6];
                        case 9:
                            afterReadHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterRead; });
                            _loop_1 = function (handler) {
                                var _d;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _d = result;
                                            return [4 /*yield*/, Promise.all(result.data.map(function (record) {
                                                    return handler.afterRead(record, dataProvider);
                                                }))];
                                        case 1:
                                            _d.data = _e.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            _b = 0, afterReadHandlers_1 = afterReadHandlers;
                            _c.label = 10;
                        case 10:
                            if (!(_b < afterReadHandlers_1.length)) return [3 /*break*/, 13];
                            handler = afterReadHandlers_1[_b];
                            return [5 /*yield**/, _loop_1(handler)];
                        case 11:
                            _c.sent();
                            _c.label = 12;
                        case 12:
                            _b++;
                            return [3 /*break*/, 10];
                        case 13: return [2 /*return*/, result];
                    }
                });
            });
        }, getOne: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeGetOneHandlers, _i, beforeGetOneHandlers_1, handler, result, afterGetOneHandlers, _a, afterGetOneHandlers_1, handler, afterReadHandlers, _b, afterReadHandlers_2, handler, _c;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            newParams = params;
                            beforeGetOneHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeGetOne; });
                            _i = 0, beforeGetOneHandlers_1 = beforeGetOneHandlers;
                            _d.label = 1;
                        case 1:
                            if (!(_i < beforeGetOneHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeGetOneHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeGetOne(newParams, dataProvider)];
                        case 2:
                            newParams = _d.sent();
                            _d.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, dataProvider.getOne(resource, newParams)];
                        case 5:
                            result = _d.sent();
                            afterGetOneHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterGetOne; });
                            _a = 0, afterGetOneHandlers_1 = afterGetOneHandlers;
                            _d.label = 6;
                        case 6:
                            if (!(_a < afterGetOneHandlers_1.length)) return [3 /*break*/, 9];
                            handler = afterGetOneHandlers_1[_a];
                            return [4 /*yield*/, handler.afterGetOne(result, dataProvider)];
                        case 7:
                            result = _d.sent();
                            _d.label = 8;
                        case 8:
                            _a++;
                            return [3 /*break*/, 6];
                        case 9:
                            afterReadHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterRead; });
                            _b = 0, afterReadHandlers_2 = afterReadHandlers;
                            _d.label = 10;
                        case 10:
                            if (!(_b < afterReadHandlers_2.length)) return [3 /*break*/, 13];
                            handler = afterReadHandlers_2[_b];
                            _c = result;
                            return [4 /*yield*/, handler.afterRead(result.data, dataProvider)];
                        case 11:
                            _c.data = _d.sent();
                            _d.label = 12;
                        case 12:
                            _b++;
                            return [3 /*break*/, 10];
                        case 13: return [2 /*return*/, result];
                    }
                });
            });
        }, getMany: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeGetManyHandlers, _i, beforeGetManyHandlers_1, handler, result, afterGetManyHandlers, _a, afterGetManyHandlers_1, handler, afterReadHandlers, _loop_2, _b, afterReadHandlers_3, handler;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            newParams = params;
                            beforeGetManyHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeGetMany; });
                            _i = 0, beforeGetManyHandlers_1 = beforeGetManyHandlers;
                            _c.label = 1;
                        case 1:
                            if (!(_i < beforeGetManyHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeGetManyHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeGetMany(newParams, dataProvider)];
                        case 2:
                            newParams = _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, dataProvider.getMany(resource, newParams)];
                        case 5:
                            result = _c.sent();
                            afterGetManyHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterGetMany; });
                            _a = 0, afterGetManyHandlers_1 = afterGetManyHandlers;
                            _c.label = 6;
                        case 6:
                            if (!(_a < afterGetManyHandlers_1.length)) return [3 /*break*/, 9];
                            handler = afterGetManyHandlers_1[_a];
                            return [4 /*yield*/, handler.afterGetMany(result, dataProvider)];
                        case 7:
                            result = _c.sent();
                            _c.label = 8;
                        case 8:
                            _a++;
                            return [3 /*break*/, 6];
                        case 9:
                            afterReadHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterRead; });
                            _loop_2 = function (handler) {
                                var _d;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _d = result;
                                            return [4 /*yield*/, Promise.all(result.data.map(function (record) {
                                                    return handler.afterRead(record, dataProvider);
                                                }))];
                                        case 1:
                                            _d.data = _e.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            _b = 0, afterReadHandlers_3 = afterReadHandlers;
                            _c.label = 10;
                        case 10:
                            if (!(_b < afterReadHandlers_3.length)) return [3 /*break*/, 13];
                            handler = afterReadHandlers_3[_b];
                            return [5 /*yield**/, _loop_2(handler)];
                        case 11:
                            _c.sent();
                            _c.label = 12;
                        case 12:
                            _b++;
                            return [3 /*break*/, 10];
                        case 13: return [2 /*return*/, result];
                    }
                });
            });
        }, getManyReference: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeGetManyReferenceHandlers, _i, beforeGetManyReferenceHandlers_1, handler, result, afterGetManyReferenceHandlers, _a, afterGetManyReferenceHandlers_1, handler, afterReadHandlers, _loop_3, _b, afterReadHandlers_4, handler;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            newParams = params;
                            beforeGetManyReferenceHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeGetManyReference; });
                            _i = 0, beforeGetManyReferenceHandlers_1 = beforeGetManyReferenceHandlers;
                            _c.label = 1;
                        case 1:
                            if (!(_i < beforeGetManyReferenceHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeGetManyReferenceHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeGetManyReference(newParams, dataProvider)];
                        case 2:
                            newParams = _c.sent();
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, dataProvider.getManyReference(resource, newParams)];
                        case 5:
                            result = _c.sent();
                            afterGetManyReferenceHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterGetManyReference; });
                            _a = 0, afterGetManyReferenceHandlers_1 = afterGetManyReferenceHandlers;
                            _c.label = 6;
                        case 6:
                            if (!(_a < afterGetManyReferenceHandlers_1.length)) return [3 /*break*/, 9];
                            handler = afterGetManyReferenceHandlers_1[_a];
                            return [4 /*yield*/, handler.afterGetManyReference(result, dataProvider)];
                        case 7:
                            result = _c.sent();
                            _c.label = 8;
                        case 8:
                            _a++;
                            return [3 /*break*/, 6];
                        case 9:
                            afterReadHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterRead; });
                            _loop_3 = function (handler) {
                                var _d;
                                return __generator(this, function (_e) {
                                    switch (_e.label) {
                                        case 0:
                                            _d = result;
                                            return [4 /*yield*/, Promise.all(result.data.map(function (record) {
                                                    return handler.afterRead(record, dataProvider);
                                                }))];
                                        case 1:
                                            _d.data = _e.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            _b = 0, afterReadHandlers_4 = afterReadHandlers;
                            _c.label = 10;
                        case 10:
                            if (!(_b < afterReadHandlers_4.length)) return [3 /*break*/, 13];
                            handler = afterReadHandlers_4[_b];
                            return [5 /*yield**/, _loop_3(handler)];
                        case 11:
                            _c.sent();
                            _c.label = 12;
                        case 12:
                            _b++;
                            return [3 /*break*/, 10];
                        case 13: return [2 /*return*/, result];
                    }
                });
            });
        }, update: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeUpdateHandlers, _i, beforeUpdateHandlers_1, handler, beforeSaveHandlers, _a, beforeSaveHandlers_1, handler, _b, result, afterUpdateHandlers, _c, afterUpdateHandlers_1, handler, afterSaveHandlers, _d, afterSaveHandlers_1, handler, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            newParams = params;
                            beforeUpdateHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeUpdate; });
                            _i = 0, beforeUpdateHandlers_1 = beforeUpdateHandlers;
                            _f.label = 1;
                        case 1:
                            if (!(_i < beforeUpdateHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeUpdateHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeUpdate(newParams, dataProvider)];
                        case 2:
                            newParams = _f.sent();
                            _f.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            beforeSaveHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeSave; });
                            _a = 0, beforeSaveHandlers_1 = beforeSaveHandlers;
                            _f.label = 5;
                        case 5:
                            if (!(_a < beforeSaveHandlers_1.length)) return [3 /*break*/, 8];
                            handler = beforeSaveHandlers_1[_a];
                            _b = newParams;
                            return [4 /*yield*/, handler.beforeSave(newParams.data, dataProvider)];
                        case 6:
                            _b.data = _f.sent();
                            _f.label = 7;
                        case 7:
                            _a++;
                            return [3 /*break*/, 5];
                        case 8: return [4 /*yield*/, dataProvider.update(resource, newParams)];
                        case 9:
                            result = _f.sent();
                            afterUpdateHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterUpdate; });
                            _c = 0, afterUpdateHandlers_1 = afterUpdateHandlers;
                            _f.label = 10;
                        case 10:
                            if (!(_c < afterUpdateHandlers_1.length)) return [3 /*break*/, 13];
                            handler = afterUpdateHandlers_1[_c];
                            return [4 /*yield*/, handler.afterUpdate(result, dataProvider)];
                        case 11:
                            result = _f.sent();
                            _f.label = 12;
                        case 12:
                            _c++;
                            return [3 /*break*/, 10];
                        case 13:
                            afterSaveHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterSave; });
                            _d = 0, afterSaveHandlers_1 = afterSaveHandlers;
                            _f.label = 14;
                        case 14:
                            if (!(_d < afterSaveHandlers_1.length)) return [3 /*break*/, 17];
                            handler = afterSaveHandlers_1[_d];
                            _e = result;
                            return [4 /*yield*/, handler.afterSave(result.data, dataProvider)];
                        case 15:
                            _e.data = _f.sent();
                            _f.label = 16;
                        case 16:
                            _d++;
                            return [3 /*break*/, 14];
                        case 17: return [2 /*return*/, result];
                    }
                });
            });
        }, create: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeCreateHandlers, _i, beforeCreateHandlers_1, handler, beforeSaveHandlers, _a, beforeSaveHandlers_2, handler, _b, result, afterCreateHandlers, _c, afterCreateHandlers_1, handler, afterSaveHandlers, _d, afterSaveHandlers_2, handler, _e;
                return __generator(this, function (_f) {
                    switch (_f.label) {
                        case 0:
                            newParams = params;
                            beforeCreateHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeCreate; });
                            _i = 0, beforeCreateHandlers_1 = beforeCreateHandlers;
                            _f.label = 1;
                        case 1:
                            if (!(_i < beforeCreateHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeCreateHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeCreate(newParams, dataProvider)];
                        case 2:
                            newParams = _f.sent();
                            _f.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            beforeSaveHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeSave; });
                            _a = 0, beforeSaveHandlers_2 = beforeSaveHandlers;
                            _f.label = 5;
                        case 5:
                            if (!(_a < beforeSaveHandlers_2.length)) return [3 /*break*/, 8];
                            handler = beforeSaveHandlers_2[_a];
                            _b = newParams;
                            return [4 /*yield*/, handler.beforeSave(newParams.data, dataProvider)];
                        case 6:
                            _b.data = _f.sent();
                            _f.label = 7;
                        case 7:
                            _a++;
                            return [3 /*break*/, 5];
                        case 8: return [4 /*yield*/, dataProvider.create(resource, newParams)];
                        case 9:
                            result = _f.sent();
                            afterCreateHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterCreate; });
                            _c = 0, afterCreateHandlers_1 = afterCreateHandlers;
                            _f.label = 10;
                        case 10:
                            if (!(_c < afterCreateHandlers_1.length)) return [3 /*break*/, 13];
                            handler = afterCreateHandlers_1[_c];
                            return [4 /*yield*/, handler.afterCreate(result, dataProvider)];
                        case 11:
                            result = _f.sent();
                            _f.label = 12;
                        case 12:
                            _c++;
                            return [3 /*break*/, 10];
                        case 13:
                            afterSaveHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterSave; });
                            _d = 0, afterSaveHandlers_2 = afterSaveHandlers;
                            _f.label = 14;
                        case 14:
                            if (!(_d < afterSaveHandlers_2.length)) return [3 /*break*/, 17];
                            handler = afterSaveHandlers_2[_d];
                            _e = result;
                            return [4 /*yield*/, handler.afterSave(result.data, dataProvider)];
                        case 15:
                            _e.data = _f.sent();
                            _f.label = 16;
                        case 16:
                            _d++;
                            return [3 /*break*/, 14];
                        case 17: return [2 /*return*/, result];
                    }
                });
            });
        }, delete: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeDeleteHandlers, _i, beforeDeleteHandlers_1, handler, result, afterDeleteHandlers, _a, afterDeleteHandlers_1, handler;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newParams = params;
                            beforeDeleteHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeDelete; });
                            _i = 0, beforeDeleteHandlers_1 = beforeDeleteHandlers;
                            _b.label = 1;
                        case 1:
                            if (!(_i < beforeDeleteHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeDeleteHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeDelete(newParams, dataProvider)];
                        case 2:
                            newParams = _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, dataProvider.delete(resource, newParams)];
                        case 5:
                            result = _b.sent();
                            afterDeleteHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterDelete; });
                            _a = 0, afterDeleteHandlers_1 = afterDeleteHandlers;
                            _b.label = 6;
                        case 6:
                            if (!(_a < afterDeleteHandlers_1.length)) return [3 /*break*/, 9];
                            handler = afterDeleteHandlers_1[_a];
                            return [4 /*yield*/, handler.afterDelete(result, dataProvider)];
                        case 7:
                            result = _b.sent();
                            _b.label = 8;
                        case 8:
                            _a++;
                            return [3 /*break*/, 6];
                        case 9: return [2 /*return*/, result];
                    }
                });
            });
        }, updateMany: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeUpdateManyHandlers, _i, beforeUpdateManyHandlers_1, handler, beforeSaveHandlers, _a, beforeSaveHandlers_3, handler, _b, result, afterUpdateManyHandlers, _c, afterUpdateManyHandlers_1, handler, afterSaveHandlers, records, _loop_4, _d, afterSaveHandlers_3, handler;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            newParams = params;
                            beforeUpdateManyHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeUpdateMany; });
                            _i = 0, beforeUpdateManyHandlers_1 = beforeUpdateManyHandlers;
                            _e.label = 1;
                        case 1:
                            if (!(_i < beforeUpdateManyHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeUpdateManyHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeUpdateMany(newParams, dataProvider)];
                        case 2:
                            newParams = _e.sent();
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            beforeSaveHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeSave; });
                            _a = 0, beforeSaveHandlers_3 = beforeSaveHandlers;
                            _e.label = 5;
                        case 5:
                            if (!(_a < beforeSaveHandlers_3.length)) return [3 /*break*/, 8];
                            handler = beforeSaveHandlers_3[_a];
                            _b = newParams;
                            return [4 /*yield*/, handler.beforeSave(newParams.data, dataProvider)];
                        case 6:
                            _b.data = _e.sent();
                            _e.label = 7;
                        case 7:
                            _a++;
                            return [3 /*break*/, 5];
                        case 8: return [4 /*yield*/, dataProvider.updateMany(resource, newParams)];
                        case 9:
                            result = _e.sent();
                            afterUpdateManyHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterUpdateMany; });
                            _c = 0, afterUpdateManyHandlers_1 = afterUpdateManyHandlers;
                            _e.label = 10;
                        case 10:
                            if (!(_c < afterUpdateManyHandlers_1.length)) return [3 /*break*/, 13];
                            handler = afterUpdateManyHandlers_1[_c];
                            return [4 /*yield*/, handler.afterUpdateMany(result, dataProvider)];
                        case 11:
                            result = _e.sent();
                            _e.label = 12;
                        case 12:
                            _c++;
                            return [3 /*break*/, 10];
                        case 13:
                            afterSaveHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterSave; });
                            if (!(afterSaveHandlers.length > 0)) return [3 /*break*/, 18];
                            return [4 /*yield*/, dataProvider.getMany(resource, {
                                    ids: result.data,
                                })];
                        case 14:
                            records = (_e.sent()).data;
                            _loop_4 = function (handler) {
                                return __generator(this, function (_f) {
                                    switch (_f.label) {
                                        case 0: return [4 /*yield*/, Promise.all(records.map(function (record) {
                                                return handler.afterSave(record, dataProvider);
                                            }))];
                                        case 1:
                                            _f.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            };
                            _d = 0, afterSaveHandlers_3 = afterSaveHandlers;
                            _e.label = 15;
                        case 15:
                            if (!(_d < afterSaveHandlers_3.length)) return [3 /*break*/, 18];
                            handler = afterSaveHandlers_3[_d];
                            return [5 /*yield**/, _loop_4(handler)];
                        case 16:
                            _e.sent();
                            _e.label = 17;
                        case 17:
                            _d++;
                            return [3 /*break*/, 15];
                        case 18: return [2 /*return*/, result];
                    }
                });
            });
        }, deleteMany: function (resource, params) {
            return __awaiter(this, void 0, void 0, function () {
                var newParams, beforeDeleteManyHandlers, _i, beforeDeleteManyHandlers_1, handler, result, afterDeleteManyHandlers, _a, afterDeleteManyHandlers_1, handler;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            newParams = params;
                            beforeDeleteManyHandlers = handlers.filter(function (h) { return h.resource === resource && h.beforeDeleteMany; });
                            _i = 0, beforeDeleteManyHandlers_1 = beforeDeleteManyHandlers;
                            _b.label = 1;
                        case 1:
                            if (!(_i < beforeDeleteManyHandlers_1.length)) return [3 /*break*/, 4];
                            handler = beforeDeleteManyHandlers_1[_i];
                            return [4 /*yield*/, handler.beforeDeleteMany(newParams, dataProvider)];
                        case 2:
                            newParams = _b.sent();
                            _b.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [4 /*yield*/, dataProvider.deleteMany(resource, newParams)];
                        case 5:
                            result = _b.sent();
                            afterDeleteManyHandlers = handlers.filter(function (h) { return h.resource === resource && h.afterDeleteMany; });
                            _a = 0, afterDeleteManyHandlers_1 = afterDeleteManyHandlers;
                            _b.label = 6;
                        case 6:
                            if (!(_a < afterDeleteManyHandlers_1.length)) return [3 /*break*/, 9];
                            handler = afterDeleteManyHandlers_1[_a];
                            return [4 /*yield*/, handler.afterDeleteMany(result, dataProvider)];
                        case 7:
                            result = _b.sent();
                            _b.label = 8;
                        case 8:
                            _a++;
                            return [3 /*break*/, 6];
                        case 9: return [2 /*return*/, result];
                    }
                });
            });
        } });
};
exports.withLifecycleCallbacks = withLifecycleCallbacks;
//# sourceMappingURL=withLifecycleCallbacks.js.map