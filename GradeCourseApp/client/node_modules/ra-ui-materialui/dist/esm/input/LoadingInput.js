import * as React from 'react';
import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTimeout } from 'ra-core';
import { ResettableTextField } from './ResettableTextField';
/**
 * An input placeholder with a loading indicator
 *
 * Avoids visual jumps when replaced by a form input
 */
export var LoadingInput = function (_a) {
    var fullWidth = _a.fullWidth, label = _a.label, helperText = _a.helperText, margin = _a.margin, size = _a.size, sx = _a.sx, _b = _a.timeout, timeout = _b === void 0 ? 1000 : _b, variant = _a.variant;
    var oneSecondHasPassed = useTimeout(timeout);
    return (React.createElement(StyledResettableTextField, { sx: sx, label: label, helperText: helperText, fullWidth: fullWidth, variant: variant, margin: margin, size: size, disabled: true, onChange: function () { }, InputProps: {
            endAdornment: oneSecondHasPassed ? (React.createElement(CircularProgress, { color: "inherit", size: 20 })) : (
            // use an adornment of the same size to avoid visual jumps
            React.createElement("span", { style: { width: 20 } }, "\u00A0")),
        } }));
};
var PREFIX = 'RaLoadingInput';
// make it look just like a regular input, even though it's disabled
// because the loading indicator is enough
var StyledResettableTextField = styled(ResettableTextField, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiInputLabel-root.Mui-disabled': {
            color: theme.palette.text.secondary,
        },
        '& .MuiFilledInput-root.Mui-disabled': {
            background: theme.palette.mode === 'light'
                ? 'rgba(0, 0, 0, 0.04)'
                : 'rgba(255, 255, 255, 0.09)',
        },
        '& .MuiFilledInput-root.Mui-disabled:before': {
            borderBottomStyle: 'solid',
        },
    });
});
//# sourceMappingURL=LoadingInput.js.map