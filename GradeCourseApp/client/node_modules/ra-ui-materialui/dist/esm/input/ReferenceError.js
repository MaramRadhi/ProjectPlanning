import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
export var ReferenceError = function (_a) {
    var label = _a.label, error = _a.error;
    return (React.createElement(TextField, { error: true, disabled: true, label: label, helperText: error === null || error === void 0 ? void 0 : error.message, margin: "normal" }));
};
ReferenceError.propTypes = {
    error: PropTypes.object.isRequired,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.bool,
    ]),
};
//# sourceMappingURL=ReferenceError.js.map