import { ReactElement, ReactNode } from 'react';
import { SxProps } from '@mui/material';
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
import { UseFieldArrayReturn } from 'react-hook-form';
import { DisableRemoveFunction } from './SimpleFormIteratorItem';
export declare const SimpleFormIterator: {
    (props: SimpleFormIteratorProps): JSX.Element;
    defaultProps: {
        disableAdd: boolean;
        disableRemove: boolean;
    };
    propTypes: {
        addButton: PropTypes.Requireable<PropTypes.ReactElementLike>;
        removeButton: PropTypes.Requireable<PropTypes.ReactElementLike>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        className: PropTypes.Requireable<string>;
        field: PropTypes.Requireable<object>;
        fields: PropTypes.Requireable<any[]>;
        fieldState: PropTypes.Requireable<object>;
        formState: PropTypes.Requireable<object>;
        fullWidth: PropTypes.Requireable<boolean>;
        inline: PropTypes.Requireable<boolean>;
        record: PropTypes.Requireable<object>;
        source: PropTypes.Requireable<string>;
        resource: PropTypes.Requireable<string>;
        translate: PropTypes.Requireable<(...args: any[]) => any>;
        disableAdd: PropTypes.Requireable<boolean>;
        disableRemove: PropTypes.Requireable<NonNullable<boolean | ((...args: any[]) => any)>>;
        TransitionProps: PropTypes.Requireable<PropTypes.InferProps<{}>>;
    };
};
declare type GetItemLabelFunc = (index: number) => string | ReactElement;
export interface SimpleFormIteratorProps extends Partial<UseFieldArrayReturn> {
    addButton?: ReactElement;
    children?: ReactNode;
    className?: string;
    disabled?: boolean;
    disableAdd?: boolean;
    disableClear?: boolean;
    disableRemove?: boolean | DisableRemoveFunction;
    disableReordering?: boolean;
    fullWidth?: boolean;
    getItemLabel?: boolean | GetItemLabelFunc;
    inline?: boolean;
    meta?: {
        error?: any;
        submitFailed?: boolean;
    };
    record?: RaRecord;
    removeButton?: ReactElement;
    reOrderButtons?: ReactElement;
    resource?: string;
    source?: string;
    sx?: SxProps;
}
export {};
//# sourceMappingURL=SimpleFormIterator.d.ts.map