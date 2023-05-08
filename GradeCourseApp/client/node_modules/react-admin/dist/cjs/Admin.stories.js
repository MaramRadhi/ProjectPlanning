"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubPath = exports.InsideRouter = exports.Basic = void 0;
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Admin_1 = require("./Admin");
var ra_core_1 = require("ra-core");
exports.default = {
    title: 'react-admin/Admin',
};
var PostList = function () { return React.createElement("h1", null, "Post List"); };
var CommentList = function () { return React.createElement("h1", null, "Comment List"); };
var Basic = function () { return (React.createElement(Admin_1.Admin, { dataProvider: (0, ra_core_1.testDataProvider)() },
    React.createElement(ra_core_1.Resource, { name: "posts", list: PostList }),
    React.createElement(ra_core_1.Resource, { name: "comments", list: CommentList }))); };
exports.Basic = Basic;
var InsideRouter = function () { return (React.createElement(react_router_dom_1.MemoryRouter, null,
    React.createElement(Admin_1.Admin, { dataProvider: (0, ra_core_1.testDataProvider)() },
        React.createElement(ra_core_1.Resource, { name: "posts", list: PostList }),
        React.createElement(ra_core_1.Resource, { name: "comments", list: CommentList })))); };
exports.InsideRouter = InsideRouter;
var SubPath = function () { return (React.createElement(react_router_dom_1.MemoryRouter, null,
    React.createElement(react_router_dom_1.Routes, null,
        React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(React.Fragment, null,
                React.createElement("h1", null, "Main"),
                React.createElement("div", null,
                    React.createElement(react_router_dom_1.Link, { to: "/admin" }, "Go to admin"))) }),
        React.createElement(react_router_dom_1.Route, { path: "/admin/*", element: React.createElement(Admin_1.Admin, { dataProvider: (0, ra_core_1.testDataProvider)(), basename: "/admin" },
                React.createElement(ra_core_1.Resource, { name: "posts", list: PostList }),
                React.createElement(ra_core_1.Resource, { name: "comments", list: CommentList })) })))); };
exports.SubPath = SubPath;
//# sourceMappingURL=Admin.stories.js.map