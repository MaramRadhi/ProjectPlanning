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
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ExpandMore_1 = __importDefault(require("@mui/icons-material/ExpandMore"));
var ra_core_1 = require("ra-core");
var useDatagridStyles_1 = require("./useDatagridStyles");
var clsx_1 = __importDefault(require("clsx"));
var ExpandAllButton = function (_a) {
    var _b;
    var resource = _a.resource, ids = _a.ids;
    var translate = (0, ra_core_1.useTranslate)();
    var _c = (0, ra_core_1.useExpandAll)(resource, ids), expanded = _c[0], toggleExpanded = _c[1];
    return (React.createElement(IconButton_1.default, { className: (0, clsx_1.default)(useDatagridStyles_1.DatagridClasses.expandIcon, (_b = {},
            _b[useDatagridStyles_1.DatagridClasses.expanded] = expanded,
            _b)), "aria-label": translate(expanded ? 'ra.action.close' : 'ra.action.expand'), "aria-expanded": expanded, tabIndex: -1, "aria-hidden": "true", onClick: toggleExpanded, size: "small" },
        React.createElement(ExpandMore_1.default, { fontSize: "inherit" })));
};
exports.default = (0, react_1.memo)(ExpandAllButton);
//# sourceMappingURL=ExpandAllButton.js.map