import { useContext } from 'react';
import { SaveContext } from './SaveContext';
/**
 * Get the save() function and its status
 *
 * Used in forms.
 *
 * @example
 *
 * const {
 *     save,
 *     saving
 * } = useSaveContext();
 */
export var useSaveContext = function (props) {
    return useContext(SaveContext);
};
//# sourceMappingURL=useSaveContext.js.map