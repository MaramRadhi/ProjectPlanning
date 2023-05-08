import { Identifier } from '../../types';
/**
 * Get the list of selected items for a resource, and callbacks to change the selection
 *
 * @param resource The resource name, e.g. 'posts'
 *
 * @returns {Object} Destructure as [selectedIds, { select, toggle, clearSelection }].
 */
export declare const useRecordSelection: (resource: string) => [Identifier[], {
    select: (ids: Identifier[]) => void;
    unselect: (ids: Identifier[]) => void;
    toggle: (id: Identifier) => void;
    clearSelection: () => void;
}];
//# sourceMappingURL=useRecordSelection.d.ts.map