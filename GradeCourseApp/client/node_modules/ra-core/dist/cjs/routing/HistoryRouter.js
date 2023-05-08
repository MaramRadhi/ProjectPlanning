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
exports.HistoryRouter = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var react_router_1 = require("react-router");
/**
 * A router that accepts a custom history.
 * To remove once https://github.com/remix-run/react-router/pull/7586 is merged.
 */
function HistoryRouter(_a) {
    var basename = _a.basename, children = _a.children, history = _a.history;
    var _b = (0, react_1.useState)({
        action: history.action,
        location: history.location,
    }), state = _b[0], setState = _b[1];
    (0, react_1.useLayoutEffect)(function () { return history.listen(setState); }, [history]);
    return (React.createElement(react_router_1.Router, { basename: basename, children: children, location: state.location, navigationType: state.action, navigator: history }));
}
exports.HistoryRouter = HistoryRouter;
//# sourceMappingURL=HistoryRouter.js.map