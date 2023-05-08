import { ListSortContextValue } from './ListSortContext';
/**
 * Hook to read the list controller props from the ListContext.
 *
 * Must be used within a <ListContextProvider> (e.g. as a descendent of <List>
 * or <ListBase>).
 *
 * @typedef {Object} ListSortContextValue
 * @prop {Object}   sort a sort object { field, order }, e.g. { field: 'date', order: 'DESC' }
 * @prop {Function} setSort a callback to change the sort, e.g. setSort({ field: 'name', order: 'ASC' })
 * @prop {string}   resource the resource name, deduced from the location. e.g. 'posts'
 *
 * @returns {ListSortContextValue} list controller props
 *
 * @see useListController for how it is filled
 */
export declare const useListSortContext: (props?: any) => ListSortContextValue;
//# sourceMappingURL=useListSortContext.d.ts.map