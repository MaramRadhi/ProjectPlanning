import React, { ReactEventHandler, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { UseMutationOptions } from 'react-query';
import { MutationMode, RaRecord, DeleteParams, RedirectionSideEffect } from 'ra-core';
import { ButtonProps } from './Button';
export declare const DeleteWithConfirmButton: {
    <RecordType extends RaRecord = any>(props: DeleteWithConfirmButtonProps<RecordType, unknown>): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        confirmTitle: PropTypes.Requireable<string>;
        confirmContent: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<string>;
        mutationMode: PropTypes.Requireable<string>;
        record: PropTypes.Requireable<any>;
        redirect: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        resource: PropTypes.Requireable<string>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        translateOptions: PropTypes.Requireable<object>;
    };
};
export interface DeleteWithConfirmButtonProps<RecordType extends RaRecord = any, MutationOptionsError = unknown> extends ButtonProps {
    confirmTitle?: string;
    confirmContent?: React.ReactNode;
    icon?: ReactElement;
    mutationMode?: MutationMode;
    onClick?: ReactEventHandler<any>;
    translateOptions?: object;
    mutationOptions?: UseMutationOptions<RecordType, MutationOptionsError, DeleteParams<RecordType>>;
    record?: RecordType;
    redirect?: RedirectionSideEffect;
    resource?: string;
}
//# sourceMappingURL=DeleteWithConfirmButton.d.ts.map