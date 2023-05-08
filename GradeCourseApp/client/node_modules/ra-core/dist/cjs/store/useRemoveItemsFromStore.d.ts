/**
 * Get a callback to remove all item with a certain key prefix from the store
 *
 * @example
 * import { useRemoveItemsFromStore } from 'react-admin';
 *
 * const ResetDatagridPrefs = () {
 *    const removeItems = useRemoveItemsFromStore();
 *
 *    const hancleClick = () => {
 *        removeItems('datagrid.prefs');
 *    };
 *
 *    return <Button onClick={hancleClick}>Reset datagrid preferences</Button>;
 * }
 */
export declare const useRemoveItemsFromStore: (hookTimeKeyPrefix?: string) => (keyPrefix?: string) => void;
//# sourceMappingURL=useRemoveItemsFromStore.d.ts.map