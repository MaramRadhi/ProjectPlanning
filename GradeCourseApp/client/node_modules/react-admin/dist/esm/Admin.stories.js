import * as React from 'react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import { Admin } from './Admin';
import { Resource, testDataProvider } from 'ra-core';
export default {
    title: 'react-admin/Admin',
};
var PostList = function () { return React.createElement("h1", null, "Post List"); };
var CommentList = function () { return React.createElement("h1", null, "Comment List"); };
export var Basic = function () { return (React.createElement(Admin, { dataProvider: testDataProvider() },
    React.createElement(Resource, { name: "posts", list: PostList }),
    React.createElement(Resource, { name: "comments", list: CommentList }))); };
export var InsideRouter = function () { return (React.createElement(MemoryRouter, null,
    React.createElement(Admin, { dataProvider: testDataProvider() },
        React.createElement(Resource, { name: "posts", list: PostList }),
        React.createElement(Resource, { name: "comments", list: CommentList })))); };
export var SubPath = function () { return (React.createElement(MemoryRouter, null,
    React.createElement(Routes, null,
        React.createElement(Route, { path: "/", element: React.createElement(React.Fragment, null,
                React.createElement("h1", null, "Main"),
                React.createElement("div", null,
                    React.createElement(Link, { to: "/admin" }, "Go to admin"))) }),
        React.createElement(Route, { path: "/admin/*", element: React.createElement(Admin, { dataProvider: testDataProvider(), basename: "/admin" },
                React.createElement(Resource, { name: "posts", list: PostList }),
                React.createElement(Resource, { name: "comments", list: CommentList })) })))); };
//# sourceMappingURL=Admin.stories.js.map