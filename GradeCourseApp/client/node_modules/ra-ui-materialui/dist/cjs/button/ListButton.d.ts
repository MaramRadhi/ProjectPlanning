import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps } from './Button';
/**
 * Opens the List view of a given resource
 *
 * @example // basic usage
 * import { ListButton } from 'react-admin';
 *
 * const CommentListButton = () => (
 *     <ListButton label="Comments" />
 * );
 *
 * @example // linking back to the list from the Edit view
 * import { TopToolbar, ListButton, ShowButton, Edit } from 'react-admin';
 *
 * const PostEditActions = () => (
 *     <TopToolbar>
 *         <ListButton />
 *         <ShowButton />
 *     </TopToolbar>
 * );
 *
 * export const PostEdit = (props) => (
 *     <Edit actions={<PostEditActions />} {...props}>
 *         ...
 *     </Edit>
 * );
 */
export declare const ListButton: {
    (props: ListButtonProps): JSX.Element;
    propTypes: {
        icon: PropTypes.Requireable<PropTypes.ReactElementLike>;
        label: PropTypes.Requireable<string>;
    };
};
interface Props {
    icon?: ReactElement;
    label?: string;
    resource?: string;
    scrollToTop?: boolean;
}
export declare type ListButtonProps = Props & ButtonProps;
export {};
//# sourceMappingURL=ListButton.d.ts.map