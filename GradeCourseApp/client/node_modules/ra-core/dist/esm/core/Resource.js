import * as React from 'react';
import { isValidElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ResourceContextProvider } from './ResourceContextProvider';
export var Resource = function (props) {
    var Create = props.create, Edit = props.edit, List = props.list, name = props.name, Show = props.show;
    return (React.createElement(ResourceContextProvider, { value: name },
        React.createElement(Routes, null,
            Create && (React.createElement(Route, { path: "create/*", element: isValidElement(Create) ? Create : React.createElement(Create, null) })),
            Show && (React.createElement(Route, { path: ":id/show/*", element: isValidElement(Show) ? Show : React.createElement(Show, null) })),
            Edit && (React.createElement(Route, { path: ":id/*", element: isValidElement(Edit) ? Edit : React.createElement(Edit, null) })),
            List && (React.createElement(Route, { path: "/*", element: isValidElement(List) ? List : React.createElement(List, null) })),
            props.children)));
};
Resource.raName = 'Resource';
Resource.registerResource = function (_a) {
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