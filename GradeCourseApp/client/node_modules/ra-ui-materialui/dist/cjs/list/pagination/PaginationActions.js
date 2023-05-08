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
exports.PaginationActions = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var material_1 = require("@mui/material");
var prop_types_1 = __importDefault(require("prop-types"));
var ra_core_1 = require("ra-core");
exports.PaginationActions = (0, react_1.memo)(function (props) {
    var page = props.page, rowsPerPage = props.rowsPerPage, count = props.count, onPageChange = props.onPageChange, _a = props.size, size = _a === void 0 ? 'small' : _a, className = props.className, rest = __rest(props, ["page", "rowsPerPage", "count", "onPageChange", "size", "className"]);
    var translate = (0, ra_core_1.useTranslate)();
    var nbPages = Math.ceil(count / rowsPerPage) || 1;
    if (nbPages === 1) {
        return React.createElement(Root, { className: className });
    }
    var getItemAriaLabel = function (type, page, selected) {
        if (type === 'page') {
            return selected
                ? translate('ra.navigation.current_page', {
                    page: page,
                    _: "page ".concat(page),
                })
                : translate('ra.navigation.page', {
                    page: page,
                    _: "Go to page ".concat(page),
                });
        }
        return translate("ra.navigation.".concat(type), { _: "Go to ".concat(type, " page") });
    };
    return (React.createElement(Root, { className: className },
        React.createElement(material_1.Pagination, __assign({ size: size, count: nbPages, 
            // <TablePagination>, the parent, uses 0-based pagination
            // while <Pagination> uses 1-based pagination
            page: page + 1, onChange: function (e, page) { return onPageChange(e, page - 1); } }, sanitizeRestProps(rest), { getItemAriaLabel: getItemAriaLabel }))));
});
/**
 * PaginationActions propTypes are copied over from MUI’s
 * TablePaginationActions propTypes. See
 * https://github.com/mui-org/material-ui/blob/869692ecf3812bc4577ed4dde81a9911c5949695/packages/material-ui/src/TablePaginationActions/TablePaginationActions.js#L53-L85
 * for reference.
 */
exports.PaginationActions.propTypes = {
    count: prop_types_1.default.number.isRequired,
    onPageChange: prop_types_1.default.func.isRequired,
    page: prop_types_1.default.number.isRequired,
    rowsPerPage: prop_types_1.default.number.isRequired,
    color: prop_types_1.default.oneOf(['primary', 'secondary', 'standard']),
    size: prop_types_1.default.oneOf(['small', 'medium', 'large']),
};
var PREFIX = 'RaPaginationActions';
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        flexShrink: 0,
        ml: 4,
    });
});
var sanitizeRestProps = function (_a) {
    var nextIconButtonProps = _a.nextIconButtonProps, backIconButtonProps = _a.backIconButtonProps, rest = __rest(_a, ["nextIconButtonProps", "backIconButtonProps"]);
    return rest;
};
//# sourceMappingURL=PaginationActions.js.map