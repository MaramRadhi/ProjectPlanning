import { ReactNode } from 'react';
import PropTypes from 'prop-types';
/**
 * Filter button/form combo
 *
 * @example
 *
 * const PostFilter = (props) => (
 *     <Filter {...props}>
 *         <TextInput label="Search" source="q" alwaysOn />
 *         <TextInput label="Title" source="title" defaultValue="Hello, World!" />
 *     </Filter>
 * );
 *
 * export const PostList = () => (
 *     <List filters={<PostFilter />}>
 *         ...
 *     </List>
 * );
 *
 */
export declare const Filter: {
    (props: FilterProps): JSX.Element;
    propTypes: {
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        classes: PropTypes.Requireable<object>;
        context: PropTypes.Requireable<string>;
    };
};
export declare const FilterClasses: {
    button: string;
    form: string;
};
export interface FilterProps {
    children: ReactNode;
    context?: 'form' | 'button';
    variant?: string;
}
//# sourceMappingURL=Filter.d.ts.map