import * as React from 'react';
import { memo } from 'react';
import { IconButton, ListItem, ListItemButton, ListItemText, ListItemSecondaryAction, styled, } from '@mui/material';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import isEqual from 'lodash/isEqual';
import { useNavigate } from 'react-router-dom';
import { stringify } from 'query-string';
import { useListContext } from 'ra-core';
var arePropsEqual = function (prevProps, nextProps) {
    return prevProps.label === nextProps.label &&
        isEqual(prevProps.value, nextProps.value);
};
export var SavedQueryFilterListItem = memo(function (props) {
    var className = props.className, label = props.label, sx = props.sx, value = props.value;
    var _a = useListContext(), filterValues = _a.filterValues, sort = _a.sort, perPage = _a.perPage, displayedFilters = _a.displayedFilters;
    var navigate = useNavigate();
    var isSelected = isEqual(value, {
        filter: filterValues,
        sort: sort,
        perPage: perPage,
        displayedFilters: displayedFilters,
    });
    var addFilter = function () {
        navigate({
            search: stringify({
                filter: JSON.stringify(value.filter),
                sort: value.sort.field,
                order: value.sort.order,
                page: 1,
                perPage: value.perPage,
                displayedFilters: JSON.stringify(value.displayedFilters),
            }),
        });
    };
    var removeFilter = function () {
        navigate({
            search: stringify({
                filter: JSON.stringify({}),
            }),
        });
    };
    var toggleFilter = function () {
        return isSelected ? removeFilter() : addFilter();
    };
    return (
    // @ts-ignore
    React.createElement(StyledListItem, { onClick: toggleFilter, selected: isSelected, className: className, sx: sx, disablePadding: true },
        React.createElement(ListItemButton, { disableGutters: true, className: SavedQueryFilterListItemClasses.listItemButton },
            React.createElement(ListItemText, { primary: label, className: SavedQueryFilterListItemClasses.listItemText }),
            isSelected && (React.createElement(ListItemSecondaryAction, null,
                React.createElement(IconButton, { size: "small", onClick: toggleFilter },
                    React.createElement(CancelIcon, null)))))));
}, arePropsEqual);
var PREFIX = 'RaSavedQueryFilterListItem';
export var SavedQueryFilterListItemClasses = {
    listItemButton: "".concat(PREFIX, "-listItemButton"),
    listItemText: "".concat(PREFIX, "-listItemText"),
};
var StyledListItem = styled(ListItem, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function () {
    var _a;
    return (_a = {},
        _a["& .".concat(SavedQueryFilterListItemClasses.listItemButton)] = {
            paddingRight: '2em',
            paddingLeft: '2em',
        },
        _a["& .".concat(SavedQueryFilterListItemClasses.listItemText)] = {
            margin: 0,
        },
        _a);
});
//# sourceMappingURL=SavedQueryFilterListItem.js.map