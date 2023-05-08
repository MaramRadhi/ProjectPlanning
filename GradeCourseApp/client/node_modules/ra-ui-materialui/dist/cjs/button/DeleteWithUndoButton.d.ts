import { ReactElement, ReactEventHandler } from 'react';
import PropTypes from 'prop-types';
import { UseMutationOptions } from 'react-query';
import { RaRecord, DeleteParams, RedirectionSideEffect } from 'ra-core';
import { ButtonProps } from './Button';
export declare const DeleteWithUndoButton: {
    <RecordType extends RaRecord = any>(props: DeleteWithUndoButtonProps<RecordType, unknown>): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        redirect: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        resource: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
    };
};
export interface DeleteWithUndoButtonProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> extends ButtonProps {
    icon?: ReactElement;
    onClick?: ReactEventHandler<any>;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteParams<RecordType>>;
    record?: RecordType;
    redirect?: RedirectionSideEffect;
    resource?: string;
}
//# sourceMappingURL=DeleteWithUndoButton.d.ts.map