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
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { warning } from 'ra-core';
import { PageTitleConfigurable } from './PageTitleConfigurable';
export var Title = function (props) {
    var defaultTitle = props.defaultTitle, title = props.title, preferenceKey = props.preferenceKey, rest = __rest(props, ["defaultTitle", "title", "preferenceKey"]);
    var _a = useState(function () {
        return typeof document !== 'undefined'
            ? document.getElementById('react-admin-title')
            : null;
    }), container = _a[0], setContainer = _a[1];
    // on first mount, we don't have the container yet, so we wait for it
    useEffect(function () {
        setContainer(function (container) {
            if (container)
                return container;
            return typeof document !== 'undefined'
                ? document.getElementById('react-admin-title')
                : null;
        });
    }, []);
    if (!container)
        return null;
    warning(!defaultTitle && !title, 'Missing title prop in <Title> element');
    return createPortal(React.createElement(PageTitleConfigurable, __assign({ title: title, defaultTitle: defaultTitle, preferenceKey: preferenceKey }, rest)), container);
};
export var TitlePropType = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
]);
Title.propTypes = {
    defaultTitle: PropTypes.string,
    className: PropTypes.string,
    record: PropTypes.any,
    title: TitlePropType,
};
//# sourceMappingURL=Title.js.map