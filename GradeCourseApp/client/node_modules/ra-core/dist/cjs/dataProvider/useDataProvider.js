"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDataProvider = void 0;
var react_1 = require("react");
var DataProviderContext_1 = __importDefault(require("./DataProviderContext"));
var defaultDataProvider_1 = require("./defaultDataProvider");
var validateResponseFormat_1 = __importDefault(require("./validateResponseFormat"));
var useLogoutIfAccessDenied_1 = __importDefault(require("../auth/useLogoutIfAccessDenied"));
var dataFetchActions_1 = require("./dataFetchActions");
/**
 * Hook for getting a dataProvider
 *
 * Gets a dataProvider object, which behaves just like the real dataProvider
 * (same methods returning a Promise). But it's actually a Proxy object,
 * which validates the response format, and logs the user out upon error
 * if authProvider.checkError() rejects.
 *
 * @return dataProvider
 *
 * @example Basic usage
 *
 * import * as React from 'react';
 * import { useState } from 'react';
 * import { useDataProvider } from 'react-admin';
 *
 * const PostList = () => {
 *      const [posts, setPosts] = useState([])
 *      const dataProvider = useDataProvider();
 *      useEffect(() => {
 *          dataProvider.getList('posts', { filter: { status: 'pending' }})
 *            .then(({ data }) => setPosts(data));
 *      }, [])
 *
 *      return (
 *          <Fragment>
 *              {posts.map((post, key) => <PostDetail post={post} key={key} />)}
 *          </Fragment>
 *     );
 * }
 *
 * @example Handling all states (loading, error, success)
 *
 * import { useState, useEffect } from 'react';
 * import { useDataProvider } from 'react-admin';
 *
 * const UserProfile = ({ userId }) => {
 *     const dataProvider = useDataProvider();
 *     const [user, setUser] = useState();
 *     const [loading, setLoading] = useState(true);
 *     const [error, setError] = useState();
 *     useEffect(() => {
 *         dataProvider.getOne('users', { id: userId })
 *             .then(({ data }) => {
 *                 setUser(data);
 *                 setLoading(false);
 *             })
 *             .catch(error => {
 *                 setError(error);
 *                 setLoading(false);
 *             })
 *     }, []);
 *
 *     if (loading) return <Loading />;
 *     if (error) return <Error />
 *     if (!user) return null;
 *
 *     return (
 *         <ul>
 *             <li>Name: {user.name}</li>
 *             <li>Email: {user.email}</li>
 *         </ul>
 *     )
 * }
 */
var arrayReturnTypes = ['getList', 'getMany', 'getManyReference'];
var useDataProvider = function () {
    var dataProvider = ((0, react_1.useContext)(DataProviderContext_1.default) ||
        defaultDataProvider_1.defaultDataProvider);
    var logoutIfAccessDenied = (0, useLogoutIfAccessDenied_1.default)();
    var dataProviderProxy = (0, react_1.useMemo)(function () {
        return new Proxy(dataProvider, {
            get: function (target, name) {
                if (typeof name === 'symbol' || name === 'then') {
                    return;
                }
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var type = name.toString();
                    if (typeof dataProvider[type] !== 'function') {
                        throw new Error("Unknown dataProvider function: ".concat(type));
                    }
                    try {
                        return dataProvider[type]
                            .apply(dataProvider, args)
                            .then(function (response) {
                            if (process.env.NODE_ENV !== 'production' &&
                                dataFetchActions_1.reactAdminFetchActions.includes(type)) {
                                (0, validateResponseFormat_1.default)(response, type);
                            }
                            return response;
                        })
                            .catch(function (error) {
                            if (process.env.NODE_ENV !== 'production') {
                                console.error(error);
                            }
                            return logoutIfAccessDenied(error).then(function (loggedOut) {
                                if (loggedOut)
                                    return {
                                        data: arrayReturnTypes.includes(type)
                                            ? []
                                            : {},
                                    };
                                throw error;
                            });
                        });
                    }
                    catch (e) {
                        if (process.env.NODE_ENV !== 'production') {
                            console.error(e);
                        }
                        throw new Error('The dataProvider threw an error. It should return a rejected Promise instead.');
                    }
                };
            },
        });
    }, [dataProvider, logoutIfAccessDenied]);
    return dataProviderProxy;
};
exports.useDataProvider = useDataProvider;
//# sourceMappingURL=useDataProvider.js.map