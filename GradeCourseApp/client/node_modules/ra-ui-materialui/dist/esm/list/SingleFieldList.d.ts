import * as React from 'react';
import { SxProps } from '@mui/material';
import { HtmlHTMLAttributes, ComponentType } from 'react';
import PropTypes from 'prop-types';
import { RaRecord } from 'ra-core';
/**
 * Iterator component to be used to display a list of entities, using a single field
 *
 * @example Display all the books by the current author
 * <ReferenceManyField reference="books" target="author_id">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * By default, it includes a link to the <Edit> page of the related record
 * (`/books/:id` in the previous example).
 *
 * Set the linkType prop to "show" to link to the <Show> page instead.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType="show">
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 *
 * You can also prevent `<SingleFieldList>` from adding link to children by setting
 * `linkType` to false.
 *
 * @example
 * <ReferenceManyField reference="books" target="author_id" linkType={false}>
 *     <SingleFieldList>
 *         <ChipField source="title" />
 *     </SingleFieldList>
 * </ReferenceManyField>
 */
export declare const SingleFieldList: {
    (props: SingleFieldListProps): JSX.Element;
    propTypes: {
        children: PropTypes.Validator<PropTypes.ReactElementLike>;
        classes: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        component: (props: any, propName: any, componentName: any) => Error;
        data: PropTypes.Requireable<any>;
        ids: PropTypes.Requireable<any[]>;
        linkType: PropTypes.Requireable<NonNullable<string | boolean>>;
        resource: PropTypes.Requireable<string>;
        sx: PropTypes.Requireable<object>;
    };
};
export interface SingleFieldListProps<RecordType extends RaRecord = any> extends HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    component?: string | ComponentType<any>;
    linkType?: string | false;
    children: React.ReactElement;
    data?: RecordType[];
    total?: number;
    loaded?: boolean;
    sx?: SxProps;
}
export declare const SingleFieldListClasses: {
    link: string;
};
//# sourceMappingURL=SingleFieldList.d.ts.map