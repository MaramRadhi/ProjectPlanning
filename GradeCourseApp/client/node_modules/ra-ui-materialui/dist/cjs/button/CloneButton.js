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
exports.CloneButton = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var prop_types_1 = __importDefault(require("prop-types"));
var Queue_1 = __importDefault(require("@mui/icons-material/Queue"));
var react_router_dom_1 = require("react-router-dom");
var query_string_1 = require("query-string");
var ra_core_1 = require("ra-core");
var Button_1 = require("./Button");
var CloneButton = function (props) {
    var _a = props.label, label = _a === void 0 ? 'ra.action.clone' : _a, _b = props.scrollToTop, scrollToTop = _b === void 0 ? true : _b, _c = props.icon, icon = _c === void 0 ? defaultIcon : _c, rest = __rest(props, ["label", "scrollToTop", "icon"]);
    var resource = (0, ra_core_1.useResourceContext)(props);
    var record = (0, ra_core_1.useRecordContext)(props);
    var createPath = (0, ra_core_1.useCreatePath)();
    var pathname = createPath({ resource: resource, type: 'create' });
    return (React.createElement(Button_1.Button, __assign({ component: react_router_dom_1.Link, to: record
            ? {
                pathname: pathname,
                search: (0, query_string_1.stringify)({
                    source: JSON.stringify(omitId(record)),
                }),
                state: { _scrollToTop: scrollToTop },
            }
            : pathname, label: label, onClick: stopPropagation }, sanitizeRestProps(rest)), icon));
};
exports.CloneButton = CloneButton;
var defaultIcon = React.createElement(Queue_1.default, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
var omitId = function (_a) {
    var id = _a.id, rest = __rest(_a, ["id"]);
    return rest;
};
var sanitizeRestProps = function (_a) {
    var resource = _a.resource, record = _a.record, rest = __rest(_a, ["resource", "record"]);
    return rest;
};
exports.CloneButton.propTypes = {
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
};
exports.default = (0, react_1.memo)(exports.CloneButton);
//# sourceMappingURL=CloneButton.js.map