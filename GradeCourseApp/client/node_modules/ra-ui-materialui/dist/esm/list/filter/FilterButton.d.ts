import { ReactNode, HtmlHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
export declare const FilterButton: {
    (props: FilterButtonProps): JSX.Element;
    propTypes: {
        resource: PropTypes.Requireable<string>;
        filters: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        displayedFilters: PropTypes.Requireable<object>;
        filterValues: PropTypes.Requireable<object>;
        showFilter: PropTypes.Requireable<(...args: any[]) => any>;
        className: PropTypes.Requireable<string>;
    };
};
export interface FilterButtonProps extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    resource?: string;
    filterValues?: any;
    showFilter?: (filterName: string, defaultValue: any) => void;
    displayedFilters?: any;
    filters?: ReactNode[];
    disableSaveQuery?: boolean;
}
//# sourceMappingURL=FilterButton.d.ts.map