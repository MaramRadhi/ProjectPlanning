import * as React from 'react';
import { SxProps } from '@mui/system';
import { TextInputProps } from '../../input';
/**
 * Form and search input for doing a full-text search filter.
 *
 * Triggers a search on change (with debounce).
 *
 * @example
 *
 * const FilterPanel = () => (
 *     <Card>
 *         <CardContent>
 *             <FilterLiveSearch source="title" />
 *         </CardContent>
 *     </Card>
 * );
 */
export declare const FilterLiveSearch: React.MemoExoticComponent<(props: FilterLiveSearchProps) => JSX.Element>;
export interface FilterLiveSearchProps extends Omit<TextInputProps, 'source'> {
    source?: string;
    sx?: SxProps;
    label?: string;
    fullWidth?: boolean;
    variant?: 'filled' | 'outlined';
}
//# sourceMappingURL=FilterLiveSearch.d.ts.map