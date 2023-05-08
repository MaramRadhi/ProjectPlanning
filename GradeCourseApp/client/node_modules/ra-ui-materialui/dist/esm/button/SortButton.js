import * as React from 'react';
import { memo } from 'react';
import { Button, Menu, MenuItem, Tooltip, IconButton, useMediaQuery, } from '@mui/material';
import { styled } from '@mui/material/styles';
import SortIcon from '@mui/icons-material/Sort';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useListSortContext, useTranslate, useTranslateLabel, shallowEqual, } from 'ra-core';
/**
 * A button allowing to change the sort field and order.
 *
 * To be used inside a ListContext (e.g. inside a <List> or <ReferenceManyField>)
 *
 * Expects one 'fields' prop, containing an array of field strings that shall
 * be used and displayed for sorting.
 *
 * When users clicks on the <SortButton>, they see a dropdown list with the
 * proposed sorting fields. Once they click on one of these fields, the related
 * list refreshes, re-sorted.
 *
 * @example
 *
 * import * as React from 'react';
 * import { TopToolbar, SortButton, CreateButton, ExportButton } from 'react-admin';
 *
 * const ListActions = () => (
 *     <TopToolbar>
 *         <SortButton fields={['reference', 'sales', 'stock']} />
 *         <CreateButton />
 *         <ExportButton />
 *     </TopToolbar>
 * );
 */
var SortButton = function (props) {
    var fields = props.fields, _a = props.label, label = _a === void 0 ? 'ra.sort.sort_by' : _a, _b = props.icon, icon = _b === void 0 ? defaultIcon : _b;
    var _c = useListSortContext(), resource = _c.resource, sort = _c.sort, setSort = _c.setSort;
    var translate = useTranslate();
    var translateLabel = useTranslateLabel();
    var isXSmall = useMediaQuery(function (theme) {
        return theme.breakpoints.down('sm');
    });
    var _d = React.useState(null), anchorEl = _d[0], setAnchorEl = _d[1];
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleChangeSort = function (event) {
        var field = event.currentTarget.dataset.sort;
        setSort({
            field: field,
            order: field === sort.field ? inverseOrder(sort.order) : 'ASC',
        });
        setAnchorEl(null);
    };
    var buttonLabel = translate(label, {
        field: translateLabel({
            resource: resource,
            source: sort.field,
        }),
        order: translate("ra.sort.".concat(sort.order)),
        _: label,
    });
    return (React.createElement(React.Fragment, null,
        isXSmall ? (React.createElement(Tooltip, { title: buttonLabel },
            React.createElement(IconButton, { "aria-label": buttonLabel, color: "primary", onClick: handleClick, size: "large" }, icon))) : (React.createElement(StyledButton, { "aria-controls": "simple-menu", "aria-haspopup": "true", color: "primary", onClick: handleClick, startIcon: icon, endIcon: React.createElement(ArrowDropDownIcon, null), size: "small" }, buttonLabel)),
        React.createElement(Menu, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, fields.map(function (field) { return (React.createElement(MenuItem, { onClick: handleChangeSort, "data-sort": field, key: field },
            translateLabel({
                resource: resource,
                source: field,
            }),
            ' ',
            translate("ra.sort.".concat(sort.field === field
                ? inverseOrder(sort.order)
                : 'ASC')))); }))));
};
var defaultIcon = React.createElement(SortIcon, null);
var inverseOrder = function (sort) { return (sort === 'ASC' ? 'DESC' : 'ASC'); };
var arePropsEqual = function (prevProps, nextProps) {
    return shallowEqual(prevProps.fields, nextProps.fields);
};
var StyledButton = styled(Button, {
    name: 'RaSortButton',
    overridesResolver: function (props, styles) { return styles.root; },
})({
    '&.MuiButton-sizeSmall': {
        // fix for icon misalignment on small buttons, see https://github.com/mui/material-ui/pull/30240
        lineHeight: 1.5,
    },
    '& .MuiButton-endIcon': { ml: 0 },
});
export default memo(SortButton, arePropsEqual);
//# sourceMappingURL=SortButton.js.map