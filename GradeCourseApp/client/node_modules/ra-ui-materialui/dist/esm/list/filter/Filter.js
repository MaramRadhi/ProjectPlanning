import * as React from 'react';
import { Children } from 'react';
import PropTypes from 'prop-types';
import { FilterForm } from './FilterForm';
import { FilterButton } from './FilterButton';
import { FilterContext } from '../FilterContext';
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
export var Filter = function (props) {
    var children = props.children;
    var renderButton = function () {
        return React.createElement(FilterButton, { className: FilterClasses.button });
    };
    var renderForm = function () {
        return React.createElement(FilterForm, { className: FilterClasses.form });
    };
    return (React.createElement(FilterContext.Provider, { value: Children.toArray(children) }, props.context === 'button' ? renderButton() : renderForm()));
};
Filter.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    context: PropTypes.oneOf(['form', 'button']),
};
var PREFIX = 'RaFilter';
export var FilterClasses = {
    button: "".concat(PREFIX, "-button"),
    form: "".concat(PREFIX, "-form"),
};
//# sourceMappingURL=Filter.js.map