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
exports.FilterLiveSearch = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var Search_1 = __importDefault(require("@mui/icons-material/Search"));
var ra_core_1 = require("ra-core");
var input_1 = require("../../input");
/**
 * Form and search input for doing a full-text search filter.
 *
 * Triggers a search on change (with debounce).
 *
 * @example
 *
 * const FilterPanel = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterLiveSearch source="title" />
 *         </CardContent>
 *     </Card>
 * );
 */
exports.FilterLiveSearch = (0, react_1.memo)(function (props) {
    var _a = (0, ra_core_1.useListFilterContext)(), filterValues = _a.filterValues, setFilters = _a.setFilters;
    var translate = (0, ra_core_1.useTranslate)();
    var _b = props.source, source = _b === void 0 ? 'q' : _b, variant = props.variant, _c = props.label, label = _c === void 0 ? translate('ra.action.search') : _c, rest = __rest(props, ["source", "variant", "label"]);
    var handleChange = function (event) {
        var _a;
        if (event.target) {
            setFilters(__assign(__assign({}, filterValues), (_a = {}, _a[source] = event.target.value, _a)), null);
        }
        else {
            var _b = filterValues, _c = source, _1 = _b[_c], filters = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
            setFilters(filters, null);
        }
    };
    var initialValues = (0, react_1.useMemo)(function () {
        var _a;
        return (_a = {},
            _a[source] = filterValues[source],
            _a);
    }, [filterValues, source]);
    var onSubmit = function () { return undefined; };
    return (React.createElement(ra_core_1.Form, { defaultValues: initialValues, onSubmit: onSubmit },
        React.createElement(input_1.TextInput, __assign({ resettable: true, helperText: false, source: source, InputProps: {
                endAdornment: (React.createElement(material_1.InputAdornment, { position: "end" },
                    React.createElement(Search_1.default, { color: "disabled" }))),
            }, onChange: handleChange, size: "small" }, (variant === 'outlined'
            ? { variant: 'outlined', label: label }
            : {
                placeholder: label,
                label: false,
                hiddenLabel: true,
            }), rest))));
});
//# sourceMappingURL=FilterLiveSearch.js.map