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
exports.DatagridHeaderCellClasses = exports.DatagridHeaderCell = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var material_1 = require("@mui/material");
var ra_core_1 = require("ra-core");
var DatagridHeaderCell = function (props) {
    var className = props.className, field = props.field, sort = props.sort, updateSort = props.updateSort, isSorting = props.isSorting, rest = __rest(props, ["className", "field", "sort", "updateSort", "isSorting"]);
    var resource = (0, ra_core_1.useResourceContext)(props);
    var translate = (0, ra_core_1.useTranslate)();
    return (React.createElement(StyledTableCell, __assign({ className: (0, clsx_1.default)(className, field.props.headerClassName), align: field.props.textAlign, variant: "head" }, rest), updateSort &&
        field.props.sortable !== false &&
        (field.props.sortBy || field.props.source) ? (React.createElement(material_1.Tooltip, { title: translate('ra.action.sort'), placement: field.props.textAlign === 'right'
            ? 'bottom-end'
            : 'bottom-start', enterDelay: 300 },
        React.createElement(material_1.TableSortLabel, { active: sort.field ===
                (field.props.sortBy || field.props.source), direction: sort.order === 'ASC' ? 'asc' : 'desc', "data-field": field.props.sortBy || field.props.source, "data-order": field.props.sortByOrder || 'ASC', onClick: updateSort, classes: exports.DatagridHeaderCellClasses },
            React.createElement(ra_core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource: resource })))) : (React.createElement(ra_core_1.FieldTitle, { label: field.props.label, source: field.props.source, resource: resource }))));
};
exports.DatagridHeaderCell = DatagridHeaderCell;
exports.DatagridHeaderCell.propTypes = {
    className: prop_types_1.default.string,
    field: prop_types_1.default.element,
    sort: prop_types_1.default.shape({
        field: prop_types_1.default.string,
        order: prop_types_1.default.string,
    }).isRequired,
    isSorting: prop_types_1.default.bool,
    resource: prop_types_1.default.string,
    updateSort: prop_types_1.default.func,
};
exports.default = (0, react_1.memo)(exports.DatagridHeaderCell, function (props, nextProps) {
    return props.updateSort === nextProps.updateSort &&
        props.sort.field === nextProps.sort.field &&
        props.sort.order === nextProps.sort.order &&
        props.isSorting === nextProps.isSorting &&
        props.resource === nextProps.resource;
});
var PREFIX = 'RaDatagridHeaderCell';
exports.DatagridHeaderCellClasses = {
    icon: "".concat(PREFIX, "-icon"),
};
// Remove the sort icons when not active
var StyledTableCell = (0, styles_1.styled)(material_1.TableCell, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {},
        _b["& .MuiTableSortLabel-icon"] = {
            display: 'none',
        },
        _b["& .Mui-active .MuiTableSortLabel-icon"] = {
            display: 'inline',
        },
        _b);
});
//# sourceMappingURL=DatagridHeaderCell.js.map