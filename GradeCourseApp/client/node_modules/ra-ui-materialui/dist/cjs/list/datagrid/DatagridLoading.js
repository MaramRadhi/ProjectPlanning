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
var prop_types_1 = __importDefault(require("prop-types"));
var material_1 = require("@mui/material");
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var useDatagridStyles_1 = require("./useDatagridStyles");
var Placeholder_1 = require("../Placeholder");
var times = function (nbChildren, fn) {
    return Array.from({ length: nbChildren }, function (_, key) { return fn(key); });
};
var DatagridLoading = function (_a) {
    var className = _a.className, expand = _a.expand, hasBulkActions = _a.hasBulkActions, nbChildren = _a.nbChildren, _b = _a.nbFakeLines, nbFakeLines = _b === void 0 ? 5 : _b, size = _a.size;
    var oneSecondHasPassed = (0, ra_core_1.useTimeout)(1000);
    return oneSecondHasPassed ? (React.createElement("div", { className: useDatagridStyles_1.DatagridClasses.root },
        React.createElement(material_1.Table, { className: (0, clsx_1.default)(useDatagridStyles_1.DatagridClasses.table, className), size: size },
            React.createElement(material_1.TableHead, null,
                React.createElement(material_1.TableRow, { className: useDatagridStyles_1.DatagridClasses.row },
                    expand && (React.createElement(material_1.TableCell, { padding: "none", className: useDatagridStyles_1.DatagridClasses.expandHeader })),
                    hasBulkActions && (React.createElement(material_1.TableCell, { padding: "checkbox", className: useDatagridStyles_1.DatagridClasses.expandIconCell },
                        React.createElement(material_1.Checkbox, { className: "select-all", color: "primary", checked: false }))),
                    times(nbChildren, function (key) { return (React.createElement(material_1.TableCell, { variant: "head", className: useDatagridStyles_1.DatagridClasses.headerCell, key: key },
                        React.createElement(Placeholder_1.Placeholder, null))); }))),
            React.createElement(material_1.TableBody, null, times(nbFakeLines, function (key1) { return (React.createElement(material_1.TableRow, { key: key1, style: { opacity: 1 / (key1 + 1) } },
                expand && (React.createElement(material_1.TableCell, { padding: "none", className: useDatagridStyles_1.DatagridClasses.expandIconCell },
                    React.createElement(material_1.IconButton, { className: useDatagridStyles_1.DatagridClasses.expandIcon, component: "div", "aria-hidden": "true", size: "large" },
                        React.createElement(ExpandMore_1.default, null)))),
                hasBulkActions && (React.createElement(material_1.TableCell, { padding: "checkbox", className: useDatagridStyles_1.DatagridClasses.expandIconCell },
                    React.createElement(material_1.Checkbox, { className: "select-all", color: "primary", checked: false }))),
                times(nbChildren, function (key2) { return (React.createElement(material_1.TableCell, { className: useDatagridStyles_1.DatagridClasses.rowCell, key: key2 },
                    React.createElement(Placeholder_1.Placeholder, null))); }))); }))))) : null;
};
DatagridLoading.propTypes = {
    className: prop_types_1.default.string,
    expand: prop_types_1.default.oneOfType([prop_types_1.default.element, prop_types_1.default.elementType]),
    hasBulkActions: prop_types_1.default.bool,
    nbChildren: prop_types_1.default.number,
    nbFakeLines: prop_types_1.default.number,
    size: prop_types_1.default.oneOf(['small', 'medium']),
};
exports.default = (0, react_1.memo)(DatagridLoading);
//# sourceMappingURL=DatagridLoading.js.map