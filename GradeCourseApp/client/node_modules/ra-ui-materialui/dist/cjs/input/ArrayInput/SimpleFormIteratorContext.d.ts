/// <reference types="react" />
/**
 * A React context that provides access to a SimpleFormIterator data (the total number of items) and mutators (add, reorder and remove).
 * Useful to create custom array input iterators.
 * @see {SimpleFormIterator}
 * @see {ArrayInput}
 */
export declare const SimpleFormIteratorContext: import("react").Context<SimpleFormIteratorContextValue>;
export declare type SimpleFormIteratorContextValue = {
    add: () => void;
    remove: (index: number) => void;
    reOrder: (index: number, newIndex: number) => void;
    source: string;
    total: number;
};
//# sourceMappingURL=SimpleFormIteratorContext.d.ts.map