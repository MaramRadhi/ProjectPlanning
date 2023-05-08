import { HtmlHTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { ListFilterContextValue } from 'ra-core';
import { FieldValues } from 'react-hook-form';
export declare const FilterForm: (props: FilterFormProps) => JSX.Element;
export declare type FilterFormProps = FilterFormBaseProps & {
    defaultValues?: FieldValues;
};
export declare const FilterFormBase: {
    (props: FilterFormBaseProps): JSX.Element;
    propTypes: {
        resource: PropTypes.Requireable<string>;
        filters: PropTypes.Validator<PropTypes.ReactNodeLike[]>;
        displayedFilters: PropTypes.Requireable<object>;
        hideFilter: PropTypes.Requireable<(...args: any[]) => any>;
        initialValues: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
    };
};
export declare type FilterFormBaseProps = Omit<HtmlHTMLAttributes<HTMLFormElement>, 'children'> & Partial<ListFilterContextValue> & {
    className?: string;
    resource?: string;
    filters?: ReactNode[];
};
export declare const mergeInitialValuesWithDefaultValues: (initialValues: any, filters: any) => any;
export declare const FilterFormClasses: {
    clearFix: string;
    filterFormInput: string;
};
/**
 * Because we are using controlled inputs with react-hook-form, we must provide a default value
 * for each input when resetting the form. (see https://react-hook-form.com/api/useform/reset).
 * To ensure we don't provide undefined which will result to the current input value being reapplied
 * and due to the dynamic nature of the filter form, we rebuild the filter form values from its current
 * values and make sure to pass at least an empty string for each input.
 */
export declare const getFilterFormValues: (formValues: Record<string, any>, filterValues: Record<string, any>) => Record<string, any>;
//# sourceMappingURL=FilterForm.d.ts.map