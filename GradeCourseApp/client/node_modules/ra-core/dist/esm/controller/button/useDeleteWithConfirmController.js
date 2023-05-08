var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useState, useCallback, } from 'react';
import { useDelete } from '../../dataProvider';
import { useUnselect } from '../../controller';
import { useRedirect } from '../../routing';
import { useNotify } from '../../notification';
import { useResourceContext } from '../../core';
/**
 * Prepare a set of callbacks for a delete button guarded by confirmation dialog
 *
 * @example
 *
 * const DeleteButton = ({
 *     resource,
 *     record,
 *     redirect,
 *     onClick,
 *     ...rest
 * }) => {
 *     const {
 *         open,
 *         isLoading,
 *         handleDialogOpen,
 *         handleDialogClose,
 *         handleDelete,
 *     } = useDeleteWithConfirmController({
 *         resource,
 *         record,
 *         redirect,
 *         onClick,
 *     });
 *
 *     return (
 *         <Fragment>
 *             <Button
 *                 onClick={handleDialogOpen}
 *                 label="ra.action.delete"
 *                 {...rest}
 *             >
 *                 {icon}
 *             </Button>
 *             <Confirm
 *                 isOpen={open}
 *                 loading={isLoading}
 *                 title="ra.message.delete_title"
 *                 content="ra.message.delete_content"
 *                 translateOptions={{
 *                     name: resource,
 *                     id: record.id,
 *                 }}
 *                 onConfirm={handleDelete}
 *                 onClose={handleDialogClose}
 *             />
 *         </Fragment>
 *     );
 * };
 */
var useDeleteWithConfirmController = function (props) {
    var record = props.record, redirectTo = props.redirect, mutationMode = props.mutationMode, onClick = props.onClick, _a = props.mutationOptions, mutationOptions = _a === void 0 ? {} : _a;
    var mutationMeta = mutationOptions.meta, otherMutationOptions = __rest(mutationOptions, ["meta"]);
    var resource = useResourceContext(props);
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var notify = useNotify();
    var unselect = useUnselect(resource);
    var redirect = useRedirect();
    var _c = useDelete(), deleteOne = _c[0], isLoading = _c[1].isLoading;
    var handleDialogOpen = function (e) {
        setOpen(true);
        e.stopPropagation();
    };
    var handleDialogClose = function (e) {
        setOpen(false);
        e.stopPropagation();
    };
    var handleDelete = useCallback(function (event) {
        event.stopPropagation();
        deleteOne(resource, {
            id: record.id,
            previousData: record,
            meta: mutationMeta,
        }, __assign({ onSuccess: function () {
                setOpen(false);
                notify('ra.notification.deleted', {
                    type: 'info',
                    messageArgs: { smart_count: 1 },
                    undoable: mutationMode === 'undoable',
                });
                unselect([record.id]);
                redirect(redirectTo, resource);
            }, onError: function (error) {
                setOpen(false);
                notify(typeof error === 'string'
                    ? error
                    : error.message || 'ra.notification.http_error', {
                    type: 'error',
                    messageArgs: {
                        _: typeof error === 'string'
                            ? error
                            : error && error.message
                                ? error.message
                                : undefined,
                    },
                });
            }, mutationMode: mutationMode }, otherMutationOptions));
        if (typeof onClick === 'function') {
            onClick(event);
        }
    }, [
        deleteOne,
        mutationMeta,
        mutationMode,
        otherMutationOptions,
        notify,
        onClick,
        record,
        redirect,
        redirectTo,
        resource,
        unselect,
    ]);
    return {
        open: open,
        isLoading: isLoading,
        handleDialogOpen: handleDialogOpen,
        handleDialogClose: handleDialogClose,
        handleDelete: handleDelete,
    };
};
export default useDeleteWithConfirmController;
//# sourceMappingURL=useDeleteWithConfirmController.js.map