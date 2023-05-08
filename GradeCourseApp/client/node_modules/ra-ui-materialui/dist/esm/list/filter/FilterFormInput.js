import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import ActionHide from '@mui/icons-material/HighlightOff';
import clsx from 'clsx';
import { useResourceContext, useTranslate } from 'ra-core';
export var FilterFormInput = function (props) {
    var _a;
    var filterElement = props.filterElement, handleHide = props.handleHide, className = props.className;
    var resource = useResourceContext(props);
    var translate = useTranslate();
    return (React.createElement(Root, { "data-source": filterElement.props.source, className: clsx('filter-field', className) },
        !filterElement.props.alwaysOn && (React.createElement(IconButton, { className: clsx('hide-filter', FilterFormInputClasses.hideButton), onClick: handleHide, "data-key": filterElement.props.source, title: translate('ra.action.remove_filter'), size: "small" },
            React.createElement(ActionHide, null))),
        React.cloneElement(filterElement, {
            resource: resource,
            record: emptyRecord,
            size: (_a = filterElement.props.size) !== null && _a !== void 0 ? _a : 'small',
            helperText: false,
            // ignore defaultValue in Field because it was already set in Form (via mergedInitialValuesWithDefaultValues)
            defaultValue: undefined,
        }),
        React.createElement("div", { className: FilterFormInputClasses.spacer }, "\u00A0")));
};
FilterFormInput.propTypes = {
    filterElement: PropTypes.node,
    handleHide: PropTypes.func,
    resource: PropTypes.string,
    className: PropTypes.string,
};
var PREFIX = 'RaFilterFormInput';
export var FilterFormInputClasses = {
    spacer: "".concat(PREFIX, "-spacer"),
    hideButton: "".concat(PREFIX, "-hideButton"),
};
var Root = styled('div', {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            display: 'flex',
            alignItems: 'flex-end',
            pointerEvents: 'auto'
        },
        _b["& .".concat(FilterFormInputClasses.spacer)] = { width: theme.spacing(2) },
        _b["& .".concat(FilterFormInputClasses.hideButton)] = {
            marginBottom: theme.spacing(1),
        },
        _b);
});
var emptyRecord = {};
//# sourceMappingURL=FilterFormInput.js.map