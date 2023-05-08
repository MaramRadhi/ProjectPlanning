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
exports.FilterButton = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var FilterList_1 = __importDefault(require("@mui/icons-material/FilterList"));
var get_1 = __importDefault(require("lodash/get"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var ra_core_1 = require("ra-core");
var query_string_1 = require("query-string");
var react_router_1 = require("react-router");
var FilterButtonMenuItem_1 = require("./FilterButtonMenuItem");
var button_1 = require("../../button");
var FilterContext_1 = require("../FilterContext");
var useSavedQueries_1 = require("./useSavedQueries");
var AddSavedQueryDialog_1 = require("./AddSavedQueryDialog");
var RemoveSavedQueryDialog_1 = require("./RemoveSavedQueryDialog");
var FilterButton = function (props) {
    var filtersProp = props.filters, className = props.className, disableSaveQuery = props.disableSaveQuery, rest = __rest(props, ["filters", "className", "disableSaveQuery"]);
    var filters = (0, react_1.useContext)(FilterContext_1.FilterContext) || filtersProp;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var translate = (0, ra_core_1.useTranslate)();
    var savedQueries = (0, useSavedQueries_1.useSavedQueries)(resource)[0];
    var navigate = (0, react_router_1.useNavigate)();
    var _a = (0, ra_core_1.useListContext)(props), _b = _a.displayedFilters, displayedFilters = _b === void 0 ? {} : _b, filterValues = _a.filterValues, perPage = _a.perPage, setFilters = _a.setFilters, showFilter = _a.showFilter, sort = _a.sort;
    var hasFilterValues = !(0, isEqual_1.default)(filterValues, {});
    var validSavedQueries = (0, useSavedQueries_1.extractValidSavedQueries)(savedQueries);
    var hasSavedCurrentQuery = validSavedQueries.some(function (savedQuery) {
        return (0, isEqual_1.default)(savedQuery.value, {
            filter: filterValues,
            sort: sort,
            perPage: perPage,
            displayedFilters: displayedFilters,
        });
    });
    var _c = (0, react_1.useState)(false), open = _c[0], setOpen = _c[1];
    var anchorEl = (0, react_1.useRef)();
    if (filters === undefined) {
        throw new Error('FilterButton requires filters prop to be set');
    }
    var hiddenFilters = filters.filter(function (filterElement) {
        return !filterElement.props.alwaysOn &&
            !displayedFilters[filterElement.props.source] &&
            typeof (0, get_1.default)(filterValues, filterElement.props.source) ===
                'undefined';
    });
    var handleClickButton = (0, react_1.useCallback)(function (event) {
        // This prevents ghost click.
        event.preventDefault();
        setOpen(true);
        anchorEl.current = event.currentTarget;
    }, [anchorEl, setOpen]);
    var handleRequestClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, [setOpen]);
    var handleShow = (0, react_1.useCallback)(function (_a) {
        var source = _a.source, defaultValue = _a.defaultValue;
        showFilter(source, defaultValue === '' ? undefined : defaultValue);
        setOpen(false);
    }, [showFilter, setOpen]);
    // add query dialog state
    var _d = (0, react_1.useState)(false), addSavedQueryDialogOpen = _d[0], setAddSavedQueryDialogOpen = _d[1];
    var hideAddSavedQueryDialog = function () {
        setAddSavedQueryDialogOpen(false);
    };
    var showAddSavedQueryDialog = function () {
        setOpen(false);
        setAddSavedQueryDialogOpen(true);
    };
    // remove query dialog state
    var _e = (0, react_1.useState)(false), removeSavedQueryDialogOpen = _e[0], setRemoveSavedQueryDialogOpen = _e[1];
    var hideRemoveSavedQueryDialog = function () {
        setRemoveSavedQueryDialogOpen(false);
    };
    var showRemoveSavedQueryDialog = function () {
        setOpen(false);
        setRemoveSavedQueryDialogOpen(true);
    };
    if (hiddenFilters.length === 0 &&
        validSavedQueries.length === 0 &&
        !hasFilterValues) {
        return null;
    }
    return (React.createElement(Root, __assign({ className: className }, sanitizeRestProps(rest)),
        React.createElement(button_1.Button, { className: "add-filter", label: "ra.action.add_filter", "aria-haspopup": "true", onClick: handleClickButton },
            React.createElement(FilterList_1.default, null)),
        React.createElement(material_1.Menu, { open: open, anchorEl: anchorEl.current, onClose: handleRequestClose },
            hiddenFilters.map(function (filterElement, index) { return (React.createElement(FilterButtonMenuItem_1.FilterButtonMenuItem, { key: filterElement.props.source, filter: filterElement, resource: resource, onShow: handleShow, autoFocus: index === 0 })); }),
            validSavedQueries.map(function (savedQuery, index) {
                return (0, isEqual_1.default)(savedQuery.value, {
                    filter: filterValues,
                    sort: sort,
                    perPage: perPage,
                    displayedFilters: displayedFilters,
                }) ? (React.createElement(material_1.MenuItem, { onClick: showRemoveSavedQueryDialog, key: index }, translate('ra.saved_queries.remove_label_with_name', {
                    _: 'Remove query "%{name}"',
                    name: savedQuery.label,
                }))) : (React.createElement(material_1.MenuItem, { onClick: function () {
                        navigate({
                            search: (0, query_string_1.stringify)({
                                filter: JSON.stringify(savedQuery.value.filter),
                                sort: savedQuery.value.sort.field,
                                order: savedQuery.value.sort.order,
                                page: 1,
                                perPage: savedQuery.value.perPage,
                                displayedFilters: JSON.stringify(savedQuery.value.displayedFilters),
                            }),
                        });
                        setOpen(false);
                    }, key: index }, savedQuery.label));
            }),
            hasFilterValues && !hasSavedCurrentQuery && !disableSaveQuery && (React.createElement(material_1.MenuItem, { onClick: showAddSavedQueryDialog }, translate('ra.saved_queries.new_label', {
                _: 'Save current query...',
            }))),
            hasFilterValues && (React.createElement(material_1.MenuItem, { onClick: function () { return setFilters({}, {}, false); } }, translate('ra.action.remove_all_filters', {
                _: 'Remove all filters',
            })))),
        !disableSaveQuery && (React.createElement(React.Fragment, null,
            React.createElement(AddSavedQueryDialog_1.AddSavedQueryDialog, { open: addSavedQueryDialogOpen, onClose: hideAddSavedQueryDialog }),
            React.createElement(RemoveSavedQueryDialog_1.RemoveSavedQueryDialog, { open: removeSavedQueryDialogOpen, onClose: hideRemoveSavedQueryDialog })))));
};
exports.FilterButton = FilterButton;
var sanitizeRestProps = function (_a) {
    var _b = _a.displayedFilters, displayedFilters = _b === void 0 ? null : _b, _c = _a.filterValues, filterValues = _c === void 0 ? null : _c, _d = _a.showFilter, showFilter = _d === void 0 ? null : _d, rest = __rest(_a, ["displayedFilters", "filterValues", "showFilter"]);
    return rest;
};
exports.FilterButton.propTypes = {
    resource: prop_types_1.default.string,
    filters: prop_types_1.default.arrayOf(prop_types_1.default.node),
    displayedFilters: prop_types_1.default.object,
    filterValues: prop_types_1.default.object,
    showFilter: prop_types_1.default.func,
    className: prop_types_1.default.string,
};
var PREFIX = 'RaFilterButton';
var Root = (0, material_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'inline-block',
    });
});
//# sourceMappingURL=FilterButton.js.map