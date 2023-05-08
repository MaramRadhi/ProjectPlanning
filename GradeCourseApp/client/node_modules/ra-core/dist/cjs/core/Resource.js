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
exports.Resource = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ResourceContextProvider_1 = require("./ResourceContextProvider");
var Resource = function (props) {
    var Create = props.create, Edit = props.edit, List = props.list, name = props.name, Show = props.show;
    return (React.createElement(ResourceContextProvider_1.ResourceContextProvider, { value: name },
        React.createElement(react_router_dom_1.Routes, null,
            Create && (React.createElement(react_router_dom_1.Route, { path: "create/*", element: (0, react_1.isValidElement)(Create) ? Create : React.createElement(Create, null) })),
            Show && (React.createElement(react_router_dom_1.Route, { path: ":id/show/*", element: (0, react_1.isValidElement)(Show) ? Show : React.createElement(Show, null) })),
            Edit && (React.createElement(react_router_dom_1.Route, { path: ":id/*", element: (0, react_1.isValidElement)(Edit) ? Edit : React.createElement(Edit, null) })),
            List && (React.createElement(react_router_dom_1.Route, { path: "/*", element: (0, react_1.isValidElement)(List) ? List : React.createElement(List, null) })),
            props.children)));
};
exports.Resource = Resource;
exports.Resource.raName = 'Resource';
exports.Resource.registerResource = function (_a) {
    var create = _a.create, edit = _a.edit, icon = _a.icon, list = _a.list, name = _a.name, options = _a.options, show = _a.show, recordRepresentation = _a.recordRepresentation, hasCreate = _a.hasCreate, hasEdit = _a.hasEdit, hasShow = _a.hasShow;
    return ({
        name: name,
        options: options,
        hasList: !!list,
        hasCreate: !!create || !!hasCreate,
        hasEdit: !!edit || !!hasEdit,
        hasShow: !!show || !!hasShow,
        icon: icon,
        recordRepresentation: recordRepresentation,
    });
};
//# sourceMappingURL=Resource.js.map