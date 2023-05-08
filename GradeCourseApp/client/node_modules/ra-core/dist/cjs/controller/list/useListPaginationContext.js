"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useListPaginationContext = void 0;
var react_1 = require("react");
var defaults_1 = __importDefault(require("lodash/defaults"));
var ListPaginationContext_1 = require("./ListPaginationContext");
/**
 * Hook to read the list controller props from the ListContext.
 *
 * Must be used within a <ListContextProvider> (e.g. as a descendent of <List>
 * or <ListBase>).
 *
 * @typedef {Object} ListPaginationContextValue
 * @prop {integer}  total the total number of results for the current filters, excluding pagination. Useful to build the pagination controls. e.g. 23
 * @prop {integer}  page the current page. Starts at 1
 * @prop {Function} setPage a callback to change the page, e.g. setPage(3)
 * @prop {integer}  perPage the number of results per page. Defaults to 25
 * @prop {Function} setPerPage a callback to change the number of results per page, e.g. setPerPage(25)
 * @prop {Boolean}  hasPreviousPage true if the current page is not the first one
 * @prop {Boolean}  hasNextPage true if the current page is not the last one
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @returns {ListPaginationContextValue} list controller props
 *
 * @see useListController for how it is filled
 */
var useListPaginationContext = function (props) {
    var context = (0, react_1.useContext)(ListPaginationContext_1.ListPaginationContext);
    return (0, react_1.useMemo)(function () {
        return (0, defaults_1.default)({}, props != null ? extractListPaginationContextProps(props) : {}, context);
    }, [context, props]);
};
exports.useListPaginationContext = useListPaginationContext;
/**
 * Extract only the list controller props
 *
 * @param {Object} props Props passed to the useListContext hook
 *
 * @returns {ListControllerResult} List controller props
 */
var extractListPaginationContextProps = function (_a) {
    var isLoading = _a.isLoading, page = _a.page, perPage = _a.perPage, setPage = _a.setPage, setPerPage = _a.setPerPage, hasPreviousPage = _a.hasPreviousPage, hasNextPage = _a.hasNextPage, total = _a.total, resource = _a.resource;
    return ({
        isLoading: isLoading,
        page: page,
        perPage: perPage,
        setPage: setPage,
        setPerPage: setPerPage,
        hasPreviousPage: hasPreviousPage,
        hasNextPage: hasNextPage,
        total: total,
        resource: resource,
    });
};
exports.default = exports.useListPaginationContext;
//# sourceMappingURL=useListPaginationContext.js.map