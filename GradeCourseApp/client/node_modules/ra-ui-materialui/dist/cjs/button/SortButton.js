"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/material/styles");
var Sort_1 = __importDefault(require("@mui/icons-material/Sort"));
var ArrowDropDown_1 = __importDefault(require("@mui/icons-material/ArrowDropDown"));
var ra_core_1 = require("ra-core");
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
    var _c = (0, ra_core_1.useListSortContext)(), resource = _c.resource, sort = _c.sort, setSort = _c.setSort;
    var translate = (0, ra_core_1.useTranslate)();
    var translateLabel = (0, ra_core_1.useTranslateLabel)();
    var isXSmall = (0, material_1.useMediaQuery)(function (theme) {
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
        isXSmall ? (React.createElement(material_1.Tooltip, { title: buttonLabel },
            React.createElement(material_1.IconButton, { "aria-label": buttonLabel, color: "primary", onClick: handleClick, size: "large" }, icon))) : (React.createElement(StyledButton, { "aria-controls": "simple-menu", "aria-haspopup": "true", color: "primary", onClick: handleClick, startIcon: icon, endIcon: React.createElement(ArrowDropDown_1.default, null), size: "small" }, buttonLabel)),
        React.createElement(material_1.Menu, { id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleClose }, fields.map(function (field) { return (React.createElement(material_1.MenuItem, { onClick: handleChangeSort, "data-sort": field, key: field },
            translateLabel({
                resource: resource,
                source: field,
            }),
            ' ',
            translate("ra.sort.".concat(sort.field === field
                ? inverseOrder(sort.order)
                : 'ASC')))); }))));
};
var defaultIcon = React.createElement(Sort_1.default, null);
var inverseOrder = function (sort) { return (sort === 'ASC' ? 'DESC' : 'ASC'); };
var arePropsEqual = function (prevProps, nextProps) {
    return (0, ra_core_1.shallowEqual)(prevProps.fields, nextProps.fields);
};
var StyledButton = (0, styles_1.styled)(material_1.Button, {
    name: 'RaSortButton',
    overridesResolver: function (props, styles) { return styles.root; },
})({
    '&.MuiButton-sizeSmall': {
        // fix for icon misalignment on small buttons, see https://github.com/mui/material-ui/pull/30240
        lineHeight: 1.5,
    },
    '& .MuiButton-endIcon': { ml: 0 },
});
exports.default = (0, react_1.memo)(SortButton, arePropsEqual);
//# sourceMappingURL=SortButton.js.map