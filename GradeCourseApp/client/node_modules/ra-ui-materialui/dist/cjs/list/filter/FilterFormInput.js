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
exports.FilterFormInputClasses = exports.FilterFormInput = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var prop_types_1 = __importDefault(require("prop-types"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var HighlightOff_1 = __importDefault(require("@mui/icons-material/HighlightOff"));
var clsx_1 = __importDefault(require("clsx"));
var ra_core_1 = require("ra-core");
var FilterFormInput = function (props) {
    var _a;
    var filterElement = props.filterElement, handleHide = props.handleHide, className = props.className;
    var resource = (0, ra_core_1.useResourceContext)(props);
    var translate = (0, ra_core_1.useTranslate)();
    return (React.createElement(Root, { "data-source": filterElement.props.source, className: (0, clsx_1.default)('filter-field', className) },
        !filterElement.props.alwaysOn && (React.createElement(IconButton_1.default, { className: (0, clsx_1.default)('hide-filter', exports.FilterFormInputClasses.hideButton), onClick: handleHide, "data-key": filterElement.props.source, title: translate('ra.action.remove_filter'), size: "small" },
            React.createElement(HighlightOff_1.default, null))),
        React.cloneElement(filterElement, {
            resource: resource,
            record: emptyRecord,
            size: (_a = filterElement.props.size) !== null && _a !== void 0 ? _a : 'small',
            helperText: false,
            // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
            defaultValue: undefined,
        }),
        React.createElement("div", { className: exports.FilterFormInputClasses.spacer }, "\u00A0")));
};
exports.FilterFormInput = FilterFormInput;
exports.FilterFormInput.propTypes = {
    filterElement: prop_types_1.default.node,
    handleHide: prop_types_1.default.func,
    resource: prop_types_1.default.string,
    className: prop_types_1.default.string,
};
var PREFIX = 'RaFilterFormInput';
exports.FilterFormInputClasses = {
    spacer: "".concat(PREFIX, "-spacer"),
    hideButton: "".concat(PREFIX, "-hideButton"),
};
var Root = (0, styles_1.styled)('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            alignItems: 'flex-end',
            pointerEvents: 'auto'
        },
        _b["& .".concat(exports.FilterFormInputClasses.spacer)] = { width: theme.spacing(2) },
        _b["& .".concat(exports.FilterFormInputClasses.hideButton)] = {
            marginBottom: theme.spacing(1),
        },
        _b);
});
var emptyRecord = {};
//# sourceMappingURL=FilterFormInput.js.map