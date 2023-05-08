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
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useCreateContext } from 'ra-core';
import clsx from 'clsx';
import { Title } from '../layout';
export var CreateView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, className = props.className, _b = props.component, Content = _b === void 0 ? Card : _b, title = props.title, rest = __rest(props, ["actions", "aside", "children", "className", "component", "title"]);
    var _c = useCreateContext(props), resource = _c.resource, defaultTitle = _c.defaultTitle;
    return (React.createElement(Root, __assign({ className: clsx('create-page', className) }, sanitizeRestProps(rest)),
        React.createElement(Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".create.title") }),
        actions,
        React.createElement("div", { className: clsx(CreateClasses.main, (_a = {},
                _a[CreateClasses.noActions] = !actions,
                _a)) },
            React.createElement(Content, { className: CreateClasses.card }, children),
            aside)));
};
CreateView.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    aside: PropTypes.element,
    children: PropTypes.node,
    className: PropTypes.string,
    defaultTitle: PropTypes.any,
    hasList: PropTypes.bool,
    hasShow: PropTypes.bool,
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
    var _b = _a.addMiddleware, addMiddleware = _b === void 0 ? null : _b, _c = _a.defaultTitle, defaultTitle = _c === void 0 ? null : _c, _d = _a.hasCreate, hasCreate = _d === void 0 ? null : _d, _e = _a.hasEdit, hasEdit = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, _g = _a.hasShow, hasShow = _g === void 0 ? null : _g, _h = _a.history, history = _h === void 0 ? null : _h, _j = _a.isFetching, isFetching = _j === void 0 ? null : _j, _k = _a.isLoading, isLoading = _k === void 0 ? null : _k, _l = _a.location, location = _l === void 0 ? null : _l, _m = _a.match, match = _m === void 0 ? null : _m, _o = _a.mutationOptions, mutationOptions = _o === void 0 ? null : _o, _p = _a.options, options = _p === void 0 ? null : _p, _q = _a.permissions, permissions = _q === void 0 ? null : _q, _r = _a.save, save = _r === void 0 ? null : _r, _s = _a.saving, saving = _s === void 0 ? null : _s, _t = _a.transform, transform = _t === void 0 ? null : _t, _u = _a.removeMiddleware, removeMiddleware = _u === void 0 ? null : _u, rest = __rest(_a, ["addMiddleware", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "isFetching", "isLoading", "location", "match", "mutationOptions", "options", "permissions", "save", "saving", "transform", "removeMiddleware"]);
    return rest;
};
var PREFIX = 'RaCreate';
export var CreateClasses = {
    main: "".concat(PREFIX, "-main"),
    noActions: "".concat(PREFIX, "-noActions"),
    card: "".concat(PREFIX, "-card"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(CreateClasses.main)] = {
            display: 'flex',
        },
        _b["& .".concat(CreateClasses.noActions)] = (_c = {},
            _c[theme.breakpoints.up('sm')] = {
                marginTop: '1em',
            },
            _c),
        _b["& .".concat(CreateClasses.card)] = {
            flex: '1 1 auto',
        },
        _b);
});
//# sourceMappingURL=CreateView.js.map