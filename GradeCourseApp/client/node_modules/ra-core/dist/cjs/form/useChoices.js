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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChoices = void 0;
var React = __importStar(require("react"));
var react_1 = require("react");
var get_1 = __importDefault(require("lodash/get"));
var i18n_1 = require("../i18n");
var controller_1 = require("../controller");
/*
 * Returns helper functions for choices handling.
 *
 * @param optionText Either a string defining the property to use to get the choice text, a function or a React element
 * @param optionValue The property to use to get the choice value
 * @param translateChoice A boolean indicating whether to option text should be translated
 *
 * @returns An object with helper functions:
 * - getChoiceText: Returns the choice text or a React element
 * - getChoiceValue: Returns the choice value
 */
var useChoices = function (_a) {
    var _b = _a.optionText, optionText = _b === void 0 ? 'name' : _b, _c = _a.optionValue, optionValue = _c === void 0 ? 'id' : _c, _d = _a.disableValue, disableValue = _d === void 0 ? 'disabled' : _d, _e = _a.translateChoice, translateChoice = _e === void 0 ? true : _e;
    var translate = (0, i18n_1.useTranslate)();
    var getChoiceText = (0, react_1.useCallback)(function (choice) {
        if ((0, react_1.isValidElement)(optionText)) {
            return (React.createElement(controller_1.RecordContextProvider, { value: choice }, optionText));
        }
        var choiceName = typeof optionText === 'function'
            ? optionText(choice)
            : (0, get_1.default)(choice, optionText);
        return (0, react_1.isValidElement)(choiceName)
            ? choiceName
            : translateChoice
                ? translate(String(choiceName), { _: choiceName })
                : String(choiceName);
    }, [optionText, translate, translateChoice]);
    var getChoiceValue = (0, react_1.useCallback)(function (choice) { return (0, get_1.default)(choice, optionValue); }, [
        optionValue,
    ]);
    var getDisableValue = (0, react_1.useCallback)(function (choice) { return (0, get_1.default)(choice, disableValue); }, [
        disableValue,
    ]);
    return {
        getChoiceText: getChoiceText,
        getChoiceValue: getChoiceValue,
        getDisableValue: getDisableValue,
    };
};
exports.useChoices = useChoices;
//# sourceMappingURL=useChoices.js.map