import * as React from 'react';
import { styled, Tooltip } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/BookmarkBorder';
import HelpIcon from '@mui/icons-material/HelpOutline';
import { useListContext, useTranslate } from 'ra-core';
import isEqual from 'lodash/isEqual';
import { extractValidSavedQueries, useSavedQueries } from './useSavedQueries';
import { RemoveSavedQueryIconButton } from './RemoveSavedQueryIconButton';
import { AddSavedQueryIconButton } from './AddSavedQueryIconButton';
import { SavedQueryFilterListItem } from './SavedQueryFilterListItem';
import { FilterList } from './FilterList';
/**
 * FilterList-like component allowing to save and restore a query (filters, sort, perPage).
 *
 * Use this component in a Filter sidebar to let users store custom queries
 * that they can reuse later. The saved queries will appear as FilterListItems,
 * and can be removed.
 *
 * This component uses useStore under the hood to store saved queries in
 * localStorage, one set of saved queries per resource.
 *
 * @example
 *
 * import { FilterList, FilterListItem, List, Datagrid, SavedQueriesList } from 'react-admin';
 * import { Card, CardContent } from '@mui/material';
 *
 * const PostFilterSidebar = () => (
 *     <Card>
 *         <CardContent>
 *             <SavedQueriesList />
 *             <FilterList label="Category" icon={<CategoryIcon />}>
 *                 ...
 *             </FilterList>
 *             <FilterList label="Published" icon={<DateRangeIcon />}>
 *                ...
 *             </FilterList>
 *             <FilterList label="Popularity" icon={<DateRangeIcon />}>
 *                ...
 *             </FilterList>
 *         </CardContent>
 *     </Card>
 * );
 *
 * const PostList = () => (
 *     <List aside={<PostFilterSidebar />}>
 *         <Datagrid>
 *             ...
 *         </Datagrid>
 *     </List>
 * );
 *
 */
export var SavedQueriesList = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? defaultIcon : _b;
    var translate = useTranslate();
    var _c = useListContext(), resource = _c.resource, filterValues = _c.filterValues, displayedFilters = _c.displayedFilters, sort = _c.sort, perPage = _c.perPage;
    var savedQueries = useSavedQueries(resource)[0];
    var validSavedQueries = extractValidSavedQueries(savedQueries);
    var hasSavedCurrentFilterValue = validSavedQueries.some(function (savedQuery) {
        return isEqual(savedQuery.value, {
            filter: filterValues,
            sort: sort,
            perPage: perPage,
            displayedFilters: displayedFilters,
        });
    });
    var hasFilterValues = !isEqual(filterValues, {});
    return (React.createElement(Root, { label: "ra.saved_queries.label", icon: icon },
        hasSavedCurrentFilterValue ? (React.createElement(RemoveSavedQueryIconButton, { className: SavedQueriesListClasses.floatingIcon })) : hasFilterValues ? (React.createElement(AddSavedQueryIconButton, { className: SavedQueriesListClasses.floatingIcon })) : (React.createElement(Tooltip, { title: translate('ra.saved_queries.help'), className: SavedQueriesListClasses.floatingTooltip },
            React.createElement(HelpIcon, null))),
        validSavedQueries.map(function (savedQuery, index) { return (React.createElement(SavedQueryFilterListItem, { label: savedQuery.label, value: savedQuery.value, key: index })); })));
};
var PREFIX = 'RaSavedQueriesList';
export var SavedQueriesListClasses = {
    floatingIcon: "".concat(PREFIX, "-floatingIcon"),
    floatingTooltip: "".concat(PREFIX, "-floatingTooltip"),
    titleContainer: "".concat(PREFIX, "-titleContainer"),
    titleIcon: "".concat(PREFIX, "-titleIcon"),
};
var Root = styled(FilterList, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .".concat(SavedQueriesListClasses.floatingIcon)] = {
            position: 'absolute',
            top: '-1.8em',
            right: 0,
        },
        _b["& .".concat(SavedQueriesListClasses.floatingTooltip)] = {
            position: 'absolute',
            top: '-1.2em',
            right: 3,
            color: theme.palette.action.disabled,
        },
        _b);
});
var defaultIcon = React.createElement(BookmarkIcon, null);
//# sourceMappingURL=SavedQueriesList.js.map