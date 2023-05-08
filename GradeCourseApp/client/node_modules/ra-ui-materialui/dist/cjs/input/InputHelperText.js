"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputHelperText = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var ra_core_1 = require("ra-core");
var InputHelperText = function (props) {
    var helperText = props.helperText, touched = props.touched, error = props.error;
    var translate = (0, ra_core_1.useTranslate)();
    if (touched && error) {
        if (error.message) {
            return React.createElement(ra_core_1.ValidationError, { error: error });
        }
        return React.createElement(React.Fragment, null, error);
    }
    if (helperText === false) {
        return null;
    }
    if ((0, react_1.isValidElement)(helperText)) {
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
exports.InputHelperText = InputHelperText;
var defaultInnerHTML = { __html: '&#8203;' };
//# sourceMappingURL=InputHelperText.js.map