import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { TabsProps } from '@mui/material/Tabs';
export declare const TabbedFormTabs: {
    (props: TabbedFormTabsProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        url: PropTypes.Requireable<string>;
        tabsWithErrors: PropTypes.Requireable<string[]>;
    };
};
export declare const getTabbedFormTabFullPath: (tab: ReactElement, index: number) => string;
export interface TabbedFormTabsProps extends TabsProps {
    url?: string;
    tabsWithErrors?: string[];
    syncWithLocation?: boolean;
}
//# sourceMappingURL=TabbedFormTabs.d.ts.map