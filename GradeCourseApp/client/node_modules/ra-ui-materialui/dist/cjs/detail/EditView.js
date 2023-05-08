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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditClasses = exports.EditView = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var EditActions_1 = require("./EditActions");
var layout_1 = require("../layout");
var EditView = function (props) {
    var _a;
    var actions = props.actions, aside = props.aside, children = props.children, className = props.className, _b = props.component, Content = _b === void 0 ? material_1.Card : _b, title = props.title, mutationMode = props.mutationMode, rest = __rest(props, ["actions", "aside", "children", "className", "component", "title", "mutationMode"]);
    var hasShow = (0, ra_core_1.useResourceDefinition)().hasShow;
    var _c = (0, ra_core_1.useEditContext)(props), resource = _c.resource, defaultTitle = _c.defaultTitle, record = _c.record;
    var finalActions = typeof actions === 'undefined' && hasShow ? (React.createElement(EditActions_1.EditActions, null)) : (actions);
    if (!children) {
        return null;
    }
    return (React.createElement(Root, __assign({ className: (0, clsx_1.default)('edit-page', className) }, sanitizeRestProps(rest)),
        React.createElement(layout_1.Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".edit.title") }),
        finalActions,
        React.createElement("div", { className: (0, clsx_1.default)(exports.EditClasses.main, (_a = {},
                _a[exports.EditClasses.noActions] = !finalActions,
                _a)) },
            React.createElement(Content, { className: exports.EditClasses.card }, record ? children : React.createElement(material_1.CardContent, null, "\u00A0")),
            aside)));
};
exports.EditView = EditView;
exports.EditView.propTypes = {
    actions: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    aside: prop_types_1.default.element,
    children: prop_types_1.default.element,
    className: prop_types_1.default.string,
    component: ra_core_1.ComponentPropType,
    defaultTitle: prop_types_1.default.any,
    hasList: prop_types_1.default.bool,
    hasShow: prop_types_1.default.bool,
    mutationMode: prop_types_1.default.oneOf(['pessimistic', 'optimistic', 'undoable']),
    mutationOptions: prop_types_1.default.object,
    record: prop_types_1.default.object,
    redirect: prop_types_1.default.oneOfType([
        prop_types_1.default.string,
        prop_types_1.default.bool,
        prop_types_1.default.func,
    ]),
    resource: prop_types_1.default.string,
    save: prop_types_1.default.func,
    title: prop_types_1.default.node,
};
var sanitizeRestProps = function (_a) {
    var _b = _a.addMiddleware, addMiddleware = _b === void 0 ? null : _b, _c = _a.defaultTitle, defaultTitle = _c === void 0 ? null : _c, _d = _a.hasCreate, hasCreate = _d === void 0 ? null : _d, _e = _a.hasEdit, hasEdit = _e === void 0 ? null : _e, _f = _a.hasList, hasList = _f === void 0 ? null : _f, _g = _a.hasShow, hasShow = _g === void 0 ? null : _g, _h = _a.history, history = _h === void 0 ? null : _h, _j = _a.id, id = _j === void 0 ? null : _j, _k = _a.isFetching, isFetching = _k === void 0 ? null : _k, _l = _a.isLoading, isLoading = _l === void 0 ? null : _l, _m = _a.location, location = _m === void 0 ? null : _m, _o = _a.match, match = _o === void 0 ? null : _o, _p = _a.options, options = _p === void 0 ? null : _p, _q = _a.queryOptions, queryOptions = _q === void 0 ? null : _q, _r = _a.mutationOptions, mutationOptions = _r === void 0 ? null : _r, _s = _a.permissions, permissions = _s === void 0 ? null : _s, _t = _a.refetch, refetch = _t === void 0 ? null : _t, _u = _a.removeMiddleware, removeMiddleware = _u === void 0 ? null : _u, _v = _a.resource, resource = _v === void 0 ? null : _v, _w = _a.save, save = _w === void 0 ? null : _w, _x = _a.saving, saving = _x === void 0 ? null : _x, _y = _a.transform, transform = _y === void 0 ? null : _y, rest = __rest(_a, ["addMiddleware", "defaultTitle", "hasCreate", "hasEdit", "hasList", "hasShow", "history", "id", "isFetching", "isLoading", "location", "match", "options", "queryOptions", "mutationOptions", "permissions", "refetch", "removeMiddleware", "resource", "save", "saving", "transform"]);
    return rest;
};
var PREFIX = 'RaEdit';
exports.EditClasses = {
    main: "".concat(PREFIX, "-main"),
    noActions: "".concat(PREFIX, "-noActions"),
    card: "".concat(PREFIX, "-card"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["& .".concat(exports.EditClasses.main)] = {
        display: 'flex',
        alignItems: 'flex-start',
    },
    _a["& .".concat(exports.EditClasses.noActions)] = {
        marginTop: '1em',
    },
    _a["& .".concat(exports.EditClasses.card)] = {
        flex: '1 1 auto',
    },
    _a));
//# sourceMappingURL=EditView.js.map