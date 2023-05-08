import * as React from 'react';
/**
 * React useInterval Hook
 * Used to integrate the power of setInterval seamlessly
 *
 * @param callback - The callback function
 * @param delay - The amount of delay in minutes.
 *
 * @returns the ref of setInterval
 */
declare function useInterval(callback: () => void, delay: number | null): React.MutableRefObject<number | null>;
export { useInterval };
