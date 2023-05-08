import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { DropzoneOptions } from 'react-dropzone';
import { CommonInputProps } from './CommonInputProps';
import { SxProps } from '@mui/system';
export declare const FileInput: {
    (props: FileInputProps): JSX.Element;
    propTypes: {
        accept: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        isRequired: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        labelMultiple: PropTypes.Requireable<string>;
        labelSingle: PropTypes.Requireable<string>;
        maxSize: PropTypes.Requireable<number>;
        minSize: PropTypes.Requireable<number>;
        multiple: PropTypes.Requireable<boolean>;
        validateFileRemoval: PropTypes.Requireable<(...args: any[]) => any>;
        options: PropTypes.Requireable<object>;
        resource: PropTypes.Requireable<string>;
        source: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    };
};
export declare const FileInputClasses: {
    dropZone: string;
    removeButton: string;
};
export declare type FileInputProps = CommonInputProps & {
    accept?: DropzoneOptions['accept'];
    className?: string;
    children?: ReactNode;
    labelMultiple?: string;
    labelSingle?: string;
    maxSize?: DropzoneOptions['maxSize'];
    minSize?: DropzoneOptions['minSize'];
    multiple?: DropzoneOptions['multiple'];
    options?: DropzoneOptions;
    onRemove?: Function;
    placeholder?: ReactNode;
    inputProps?: any;
    validateFileRemoval?(file: any): boolean | Promise<boolean>;
    sx?: SxProps;
};
//# sourceMappingURL=FileInput.d.ts.map