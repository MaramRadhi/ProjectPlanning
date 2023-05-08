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
exports.ListContextProvider = void 0;
var React = __importStar(require("react"));
var ListContext_1 = require("./ListContext");
var ListFilterContext_1 = require("./ListFilterContext");
var ListSortContext_1 = require("./ListSortContext");
var ListPaginationContext_1 = require("./ListPaginationContext");
/**
 * Create a List Context and several thematic List subcontext.
 *
 * Allows children to subscribe to part of the ListContext, and bail out of
 * rendering when some parts of the context that they don't depend on change
 * (because unfortunately React doesn't allow to use context selectors yet).
 *
 * @example
 *
 * const MyList = (props) => {
 *     const controllerProps = useListController(props);
 *     return (
 *         <ListContextProvider value={controllerProps}>
 *             <MyListView>
 *         </ListContextProvider>
 *     );
 * };
 *
 * const MyListView = () => {
 *     const { data, filterValues, setFilters } = useListContext();
 *     // or, to rerender only when filters change but not data
 *     const { filterValues, setFilters } = useListFilterContext();
 * }
 *
 * @see ListContext
 * @see ListFilterContext
 */
var ListContextProvider = function (_a) {
    var value = _a.value, children = _a.children;
    return (React.createElement(ListContext_1.ListContext.Provider, { value: value },
        React.createElement(ListFilterContext_1.ListFilterContext.Provider, { value: (0, ListFilterContext_1.usePickFilterContext)(value) },
            React.createElement(ListSortContext_1.ListSortContext.Provider, { value: (0, ListSortContext_1.usePickSortContext)(value) },
                React.createElement(ListPaginationContext_1.ListPaginationContext.Provider, { value: (0, ListPaginationContext_1.usePickPaginationContext)(value) }, children)))));
};
exports.ListContextProvider = ListContextProvider;
//# sourceMappingURL=ListContextProvider.js.map