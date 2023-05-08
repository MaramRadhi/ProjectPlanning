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
var _a;
import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@mui/material';
import clsx from 'clsx';
import { ComponentPropType, useEditContext, useResourceDefinition, } from 'ra-core';
import { EditActions as DefaultActions } from './EditActions';
import { Title } from '../layout';
export var EditView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, className = props.className, _b = props.component, Content = _b === void 0 ? Card : _b, title = props.title, mutationMode = props.mutationMode, rest = __rest(props, ["actions", "aside", "children", "className", "component", "title", "mutationMode"]);
    var hasShow = useResourceDefinition().hasShow;
    var _c = useEditContext(props), resource = _c.resource, defaultTitle = _c.defaultTitle, record = _c.record;
    var finalActions = typeof actions === 'undefined' && hasShow ? (React.createElement(DefaultActions, null)) : (actions);
    if (!children) {
        return null;
    }
    return (React.createElement(Root, __assign({ className: clsx('edit-page', className) }, sanitizeRestProps(rest)),
        React.createElement(Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".edit.title") }),
        finalActions,
        React.createElement("div", { className: clsx(EditClasses.main, (_a = {},
                _a[EditClasses.noActions] = !finalActions,
                _a)) },
            React.createElement(Content, { className: EditClasses.card }, record ? children : React.createElement(CardContent, null, "\u00A0")),
            aside)));
};
EditView.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    aside: PropTypes.element,
    children: PropTypes.element,
    className: PropTypes.string,
    component: ComponentPropType,
    defaultTitle: PropTypes.any,
    hasList: PropTypes.bool,
    hasShow: PropTypes.bool,
    mutationMode: PropTypes.oneOf(['pessimistic', 'optimistic', 'undoable']),
    mutationOptions: PropTypes.object,
    record: PropTypes.object,
    redirect: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
    ]),
    resource: PropTypes.string,
    save: PropTypes.func,
    title: PropTypes.node,
};
var sanitizeRestProps = function (_a) {
    var _b = _a.addMiddleware, addMiddleware = _b === void 0 ? null : _b, _c = _a.defaultTitle, defaultTitle = _c === void 0 ? null : _c, _d = _a.hasCreate, hasCreate = _d === void 0 ? null : _d, _e = _a.hasEdit, hasEdit = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, _g = _a.hasShow, hasShow = _g === void 0 ? null : _g, _h = _a.history, history = _h === void 0 ? null : _h, _j = _a.id, id = _j === void 0 ? null : _j, _k = _a.isFetching, isFetching = _k === void 0 ? null : _k, _l = _a.isLoading, isLoading = _l === void 0 ? null : _l, _m = _a.location, location = _m === void 0 ? null : _m, _o = _a.match, match = _o === void 0 ? null : _o, _p = _a.options, options = _p === void 0 ? null : _p, _q = _a.queryOptions, queryOptions = _q === void 0 ? null : _q, _r = _a.mutationOptions, mutationOptions = _r === void 0 ? null : _r, _s = _a.permissions, permissions = _s === void 0 ? null : _s, _t = _a.refetch, refetch = _t === void 0 ? null : _t, _u = _a.removeMiddleware, removeMiddleware = _u === void 0 ? null : _u, _v = _a.resource, resource = _v === void 0 ? null : _v, _w = _a.save, save = _w === void 0 ? null : _w, _x = _a.saving, saving = _x === void 0 ? null : _x, _y = _a.transform, transform = _y === void 0 ? null : _y, rest = __rest(_a, ["addMiddleware", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "isFetching", "isLoading", "location", "match", "options", "queryOptions", "mutationOptions", "permissions", "refetch", "removeMiddleware", "resource", "save", "saving", "transform"]);
    return rest;
};
var PREFIX = 'RaEdit';
export var EditClasses = {
    main: "".concat(PREFIX, "-main"),
    noActions: "".concat(PREFIX, "-noActions"),
    card: "".concat(PREFIX, "-card"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["& .".concat(EditClasses.main)] = {
        display: 'flex',
        alignItems: 'flex-start',
    },
    _a["& .".concat(EditClasses.noActions)] = {
        marginTop: '1em',
    },
    _a["& .".concat(EditClasses.card)] = {
        flex: '1 1 auto',
    },
    _a));
//# sourceMappingURL=EditView.js.map