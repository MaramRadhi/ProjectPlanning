import * as React from 'react';
import { createElement } from 'react';
import DefaultIcon from '@mui/icons-material/ViewList';
import { useResourceDefinitions, useGetResourceLabel, useCreatePath, } from 'ra-core';
import { MenuItemLink } from './MenuItemLink';
export var ResourceMenuItem = function (_a) {
    var name = _a.name;
    var resources = useResourceDefinitions();
    var getResourceLabel = useGetResourceLabel();
    var createPath = useCreatePath();
    if (!resources || !resources[name])
        return null;
    return (React.createElement(MenuItemLink, { to: createPath({
            resource: name,
            type: 'list',
        }), state: { _scrollToTop: true }, primaryText: React.createElement(React.Fragment, null, getResourceLabel(name, 2)), leftIcon: resources[name].icon ? (createElement(resources[name].icon)) : (React.createElement(DefaultIcon, null)) }));
};
//# sourceMappingURL=ResourceMenuItem.js.map