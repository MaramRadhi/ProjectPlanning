import PropTypes from 'prop-types';
export var fieldPropTypes = {
    sortBy: PropTypes.string,
    sortByOrder: PropTypes.oneOf(['ASC', 'DESC']),
    source: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.bool,
    ]),
    sortable: PropTypes.bool,
    className: PropTypes.string,
    cellClassName: PropTypes.string,
    headerClassName: PropTypes.string,
    textAlign: PropTypes.oneOf([
        'inherit',
        'left',
        'center',
        'right',
        'justify',
    ]),
    emptyText: PropTypes.string,
};
//# sourceMappingURL=types.js.map