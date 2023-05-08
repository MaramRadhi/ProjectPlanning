var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { FileInput, FileInputClasses } from './FileInput';
export var ImageInput = function (props) { return (React.createElement(StyledFileInput, __assign({ labelMultiple: "ra.input.image.upload_several", labelSingle: "ra.input.image.upload_single" }, props))); };
var PREFIX = 'RaImageInput';
var StyledFileInput = styled(FileInput, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            width: '100%'
        },
        _b["& .".concat(FileInputClasses.dropZone)] = {
            background: theme.palette.background.default,
            borderRadius: theme.shape.borderRadius,
            fontFamily: theme.typography.fontFamily,
            cursor: 'pointer',
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.getContrastText(theme.palette.background.default),
        },
        _b["& .".concat(FileInputClasses.removeButton)] = {
            display: 'inline-block',
            position: 'relative',
            '& button': {
                position: 'absolute',
                top: theme.spacing(1),
                right: theme.spacing(1),
                minWidth: theme.spacing(2),
                opacity: 0,
            },
            '&:hover button': {
                opacity: 1,
            },
        },
        _b);
});
//# sourceMappingURL=ImageInput.js.map