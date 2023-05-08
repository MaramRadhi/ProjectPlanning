import PropTypes from 'prop-types';
/**
 * Common PropTypes for all react-admin inputs
 */
export var InputPropTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.element,
    ]),
    resource: PropTypes.string,
    source: PropTypes.string,
};
//# sourceMappingURL=InputPropTypes.js.map