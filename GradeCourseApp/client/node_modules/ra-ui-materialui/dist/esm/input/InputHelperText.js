import * as React from 'react';
import { isValidElement } from 'react';
import { useTranslate, ValidationError, } from 'ra-core';
export var InputHelperText = function (props) {
    var helperText = props.helperText, touched = props.touched, error = props.error;
    var translate = useTranslate();
    if (touched && error) {
        if (error.message) {
            return React.createElement(ValidationError, { error: error });
        }
        return React.createElement(React.Fragment, null, error);
    }
    if (helperText === false) {
        return null;
    }
    if (isValidElement(helperText)) {
        return helperText;
    }
    if (typeof helperText === 'string') {
        return React.createElement(React.Fragment, null, translate(helperText, { _: helperText }));
    }
    // MUI's HelperText cannot reserve space unless we pass a single
    // space as child, which isn't possible when the child is a component.
    // Therefore, we must reserve the space ourselves by passing the same
    // markup as MUI.
    // @see https://github.com/mui-org/material-ui/blob/62e439b7022d519ab638d65201e204b59b77f8da/packages/material-ui/src/FormHelperText/FormHelperText.js#L85-L90
    return React.createElement("span", { dangerouslySetInnerHTML: defaultInnerHTML });
};
var defaultInnerHTML = { __html: '&#8203;' };
//# sourceMappingURL=InputHelperText.js.map