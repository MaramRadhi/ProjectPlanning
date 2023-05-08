"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowClasses = exports.ShowView = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var ShowActions_1 = require("./ShowActions");
var layout_1 = require("../layout");
var defaultActions = React.createElement(ShowActions_1.ShowActions, null);
var ShowView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, className = props.className, _b = props.component, Content = _b === void 0 ? material_1.Card : _b, _c = props.emptyWhileLoading, emptyWhileLoading = _c === void 0 ? false : _c, title = props.title, rest = __rest(props, ["actions", "aside", "children", "className", "component", "emptyWhileLoading", "title"]);
    var _d = (0, ra_core_1.useShowContext)(props), resource = _d.resource, defaultTitle = _d.defaultTitle, record = _d.record;
    var hasEdit = (0, ra_core_1.useResourceDefinition)(props).hasEdit;
    var finalActions = typeof actions === 'undefined' && hasEdit ? defaultActions : actions;
    if (!children || (!record && emptyWhileLoading)) {
        return null;
    }
    return (React.createElement(Root, __assign({ className: (0, clsx_1.default)('show-page', className) }, sanitizeRestProps(rest)),
        React.createElement(layout_1.Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".show.title") }),
        finalActions !== false && finalActions,
        React.createElement("div", { className: (0, clsx_1.default)(exports.ShowClasses.main, (_a = {},
                _a[exports.ShowClasses.noActions] = !finalActions,
                _a)) },
            React.createElement(Content, { className: exports.ShowClasses.card }, children),
            aside)));
};
exports.ShowView = ShowView;
exports.ShowView.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    emptyWhileLoading: prop_types_1.default.bool,
    title: prop_types_1.default.any,
};
var sanitizeRestProps = function (_a) {
    var _b = _a.defaultTitle, defaultTitle = _b === void 0 ? null : _b, _c = _a.hasCreate, hasCreate = _c === void 0 ? null : _c, _d = _a.hasEdit, hasEdit = _d === void 0 ? null : _d, _e = _a.hasList, hasList = _e === void 0 ? null : _e, _f = _a.hasShow, hasShow = _f === void 0 ? null : _f, _g = _a.history, history = _g === void 0 ? null : _g, _h = _a.id, id = _h === void 0 ? null : _h, _j = _a.isLoading, isLoading = _j === void 0 ? null : _j, _k = _a.isFetching, isFetching = _k === void 0 ? null : _k, _l = _a.location, location = _l === void 0 ? null : _l, _m = _a.match, match = _m === void 0 ? null : _m, _o = _a.options, options = _o === void 0 ? null : _o, _p = _a.refetch, refetch = _p === void 0 ? null : _p, _q = _a.permissions, permissions = _q === void 0 ? null : _q, rest = __rest(_a, ["defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "isLoading", "isFetching", "location", "match", "options", "refetch", "permissions"]);
    return rest;
};
var PREFIX = 'RaShow';
exports.ShowClasses = {
    main: "".concat(PREFIX, "-main"),
    noActions: "".concat(PREFIX, "-noActions"),
    card: "".concat(PREFIX, "-card"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(exports.ShowClasses.main)] = {
            display: 'flex',
        },
        _b["& .".concat(exports.ShowClasses.noActions)] = {
            marginTop: '1em',
        },
        _b["& .".concat(exports.ShowClasses.card)] = {
            flex: '1 1 auto',
        },
        _b);
});
//# sourceMappingURL=ShowView.js.map