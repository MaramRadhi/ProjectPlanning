import * as React from 'react';
import PropTypes from 'prop-types';
import { useResourceDefinition, useRecordContext } from 'ra-core';
import { EditButton } from '../button';
import TopToolbar from '../layout/TopToolbar';
/**
 * Action Toolbar for the Show view
 *
 * Internal component. If you want to add or remove actions for a Show view,
 * write your own ShowActions Component. Then, in the <Show> component,
 * use it in the `actions` prop to pass a custom component.
 *
 * @example
 *     import Button from '@mui/material/Button';
 *     import { TopToolbar, ShowButton, Show } from 'react-admin';
 *
 *     const PostShowActions = () => (
 *         <TopToolbar>
 *             <ShowButton />
 *             // Add your custom actions here //
 *             <Button color="primary" onClick={customAction}>Custom Action</Button>
 *         </TopToolbar>
 *     );
 *
 *     export const PostShow = (props) => (
 *         <Show actions={<PostShowActions />} {...props}>
 *             ...
 *         </Show>
 *     );
 */
export var ShowActions = function (props) {
    var record = useRecordContext(props);
    var hasEdit = useResourceDefinition().hasEdit;
    if (!hasEdit) {
        return null;
    }
    return (React.createElement(TopToolbar, { className: props.className },
        React.createElement(EditButton, { record: record })));
};
ShowActions.propTypes = {
    className: PropTypes.string,
    record: PropTypes.any,
};
//# sourceMappingURL=ShowActions.js.map