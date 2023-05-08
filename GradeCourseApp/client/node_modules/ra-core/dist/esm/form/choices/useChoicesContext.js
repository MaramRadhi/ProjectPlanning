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
import { useContext, useMemo } from 'react';
import { useList } from '../../controller';
import { ChoicesContext } from './ChoicesContext';
export var useChoicesContext = function (options) {
    if (options === void 0) { options = {}; }
    var context = useContext(ChoicesContext);
    var _a = useList({
        data: options.choices,
        // When not in a ChoicesContext, paginating does not make sense (e.g. AutocompleteInput).
        perPage: Infinity,
    }), data = _a.data, list = __rest(_a, ["data"]);
    var result = useMemo(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w;
        // Props take precedence over context.
        if (options.choices || !context) {
            return {
                allChoices: data,
                availableChoices: (_a = options.availableChoices) !== null && _a !== void 0 ? _a : data,
                selectedChoices: (_b = options.selectedChoices) !== null && _b !== void 0 ? _b : data,
                displayedFilters: (_c = options.selectedChoices) !== null && _c !== void 0 ? _c : list.displayedFilters,
                error: options.error,
                filter: (_d = options.filter) !== null && _d !== void 0 ? _d : list.filter,
                filterValues: (_e = options.filterValues) !== null && _e !== void 0 ? _e : list.filterValues,
                hasNextPage: (_f = options.hasNextPage) !== null && _f !== void 0 ? _f : list.hasNextPage,
                hasPreviousPage: (_g = options.hasPreviousPage) !== null && _g !== void 0 ? _g : list.hasPreviousPage,
                hideFilter: (_h = options.hideFilter) !== null && _h !== void 0 ? _h : list.hideFilter,
                isFetching: (_j = options.isFetching) !== null && _j !== void 0 ? _j : list.isFetching,
                isLoading: (_k = options.isLoading) !== null && _k !== void 0 ? _k : list.isLoading,
                page: (_l = options.page) !== null && _l !== void 0 ? _l : list.page,
                perPage: (_m = options.perPage) !== null && _m !== void 0 ? _m : list.perPage,
                refetch: (_o = options.refetch) !== null && _o !== void 0 ? _o : list.refetch,
                resource: (_p = options.resource) !== null && _p !== void 0 ? _p : list.resource,
                setFilters: (_q = options.setFilters) !== null && _q !== void 0 ? _q : list.setFilters,
                setPage: (_r = options.setPage) !== null && _r !== void 0 ? _r : list.setPage,
                setPerPage: (_s = options.setPerPage) !== null && _s !== void 0 ? _s : list.setPerPage,
                setSort: (_t = options.setSort) !== null && _t !== void 0 ? _t : list.setSort,
                showFilter: (_u = options.showFilter) !== null && _u !== void 0 ? _u : list.showFilter,
                sort: (_v = options.sort) !== null && _v !== void 0 ? _v : list.sort,
                source: options.source,
                total: (_w = options.total) !== null && _w !== void 0 ? _w : list.total,
                isFromReference: false,
            };
        }
        return context;
    }, [context, data, list, options]);
    return result;
};
//# sourceMappingURL=useChoicesContext.js.map