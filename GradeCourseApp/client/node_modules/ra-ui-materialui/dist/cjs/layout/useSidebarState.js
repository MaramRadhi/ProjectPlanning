"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSidebarState = void 0;
var ra_core_1 = require("ra-core");
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
var useSidebarState = function () {
    return (0, ra_core_1.useStore)('sidebar.open', true);
};
exports.useSidebarState = useSidebarState;
//# sourceMappingURL=useSidebarState.js.map