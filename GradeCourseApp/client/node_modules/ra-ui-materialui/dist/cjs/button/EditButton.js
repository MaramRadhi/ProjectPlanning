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
exports.EditButtonClasses = exports.EditButton = void 0;
var React = __importStar(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@mui/material/styles");
var Create_1 = __importDefault(require("@mui/icons-material/Create"));
var react_router_dom_1 = require("react-router-dom");
var ra_core_1 = require("ra-core");
var Button_1 = require("./Button");
/**
 * Opens the Edit view for the current record.
 *
 * Reads the record and resource from the context.
 *
 * @example // basic usage
 * import { EditButton } from 'react-admin';
 *
 * const CommentEditButton = () => (
 *     <EditButton label="Edit comment" />
 * );
 */
var EditButton = function (props) {
    var _a = props.icon, icon = _a === void 0 ? defaultIcon : _a, _b = props.label, label = _b === void 0 ? 'ra.action.edit' : _b, _c = props.scrollToTop, scrollToTop = _c === void 0 ? true : _c, className = props.className, rest = __rest(props, ["icon", "label", "scrollToTop", "className"]);
    var resource = (0, ra_core_1.useResourceContext)(props);
    var record = (0, ra_core_1.useRecordContext)(props);
    var createPath = (0, ra_core_1.useCreatePath)();
    if (!record)
        return null;
    return (React.createElement(StyledButton, __assign({ component: react_router_dom_1.Link, to: createPath({ type: 'edit', resource: resource, id: record.id }), state: scrollStates[String(scrollToTop)], label: label, onClick: stopPropagation, className: (0, clsx_1.default)(exports.EditButtonClasses.root, className) }, rest), icon));
};
exports.EditButton = EditButton;
// avoids using useMemo to get a constant value for the link state
var scrollStates = {
    true: { _scrollToTop: true },
    false: {},
};
var defaultIcon = React.createElement(Create_1.default, null);
// useful to prevent click bubbling in a datagrid with rowClick
var stopPropagation = function (e) { return e.stopPropagation(); };
exports.EditButton.propTypes = {
    icon: prop_types_1.default.element,
    label: prop_types_1.default.string,
    record: prop_types_1.default.any,
    scrollToTop: prop_types_1.default.bool,
};
var PREFIX = 'RaEditButton';
exports.EditButtonClasses = {
    root: "".concat(PREFIX, "-root"),
};
var StyledButton = (0, styles_1.styled)(Button_1.Button, {
    name: PREFIX,
    overridesResolver: function (_props, styles) { return styles.root; },
})({});
//# sourceMappingURL=EditButton.js.map