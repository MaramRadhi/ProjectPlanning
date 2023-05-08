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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from 'react';
import PropTypes from 'prop-types';
import { useCheckMinimumRequiredProps } from 'ra-core';
import { EditView } from './EditView';
import { EditBase } from 'ra-core';
/**
 * Page component for the Edit view
 *
 * The `<Edit>` component renders the page title and actions,
 * fetches the record from the data provider.
 * It is not responsible for rendering the actual form -
 * that's the job of its child component (usually `<SimpleForm>`),
 * to which it passes the `record` as prop.
 *
 * The <Edit> component accepts the following props:
 *
 * - actions
 * - aside
 * - component
 * - title
 * - mutationMode
 * - mutationOptions
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Edit, SimpleForm, TextInput } from 'react-admin';
 *
 * export const PostEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *             <TextInput source="title" />
 *         </SimpleForm>
 *     </Edit>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostEdit } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" edit={PostEdit} />
 *     </Admin>
 * );
 * export default App;
 */
export var Edit = function (props) {
    useCheckMinimumRequiredProps('Edit', ['children'], props);
    var resource = props.resource, id = props.id, mutationMode = props.mutationMode, mutationOptions = props.mutationOptions, queryOptions = props.queryOptions, redirect = props.redirect, transform = props.transform, disableAuthentication = props.disableAuthentication, rest = __rest(props, ["resource", "id", "mutationMode", "mutationOptions", "queryOptions", "redirect", "transform", "disableAuthentication"]);
    return (React.createElement(EditBase, { resource: resource, id: id, mutationMode: mutationMode, mutationOptions: mutationOptions, queryOptions: queryOptions, redirect: redirect, transform: transform, disableAuthentication: disableAuthentication },
        React.createElement(EditView, __assign({}, rest))));
};
Edit.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    aside: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    disableAuthentication: PropTypes.bool,
    hasCreate: PropTypes.bool,
    hasEdit: PropTypes.bool,
    hasShow: PropTypes.bool,
    hasList: PropTypes.bool,
    id: PropTypes.any,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    mutationOptions: PropTypes.object,
    queryOptions: PropTypes.object,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    title: PropTypes.node,
    transform: PropTypes.func,
    sx: PropTypes.any,
};
//# sourceMappingURL=Edit.js.map