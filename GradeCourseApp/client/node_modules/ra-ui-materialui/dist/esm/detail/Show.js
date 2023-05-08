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
import { ShowBase } from 'ra-core';
import { ShowView } from './ShowView';
/**
 * Page component for the Show view
 *
 * The `<Show>` component handles the headless logic of the Show page:
 * - it calls useShowController to fetch the record from the data provider,
 * - it creates a ShowContext and a RecordContext,
 * - it computes the default page title
 * - it renders the page layout with the correct title and actions
 *
 * `<Show>` is not responsible for rendering the actual page -
 * that's the job of its child component (usually `<SimpleShowLayout>`).
 *
 * @example
 *
 * // in src/posts.js
 * import * as React from "react";
 * import { Show, SimpleShowLayout, TextField } from 'react-admin';
 *
 * export const PostShow = () => (
 *     <Show>
 *         <SimpleShowLayout>
 *             <TextField source="title" />
 *         </SimpleShowLayout>
 *     </Show>
 * );
 *
 * // in src/App.js
 * import * as React from "react";
 * import { Admin, Resource } from 'react-admin';
 *
 * import { PostShow } from './posts';
 *
 * const App = () => (
 *     <Admin dataProvider={...}>
 *         <Resource name="posts" show={PostShow} />
 *     </Admin>
 * );
 * export default App;
 *
 * @param {ShowProps} props
 * @param {ReactElement|false} props.actions An element to display above the page content, or false to disable actions.
 * @param {string} props.className A className to apply to the page content.
 * @param {ElementType} props.component The component to use as root component (div by default).
 * @param {boolean} props.emptyWhileLoading Do not display the page content while loading the initial data.
 * @param {string} props.id The id of the resource to display (grabbed from the route params if not defined).
 * @param {Object} props.queryClient Options to pass to the react-query useQuery hook.
 * @param {string} props.resource The resource to fetch from the data provider (grabbed from the ResourceContext if not defined).
 * @param {Object} props.sx Custom style object.
 * @param {ElementType|string} props.title The title of the page. Defaults to `#{resource} #${id}`.
 *
 * @see ShowView for the actual rendering
 */
export var Show = function (_a) {
    var id = _a.id, resource = _a.resource, queryOptions = _a.queryOptions, disableAuthentication = _a.disableAuthentication, rest = __rest(_a, ["id", "resource", "queryOptions", "disableAuthentication"]);
    return (React.createElement(ShowBase, { id: id, disableAuthentication: disableAuthentication, queryOptions: queryOptions, resource: resource },
        React.createElement(ShowView, __assign({}, rest))));
};
Show.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disableAuthentication: PropTypes.bool,
    emptyWhileLoading: PropTypes.bool,
    component: PropTypes.elementType,
    resource: PropTypes.string,
    title: PropTypes.node,
    sx: PropTypes.any,
};
//# sourceMappingURL=Show.js.map