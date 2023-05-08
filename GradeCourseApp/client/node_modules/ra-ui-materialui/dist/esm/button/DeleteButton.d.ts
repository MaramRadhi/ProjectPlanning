import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { UseMutationOptions } from 'react-query';
import { RaRecord, MutationMode, DeleteParams, SaveContextValue, RedirectionSideEffect } from 'ra-core';
import { ButtonProps } from './Button';
/**
 * Button used to delete a single record. Added by default by the <Toolbar> of edit and show views.
 *
 * @typedef {Object} Props The props you can use (other props are injected if you used it in the <Toolbar>)
 * @prop {boolean} mutationMode Either 'pessimistic', 'optimistic' or 'undoable'. Determine whether the deletion uses an undo button in a notification or a confirmation dialog. Defaults to 'undoable'.
 * @prop {Object} record The current resource record
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.delete, translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant MUI variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon Override the icon. Defaults to the Delete icon from MUI.
 *
 * @param {Props} props
 *
 * @example Usage in the <TopToolbar> of an <Edit> form
 *
 * import * as React from 'react';
 * import { Edit, DeleteButton, TopToolbar } from 'react-admin';
 *
 * const EditActions = props => {
 *     const { data, resource } = props;
 *     return (
 *         <TopToolbar>
 *             <DeleteButton
 *                 mutationMode="pessimistic" // Renders the <DeleteWithConfirmButton>
 *             />
 *         </TopToolbar>
 *     );
 * };
 *
 * const Edit = props => {
 *     return <Edit actions={<EditActions />} {...props} />;
 * };
 */
export declare const DeleteButton: {
    <RecordType extends RaRecord = any>(props: DeleteButtonProps<RecordType, unknown>): JSX.Element;
    propTypes: {
        label: PropTypes.Requireable<string>;
        mutationMode: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        redirect: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        resource: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export interface DeleteButtonProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> extends ButtonProps, SaveContextValue {
    confirmTitle?: string;
    confirmContent?: string;
    icon?: ReactElement;
    mutationMode?: MutationMode;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteParams<RecordType>>;
    record?: RecordType;
    redirect?: RedirectionSideEffect;
    resource?: string;
}
//# sourceMappingURL=DeleteButton.d.ts.map