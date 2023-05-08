import { SortPayload } from 'ra-core';
export declare const useSavedQueries: (resource: string) => import("ra-core").useStoreResult<SavedQuery[]>;
export interface SavedQuery {
    label: string;
    value: {
        filter?: any;
        displayedFilters?: any[];
        sort?: SortPayload;
        perPage?: number;
    };
}
export declare const extractValidSavedQueries: (savedQueries: SavedQuery[]) => SavedQuery[];
export declare const areValidSavedQueries: (savedQueries: SavedQuery[]) => boolean;
export declare const isValidSavedQuery: (savedQuery: SavedQuery) => boolean;
//# sourceMappingURL=useSavedQueries.d.ts.map