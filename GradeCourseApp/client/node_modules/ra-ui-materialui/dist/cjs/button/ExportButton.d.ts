/// <reference types="react" />
import PropTypes from 'prop-types';
import { SortPayload, Exporter, FilterPayload } from 'ra-core';
import { ButtonProps } from './Button';
export declare const ExportButton: {
    (props: ExportButtonProps): JSX.Element;
    propTypes: {
        exporter: PropTypes.Requireable<(...args: any[]) => any>;
        filterValues: PropTypes.Requireable<object>;
        label: PropTypes.Requireable<string>;
        maxResults: PropTypes.Requireable<number>;
        resource: PropTypes.Requireable<string>;
        sort: PropTypes.Requireable<Required<PropTypes.InferProps<{
            field: PropTypes.Requireable<string>;
            order: PropTypes.Requireable<string>;
        }>>>;
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        meta: PropTypes.Requireable<any>;
    };
};
interface Props {
    exporter?: Exporter;
    filterValues?: FilterPayload;
    icon?: JSX.Element;
    label?: string;
    maxResults?: number;
    onClick?: (e: Event) => void;
    resource?: string;
    sort?: SortPayload;
    meta?: any;
}
export declare type ExportButtonProps = Props & ButtonProps;
export {};
//# sourceMappingURL=ExportButton.d.ts.map