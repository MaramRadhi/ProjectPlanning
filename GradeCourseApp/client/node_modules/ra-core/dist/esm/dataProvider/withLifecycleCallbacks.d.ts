import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from '../types';
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
export declare const withLifecycleCallbacks: (dataProvider: DataProvider, handlers: ResourceCallbacks[]) => DataProvider;
export declare type ResourceCallbacks<T extends RaRecord = any> = {
    resource: string;
    afterCreate?: (result: CreateResult<T>, dataProvider: DataProvider) => Promise<CreateResult<T>>;
    afterDelete?: (result: DeleteResult<T>, dataProvider: DataProvider) => Promise<DeleteResult<T>>;
    afterDeleteMany?: (result: DeleteManyResult<T>, dataProvider: DataProvider) => Promise<DeleteManyResult<T>>;
    afterGetList?: (result: GetListResult<T>, dataProvider: DataProvider) => Promise<GetListResult<T>>;
    afterGetMany?: (result: GetManyResult<T>, dataProvider: DataProvider) => Promise<GetManyResult<T>>;
    afterGetManyReference?: (result: GetManyReferenceResult<T>, dataProvider: DataProvider) => Promise<GetManyReferenceResult<T>>;
    afterGetOne?: (result: GetOneResult<T>, dataProvider: DataProvider) => Promise<GetOneResult<T>>;
    afterUpdate?: (result: UpdateResult<T>, dataProvider: DataProvider) => Promise<UpdateResult<T>>;
    afterUpdateMany?: (result: UpdateManyResult<T>, dataProvider: DataProvider) => Promise<UpdateManyResult<T>>;
    beforeCreate?: (params: CreateParams<T>, dataProvider: DataProvider) => Promise<CreateParams<T>>;
    beforeDelete?: (params: DeleteParams<T>, dataProvider: DataProvider) => Promise<DeleteParams<T>>;
    beforeDeleteMany?: (params: DeleteManyParams<T>, dataProvider: DataProvider) => Promise<DeleteManyParams<T>>;
    beforeGetList?: (params: GetListParams, dataProvider: DataProvider) => Promise<GetListParams>;
    beforeGetMany?: (params: GetManyParams, dataProvider: DataProvider) => Promise<GetManyParams>;
    beforeGetManyReference?: (params: GetManyReferenceParams, dataProvider: DataProvider) => Promise<GetManyReferenceParams>;
    beforeGetOne?: (params: GetOneParams<T>, dataProvider: DataProvider) => Promise<GetOneParams<T>>;
    beforeUpdate?: (params: UpdateParams<T>, dataProvider: DataProvider) => Promise<UpdateParams<T>>;
    beforeUpdateMany?: (params: UpdateManyParams<T>, dataProvider: DataProvider) => Promise<UpdateManyParams<T>>;
    /**
     * Modify the data before it is sent to the dataProvider.
     *
     * Used in create, update, and updateMany
     *
     * Note: This callback doesn't modify the record itself, but the data argument
     * (which may be a diff, especially when called with updateMany).
     */
    beforeSave?: (data: Partial<T>, dataProvider: DataProvider) => Promise<T>;
    /**
     * Update a record after it has been read from the dataProvider
     *
     * Used in getOne, getList, getMany, and getManyReference
     */
    afterRead?: (record: T, dataProvider: DataProvider) => Promise<T>;
    /**
     * Use the record after it is returned by the dataProvider.
     *
     * Used in create, update, and updateMany
     */
    afterSave?: (record: T, dataProvider: DataProvider) => Promise<T>;
};
//# sourceMappingURL=withLifecycleCallbacks.d.ts.map