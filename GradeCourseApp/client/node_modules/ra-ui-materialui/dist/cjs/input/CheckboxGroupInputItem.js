"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckboxGroupInputItemClasses = exports.CheckboxGroupInputItem = void 0;
var React = __importStar(require("react"));
var styles_1 = require("@mui/material/styles");
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var ra_core_1 = require("ra-core");
var CheckboxGroupInputItem = function (props) {
    var id = props.id, choice = props.choice, className = props.className, fullWidth = props.fullWidth, onChange = props.onChange, optionText = props.optionText, optionValue = props.optionValue, options = props.options, translateChoice = props.translateChoice, value = props.value, labelPlacement = props.labelPlacement, rest = __rest(props, ["id", "choice", "className", "fullWidth", "onChange", "optionText", "optionValue", "options", "translateChoice", "value", "labelPlacement"]);
    var _a = (0, ra_core_1.useChoices)({
        optionText: optionText,
        optionValue: optionValue,
        translateChoice: translateChoice,
    }), getChoiceText = _a.getChoiceText, getChoiceValue = _a.getChoiceValue;
    var choiceName = getChoiceText(choice);
    return (React.createElement(StyledFormControlLabel, { htmlFor: "".concat(id, "_").concat(getChoiceValue(choice)), key: getChoiceValue(choice), onChange: onChange, className: className, control: React.createElement(Checkbox_1.default, __assign({ id: "".concat(id, "_").concat(getChoiceValue(choice)), color: "primary", className: exports.CheckboxGroupInputItemClasses.checkbox, checked: value
                ? value.find(function (v) { return v == getChoiceValue(choice); }) !== // eslint-disable-line eqeqeq
                    undefined
                : false, value: String(getChoiceValue(choice)) }, options, rest)), label: choiceName, labelPlacement: labelPlacement }));
};
exports.CheckboxGroupInputItem = CheckboxGroupInputItem;
var PREFIX = 'RaCheckboxGroupInputItem';
exports.CheckboxGroupInputItemClasses = {
    checkbox: "".concat(PREFIX, "-checkbox"),
};
var StyledFormControlLabel = (0, styles_1.styled)(FormControlLabel_1.default, {
    name: PREFIX,
    overridesResolver: function (props, styles) { return styles.root; },
})((_a = {},
    _a["& .".concat(exports.CheckboxGroupInputItemClasses.checkbox)] = {
        height: 32,
    },
    _a));
//# sourceMappingURL=CheckboxGroupInputItem.js.map