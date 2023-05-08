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
import * as React from 'react';
import { memo, useMemo } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Form, useTranslate, useListFilterContext } from 'ra-core';
import { TextInput } from '../../input';
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
export var FilterLiveSearch = memo(function (props) {
    var _a = useListFilterContext(), filterValues = _a.filterValues, setFilters = _a.setFilters;
    var translate = useTranslate();
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
    var initialValues = useMemo(function () {
        var _a;
        return (_a = {},
            _a[source] = filterValues[source],
            _a);
    }, [filterValues, source]);
    var onSubmit = function () { return undefined; };
    return (React.createElement(Form, { defaultValues: initialValues, onSubmit: onSubmit },
        React.createElement(TextInput, __assign({ resettable: true, helperText: false, source: source, InputProps: {
                endAdornment: (React.createElement(InputAdornment, { position: "end" },
                    React.createElement(SearchIcon, { color: "disabled" }))),
            }, onChange: handleChange, size: "small" }, (variant === 'outlined'
            ? { variant: 'outlined', label: label }
            : {
                placeholder: label,
                label: false,
                hiddenLabel: true,
            }), rest))));
});
//# sourceMappingURL=FilterLiveSearch.js.map