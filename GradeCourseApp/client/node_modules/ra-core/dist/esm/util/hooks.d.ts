import * as React from 'react';
export declare function useSafeSetState<T>(initialState?: T | (() => T)): [T | undefined, React.Dispatch<React.SetStateAction<T>>];
export declare function usePrevious(value: any): undefined;
export declare function useDeepCompareEffect(callback: any, inputs: any): void;
/**
 * A hook that returns true once a delay has expired.
 * @param ms The delay in milliseconds
 * @param key A key that can be used to reset the timer
 * @returns true if the delay has expired, false otherwise
 */
export declare function useTimeout(ms?: number, key?: string): boolean;
export declare function useIsMounted(): React.MutableRefObject<boolean>;
//# sourceMappingURL=hooks.d.ts.map