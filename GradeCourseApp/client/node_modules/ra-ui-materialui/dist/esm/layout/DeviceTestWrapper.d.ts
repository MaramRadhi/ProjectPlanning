/// <reference types="react" />
/**
 * Test utility to simulate a device form factor for server-side mediaQueries
 *
 * Do not use inside a browser.
 *
 * @example
 *
 * <DeviceTestWrapper width="sm">
 *     <MyResponsiveComponent />
 * <DeviceTestWrapper>
 */
export declare const DeviceTestWrapper: ({ width, children, }: DeviceTestWrapperProps) => JSX.Element;
export interface DeviceTestWrapperProps {
    width: 'md' | 'xs' | 'sm' | 'lg' | 'xl';
    children: JSX.Element;
}
//# sourceMappingURL=DeviceTestWrapper.d.ts.map