import { useStore } from 'ra-core';
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
export var useSidebarState = function () {
    return useStore('sidebar.open', true);
};
//# sourceMappingURL=useSidebarState.js.map