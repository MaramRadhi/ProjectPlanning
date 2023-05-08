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
exports.ResourceMenuItem = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var ViewList_1 = __importDefault(require("@mui/icons-material/ViewList"));
var ra_core_1 = require("ra-core");
var MenuItemLink_1 = require("./MenuItemLink");
var ResourceMenuItem = function (_a) {
    var name = _a.name;
    var resources = (0, ra_core_1.useResourceDefinitions)();
    var getResourceLabel = (0, ra_core_1.useGetResourceLabel)();
    var createPath = (0, ra_core_1.useCreatePath)();
    if (!resources || !resources[name])
        return null;
    return (React.createElement(MenuItemLink_1.MenuItemLink, { to: createPath({
            resource: name,
            type: 'list',
        }), state: { _scrollToTop: true }, primaryText: React.createElement(React.Fragment, null, getResourceLabel(name, 2)), leftIcon: resources[name].icon ? ((0, react_1.createElement)(resources[name].icon)) : (React.createElement(ViewList_1.default, null)) }));
};
exports.ResourceMenuItem = ResourceMenuItem;
//# sourceMappingURL=ResourceMenuItem.js.map