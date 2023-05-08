import { ReactNode, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ListProps } from '@mui/material';
import { Identifier, RaRecord } from 'ra-core';
/**
 * The <SimpleList> component renders a list of records as a MUI <List>.
 * It is usually used as a child of react-admin's <List> and <ReferenceManyField> components.
 *
 * Also widely used on Mobile.
 *
 * Props:
 * - primaryText: function returning a React element (or some text) based on the record
 * - secondaryText: same
 * - tertiaryText: same
 * - leftAvatar: function returning a React element based on the record
 * - leftIcon: same
 * - rightAvatar: same
 * - rightIcon: same
 * - linkType: 'edit' or 'show', or a function returning 'edit' or 'show' based on the record
 * - rowStyle: function returning a style object based on (record, index)
 *
 * @example // Display all posts as a List
 * const postRowStyle = (record, index) => ({
 *     backgroundColor: record.views >= 500 ? '#efe' : 'white',
 * });
 * export const PostList = () => (
 *     <List>
 *         <SimpleList
 *             primaryText={record => record.title}
 *             secondaryText={record => `${record.views} views`}
 *             tertiaryText={record =>
 *                 new Date(record.published_at).toLocaleDateString()
 *             }
 *             rowStyle={postRowStyle}
 *          />
 *     </List>
 * );
 */
export declare const SimpleList: {
    <RecordType extends RaRecord = any>(props: SimpleListProps<RecordType>): JSX.Element;
    propTypes: {
        className: PropTypes.Requireable<string>;
        leftAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        leftIcon: PropTypes.Requireable<(...args: any[]) => any>;
        linkType: PropTypes.Requireable<NonNullable<string | boolean | ((...args: any[]) => any)>>;
        primaryText: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>>;
        rightAvatar: PropTypes.Requireable<(...args: any[]) => any>;
        rightIcon: PropTypes.Requireable<(...args: any[]) => any>;
        secondaryText: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>>;
        tertiaryText: PropTypes.Requireable<NonNullable<string | PropTypes.ReactElementLike | ((...args: any[]) => any)>>;
        rowStyle: PropTypes.Requireable<(...args: any[]) => any>;
    };
};
export declare type FunctionToElement<RecordType extends RaRecord = any> = (record: RecordType, id: Identifier) => ReactNode;
export interface SimpleListProps<RecordType extends RaRecord = any> extends Omit<ListProps, 'classes'> {
    className?: string;
    empty?: ReactElement;
    hasBulkActions?: boolean;
    leftAvatar?: FunctionToElement<RecordType>;
    leftIcon?: FunctionToElement<RecordType>;
    primaryText?: FunctionToElement<RecordType> | ReactElement | string;
    linkType?: string | FunctionLinkType | false;
    rightAvatar?: FunctionToElement<RecordType>;
    rightIcon?: FunctionToElement<RecordType>;
    secondaryText?: FunctionToElement<RecordType> | ReactElement | string;
    tertiaryText?: FunctionToElement<RecordType> | ReactElement | string;
    rowStyle?: (record: RecordType, index: number) => any;
    resource?: string;
    data?: RecordType[];
    isLoading?: boolean;
    isLoaded?: boolean;
    total?: number;
}
export declare type FunctionLinkType = (record: RaRecord, id: Identifier) => string;
export interface LinkOrNotProps {
    linkType?: string | FunctionLinkType | false;
    resource: string;
    id: Identifier;
    record: RaRecord;
    children: ReactNode;
}
export declare const SimpleListClasses: {
    tertiary: string;
};
//# sourceMappingURL=SimpleList.d.ts.map