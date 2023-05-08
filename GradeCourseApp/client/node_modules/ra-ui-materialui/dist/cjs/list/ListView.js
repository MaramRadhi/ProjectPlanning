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
exports.ListClasses = exports.ListView = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var Title_1 = require("../layout/Title");
var ListToolbar_1 = require("./ListToolbar");
var pagination_1 = require("./pagination");
var ListActions_1 = require("./ListActions");
var Empty_1 = require("./Empty");
var layout_1 = require("../layout");
var defaultActions = React.createElement(ListActions_1.ListActions, null);
var defaultPagination = React.createElement(pagination_1.Pagination, null);
var defaultEmpty = React.createElement(Empty_1.Empty, null);
var DefaultComponent = Card_1.default;
var ListView = function (props) {
    var _a = props.actions, actions = _a === void 0 ? defaultActions : _a, aside = props.aside, filters = props.filters, bulkActionButtons = props.bulkActionButtons, emptyWhileLoading = props.emptyWhileLoading, hasCreate = props.hasCreate, _b = props.pagination, pagination = _b === void 0 ? defaultPagination : _b, children = props.children, className = props.className, _c = props.component, Content = _c === void 0 ? DefaultComponent : _c, title = props.title, _d = props.empty, empty = _d === void 0 ? defaultEmpty : _d, rest = __rest(props, ["actions", "aside", "filters", "bulkActionButtons", "emptyWhileLoading", "hasCreate", "pagination", "children", "className", "component", "title", "empty"]);
    var _e = (0, ra_core_1.useListContext)(props), defaultTitle = _e.defaultTitle, data = _e.data, error = _e.error, total = _e.total, isLoading = _e.isLoading, filterValues = _e.filterValues, resource = _e.resource;
    if (!children || (!data && isLoading && emptyWhileLoading)) {
        return null;
    }
    var renderList = function () { return (React.createElement("div", { className: exports.ListClasses.main },
        (filters || actions) && (React.createElement(ListToolbar_1.ListToolbar, { filters: filters, actions: actions, hasCreate: hasCreate })),
        React.createElement(Content, { className: exports.ListClasses.content }, bulkActionButtons &&
            children &&
            React.isValidElement(children)
            ? // FIXME remove in 5.0
                (0, react_1.cloneElement)(children, {
                    bulkActionButtons: bulkActionButtons,
                })
            : children),
        error ? (React.createElement(layout_1.Error, { error: error, resetErrorBoundary: null })) : (pagination !== false && pagination))); };
    var renderEmpty = function () {
        return empty !== false && (0, react_1.cloneElement)(empty, { hasCreate: hasCreate });
    };
    var shouldRenderEmptyPage = !isLoading &&
        total === 0 &&
        !Object.keys(filterValues).length &&
        empty !== false;
    return (React.createElement(Root, __assign({ className: (0, clsx_1.default)('list-page', className) }, rest),
        React.createElement(Title_1.Title, { title: title, defaultTitle: defaultTitle, preferenceKey: "".concat(resource, ".list.title") }),
        shouldRenderEmptyPage ? renderEmpty() : renderList(),
        aside));
};
exports.ListView = ListView;
exports.ListView.propTypes = {
    // @ts-ignore-line
    actions: prop_types_1.default.oneOfType([prop_types_1.default.bool, prop_types_1.default.element]),
    aside: prop_types_1.default.element,
    children: prop_types_1.default.node,
    className: prop_types_1.default.string,
    component: ra_core_1.ComponentPropType,
    // @ts-ignore-line
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string.isRequired,
        order: prop_types_1.default.string.isRequired,
    }),
    data: prop_types_1.default.any,
    defaultTitle: prop_types_1.default.string,
    displayedFilters: prop_types_1.default.object,
    emptyWhileLoading: prop_types_1.default.bool,
    // @ts-ignore-line
    exporter: prop_types_1.default.oneOfType([prop_types_1.default.func, prop_types_1.default.bool]),
    filterDefaultValues: prop_types_1.default.object,
    filters: prop_types_1.default.oneOfType([
        prop_types_1.default.element,
        prop_types_1.default.arrayOf(prop_types_1.default.element),
    ]),
    filterValues: prop_types_1.default.object,
    hasCreate: prop_types_1.default.bool,
    hideFilter: prop_types_1.default.func,
    ids: prop_types_1.default.array,
    loading: prop_types_1.default.bool,
    onSelect: prop_types_1.default.func,
    onToggleItem: prop_types_1.default.func,
    onUnselectItems: prop_types_1.default.func,
    page: prop_types_1.default.number,
    // @ts-ignore-line
    pagination: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.bool]),
    perPage: prop_types_1.default.number,
    refresh: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    selectedIds: prop_types_1.default.array,
    setFilters: prop_types_1.default.func,
    setPage: prop_types_1.default.func,
    setPerPage: prop_types_1.default.func,
    setSort: prop_types_1.default.func,
    showFilter: prop_types_1.default.func,
    title: Title_1.TitlePropType,
    total: prop_types_1.default.number,
};
var PREFIX = 'RaList';
exports.ListClasses = {
    main: "".concat(PREFIX, "-main"),
    content: "".concat(PREFIX, "-content"),
    actions: "".concat(PREFIX, "-actions"),
    noResults: "".concat(PREFIX, "-noResults"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b, _c;
    var theme = _a.theme;
    return (_b = {
            display: 'flex'
        },
        _b["& .".concat(exports.ListClasses.main)] = {
            flex: '1 1 auto',
            display: 'flex',
            flexDirection: 'column',
        },
        _b["& .".concat(exports.ListClasses.content)] = (_c = {
                position: 'relative'
            },
            _c[theme.breakpoints.down('sm')] = {
                boxShadow: 'none',
            },
            _c.overflow = 'inherit',
            _c),
        _b["& .".concat(exports.ListClasses.actions)] = {
            zIndex: 2,
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
        },
        _b["& .".concat(exports.ListClasses.noResults)] = { padding: 20 },
        _b);
});
//# sourceMappingURL=ListView.js.map