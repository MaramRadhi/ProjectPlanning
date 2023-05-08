import * as React from 'react';
import { ReactElement } from 'react';
import { ListItemProps } from '@mui/material';
import { SavedQuery } from './useSavedQueries';
export declare const SavedQueryFilterListItem: React.MemoExoticComponent<(props: SavedQueryFilterListItemProps) => ReactElement>;
export declare const SavedQueryFilterListItemClasses: {
    listItemButton: string;
    listItemText: string;
};
export interface SavedQueryFilterListItemProps extends SavedQuery, Omit<ListItemProps, 'value'> {
}
//# sourceMappingURL=SavedQueryFilterListItem.d.ts.map