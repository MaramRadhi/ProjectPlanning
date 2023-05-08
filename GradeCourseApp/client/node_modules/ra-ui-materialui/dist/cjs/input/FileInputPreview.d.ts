import { ReactNode } from 'react';
import PropTypes from 'prop-types';
export declare const FileInputPreview: {
    (props: FileInputPreviewProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        className: PropTypes.Requireable<string>;
        file: PropTypes.Requireable<object>;
        onRemove: PropTypes.Validator<(...args: any[]) => any>;
    };
    defaultProps: {
        file: any;
    };
};
export interface FileInputPreviewProps {
    children: ReactNode;
    className?: string;
    onRemove: () => void;
    file: any;
}
//# sourceMappingURL=FileInputPreview.d.ts.map