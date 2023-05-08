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
import { isValidElement } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Tab as MuiTab, Stack } from '@mui/material';
import { useTranslate } from 'ra-core';
import clsx from 'clsx';
import { Labeled } from '../Labeled';
/**
 * Tab element for the TabbedShowLayout.
 *
 * The `<Tab>` component accepts the following props:
 *
 * - label: The string displayed for each tab
 * - icon: The icon to show before the label (optional). Must be a component.
 * - path: The string used for custom urls
 *
 * It is also available as TabbedShowLayout.Tab.
 *
 * @example
 *     // in src/posts.js
 *     import * as React from "react";
 *     import FavoriteIcon from '@mui/icons-material/Favorite';
 *     import PersonPinIcon from '@mui/icons-material/PersonPin';
 *     import { Show, TabbedShowLayout, TextField } from 'react-admin';
 *
 *     export const PostShow = (props) => (
 *         <Show {...props}>
 *             <TabbedShowLayout>
 *                 <TabbedShowLayout.Tab label="Content" icon={<FavoriteIcon />}>
 *                     <TextField source="title" />
 *                     <TextField source="subtitle" />
 *                </TabbedShowLayout.Tab>
 *                 <TabbedShowLayout.Tab label="Metadata" icon={<PersonIcon />} path="metadata">
 *                     <TextField source="category" />
 *                </TabbedShowLayout.Tab>
 *             </TabbedShowLayout>
 *         </Show>
 *     );
 *
 *     // in src/App.js
 *     import * as React from "react";
 *     import { Admin, Resource } from 'react-admin';
 *
 *     import { PostShow } from './posts';
 *
 *     const App = () => (
 *         <Admin dataProvider={...}>
 *             <Resource name="posts" show={PostShow} />
 *         </Admin>
 *     );
 *     export default App;
 */
export var Tab = function (_a) {
    var children = _a.children, contentClassName = _a.contentClassName, context = _a.context, count = _a.count, className = _a.className, divider = _a.divider, icon = _a.icon, label = _a.label, record = _a.record, _b = _a.spacing, spacing = _b === void 0 ? 1 : _b, _c = _a.syncWithLocation, syncWithLocation = _c === void 0 ? true : _c, value = _a.value, rest = __rest(_a, ["children", "contentClassName", "context", "count", "className", "divider", "icon", "label", "record", "spacing", "syncWithLocation", "value"]);
    var translate = useTranslate();
    var location = useLocation();
    var propsForLink = {
        component: Link,
        to: __assign(__assign({}, location), { pathname: value }),
    };
    var renderHeader = function () {
        var tabLabel = typeof label === 'string' ? translate(label, { _: label }) : label;
        if (count !== undefined) {
            tabLabel = (React.createElement("span", null,
                tabLabel,
                " (",
                count,
                ")"));
        }
        return (React.createElement(MuiTab, __assign({ key: "tab-header-".concat(value), label: tabLabel, value: value, icon: icon, className: clsx('show-tab', className) }, (syncWithLocation ? propsForLink : {}), rest)));
    };
    var renderContent = function () { return (React.createElement(Stack, { className: contentClassName, spacing: spacing, divider: divider }, React.Children.map(children, function (field) {
        return field && isValidElement(field) ? (React.createElement(Labeled, { key: field.props.source, className: clsx('ra-field', field.props.source &&
                "ra-field-".concat(field.props.source), field.props.className) }, field)) : null;
    }))); };
    return context === 'header' ? renderHeader() : renderContent();
};
Tab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    context: PropTypes.oneOf(['header', 'content']),
    count: PropTypes.node,
    icon: PropTypes.element,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
    path: PropTypes.string,
    spacing: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
//# sourceMappingURL=Tab.js.map