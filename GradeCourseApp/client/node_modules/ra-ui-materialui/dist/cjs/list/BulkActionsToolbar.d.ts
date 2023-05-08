import { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { Identifier } from 'ra-core';
export declare const BulkActionsToolbar: {
    (props: BulkActionsToolbarProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        label: PropTypes.Requireable<string>;
    };
};
export interface BulkActionsToolbarProps {
    children?: ReactNode;
    label?: string;
    selectedIds?: Identifier[];
    className?: string;
}
export declare const BulkActionsToolbarClasses: {
    toolbar: string;
    topToolbar: string;
    buttons: string;
    collapsed: string;
    title: string;
    icon: string;
};
//# sourceMappingURL=BulkActionsToolbar.d.ts.map