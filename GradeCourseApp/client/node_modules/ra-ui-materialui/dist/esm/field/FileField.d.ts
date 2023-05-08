/// <reference types="react" />
import PropTypes from 'prop-types';
import { PublicFieldProps, InjectedFieldProps } from './types';
import { SxProps } from '@mui/system';
/**
 * Render a link to a file based on a path contained in a record field
 *
 * @example
 * import { FileField } from 'react-admin';
 *
 * <FileField source="url" title="title" />
 *
 * // renders the record { id: 123, url: 'doc.pdf', title: 'Presentation' } as
 * <div>
 *     <a href="doc.pdf" title="Presentation">Presentation</a>
 * </div>
 */
export declare const FileField: {
    (props: FileFieldProps): JSX.Element;
    propTypes: {
        src: PropTypes.Requireable<string>;
        title: PropTypes.Requireable<string>;
        target: PropTypes.Requireable<string>;
        download: PropTypes.Requireable<NonNullable<string | boolean>>;
        ping: PropTypes.Requireable<string>;
        rel: PropTypes.Requireable<string>;
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
export interface FileFieldProps extends PublicFieldProps, InjectedFieldProps {
    src?: string;
    title?: string;
    target?: string;
    download?: boolean | string;
    ping?: string;
    rel?: string;
    sx?: SxProps;
}
//# sourceMappingURL=FileField.d.ts.map