import { ReactElement } from 'react';
import { UseMutationOptions } from 'react-query';
import PropTypes from 'prop-types';
import { ButtonProps } from '@mui/material';
import { CreateParams, RaRecord, TransformData, UpdateParams } from 'ra-core';
/**
 * Submit button for resource forms (Edit and Create).
 *
 * @typedef {Object} Props the props you can use (other props are injected by the <Toolbar>)
 * @prop {string} className
 * @prop {string} label Button label. Defaults to 'ra.action.save', translated.
 * @prop {boolean} disabled Disable the button.
 * @prop {string} variant MUI variant for the button. Defaults to 'contained'.
 * @prop {ReactElement} icon
 * @prop {function} mutationOptions Object of options passed to react-query.
 * @prop {function} transform Callback to execute before calling the dataProvider. Receives the data from the form, must return that transformed data. Can be asynchronous (and return a Promise)
 * @prop {boolean} alwaysEnable Force enabling the <SaveButton>. If it's not defined, the `<SaveButton>` will be enabled using `react-hook-form`'s `isValidating` state props and form context's `saving` prop (disabled if isValidating or saving, enabled otherwise).
 *
 * @param {Props} props
 *
 * @example // with custom success side effect
 *
 * const MySaveButton = props => {
 *     const notify = useNotify();
 *     const redirect = useRedirect();
 *     const onSuccess = (response) => {
 *         notify(`Post "${response.data.title}" saved!`);
 *         redirect('/posts');
 *     };
 *     return <SaveButton {...props} mutationOptions={{ onSuccess }} />;
 * }
 */
export declare const SaveButton: {
    <RecordType extends RaRecord = any>(props: SaveButtonProps<RecordType>): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        invalid: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<string>;
        variant: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        alwaysEnable: PropTypes.Requireable<boolean>;
    };
};
interface Props<RecordType extends RaRecord = any, MutationOptionsError = unknown> {
    className?: string;
    disabled?: boolean;
    icon?: ReactElement;
    invalid?: boolean;
    label?: string;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, CreateParams<RecordType> | UpdateParams<RecordType>>;
    transform?: TransformData;
    variant?: string;
}
export declare type SaveButtonProps<RecordType extends RaRecord = any> = Props<RecordType> & ButtonProps & {
    alwaysEnable?: boolean;
};
export {};
//# sourceMappingURL=SaveButton.d.ts.map