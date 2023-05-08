/// <reference types="react" />
import PropTypes from 'prop-types';
import { PublicFieldProps, InjectedFieldProps } from './types';
import { SxProps } from '@mui/system';
export declare const ImageField: {
    (props: ImageFieldProps): JSX.Element;
    displayName: string;
    propTypes: {
        src: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        sortBy: PropTypes.Requireable<string>;
        sortByOrder: PropTypes.Requireable<"ASC" | "DESC">;
        source: PropTypes.Requireable<string>;
        label: PropTypes.Requireable<NonNullable<string | boolean | PropTypes.ReactElementLike>>;
        sortable: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        cellClassName: PropTypes.Requireable<string>;
        headerClassName: PropTypes.Requireable<string>;
        textAlign: PropTypes.Requireable<"inherit" | "left" | "right" | "center" | "justify">;
        emptyText: PropTypes.Requireable<string>;
    };
};
export declare const ImageFieldClasses: {
    list: string;
    image: string;
};
export interface ImageFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    sx?: SxProps;
}
//# sourceMappingURL=ImageField.d.ts.map