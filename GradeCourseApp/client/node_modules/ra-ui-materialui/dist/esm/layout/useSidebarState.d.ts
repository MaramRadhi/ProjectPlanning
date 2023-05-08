/**
 * A hook that returns the sidebar open state and a function to toggle it.
 *
 * @example
 * const ToggleSidebar = () => {
 *     const [open, setOpen] = useSidebarState();
 *     return (
 *         <Button onClick={() => setOpen(!open)}>
 *             {open ? 'Open' : 'Close'}
 *         </Button>
 *     );
 * };
 */
export declare const useSidebarState: () => useSidebarStateResult;
export declare type useSidebarStateResult = [boolean, (open: boolean) => void];
//# sourceMappingURL=useSidebarState.d.ts.map