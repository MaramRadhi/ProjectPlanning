import * as React from 'react';
import { ReactElement, FC } from 'react';
import PropTypes from 'prop-types';
import { Identifier, RaRecord } from 'ra-core';
export interface DatagridLoadingProps {
    className?: string;
    expand?: ReactElement | FC<{
        id: Identifier;
        record: RaRecord;
        resource: string;
    }>;
    hasBulkActions?: boolean;
    nbChildren: number;
    nbFakeLines?: number;
    size?: 'small' | 'medium';
}
declare const _default: React.MemoExoticComponent<{
    ({ className, expand, hasBulkActions, nbChildren, nbFakeLines, size, }: DatagridLoadingProps): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        expand: PropTypes.Requireable<NonNullable<PropTypes.ReactElementLike | PropTypes.ReactComponentLike>>;
        hasBulkActions: PropTypes.Requireable<boolean>;
        nbChildren: PropTypes.Requireable<number>;
        nbFakeLines: PropTypes.Requireable<number>;
        size: PropTypes.Requireable<string>;
    };
}>;
export default _default;
//# sourceMappingURL=DatagridLoading.d.ts.map