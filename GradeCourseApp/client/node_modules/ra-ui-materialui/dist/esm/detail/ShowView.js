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
import clsx from 'clsx';
import { useShowContext, useResourceDefinition } from 'ra-core';
import { ShowActions } from './ShowActions';
import { Title } from '../layout';
var defaultActions = React.createElement(ShowActions, null);
export var ShowView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, className = props.className, _b = props.component, Content = _b === void 0 ? Card : _b, _c = props.emptyWhileLoading, emptyWhileLoading = _c === void 0 ? false : _c, title = props.title, rest = __rest(props, ["actions", "aside", "children", "className", "component", "emptyWhileLoading", "title"]);
    var _d = useShowContext(props), resource = _d.resource, defaultTitle = _d.defaultTitle, record = _d.record;
    var hasEdit = useResourceDefinition(props).hasEdit;
    var finalActions = typeof actions === 'undefined' && hasEdit ? defaultActions : actions;
    if (!children || (!record && emptyWhileLoading)) {
        return null;
    }
    return (React.createElement(Root, __assign({ className: clsx('show-page', className) }, sanitizeRestProps(rest)),
        React.createElement(Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".show.title") }),
        finalActions !== false && finalActions,
        React.createElement("div", { className: clsx(ShowClasses.main, (_a = {},
                _a[ShowClasses.noActions] = !finalActions,
                _a)) },
            React.createElement(Content, { className: ShowClasses.card }, children),
            aside)));
};
ShowView.propTypes = {
    actions: PropTypes.oneOfType([PropTypes.element, PropTypes.bool]),
    children: PropTypes.node,
    className: PropTypes.string,
    emptyWhileLoading: PropTypes.bool,
    title: PropTypes.any,
};
var sanitizeRestProps = function (_a) {
    var _b = _a.defaultTitle, defaultTitle = _b === void 0 ? null : _b, _c = _a.hasCreate, hasCreate = _c === void 0 ? null : _c, _d = _a.hasEdit, hasEdit = _d === void 0 ? null : _d, _e = _a.hasList, hasList = _e === void 0 ? null : _e, _f = _a.hasShow, hasShow = _f === void 0 ? null : _f, _g = _a.history, history = _g === void 0 ? null : _g, _h = _a.id, id = _h === void 0 ? null : _h, _j = _a.isLoading, isLoading = _j === void 0 ? null : _j, _k = _a.isFetching, isFetching = _k === void 0 ? null : _k, _l = _a.location, location = _l === void 0 ? null : _l, _m = _a.match, match = _m === void 0 ? null : _m, _o = _a.options, options = _o === void 0 ? null : _o, _p = _a.refetch, refetch = _p === void 0 ? null : _p, _q = _a.permissions, permissions = _q === void 0 ? null : _q, rest = __rest(_a, ["defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "isLoading", "isFetching", "location", "match", "options", "refetch", "permissions"]);
    return rest;
};
var PREFIX = 'RaShow';
export var ShowClasses = {
    main: "".concat(PREFIX, "-main"),
    noActions: "".concat(PREFIX, "-noActions"),
    card: "".concat(PREFIX, "-card"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(ShowClasses.main)] = {
            display: 'flex',
        },
        _b["& .".concat(ShowClasses.noActions)] = {
            marginTop: '1em',
        },
        _b["& .".concat(ShowClasses.card)] = {
            flex: '1 1 auto',
        },
        _b);
});
//# sourceMappingURL=ShowView.js.map