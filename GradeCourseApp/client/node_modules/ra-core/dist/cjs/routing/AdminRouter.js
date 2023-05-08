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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var history_1 = require("history");
var HistoryRouter_1 = require("./HistoryRouter");
var BasenameContextProvider_1 = require("./BasenameContextProvider");
/**
 * Creates a react-router Router unless the app is already inside existing router.
 * Also creates a BasenameContext with the basename prop
 */
var AdminRouter = function (_a) {
    var history = _a.history, _b = _a.basename, basename = _b === void 0 ? '' : _b, children = _a.children;
    var isInRouter = (0, react_router_dom_1.useInRouterContext)();
    var Router = isInRouter ? DummyRouter : InternalRouter;
    return (React.createElement(BasenameContextProvider_1.BasenameContextProvider, { basename: isInRouter ? basename : '' },
        React.createElement(Router, { basename: basename, history: history }, children)));
};
exports.AdminRouter = AdminRouter;
var DummyRouter = function (_a) {
    var children = _a.children;
    return React.createElement(React.Fragment, null, children);
};
var InternalRouter = function (_a) {
    var children = _a.children, history = _a.history;
    var finalHistory = (0, react_1.useMemo)(function () { return history || (0, history_1.createHashHistory)(); }, [
        history,
    ]);
    return React.createElement(HistoryRouter_1.HistoryRouter, { history: finalHistory }, children);
};
//# sourceMappingURL=AdminRouter.js.map