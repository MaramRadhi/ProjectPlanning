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
import { useState, useCallback, useRef, useContext, } from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, styled } from '@mui/material';
import ContentFilter from '@mui/icons-material/FilterList';
import lodashGet from 'lodash/get';
import isEqual from 'lodash/isEqual';
import { useListContext, useResourceContext, useTranslate } from 'ra-core';
import { stringify } from 'query-string';
import { useNavigate } from 'react-router';
import { FilterButtonMenuItem } from './FilterButtonMenuItem';
import { Button } from '../../button';
import { FilterContext } from '../FilterContext';
import { extractValidSavedQueries, useSavedQueries } from './useSavedQueries';
import { AddSavedQueryDialog } from './AddSavedQueryDialog';
import { RemoveSavedQueryDialog } from './RemoveSavedQueryDialog';
export var FilterButton = function (props) {
    var filtersProp = props.filters, className = props.className, disableSaveQuery = props.disableSaveQuery, rest = __rest(props, ["filters", "className", "disableSaveQuery"]);
    var filters = useContext(FilterContext) || filtersProp;
    var resource = useResourceContext(props);
    var translate = useTranslate();
    var savedQueries = useSavedQueries(resource)[0];
    var navigate = useNavigate();
    var _a = useListContext(props), _b = _a.displayedFilters, displayedFilters = _b === void 0 ? {} : _b, filterValues = _a.filterValues, perPage = _a.perPage, setFilters = _a.setFilters, showFilter = _a.showFilter, sort = _a.sort;
    var hasFilterValues = !isEqual(filterValues, {});
    var validSavedQueries = extractValidSavedQueries(savedQueries);
    var hasSavedCurrentQuery = validSavedQueries.some(function (savedQuery) {
        return isEqual(savedQuery.value, {
            filter: filterValues,
            sort: sort,
            perPage: perPage,
            displayedFilters: displayedFilters,
        });
    });
    var _c = useState(false), open = _c[0], setOpen = _c[1];
    var anchorEl = useRef();
    if (filters === undefined) {
        throw new Error('FilterButton requires filters prop to be set');
    }
    var hiddenFilters = filters.filter(function (filterElement) {
        return !filterElement.props.alwaysOn &&
            !displayedFilters[filterElement.props.source] &&
            typeof lodashGet(filterValues, filterElement.props.source) ===
                'undefined';
    });
    var handleClickButton = useCallback(function (event) {
        // This prevents ghost click.
        event.preventDefault();
        setOpen(true);
        anchorEl.current = event.currentTarget;
    }, [anchorEl, setOpen]);
    var handleRequestClose = useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var handleShow = useCallback(function (_a) {
        var source = _a.source, defaultValue = _a.defaultValue;
        showFilter(source, defaultValue === '' ? undefined : defaultValue);
        setOpen(false);
    }, [showFilter, setOpen]);
    // add query dialog state
    var _d = useState(false), addSavedQueryDialogOpen = _d[0], setAddSavedQueryDialogOpen = _d[1];
    var hideAddSavedQueryDialog = function () {
        setAddSavedQueryDialogOpen(false);
    };
    var showAddSavedQueryDialog = function () {
        setOpen(false);
        setAddSavedQueryDialogOpen(true);
    };
    // remove query dialog state
    var _e = useState(false), removeSavedQueryDialogOpen = _e[0], setRemoveSavedQueryDialogOpen = _e[1];
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
        React.createElement(Button, { className: "add-filter", label: "ra.action.add_filter", "aria-haspopup": "true", onClick: handleClickButton },
            React.createElement(ContentFilter, null)),
        React.createElement(Menu, { open: open, anchorEl: anchorEl.current, onClose: handleRequestClose },
            hiddenFilters.map(function (filterElement, index) { return (React.createElement(FilterButtonMenuItem, { key: filterElement.props.source, filter: filterElement, resource: resource, onShow: handleShow, autoFocus: index === 0 })); }),
            validSavedQueries.map(function (savedQuery, index) {
                return isEqual(savedQuery.value, {
                    filter: filterValues,
                    sort: sort,
                    perPage: perPage,
                    displayedFilters: displayedFilters,
                }) ? (React.createElement(MenuItem, { onClick: showRemoveSavedQueryDialog, key: index }, translate('ra.saved_queries.remove_label_with_name', {
                    _: 'Remove query "%{name}"',
                    name: savedQuery.label,
                }))) : (React.createElement(MenuItem, { onClick: function () {
                        navigate({
                            search: stringify({
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
            hasFilterValues && !hasSavedCurrentQuery && !disableSaveQuery && (React.createElement(MenuItem, { onClick: showAddSavedQueryDialog }, translate('ra.saved_queries.new_label', {
                _: 'Save current query...',
            }))),
            hasFilterValues && (React.createElement(MenuItem, { onClick: function () { return setFilters({}, {}, false); } }, translate('ra.action.remove_all_filters', {
                _: 'Remove all filters',
            })))),
        !disableSaveQuery && (React.createElement(React.Fragment, null,
            React.createElement(AddSavedQueryDialog, { open: addSavedQueryDialogOpen, onClose: hideAddSavedQueryDialog }),
            React.createElement(RemoveSavedQueryDialog, { open: removeSavedQueryDialogOpen, onClose: hideRemoveSavedQueryDialog })))));
};
var sanitizeRestProps = function (_a) {
    var _b = _a.displayedFilters, displayedFilters = _b === void 0 ? null : _b, _c = _a.filterValues, filterValues = _c === void 0 ? null : _c, _d = _a.showFilter, showFilter = _d === void 0 ? null : _d, rest = __rest(_a, ["displayedFilters", "filterValues", "showFilter"]);
    return rest;
};
FilterButton.propTypes = {
    resource: PropTypes.string,
    filters: PropTypes.arrayOf(PropTypes.node),
    displayedFilters: PropTypes.object,
    filterValues: PropTypes.object,
    showFilter: PropTypes.func,
    className: PropTypes.string,
};
var PREFIX = 'RaFilterButton';
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        display: 'inline-block',
    });
});
//# sourceMappingURL=FilterButton.js.map