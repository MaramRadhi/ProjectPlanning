import * as React from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
export var HideOnScroll = function (props) {
    var children = props.children, className = props.className;
    var trigger = useScrollTrigger();
    return (React.createElement(Slide, { appear: false, direction: "down", in: !trigger, className: className }, children));
};
HideOnScroll.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
//# sourceMappingURL=HideOnScroll.js.map