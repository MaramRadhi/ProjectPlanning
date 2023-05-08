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
import { styled } from '@mui/material/styles';
import { memo, isValidElement } from 'react';
import { IconButton, ListItem, ListItemButton, ListItemText, ListItemSecondaryAction, } from '@mui/material';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import { useTranslate, useListFilterContext, shallowEqual, useEvent, } from 'ra-core';
import matches from 'lodash/matches';
import pickBy from 'lodash/pickBy';
var arePropsEqual = function (prevProps, nextProps) {
    return prevProps.label === nextProps.label &&
        shallowEqual(prevProps.value, nextProps.value);
};
/**
 * Button to enable/disable a list filter.
 *
 * Expects 2 props:
 *
 * - label: The text (or React element) to be displayed for this item.
 *   If it's a string, the component will translate it.
 * - value: An object to be merged into the filter value when enabling the filter
 *   (e.g. { is_published: true, published_at_gte: '2020-07-08' })
 *
 * @example
 *
 * import * as React from 'react';
 * import { Card, CardContent } from '@mui/material';
 * import MailIcon from '@mui/icons-material/MailOutline';
 * import { FilterList, FilterListItem } from 'react-admin';
 *
 * const FilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterList
 *                 label="Subscribed to newsletter"
 *                 icon={<MailIcon />}
 *             >
 *                 <FilterListItem
 *                     label="Yes"
 *                     value={{ has_newsletter: true }}
 *                  />
 *                 <FilterListItem
 *                     label="No"
 *                     value={{ has_newsletter: false }}
 *                  />
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 *
 * @example // The value prop can contain multiple keys
 *
 * import * as React from 'react';
 * import {
 *     endOfYesterday,
 *     startOfWeek,
 *     subWeeks,
 *     startOfMonth,
 *     subMonths,
 * } from 'date-fns';
 * import { Card, CardContent } from '@mui/material';
 * import AccessTimeIcon from '@mui/icons-material/AccessTime';
 * import { FilterList, FilterListItem } from 'react-admin';
 *
 * const FilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterList
 *                 label="Last visited"
 *                 icon={<AccessTimeIcon />}
 *             >
 *                 <FilterListItem
 *                     label="Today"
 *                     value={{
 *                         last_seen_gte: endOfYesterday().toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="This week"
 *                     value={{
 *                         last_seen_gte: startOfWeek(
 *                             new Date()
 *                         ).toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Last week"
 *                     value={{
 *                         last_seen_gte: subWeeks(
 *                             startOfWeek(new Date()),
 *                             1
 *                         ).toISOString(),
 *                         last_seen_lte: startOfWeek(
 *                             new Date()
 *                         ).toISOString(),
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="This month"
 *                     value={{
 *                         last_seen_gte: startOfMonth(
 *                             new Date()
 *                         ).toISOString(),
 *                         last_seen_lte: undefined,
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Last month"
 *                     value={{
 *                         last_seen_gte: subMonths(
 *                             startOfMonth(new Date()),
 *                             1
 *                         ).toISOString(),
 *                         last_seen_lte: startOfMonth(
 *                             new Date()
 *                         ).toISOString(),
 *                     }}
 *                 />
 *                 <FilterListItem
 *                     label="Earlier"
 *                     value={{
 *                         last_seen_gte: undefined,
 *                         last_seen_lte: subMonths(
 *                             startOfMonth(new Date()),
 *                             1
 *                         ).toISOString(),
 *                     }}
 *                 />
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 */
export var FilterListItem = memo(function (props) {
    var label = props.label, value = props.value, _a = props.isSelected, getIsSelected = _a === void 0 ? DefaultIsSelected : _a, _b = props.toggleFilter, userToggleFilter = _b === void 0 ? DefaultToggleFilter : _b, rest = __rest(props, ["label", "value", "isSelected", "toggleFilter"]);
    var _c = useListFilterContext(), filterValues = _c.filterValues, setFilters = _c.setFilters;
    var translate = useTranslate();
    var toggleFilter = useEvent(userToggleFilter);
    // We can't wrap this function with useEvent as it is called in the render phase
    var isSelected = getIsSelected(value, filterValues);
    var handleClick = function () {
        return setFilters(toggleFilter(value, filterValues), null, false);
    };
    return (React.createElement(StyledListItem, __assign({ onClick: handleClick, selected: isSelected, disablePadding: true }, rest),
        React.createElement(ListItemButton, { disableGutters: true, className: FilterListItemClasses.listItemButton },
            React.createElement(ListItemText, { primary: isValidElement(label)
                    ? label
                    : translate(label, { _: label }), className: FilterListItemClasses.listItemText, "data-selected": isSelected ? 'true' : 'false' }),
            isSelected && (React.createElement(ListItemSecondaryAction, { onClick: function (event) {
                    event.stopPropagation();
                    handleClick();
                } },
                React.createElement(IconButton, { size: "small" },
                    React.createElement(CancelIcon, null)))))));
}, arePropsEqual);
var DefaultIsSelected = function (value, filters) {
    return matches(pickBy(value, function (val) { return typeof val !== 'undefined'; }))(filters);
};
var DefaultToggleFilter = function (value, filters) {
    var isSelected = matches(pickBy(value, function (val) { return typeof val !== 'undefined'; }))(filters);
    if (isSelected) {
        var keysToRemove_1 = Object.keys(value);
        return Object.keys(filters).reduce(function (acc, key) {
            var _a;
            return keysToRemove_1.includes(key)
                ? acc
                : __assign(__assign({}, acc), (_a = {}, _a[key] = filters[key], _a));
        }, {});
    }
    return __assign(__assign({}, filters), value);
};
var PREFIX = 'RaFilterListItem';
export var FilterListItemClasses = {
    listItemButton: "".concat(PREFIX, "-listItemButton"),
    listItemText: "".concat(PREFIX, "-listItemText"),
};
var StyledListItem = styled(ListItem, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(FilterListItemClasses.listItemButton)] = {
            paddingRight: '2em',
            paddingLeft: '2em',
        },
        _b["& .".concat(FilterListItemClasses.listItemText)] = {
            margin: 0,
        },
        _b);
});
//# sourceMappingURL=FilterListItem.js.map